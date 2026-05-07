# One-shot refactor: move page bodies from src/pages/*.astro into
# src/components/pages/*Page.astro, and replace the originals (and their
# /fr/ siblings) with thin entry shells. Safe to re-run: it overwrites.

$ErrorActionPreference = 'Stop'

$pages = @(
    @{ kebab = 'index';                            pascal = 'HomePage' }
    @{ kebab = 'about-us';                         pascal = 'AboutUsPage' }
    @{ kebab = 'affiliates';                       pascal = 'AffiliatesPage' }
    @{ kebab = 'app-for-volunteers';               pascal = 'AppForVolunteersPage' }
    @{ kebab = 'contact';                          pascal = 'ContactPage' }
    @{ kebab = 'cookie';                           pascal = 'CookiePage' }
    @{ kebab = 'demo';                             pascal = 'DemoPage' }
    @{ kebab = 'demo-confirmed';                   pascal = 'DemoConfirmedPage' }
    @{ kebab = 'features';                         pascal = 'FeaturesPage' }
    @{ kebab = 'integrations';                     pascal = 'IntegrationsPage' }
    @{ kebab = 'plans';                            pascal = 'PlansPage' }
    @{ kebab = 'privacy';                          pascal = 'PrivacyPage' }
    @{ kebab = 'terms';                            pascal = 'TermsPage' }
    @{ kebab = 'video';                            pascal = 'VideoPage' }
    @{ kebab = 'volunteer-application-forms';      pascal = 'VolunteerApplicationFormsPage' }
    @{ kebab = 'volunteer-communications';         pascal = 'VolunteerCommunicationsPage' }
    @{ kebab = 'volunteer-database';               pascal = 'VolunteerDatabasePage' }
    @{ kebab = 'volunteer-hour-tracking';          pascal = 'VolunteerHourTrackingPage' }
    @{ kebab = 'volunteer-onboarding-software';    pascal = 'VolunteerOnboardingSoftwarePage' }
    @{ kebab = 'volunteer-recognition';            pascal = 'VolunteerRecognitionPage' }
    @{ kebab = 'volunteer-scheduling-software';    pascal = 'VolunteerSchedulingSoftwarePage' }
)

$root = Resolve-Path "$PSScriptRoot\.."
$pagesDir   = Join-Path $root 'src\pages'
$frDir      = Join-Path $pagesDir 'fr'
$compDir    = Join-Path $root 'src\components\pages'

if (-not (Test-Path $compDir)) { New-Item -ItemType Directory -Force -Path $compDir | Out-Null }

# Path-rewrite map: applied IN ORDER. The components/pages/ depth means
# every "../" relative import from a page file becomes "../../", except
# imports under "../components/" which become "../" (now siblings).
$rewrites = @(
    @{ from = 'from "../layouts/';    to = 'from "../../layouts/' }
    @{ from = "from '../layouts/";    to = "from '../../layouts/" }
    @{ from = 'from "../i18n';        to = 'from "../../i18n' }
    @{ from = "from '../i18n";        to = "from '../../i18n" }
    @{ from = 'from "../lib/';        to = 'from "../../lib/' }
    @{ from = "from '../lib/";        to = "from '../../lib/" }
    @{ from = 'from "../styles/';     to = 'from "../../styles/' }
    @{ from = "from '../styles/";     to = "from '../../styles/" }
    @{ from = 'from "../utils/';      to = 'from "../../utils/' }
    @{ from = "from '../utils/";      to = "from '../../utils/" }
    @{ from = 'from "../content/';    to = 'from "../../content/' }
    @{ from = "from '../content/";    to = "from '../../content/" }
    @{ from = 'from "../data/';       to = 'from "../../data/' }
    @{ from = "from '../data/";       to = "from '../../data/" }
    # Components: /pages/* used "../components/X" — now siblings → "../X"
    @{ from = 'from "../components/'; to = 'from "../' }
    @{ from = "from '../components/"; to = "from '../" }
    # Side-effect CSS imports (no "from")
    @{ from = 'import "../styles/';   to = 'import "../../styles/' }
    @{ from = "import '../styles/";   to = "import '../../styles/" }
)

foreach ($p in $pages) {
    $kebab  = $p.kebab
    $pascal = $p.pascal

    $srcPagePath = Join-Path $pagesDir "$kebab.astro"
    $frPagePath  = Join-Path $frDir   "$kebab.astro"
    $compPath    = Join-Path $compDir "$pascal.astro"

    if (-not (Test-Path $srcPagePath)) {
        Write-Warning "missing EN page: $srcPagePath -- skipping"
        continue
    }

    # Read the EN page as a single string (preserve content exactly).
    $body = [System.IO.File]::ReadAllText($srcPagePath)

    # Apply rewrites.
    foreach ($r in $rewrites) {
        $body = $body.Replace($r.from, $r.to)
    }

    # Write the component.
    [System.IO.File]::WriteAllText($compPath, $body)

    # Build the thin EN entry shell.
    $enShell = @"
---
import $pascal from "../components/pages/$pascal.astro";
---

<$pascal locale="en" />
"@
    [System.IO.File]::WriteAllText($srcPagePath, $enShell)

    # Build the thin FR entry shell.
    if (Test-Path $frPagePath) {
        $frShell = @"
---
import $pascal from "../../components/pages/$pascal.astro";
---

<$pascal locale="fr" />
"@
        [System.IO.File]::WriteAllText($frPagePath, $frShell)
    } else {
        Write-Warning "no FR mirror for $kebab"
    }

    Write-Host "ok  $kebab -> components/pages/$pascal.astro"
}

Write-Host ""
Write-Host "done."
