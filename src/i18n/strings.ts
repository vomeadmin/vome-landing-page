/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  CENTRAL i18n STRINGS — single source of truth for every user-facing line
 *  on the marketing site. All English + French copy lives here.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  HOW THIS FILE WORKS
 *  -------------------
 *  - Every leaf is `{ en, fr }`. Use `t(strings.section.key, locale)` from
 *    components/pages to read the right locale at render time.
 *  - The structure is namespaced by section (hero, nav, footer, plans, etc.).
 *    Find the section, find the key, edit the string. That's it.
 *  - Pages choose their locale via the `locale` prop on <Layout/>. Components
 *    accept `locale?: Locale` and pass it down.
 *  - To correct a French translation, edit the `fr:` value next to the
 *    matching English source.
 *
 *  ADDING A NEW LANGUAGE (e.g. Spanish)
 *  ------------------------------------
 *  1. Add `"es"` to `LOCALES` and to the `Locale` type.
 *  2. Add `es: "..."` next to every `en/fr` pair below. Missing keys fall
 *     back to English at runtime via `t()`.
 *  3. Update `localeFromPath()` and `switchLocaleHref()` in `index.ts` to
 *     recognise `/es/...`.
 *  4. Create `src/pages/es/<page>.astro` thin wrappers that pass
 *     `locale="es"` to <Layout/>.
 *
 *  WHAT'S OUT OF SCOPE
 *  -------------------
 *  - Legal page bodies (PrivacyBody, TermsBody, CookieBody): not translated;
 *    French routes fall back to English chrome + English copy. The contact
 *    form has a French-documentation note pointing users to email us.
 *  - Blog content: not translated.
 *  - Glossary content: not translated.
 *  - Sample names / dates inside product UI mockups (HeroMockup, FeatureTabs
 *    panels): kept as decorative placeholders, not translated. Mockup labels
 *    that demonstrate product UI (e.g. "Step 1", "Interview") ARE translated.
 *
 *  Source of approved FR copy: vome-react/src/translations/landingpage.js
 *  and existing pre-translated routes under /src/pages/fr/.
 */

export type Locale = "en" | "fr";

export const LOCALES: readonly Locale[] = ["en", "fr"] as const;
export const DEFAULT_LOCALE: Locale = "en";

export const strings = {
  // ─────────────────────────────────────────────────────────────────────────
  //  SHARED — language switcher labels, generic words
  // ─────────────────────────────────────────────────────────────────────────
  common: {
    language_switcher_en: { en: "English", fr: "Anglais" },
    language_switcher_fr: { en: "Français", fr: "Français" },
    change_language: { en: "Change language", fr: "Changer de langue" },
    home: { en: "Home", fr: "Accueil" },
    back_to_home: { en: "Back to homepage", fr: "Retour à l'accueil" },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  NAV — top bar + main nav
  // ─────────────────────────────────────────────────────────────────────────
  nav: {
    features: { en: "Features", fr: "Fonctionnalités" },
    plans: { en: "Plans", fr: "Forfaits" },
    about: { en: "About", fr: "À propos" },
    contact: { en: "Contact", fr: "Contact" },
    login: { en: "Login", fr: "Connexion" },
    book_demo: { en: "Book a demo", fr: "Réserver une démo" },
    signup_free: { en: "Sign up for Free", fr: "S'inscrire gratuitement" },
    signup_volunteer: { en: "Sign up as a volunteer", fr: "S'inscrire comme bénévole" },
    signup_organization: { en: "Sign up as an organization", fr: "S'inscrire comme organisation" },
    menu_section_pages: { en: "Pages", fr: "Pages" },
    menu_section_signup: { en: "Get started", fr: "Commencer" },
    menu_section_language: { en: "Language", fr: "Langue" },
    vome_home: { en: "Vome home", fr: "Accueil Vome" },
    toggle_navigation: { en: "Toggle navigation", fr: "Ouvrir/fermer la navigation" },
    features_menu_aria: { en: "Open features menu", fr: "Ouvrir le menu des fonctionnalités" },
    features_view_all: { en: "View all features", fr: "Voir toutes les fonctionnalités" },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  HERO (homepage — centered hero with full mockup)
  // ─────────────────────────────────────────────────────────────────────────
  hero: {
    eyebrow: { en: "4.6 ★ on Capterra, GetApp & G2", fr: "4,6 ★ sur Capterra, GetApp et G2" },
    headline_part_1: { en: "The volunteer management software", fr: "Le logiciel de gestion des bénévoles que" },
    headline_accent: { en: "your volunteers and staff", fr: "vos bénévoles et votre personnel" },
    headline_part_2: { en: "actually want to use", fr: "veulent vraiment utiliser" },
    // Inline <strong> tags are rendered via Astro's `set:html` directive in the
    // hero. This is the standard i18n pattern when emphasis falls on different
    // words across languages — translators move the <strong> wrapper inside
    // the sentence wherever the emphasis works grammatically. Only edit
    // content here (no user input is ever interpolated), so set:html is safe.
    sub: {
      en: "From a single coordinator to teams running programs across multiple sites, Vome <strong>automates the manual work</strong> behind onboarding, scheduling, tracking and communication. All in one platform, with unlimited volunteers on every plan.",
      fr: "Du coordonnateur unique aux équipes gérant des programmes à travers plusieurs sites, Vome <strong>automatise le travail manuel</strong> derrière l'intégration, la planification, le suivi et la communication. Tout sur une seule plateforme, avec un nombre illimité de bénévoles sur tous les forfaits.",
    },
    cta_primary: { en: "Sign up for Free", fr: "S'inscrire gratuitement" },
    cta_secondary: { en: "Book a demo", fr: "Réserver une démo" },
    meta_free_plan: { en: "Free plan + 30-day trials on paid", fr: "Forfait gratuit + essai 30 jours sur payant" },
    meta_setup: { en: "Set up in minutes", fr: "Prêt en quelques minutes" },
    meta_compliance: { en: "HIPAA, GDPR & SOC 2", fr: "HIPAA, RGPD et SOC 2" },
    fly_hours: { en: "Hours Logged: 1h 00", fr: "Heures enregistrées : 1h 00" },
    fly_party: { en: "Party size:", fr: "Taille du groupe :" },
    fly_party_count: { en: "3 people", fr: "3 personnes" },
    fly_new_message: { en: "New message", fr: "Nouveau message" },
    fly_message_preview: { en: "Celine: See you Saturday!", fr: "Céline : À samedi !" },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  PARTNERS — logo marquee
  // ─────────────────────────────────────────────────────────────────────────
  partners: {
    eyebrow: { en: "Trusted by 1000+ amazing organizations", fr: "La confiance de 1000+ organisations extraordinaires" },
    aria_label: { en: "Trusted by", fr: "Ils nous font confiance" },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  FEATURE TABS — intro + 6 tabs (recruitment, onboarding, scheduling,
  //  hours, data & reports, communications)
  // ─────────────────────────────────────────────────────────────────────────
  feature_tabs: {
    intro_h2_part1: { en: "Everything volunteer managers need.", fr: "Tout ce dont les gestionnaires de bénévoles ont besoin." },
    intro_h2_accent: { en: "Built to work together.", fr: "Conçu pour fonctionner ensemble." },
    intro_sub: {
      en: "Vome is the complete volunteer management platform. One easy-to-use system that eliminates manual work at every step, from the first application to the final report.",
      fr: "Vome est la plateforme complète de gestion des bénévoles. Un système facile à utiliser qui élimine le travail manuel à chaque étape, de la première candidature au rapport final.",
    },
    intro_video_btn: { en: "Watch a 2-minute video", fr: "Regarder une vidéo de 2 minutes" },

    tab_recruitment: { en: "Recruitment", fr: "Recrutement" },
    tab_onboarding: { en: "Onboarding", fr: "Intégration" },
    tab_scheduling: { en: "Scheduling", fr: "Planification" },
    tab_hours: { en: "Hour tracking", fr: "Suivi des heures" },
    tab_data: { en: "Data & reports", fr: "Données et rapports" },
    tab_comms: { en: "Communications", fr: "Communications" },

    // ── Panel: Recruitment ──
    rec_headline: { en: "Build the recruitment process you need.", fr: "Mettez en place le processus de recrutement dont vous avez besoin." },
    rec_f1_title: { en: "Custom application forms", fr: "Formulaires de candidature personnalisés" },
    rec_f1_body: {
      en: "Add questions, request file uploads, collect e-signatures, embed shift calendars — all from one form builder.",
      fr: "Ajoutez des questions, demandez des téléversements de fichiers, recueillez des signatures électroniques, intégrez les calendriers de quarts — le tout depuis un seul concepteur de formulaire.",
    },
    rec_f2_title: { en: "One-click apply links", fr: "Liens de candidature en un clic" },
    rec_f2_body: {
      en: "Share direct links to opportunities, forms, or your public page. Embed on your site, post on social, or share it anywhere.",
      fr: "Partagez des liens directs vers vos opportunités, formulaires ou votre page publique. Intégrez-les sur votre site, publiez-les sur les réseaux sociaux ou partagez-les partout.",
    },
    rec_f3_title: { en: "Recruitment automations", fr: "Automatisations de recrutement" },
    rec_f3_body: {
      en: "Automations move applicants forward on their own and keep your system organized when knowing it's your turn to perform an admin task. Triggered by form response automations, visibility rules, and eligibility requirements.",
      fr: "Les automatisations font avancer les dossiers des candidats de manière autonome et permettent de maintenir votre système bien organisé en vous signalant quand c'est à vous d'effectuer une tâche administrative. Elles sont déclenchées par les réponses aux formulaires, les règles de visibilité et les critères d'éligibilité.",
    },
    rec_f4_title: { en: "Automated status updates", fr: "Mises à jour de statut automatisées" },
    rec_f4_body: {
      en: "Email and app notifications keep volunteers in the loop through every step of the application process, by eliminating redundant back-and-forth, and without any administrative intervention.",
      fr: "Les notifications par courriel et via l'appli tiennent les bénévoles informés à chaque étape du processus de candidature, en éliminant les échanges redondants, et sans aucune intervention administrative.",
    },

    // ── Panel: Onboarding ──
    onb_headline_l1: { en: "Onboard volunteers through custom workflows.", fr: "Intégrez les bénévoles avec des flux personnalisés." },
    onb_headline_l2: { en: "No manual follow-up.", fr: "Aucun suivi manuel." },
    onb_f1_title: { en: "Build any onboarding flow, your way", fr: "Construisez n'importe quel flux d'intégration, à votre façon" },
    onb_f1_body: {
      en: "Combine forms, fillable PDFs, e-signatures, training modules, checklists, and file uploads into a single guided sequence. Organize into folders by program, department, or season.",
      fr: "Combinez des formulaires, PDF interactifs, signatures électroniques, modules de formation, listes de contrôle et téléversements en une seule séquence guidée. Organisez-les en dossiers par programme, département ou saison.",
    },
    onb_f2_title: { en: "Fillable PDFs, built in", fr: "PDF interactifs intégrés" },
    onb_f2_body: {
      en: "Waivers, releases, policies, and compliance forms. Signed and submitted inside the sequence, with no third-party tools, printing, scanning, or re-uploading needed.",
      fr: "Décharges, autorisations, politiques et formulaires de conformité. Signés et soumis directement dans la séquence, sans outil tiers, ni impression, numérisation ou téléversement supplémentaire.",
    },
    onb_f3_title: { en: "Control every step", fr: "Contrôlez chaque étape" },
    onb_f3_body: {
      en: "Due dates, reminders, skip rules, auto-expiration, and visibility settings per step. Choose whether volunteers propel themselves to the next step or admins advance them.",
      fr: "Dates d'échéance, rappels, règles de saut, expiration automatique et paramètres de visibilité par étape. Choisissez si les bénévoles se propulsent eux-mêmes à l'étape suivante ou si les administrateurs les font progresser.",
    },
    onb_f4_title: { en: "Credentialing and compliance, handled", fr: "Accréditation et conformité, gérées" },
    onb_f4_body: {
      en: "Background check integrations, auto-expiring renewals for certifications and waivers, and audit-ready tracking at every step.",
      fr: "Intégrations de vérification d'antécédents, renouvellements automatiques pour les certifications et décharges, et suivi prêt pour les audits à chaque étape.",
    },

    // ── Panel: Scheduling ──
    sch_headline: { en: "1.25M+ shifts scheduled and counting.", fr: "Plus de 1,25 M de quarts planifiés et ça continue." },
    sch_panel_sub: {
      en: "One-off events. Recurring tasks. Multi-site calendars. Vome handles it all.",
      fr: "Événements uniques. Tâches récurrentes. Calendriers multi-sites. Vome gère le tout.",
    },
    sch_f1_title: { en: "Shift management at every scale", fr: "Gestion des quarts à toute échelle" },
    sch_f1_body: {
      en: "Create single shifts, recurring schedules, or import entire calendars from a spreadsheet. Use shift templates and apply them across programs for quick and easy setup. Mass assign, edit, and cancel from one calendar view.",
      fr: "Créez des quarts uniques, des horaires récurrents, ou importez des calendriers complets depuis une feuille de calcul. Utilisez des modèles de quart et appliquez-les à travers vos programmes pour une configuration rapide et facile. Affectez, modifiez et annulez en masse depuis une seule vue calendrier.",
    },
    sch_f2_title: { en: "Flexible booking, your rules", fr: "Réservation flexible, selon vos règles" },
    sch_f2_body: {
      en: "Choose instant booking or admin approval. Open shifts to everyone, or make them private and visible only to tagged volunteers. Let volunteers propose their own times with flexible scheduling.",
      fr: "Choisissez la réservation instantanée ou l'approbation par un administrateur. Ouvrez les quarts à tous, ou rendez-les privés et visibles uniquement aux bénévoles étiquetés. Permettez aux bénévoles de proposer leurs propres plages avec la planification flexible.",
    },
    sch_f3_title: { en: "Group reservations for corporate and team events", fr: "Réservations de groupe pour événements corporatifs et d'équipe" },
    sch_f3_body: {
      en: "Volunteers reserve multiple spots in a single action on behalf of a team, a family, or a corporate group. Hours and participation roll up at the group level, ready for reporting.",
      fr: "Les bénévoles réservent plusieurs places en une seule action pour une équipe, une famille ou un groupe corporatif. Les heures et la participation sont consolidées au niveau du groupe, prêtes pour les rapports.",
    },
    sch_f4_title: { en: "Reminders, confirmations, and calendar sync", fr: "Rappels, confirmations et synchronisation de calendrier" },
    sch_f4_body: {
      en: "Configurable shift notifications send reminders before, during, and after each shift. Volunteers confirm, join waitlists, and sync shifts to Google, Outlook, or Apple Calendar.",
      fr: "Des notifications de quart configurables envoient des rappels avant, pendant et après chaque quart. Les bénévoles confirment, rejoignent les listes d'attente et synchronisent leurs quarts avec les calendriers Google, Outlook ou Apple.",
    },

    // ── Panel: Hour tracking ──
    hrs_headline: { en: "So many ways to track volunteer hours. Pick what fits your program.", fr: "Tant de façons de suivre les heures des bénévoles. Choisissez ce qui convient à votre programme." },
    hrs_f1_title: { en: "Multiple ways to track hours", fr: "Plusieurs façons de suivre les heures" },
    hrs_f1_body: {
      en: "QR scan, tap-to-check-in via the app, on-site kiosk, or fully automate check-in/out. Pick one, or mix different methods across your different volunteer programs.",
      fr: "Code QR, check-in par tape via l'appli, borne sur place, ou automatisez complètement le check-in/out. Choisissez-en une, ou mélangez les méthodes selon vos différents programmes.",
    },
    hrs_f2_title: { en: "Proximity validation for attendance integrity", fr: "Validation de proximité pour l'intégrité de la présence" },
    hrs_f2_body: {
      en: "Require volunteers to be physically within a defined radius to check in or out. Customizable by program. Prevents remote check-ins and protects program data.",
      fr: "Exigez que les bénévoles soient physiquement dans un rayon défini pour effectuer leur check-in ou check-out. Personnalisable par programme. Empêche les check-ins à distance et protège les données du programme.",
    },
    hrs_f3_title: { en: "Walk-ins, group reservations, and off-site hours", fr: "Bénévoles spontanés, réservations de groupe et heures hors site" },
    hrs_f3_body: {
      en: "On-site kiosks handle check-in and check-out for everyone on a shift, with an optional \"Join a shift\" mode for walk-ins who want to sign up on the spot. Group reservations roll up at the group level for reporting. Volunteers can also submit hour claims for work they did off-platform.",
      fr: "Les bornes sur place gèrent le check-in et le check-out de tous les bénévoles d'un quart, avec un mode optionnel « Joindre un quart » pour les arrivées spontanées qui souhaitent s'inscrire sur place. Les réservations de groupe se consolident au niveau du groupe pour les rapports. Les bénévoles peuvent aussi soumettre des déclarations d'heures pour leur travail hors plateforme.",
    },
    hrs_f4_title: { en: "Audit-ready hour reports", fr: "Rapports d'heures prêts pour les audits" },
    hrs_f4_body: {
      en: "Shifts and hours by volunteer, a complete reservations and hours log, and custom database exports. Every hour traced to a person, an opportunity, and a shift.",
      fr: "Quarts et heures par bénévole, un journal complet des réservations et des heures, et des exportations personnalisées de la base de données. Chaque heure est liée à une personne, une opportunité et un quart.",
    },

    // ── Panel: Data & reports ──
    data_headline: { en: "Import your data. Organize it your way. Report in just a few clicks.", fr: "Importez vos données. Organisez-les à votre façon. Produisez vos rapports en quelques clics." },
    data_f1_title: { en: "Turnkey data import and migration", fr: "Importation et migration de données clés en main" },
    data_f1_body: {
      en: "Move your volunteer records into Vome in minutes. Bulk import from any other system, map custom fields to match your existing structure, and invite volunteers to claim their profiles. Duplicate handling built in.",
      fr: "Migrez vos dossiers de bénévoles dans Vome en quelques minutes. Importation en masse depuis tout autre système, association de champs personnalisés à votre structure existante, et invitation aux bénévoles à réclamer leur profil. Gestion des doublons intégrée.",
    },
    data_f2_title: { en: "A database that flexes to your program", fr: "Une base de données qui s'adapte à votre programme" },
    data_f2_body: {
      en: "Segment volunteers by tag, program, or location with unlimited custom fields. Build and save custom views that filter and organize data any way you need. Give each admin access only to the data that belongs to them. Super admins see everything. Site managers see their site.",
      fr: "Segmentez les bénévoles par tag, programme ou lieu avec un nombre illimité de champs personnalisés. Créez et sauvegardez des vues personnalisées qui filtrent et organisent les données comme vous le voulez. Donnez à chaque administrateur l'accès uniquement aux données qui le concernent. Les super administrateurs voient tout. Les gestionnaires de site ne voient que leur site.",
    },
    data_f3_title: { en: "Ready-made reports for key stakeholders", fr: "Rapports prêts à l'emploi pour les parties prenantes clés" },
    data_f3_body: {
      en: "Hours by volunteer, attendance logs, sequence completion, form submissions, and check-in history. Every report you need for funders, boards, and audits, ready in seconds.",
      fr: "Heures par bénévole, journaux de présence, complétion de séquences, soumissions de formulaires et historique des pointages. Tous les rapports nécessaires pour vos bailleurs de fonds, conseils d'administration et audits, prêts en quelques secondes.",
    },
    data_f4_title: { en: "Analytics dashboards at a glance", fr: "Tableaux de bord analytiques en un coup d'œil" },
    data_f4_body: {
      en: "Visualize hours, shifts, onboarding progress, form completion, and custom field trends. Feel the pulse of your program without running a single report.",
      fr: "Visualisez les heures, les quarts, la progression de l'intégration, la complétion des formulaires et les tendances des champs personnalisés. Ressentez le pouls de votre programme sans exécuter un seul rapport.",
    },

    // ── Panel: Communications ──
    com_headline: { en: "Every way you need to communicate, in one place.", fr: "Toutes les façons de communiquer, au même endroit." },
    com_f1_title: { en: "Native instant messaging", fr: "Messagerie instantanée native" },
    com_f1_body: {
      en: "One-on-one instant messaging, custom group chats, and auto-generated chatrooms for every shift and opportunity. No messaging apps. No email chains. Volunteers talk to admins and each other right inside the platform.",
      fr: "Messages en tête-à-tête, conversations de groupe personnalisées et salons générés automatiquement pour chaque quart et opportunité. Pas d'applications de messagerie. Pas de chaînes de courriels. Les bénévoles communiquent avec les administrateurs et entre eux directement dans la plateforme.",
    },
    com_f2_title: { en: "Bulk email built for campaigns", fr: "Courriels de masse conçus pour les campagnes" },
    com_f2_body: {
      en: "Send personalized emails to volunteers through Vome's server, or connect your own Google or Outlook account to send from your domain. Build reusable email templates with dynamic variables. Target by group, tag, program, or any custom field.",
      fr: "Envoyez des courriels personnalisés aux bénévoles via le serveur de Vome, ou connectez votre propre compte Google ou Outlook pour envoyer depuis votre domaine. Créez des modèles de courriels réutilisables avec des variables dynamiques. Ciblez par groupe, tag, programme ou tout champ personnalisé.",
    },
    com_f3_title: { en: "Automate the messages you send every week", fr: "Automatisez les messages que vous envoyez chaque semaine" },
    com_f3_body: {
      en: "Birthday wishes, shift reminders, onboarding follow-ups, survey invitations, award notifications, and confirmation requests. Set the rule once. Vome handles the sending forever.",
      fr: "Vœux d'anniversaire, rappels de quart, suivis d'intégration, invitations à des sondages, notifications de prix et demandes de confirmation. Définissez la règle une fois. Vome s'occupe de l'envoi pour toujours.",
    },
    com_f4_title: { en: "Full visibility across your team's outgoing messages", fr: "Visibilité complète sur les messages sortants de votre équipe" },
    com_f4_body: {
      en: "Every email and notification in one dashboard. See what was sent, to whom, when, and by which admin. Share email templates across the team so everyone's communication stays consistent.",
      fr: "Chaque courriel et notification dans un tableau de bord unique. Voyez ce qui a été envoyé, à qui, quand et par quel administrateur. Partagez les modèles de courriel à travers l'équipe pour que la communication reste cohérente.",
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  FEATURES PAGE — /features standalone overview page (hero + module grid)
  // ─────────────────────────────────────────────────────────────────────────
  features_page: {
    page_title: {
      en: "Features | Complete volunteer management platform | Vome",
      fr: "Fonctionnalités | Plateforme complète de gestion des bénévoles | Vome",
    },
    page_description: {
      en: "From first application to final report, Vome connects every stage of your volunteer program in one integrated platform.",
      fr: "De la première candidature au rapport final, Vome relie chaque étape de votre programme bénévole dans une seule plateforme intégrée.",
    },

    hero_eyebrow: { en: "All-in-one volunteer management", fr: "Gestion des bénévoles tout-en-un" },
    // Headline split: part1 | accent (orange) | part2. Adjust placement of the
    // accent in FR if a more natural translation requires re-ordering.
    hero_h1_part1: { en: "One ", fr: "Une " },
    hero_h1_accent: { en: "connected platform", fr: "plateforme connectée" },
    hero_h1_part2: {
      en: " for every stage of volunteer management.",
      fr: " pour chaque étape de la gestion des bénévoles.",
    },
    // Sub copy is split into three rhythmic lines so the "Flexible" and
    // "Simple" promises each get their own beat instead of fighting for space
    // on the same wrapped line. Inline emphasis: <em> on each "your"/"vos"
    // lands the punch; <strong> on "Flexible"/"Simple" anchors each promise.
    // Rendered with Astro's set:html (no user input is interpolated).
    hero_sub_l1: {
      en: "<em>Your</em> onboarding flows, <em>your</em> scheduling rules, <em>your</em> hour tracking methods, <em>your</em> reports.",
      fr: "<em>Vos</em> flux d'intégration, <em>vos</em> règles de planification, <em>vos</em> méthodes de suivi des heures, <em>vos</em> rapports.",
    },
    hero_sub_l2: {
      en: "<strong>Flexible</strong> enough to match any workflow your organization needs.",
      fr: "Suffisamment <strong>flexible</strong> pour s'adapter à tout flux de travail dont votre organisation a besoin.",
    },
    hero_sub_l3: {
      en: "<strong>Simple</strong> enough to start using it today.",
      fr: "Assez <strong>simple</strong> pour commencer à l'utiliser dès aujourd'hui.",
    },
    hero_meta_unlimited: { en: "Unlimited volunteers", fr: "Bénévoles illimités" },
    hero_meta_apps: { en: "iOS, Android & Web", fr: "iOS, Android et Web" },
    hero_meta_trial: {
      en: "30-day free trial on paid plans",
      fr: "Essai gratuit de 30 jours sur les forfaits payants",
    },

    // Module short labels and one-line descriptors used inside the platform viz nodes.
    node_recruitment_title: { en: "Recruitment", fr: "Recrutement" },
    node_recruitment_desc: { en: "Applications & automations", fr: "Candidatures et automatisations" },
    node_onboarding_title: { en: "Onboarding", fr: "Intégration" },
    node_onboarding_desc: { en: "Guided workflows", fr: "Flux de travail guidés" },
    node_scheduling_title: { en: "Scheduling", fr: "Planification" },
    node_scheduling_desc: { en: "Shift management & self-scheduling", fr: "Gestion des quarts et auto-planification" },
    node_hours_title: { en: "Hour tracking", fr: "Suivi des heures" },
    node_hours_desc: { en: "QR, kiosk, tap & auto check-in/out", fr: "QR, borne, tape et auto pointage" },
    node_comms_title: { en: "Communications", fr: "Communications" },
    node_comms_desc: { en: "Chat, email & automations", fr: "Clavardage, courriel et automatisations" },
    node_data_title: { en: "Data & reports", fr: "Données et rapports" },
    node_data_desc: { en: "Your database, your way", fr: "Votre base de données, à votre façon" },
    node_recognition_title: { en: "Recognition", fr: "Reconnaissance" },
    node_recognition_desc: { en: "Custom challenges & awards", fr: "Défis et récompenses personnalisés" },
    node_app_title: { en: "Mobile app", fr: "Application mobile" },
    node_app_desc: { en: "iOS & Android", fr: "iOS et Android" },
    node_integrations_title: { en: "Integrations", fr: "Intégrations" },
    node_integrations_desc: { en: "Native, API, Zapier & MSFT Power Automate", fr: "Natif, API, Zapier et MSFT Power Automate" },

    // ── Modules grid section ────────────────────────────────────────────
    // Eight cards, one per module shown in the platform diagram. Card copy
    // is distilled from the per-plan feature comparison (strings.plans.*)
    // and the React landing pages for each module — see
    // vome-react/src/views/landingPage/feature{Onboarding,Hours,Schedule,…}/.
    // Keep the bullets concrete (a real Vome capability, not a generic
    // promise) so prospects can map each card back to the comparison table.
    modules_h2: { en: "Explore by module", fr: "Explorer par module" },
    modules_sub: {
      en: "Learn more about each feature module - the capabilities, the integrations, and the workflows your team can put to work today.",
      fr: "Apprenez-en plus sur chaque module - les fonctionnalités, les intégrations et les flux de travail que votre équipe peut mettre en place dès aujourd'hui.",
    },

    // Card 1 — Recruitment & applications
    card_recruitment_title: { en: "Recruitment & applications", fr: "Recrutement et candidatures" },
    card_recruitment_desc: {
      en: "Build modern, custom-branded forms and turn interest into ready-to-go applicants. No manual triage required.",
      fr: "Mettez en place des formulaires modernes à votre image et transformez l'intérêt en candidats prêts à contribuer. Sans triage manuel.",
    },
    card_recruitment_f1: { en: "Custom forms with conditional logic, e-signatures & file uploads", fr: "Formulaires personnalisés avec logique conditionnelle, signatures électroniques et téléversements" },
    card_recruitment_f2: { en: "Reusable form templates across opportunities", fr: "Modèles de formulaires réutilisables entre opportunités" },
    card_recruitment_f3: { en: "Recruitment automation workflows (auto-tag, auto-assign, status updates)", fr: "Flux d'automatisation de recrutement (étiquetage, affectation, mises à jour de statut)" },
    card_recruitment_f4: { en: "Direct shareable links, QR codes & embeddable widgets", fr: "Liens partageables, codes QR et widgets intégrables" },
    card_recruitment_link: { en: "Learn more about recruitment", fr: "En savoir plus sur le recrutement" },

    // Card 2 — Onboarding & screening
    card_onboarding_title: { en: "Onboarding & screening", fr: "Intégration et vérification" },
    card_onboarding_desc: {
      en: "Build any onboarding flow your program needs (interviews, training, waivers, background checks) in one guided sequence.",
      fr: "Mettez en place n'importe quel flux d'intégration (entrevues, formations, décharges, vérifications d'antécédents) dans une seule séquence guidée.",
    },
    card_onboarding_f1: { en: "Step-by-step sequences with optional volunteer self-tracking", fr: "Séquences étape par étape avec autosuivi optionnel pour le bénévole" },
    card_onboarding_f2: { en: "Sterling Volunteers background-check integration", fr: "Intégration des vérifications d'antécédents Sterling Volunteers" },
    card_onboarding_f3: { en: "SCORM Cloud E-learning, fillable PDFs & e-signatures", fr: "Apprentissage en ligne SCORM Cloud, PDF interactifs et signatures électroniques" },
    card_onboarding_f4: { en: "Auto-expiring renewals + audit-ready status tracking", fr: "Renouvellements à expiration automatique et suivi prêt pour les audits" },
    card_onboarding_link: { en: "Learn more about onboarding", fr: "En savoir plus sur l'intégration" },

    // Card 3 — Scheduling & shifts
    card_scheduling_title: { en: "Scheduling & shifts", fr: "Planification et quarts" },
    card_scheduling_desc: {
      en: "From a single shift to multi-site recurring programs. Vome scales scheduling to whatever your operation looks like.",
      fr: "D'un seul quart aux programmes récurrents multi-sites. Vome adapte la planification à l'envergure de vos opérations.",
    },
    card_scheduling_f1: { en: "Recurring & one-time shifts with bulk creation", fr: "Quarts récurrents et ponctuels avec création en lot" },
    card_scheduling_f2: { en: "Self-scheduling, instant booking, or admin-approval flows", fr: "Auto-planification, réservation instantanée ou approbation par admin" },
    card_scheduling_f3: { en: "Custom policies for capacity, cancellations & check-ins", fr: "Politiques personnalisées de capacité, annulations et pointage" },
    card_scheduling_f4: { en: "Calendar sync, exports, and reminders by app + email", fr: "Synchronisation calendrier, exports, rappels par app et courriel" },
    card_scheduling_link: { en: "Learn more about scheduling", fr: "En savoir plus sur la planification" },

    // Card 4 — Hour tracking & check-in
    card_hours_title: { en: "Hour tracking & check-in", fr: "Suivi des heures et pointage" },
    card_hours_desc: {
      en: "So many ways to track hours. Pick what fits each program: QR codes, kiosks, hour claims, or fully automated check-in & out.",
      fr: "Tant de façons de suivre les heures. Choisissez ce qui convient à chaque programme : codes QR, bornes, réclamations d'heures ou check-in/check-out automatique.",
    },
    card_hours_f1: { en: "QR-code or tap-to-check-in attendance tracking via the mobile app", fr: "Suivi de présence par code QR ou check-in par tape via l'appli" },
    card_hours_f2: { en: "Attendance kiosks to be used on any tablet, computer or phone", fr: "Bornes de présence à utiliser sur toute tablette, ordinateur ou téléphone" },
    card_hours_f3: { en: "Volunteer-submitted hour claims with admin approval", fr: "Déclarations d'heures soumises par les bénévoles avec approbation admin" },
    card_hours_f4: { en: "Bulk hour logging + integrated reservation & hours reports", fr: "Saisie d'heures en lot et rapports intégrés de réservations et d'heures" },
    card_hours_link: { en: "Learn more about hour tracking", fr: "En savoir plus sur le suivi des heures" },

    // Card 5 — Recognition (Enterprise+)
    card_recognition_title: { en: "Recognition", fr: "Reconnaissance" },
    card_recognition_desc: {
      en: "Reward and motivate your volunteers with auto-earned achievements and the custom awards your team designs.",
      fr: "Récompensez et motivez vos bénévoles avec des accomplissements gagnés automatiquement et les prix personnalisés conçus par votre équipe.",
    },
    card_recognition_f1: { en: "Built-in Vome achievements your volunteers earn out of the box", fr: "Accomplissements Vome intégrés que vos bénévoles gagnent dès le départ" },
    card_recognition_f2: { en: "Custom awards & badges your team designs", fr: "Prix et badges personnalisés conçus par votre équipe" },
    card_recognition_f3: { en: "Auto-earned based on hours, shifts & milestones", fr: "Gagnés automatiquement selon les heures, quarts et jalons" },
    card_recognition_f4: { en: "Visible on volunteer profiles, share-ready", fr: "Visibles sur les profils des bénévoles, prêts à partager" },
    card_recognition_link: { en: "Learn more about recognition", fr: "En savoir plus sur la reconnaissance" },

    // Card 6 — Communications
    card_comms_title: { en: "Communications", fr: "Communications" },
    card_comms_desc: {
      en: "Every channel volunteers actually use, in one place. Email, in-app chat, group chats, and auto-generated shift rooms.",
      fr: "Tous les canaux que vos bénévoles utilisent vraiment, au même endroit. Courriel, messagerie in-app, conversations de groupe et salons de quart automatiques.",
    },
    card_comms_f1: { en: "Bulk + individual email with Google or Microsoft domain integration", fr: "Courriels individuels et de masse avec intégration de domaine Google ou Microsoft" },
    card_comms_f2: { en: "Native private messaging and custom group chats", fr: "Messagerie privée native et conversations de groupe personnalisées" },
    card_comms_f3: { en: "Auto-generated chatrooms for every shift and opportunity", fr: "Salons générés automatiquement pour chaque quart et opportunité" },
    card_comms_f4: { en: "Automated reminders, confirmations, and announcements", fr: "Rappels, confirmations et annonces automatisés" },
    card_comms_link: { en: "Learn more about communications", fr: "En savoir plus sur les communications" },

    // Card 7 — Data & reports
    card_data_title: { en: "Data & reports", fr: "Données et rapports" },
    card_data_desc: {
      en: "Import your data, organize it your way, and report in just a few clicks.",
      fr: "Importez vos données, organisez-les à votre façon et produisez vos rapports en quelques clics.",
    },
    card_data_f1: { en: "Bulk import + custom field mapping (Excel, .CSV)", fr: "Importation en lot et association de champs personnalisés (Excel, .CSV)" },
    card_data_f2: { en: "Unlimited custom & dynamic database fields", fr: "Champs de base de données personnalisés et dynamiques illimités" },
    card_data_f3: { en: "Profile tags, advanced filtering, and group management", fr: "Étiquettes de profil, filtrage avancé et gestion de groupe" },
    card_data_f4: { en: "Instant reports, analytics dashboards & Google Sheets sync", fr: "Rapports instantanés, tableaux de bord analytiques et synchro Google Sheets" },
    card_data_link: { en: "Learn more about data & reports", fr: "En savoir plus sur les données et rapports" },

    // Card 8 — Mobile app
    card_app_title: { en: "Mobile app", fr: "Application mobile" },
    card_app_desc: {
      en: "Designed for every age, skill, and shift. Free for volunteers, full admin power for your team, wherever you are.",
      fr: "Conçue pour tous les âges, toutes les compétences et tous les quarts. Gratuite pour les bénévoles, puissance admin complète pour votre équipe, où que vous soyez.",
    },
    card_app_f1: { en: "iOS & Android, free download for everyone", fr: "iOS et Android, téléchargement gratuit pour tous" },
    card_app_f2: { en: "Volunteers apply, reserve, check-in, and message in-app", fr: "Les bénévoles posent leur candidature, réservent, pointent et écrivent dans l'app" },
    card_app_f3: { en: "Admins manage shifts, attendees, and chats from anywhere", fr: "Les admins gèrent quarts, participants et conversations depuis n'importe où" },
    card_app_f4: { en: "Push notifications + reminders built in", fr: "Notifications poussées et rappels intégrés" },
    card_app_link: { en: "Learn more about the app", fr: "En savoir plus sur l'application" },

    // Card 9 — Integrations & API
    card_integrations_title: { en: "Integrations & API", fr: "Intégrations et API" },
    card_integrations_desc: {
      en: "Connect Vome to the tools your team already uses. Native integrations for the essentials, plus API access and no-code automations for everything else.",
      fr: "Connectez Vome aux outils que votre équipe utilise déjà. Intégrations natives pour l'essentiel, accès API et automatisations sans code pour le reste.",
    },
    card_integrations_f1: { en: "Native integrations: Salesforce Lightning app, Sterling Volunteers, Double the Donation, and many more", fr: "Intégrations natives : application Salesforce Lightning, Sterling Volunteers, Double the Donation, et bien d'autres" },
    card_integrations_f2: { en: "Implement custom no-code automations with Zapier and Microsoft Power Automate", fr: "Implémentez des automatisations sans code avec Zapier et Microsoft Power Automate" },
    card_integrations_f3: { en: "SAML-based SSO with Microsoft Entra ID, JumpCloud, and other providers", fr: "SSO basé sur SAML avec Microsoft Entra ID, JumpCloud et autres fournisseurs" },
    card_integrations_f4: { en: "REST API, custom webhooks, and a developer dashboard", fr: "API REST, webhooks personnalisés et tableau de bord développeur" },
    card_integrations_link: { en: "Learn more about integrations", fr: "En savoir plus sur les intégrations" },

    // Post-modules CTA
    cta_h2: { en: "See it in action", fr: "Voyez Vome à l'œuvre" },
    cta_sub: {
      en: "Sign up free and explore the platform yourself, or book a demo and we'll walk you through the modules that matter most to you.",
      fr: "Inscrivez-vous gratuitement et explorez la plateforme par vous-même, ou réservez une démo et nous vous présenterons les modules les plus pertinents pour vous.",
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  MODULE PAGE: RECRUITMENT  /volunteer-application-forms
  //  Pilot for the per-module template. Other modules will follow the same
  //  shape (hero / benefits / spotlights / how-it-works / differentiators /
  //  faq / matrix / closing CTA) under their own namespaces.
  // ─────────────────────────────────────────────────────────────────────────
  module_recruitment: {
    page_title: { en: "Volunteer application forms & recruitment workflows | Vome", fr: "Formulaires de candidature et flux de recrutement | Vome" },
    page_description: {
      en: "Build modern, custom-branded forms with conditional questions, automations, and recruitment workflows that route applicants automatically.",
      fr: "Mettez en place des formulaires modernes à votre image avec questions conditionnelles, automatisations et flux de recrutement qui acheminent les candidats automatiquement.",
    },

    // ── Hero ──
    hero_eyebrow: { en: "Recruitment & application forms", fr: "Recrutement et formulaires de candidature" },
    hero_h1_part1: { en: "Build the ", fr: "Mettez en place le " },
    hero_h1_accent: { en: "recruitment process", fr: "processus de recrutement" },
    hero_h1_part2: { en: " your program needs.", fr: " dont votre programme a besoin." },
    hero_sub: {
      en: "Modern forms with <em>conditional questions</em>, <em>file uploads</em>, and <em>e-signatures</em>. <strong>Automations</strong> that route applicants. <strong>Recruitment workflows</strong> wired into the rest of the platform.",
      fr: "Formulaires modernes avec <em>questions conditionnelles</em>, <em>téléversements</em> et <em>signatures électroniques</em>. <strong>Automatisations</strong> qui acheminent les candidats. <strong>Flux de recrutement</strong> connectés au reste de la plateforme.",
    },
    hero_meta_unlimited: { en: "First form free", fr: "Premier formulaire gratuit" },
    hero_meta_branded: { en: "Custom-branded pages", fr: "Pages à votre image" },
    hero_meta_apps: { en: "Works on any device", fr: "Sur tout appareil" },

    // ── Form-builder mockup labels ──
    mock: {
      url: { en: "vomevolunteer.com/forms/spring-2026", fr: "vomevolunteer.com/forms/printemps-2026" },
      kicker: { en: "FORM BUILDER", fr: "CONCEPTEUR DE FORMULAIRE" },
      live: { en: "Live preview", fr: "Aperçu en direct" },
      form_title: { en: "Volunteer application · Spring 2026", fr: "Candidature de bénévole · Printemps 2026" },
      q1_type: { en: "Multiple choice", fr: "Choix multiple" },
      q1_rule: { en: "Branches", fr: "Branche" },
      q1_q: { en: "Which programs interest you?", fr: "Quels programmes vous intéressent ?" },
      q1_o1: { en: "Tutoring", fr: "Tutorat" },
      q1_o2: { en: "Delivery assistance", fr: "Aide à la livraison" },
      q1_o3: { en: "Hospital", fr: "Hôpital" },
      branch_label: { en: "If 'Delivery assistance' is selected", fr: "Si « Aide à la livraison » est choisi" },
      q2_type: { en: "File upload", fr: "Téléversement de fichier" },
      q2_q: { en: "Upload a valid driver's license", fr: "Téléversez un permis de conduire valide" },
      file_hint: { en: "PDF, JPG, PNG · up to 10MB", fr: "PDF, JPG, PNG · jusqu'à 10 Mo" },
      q3_type: { en: "E-signature", fr: "Signature électronique" },
      q3_q: { en: "I agree to the volunteer code of conduct", fr: "J'accepte le code de conduite des bénévoles" },
      signed: { en: "Signed", fr: "Signé" },
      add_question: { en: "Add question", fr: "Ajouter une question" },
    },

    // ── Build spotlight mockup: form sections list ──
    build_mock: {
      chip: { en: "FORM EDITOR", fr: "ÉDITEUR DE FORMULAIRE" },
      form_name: { en: "Volunteer application · Spring 2026", fr: "Candidature · Printemps 2026" },
      sections_label: { en: "Form sections", fr: "Sections du formulaire" },
      sec1: { en: "General info", fr: "Infos générales" },
      sec2: { en: "Profile info", fr: "Profil" },
      sec3: { en: "Attachments", fr: "Pièces jointes" },
      sec4: { en: "Digital consent", fr: "Consentement numérique" },
      sec5: { en: "Program preference", fr: "Programme préféré" },
      cond_chip: { en: "Conditional", fr: "Conditionnel" },
      add_section: { en: "Add section", fr: "Ajouter une section" },
      reorder_hint: { en: "Drag to reorder", fr: "Glissez pour réorganiser" },
    },

    // ── Route spotlight mockup: workflow + visibility ──
    route_mock: {
      chip: { en: "RECRUITMENT WORKFLOW", fr: "FLUX DE RECRUTEMENT" },
      opp_name: { en: "Hospital companion program", fr: "Programme d'accompagnement hospitalier" },
      stage1: { en: "Applied", fr: "Candidature" },
      stage2: { en: "Screening", fr: "Sélection" },
      stage3: { en: "Interview", fr: "Entrevue" },
      stage4: { en: "Ready", fr: "Prêt" },
      visibility_label: { en: "Visible to volunteers who:", fr: "Visible aux bénévoles qui :" },
      vis1: { en: "Have the 'Healthcare' tag", fr: "Ont l'étiquette « Santé »" },
      vis2: { en: "Are 18 or older", fr: "Ont 18 ans ou plus" },
      vis3: { en: "Completed background check", fr: "Ont une vérification d'antécédents" },
    },

    // ── Automate spotlight mockup: when/if/then rule ──
    automate_mock: {
      chip: { en: "AUTOMATION", fr: "AUTOMATISATION" },
      rule_name: { en: "Hospital applicants", fr: "Candidats hospitaliers" },
      when_label: { en: "When", fr: "Quand" },
      when_value: { en: "Form submitted: Volunteer application", fr: "Formulaire soumis : Candidature de bénévole" },
      if_label: { en: "If", fr: "Si" },
      if_value: { en: "User responded \"Hospital\"", fr: "L'utilisateur a répondu « Hôpital »" },
      then_label: { en: "Then", fr: "Alors" },
      action1: { en: "Add tag", fr: "Ajouter l'étiquette" },
      action1_value: { en: "medical", fr: "médical" },
      action2: { en: "Assign sequence", fr: "Affecter la séquence" },
      action2_value: { en: "Hospital onboarding", fr: "Intégration hospitalière" },
      action3: { en: "Send email", fr: "Envoyer un courriel" },
      action3_value: { en: "Welcome to the medical team", fr: "Bienvenue dans l'équipe médicale" },
      enabled: { en: "Enabled", fr: "Activée" },
    },

    // ── Benefits grid (4 cards) ──
    benefits_h2: { en: "Everything you need to convert interest into action", fr: "Tout ce qu'il faut pour transformer l'intérêt en action" },
    benefits_sub: {
      en: "Redirect users from your website, social media, or email campaigns to custom forms that guide applicants through your recruitment process and save your team hours of manual work.",
      fr: "Redirigez vos visiteurs depuis votre site web, les réseaux sociaux ou vos infolettres vers des formulaires personnalisés qui guident les candidats à travers votre processus de recrutement et font gagner des heures à votre équipe.",
    },
    ben1_title: { en: "A branded page for every opportunity", fr: "Une page à votre image pour chaque opportunité" },
    ben1_desc: { en: "Build custom landing pages for events, programs, and positions. Each routes to its own form and recruitment workflow.", fr: "Mettez en place des pages d'atterrissage pour vos événements, programmes et postes. Chacune dirige vers son propre formulaire et flux de recrutement." },
    ben2_title: { en: "Conditional questions", fr: "Questions conditionnelles" },
    ben2_desc: { en: "Show only what's relevant. Branch on each answer to personalize the volunteer's experience.", fr: "Affichez seulement ce qui compte. Branchez chaque réponse pour personnaliser l'expérience." },
    ben3_title: { en: "Forms tailored to each applicant", fr: "Formulaires adaptés à chaque candidat" },
    ben3_desc: { en: "Route applicants by role, age, group status, or whether they're already in your database. Each volunteer sees only the form that fits them, and you decide what's visible to whom.", fr: "Acheminez les candidats par rôle, âge, statut de groupe ou présence dans votre base de données. Chaque bénévole ne voit que le formulaire qui lui correspond, et vous décidez ce qui est visible pour qui." },
    ben4_title: { en: "Auto-routing into onboarding", fr: "Acheminement vers l'intégration" },
    ben4_desc: { en: "New applicants can be dropped straight into onboarding sequences automatically, with no manual triage, status updates, or assignments needed.", fr: "Les nouveaux candidats peuvent être intégrés automatiquement dans les séquences d'intégration, sans triage, mise à jour de statut ou affectation manuelle." },
    ben5_title: { en: "A dashboard built for forms", fr: "Un tableau de bord conçu pour les formulaires" },
    ben5_desc: { en: "Filter, sort, and save custom views. Permissions let each team see only the forms that matter to them, across sites and locations.", fr: "Filtrez, triez et sauvegardez des vues personnalisées. Les permissions font en sorte que chaque équipe ne voit que les formulaires pertinents, à travers vos sites et lieux." },
    ben6_title: { en: "Apply from any device", fr: "Postuler depuis n'importe quel appareil" },
    ben6_desc: { en: "Volunteers fill out forms on the iOS and Android apps, browser, tablet, or computer. Mobile-first by default, accessible everywhere.", fr: "Les bénévoles remplissent les formulaires depuis les apps iOS et Android, un navigateur, une tablette ou un ordinateur. Mobile d'abord, accessible partout." },

    // ── Spotlight 1: Form builder ──
    spot1_kicker: { en: "BUILD", fr: "METTEZ EN PLACE" },
    spot1_title: { en: "Build any application form, exactly the way you need it.", fr: "Mettez en place n'importe quel formulaire de candidature, exactement comme vous le voulez." },
    spot1_body: {
      en: "Drag, drop, save. Add <strong>conditional questions</strong> that show or hide based on previous answers, request <strong>file uploads</strong>, collect <strong>digital consent through e-signatures</strong>, and embed shift calendars right inside the form.",
      fr: "Glissez, déposez, enregistrez. Ajoutez des <strong>questions conditionnelles</strong> qui s'affichent ou se cachent selon les réponses précédentes, demandez des <strong>téléversements</strong>, recueillez le <strong>consentement par signature électronique</strong>, et intégrez les calendriers de quarts directement dans le formulaire.",
    },
    spot1_b1: { en: "20+ question types to collect any data your form needs", fr: "Plus de 20 types de questions pour recueillir toutes les données dont votre formulaire a besoin" },
    spot1_b2: { en: "Choose who gets notified about new submissions, and when", fr: "Choisissez quels admins sont notifiés des nouvelles soumissions, et quand" },
    spot1_b3: { en: "Link forms to different areas of the platform to collect submissions at every stage", fr: "Liez les formulaires à différentes sections de la plateforme pour recueillir des soumissions à chaque étape" },
    spot1_b4: { en: "Duplicate any form to spin up new ones with the same questions and workflow", fr: "Dupliquez un formulaire pour en créer de nouveaux avec les mêmes questions et le même flux" },

    // ── Spotlight 2: Recruitment workflow ──
    spot2_kicker: { en: "ROUTE", fr: "ACHEMINER" },
    spot2_title: { en: "You decide what the volunteer journey looks like.", fr: "Vous décidez à quoi ressemble le parcours du bénévole." },
    spot2_body: {
      en: "Whether you use a <strong>single form for all volunteers</strong>, or <strong>different forms for every role, age group, or situation</strong>, it's all configurable in Vome. Set <strong>who can see each role</strong>, <strong>what they need to complete</strong>, and how they advance through the process.",
      fr: "Que vous utilisiez un <strong>seul formulaire pour tous les bénévoles</strong> ou <strong>des formulaires différents pour chaque rôle, tranche d'âge ou situation</strong>, tout est configurable dans Vome. Définissez <strong>qui peut voir chaque rôle</strong>, <strong>ce qu'il faut compléter</strong>, et comment les candidats avancent dans le processus.",
    },
    spot2_b1: { en: "Make opportunities visible only to matching volunteers by tag, role, location, age, or anything else you need", fr: "Affichez les opportunités uniquement aux bénévoles correspondants : étiquette, rôle, lieu, âge ou tout autre critère" },
    spot2_b2: { en: "Add conditional questions to collect specific data based on previous answers", fr: "Ajoutez des questions conditionnelles pour recueillir des données précises selon les réponses précédentes" },
    spot2_b3: { en: "Track every submission on a live dashboard, monitor status, and take bulk actions in a few clicks", fr: "Suivez chaque soumission sur un tableau de bord en direct, surveillez les statuts et effectuez des actions groupées en quelques clics" },
    spot2_b4: { en: "Sort, filter, and save custom views, and use admin permissions to share forms across sites while letting each team see only what they need", fr: "Triez, filtrez et enregistrez des vues personnalisées, et utilisez les permissions d'admin pour partager des formulaires entre sites en laissant chaque équipe voir uniquement ce qu'il lui faut" },

    // ── Spotlight 3: Post-submission automation ──
    spot3_kicker: { en: "AUTOMATE", fr: "AUTOMATISER" },
    spot3_title: { en: "Automations pick up where the form leaves off.", fr: "Les automatisations prennent le relais après le formulaire." },
    spot3_body: {
      en: "When a form is submitted, <strong>automations fire</strong>. Assign onboarding sequences or opportunities, add tags, and send a confirmation email. Each action can be triggered by what the volunteer answered.",
      fr: "À la soumission d'un formulaire, les <strong>automatisations se déclenchent</strong>. Attribuez des séquences d'intégration ou des opportunités, ajoutez des étiquettes et envoyez un courriel de confirmation. Chaque action peut être déclenchée par la réponse du bénévole.",
    },
    spot3_b1: { en: "10+ automations ready to use out of the box", fr: "Plus de 10 automatisations prêtes à l'emploi" },
    spot3_b2: { en: "Move volunteers through the process without manual work", fr: "Faites avancer les bénévoles dans le processus sans travail manuel" },
    spot3_b3: { en: "Map form submissions directly into your database, structured exactly how you need it", fr: "Acheminez les soumissions directement dans votre base de données, structurée exactement comme vous le voulez" },
    spot3_b4: { en: "Let your IT team push form submissions to any third-party platform with our open API", fr: "Permettez à votre équipe TI d'envoyer les soumissions vers toute plateforme tierce via notre API ouverte" },

    // ── Mid-page CTA banner (after the 3 spotlights) ──
    midcta_h2: { en: "See for yourself.", fr: "Voyez par vous-même." },
    midcta_sub: { en: "Build your first form free, in minutes.", fr: "Mettez en place votre premier formulaire gratuitement, en quelques minutes." },
    midcta_button: { en: "Build your first form free", fr: "Créer votre premier formulaire gratuitement" },

    // ── How it works (4 steps) ──
    how_h2: { en: "How it works", fr: "Comment ça fonctionne" },
    how_sub: {
      en: "Build once. Set the rules. Let Vome do the rest, every time someone applies.",
      fr: "Mettez en place une fois. Définissez les règles. Laissez Vome s'occuper du reste à chaque candidature.",
    },
    step1_title: { en: "Build the form", fr: "Créer le formulaire" },
    step1_desc: { en: "Drag-and-drop fields. Add conditional logic, file uploads, e-signatures, and shift-calendar embeds.", fr: "Glissez-déposez les champs. Ajoutez logique conditionnelle, téléversements, signatures et calendriers." },
    step2_title: { en: "Set the workflow", fr: "Définir le flux" },
    step2_desc: { en: "Configure eligibility, screening questions, and the stages applicants will move through.", fr: "Configurez l'admissibilité, les questions de sélection et les étapes à parcourir." },
    step3_title: { en: "Publish and share", fr: "Publier et partager" },
    step3_desc: { en: "Direct links, QR codes, and embeds. A branded recruitment page with featured opportunities.", fr: "Liens directs, codes QR et intégrations. Une page de recrutement à votre image." },
    step4_title: { en: "Automations take over", fr: "Les automatisations prennent le relais" },
    step4_desc: { en: "Submissions trigger the right next steps. Tags, sequences, confirmations, and assignments run on their own based on what each volunteer answered.", fr: "Les soumissions déclenchent les bonnes étapes suivantes. Étiquettes, séquences, confirmations et affectations se font seules selon les réponses de chaque bénévole." },

    // ── Differentiators (3) ──
    diff_h2: { en: "More than a form builder", fr: "Plus qu'un concepteur de formulaires" },
    diff_sub: {
      en: "Generic form tools collect data into a spreadsheet. Vome turns each submission into an end-to-end recruitment workflow.",
      fr: "Les outils de formulaires génériques collectent des données dans un chiffrier. Vome transforme chaque soumission en flux de recrutement complet.",
    },
    diff1_title: { en: "Built for volunteer programs", fr: "Conçu pour le bénévolat" },
    diff1_desc: { en: "Forms are one step of the volunteer journey. Choose which form a volunteer submits and how it shapes the next step, whether that's onboarding, scheduling shifts, or whatever your program needs.", fr: "Les formulaires ne sont qu'une étape du parcours du bénévole. Choisissez quel formulaire soumettre et comment il influence l'étape suivante : intégration, planification de quarts ou tout autre besoin de votre programme." },
    diff2_title: { en: "Routing beyond the form", fr: "Acheminement après le formulaire" },
    diff2_desc: { en: "Most form tools stop at conditional fields. Vome layers on conditional automations that move volunteers to the right stage based on how you've designed the workflow. Handle file uploads, background checks, or anything else you need without extra effort.", fr: "La plupart des outils de formulaires s'arrêtent aux champs conditionnels. Vome ajoute des automatisations conditionnelles qui font avancer les bénévoles à la bonne étape selon le flux que vous avez conçu. Gérez téléversements, vérifications d'antécédents ou tout autre besoin sans effort supplémentaire." },
    diff3_title: { en: "All in one platform", fr: "Tout dans une seule plateforme" },
    diff3_desc: { en: "Forms can feed directly into your database, or be prompted throughout the platform whenever you need them. Require volunteers to resubmit forms before reserving shifts, checking in, or anything else.", fr: "Les formulaires peuvent alimenter directement votre base de données ou apparaître à tout moment sur la plateforme. Exigez une nouvelle soumission avant de réserver un quart, avant d'effectuer leur check-in ou pour tout autre besoin." },

    // ── FAQ (module-specific) ──
    faq_h2: { en: "Recruitment FAQs", fr: "FAQ Recrutement" },
    faq_sub: {
      en: "Common questions about application forms and recruitment workflows.",
      fr: "Questions fréquentes sur les formulaires et les flux de recrutement.",
    },
    faq_cta_text: { en: "Still have questions?", fr: "Vous avez encore des questions ?" },
    faq_cta_link: { en: "Talk to our team", fr: "Parlez à notre équipe" },
    faq2_q: { en: "How do conditional questions work?", fr: "Comment fonctionnent les questions conditionnelles ?" },
    faq2_a: {
      en: "Each question can branch based on a previous answer. Vome will show, hide, or require fields dynamically. Useful for personalizing the form by program, role, or eligibility.",
      fr: "Chaque question peut se ramifier selon une réponse précédente. Vome affiche, masque ou exige des champs dynamiquement. Utile pour personnaliser par programme, rôle ou admissibilité.",
    },
    faq3_q: { en: "What happens after a form is submitted?", fr: "Que se passe-t-il après la soumission d'un formulaire ?" },
    faq3_a: {
      en: "You can configure automations to handle the next step automatically, or manually screen submissions and take action as needed. Based on what the applicant answered, Vome can tag them, assign them to an onboarding sequence, post them to the right opportunity, and send a confirmation email, all without manual work from your team.",
      fr: "Vous pouvez configurer des automatisations pour gérer l'étape suivante automatiquement, ou filtrer les soumissions manuellement et agir au besoin. Selon les réponses du candidat, Vome peut l'étiqueter, l'affecter à une séquence d'intégration, le publier sur la bonne opportunité et envoyer un courriel de confirmation, sans travail manuel pour votre équipe.",
    },
    faq4_q: { en: "Can volunteers upload documents?", fr: "Les bénévoles peuvent-ils téléverser des documents ?" },
    faq4_a: {
      en: "Yes. You can collect all sorts of file uploads from volunteers. Have them upload a document, digitally sign a waiver, or fill out a PDF directly inside Vome.",
      fr: "Oui. Vous pouvez recueillir toutes sortes de téléversements. Demandez aux bénévoles de téléverser un document, de signer une décharge électroniquement ou de remplir un PDF directement dans Vome.",
    },
    faq5_q: { en: "Can I reuse a form across opportunities?", fr: "Puis-je réutiliser un formulaire entre opportunités ?" },
    faq5_a: {
      en: "Yes. You can customize the recruitment process and reuse forms across your opportunities in just a few clicks. You can also duplicate opportunities or forms with ease.",
      fr: "Oui. Vous pouvez personnaliser le processus de recrutement et réutiliser les formulaires entre vos opportunités en quelques clics. Vous pouvez aussi dupliquer opportunités ou formulaires en toute simplicité.",
    },
    faq6_q: { en: "Does it work on mobile?", fr: "Est-ce que ça fonctionne sur mobile ?" },
    faq6_a: {
      en: "Yes. Forms are mobile-first, and shareable links open the Vome app on logged-in volunteers' phones for an app-native experience.",
      fr: "Oui. Les formulaires sont conçus pour mobile et les liens partageables ouvrent l'app Vome sur les téléphones des bénévoles connectés pour une expérience native.",
    },

    // ── Matrix heading override ──
    matrix_h2: { en: "Recruitment features by plan", fr: "Fonctionnalités de recrutement par forfait" },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  MODULE: Onboarding & screening
  //  Mirrors module_recruitment key shape. Used by
  //  src/pages/volunteer-onboarding-software.astro (and the FR shell).
  // ─────────────────────────────────────────────────────────────────────────
  module_onboarding: {
    page_title: { en: "Volunteer onboarding & screening software | Vome", fr: "Logiciel d'intégration et de sélection des bénévoles | Vome" },
    page_description: {
      en: "Build onboarding sequences with interviews, training, waivers, e-signatures, and Sterling Volunteers background checks. Track status and expirations in one place.",
      fr: "Mettez en place des séquences d'intégration avec entrevues, formations, décharges, signatures électroniques et vérifications d'antécédents Sterling Volunteers. Suivez le statut et les expirations en un seul endroit.",
    },

    // ── Hero ──
    hero_eyebrow: { en: "Onboarding & screening", fr: "Intégration et sélection" },
    hero_h1_part1: { en: "Take volunteers through ", fr: "Guidez les bénévoles à travers des séquences d'intégration " },
    hero_h1_accent: { en: "custom guided", fr: "personnalisées et guidées" },
    hero_h1_part2: { en: " onboarding sequences" , fr: "" },
    hero_sub: {
      en: "Combine <em>file uploads</em>, <em>background checks</em>, and <em>training</em> in guided flows. Decide <strong>what volunteers do</strong>, <strong>when steps expire</strong>, and <strong>how completion is verified</strong>, all with ease.",
      fr: "Combinez <em>téléversements</em>, <em>vérifications d'antécédents</em> et <em>formations</em> dans des parcours guidés. Décidez de <strong>ce que les bénévoles font</strong>, <strong>quand les étapes expirent</strong> et <strong>comment la complétion est vérifiée</strong>, le tout en toute simplicité.",
    },
    hero_meta_steps: { en: "First sequence free", fr: "Première séquence gratuite" },
    hero_meta_native: { en: "Volunteers self-track", fr: "Suivi par les bénévoles" },
    hero_meta_audit: { en: "Audit-ready", fr: "Prêt pour audit" },

    // ── Hero mockup labels: sequence-builder overview ──
    builder_mock: {
      url: { en: "vomevolunteer.com/sequences/new-volunteer-2026", fr: "vomevolunteer.com/sequences/nouveau-benevole-2026" },
      kicker: { en: "SEQUENCE BUILDER", fr: "CONCEPTEUR DE SÉQUENCE" },
      draft: { en: "Draft", fr: "Brouillon" },
      seq_title: { en: "New volunteer onboarding · 2026", fr: "Intégration des nouveaux bénévoles · 2026" },
      steps_label: { en: "Sequence steps", fr: "Étapes de la séquence" },
      step1_type: { en: "Interview", fr: "Entrevue" },
      step1_name: { en: "Welcome interview with coordinator", fr: "Entrevue d'accueil avec la coordonnatrice" },
      step1_meta: { en: "30 min · scheduled via Vome", fr: "30 min · planifiée via Vome" },
      step2_type: { en: "Training", fr: "Formation" },
      step2_name: { en: "Volunteer code of conduct", fr: "Code de conduite des bénévoles" },
      step2_meta: { en: "SCORM Cloud · self-paced", fr: "SCORM Cloud · à son propre rythme" },
      step3_type: { en: "Waiver", fr: "Décharge" },
      step3_name: { en: "Liability and consent waiver", fr: "Décharge de responsabilité et consentement" },
      step3_meta: { en: "E-signature · expires yearly", fr: "Signature électronique · expire annuellement" },
      step4_type: { en: "Background check", fr: "Vérification d'antécédents" },
      step4_name: { en: "Standard criminal record check", fr: "Vérification des antécédents criminels standard" },
      step4_meta: { en: "Sterling Volunteers · auto-renewal", fr: "Sterling Volunteers · renouvellement auto" },
      step5_type: { en: "Document", fr: "Document" },
      step5_name: { en: "Upload proof of vaccination", fr: "Téléverser la preuve de vaccination" },
      step5_meta: { en: "PDF or image · secure link", fr: "PDF ou image · lien sécurisé" },
      required: { en: "Required", fr: "Obligatoire" },
      optional: { en: "Optional", fr: "Facultatif" },
      add_step: { en: "Add step", fr: "Ajouter une étape" },
    },

    // ── Spotlight 1 mockup: step list with type chips ──
    steps_mock: {
      chip: { en: "STEP TYPES", fr: "TYPES D'ÉTAPE" },
      seq_name: { en: "Hospital companion onboarding", fr: "Intégration accompagnement hospitalier" },
      label: { en: "Steps in this sequence", fr: "Étapes de cette séquence" },
      s1_type: { en: "Interview", fr: "Entrevue" },
      s1_name: { en: "30-min screening call", fr: "Appel de sélection de 30 min" },
      s2_type: { en: "Orientation", fr: "Orientation" },
      s2_name: { en: "Hospital floor tour", fr: "Visite des étages de l'hôpital" },
      s3_type: { en: "Waiver", fr: "Décharge" },
      s3_name: { en: "Confidentiality and HIPAA waiver", fr: "Décharge de confidentialité et HIPAA" },
      s4_type: { en: "Background check", fr: "Vérification d'antécédents" },
      s4_name: { en: "Sterling Volunteers · enhanced", fr: "Sterling Volunteers · approfondie" },
      s5_type: { en: "Training", fr: "Formation" },
      s5_name: { en: "Patient interaction · SCORM module", fr: "Interaction avec les patients · module SCORM" },
      cond_chip: { en: "Conditional", fr: "Conditionnelle" },
      req_chip: { en: "Required", fr: "Obligatoire" },
    },

    // ── Spotlight 2 mockup: background-check step config (Sterling) ──
    bg_mock: {
      chip: { en: "BACKGROUND CHECK", fr: "VÉRIFICATION D'ANTÉCÉDENTS" },
      step_name: { en: "Standard criminal record check", fr: "Vérification des antécédents criminels standard" },
      provider_label: { en: "Provider", fr: "Fournisseur" },
      provider_name: { en: "Sterling Volunteers", fr: "Sterling Volunteers" },
      connected: { en: "Connected", fr: "Connecté" },
      package_label: { en: "Package", fr: "Forfait" },
      package_value: { en: "Standard · criminal record + identity", fr: "Standard · antécédents criminels + identité" },
      applicant_label: { en: "Applicant", fr: "Candidat" },
      applicant_name: { en: "Riley Tremblay", fr: "Riley Tremblay" },
      progress_label: { en: "Status", fr: "Statut" },
      status_pending: { en: "Awaiting consent", fr: "En attente de consentement" },
      status_progress: { en: "Verification in progress", fr: "Vérification en cours" },
      status_clear: { en: "Cleared", fr: "Vérifié" },
      renewal_label: { en: "Renewal", fr: "Renouvellement" },
      renewal_value: { en: "Auto-renew every 12 months", fr: "Renouvellement auto aux 12 mois" },
    },

    // ── Spotlight 3 mockup: status tracker for one volunteer ──
    status_mock: {
      chip: { en: "VOLUNTEER STATUS", fr: "STATUT DU BÉNÉVOLE" },
      vol_name: { en: "Riley Tremblay · Hospital companion", fr: "Riley Tremblay · Accompagnement hospitalier" },
      label: { en: "Onboarding progress", fr: "Progression de l'intégration" },
      s1_name: { en: "Welcome interview", fr: "Entrevue d'accueil" },
      s1_state: { en: "Completed", fr: "Complétée" },
      s2_name: { en: "Code of conduct training", fr: "Formation code de conduite" },
      s2_state: { en: "Completed", fr: "Complétée" },
      s3_name: { en: "Liability waiver", fr: "Décharge de responsabilité" },
      s3_state: { en: "Expires Mar 14, 2026", fr: "Expire le 14 mars 2026" },
      s4_name: { en: "Sterling background check", fr: "Vérification Sterling" },
      s4_state: { en: "Cleared", fr: "Vérifiée" },
      s5_name: { en: "Vaccination upload", fr: "Téléversement de vaccination" },
      s5_state: { en: "Pending volunteer", fr: "En attente du bénévole" },
      done_dot: { en: "Done", fr: "Fait" },
      pending_dot: { en: "Pending", fr: "En attente" },
      expiring_dot: { en: "Expiring", fr: "Expire bientôt" },
      summary: { en: "3 of 5 complete · 1 expiring soon", fr: "3 sur 5 complétées · 1 expire bientôt" },
    },

    // ── Benefits grid (6) ──
    benefits_h2: { en: "Everything your screening process requires.", fr: "Tout ce que votre processus de sélection exige." },
    benefits_sub: {
      en: "Reduce the time it takes to move volunteers through the onboarding process. Decide which steps volunteers can see and when they can move through them, designed exactly as you need it, with a live dashboard to track progress.",
      fr: "Réduisez le temps nécessaire pour faire avancer les bénévoles dans l'intégration. Décidez quelles étapes les bénévoles voient et quand ils peuvent y avancer, conçu exactement comme vous le voulez, avec un tableau de bord en direct pour suivre la progression.",
    },
    ben1_title: { en: "Step-by-step sequences", fr: "Séquences étape par étape" },
    ben1_desc: { en: "Build as many onboarding processes as you need, whether by role or age specification. Volunteers can get auto-assigned the moment their application clears.", fr: "Mettez en place autant de processus d'intégration que nécessaire, par rôle ou par tranche d'âge. Les bénévoles peuvent être affectés automatiquement dès que leur candidature est acceptée." },
    ben2_title: { en: "Integrated background checks", fr: "Vérifications d'antécédents intégrées" },
    ben2_desc: { en: "Connect the tools you already use, like Sterling Volunteers or Verified First, without leaving Vome. Statuses sync back automatically.", fr: "Connectez les outils que vous utilisez déjà, comme Sterling Volunteers ou Verified First, sans quitter Vome. Les statuts se synchronisent automatiquement." },
    ben3_title: { en: "SCORM e-learning & videos", fr: "Apprentissage SCORM et vidéos" },
    ben3_desc: { en: "Drop SCORM-compliant training modules directly into a sequence with our SCORM Cloud integration. Completion and scores sync to the volunteer profile. Upload videos or YouTube links and track who's watched them, often useful for training.", fr: "Insérez des modules de formation conformes SCORM directement dans une séquence avec notre intégration SCORM Cloud. La complétion et les notes se synchronisent au profil. Téléversez des vidéos ou des liens YouTube et suivez qui les a regardées, souvent utile pour la formation." },
    ben4_title: { en: "Fillable PDFs, waivers & forms", fr: "PDF remplissables, décharges et formulaires" },
    ben4_desc: { en: "Collect signed waivers, let volunteers fill out PDFs directly in Vome, and gather form submissions inside the flow. Configure expirations and pull reports out of the box.", fr: "Recueillez des décharges signées, laissez les bénévoles remplir des PDF directement dans Vome et collectez les soumissions de formulaires dans le parcours. Configurez les expirations et générez des rapports prêts à l'emploi." },
    ben5_title: { en: "Self-track from web or mobile", fr: "Autosuivi sur le web ou mobile" },
    ben5_desc: { en: "Volunteers see their next step from the Vome mobile app or web. Or keep any step (or the full sequence) private and advance volunteers yourself.", fr: "Les bénévoles voient leur prochaine étape depuis l'app mobile Vome ou le web. Ou gardez une étape (ou toute la séquence) privée et faites-les avancer vous-même." },
    ben6_title: { en: "Status across every site", fr: "Statut à travers tous vos sites" },
    ben6_desc: { en: "A dashboard view of who's screened, who's expiring, and who's waiting. Permissions scope each admin to their site or team.", fr: "Une vue tableau de bord de qui est sélectionné, qui expire bientôt et qui attend. Les permissions limitent chaque admin à son site ou à son équipe." },

    // ── Spotlight 1: Build sequences ──
    spot1_kicker: { en: "BUILD", fr: "CRÉER" },
    spot1_title: { en: "Build custom step-by-step onboarding sequences and choose who gets routed into them and when.", fr: "Mettez en place des séquences d'intégration étape par étape et choisissez qui les suit et quand." },
    spot1_body: {
      en: "Combine <strong>interviews</strong>, <strong>orientations</strong>, <strong>training modules</strong>, <strong>waivers</strong>, document uploads, and <strong>background checks</strong> into guided flows. Mark steps as required or optional, private or visible to volunteers, and so much more.",
      fr: "Combinez <strong>entrevues</strong>, <strong>orientations</strong>, <strong>modules de formation</strong>, <strong>décharges</strong>, téléversements et <strong>vérifications d'antécédents</strong> dans des parcours guidés. Marquez les étapes obligatoires ou facultatives, privées ou visibles aux bénévoles, et bien plus encore.",
    },
    spot1_b1: { en: "10+ step types to choose from when building each step in your sequence", fr: "Plus de 10 types d'étapes pour créer chaque étape de votre séquence" },
    spot1_b2: { en: "Customizable settings to control what volunteers see, whether they can skip steps, and when each step is due", fr: "Paramètres personnalisables pour décider ce que les bénévoles voient, s'ils peuvent sauter des étapes et quand chaque étape est due" },
    spot1_b3: { en: "Add automations that fire when volunteers finish a sequence or complete a specific step", fr: "Ajoutez des automatisations déclenchées à la fin d'une séquence ou d'une étape précise" },
    spot1_b4: { en: "Duplicate sequences to spin up new onboarding processes with similar configurations", fr: "Dupliquez les séquences pour créer de nouveaux processus d'intégration avec des configurations similaires" },

    // ── Spotlight 2: Track progress (live dashboard) ──
    spot2_kicker: { en: "TRACK", fr: "SUIVRE" },
    spot2_title: { en: "See exactly where every volunteer stands across every step.", fr: "Voyez exactement où en est chaque bénévole, à chaque étape." },
    spot2_body: {
      en: "Volunteers can move through steps from their homepage, or admins can manage the process for them. A <strong>live dashboard</strong> shows where each volunteer is in their journey and how long they've been on a step. Build reports in minutes.",
      fr: "Les bénévoles peuvent avancer dans les étapes depuis leur tableau de bord, ou les admins peuvent gérer le processus pour eux. Un <strong>tableau de bord en direct</strong> montre où chaque bénévole en est et depuis combien de temps il est sur une étape. Construisez des rapports en quelques minutes.",
    },
    spot2_b1: { en: "Volunteers see their sequences on the web and mobile apps", fr: "Les bénévoles voient leurs séquences sur le web et l'app mobile" },
    spot2_b2: { en: "Uploaded files and documents stay on each volunteer's profile for easy access", fr: "Les fichiers et documents téléversés restent sur le profil de chaque bénévole pour un accès facile" },
    spot2_b3: { en: "Manage file expirations with ease and let volunteers reupload new versions", fr: "Gérez les expirations de fichiers facilement et laissez les bénévoles téléverser de nouvelles versions" },
    spot2_b4: { en: "Integrate third-party tools or pull sequence data using Vome's API", fr: "Intégrez des outils tiers ou extrayez les données de séquence via l'API Vome" },

    // ── Spotlight 3: Automate the next step ──
    spot3_kicker: { en: "AUTOMATE", fr: "AUTOMATISER" },
    spot3_title: { en: "Choose what comes after they finish onboarding.", fr: "Choisissez ce qui suit la fin de l'intégration." },
    spot3_body: {
      en: "When volunteers complete the process and become eligible, Vome can automatically <strong>assign them to opportunities</strong>, let them <strong>reserve shifts</strong>, and turn them into active volunteers in your portal. Or assign them to a new sequence based on specific requirements they still need to complete. The possibilities are endless. Structure the program exactly as you need.",
      fr: "Quand les bénévoles terminent le processus et deviennent admissibles, Vome peut automatiquement <strong>les affecter à des opportunités</strong>, leur permettre de <strong>réserver des quarts</strong> et les transformer en bénévoles actifs dans votre portail. Ou les assigner à une nouvelle séquence selon des exigences précises qu'il leur reste à compléter. Les possibilités sont infinies. Structurez le programme exactement comme vous le voulez.",
    },
    spot3_b1: { en: "Set up automations per step, or trigger them once a volunteer finishes the full sequence", fr: "Configurez des automatisations par étape ou déclenchez-les à la fin de la séquence complète" },
    spot3_b2: { en: "Send custom notifications to admins and volunteers when steps are completed or pending review", fr: "Envoyez des notifications personnalisées aux admins et aux bénévoles quand des étapes sont complétées ou en attente de révision" },
    spot3_b3: { en: "Run background checks or e-learning modules without leaving the platform", fr: "Lancez les vérifications d'antécédents ou les modules d'apprentissage sans quitter la plateforme" },
    spot3_b4: { en: "Auto-trigger expiration emails so volunteers can resubmit documents once they're past due", fr: "Déclenchez automatiquement des courriels d'expiration pour que les bénévoles soumettent à nouveau les documents échus" },

    // ── Mid-page CTA banner (after the 3 spotlights) ──
    midcta_h2: { en: "See for yourself.", fr: "Voyez par vous-même." },
    midcta_sub: { en: "Build your first onboarding sequence free, in minutes.", fr: "Mettez en place votre première séquence d'intégration gratuitement, en quelques minutes." },
    midcta_button: { en: "Build your first sequence free", fr: "Créez votre première séquence gratuitement" },

    // ── How it works (4 steps) ──
    how_h2: { en: "How it works", fr: "Comment ça fonctionne" },
    how_sub: {
      en: "Build the sequence once. Every volunteer who applies gets walked through the right screening for their role.",
      fr: "Mettez en place la séquence une seule fois. Chaque bénévole qui postule est guidé à travers la bonne sélection pour son rôle.",
    },
    step1_title: { en: "Build the sequence", fr: "Créer la séquence" },
    step1_desc: { en: "Add interview, training, waiver, background-check, and document steps in the order your program needs.", fr: "Ajoutez entrevues, formations, décharges, vérifications et documents dans l'ordre voulu." },
    step2_title: { en: "Connect integrations", fr: "Connecter les intégrations" },
    step2_desc: { en: "Sterling Volunteers and SCORM Cloud are native. Activate them once, reuse across every opportunity.", fr: "Sterling Volunteers et SCORM Cloud sont natifs. Activez-les une fois, réutilisez partout." },
    step3_title: { en: "Volunteers move through", fr: "Les bénévoles avancent" },
    step3_desc: { en: "Each volunteer sees their next step and takes action, or admins keep it private and advance them.", fr: "Chaque bénévole voit son étape suivante et agit, ou les admins gardent le tout privé et les font avancer." },
    step4_title: { en: "Status stays current", fr: "Le statut reste à jour" },
    step4_desc: { en: "Completion, expiration, and renewal sync back automatically. Reports and dashboards reflect it in real time.", fr: "Complétion, expiration et renouvellement se synchronisent automatiquement. Rapports et tableaux de bord se mettent à jour en temps réel." },

    // ── Differentiators (3) ──
    diff_h2: { en: "More than a checklist", fr: "Plus qu'une liste de vérification" },
    diff_sub: {
      en: "Generic onboarding tools track tasks. Vome lets you build custom onboarding journeys, immediately accessible after a volunteer completes an application form, all tied to your database.",
      fr: "Les outils d'intégration génériques suivent des tâches. Vome vous permet de bâtir des parcours d'intégration personnalisés, accessibles dès qu'un bénévole soumet un formulaire de candidature, le tout lié à votre base de données.",
    },
    diff1_title: { en: "Embed your workflows into sequences", fr: "Intégrez vos flux de travail dans les séquences" },
    diff1_desc: { en: "Integrate background checks, Vome forms, and training videos directly throughout your sequence. Everything is tracked and managed inside Vome, and accessible on each volunteer's profile at any time.", fr: "Intégrez des vérifications d'antécédents, des formulaires Vome et des vidéos de formation directement dans votre séquence. Tout est suivi et géré dans Vome, et accessible sur le profil de chaque bénévole à tout moment." },
    diff2_title: { en: "Audit-ready reporting built in", fr: "Rapports prêts pour audit, intégrés" },
    diff2_desc: { en: "See exactly when documents were uploaded and when steps were marked complete, across all sequences or per sequence. Pull the report you need in a few clicks.", fr: "Voyez exactement quand les documents ont été téléversés et quand les étapes ont été marquées complétées, pour toutes les séquences ou par séquence. Générez le rapport dont vous avez besoin en quelques clics." },
    diff3_title: { en: "Proven to cut onboarding time", fr: "Réduction prouvée du temps d'intégration" },
    diff3_desc: { en: "Rochester Regional Health used Vome sequences to take volunteer onboarding from 6–8 weeks down to 1, saving admins 10+ hours every week. See why you can do the same and get started today.", fr: "Rochester Regional Health a fait passer l'intégration des bénévoles de 6 à 8 semaines à 1 grâce aux séquences Vome, économisant 10+ heures par semaine aux administrateurs. Voyez pourquoi vous pouvez en faire autant et commencez aujourd'hui." },

    // ── FAQ (module-specific) ──
    faq_h2: { en: "Onboarding FAQs", fr: "FAQ Intégration" },
    faq_sub: {
      en: "Common questions about onboarding sequences, screening, and expiration tracking.",
      fr: "Questions fréquentes sur les séquences d'intégration, la sélection et le suivi des expirations.",
    },
    faq_cta_text: { en: "Still have questions?", fr: "Vous avez encore des questions ?" },
    faq_cta_link: { en: "Talk to our team", fr: "Parlez à notre équipe" },
    faq1_q: { en: "What step types can I add to a sequence?", fr: "Quels types d'étapes puis-je ajouter à une séquence ?" },
    faq1_a: {
      en: "You can build any custom step. For example: interviews, orientations, trainings, waivers, e-signatures, fillable PDFs, file uploads, videos, checklists, background checks, and Vome forms.",
      fr: "Vous pouvez bâtir n'importe quelle étape personnalisée. Par exemple : entrevues, orientations, formations, décharges, signatures électroniques, PDF remplissables, téléversements de fichiers, vidéos, listes de vérification, vérifications d'antécédents et formulaires Vome.",
    },
    faq3_q: { en: "Can I let volunteers track their own progress?", fr: "Puis-je laisser les bénévoles suivre leur progression ?" },
    faq3_a: {
      en: "Yes. Each sequence can be set to volunteer-visible (they see their next step and take action themselves) or admin-only (your team advances them). You can mix modes per sequence depending on the need.",
      fr: "Oui. Chaque séquence peut être réglée à visibilité bénévole (ils voient leur prochaine étape et agissent eux-mêmes) ou réservée aux admins (votre équipe les fait avancer). Vous pouvez mélanger les modes par séquence selon le besoin.",
    },
    faq4_q: { en: "How are expirations and renewals handled?", fr: "Comment sont gérées les expirations et les renouvellements ?" },
    faq4_a: {
      en: "Steps that expire (waivers, background checks, certifications) carry a renewal date on the volunteer record. Vome flags upcoming expirations on the dashboard, sends reminders before the date, and re-opens the step so the volunteer can resubmit. Past expirations are surfaced in a dedicated report.",
      fr: "Les étapes qui expirent (décharges, vérifications, certifications) portent une date de renouvellement au dossier. Vome signale les expirations à venir au tableau de bord, envoie des rappels avant la date et rouvre l'étape pour que le bénévole puisse soumettre à nouveau. Les expirations passées apparaissent dans un rapport dédié.",
    },
    faq5_q: { en: "Can I reuse a sequence?", fr: "Puis-je réutiliser une séquence ?" },
    faq5_a: {
      en: "Yes. Build a sequence once and assign it to any number of opportunities, or duplicate a sequence to spin up a variation. Multi-site permissions scope sequences to the right admins so teams only manage what's theirs.",
      fr: "Oui. Mettez en place une séquence une fois et affectez-la à plusieurs opportunités, ou dupliquez-la pour créer une variation. Les permissions multi-sites limitent les séquences aux bons administrateurs pour que chaque équipe ne gère que ce qui lui appartient.",
    },
    faq6_q: { en: "Where does the volunteer data go?", fr: "Où vont les données des bénévoles ?" },
    faq6_a: {
      en: "The data is available in many places: on your sequence dashboard, the volunteer's profile, and across our standard reports. You can easily access completion dates, expirations, upload dates, and so much more without any additional configuration.",
      fr: "Les données sont accessibles à plusieurs endroits : sur votre tableau de bord de séquence, sur le profil du bénévole et dans nos rapports standards. Vous pouvez facilement consulter les dates de complétion, les expirations, les dates de téléversement et bien plus, sans configuration supplémentaire.",
    },

    // ── Matrix heading override ──
    matrix_h2: { en: "Onboarding features by plan", fr: "Fonctionnalités d'intégration par forfait" },
  },

  module_scheduling: {
    page_title: { en: "Volunteer scheduling software & shift management | Vome", fr: "Logiciel de planification des bénévoles et gestion des quarts | Vome" },
    page_description: {
      en: "Run one-time and recurring shifts with self-scheduling, instant booking, group reservations, custom scheduling policies, auto-shift chatrooms, calendar sync, and reminders.",
      fr: "Gérez des quarts uniques et récurrents avec auto-planification, réservation instantanée, réservations de groupe, politiques personnalisées, salons de quart automatiques, synchronisation calendrier et rappels.",
    },

    // ── Hero ──
    hero_eyebrow: { en: "Scheduling & shifts", fr: "Planification et quarts" },
    hero_h1_part1: { en: "From one-off shifts to multi-site programs, ", fr: "Des quarts ponctuels aux programmes multi-sites, " },
    hero_h1_accent: { en: "schedule it all", fr: "planifiez tout" },
    hero_h1_part2: { en: " in Vome.", fr: " dans Vome." },
    hero_sub: {
      en: "Build <em>one-time</em> or <em>recurring</em> shifts in bulk. Let volunteers <strong>self-schedule</strong>, <strong>request approval</strong>, or pre-assign them yourself. Custom <strong>scheduling policies</strong> handle capacity, cancellations, check-ins, and reservation limits.",
      fr: "Créez des quarts <em>uniques</em> ou <em>récurrents</em> en lot. Laissez les bénévoles <strong>s'auto-planifier</strong>, <strong>demander une approbation</strong>, ou affectez-les vous-même. Les <strong>politiques de planification</strong> personnalisées gèrent la capacité, les annulations, le pointage et les limites de réservation.",
    },
    hero_meta_recurring: { en: "Multi-site & recurring", fr: "Multi-sites et récurrents" },
    hero_meta_calendar: { en: "Calendar sync", fr: "Sync calendrier" },
    hero_meta_reminders: { en: "Built-in reminders", fr: "Rappels intégrés" },

    // ── Hero mockup labels: scheduler / calendar grid ──
    scheduler_mock: {
      url: { en: "vomevolunteer.com/schedule/march-2026", fr: "vomevolunteer.com/horaire/mars-2026" },
      kicker: { en: "ORG SCHEDULE", fr: "HORAIRE DE L'ORG" },
      live: { en: "Week view", fr: "Vue semaine" },
      week_title: { en: "March 9 – 15 · Hospital companion program", fr: "9 – 15 mars · Accompagnement hospitalier" },
      day_mon: { en: "Mon 9", fr: "Lun 9" },
      day_tue: { en: "Tue 10", fr: "Mar 10" },
      day_wed: { en: "Wed 11", fr: "Mer 11" },
      day_thu: { en: "Thu 12", fr: "Jeu 12" },
      day_fri: { en: "Fri 13", fr: "Ven 13" },
      shift1_time: { en: "8:00 – 12:00", fr: "8 h – 12 h" },
      shift1_name: { en: "Morning floor companion", fr: "Accompagnement matin" },
      shift1_count: { en: "4 / 6 booked", fr: "4 / 6 réservés" },
      shift2_time: { en: "13:00 – 17:00", fr: "13 h – 17 h" },
      shift2_name: { en: "Afternoon companion", fr: "Accompagnement après-midi" },
      shift2_count: { en: "Full · 2 on waitlist", fr: "Complet · 2 en attente" },
      shift3_time: { en: "9:00 – 13:00", fr: "9 h – 13 h" },
      shift3_name: { en: "Family lounge greeter", fr: "Accueil salon familial" },
      shift3_count: { en: "Instant book · 3 spots", fr: "Réservation instantanée · 3 places" },
      shift4_time: { en: "10:00 – 14:00", fr: "10 h – 14 h" },
      shift4_name: { en: "Group reservation · McGill team", fr: "Réservation de groupe · équipe McGill" },
      shift4_count: { en: "Group of 8 · approved", fr: "Groupe de 8 · approuvé" },
      shift5_time: { en: "14:00 – 18:00", fr: "14 h – 18 h" },
      shift5_name: { en: "Pediatric ward visit", fr: "Visite pédiatrie" },
      shift5_count: { en: "Pending approval · 1", fr: "En attente d'approbation · 1" },
      legend_open: { en: "Open", fr: "Ouvert" },
      legend_full: { en: "Full", fr: "Complet" },
      legend_pending: { en: "Pending", fr: "En attente" },
      filter_label: { en: "Site: All · Recurring weekly", fr: "Site : Tous · Récurrent hebdo" },
    },

    // ── Spotlight 1 mockup: shift creation popup (recurring + capacity) ──
    create_mock: {
      chip: { en: "CREATE SHIFT", fr: "CRÉER UN QUART" },
      shift_title: { en: "Morning floor companion", fr: "Accompagnement matin" },
      label_opp: { en: "Opportunity", fr: "Opportunité" },
      value_opp: { en: "Hospital companion program", fr: "Programme d'accompagnement hospitalier" },
      label_when: { en: "When", fr: "Quand" },
      value_when: { en: "Mon to Fri · 8:00 – 12:00", fr: "Lun à Ven · 8 h – 12 h" },
      label_repeat: { en: "Repeat", fr: "Répétition" },
      value_repeat: { en: "Weekly until June 28, 2026", fr: "Hebdo jusqu'au 28 juin 2026" },
      label_capacity: { en: "Capacity", fr: "Capacité" },
      value_capacity_min: { en: "Min 2", fr: "Min 2" },
      value_capacity_max: { en: "Max 6", fr: "Max 6" },
      value_capacity_wait: { en: "Waitlist on", fr: "Liste d'attente activée" },
      label_booking: { en: "Booking", fr: "Réservation" },
      pill_instant: { en: "Instant", fr: "Instantanée" },
      pill_request: { en: "Request approval", fr: "Demande d'approbation" },
      pill_assign: { en: "Admin-assign", fr: "Admin affecte" },
      label_visible: { en: "Visible to", fr: "Visible à" },
      value_visible: { en: "Tag: Healthcare · 18+ · Site: Mtl General", fr: "Étiquette : Santé · 18 ans+ · Site : Hôpital général Mtl" },
      preview_count: { en: "Generates 16 shifts", fr: "Génère 16 quarts" },
      save_btn: { en: "Save and publish", fr: "Enregistrer et publier" },
    },

    // ── Spotlight 2 mockup: volunteer self-booking view ──
    book_mock: {
      chip: { en: "VOLUNTEER APP", fr: "APP BÉNÉVOLE" },
      title: { en: "Pick a shift · March 9 – 15", fr: "Choisir un quart · 9 – 15 mars" },
      tag_hospital: { en: "Hospital companion", fr: "Accompagnement hospitalier" },
      slot1_day: { en: "Mon · Mar 9", fr: "Lun · 9 mars" },
      slot1_time: { en: "8:00 – 12:00", fr: "8 h – 12 h" },
      slot1_meta: { en: "4 / 6 booked", fr: "4 / 6 réservés" },
      slot1_action: { en: "Book instantly", fr: "Réserver instantanément" },
      slot2_day: { en: "Wed · Mar 11", fr: "Mer · 11 mars" },
      slot2_time: { en: "9:00 – 13:00", fr: "9 h – 13 h" },
      slot2_meta: { en: "3 spots left", fr: "3 places restantes" },
      slot2_action: { en: "Book instantly", fr: "Réserver instantanément" },
      slot3_day: { en: "Fri · Mar 13", fr: "Ven · 13 mars" },
      slot3_time: { en: "13:00 – 17:00", fr: "13 h – 17 h" },
      slot3_meta: { en: "Full · waitlist available", fr: "Complet · liste d'attente" },
      slot3_action: { en: "Join waitlist", fr: "Rejoindre la liste" },
      slot4_day: { en: "Sat · Mar 14", fr: "Sam · 14 mars" },
      slot4_time: { en: "10:00 – 14:00", fr: "10 h – 14 h" },
      slot4_meta: { en: "Bring a group · up to 8", fr: "Avec un groupe · jusqu'à 8" },
      slot4_action: { en: "Reserve for group", fr: "Réserver pour un groupe" },
      slot5_day: { en: "Sun · Mar 15", fr: "Dim · 15 mars" },
      slot5_time: { en: "14:00 – 18:00", fr: "14 h – 18 h" },
      slot5_meta: { en: "Approval needed", fr: "Approbation requise" },
      slot5_action: { en: "Request approval", fr: "Demander l'approbation" },
      footer_policy: { en: "2 of 3 reservations used this week", fr: "2 de 3 réservations utilisées cette semaine" },
    },

    // ── Spotlight 3 mockup: shift chatroom ──
    chatroom_mock: {
      chip: { en: "SHIFT CHATROOM", fr: "SALON DU QUART" },
      title: { en: "Healthcare Intern Assistance", fr: "Soutien aux stagiaires en santé" },
      auto_label: { en: "May 5 · 9:30 AM – 12:30 PM · 4 attendees", fr: "5 mai · 9 h 30 – 12 h 30 · 4 participants" },
      msg1_author: { en: "Coordinator · Sarah", fr: "Coordonnatrice · Sarah" },
      msg1_time: { en: "Yesterday · 4:12 PM", fr: "Hier · 16 h 12" },
      msg1_text: { en: "Heads up team: enter through the south entrance tomorrow, the main lobby is closed for cleaning.", fr: "Avis à l'équipe : entrez par l'entrée sud demain, le hall principal est fermé pour entretien." },
      msg2_author: { en: "Riley T.", fr: "Riley T." },
      msg2_time: { en: "Yesterday · 4:30 PM", fr: "Hier · 16 h 30" },
      msg2_text: { en: "Got it. Should I bring my ID badge from last month?", fr: "Compris. Dois-je apporter mon badge d'identité du mois dernier ?" },
      msg3_author: { en: "Coordinator · Sarah", fr: "Coordonnatrice · Sarah" },
      msg3_time: { en: "Yesterday · 4:35 PM", fr: "Hier · 16 h 35" },
      msg3_text: { en: "Yes, please. Reminder: check in at the kiosk by 9:25 AM so we can start on time.", fr: "Oui, merci. Rappel : pointez à la borne avant 9 h 25 pour qu'on commence à l'heure." },
      reminder_label: { en: "Auto reminder", fr: "Rappel automatique" },
      reminder_text: { en: "Vome will send a check-in reminder 30 min before the shift.", fr: "Vome enverra un rappel de pointage 30 min avant le quart." },
      input_placeholder: { en: "Message all 4 attendees…", fr: "Écrire aux 4 participants…" },
    },

    // ── Benefits grid (6) ──
    benefits_h2: { en: "1.25M+ shifts have been trusted to run on Vome.", fr: "Plus de 1,25 M de quarts ont été confiés à Vome." },
    benefits_sub: {
      en: "From national events with thousands of volunteers showing up in a single day, to multi-site healthcare organizations coordinating 200+ volunteers daily, Vome scheduling makes it easy for both administrators and volunteers to keep pace.",
      fr: "D'événements nationaux où des milliers de bénévoles arrivent en une seule journée aux organismes de santé multi-sites coordonnant plus de 200 bénévoles chaque jour, la planification Vome aide les administrateurs et les bénévoles à suivre le rythme.",
    },
    ben1_title: { en: "Bulk shifts and reusable templates", fr: "Quarts en lot et modèles réutilisables" },
    ben1_desc: { en: "Generate one-time or recurring shifts in a few clicks. Save any setup as a template and reuse it next season, no rebuilding from scratch.", fr: "Générez des quarts uniques ou récurrents en quelques clics. Sauvegardez chaque configuration comme modèle et réutilisez-la la saison suivante, sans tout refaire." },
    ben2_title: { en: "Self-schedule, request, or admin-assign", fr: "Auto-planification, demande ou affectation admin" },
    ben2_desc: { en: "Open shifts to instant booking for approved volunteers, require admin approval, or pre-assign in bulk from the schedule view.", fr: "Ouvrez les quarts à la réservation instantanée pour les bénévoles approuvés, exigez l'approbation admin ou affectez en lot depuis la vue d'horaire." },
    ben3_title: { en: "Custom scheduling policies", fr: "Politiques de planification personnalisées" },
    ben3_desc: { en: "Control everything, from restricting overlapping reservations to when volunteers can check in or cancel and whether waitlists are allowed. All handled per opportunity.", fr: "Contrôlez tout : des réservations qui se chevauchent au moment où les bénévoles peuvent pointer ou annuler, et si les listes d'attente sont permises. Le tout géré par opportunité." },
    ben4_title: { en: "Group reservations and guests", fr: "Réservations de groupe et invités" },
    ben4_desc: { en: "Let one volunteer book on behalf of a team, family, or corporate group, and add guests to a reservation. Vome stores the lead, party size, and group on the shift.", fr: "Permettez à un bénévole de réserver pour une équipe, une famille ou un groupe corporatif, et d'ajouter des invités à la réservation. Vome conserve le responsable, la taille et le groupe au quart." },
    ben5_title: { en: "Configure chatrooms or scheduled notifications", fr: "Configurez salons et notifications planifiées" },
    ben5_desc: { en: "Enable per-shift chatrooms with attendees added automatically, or schedule email and push notifications to send before, during, or after shifts, with dynamic messaging across every shift.", fr: "Activez des salons par quart avec les participants ajoutés automatiquement, ou planifiez des notifications par courriel et push à envoyer avant, pendant ou après les quarts, avec messagerie dynamique à travers tous les quarts." },
    ben6_title: { en: "Reporting out of the box", fr: "Rapports prêts à l'emploi" },
    ben6_desc: { en: "Pull shift activity by site, location, opportunity, or hours completed. Save custom views, filters, and shift tags. Permissions scope each admin to what they manage.", fr: "Extrayez l'activité par site, lieu, opportunité ou heures complétées. Enregistrez des vues, filtres et étiquettes de quart personnalisés. Les permissions limitent chaque admin à ce qu'il gère." },

    // ── Spotlight 1: Build / create shifts ──
    spot1_kicker: { en: "BUILD", fr: "CRÉER" },
    spot1_title: { en: "Build and publish your schedule in a few clicks.", fr: "Créez et publiez votre horaire en quelques clics." },
    spot1_body: {
      en: "Generate <strong>recurring shifts</strong> in bulk, set <strong>capacity</strong> with min and max attendees, turn on <strong>waitlists</strong>, and decide who can see each shift. Restrict by tag, role, age, or site. Vome publishes the dates and keeps every change in sync.",
      fr: "Générez des <strong>quarts récurrents</strong> en lot, définissez la <strong>capacité</strong> avec minimum et maximum, activez les <strong>listes d'attente</strong> et décidez qui voit chaque quart. Restreignez par étiquette, rôle, âge ou site. Vome publie les dates et garde chaque changement synchronisé.",
    },
    spot1_b1: { en: "Save any shift setup as a template and reuse it for next season's program, no rebuilding from scratch", fr: "Sauvegardez n'importe quelle configuration comme modèle et réutilisez-la pour la prochaine saison, sans tout refaire" },
    spot1_b2: { en: "Bulk-edit existing shifts: change capacity, times, spots, or coordinators across hundreds of shifts in a single action", fr: "Modifiez en lot les quarts existants : capacité, horaires, places ou coordonnateurs sur des centaines de quarts en une seule action" },
    spot1_b3: { en: "Organize with shift tags and saved locations so your schedule stays sortable, filterable, and scoped to each site", fr: "Organisez avec des étiquettes de quart et des lieux enregistrés pour garder votre horaire triable, filtrable et limité à chaque site" },
    spot1_b4: { en: "Require a form, training, or background check before a volunteer can book, with recruitment and onboarding wired into the schedule", fr: "Exigez un formulaire, une formation ou une vérification d'antécédents avant qu'un bénévole puisse réserver, avec recrutement et intégration intégrés à l'horaire" },

    // ── Spotlight 2: Self-scheduling and instant booking ──
    spot2_kicker: { en: "RESERVE", fr: "RÉSERVER" },
    spot2_title: { en: "Volunteers reserve the way you want them to.", fr: "Les bénévoles réservent de la façon dont vous le voulez." },
    spot2_body: {
      en: "Approved volunteers can <strong>reserve instantly with auto-confirmation</strong>, or every reservation can be <strong>routed for admin approval</strong>. Group reservations let one volunteer reserve for a team or family. Reservation limits and cancellation windows are enforced automatically per scheduling policy.",
      fr: "Les bénévoles approuvés peuvent <strong>réserver instantanément avec confirmation automatique</strong>, ou chaque réservation peut être <strong>acheminée pour approbation admin</strong>. Les réservations de groupe permettent de réserver pour une équipe ou une famille. Les limites de réservation et fenêtres d'annulation sont appliquées automatiquement par politique.",
    },
    spot2_b1: { en: "Vome flags reservation conflicts before they happen, with no double-bookings and no overlaps", fr: "Vome détecte les conflits de réservation avant qu'ils n'arrivent, sans doubles réservations ni chevauchements" },
    spot2_b2: { en: "Mass-assign volunteers across many shifts in a single action, straight from the schedule view", fr: "Affectez des bénévoles en lot à plusieurs quarts en une seule action, directement depuis l'horaire" },
    spot2_b3: { en: "Mobile check-in from the volunteer app on arrival, or scan a shared QR kiosk at the door", fr: "Pointage mobile depuis l'app bénévole à l'arrivée, ou via un kiosque QR partagé à l'entrée" },
    spot2_b4: { en: "Waitlists auto-promote volunteers when a spot opens, with notifications fired automatically", fr: "Les listes d'attente promeuvent automatiquement les bénévoles quand une place se libère, avec notifications déclenchées automatiquement" },

    // ── Spotlight 3: Coordinate (chatrooms + reminders + calendar sync) ──
    spot3_kicker: { en: "COORDINATE", fr: "COORDONNER" },
    spot3_title: { en: "Coordinate every shift without chasing anyone.", fr: "Coordonnez chaque quart sans courir après personne." },
    spot3_body: {
      en: "Configure <strong>custom notification policies</strong> that fire dynamic messages before, during, and after every shift, by email, push, or in-app. Each shift can also get its own <strong>auto-generated chatroom</strong> with attendees added on reservation, so coordinators can drop last-minute updates to the whole crew. Volunteers sync to <strong>Google, Outlook, or Apple Calendar</strong>, and Vome fires reminders automatically.",
      fr: "Configurez des <strong>politiques de notification personnalisées</strong> qui envoient des messages dynamiques avant, pendant et après chaque quart, par courriel, push ou dans l'app. Chaque quart peut aussi avoir son <strong>salon généré automatiquement</strong> avec les participants ajoutés à la réservation, pour que les coordonnateurs envoient les mises à jour de dernière minute à toute l'équipe. Les bénévoles synchronisent à <strong>Google, Outlook ou Apple Calendar</strong>, et Vome envoie les rappels automatiquement.",
    },
    spot3_b1: { en: "Mark absences and log hours directly from the shift view, with no separate tracker and no copy-paste", fr: "Marquez les absences et consignez les heures directement depuis le quart, sans outil séparé ni copier-coller" },
    spot3_b2: { en: "Assign a coordinator to each shift so volunteers always know who to contact, and admins know who's accountable", fr: "Affectez un coordonnateur à chaque quart pour que les bénévoles sachent à qui s'adresser, et les admins qui est responsable" },
    spot3_b3: { en: "Custom notification policies: dynamic messages before, during, and after every shift, through the channel you choose", fr: "Politiques de notification personnalisées : messages dynamiques avant, pendant et après chaque quart, sur le canal de votre choix" },
    spot3_b4: { en: "Export the daily roster to PDF, Excel, or CSV with attendees, contact info, group rosters, and any custom fields", fr: "Exportez la liste quotidienne en PDF, Excel ou CSV avec participants, coordonnées, listes de groupe et champs personnalisés" },

    // ── Mid-page CTA banner (after the 3 spotlights) ──
    midcta_h2: { en: "See for yourself.", fr: "Voyez par vous-même." },
    midcta_sub: { en: "Start a 30-day free trial and schedule your first shift in minutes.", fr: "Commencez un essai gratuit de 30 jours et planifiez votre premier quart en quelques minutes." },
    midcta_button: { en: "Start your free trial", fr: "Commencer l'essai gratuit" },

    // ── How it works (4 steps) ──
    how_h2: { en: "How it works", fr: "Comment ça fonctionne" },
    how_sub: {
      en: "Build the shifts. Set the policy. Volunteers reserve. Vome handles the rest.",
      fr: "Créez les quarts. Définissez la politique. Les bénévoles réservent. Vome fait le reste.",
    },
    step1_title: { en: "Generate the shifts", fr: "Générer les quarts" },
    step1_desc: { en: "Bulk-create one-time or recurring shifts. Set capacity, dates, and which volunteers can see them.", fr: "Créez en lot des quarts uniques ou récurrents. Définissez capacité, dates et bénévoles autorisés." },
    step2_title: { en: "Set the policy", fr: "Définir la politique" },
    step2_desc: { en: "Choose instant booking, approval, or admin-assign. Configure cancellations, check-ins, and reservation limits.", fr: "Choisissez réservation instantanée, approbation ou affectation admin. Configurez annulations, pointage et limites." },
    step3_title: { en: "Volunteers reserve", fr: "Les bénévoles réservent" },
    step3_desc: { en: "From the app, browser, or a public calendar embedded on a form. Group reservations covered.", fr: "Depuis l'app, le navigateur ou un calendrier public intégré à un formulaire. Réservations de groupe incluses." },
    step4_title: { en: "Vome runs the day", fr: "Vome gère la journée" },
    step4_desc: { en: "Reminders fire, the chatroom is live, attendees check in, and the schedule export is ready when you need it.", fr: "Les rappels partent, le salon est actif, les participants pointent et l'export d'horaire est prêt au besoin." },

    // ── Differentiators (3) ──
    diff_h2: { en: "More than a calendar tool", fr: "Plus qu'un outil de calendrier" },
    diff_sub: {
      en: "Generic calendar tools show free time. Vome runs the actual scheduling: capacity, eligibility, group reservations, chatrooms, and renewals tied to the volunteer database.",
      fr: "Les outils de calendrier génériques affichent du temps libre. Vome exécute la vraie planification : capacité, admissibilité, réservations de groupe, salons et renouvellements liés à la base de données.",
    },
    diff1_title: { en: "Policies, not just slots", fr: "Politiques, pas juste des plages" },
    diff1_desc: { en: "Capacity, cancellations, check-ins, and reservation limits live as configurable policies, applied per opportunity or globally. No spreadsheets.", fr: "Capacité, annulations, pointage et limites vivent comme politiques configurables, par opportunité ou globalement. Sans chiffrier." },
    diff2_title: { en: "Group reservations and check-in, native", fr: "Réservations de groupe et pointage, natifs" },
    diff2_desc: { en: "One volunteer books for a team, family, or corporate group, with guests included. Each shift carries its own chatroom and check-in window. Volunteers scan a QR or check in from the mobile app, and hours log automatically.", fr: "Un bénévole réserve pour une équipe, une famille ou un groupe corporatif, invités inclus. Chaque quart a son salon et sa fenêtre de pointage. Les bénévoles scannent un code QR ou pointent depuis l'app mobile, et les heures sont consignées automatiquement." },
    diff3_title: { en: "Proven at scale", fr: "Éprouvé à grande échelle" },
    diff3_desc: { en: "1.25M+ shifts scheduled across hospital systems, national events, and multi-site programs. Vome handles spikes and routine alike, on web and mobile.", fr: "Plus de 1,25 M de quarts planifiés dans des systèmes hospitaliers, des événements nationaux et des programmes multi-sites. Vome gère les pics comme la routine, sur web et mobile." },

    // ── FAQ (module-specific) ──
    faq_h2: { en: "Scheduling FAQs", fr: "FAQ Planification" },
    faq_sub: {
      en: "Common questions about shifts, policies, group reservations, and reminders.",
      fr: "Questions fréquentes sur les quarts, politiques, réservations de groupe et rappels.",
    },
    faq_cta_text: { en: "Still have questions?", fr: "Vous avez encore des questions ?" },
    faq_cta_link: { en: "Talk to our team", fr: "Parlez à notre équipe" },
    faq1_q: { en: "Can I create recurring shifts in bulk?", fr: "Puis-je créer des quarts récurrents en lot ?" },
    faq1_a: {
      en: "Yes. Pick a date range, the days of the week, and the time window. Vome generates every shift in that range with the capacity and visibility rules you configured. You can edit any single shift afterward without breaking the recurring pattern.",
      fr: "Oui. Choisissez une plage de dates, les jours de la semaine et la fenêtre horaire. Vome génère chaque quart dans la plage avec la capacité et les règles de visibilité configurées. Vous pouvez modifier un quart précis sans casser le motif récurrent.",
    },
    faq2_q: { en: "How do scheduling policies work?", fr: "Comment fonctionnent les politiques de planification ?" },
    faq2_a: {
      en: "Policies control capacity, cancellation windows, check-in rules, and how many reservations a volunteer can hold at a time. Set a default policy for the org and override per opportunity. Vome enforces the rules at booking time and at check-in, so volunteers can't book past the limits.",
      fr: "Les politiques contrôlent la capacité, les fenêtres d'annulation, les règles de pointage et combien de réservations un bénévole peut détenir. Définissez une politique par défaut pour l'org et remplacez-la par opportunité. Vome applique les règles à la réservation et au pointage, alors les bénévoles ne peuvent pas dépasser les limites.",
    },
    faq3_q: { en: "Can volunteers book for a group?", fr: "Les bénévoles peuvent-ils réserver pour un groupe ?" },
    faq3_a: {
      en: "Yes. Group reservations let one volunteer book on behalf of a team, family, or corporate group. Vome stores the group name, the lead, and the party size on the shift. The advanced Groups module ties group reservations back to dedicated groups for cleaner workflows and analytics.",
      fr: "Oui. Les réservations de groupe permettent à un bénévole de réserver pour une équipe, une famille ou un groupe corporatif. Vome conserve le nom du groupe, le responsable et la taille au quart. Le module Groupes avancé relie les réservations à des groupes dédiés pour des flux et analyses plus propres.",
    },
    faq4_q: { en: "How do shift chatrooms work?", fr: "Comment fonctionnent les salons de quart ?" },
    faq4_a: {
      en: "Each shift can have an auto-generated chatroom. As volunteers reserve, they're added automatically. Coordinators message the whole group at once for last-minute updates. The chatroom is optional per shift, and access ends when the shift does.",
      fr: "Chaque quart peut avoir un salon généré automatiquement. À mesure que les bénévoles réservent, ils sont ajoutés automatiquement. Les coordonnateurs écrivent à tout le groupe d'un coup pour les mises à jour de dernière minute. Le salon est optionnel par quart, et l'accès se termine avec le quart.",
    },
    faq5_q: { en: "Can I save a shift setup as a template?", fr: "Puis-je sauvegarder une configuration de quart comme modèle ?" },
    faq5_a: {
      en: "Yes. Save any shift or recurring pattern as a template, including capacity, visibility rules, scheduling policy, and all. Reuse the template next season or for a similar program in one click, no rebuilding from scratch.",
      fr: "Oui. Sauvegardez tout quart ou motif récurrent comme modèle, incluant capacité, règles de visibilité, politique de planification, tout y est. Réutilisez le modèle la saison suivante ou pour un programme similaire en un clic, sans tout refaire.",
    },
    faq6_q: { en: "What kind of reporting comes built in?", fr: "Quels rapports sont intégrés ?" },
    faq6_a: {
      en: "Out-of-the-box reports for shift activity by site, location, opportunity, hours completed, and more. Save custom views and filters, attach shift tags, and scope each admin to what they manage with permissions. Export to PDF, Excel, or CSV anytime.",
      fr: "Des rapports prêts à l'emploi pour l'activité des quarts par site, lieu, opportunité, heures complétées et plus encore. Sauvegardez des vues et filtres personnalisés, ajoutez des étiquettes de quart, et limitez chaque admin à ce qu'il gère via les permissions. Exportez en PDF, Excel ou CSV à tout moment.",
    },

    // ── Matrix heading override ──
    matrix_h2: { en: "Scheduling features by plan", fr: "Fonctionnalités de planification par forfait" },
  },

  module_hours: {
    page_title: { en: "Volunteer hour tracking & check-in software | Vome", fr: "Logiciel de suivi des heures et de pointage | Vome" },
    page_description: {
      en: "Track volunteer hours your way. QR-code check-in via the mobile app, on-site kiosks on any device, volunteer hour claims, mass logging, and integrated reservation and hours reports.",
      fr: "Suivez les heures de bénévolat à votre façon. Pointage par code QR via l'application mobile, bornes sur place sur tout appareil, déclarations d'heures, saisie en lot et rapports de réservation et d'heures intégrés.",
    },

    // ── Hero ──
    hero_eyebrow: { en: "Hour tracking & check-in", fr: "Suivi des heures et pointage" },
    hero_h1_part1: { en: "Track volunteer hours ", fr: "Suivez les heures de bénévolat " },
    hero_h1_accent: { en: "the way each program works", fr: "selon ce que chaque programme exige" },
    hero_h1_part2: { en: ".", fr: "." },
    hero_sub: {
      en: "Pick the tools that fit your program: <em>QR-code check-in</em>, <em>on-site kiosks</em>, <em>hour claims</em>, <em>mass logging</em>, and <em>GPS proximity validation</em>. Every hour flows straight into reservation and hours reports.",
      fr: "Choisissez les outils qui conviennent à votre programme : <em>pointage par code QR</em>, <em>bornes sur place</em>, <em>déclarations d'heures</em>, <em>saisie en lot</em> et <em>validation par proximité GPS</em>. Chaque heure alimente directement les rapports de réservation et d'heures.",
    },
    hero_meta_qr: { en: "Reusable QR codes", fr: "Codes QR réutilisables" },
    hero_meta_kiosk: { en: "Unlimited kiosks", fr: "Bornes illimitées" },
    hero_meta_reports: { en: "Built-in reports", fr: "Rapports intégrés" },

    // ── Hero mockup labels: on-site Attendance Kiosk ──
    kiosk_mock: {
      url: { en: "vomevolunteer.com/kiosk/main-entrance", fr: "vomevolunteer.com/kiosk/entree-principale" },
      kicker: { en: "ATTENDANCE KIOSK", fr: "BORNE DE PRÉSENCE" },
      live: { en: "Live", fr: "En direct" },
      site_label: { en: "Main entrance · Spring 2026", fr: "Entrée principale · Printemps 2026" },
      search_placeholder: { en: "Search your name or scan QR", fr: "Cherchez votre nom ou scannez le code QR" },
      vol_name: { en: "Maya Tremblay", fr: "Maya Tremblay" },
      vol_shift: { en: "Hospital companion · 9:00–13:00", fr: "Accompagnement hospitalier · 9 h–13 h" },
      vol_role: { en: "Reading partner", fr: "Partenaire de lecture" },
      checkin_btn: { en: "Check in", fr: "Pointer l'entrée" },
      checkout_btn: { en: "Check out", fr: "Pointer la sortie" },
      arrived_label: { en: "Just arrived", fr: "Vient d'arriver" },
      arrived_meta: { en: "Sam Lacroix · 8:57", fr: "Sam Lacroix · 8 h 57" },
      arrived_meta2: { en: "Priya Singh · 8:54", fr: "Priya Singh · 8 h 54" },
      qr_hint: { en: "Or scan the daily QR code with the Vome app", fr: "Ou scannez le code QR du jour avec l'app Vome" },
    },

    // ── Spotlight 1 (CHECK IN) mockup: QR + tap-to-check-in on phone ──
    qr_mock: {
      chip: { en: "MOBILE CHECK-IN", fr: "POINTAGE MOBILE" },
      title: { en: "Vome on iPhone", fr: "Vome sur iPhone" },
      qr_label: { en: "Scan to check in", fr: "Scannez pour pointer" },
      qr_caption: { en: "Hospital companion · Sat 9:00", fr: "Accompagnement hospitalier · sam. 9 h" },
      detected_label: { en: "QR detected", fr: "Code QR détecté" },
      gps_chip: { en: "Within 50 m of site", fr: "À moins de 50 m du site" },
      action_label: { en: "Tap to confirm", fr: "Touchez pour confirmer" },
      action_btn: { en: "Check in now", fr: "Pointer maintenant" },
      auto_caption: { en: "Auto check-out at 13:00 if you forget", fr: "Pointage de sortie automatique à 13 h si oubli" },
    },

    // ── Spotlight 2 (CLAIMS) mockup: admin queue of hour claims ──
    claims_mock: {
      chip: { en: "HOUR CLAIMS", fr: "DÉCLARATIONS D'HEURES" },
      title: { en: "Pending review · 4", fr: "À réviser · 4" },
      filter_label: { en: "Sort by", fr: "Trier par" },
      filter_value: { en: "Newest", fr: "Plus récent" },
      c1_name: { en: "Léa Bouchard", fr: "Léa Bouchard" },
      c1_shift: { en: "Food drive · Apr 22", fr: "Collecte alimentaire · 22 avril" },
      c1_hours: { en: "3.5 h", fr: "3,5 h" },
      c1_state: { en: "Pending", fr: "En attente" },
      c2_name: { en: "Marcus Diallo", fr: "Marcus Diallo" },
      c2_shift: { en: "Tutoring · Apr 22", fr: "Tutorat · 22 avril" },
      c2_hours: { en: "2 h", fr: "2 h" },
      c2_state: { en: "Approved", fr: "Approuvée" },
      c3_name: { en: "Aïsha Khan", fr: "Aïsha Khan" },
      c3_shift: { en: "Off-platform · Apr 21", fr: "Hors plateforme · 21 avril" },
      c3_hours: { en: "5 h", fr: "5 h" },
      c3_state: { en: "Pending", fr: "En attente" },
      approve_btn: { en: "Approve", fr: "Approuver" },
      decline_btn: { en: "Decline", fr: "Refuser" },
      toast_label: { en: "Logged to profile", fr: "Ajoutée au profil" },
      toast_meta: { en: "Marcus Diallo · 2 h", fr: "Marcus Diallo · 2 h" },
    },

    // ── Spotlight 3 (REPORT) mockup: hours dashboard with site/program filters ──
    dash_mock: {
      chip: { en: "HOURS REPORT", fr: "RAPPORT D'HEURES" },
      title: { en: "April · 1,248 hours", fr: "Avril · 1 248 heures" },
      filter1_label: { en: "Site", fr: "Site" },
      filter1_value: { en: "All sites", fr: "Tous les sites" },
      filter2_label: { en: "Program", fr: "Programme" },
      filter2_value: { en: "Hospital", fr: "Hôpital" },
      kpi1_label: { en: "Hours logged", fr: "Heures consignées" },
      kpi1_value: { en: "1,248", fr: "1 248" },
      kpi2_label: { en: "Volunteers", fr: "Bénévoles" },
      kpi2_value: { en: "187", fr: "187" },
      kpi3_label: { en: "Reservations", fr: "Réservations" },
      kpi3_value: { en: "342", fr: "342" },
      bars_label: { en: "Hours by program", fr: "Heures par programme" },
      bar1: { en: "Hospital", fr: "Hôpital" },
      bar2: { en: "Tutoring", fr: "Tutorat" },
      bar3: { en: "Food drive", fr: "Collecte alimentaire" },
      bar4: { en: "Events", fr: "Événements" },
      export_btn: { en: "Export to Excel", fr: "Exporter vers Excel" },
    },

    // ── Benefits grid (6 cards) ──
    benefits_h2: { en: "Hour tracking that fits every kind of shift.", fr: "Un suivi des heures qui s'adapte à chaque type de quart." },
    benefits_sub: {
      en: "Some volunteers scan a QR code, others tap in at a kiosk, a few submit hour claims after the fact. Pick the method per opportunity. Every hour flows into the same profile, the same reservation record, and the same set of reports.",
      fr: "Certains bénévoles scannent un code QR, d'autres pointent à une borne, quelques-uns soumettent des déclarations après coup. Choisissez la méthode par opportunité. Chaque heure alimente le même profil, la même réservation et les mêmes rapports.",
    },
    ben1_title: { en: "Multiple ways to check in", fr: "Plusieurs façons de pointer" },
    ben1_desc: { en: "Volunteers can scan a QR code from the app, tap to check in from any device, or trigger a hands-free check-in via GPS proximity. Vome auto-checks-out anyone who forgets at shift end, and hours flow straight to the profile with no manual entry.", fr: "Les bénévoles scannent un code QR depuis l'app, pointent depuis n'importe quel appareil, ou déclenchent un pointage mains libres par proximité GPS. Vome rattrape automatiquement les oublis en fin de quart, et les heures alimentent le profil sans saisie manuelle." },
    ben2_title: { en: "On-site kiosks on any device", fr: "Bornes sur place sur tout appareil" },
    ben2_desc: { en: "Turn any tablet, phone, or computer into a self-service kiosk. Volunteers find their name, tap to check in, and the kiosk groups them by opportunity or category for fast lookup at busy events.", fr: "Transformez toute tablette, téléphone ou ordinateur en borne libre-service. Les bénévoles trouvent leur nom, pointent en un toucher, et la borne les regroupe par opportunité ou catégorie pour des événements achalandés." },
    ben3_title: { en: "Volunteer-submitted hour claims", fr: "Déclarations d'heures par les bénévoles" },
    ben3_desc: { en: "Volunteers can submit hours for any shift they completed, even ones that weren't booked through Vome. Approve, decline, or request more info in one click, and the time lands on their profile.", fr: "Les bénévoles peuvent soumettre des heures pour tout quart complété, même non réservé via Vome. Approuvez, refusez ou demandez plus d'info en un clic, et le temps s'ajoute au profil." },
    ben4_title: { en: "Bulk & past-shift hour logging", fr: "Saisie d'heures en lot et de quarts passés" },
    ben4_desc: { en: "Log hours for an entire shift in a few clicks, or backfill past shifts in bulk with accurate dates preserved. No spreadsheet edits, no per-volunteer data entry.", fr: "Consignez les heures pour un quart complet en quelques clics ou comblez en lot les quarts passés avec dates précises. Sans modifier de chiffriers, sans saisie par bénévole." },
    ben5_title: { en: "Custom attendance & claim settings", fr: "Paramètres d'assiduité et de déclaration personnalisés" },
    ben5_desc: { en: "Configure attendance rules per opportunity: pick the check-in methods, optional GPS proximity, grace windows, and claim policies that fit each program.", fr: "Configurez les règles d'assiduité par opportunité : choisissez les méthodes de pointage, la proximité GPS optionnelle, les fenêtres de grâce et les politiques de déclaration qui conviennent à chaque programme." },
    ben6_title: { en: "Reports with charts & built-in insights", fr: "Rapports avec graphiques et analyses intégrées" },
    ben6_desc: { en: "Built-in line graphs, monthly trends, and check-in heatmaps. Save custom views and filters per admin, group hours any way you need, and export to Excel or sync to any platform using Vome's API.", fr: "Graphiques linéaires, tendances mensuelles et cartes de pointage intégrés. Sauvegardez des vues et filtres par admin, regroupez les heures à votre façon, et exportez vers Excel ou synchronisez avec n'importe quelle plateforme via l'API Vome." },

    // ── Spotlight 1: CHECK IN. QR + mobile app ──
    spot1_kicker: { en: "CHECK IN", fr: "POINTER" },
    spot1_title: { en: "Check-in, however your program runs.", fr: "Le pointage, selon le fonctionnement de votre programme." },
    spot1_body: {
      en: "Pick the check-in flow that matches each opportunity. Some programs need <strong>no check-in at all</strong>. Vome auto-logs hours based on the shift's start and end times. From there, choose how volunteers confirm: scan a QR code from the app, just <strong>tap to check in</strong> with no scan needed, require GPS proximity to the site, or run an on-site <strong>Attendance Kiosk</strong> where volunteers find their name and check themselves in and out.",
      fr: "Choisissez le flux de pointage qui convient à chaque opportunité. Certains programmes n'exigent <strong>aucun pointage</strong>. Vome consigne les heures automatiquement selon l'heure de début et de fin du quart. À partir de là, choisissez comment les bénévoles confirment : scan d'un code QR depuis l'app, simple <strong>appui pour pointer</strong> sans scan, exigence de proximité GPS, ou <strong>Borne de présence</strong> sur place où les bénévoles trouvent leur nom et pointent eux-mêmes.",
    },
    spot1_b1: { en: "Configurable check-in windows per opportunity: early grace, late grace, and lock-out times to match how each program runs", fr: "Fenêtres de pointage configurables par opportunité : marges avant, après et verrouillage pour s'adapter à chaque programme" },
    spot1_b2: { en: "Volunteers see the shift name, time, and role on screen before they confirm, so there are no wrong-shift mistakes", fr: "Les bénévoles voient le nom du quart, l'heure et le rôle avant de confirmer, ce qui évite les erreurs de quart" },
    spot1_b3: { en: "Coordinators can manually adjust hours, mark absences, or log past-shift attendance from the same view", fr: "Les coordonnateurs peuvent ajuster les heures, marquer les absences ou consigner des quarts passés depuis la même vue" },
    spot1_b4: { en: "Hours flow straight to the volunteer profile and reservation record, ready for reports the moment the shift ends", fr: "Les heures alimentent directement le profil et la réservation, prêtes pour les rapports dès la fin du quart" },

    // ── Spotlight 2: CLAIMS. admin review of hour claims ──
    spot2_kicker: { en: "CLAIMS", fr: "DÉCLARATIONS" },
    spot2_title: { en: "Approve hour claims without chasing emails.", fr: "Approuvez les déclarations d'heures sans courir après les courriels." },
    spot2_body: {
      en: "You can choose to allow volunteers to submit hour claims for any shift they completed, even ones <strong>not booked through Vome</strong>. Each claim shows up in a queue with the shift, the volunteer, and the hours. Approve it and the time lands on their profile, ready for reports.",
      fr: "Vous pouvez permettre aux bénévoles de soumettre des déclarations pour tout quart complété, y compris ceux <strong>non réservés via Vome</strong>. Chaque déclaration apparaît dans une file avec le quart, le bénévole et les heures. Approuvez et le temps s'ajoute à leur profil, prêt pour les rapports.",
    },
    spot2_b1: { en: "Bulk approve or decline multiple claims at once", fr: "Approuvez ou refusez en lot plusieurs déclarations à la fois" },
    spot2_b2: { en: "Require volunteers to add a note or submit a form attached to their hour claim", fr: "Exigez des bénévoles qu'ils ajoutent une note ou soumettent un formulaire avec leur déclaration d'heures" },
    spot2_b3: { en: "Per-opportunity claim policies: max hours per submission, mandatory descriptions, attached evidence", fr: "Politiques de déclaration par opportunité : heures maximum par soumission, descriptions obligatoires, preuves jointes" },
    spot2_b4: { en: "Choose to allow volunteers to request additional hours, even if they've already been logged", fr: "Permettez aux bénévoles de demander des heures supplémentaires, même si elles ont déjà été consignées" },

    // ── Spotlight 3: REPORT. hours dashboard ──
    spot3_kicker: { en: "REPORT", fr: "ANALYSER" },
    spot3_title: { en: "Reservation and hours reports, in one view.", fr: "Rapports de réservation et d'heures, en une seule vue." },
    spot3_body: {
      en: "Every check-in, claim, and bulk log feeds the same dashboard. Slice <strong>by site, program, opportunity, or custom field</strong>. Compare reservation counts to hours actually logged. Export to Excel or sync with any platform using Vome's API.",
      fr: "Chaque pointage, déclaration et saisie en lot alimente le même tableau de bord. Découpez <strong>par site, programme, opportunité ou champ personnalisé</strong>. Comparez les réservations aux heures réellement consignées. Exportez vers Excel ou synchronisez avec n'importe quelle plateforme via l'API Vome.",
    },
    spot3_b1: { en: "Built-in line graphs, monthly trends, and check-in heatmaps, so you can see exactly when volunteers actually show up", fr: "Graphiques linéaires, tendances mensuelles et cartes de pointage intégrés, pour voir quand les bénévoles arrivent réellement" },
    spot3_b2: { en: "Mix and match report types: shift list, attendees & hours, volunteer bookings, check-in/out, all from one place", fr: "Combinez plusieurs types de rapports : liste des quarts, participants et heures, réservations, pointages, tout au même endroit" },
    spot3_b3: { en: "Save custom views and filters as permissioned dashboards for each admin or site", fr: "Sauvegardez des vues et filtres personnalisés en tableaux de bord avec permissions par admin ou par site" },
    spot3_b4: { en: "Auto-summary cards (total hours, top sites, average shifts/volunteer) calculated for you, no spreadsheet pivot tables required", fr: "Cartes de résumé automatiques (heures totales, meilleurs sites, moyenne de quarts/bénévole) calculées pour vous, sans tableaux croisés" },

    // ── Mid-page CTA banner (after the 3 spotlights) ──
    midcta_h2: { en: "See for yourself.", fr: "Voyez par vous-même." },
    midcta_sub: { en: "Start a 30-day free trial and start tracking hours with ease.", fr: "Commencez un essai gratuit de 30 jours et suivez vos heures en toute simplicité." },
    midcta_button: { en: "Start your free trial", fr: "Commencer l'essai gratuit" },

    // ── How it works (4 steps) ──
    how_h2: { en: "How it works", fr: "Comment ça fonctionne" },
    how_sub: {
      en: "Pick the check-in method per opportunity. Vome handles the rest, from arrival to report.",
      fr: "Choisissez la méthode de pointage par opportunité. Vome s'occupe du reste, de l'arrivée au rapport.",
    },
    step1_title: { en: "Pick a method", fr: "Choisir la méthode" },
    step1_desc: { en: "QR code, on-site kiosk, hour claims, or mass logging. Each opportunity can use a different combination.", fr: "Code QR, borne sur place, déclarations ou saisie en lot. Chaque opportunité peut combiner différemment." },
    step2_title: { en: "Volunteers check in", fr: "Les bénévoles pointent" },
    step2_desc: { en: "Scan from the app, tap into a kiosk, or wait to submit a claim later. GPS proximity is optional.", fr: "Scan depuis l'app, pointage à une borne, ou déclaration plus tard. La proximité GPS est optionnelle." },
    step3_title: { en: "Hours auto-log", fr: "Les heures se consignent" },
    step3_desc: { en: "Approved time lands on the volunteer profile and the opportunity record without manual data entry.", fr: "Le temps approuvé s'ajoute au profil du bénévole et au registre de l'opportunité, sans saisie manuelle." },
    step4_title: { en: "Pull the reports", fr: "Sortir les rapports" },
    step4_desc: { en: "Filter by site, program, or custom field. Export to Excel or sync to Google Sheets for funders and grants.", fr: "Filtrez par site, programme ou champ personnalisé. Exportez vers Excel ou synchronisez avec Google Sheets pour bailleurs et subventions." },

    // ── Differentiators (3) ──
    diff_h2: { en: "More than a punch clock", fr: "Plus qu'une carte de pointage" },
    diff_sub: {
      en: "Generic time-trackers ask volunteers to track their hours themselves. Vome offers 5+ methods to track hours systematically or automatically, and has all the reporting you need out of the box.",
      fr: "Les outils de pointage génériques demandent aux bénévoles de suivre leurs heures eux-mêmes. Vome offre plus de 5 méthodes de suivi systématique ou automatique, et tous les rapports nécessaires sont prêts à l'emploi.",
    },
    diff1_title: { en: "Multiple methods, one record", fr: "Plusieurs méthodes, un seul registre" },
    diff1_desc: { en: "QR scan, kiosk tap, hour claim, mass log. Whatever fits the program. Every minute lands in the same volunteer profile and report.", fr: "Scan QR, pointage à la borne, déclaration, saisie en lot. Selon ce qui convient au programme. Chaque minute alimente le même profil et le même rapport." },
    diff2_title: { en: "Tied to reservations", fr: "Lié aux réservations" },
    diff2_desc: { en: "Hours are matched to the shift each volunteer was booked for, so you can compare reserved time to time actually served.", fr: "Les heures sont associées au quart pour lequel le bénévole était réservé, vous pouvez donc comparer le temps réservé au temps réellement effectué." },
    diff3_title: { en: "Audit-ready reports", fr: "Rapports prêts pour audit" },
    diff3_desc: { en: "Group hours by site, program, or custom field. Export to Excel or sync with the tools you already use through Vome's API.", fr: "Regroupez les heures par site, programme ou champ personnalisé. Exportez vers Excel ou synchronisez avec les outils que vous utilisez déjà via l'API Vome." },

    // ── FAQ (module-specific) ──
    faq_h2: { en: "Hour tracking FAQs", fr: "FAQ sur le suivi des heures" },
    faq_sub: {
      en: "Common questions about volunteer check-in, hour claims, and reporting.",
      fr: "Questions fréquentes sur le pointage, les déclarations d'heures et les rapports.",
    },
    faq_cta_text: { en: "Still have questions?", fr: "Vous avez encore des questions ?" },
    faq_cta_link: { en: "Talk to our team", fr: "Parlez à notre équipe" },
    faq1_q: { en: "How does QR-code check-in work?", fr: "Comment fonctionne le pointage par code QR ?" },
    faq1_a: {
      en: "Customize and print one QR to be used across your program. Reserved attendees scan it from the Vome app on their phone to check in and out. The same QR code can be reused every shift, every day, with no need to print a new one. Hours log automatically on the volunteer's profile and reports.",
      fr: "Personnalisez et imprimez un code QR à utiliser dans tout votre programme. Les participants réservés le scannent depuis l'app Vome pour pointer entrée et sortie. Le même code peut servir à chaque quart, chaque jour, sans réimprimer. Les heures s'enregistrent automatiquement sur le profil du bénévole et dans les rapports.",
    },
    faq2_q: { en: "Do I need to buy hardware for the kiosk?", fr: "Faut-il acheter du matériel pour la borne ?" },
    faq2_a: {
      en: "No. The on-site kiosk is a web page that runs on any tablet, phone, or computer you already have. Open the kiosk URL, lock the device to that page, and you're set. You can run as many kiosks as you need, customized per location.",
      fr: "Non. La borne sur place est une page web qui fonctionne sur toute tablette, téléphone ou ordinateur que vous avez déjà. Ouvrez l'URL de la borne, verrouillez l'appareil sur cette page, et c'est prêt. Vous pouvez avoir autant de bornes que nécessaire, personnalisées par lieu.",
    },
    faq3_q: { en: "What happens when a volunteer forgets to check out?", fr: "Que se passe-t-il si un bénévole oublie de pointer sa sortie ?" },
    faq3_a: {
      en: "You can configure an automatic check-out at the end of the shift, so volunteers who forget still get credited for their reserved time. Admins can also adjust hours manually from the attendee list at any point.",
      fr: "Vous pouvez configurer un pointage de sortie automatique à la fin du quart, pour que les bénévoles qui oublient soient crédités pour leur temps réservé. Les administrateurs peuvent aussi ajuster les heures manuellement depuis la liste des participants à tout moment.",
    },
    faq4_q: { en: "Can volunteers log hours for shifts that weren't booked through Vome?", fr: "Peut-on consigner des heures pour des quarts non réservés via Vome ?" },
    faq4_a: {
      en: "Yes. Volunteers can submit hour claims for any shift they completed, even off-platform volunteering. The claim shows up in your review queue with the shift, date, and hours. Approve it and the time lands on their profile.",
      fr: "Oui. Les bénévoles peuvent soumettre des déclarations pour tout quart complété, même hors plateforme. La déclaration apparaît dans votre file de révision avec le quart, la date et les heures. Approuvez et le temps s'ajoute à leur profil.",
    },
    faq5_q: { en: "Can admins log hours in bulk?", fr: "Les administrateurs peuvent-ils consigner des heures en lot ?" },
    faq5_a: {
      en: "Yes. Pull up the attendee list for a shift or filter past volunteers, then log hours for the whole group in a few clicks. Dates and times stay accurate without manual data entry per person.",
      fr: "Oui. Affichez la liste des participants pour un quart ou filtrez les bénévoles passés, puis consignez les heures pour tout le groupe en quelques clics. Les dates et heures restent précises sans saisie manuelle individuelle.",
    },
    faq6_q: { en: "How do hours feed into reports?", fr: "Comment les heures alimentent-elles les rapports ?" },
    faq6_a: {
      en: "Every method (QR scan, kiosk, claim, bulk log) writes to the same volunteer profile and reservation record. Reports group hours by volunteer, opportunity, site, program, or custom field, and can be exported to Excel or any third-party platform.",
      fr: "Chaque méthode (scan QR, borne, déclaration, saisie en lot) écrit dans le même profil et la même réservation. Les rapports regroupent les heures par bénévole, opportunité, site, programme ou champ personnalisé, et peuvent être exportés vers Excel ou vers toute plateforme tierce.",
    },

    // ── Matrix heading override ──
    matrix_h2: { en: "Hour tracking features by plan", fr: "Fonctionnalités de suivi des heures par forfait" },
  },

  module_recognition: {
    page_title: { en: "Volunteer recognition: Vome Achievements & custom awards | Vome", fr: "Reconnaissance des bénévoles : Vome Achievements et prix personnalisés | Vome" },
    page_description: {
      en: "Design custom awards your team owns end to end — Volunteer of the Month, five-year tenure, anything you want. Every volunteer also earns Vome Achievements, a free Bronze-to-Platinum tier ladder, on every plan.",
      fr: "Concevez des prix personnalisés que votre équipe pilote de bout en bout — Bénévole du mois, ancienneté de cinq ans, ce que vous voulez. Chaque bénévole gagne aussi des Vome Achievements, une échelle Bronze à Platine gratuite, sur tous les forfaits.",
    },

    // ── Hero ──
    hero_eyebrow: { en: "Volunteer recognition software", fr: "Logiciel de reconnaissance des bénévoles" },
    hero_h1_part1: { en: "Recognize the volunteers ", fr: "Reconnaissez les bénévoles " },
    hero_h1_accent: { en: "your program runs on", fr: "qui font tourner votre programme" },
    hero_h1_part2: { en: ".", fr: "." },
    hero_sub: {
      en: "Design <strong>custom awards</strong> to reward your volunteers for the amazing work they do — Volunteer of the Month, #1 leader in hours, reaching a milestone, or anything you want.",
      fr: "Concevez des <strong>prix personnalisés</strong> pour récompenser vos bénévoles pour le travail formidable qu'ils accomplissent — Bénévole du mois, n°1 en heures, atteinte d'un jalon, ou ce que vous voulez.",
    },
    hero_meta_builtin: { en: "Create custom awards", fr: "Créez des prix personnalisés" },
    hero_meta_custom: { en: "Auto or assigned manually", fr: "Auto ou attribué manuellement" },
    hero_meta_profile: { en: "Set up in minutes", fr: "Configuré en quelques minutes" },

    // ── Hero mockup labels: volunteer profile wall ──
    wall_mock: {
      url: { en: "vomevolunteer.com/profile/recognition", fr: "vomevolunteer.com/profil/reconnaissance" },
      kicker: { en: "VOLUNTEER PROFILE", fr: "PROFIL BÉNÉVOLE" },
      just_earned: { en: "Just earned", fr: "Vient d'être gagné" },
      vol_name: { en: "Sofia Patel", fr: "Sofia Patel" },
      vol_meta: { en: "248 hours · 32 shifts · 1,240 VP", fr: "248 heures · 32 quarts · 1 240 PV" },
      section_earned: { en: "Earned", fr: "Gagnés" },
      section_progress: { en: "In progress", fr: "En cours" },
      a1_title: { en: "Silver tier reached", fr: "Niveau Argent atteint" },
      a1_meta: { en: "Earned today · 1,000 VP", fr: "Gagné aujourd'hui · 1 000 PV" },
      a2_title: { en: "First shift", fr: "Premier quart" },
      a2_meta: { en: "Vome challenge · 50 VP", fr: "Défi Vome · 50 PV" },
      a3_title: { en: "5-year volunteer", fr: "Bénévole de 5 ans" },
      a3_meta: { en: "Sent by Maya, coordinator", fr: "Envoyé par Maya, coordonnatrice" },
      a4_title: { en: "Hospital program lead", fr: "Responsable programme hospitalier" },
      a4_meta: { en: "Auto-rule · 20 hours in program", fr: "Règle auto · 20 heures dans le programme" },
      p1_title: { en: "Gold tier", fr: "Niveau Or" },
      p1_progress: { en: "1,240 / 2,500 VP", fr: "1 240 / 2 500 PV" },
      p2_title: { en: "50 shifts completed", fr: "50 quarts complétés" },
      p2_progress: { en: "32 / 50 shifts", fr: "32 / 50 quarts" },
      built_in: { en: "Vome", fr: "Vome" },
      custom: { en: "Custom", fr: "Personnalisé" },
    },

    // ── Spotlight 1 mockup: Vome Achievements (4-tier ladder + sample challenges) ──
    cat_mock: {
      chip: { en: "VOME ACHIEVEMENTS", fr: "VOME ACHIEVEMENTS" },
      title: { en: "Bronze → Platinum, fueled by Vome Points", fr: "Bronze → Platine, alimentés par les Vome Points" },
      label: { en: "Every volunteer earns these by completing platform challenges. Free on every plan.", fr: "Chaque bénévole les gagne en complétant des défis de la plateforme. Gratuit sur tous les forfaits." },
      c1_name: { en: "Bronze", fr: "Bronze" },
      c1_rule: { en: "250 VP earned", fr: "250 PV gagnés" },
      c1_kind: { en: "Tier 1", fr: "Niveau 1" },
      c2_name: { en: "Silver", fr: "Argent" },
      c2_rule: { en: "1,000 VP earned", fr: "1 000 PV gagnés" },
      c2_kind: { en: "Tier 2", fr: "Niveau 2" },
      c3_name: { en: "Gold", fr: "Or" },
      c3_rule: { en: "2,500 VP earned", fr: "2 500 PV gagnés" },
      c3_kind: { en: "Tier 3", fr: "Niveau 3" },
      c4_name: { en: "Platinum", fr: "Platine" },
      c4_rule: { en: "5,000 VP earned", fr: "5 000 PV gagnés" },
      c4_kind: { en: "Tier 4", fr: "Niveau 4" },
      c5_name: { en: "Sample challenge", fr: "Défi exemple" },
      c5_rule: { en: "Complete your first shift · 50 VP", fr: "Complétez votre premier quart · 50 PV" },
      c5_kind: { en: "Challenge", fr: "Défi" },
      c6_name: { en: "Sample challenge", fr: "Défi exemple" },
      c6_rule: { en: "Log 10 hours of service · 100 VP", fr: "Consignez 10 heures de service · 100 PV" },
      c6_kind: { en: "Challenge", fr: "Défi" },
      auto_badge: { en: "Vome", fr: "Vome" },
    },

    // ── Spotlight 2 mockup: custom award builder ──
    builder_mock: {
      chip: { en: "AWARD BUILDER", fr: "CONCEPTEUR DE PRIX" },
      title: { en: "New custom award", fr: "Nouveau prix personnalisé" },
      label_name: { en: "Name", fr: "Nom" },
      name_value: { en: "Hospital program lead", fr: "Responsable programme hospitalier" },
      label_icon: { en: "Icon", fr: "Icône" },
      label_desc: { en: "Description", fr: "Description" },
      desc_value: { en: "For volunteers leading shifts on the hospital companion program.", fr: "Pour les bénévoles qui dirigent des quarts du programme d'accompagnement hospitalier." },
      label_criteria: { en: "Criteria", fr: "Critères" },
      crit_auto: { en: "Auto rule", fr: "Règle automatique" },
      crit_manual: { en: "Manual award", fr: "Prix manuel" },
      crit_auto_desc: { en: "20 hours in 'Hospital companion'", fr: "20 heures dans « Accompagnement hospitalier »" },
      label_eligibility: { en: "Eligible volunteers", fr: "Bénévoles admissibles" },
      elig_value: { en: "Tag: Healthcare · Site: Downtown", fr: "Étiquette : Santé · Site : Centre-ville" },
      label_visibility: { en: "Volunteer can see this on their profile", fr: "Le bénévole le voit sur son profil" },
      visibility_on: { en: "On", fr: "Activé" },
      save: { en: "Save award", fr: "Enregistrer le prix" },
    },

    // ── Spotlight 3 mockup: recognition timeline ──
    timeline_mock: {
      chip: { en: "RECOGNITION TIMELINE", fr: "FIL DE RECONNAISSANCE" },
      title: { en: "Sofia Patel", fr: "Sofia Patel" },
      label: { en: "Last 12 months", fr: "12 derniers mois" },
      e1_when: { en: "Today", fr: "Aujourd'hui" },
      e1_kind: { en: "Auto-earned", fr: "Auto-gagné" },
      e1_name: { en: "100 hours of service", fr: "100 heures de service" },
      e1_meta: { en: "Built-in achievement · trigger fired on hour log", fr: "Accomplissement intégré · déclenché à la consignation" },
      e2_when: { en: "Mar 12", fr: "12 mars" },
      e2_kind: { en: "Sent by admin", fr: "Envoyé par admin" },
      e2_name: { en: "5-year volunteer", fr: "Bénévole de 5 ans" },
      e2_meta: { en: "Custom award · sent by Maya, program coordinator", fr: "Prix personnalisé · envoyé par Maya, coordonnatrice de programme" },
      e3_when: { en: "Feb 4", fr: "4 février" },
      e3_kind: { en: "Auto-earned", fr: "Auto-gagné" },
      e3_name: { en: "10 shifts in 2026", fr: "10 quarts en 2026" },
      e3_meta: { en: "Built-in achievement · calendar-year window", fr: "Accomplissement intégré · fenêtre année civile" },
      e4_when: { en: "Jan 9", fr: "9 janvier" },
      e4_kind: { en: "Sent by admin", fr: "Envoyé par admin" },
      e4_name: { en: "Hospital program lead", fr: "Responsable programme hospitalier" },
      e4_meta: { en: "Custom award · auto-rule fired at 20 hours", fr: "Prix personnalisé · règle auto à 20 heures" },
      auto_chip: { en: "Auto", fr: "Auto" },
      manual_chip: { en: "Manual", fr: "Manuel" },
    },

    // ── Benefits grid (6 cards) ──
    benefits_h2: { en: "Recognition that lands the same week the work happens", fr: "Une reconnaissance qui arrive la même semaine que le travail" },
    benefits_sub: {
      en: "Two systems that complement each other. Your team can design custom awards based on the milestones you set, and decide which volunteers are eligible to earn them. Vome also has an out-of-the-box Bronze-to-Platinum achievement ladder that runs in the background for every volunteer.",
      fr: "Deux systèmes qui se complètent. Votre équipe peut concevoir des prix personnalisés selon les jalons que vous définissez, et choisir quels bénévoles sont admissibles à les gagner. Vome inclut aussi une échelle d'achievements Bronze à Platine prête à l'emploi qui tourne en arrière-plan pour chaque bénévole.",
    },
    ben1_title: { en: "Custom awards your team designs", fr: "Prix personnalisés conçus par votre équipe" },
    ben1_desc: { en: "Build your own awards with their own name, icon or uploaded image, and description. Pick an auto rule Vome enforces or a manual award a coordinator can assign as needed, with optional caps on the number of recipients and a choice of whether it repeats on a continuous basis.", fr: "Mettez en place vos propres distinctions avec leur nom, icône ou image téléversée, et description. Choisissez une règle automatique appliquée par Vome ou un prix manuel qu'un coordonnateur peut attribuer au besoin, avec des plafonds optionnels sur le nombre de bénéficiaires et le choix de le rendre répétable de façon continue." },
    ben2_title: { en: "Bronze → Platinum, free for everyone", fr: "Bronze → Platine, gratuit pour tous" },
    ben2_desc: { en: "Vome Achievements ship on every plan: a four-tier badge ladder fueled by Vome Points that volunteers earn by completing platform challenges. Active from a volunteer's first log, no admin setup.", fr: "Les Vome Achievements sont inclus sur tous les forfaits : une échelle de badges à quatre niveaux alimentée par les Vome Points que les bénévoles gagnent en complétant des défis de la plateforme. Actifs dès la première consignation, sans configuration." },
    ben3_title: { en: "Triggers on hours or shifts, any window", fr: "Déclencheurs sur heures ou quarts, toute fenêtre" },
    ben3_desc: { en: "Set thresholds in hours or shifts across all-time, a calendar year, a date range, a rolling window, or consecutive periods (e.g. 5 hours per month for 3 straight months).", fr: "Définissez des seuils en heures ou en quarts, sur tout horizon : depuis toujours, année civile, plage de dates, fenêtre glissante ou périodes consécutives (ex. 5 heures par mois pendant 3 mois consécutifs)." },
    ben4_title: { en: "Send a one-off award by hand", fr: "Envoyez un prix unique à la main" },
    ben4_desc: { en: "Some moments do not fit a rule. Send a custom award to one volunteer or a hand-picked group, and choose to make it visible to volunteers on their profiles.", fr: "Certains moments n'entrent pas dans une règle. Envoyez un prix personnalisé à un bénévole ou à un groupe choisi, et choisissez de le rendre visible aux bénévoles sur leur profil." },
    ben5_title: { en: "Integrated notifications", fr: "Notifications intégrées" },
    ben5_desc: { en: "When an award is given, you can choose to set up automated emails or notifications to the volunteer at a time you choose, using your template, sender, and signature. Admins get notified too, so coordinators see recognition as it happens.", fr: "Quand un prix est attribué, vous pouvez configurer des courriels ou notifications automatisés au bénévole à l'heure de votre choix, avec votre modèle, expéditeur et signature. Les admins sont aussi notifiés, pour que les coordonnateurs voient la reconnaissance en temps réel." },
    ben6_title: { en: "Eligibility scoped to the right people", fr: "Admissibilité ciblée aux bonnes personnes" },
    ben6_desc: { en: "Restrict any award by tag, opportunity, site, finished onboarding sequence, active database status, or even age range. Volunteers outside the scope never see it in their catalog or progress.", fr: "Restreignez tout prix par étiquette, opportunité, site, séquence d'intégration terminée, statut actif dans la base de données, ou même tranche d'âge. Les bénévoles hors périmètre ne le voient jamais dans leur catalogue ni leur progression." },

    // ── Spotlight 1: Custom awards (the value-rich half — leads the page) ──
    spot1_kicker: { en: "DESIGN", fr: "CONCEVOIR" },
    spot1_title: { en: "Design custom awards for the moments only you see.", fr: "Concevez des prix personnalisés pour les moments que vous seuls voyez." },
    spot1_body: {
      en: "Every award gets a <strong>name and a face</strong>, a <strong>shape and a scope</strong>. Some awards are simple — a one-time thank-you for coming. Others are more intricate — a tenure award capped at five recipients a year, restricted to your hospital site, with progress hidden until earned. The depth is there when you need it.",
      fr: "Chaque prix a un <strong>nom et un visage</strong>, une <strong>forme et un périmètre</strong>. Certains prix sont simples — un merci unique pour la participation. D'autres sont plus sophistiqués — un prix d'ancienneté plafonné à cinq bénéficiaires par an, restreint à votre site hospitalier, avec progression masquée jusqu'à l'obtention. La profondeur est là quand vous en avez besoin.",
    },
    spot1_b1: { en: "Preset icons or upload your own image", fr: "Icônes prédéfinies ou téléversez votre propre image" },
    spot1_b2: { en: "Cap how many volunteers can earn it, mark it repeatable or one-time", fr: "Plafonnez le nombre de bénévoles qui peuvent le gagner, rendez-le répétable ou unique" },
    spot1_b3: { en: "Folders & bulk actions to keep a large award catalog clean", fr: "Dossiers et actions en lot pour garder un grand catalogue de prix bien rangé" },
    spot1_b4: { en: "Decide if volunteers can see their progress toward an award, or keep that tracking for admins only", fr: "Choisissez si les bénévoles voient leur progression vers un prix, ou gardez ce suivi réservé aux admins" },

    // ── Spotlight 2: Vome Achievements (free background layer — supports the lead) ──
    spot2_kicker: { en: "VOME ACHIEVEMENTS", fr: "VOME ACHIEVEMENTS" },
    spot2_title: { en: "A four-tier ladder every volunteer climbs, on every plan.", fr: "Une échelle à quatre niveaux que chaque bénévole gravit, sur tous les forfaits." },
    spot2_body: {
      en: "Vome ships a platform-level recognition ladder out of the box: <strong>Bronze, Silver, Gold, Platinum</strong>. Volunteers earn <strong>Vome Points</strong> by completing challenges tied to real activity, then climb the tiers as VP add up. Active from the first log, free on every plan, managed by Vome.",
      fr: "Vome livre une échelle de reconnaissance au niveau plateforme dès le départ : <strong>Bronze, Argent, Or, Platine</strong>. Les bénévoles gagnent des <strong>Vome Points</strong> en complétant des défis liés à l'activité réelle, puis gravissent les niveaux à mesure que les PV s'accumulent. Actif dès la première consignation, gratuit sur tous les forfaits, géré par Vome.",
    },
    spot2_b1: { en: "Four tiers, Bronze through Platinum, fueled by Vome Points", fr: "Quatre niveaux, du Bronze au Platine, alimentés par les Vome Points" },
    spot2_b2: { en: "Challenges tied to real activity: hours logged, shifts completed, milestones hit", fr: "Défis liés à l'activité réelle : heures consignées, quarts complétés, jalons atteints" },
    spot2_b3: { en: "Volunteers track tier progress and Vome Points in real time", fr: "Les bénévoles suivent leur progression de niveau et leurs Vome Points en temps réel" },
    spot2_b4: { en: "Free for every volunteer in every org, no setup required", fr: "Gratuit pour chaque bénévole dans chaque organisation, aucune configuration" },

    // ── Spotlight 3: Profile + timeline ──
    spot3_kicker: { en: "TIMELINE", fr: "FIL" },
    spot3_title: { en: "A timeline volunteers can keep, and you can verify.", fr: "Un fil que les bénévoles gardent et que vous pouvez vérifier." },
    spot3_body: {
      en: "Each tier badge and award lands with a date and source. <strong>Vome Achievements</strong> show what challenges were completed to earn badges. <strong>Custom awards</strong> show who sent them or which rule matched. You can customize all the options below.",
      fr: "Chaque badge de niveau et prix arrive avec une date et une source. Les <strong>Vome Achievements</strong> indiquent quels défis ont été complétés pour gagner les badges. Les <strong>prix personnalisés</strong> indiquent qui les a envoyés ou quelle règle a correspondu. Vous pouvez personnaliser toutes les options ci-dessous.",
    },
    spot3_b1: { en: "Chronological wall on the volunteer profile, mobile and web", fr: "Mur chronologique sur le profil du bénévole, mobile et web" },
    spot3_b2: { en: "Email or push notification fires the moment an award lands", fr: "Une notification courriel ou push se déclenche dès qu'un prix arrive" },
    spot3_b3: { en: "Progress bars for the next tier and any in-flight custom awards", fr: "Barres de progression pour le prochain niveau et les prix personnalisés en cours" },
    spot3_b4: { en: "Admins can get notified too, so coordinators see what awards have been given", fr: "Les admins peuvent aussi être notifiés, pour que les coordonnateurs voient quels prix ont été attribués" },

    // ── Mid-page CTA banner (replaces former 'How it works' section) ──
    midcta_h2: { en: "See for yourself.", fr: "Voyez par vous-même." },
    midcta_sub: { en: "Start recognizing your volunteers with achievements and custom awards. Sign up free today.", fr: "Commencez à reconnaître vos bénévoles avec les achievements et les prix personnalisés. Inscrivez-vous gratuitement aujourd'hui." },
    midcta_button: { en: "Get started for free", fr: "Commencer gratuitement" },

    // ── Differentiators (3) ──
    diff_h2: { en: "Recognition wired into the rest of the platform", fr: "Reconnaissance connectée au reste de la plateforme" },
    diff_sub: {
      en: "Standalone gamification tools sit in their own silo. Vome's volunteer recognition software pulls from our scheduling and hour-tracking tools that help you organize the rest of your operations. It takes no additional time to reward volunteers, as it should be.",
      fr: "Les outils de gamification autonomes vivent dans leur propre silo. Le logiciel de reconnaissance des bénévoles de Vome puise dans nos outils de planification et de suivi d'heures qui vous aident à organiser le reste de vos opérations. Récompenser vos bénévoles ne demande aucun temps supplémentaire, comme il se doit.",
    },
    diff1_title: { en: "Same data as your hour tracking", fr: "Mêmes données que votre suivi d'heures" },
    diff1_desc: { en: "Auto rules run on the verified hours and shifts your team already approves. No separate counter, no double-counting, no reconciliation step.", fr: "Les règles automatiques tournent sur les heures et les quarts vérifiés que votre équipe approuve déjà. Aucun compteur distinct, ni double comptage, ni réconciliation." },
    diff2_title: { en: "Tied to the volunteer record", fr: "Lié au dossier du bénévole" },
    diff2_desc: { en: "An award's eligibility, scope, and history live on the volunteer record itself. Coordinators see who earned what alongside reservations, onboarding, and tags, not on a separate tab.", fr: "L'admissibilité, le périmètre et l'historique d'un prix résident dans le dossier du bénévole. Les coordonnateurs voient qui a gagné quoi à côté des réservations, de l'intégration et des étiquettes, et non dans un onglet séparé." },
    diff3_title: { en: "No bolt-on gamification", fr: "Aucune gamification ajoutée" },
    diff3_desc: { en: "Recognition isn't a separate dashboard, a leaderboard, or a points minigame. The Vome tier ladder runs in the background; your custom awards reflect verified work. Volunteers get a real thank-you, not synthetic ranks.", fr: "La reconnaissance n'est ni un tableau de bord distinct, ni un classement, ni un mini-jeu de points. L'échelle Vome tourne en arrière-plan ; vos prix personnalisés reflètent un travail vérifié. Les bénévoles reçoivent un vrai merci, pas des rangs artificiels." },

    // ── FAQ (module-specific) ──
    faq_h2: { en: "Recognition FAQs", fr: "FAQ Reconnaissance" },
    faq_sub: {
      en: "Common questions about achievements and custom awards.",
      fr: "Questions fréquentes sur les accomplissements et les prix personnalisés.",
    },
    faq_cta_text: { en: "Still have questions?", fr: "Vous avez encore des questions ?" },
    faq_cta_link: { en: "Talk to our team", fr: "Parlez à notre équipe" },
    faq1_q: { en: "What's the difference between Vome Achievements and a custom award?", fr: "Quelle est la différence entre les Vome Achievements et un prix personnalisé ?" },
    faq1_a: {
      en: "Vome Achievements are a platform-wide four-tier badge ladder, Bronze through Platinum, fueled by Vome Points. Every volunteer earns them by completing platform challenges. They are free on every plan and managed by Vome. Custom awards are completely designed by your team, with your own branding and rules. You decide who can earn them and how they are earned.",
      fr: "Les Vome Achievements sont une échelle de badges à quatre niveaux à l'échelle de la plateforme, du Bronze au Platine, alimentée par les Vome Points. Chaque bénévole les gagne en complétant des défis de la plateforme. Ils sont gratuits sur tous les forfaits et gérés par Vome. Les prix personnalisés sont entièrement conçus par votre équipe, avec votre propre image de marque et vos règles. Vous décidez qui peut les gagner et comment ils sont gagnés.",
    },
    faq2_q: { en: "When does a custom award actually trigger?", fr: "Quand un prix personnalisé se déclenche-t-il réellement ?" },
    faq2_a: {
      en: "The moment a logged hour or shift crosses the threshold you set. You pick the metric (hours or shifts) and the window: all-time, calendar year, a fixed date range, a rolling window of N days/weeks/months, or consecutive periods (e.g. 5 hours per month for 3 straight months). Vome uses the same hours and shifts your team already approves, so awards reflect verified work.",
      fr: "Dès qu'une heure ou un quart consigné franchit le seuil défini. Vous choisissez la mesure (heures ou quarts) et la fenêtre : depuis toujours, année civile, plage de dates fixe, fenêtre glissante de N jours/semaines/mois, ou périodes consécutives (ex. 5 heures par mois pendant 3 mois consécutifs). Vome utilise les mêmes heures et quarts que votre équipe approuve déjà, donc les prix reflètent un travail vérifié.",
    },
    faq3_q: { en: "Can I send an award to a single volunteer with a personal note?", fr: "Puis-je envoyer un prix à un bénévole avec un mot personnel ?" },
    faq3_a: {
      en: "Yes. Custom awards can be sent manually to one volunteer or a hand-picked group, with a note attached. Useful for moments that no rule could capture: a volunteer who covered a hard shift, a five-year tenure that sits outside your usual milestones, or a thank-you at the end of a project.",
      fr: "Oui. Les prix personnalisés peuvent être envoyés manuellement à un bénévole ou à un groupe choisi, avec un mot attaché. Utile pour les moments qu'aucune règle ne capture : un bénévole qui a couvert un quart difficile, une ancienneté de cinq ans hors des jalons habituels ou un merci à la fin d'un projet.",
    },
    faq4_q: { en: "What happens when an award lands? Who gets notified?", fr: "Que se passe-t-il quand un prix arrive ? Qui est notifié ?" },
    faq4_a: {
      en: "You can choose to have Vome email the volunteer the moment an award fires, at a time you choose, using your template, sender (the creator or a specific admin), and signature. Email variables like first name, award title, and window period are personalized per volunteer. You can also add admins who get notified each time the award is earned, so coordinators see recognition as it happens. This can all run through Vome's email system or through your integrated email (Outlook or Gmail).",
      fr: "Vous pouvez choisir que Vome envoie un courriel au bénévole dès qu'un prix se déclenche, à l'heure de votre choix, avec votre modèle, votre expéditeur (le créateur ou un admin précis) et votre signature. Des variables comme le prénom, le titre du prix et la période de fenêtre sont personnalisées par bénévole. Vous pouvez aussi ajouter des admins qui sont notifiés à chaque attribution, pour que les coordonnateurs voient la reconnaissance en temps réel. Tout cela peut passer par le système courriel de Vome ou par votre courriel intégré (Outlook ou Gmail).",
    },
    faq5_q: { en: "Can I limit an award to a specific group of volunteers?", fr: "Puis-je limiter un prix à un groupe précis de bénévoles ?" },
    faq5_a: {
      en: "Yes. Each custom award can be scoped by tag, opportunity, site, completion of a specific onboarding sequence, active database status, or even an age range with configurable behavior when age is unknown. Volunteers outside the scope never see the award in their catalog or progress, so the experience stays clean for everyone else.",
      fr: "Oui. Chaque prix personnalisé peut être ciblé par étiquette, opportunité, site, complétion d'une séquence d'intégration, statut actif dans la base de données, ou même tranche d'âge avec comportement configurable si l'âge est inconnu. Les bénévoles hors périmètre ne voient jamais le prix dans leur catalogue ni leur progression, ce qui garde l'expérience épurée pour tous les autres.",
    },
    faq6_q: { en: "Which plan unlocks recognition?", fr: "Quel forfait inclut la reconnaissance ?" },
    faq6_a: {
      en: "Vome Achievements (the Bronze-to-Platinum tier ladder and Vome Points) ship free on every plan, including Recruit. Custom awards (your own awards with auto rules or manual sending, eligibility scoping, and notifications) unlock on Enterprise.",
      fr: "Les Vome Achievements (l'échelle Bronze à Platine et les Vome Points) sont gratuits sur tous les forfaits, y compris Recruit. Les prix personnalisés (vos propres prix avec règles automatiques ou envoi manuel, ciblage d'admissibilité et notifications) sont inclus sur Entreprise.",
    },

    // ── Matrix heading override ──
    matrix_h2: { en: "Recognition features by plan", fr: "Fonctionnalités de reconnaissance par forfait" },
  },

  module_comms: {
    page_title: { en: "Volunteer communications: bulk email, chat, automated reminders | Vome", fr: "Communications avec les bénévoles : courriels en masse, clavardage, rappels automatisés | Vome" },
    page_description: {
      en: "Bulk and individual email from your own Google or Microsoft mailbox, native private and group chats, auto-generated chatrooms per opportunity and shift, and automations that fire on triggers.",
      fr: "Courriels individuels et en masse depuis votre boîte Google ou Microsoft, clavardages privés et de groupe natifs, salons générés automatiquement par opportunité et par quart, et automatisations déclenchées par événements.",
    },

    // ── Hero ──
    hero_eyebrow: { en: "Volunteer communication tools", fr: "Outils de communication bénévole" },
    hero_h1_part1: { en: "Reach every volunteer on the ", fr: "Rejoignez chaque bénévole sur le " },
    hero_h1_accent: { en: "channel they actually use", fr: "canal qu'ils utilisent vraiment" },
    hero_h1_part2: { en: ".", fr: "." },
    hero_sub: {
      en: "Send bulk and individual emails from <strong>your own Google or Microsoft mailbox</strong>, communicate using 1-1, group or shift-based chatrooms, and create <strong>reusable notifications</strong> for shift reminders, birthdays, and volunteer recognition.",
      fr: "Envoyez des courriels individuels et en masse depuis <strong>votre propre boîte Google ou Microsoft</strong>, communiquez via des clavardages 1 à 1, de groupe ou par quart, et créez des <strong>notifications réutilisables</strong> pour rappels de quart, anniversaires et reconnaissance des bénévoles.",
    },
    hero_meta_domain: { en: "Send from your domain", fr: "Envoi depuis votre domaine" },
    hero_meta_native: { en: "Chat, email & reminders", fr: "Clavardage, courriel et rappels" },
    hero_meta_dashboard: { en: "Available on all plans", fr: "Disponible sur tous les forfaits" },

    // ── Hero mockup labels: shift chatroom + email composer ──
    inbox_mock: {
      kicker: { en: "CHATROOM & COMPOSER", fr: "SALON ET COMPOSITION" },
      url: { en: "vomevolunteer.com/messages", fr: "vomevolunteer.com/messages" },
      // Left pane: auto-generated shift chatroom
      channel_kicker: { en: "AUTO CHATROOM", fr: "SALON AUTO" },
      channel_title: { en: "Saturday hospital companion", fr: "Accompagnement hôpital samedi" },
      channel_meta: { en: "Sat May 9 · 9:00 AM · 12 members", fr: "Sam 9 mai · 9 h · 12 membres" },
      msg1_who: { en: "Maria (admin)", fr: "Maria (admin)" },
      msg1_text: { en: "Reminder · meet at the main lobby at 8:45am.", fr: "Rappel · rendez-vous au hall principal à 8 h 45." },
      msg1_time: { en: "Thu 4:12pm", fr: "Jeu 16 h 12" },
      msg2_who: { en: "Jamie", fr: "Jamie" },
      msg2_voice_label: { en: "Voice note", fr: "Note vocale" },
      msg2_voice_dur: { en: "0:14", fr: "0:14" },
      msg2_time: { en: "Thu 4:18pm", fr: "Jeu 16 h 18" },
      msg3_who: { en: "Sarah Lee", fr: "Sarah Lee" },
      msg3_attach_name: { en: "lobby-map.png", fr: "plan-hall.png" },
      msg3_attach_size: { en: "184 KB", fr: "184 Ko" },
      msg3_time: { en: "Fri 9:02am", fr: "Ven 9 h 02" },
      msg_input_placeholder: { en: "Message the shift…", fr: "Écrire au quart…" },
      // Right pane: email composer
      composer_chip: { en: "EMAIL COMPOSER", fr: "COMPOSITION COURRIEL" },
      from_label: { en: "From", fr: "De" },
      from_value: { en: "marie@goodhealth.org", fr: "marie@goodhealth.org" },
      from_provider: { en: "via Gmail", fr: "via Gmail" },
      to_label: { en: "To", fr: "À" },
      to_segment: { en: "Hospital volunteers · onboarded", fr: "Bénévoles hôpital · intégrés" },
      to_count: { en: "84 recipients", fr: "84 destinataires" },
      subject_label: { en: "Subject", fr: "Objet" },
      subject_value: { en: "Spring schedule is open", fr: "Horaire du printemps ouvert" },
      template_chip: { en: "Template: Schedule open", fr: "Modèle : horaire ouvert" },
      body_preview: { en: "Hi {{first_name}}, the spring schedule for the hospital companion program just opened.", fr: "Bonjour {{first_name}}, l'horaire du printemps du programme d'accompagnement hospitalier vient d'ouvrir." },
      send_label: { en: "Send", fr: "Envoyer" },
    },

    // ── Spotlight 1 mockup: bulk email with segmented recipients ──
    bulk_mock: {
      chip: { en: "BULK EMAIL", fr: "COURRIEL EN MASSE" },
      title: { en: "Spring drive · hospital volunteers", fr: "Campagne du printemps · bénévoles hôpital" },
      from_label: { en: "From", fr: "De" },
      from_value: { en: "marie@goodhealth.org", fr: "marie@goodhealth.org" },
      from_provider: { en: "Sent via your Google mailbox", fr: "Envoyé via votre boîte Google" },
      segment_label: { en: "Recipient segment", fr: "Segment de destinataires" },
      seg1: { en: "Tag: Hospital", fr: "Étiquette : Hôpital" },
      seg2: { en: "Status: Onboarded", fr: "Statut : Intégré" },
      seg3: { en: "Site: Downtown clinic", fr: "Site : Clinique du centre-ville" },
      recipient_count: { en: "84 volunteers match", fr: "84 bénévoles correspondent" },
      template_label: { en: "Template", fr: "Modèle" },
      template_value: { en: "Schedule open · spring", fr: "Horaire ouvert · printemps" },
      personalize_chip: { en: "Personalized with {{first_name}}", fr: "Personnalisé avec {{first_name}}" },
      send_btn: { en: "Send to 84", fr: "Envoyer à 84" },
      schedule_btn: { en: "Schedule", fr: "Planifier" },
    },

    // ── Spotlight 2 mockup: auto-generated shift chatroom ──
    chatroom_mock: {
      chip: { en: "AUTO-GENERATED CHATROOM", fr: "SALON GÉNÉRÉ AUTOMATIQUEMENT" },
      title: { en: "Saturday morning · Hospital companion", fr: "Samedi matin · Accompagnement hôpital" },
      members_label: { en: "Members", fr: "Membres" },
      members_count: { en: "12 volunteers · 2 admins", fr: "12 bénévoles · 2 admins" },
      auto_note: { en: "Members are added when they reserve this shift, removed when they cancel.", fr: "Les membres sont ajoutés à la réservation et retirés à l'annulation." },
      msg1_who: { en: "Maria (admin)", fr: "Maria (admin)" },
      msg1_text: { en: "Reminder · we meet at the main lobby at 8:45am.", fr: "Rappel · rendez-vous au hall principal à 8 h 45." },
      msg1_time: { en: "Thu 4:12pm", fr: "Jeu 16 h 12" },
      msg2_who: { en: "Jamie", fr: "Jamie" },
      msg2_text: { en: "Got it. Bringing my badge and a backup pen.", fr: "Reçu. J'apporte mon badge et un stylo de secours." },
      msg2_time: { en: "Thu 4:18pm", fr: "Jeu 16 h 18" },
      msg3_who: { en: "Vome", fr: "Vome" },
      msg3_text: { en: "Sarah Lee joined this shift chatroom.", fr: "Sarah Lee a rejoint le salon de ce quart." },
      msg3_time: { en: "Fri 9:02am", fr: "Ven 9 h 02" },
      input_placeholder: { en: "Message the shift...", fr: "Écrire au quart..." },
    },

    // ── Spotlight 3 mockup: message automation rule ──
    automation_mock: {
      chip: { en: "MESSAGE AUTOMATION", fr: "AUTOMATISATION DE MESSAGE" },
      rule_name: { en: "Shift reminder · 24h before", fr: "Rappel de quart · 24 h avant" },
      enabled: { en: "Active", fr: "Active" },
      trigger_label: { en: "Trigger", fr: "Déclencheur" },
      trigger_value: { en: "Shift starts in 24h", fr: "Le quart commence dans 24 h" },
      audience_label: { en: "Audience", fr: "Audience" },
      audience_value: { en: "Volunteers attending the shift", fr: "Bénévoles inscrits au quart" },
      channels_label: { en: "Channels", fr: "Canaux" },
      channel_email: { en: "Email", fr: "Courriel" },
      channel_push: { en: "Push", fr: "Push" },
      message_label: { en: "Message", fr: "Message" },
      message_preview: { en: "Hi {{first_name}}, your {{shift_name}} starts tomorrow at {{shift_time}}. Tap to confirm or cancel.", fr: "Bonjour {{first_name}}, votre {{shift_name}} commence demain à {{shift_time}}. Touchez pour confirmer ou annuler." },
      var1: { en: "{{first_name}}", fr: "{{first_name}}" },
      var2: { en: "{{shift_name}}", fr: "{{shift_name}}" },
      var3: { en: "{{shift_time}}", fr: "{{shift_time}}" },
    },

    // ── Benefits grid (6 cards) ──
    benefits_h2: { en: "Every volunteer channel, in one place", fr: "Tous les canaux bénévoles, au même endroit" },
    benefits_sub: {
      en: "One workspace for every conversation with your volunteers, tied to the same database and the same audit trail. Stop juggling personal phones, WhatsApp groups, and a separate email tool: bulk email, native chat, shared templates, and reusable notification policies all live where your team already works.",
      fr: "Un seul espace pour chaque conversation avec vos bénévoles, branché à la même base de données et au même journal partagé. Arrêtez de jongler entre téléphones personnels, groupes WhatsApp et outil de courriel à part : courriels en masse, clavardage natif, modèles partagés et politiques de notification réutilisables vivent là où votre équipe travaille déjà.",
    },
    ben1_title: { en: "Bulk and individual email", fr: "Courriels individuels et en masse" },
    ben1_desc: { en: "Send a one-off message to a single volunteer or a targeted blast to a saved segment. Filter by tag, role, site, or status, all from inside Vome.", fr: "Envoyez un message ponctuel à un bénévole ou un envoi ciblé à un segment enregistré. Filtrez par étiquette, rôle, site ou statut, le tout depuis Vome." },
    ben2_title: { en: "Send from your own domain", fr: "Envoi depuis votre domaine" },
    ben2_desc: { en: "Connect a Google or Microsoft mailbox and outgoing email lands from your domain instead of a generic noreply address. Replies come back to your inbox.", fr: "Connectez une boîte Google ou Microsoft et les envois partent de votre domaine plutôt que d'une adresse générique. Les réponses reviennent à votre boîte." },
    ben3_title: { en: "Native private chat", fr: "Clavardage privé natif" },
    ben3_desc: { en: "Message volunteers one-on-one from the web or using the Vome app on the go. Conversations stay tied to their profile and accessible by each of your admins depending on their permissions.", fr: "Écrivez aux bénévoles en privé depuis le web ou avec l'application Vome en déplacement. Les conversations restent liées à leur profil et accessibles à chacun de vos admins selon leurs permissions." },
    ben4_title: { en: "Group and shift chatrooms", fr: "Salons de groupe et de quart" },
    ben4_desc: { en: "Create custom group chats for ongoing teams. Vome also allows you to auto-generate chatrooms per opportunity and per shift, with admins added automatically.", fr: "Créez des conversations de groupe personnalisées pour les équipes permanentes. Vome vous permet aussi de générer automatiquement des salons par opportunité et par quart, avec ajout automatique des admins." },
    ben5_title: { en: "Reusable notification policies", fr: "Politiques de notification réutilisables" },
    ben5_desc: { en: "Build notification policies to automate communication about shift reminders and post-shift surveys, birthday wishes, or between admins. You decide the content, where and when it's sent, and Vome automates the rest.", fr: "Créez des politiques de notification pour automatiser la communication sur les rappels et sondages de quart, les vœux d'anniversaire, ou entre admins. Vous décidez du contenu, où et quand l'envoyer, et Vome automatise le reste." },
    ben6_title: { en: "Email templates & shared folders", fr: "Modèles de courriel et dossiers partagés" },
    ben6_desc: { en: "Build a template library and folder it so every coordinator sends with the same voice. Reuse the same templates inside one-off emails, bulk sends, and notification policies.", fr: "Mettez en place une bibliothèque de modèles classée par dossier pour que chaque coordonnateur écrive avec la même voix. Réutilisez les mêmes modèles dans les courriels ponctuels, les envois en masse et les politiques de notification." },

    // ── Spotlight 1: Bulk email with segments ──
    spot1_kicker: { en: "EMAIL", fr: "COURRIEL" },
    spot1_title: { en: "Email volunteers like a marketer, from your own mailbox.", fr: "Envoyez des courriels comme un marketeur, depuis votre boîte." },
    spot1_body: {
      en: "You can filter your volunteer database into <strong>segments</strong> by tag, role, site, or status, then send a personalized email to each one through <strong>your own Google or Microsoft mailbox</strong>. Replies come back to your inbox, the dashboard tracks deliveries, and your team sees what was sent and to whom.",
      fr: "Vous pouvez filtrer votre base de bénévoles en <strong>segments</strong> par étiquette, rôle, site ou statut, puis envoyer un courriel personnalisé à chacun via <strong>votre propre boîte Google ou Microsoft</strong>. Les réponses arrivent dans votre boîte, le tableau de bord suit les livraisons et votre équipe voit ce qui a été envoyé et à qui.",
    },
    spot1_b1: { en: "Cc, Bcc, attachments, custom subject headers, and a default signature on every send", fr: "Cc, Cci, pièces jointes, objets personnalisés et signature par défaut à chaque envoi" },
    spot1_b2: { en: "You can also skip the integration and send through Vome's native email server in two clicks", fr: "Vous pouvez aussi sauter l'intégration et envoyer via le serveur courriel natif de Vome en deux clics" },
    spot1_b3: { en: "Personalize with dynamic variables like first name, role, site, shift, and custom fields", fr: "Personnalisez avec des variables dynamiques comme prénom, rôle, site, quart et champs personnalisés" },
    spot1_b4: { en: "Shared outbox tracks every send and exposes it to the team per your sharing policy", fr: "Boîte d'envoi partagée qui suit chaque envoi et l'expose à l'équipe selon votre politique de partage" },

    // ── Spotlight 2: Native chat + auto chatrooms ──
    spot2_kicker: { en: "CHAT", fr: "CLAVARDAGE" },
    spot2_title: { en: "Private chats, group chats, and a chatroom for every shift.", fr: "Clavardages privés, conversations de groupe et un salon pour chaque quart." },
    spot2_body: {
      en: "There's no need to run your program through various messaging platforms. Vome allows you to <strong>private chat</strong> with any volunteer, create <strong>custom group chats</strong> for ongoing teams, and choose to benefit from <strong>auto-generated chatrooms</strong> per opportunity and per shift. When a volunteer reserves the shift, they join. When they cancel, they leave. It's that simple.",
      fr: "Inutile de gérer votre programme à travers divers outils de messagerie. Vome vous permet de <strong>clavarder en privé</strong> avec n'importe quel bénévole, de créer des <strong>conversations de groupe personnalisées</strong> pour les équipes permanentes et de profiter de <strong>salons générés automatiquement</strong> par opportunité et par quart. Quand un bénévole réserve un quart, il rejoint. Quand il annule, il sort. C'est aussi simple que ça.",
    },
    spot2_b1: { en: "Send images, video, voice notes, documents, and links inline (not just text)", fr: "Envoyez images, vidéos, notes vocales, documents et liens en ligne (pas que du texte)" },
    spot2_b2: { en: "Assign or share a shift right inside the conversation, no tab-switching", fr: "Assignez ou partagez un quart directement dans la conversation, sans changer d'onglet" },
    spot2_b3: { en: "Mute a thread, pin a message, jump to the volunteer's profile in one tap", fr: "Désactivez un fil, épinglez un message, ouvrez la fiche du bénévole en un toucher" },
    spot2_b4: { en: "Push notifications on the iOS and Android apps so volunteers actually see it", fr: "Notifications poussées sur les applications iOS et Android pour que les bénévoles les voient" },

    // ── Spotlight 3: Message automations ──
    spot3_kicker: { en: "AUTOMATE", fr: "AUTOMATISER" },
    spot3_title: { en: "Design the notifications you want, when you want them to send, throughout the entire platform.", fr: "Concevez les notifications que vous voulez, au moment où vous voulez les envoyer, partout dans la plateforme." },
    spot3_body: {
      en: "Build custom <strong>shift notification policies</strong> for pre-shift reminders, during shifts, or a post-shift survey link, then attach them to the shifts they were designed for. Add automated <strong>birthday notifications</strong> with site-level recipient rules, and <strong>hand-off notifications</strong> that ping coordinators when a profile lands in their site, sequence, opportunity, or shift, manually or via automation.",
      fr: "Mettez en place des <strong>politiques de notification de quart</strong> personnalisées pour rappels pré-quart, pendant le quart ou lien de sondage post-quart, puis attachez-les aux quarts qu'elles visent. Ajoutez des <strong>notifications d'anniversaire</strong> automatisées avec règles de destinataires par site, et des <strong>notifications de transfert</strong> qui alertent les coordonnateurs quand un profil arrive dans leur site, séquence, opportunité ou quart, manuellement ou par automatisation.",
    },
    spot3_b1: { en: "Compose every message with shared templates, dynamic variables, and your default signature", fr: "Composez chaque message avec modèles partagés, variables dynamiques et votre signature par défaut" },
    spot3_b2: { en: "Pick the channel per rule: integrated email domain, in-app, push notification, or all of the above", fr: "Choisissez le canal par règle : domaine courriel intégré, en-app, notification poussée, ou tout cela" },
    spot3_b3: { en: "Drop a survey link in the post-shift email so feedback comes in while it's fresh", fr: "Glissez un lien de sondage dans le courriel post-quart pour recueillir la rétroaction à chaud" },
    spot3_b4: { en: "Separate outbox tabs for shift notifications and birthday emails make every send auditable", fr: "Onglets distincts dans la boîte d'envoi pour les notifications de quart et les courriels d'anniversaire" },

    // ── Mid-page CTA (replaces 4-step "How it works") ──
    midcta_h2: { en: "Connect your mailbox and turn on policies in minutes.", fr: "Connectez votre boîte et activez vos politiques en quelques minutes." },
    midcta_sub: {
      en: "Link your Google or Microsoft mailbox, create your templates, and let automations handle the rest.",
      fr: "Liez votre boîte Google ou Microsoft, créez vos modèles et laissez les automatisations gérer le reste.",
    },
    midcta_button: { en: "Sign up for free", fr: "Inscrivez-vous gratuitement" },

    // ── Differentiators (3) ──
    diff_h2: { en: "More than a notification tool", fr: "Plus qu'un outil de notification" },
    diff_sub: {
      en: "Generic email tools blast a list. WhatsApp groups lose volunteers when phones change. Vome is built for volunteer programs and connects to the rest of your data.",
      fr: "Les outils génériques font un envoi à une liste. Les groupes WhatsApp perdent les bénévoles au changement de téléphone. Vome est conçu pour le bénévolat et reste connecté au reste de vos données.",
    },
    diff1_title: { en: "Wired to your volunteer database", fr: "Connecté à votre base de bénévoles" },
    diff1_desc: { en: "You can build custom segments with live filters of the database, not exports. Tag a volunteer or change their status and the next bulk send picks it up automatically.", fr: "Vous pouvez bâtir des segments personnalisés avec des filtres en direct de la base, pas des exports. Étiquetez un bénévole ou changez son statut et le prochain envoi en tient compte automatiquement." },
    diff2_title: { en: "Email & chat under one audit trail", fr: "Courriel et clavardage sous un seul journal" },
    diff2_desc: { en: "Outbox, chat history, and automation logs all live in the same admin dashboard. Filter by sender, segment, or trigger; control visibility with the email sharing policy.", fr: "Boîte d'envoi, historique de clavardage et journaux d'automatisation vivent dans le même tableau de bord. Filtrez par expéditeur, segment ou déclencheur; contrôlez la visibilité via la politique de partage." },
    diff3_title: { en: "Coordinators stop leaving with the data", fr: "Vos coordonnateurs ne partent plus avec les données" },
    diff3_desc: { en: "When a coordinator goes on leave, you keep their conversations, templates, and policies. Onboard the replacement in an afternoon instead of rebuilding a year of context from screenshots and personal text threads.", fr: "Quand un coordonnateur part en congé, vous gardez ses conversations, ses modèles et ses politiques. Intégrez son remplaçant en un après-midi plutôt que de reconstituer une année de contexte à partir de captures d'écran et de fils SMS personnels." },

    // ── FAQ (module-specific) ──
    faq_h2: { en: "Communications FAQs", fr: "FAQ Communications" },
    faq_sub: {
      en: "Common questions about email, chat, and message automations.",
      fr: "Questions fréquentes sur le courriel, le clavardage et les automatisations.",
    },
    faq_cta_text: { en: "Still have questions?", fr: "Vous avez encore des questions ?" },
    faq_cta_link: { en: "Talk to our team", fr: "Parlez à notre équipe" },
    faq1_q: { en: "Can volunteers see emails come from my address?", fr: "Les bénévoles voient-ils mon adresse comme expéditeur ?" },
    faq1_a: {
      en: "Yes. Connect a Google or Microsoft mailbox and Vome sends through it. Outgoing email lands from your address, replies route back to your inbox, and your domain reputation drives deliverability.",
      fr: "Oui. Connectez une boîte Google ou Microsoft et Vome envoie via celle-ci. Le courriel sortant part de votre adresse, les réponses reviennent chez vous, et votre domaine porte la livrabilité.",
    },
    faq2_q: { en: "Can our team share email templates so we all sound the same?", fr: "Pouvons-nous partager des modèles de courriel pour parler d'une seule voix ?" },
    faq2_a: {
      en: "Yes. Build templates and group them into folders that every admin can pull from. The same library powers one-off emails, bulk sends, shift notification policies, and birthday notifications, so the language stays consistent across coordinators and across automations.",
      fr: "Oui. Mettez en place des modèles et regroupez-les dans des dossiers accessibles à chaque admin. La même bibliothèque alimente les courriels ponctuels, les envois en masse, les politiques de notification de quart et les notifications d'anniversaire, pour une langue cohérente entre coordonnateurs et entre automatisations.",
    },
    faq3_q: { en: "What is an auto-generated chatroom?", fr: "Qu'est-ce qu'un salon généré automatiquement ?" },
    faq3_a: {
      en: "Vome creates a chatroom for every opportunity and for every shift. Admins are added automatically. Volunteers join when they reserve the shift and leave when they cancel. You can also build custom group chats for ongoing teams, and inside any chat you can send images, documents, voice notes, or assign a shift directly.",
      fr: "Vome crée un salon pour chaque opportunité et chaque quart. Les admins sont ajoutés automatiquement. Les bénévoles rejoignent à la réservation et sortent à l'annulation. Vous pouvez aussi mettre en place des conversations de groupe personnalisées, et dans chaque clavardage envoyer images, documents, notes vocales ou assigner un quart directement.",
    },
    faq4_q: { en: "How do shift notification policies work?", fr: "Comment fonctionnent les politiques de notification de quart ?" },
    faq4_a: {
      en: "A shift notification policy is a saved set of automated messages that fire around the shifts it's attached to: pre-shift reminders, during-shift updates, and post-shift follow-ups (with optional survey links). Build it once, attach it to any shift or shift generator, and every shift that uses the policy inherits the same rules. The full setup walkthrough lives in our help center.",
      fr: "Une politique de notification de quart est un ensemble enregistré de messages automatisés qui s'envoient autour des quarts auxquels elle est attachée : rappels pré-quart, mises à jour pendant le quart et suivis post-quart (avec liens de sondage facultatifs). Mettez-la en place une fois, attachez-la à un quart ou à un générateur de quarts, et chaque quart qui utilise la politique hérite des mêmes règles. Le guide complet est dans notre centre d'aide.",
    },
    faq5_q: { en: "Can I control what other admins see in the outbox?", fr: "Puis-je contrôler ce que les autres admins voient dans la boîte d'envoi ?" },
    faq5_a: {
      en: "Yes. The shared outbox lists every email sent through Vome (one-off, bulk, shift notifications, birthday notifications) and the email sharing policy controls who sees what. Filter by sender, segment, or trigger to audit a campaign or onboard a new coordinator without losing context.",
      fr: "Oui. La boîte d'envoi partagée liste chaque courriel envoyé via Vome (ponctuel, en masse, notifications de quart, anniversaires) et la politique de partage des courriels contrôle qui voit quoi. Filtrez par expéditeur, segment ou déclencheur pour auditer une campagne ou intégrer un coordonnateur sans perdre le contexte.",
    },
    faq6_q: { en: "What are hand-off notifications?", fr: "Qu'est-ce que les notifications de transfert ?" },
    faq6_a: {
      en: "When a profile is assigned to a site, sequence, opportunity, or shift you coordinate, hand-off notifications ping you so the volunteer doesn't fall through the cracks. They fire whether the assignment was manual (another admin moved them) or automatic (a form submission or finished sequence routed them to you), and you can subscribe per category in your notification settings.",
      fr: "Quand un profil est affecté à un site, une séquence, une opportunité ou un quart que vous coordonnez, les notifications de transfert vous alertent pour qu'aucun bénévole ne passe entre les mailles. Elles s'envoient que l'affectation soit manuelle (un autre admin l'a déplacé) ou automatique (un formulaire ou une séquence terminée l'a acheminé vers vous), et vous vous abonnez par catégorie dans vos paramètres de notification.",
    },

    // ── Matrix heading override ──
    matrix_h2: { en: "Communications features by plan", fr: "Fonctionnalités de communications par forfait" },
  },

  module_data: {
    page_title: { en: "Volunteer database, reports & analytics | Vome", fr: "Base de données, rapports et analyses des bénévoles | Vome" },
    page_description: {
      en: "A custom volunteer database with mass import, unlimited custom fields, profile tags, saved custom views, Google Sheets sync, instant reports, and analytics dashboards.",
      fr: "Une base de données de bénévoles personnalisée avec importation en lot, champs personnalisés illimités, étiquettes de profil, vues personnalisées, synchronisation Google Sheets, rapports instantanés et tableaux de bord analytiques.",
    },

    // ── Hero ──
    hero_eyebrow: { en: "Volunteer database software", fr: "Logiciel de base de données bénévoles" },
    hero_h1_part1: { en: "A volunteer database ", fr: "Une base de données bénévoles " },
    hero_h1_accent: { en: "organized your way", fr: "organisée à votre façon" },
    hero_h1_part2: { en: ".", fr: "." },
    hero_sub: {
      en: "Import your data, structure it with <strong>custom field types</strong>, save the views each admin needs, and pull <strong>instant reports and insights</strong> in a few clicks.",
      fr: "Importez vos données, structurez-les avec des <strong>champs personnalisés</strong>, sauvegardez les vues dont chaque admin a besoin, et générez des <strong>rapports et analyses instantanés</strong> en quelques clics.",
    },
    hero_meta_import: { en: "Bulk import profiles", fr: "Importation en lot de profils" },
    hero_meta_fields: { en: "Unlimited fields", fr: "Champs illimités" },
    hero_meta_perms: { en: "Permissions per site & team", fr: "Permissions par site et équipe" },

    // ── Hero mockup labels: volunteer database table view ──
    table_mock: {
      url: { en: "vomevolunteer.com/volunteers", fr: "vomevolunteer.com/benevoles" },
      kicker: { en: "VOLUNTEER DATABASE", fr: "BASE DE DONNÉES" },
      view_pill: { en: "Active view", fr: "Vue active" },
      view_name: { en: "All volunteers · Hospital site", fr: "Tous les bénévoles · Site hôpital" },
      filter_status: { en: "Status: Active", fr: "Statut : Actif" },
      filter_tag: { en: "Tag: Healthcare", fr: "Étiquette : Santé" },
      filter_site: { en: "Site: Hospital", fr: "Site : Hôpital" },
      col_name: { en: "Name", fr: "Nom" },
      col_tags: { en: "Tags", fr: "Étiquettes" },
      col_status: { en: "Status", fr: "Statut" },
      col_hours: { en: "Hours", fr: "Heures" },
      col_last: { en: "Last shift", fr: "Dernier quart" },
      col_custom: { en: "Language", fr: "Langue" },
      r1_name: { en: "Riley Tremblay", fr: "Riley Tremblay" },
      r1_tags: { en: "Healthcare · Bilingual", fr: "Santé · Bilingue" },
      r1_status: { en: "Active", fr: "Actif" },
      r1_hours: { en: "146.5", fr: "146,5" },
      r1_last: { en: "Apr 22, 2026", fr: "22 avr. 2026" },
      r1_custom: { en: "EN · FR", fr: "EN · FR" },
      r2_name: { en: "Avery Chen", fr: "Avery Chen" },
      r2_tags: { en: "Healthcare", fr: "Santé" },
      r2_status: { en: "Active", fr: "Actif" },
      r2_hours: { en: "98.0", fr: "98,0" },
      r2_last: { en: "Apr 19, 2026", fr: "19 avr. 2026" },
      r2_custom: { en: "EN", fr: "EN" },
      r3_name: { en: "Jordan Singh", fr: "Jordan Singh" },
      r3_tags: { en: "Healthcare · Driver", fr: "Santé · Chauffeur" },
      r3_status: { en: "Archived", fr: "Archivé" },
      r3_hours: { en: "0.0", fr: "0,0" },
      r3_last: { en: "Never", fr: "Jamais" },
      r3_custom: { en: "EN · ES", fr: "EN · ES" },
      r4_name: { en: "Pat Lemieux", fr: "Pat Lemieux" },
      r4_tags: { en: "Healthcare · Bilingual", fr: "Santé · Bilingue" },
      r4_status: { en: "Active", fr: "Actif" },
      r4_hours: { en: "212.5", fr: "212,5" },
      r4_last: { en: "Apr 24, 2026", fr: "24 avr. 2026" },
      r4_custom: { en: "EN · FR", fr: "EN · FR" },
      footer_count: { en: "Showing 4 of 1,284 volunteers", fr: "Affichage de 4 sur 1 284 bénévoles" },
      footer_export: { en: "Export to Excel", fr: "Exporter vers Excel" },
    },

    // ── Spotlight 1 mockup: custom fields panel ──
    fields_mock: {
      chip: { en: "CUSTOM FIELDS", fr: "CHAMPS PERSONNALISÉS" },
      panel_title: { en: "Manage database fields", fr: "Gérer les champs de la base" },
      label: { en: "Fields on every profile", fr: "Champs sur chaque profil" },
      f1_name: { en: "Spoken languages", fr: "Langues parlées" },
      f1_type: { en: "List · multi-select", fr: "Liste · choix multiple" },
      f2_name: { en: "Driver's licence expiry", fr: "Expiration du permis de conduire" },
      f2_type: { en: "Date", fr: "Date" },
      f3_name: { en: "Volunteer agreement", fr: "Entente du bénévole" },
      f3_type: { en: "Attachment", fr: "Pièce jointe" },
      f4_name: { en: "LinkedIn profile", fr: "Profil LinkedIn" },
      f4_type: { en: "Link", fr: "Lien" },
      f5_name: { en: "T-shirt size", fr: "Taille de chandail" },
      f5_type: { en: "Single select · mapped from form", fr: "Choix unique · associé au formulaire" },
      dynamic_chip: { en: "Form-mapped", fr: "Associé au formulaire" },
      add_field: { en: "Add custom field", fr: "Ajouter un champ personnalisé" },
    },

    // ── Spotlight 2 mockup: custom views sidebar + active view ──
    views_mock: {
      chip: { en: "CUSTOM VIEWS", fr: "VUES PERSONNALISÉES" },
      panel_title: { en: "Saved views", fr: "Vues sauvegardées" },
      sidebar_label: { en: "My views", fr: "Mes vues" },
      v1_name: { en: "New applicants this week", fr: "Nouveaux candidats cette semaine" },
      v1_count: { en: "12", fr: "12" },
      v2_name: { en: "Hospital · expiring soon", fr: "Hôpital · expirent bientôt" },
      v2_count: { en: "7", fr: "7" },
      v3_name: { en: "Top hours · 2026", fr: "Top heures · 2026" },
      v3_count: { en: "25", fr: "25" },
      v4_name: { en: "Bilingual drivers", fr: "Chauffeurs bilingues" },
      v4_count: { en: "18", fr: "18" },
      active_label: { en: "Active view", fr: "Vue active" },
      active_name: { en: "Hospital · expiring soon", fr: "Hôpital · expirent bientôt" },
      filter_label: { en: "Applied filters", fr: "Filtres appliqués" },
      filter1: { en: "Site is Hospital", fr: "Le site est Hôpital" },
      filter2: { en: "Background check expires within 30 days", fr: "La vérification expire dans 30 jours" },
      filter3: { en: "Status is Active", fr: "Le statut est Actif" },
      sort_label: { en: "Sorted by expiration date · ascending", fr: "Trié par date d'expiration · croissant" },
      result_count: { en: "7 volunteers match", fr: "7 bénévoles correspondent" },
    },

    // ── Spotlight 3 mockup: analytics dashboard cards + chart ──
    reports_mock: {
      chip: { en: "ANALYTICS", fr: "ANALYSES" },
      panel_title: { en: "Program dashboard · April 2026", fr: "Tableau de bord · Avril 2026" },
      kpi_hours_label: { en: "Total hours logged", fr: "Heures totales consignées" },
      kpi_hours_value: { en: "8,142", fr: "8 142" },
      kpi_hours_delta: { en: "+12% vs March", fr: "+12 % vs mars" },
      kpi_active_label: { en: "Active volunteers", fr: "Bénévoles actifs" },
      kpi_active_value: { en: "1,284", fr: "1 284" },
      kpi_active_delta: { en: "+86 this month", fr: "+86 ce mois" },
      kpi_seq_label: { en: "Sequence completion", fr: "Complétion de séquence" },
      kpi_seq_value: { en: "92%", fr: "92 %" },
      kpi_seq_delta: { en: "Onboarding · 30 day", fr: "Intégration · 30 jours" },
      chart_label: { en: "Hours by program · last 30 days", fr: "Heures par programme · 30 derniers jours" },
      bar1_name: { en: "Hospital companion", fr: "Accompagnement hospitalier" },
      bar1_value: { en: "2,640 h", fr: "2 640 h" },
      bar2_name: { en: "Tutoring", fr: "Tutorat" },
      bar2_value: { en: "1,890 h", fr: "1 890 h" },
      bar3_name: { en: "Event support", fr: "Soutien aux événements" },
      bar3_value: { en: "1,420 h", fr: "1 420 h" },
      bar4_name: { en: "Food bank", fr: "Banque alimentaire" },
      bar4_value: { en: "1,180 h", fr: "1 180 h" },
      bar5_name: { en: "Outreach", fr: "Sensibilisation" },
      bar5_value: { en: "1,012 h", fr: "1 012 h" },
      footer_label: { en: "Export report", fr: "Exporter le rapport" },
    },

    // ── Benefits grid (6 cards) ──
    benefits_h2: { en: "A database customized the way you need it.", fr: "Une base de données personnalisée comme vous en avez besoin." },
    benefits_sub: {
      en: "Hours, shifts, sequences, tags, custom fields, and the ability to report on any of it in seconds. All in one place, with permissions and segmented views that show each admin exactly what they need to see.",
      fr: "Heures, quarts, séquences, étiquettes, champs personnalisés et la capacité de produire un rapport sur tout ça en quelques secondes. Le tout au même endroit, avec des permissions et des vues segmentées qui montrent à chaque admin exactement ce qu'il a besoin de voir.",
    },
    ben1_title: { en: "Bulk import from Excel, CSV or API", fr: "Importation en lot depuis Excel, CSV ou API" },
    ben1_desc: { en: "Import 10,000 profiles per file with field mapping. Batch-assign tags, opportunities, and shifts in the same flow. Or integrate with Vome's API to automate the process.", fr: "Importez 10 000 profils par fichier avec mappage des champs. Affectez en lot étiquettes, opportunités et quarts dans le même parcours. Ou intégrez l'API de Vome pour automatiser le processus." },
    ben2_title: { en: "Custom field types", fr: "Types de champs personnalisés" },
    ben2_desc: { en: "Text, number, date, single & multi-select, email, URL, address, attachment, and more. Unlimited fields per profile.", fr: "Texte, nombre, date, choix unique et multiple, courriel, URL, adresse, pièce jointe et plus. Champs illimités par profil." },
    ben3_title: { en: "Auto-update data", fr: "Mise à jour automatique des données" },
    ben3_desc: { en: "Map volunteer form submissions to database fields, or batch-update data whenever you need to. Merge, archive, or delete profiles to keep your database accurate.", fr: "Associez les soumissions de formulaires aux champs de la base de données, ou mettez à jour les données en lot quand il le faut. Fusionnez, archivez ou supprimez des profils pour garder votre base de données exacte." },
    ben4_title: { en: "Filter, sort & save custom views", fr: "Filtrez, triez et sauvegardez des vues" },
    ben4_desc: { en: "Each admin keeps the views that matter to them: new applicants, expiring profiles, top hours, and more. Custom-formula filters for advanced segments.", fr: "Chaque admin garde les vues qui lui sont utiles : nouveaux candidats, profils qui expirent, top heures, et plus. Filtres à formule personnalisée pour les segments avancés." },
    ben5_title: { en: "Bulk actions from any view", fr: "Actions en lot depuis toute vue" },
    ben5_desc: { en: "Assign tags, sequences, shifts, languages, or skills. Send broadcast emails or instant messages. All from the profiles you've selected.", fr: "Affectez étiquettes, séquences, quarts, langues ou compétences. Envoyez des courriels en lot ou des messages instantanés. Tout depuis les profils que vous avez sélectionnés." },
    ben6_title: { en: "Instant reports & dashboards", fr: "Rapports et tableaux de bord instantanés" },
    ben6_desc: { en: "Attendees, hours, sequence completion, expirations, shift lists, check-ins, emergency contacts, medical info, file uploads, notes, birthdays. Vome has it all, accessible in a few clicks.", fr: "Participants, heures, complétion de séquence, expirations, listes de quarts, pointages, contacts d'urgence, info médicale, fichiers, notes, anniversaires. Vome a tout, accessible en quelques clics." },

    // ── Spotlight 1: Customize the database ──
    spot1_kicker: { en: "CUSTOMIZE", fr: "PERSONNALISER" },
    spot1_title: { en: "Model the database around the data you need to collect.", fr: "Modélisez la base de données selon les données que vous devez recueillir." },
    spot1_body: {
      en: "Add <strong>unlimited custom fields</strong> in every type your program needs: text, number, date, single and multi-select, email, URL, address, attachment, and more. <strong>Map application and registration form responses</strong> straight into the database so submissions become structured profile data with no re-keying.",
      fr: "Ajoutez des <strong>champs personnalisés illimités</strong> dans tous les types dont votre programme a besoin : texte, nombre, date, choix unique et multiple, courriel, URL, adresse, pièce jointe et plus encore. <strong>Associez les réponses des formulaires de candidature et d'inscription</strong> directement à la base de données pour que les soumissions deviennent des données de profil structurées, sans ressaisie.",
    },
    spot1_b1: { en: "Map any form question to a database field, so applicants and new registrations populate profiles automatically", fr: "Associez toute question d'un formulaire à un champ de la base de données, pour que les candidats et nouvelles inscriptions remplissent les profils automatiquement" },
    spot1_b2: { en: "Manage offline profiles for seniors and participants who don't want to log in, with the same database, hours, and reporting", fr: "Gérez des profils hors ligne pour les aînés et les participants qui ne veulent pas se connecter, avec la même base de données, les mêmes heures et les mêmes rapports" },
    spot1_b3: { en: "Invite an offline profile to claim their account in one click whenever they're ready to onboard", fr: "Invitez un profil hors ligne à revendiquer son compte en un clic dès qu'il est prêt à s'intégrer" },
    spot1_b4: { en: "Profile tags for bulk emails, shift assignments, sequence enrollment, and any segmentation your program needs", fr: "Étiquettes de profil pour courriels en lot, affectations de quart, inscription à des séquences et toute segmentation dont votre programme a besoin" },

    // ── Spotlight 2: Custom views + permissions ──
    spot2_kicker: { en: "VIEW", fr: "VOIR" },
    spot2_title: { en: "Each admin sees exactly the volunteers they're responsible for.", fr: "Chaque admin voit exactement les bénévoles dont il est responsable." },
    spot2_body: {
      en: "Each admin can create <strong>custom views</strong> with the data and filters they need. <strong>Permissions</strong> then scope what they can see and act on, so it's easy to share resources or segment profiles by site, role, activity, or anything else you need across your team.",
      fr: "Chaque admin peut créer des <strong>vues personnalisées</strong> avec les données et les filtres dont il a besoin. Les <strong>permissions</strong> limitent ensuite ce qu'il peut voir et faire, alors c'est facile de partager des ressources ou de segmenter les profils par site, rôle, activité ou tout ce dont vous avez besoin dans votre équipe.",
    },
    spot2_b1: { en: "Custom-formula filters layer multiple conditions for advanced segments, like active volunteers with over 50 hours while also tagged as 'Healthcare'", fr: "Les filtres à formule personnalisée superposent plusieurs conditions pour des segments avancés, comme les bénévoles actifs avec plus de 50 heures et également étiquetés « Santé »" },
    spot2_b2: { en: "Share a saved view across the team or keep it private to your account", fr: "Partagez une vue sauvegardée avec l'équipe ou gardez-la privée à votre compte" },
    spot2_b3: { en: "Custom admin roles fine-tune edit, delete, message, and report rights per role", fr: "Les rôles admin personnalisés ajustent finement les droits de modification, de suppression, de messagerie et de rapport par rôle" },
    spot2_b4: { en: "Export any view to Excel, or sync it with any other database tool for backups and downstream automations", fr: "Exportez toute vue vers Excel, ou synchronisez-la avec tout autre outil de base de données pour copies de sauvegarde et automatisations en aval" },

    // ── Spotlight 3: Reports & analytics ──
    spot3_kicker: { en: "REPORT", fr: "RAPPORTER" },
    spot3_title: { en: "Pull the answers you need in a few clicks, not a few hours.", fr: "Obtenez les réponses voulues en quelques clics, pas en quelques heures." },
    spot3_body: {
      en: "Reports answer the questions your <strong>board and funders</strong> ask, in seconds. Data refreshes <strong>live</strong> as your team logs hours, submits forms, and updates profiles. The same filters and date ranges you use in the database carry into every report and dashboard, so the segment you've already built is one click away from a chart.",
      fr: "Les rapports répondent aux questions de votre <strong>conseil et de vos bailleurs</strong>, en quelques secondes. Les données se rafraîchissent <strong>en direct</strong> à mesure que votre équipe enregistre des heures, soumet des formulaires et met à jour des profils. Les mêmes filtres et plages de dates utilisés dans la base de données s'appliquent à chaque rapport et tableau, alors le segment que vous avez déjà bâti est à un clic d'un graphique.",
    },
    spot3_b1: { en: "Access custom dashboards and reports that show exactly what you need, and save them for future use", fr: "Accédez à des tableaux de bord et rapports personnalisés qui montrent exactement ce dont vous avez besoin, et sauvegardez-les pour usage futur" },
    spot3_b2: { en: "Filter every report by site, opportunity, tag, date range, or any field on a profile or shift", fr: "Filtrez chaque rapport par site, opportunité, étiquette, plage de dates ou tout champ d'un profil ou d'un quart" },
    spot3_b3: { en: "Track KPIs like retention and activity with ease, all out of the box", fr: "Suivez vos KPI comme la rétention et l'activité avec facilité, le tout d'emblée" },
    spot3_b4: { en: "Export any report to Excel, save its configuration as a custom view to reuse next time, or integrate with Vome's API to pull data anywhere you need it", fr: "Exportez tout rapport vers Excel, sauvegardez sa configuration comme vue personnalisée à réutiliser, ou intégrez l'API de Vome pour tirer les données partout où vous en avez besoin" },

    // ── Migration case study band (Brent's Place) ──
    case_kicker: { en: "Migration case study", fr: "Étude de cas migration" },
    case_org: { en: "Brent's Place", fr: "Brent's Place" },
    case_headline: { en: "Seamless migration: 1,500+ profiles in under 5 minutes.", fr: "Migration fluide : plus de 1 500 profils en moins de 5 minutes." },
    case_stat1_value: { en: "<5 min", fr: "<5 min" },
    case_stat1_label: { en: "to migrate 1,500+ profiles", fr: "pour migrer plus de 1 500 profils" },
    case_stat2_value: { en: "100%", fr: "100 %" },
    case_stat2_label: { en: "self-serve via Excel import", fr: "libre-service via importation Excel" },
    case_stat3_value: { en: "Zero", fr: "Zéro" },
    case_stat3_label: { en: "downtime during transition", fr: "temps d'arrêt durant la transition" },
    case_quote: {
      en: "The ease of use for the manager and volunteers alone is amazing. Having an actual person to talk to made the transition seamless, and our volunteers had no trouble navigating the platform.",
      fr: "La facilité d'utilisation pour la gestionnaire et les bénévoles est tout simplement incroyable. Avoir une vraie personne à qui parler a rendu la transition fluide, et nos bénévoles n'ont eu aucune difficulté à naviguer dans la plateforme.",
    },
    case_attribution: { en: "Kit Mworia-Hooper", fr: "Kit Mworia-Hooper" },
    case_role: { en: "Volunteer Engagement Manager, Brent's Place", fr: "Gestionnaire de l'engagement bénévole, Brent's Place" },
    case_cta_label: { en: "Read the full case study", fr: "Lire l'étude de cas complète" },

    // ── Case-study download page (gated) ──
    case_page_title: { en: "Brent's Place migration case study | Vome", fr: "Étude de cas migration Brent's Place | Vome" },
    case_page_description: {
      en: "How Brent's Place migrated 1,500+ volunteer profiles to Vome in under 5 minutes with zero downtime. Download the full case study.",
      fr: "Comment Brent's Place a migré plus de 1 500 profils de bénévoles vers Vome en moins de 5 minutes, sans temps d'arrêt. Téléchargez l'étude de cas complète.",
    },
    case_page_intro: {
      en: "How Brent's Place transitioned their entire volunteer program to Vome with zero downtime, self-serve data import, and hands-on support every step of the way.",
      fr: "Comment Brent's Place a transféré tout son programme bénévole vers Vome, sans temps d'arrêt, avec une importation libre-service et un soutien personnalisé à chaque étape.",
    },
    case_inside_h: { en: "What's inside", fr: "Ce que vous y trouverez" },
    case_inside_b1: { en: "About Brent's Place: location, mission, and the volunteer base they manage", fr: "À propos de Brent's Place : emplacement, mission et base de bénévoles" },
    case_inside_b2: { en: "The challenge: why they outgrew Amplify/Get Connected and what they needed instead", fr: "Le défi : pourquoi Amplify/Get Connected ne suffisait plus et ce qu'il leur fallait" },
    case_inside_b3: { en: "The 3-step migration process they ran end-to-end in under 5 minutes", fr: "Le processus de migration en 3 étapes, exécuté de bout en bout en moins de 5 minutes" },
    case_inside_b4: { en: "Key results, including auto check-in/out and zero downtime through the transition", fr: "Résultats clés, dont le pointage automatique et l'absence de temps d'arrêt durant la transition" },
    case_form_h2: { en: "Download the case study", fr: "Téléchargez l'étude de cas" },
    case_form_sub: { en: "Tell us a bit about you and we'll unlock the download right away.", fr: "Parlez-nous brièvement de vous et nous débloquerons le téléchargement immédiatement." },
    case_form_required: { en: "Required", fr: "Requis" },
    case_form_first: { en: "First name", fr: "Prénom" },
    case_form_email: { en: "Work email", fr: "Courriel professionnel" },
    case_form_org: { en: "Organization", fr: "Organisation" },
    case_form_role: { en: "Your role", fr: "Votre rôle" },
    case_form_role_placeholder: { en: "e.g. Volunteer Manager, Director of Programs", fr: "p. ex. gestionnaire de bénévoles, direction des programmes" },
    case_form_submit: { en: "Unlock the download", fr: "Débloquer le téléchargement" },
    case_form_sending: { en: "Sending…", fr: "Envoi…" },
    case_form_error: { en: "Something went wrong. Please try again or email us at hello@vomevolunteer.com.", fr: "Une erreur est survenue. Veuillez réessayer ou nous écrire à hello@vomevolunteer.com." },
    case_form_note: { en: "We use this only to follow up if you'd like a chat. No marketing spam.", fr: "Nous l'utilisons uniquement pour faire un suivi si vous souhaitez discuter. Pas de pourriel marketing." },
    case_success_h: { en: "Your case study is ready.", fr: "Votre étude de cas est prête." },
    case_success_sub: { en: "Click below to download the PDF. We'll also follow up by email if you'd like to chat about your own migration.", fr: "Cliquez ci-dessous pour télécharger le PDF. Nous ferons aussi un suivi par courriel si vous souhaitez discuter de votre propre migration." },
    case_success_download: { en: "Download the PDF", fr: "Télécharger le PDF" },
    case_success_back: { en: "Back to the database overview", fr: "Retour à la vue d'ensemble de la base de données" },

    // ── Mid-page CTA (replaces "How it works") ──
    midcta_h2: { en: "Migrate your existing data in minutes.", fr: "Migrez vos données existantes en quelques minutes." },
    midcta_sub: {
      en: "Customize your fields, drop in an Excel file or connect through the API, and your team is operating from a single source of truth the same day.",
      fr: "Personnalisez vos champs, déposez un fichier Excel ou connectez l'API, et votre équipe opère depuis une source unique le jour même.",
    },
    midcta_button: { en: "Sign up for free", fr: "Inscrivez-vous gratuitement" },

    // ── Differentiators (3) ──
    diff_h2: { en: "More than a spreadsheet", fr: "Plus qu'un chiffrier" },
    diff_sub: {
      en: "Vome's database software was built to manage volunteers from the ground up: form-mapped applications, onboarding sequences, completed shifts and hours, and communications tools, with permissions and site-level management all included.",
      fr: "La base de données Vome est conçue pour gérer les bénévoles de A à Z : candidatures associées aux formulaires, séquences d'intégration, quarts complétés et heures, et outils de communication, avec permissions et gestion par site, tout compris.",
    },
    diff1_title: { en: "Built for volunteer programs", fr: "Conçue pour le bénévolat" },
    diff1_desc: { en: "Profiles include hours, shifts, opportunities, sequence status, tags, and notes by default. No data model setup before you can use it.", fr: "Les profils incluent heures, quarts, opportunités, statut de séquence, étiquettes et notes par défaut. Aucun modèle de données à configurer avant de l'utiliser." },
    diff2_title: { en: "Permissions you can actually trust", fr: "Des permissions fiables" },
    diff2_desc: { en: "Scope every admin to their site, location, or team. Visibility, edit rights, and bulk actions all respect those boundaries.", fr: "Limitez chaque admin à son site, son lieu ou son équipe. Visibilité, droits de modification et actions en lot respectent ces limites." },
    diff3_title: { en: "Live in days, not months", fr: "Opérationnel en jours, pas en mois" },
    diff3_desc: { en: "Programs migrate from spreadsheets and legacy CRMs in a single working session. Fields customized, profiles imported, views saved, and the team operating that afternoon.", fr: "Les programmes migrent depuis des chiffriers ou des CRM existants en une seule séance de travail. Champs personnalisés, profils importés, vues sauvegardées, et équipe en marche l'après-midi même." },

    // ── FAQ (module-specific) ──
    faq_h2: { en: "Database & reports FAQs", fr: "FAQ Données et rapports" },
    faq_sub: {
      en: "Common questions about the volunteer database, custom fields, custom views, and reporting.",
      fr: "Questions fréquentes sur la base de données, les champs personnalisés, les vues personnalisées et les rapports.",
    },
    faq_cta_text: { en: "Still have questions?", fr: "Vous avez encore des questions ?" },
    faq_cta_link: { en: "Talk to our team", fr: "Parlez à notre équipe" },
    faq1_q: { en: "Can I import my existing volunteer data?", fr: "Puis-je importer mes données bénévoles existantes ?" },
    faq1_a: {
      en: "Yes. Upload an Excel or CSV file (up to 10,000 profiles per import) and map each column to a Vome field, including any custom fields you've created. The same import flow can batch-assign tags, opportunities, and shifts so volunteers land in the right place from day one.",
      fr: "Oui. Téléversez un fichier Excel ou CSV (jusqu'à 10 000 profils par importation) et mappez chaque colonne à un champ Vome, incluant les champs personnalisés que vous avez créés. Le même parcours d'importation peut affecter en lot étiquettes, opportunités et quarts pour que les bénévoles aboutissent au bon endroit dès le premier jour.",
    },
    faq2_q: { en: "What field types can I add to the database?", fr: "Quels types de champs puis-je ajouter à la base de données ?" },
    faq2_a: {
      en: "Field types include text, number, date, time, single select, multi-select, email, URL, address, attachment, boolean, and unique ID. You can add as many custom fields per profile as your program needs, and map any application or registration form question straight to a field so submissions populate the database automatically.",
      fr: "Les types de champs incluent texte, nombre, date, heure, choix unique, choix multiple, courriel, URL, adresse, pièce jointe, booléen et identifiant unique. Vous pouvez ajouter autant de champs personnalisés par profil que votre programme l'exige, et associer toute question d'un formulaire de candidature ou d'inscription directement à un champ pour que les soumissions remplissent la base de données automatiquement.",
    },
    faq3_q: { en: "How do custom views and permissions work together?", fr: "Comment les vues personnalisées et les permissions s'articulent-elles ?" },
    faq3_a: {
      en: "A custom view is a saved combination of filters, sort order, and visible columns. Each admin can save their own. Permissions per site, location, or team then scope what each admin can see and edit, so a hospital coordinator only ever sees their hospital's volunteers, even when they apply a shared view.",
      fr: "Une vue personnalisée est une combinaison sauvegardée de filtres, d'ordre de tri et de colonnes visibles. Chaque admin peut sauvegarder les siennes. Les permissions par site, lieu ou équipe limitent ensuite ce que chaque admin peut voir et modifier : une coordonnatrice d'hôpital ne voit que les bénévoles de son hôpital, même quand elle applique une vue partagée.",
    },
    faq5_q: { en: "What reports can I generate?", fr: "Quels rapports puis-je générer ?" },
    faq5_a: {
      en: "Attendees, hours, sequence completion, form submissions, and check-in history are available out of the box, each filterable by site, opportunity, tag, date range, or custom field. Analytics dashboards summarize volunteer activity, retention, and program performance for board and funder updates.",
      fr: "Participants, heures, complétion de séquence, soumissions et historique de pointage sont disponibles d'emblée, chacun filtrable par site, opportunité, étiquette, plage de dates ou champ personnalisé. Les tableaux de bord analytiques résument l'activité, la rétention et la performance des programmes pour les conseils et les bailleurs.",
    },
    faq6_q: { en: "Can I manage volunteers who don't use the app?", fr: "Puis-je gérer les bénévoles qui n'utilisent pas l'application ?" },
    faq6_a: {
      en: "Yes. Create offline profiles for seniors and non-digital participants. Your team manages everything internally: hours, shifts, notes, and reporting all work the same way. Convert an offline profile to an active account anytime by sending an invitation.",
      fr: "Oui. Créez des profils hors ligne pour les aînés et les participants non numériques. Votre équipe gère tout à l'interne : heures, quarts, notes et rapports fonctionnent de la même façon. Convertissez un profil hors ligne en compte actif à tout moment en envoyant une invitation.",
    },
    faq7_q: { en: "Can I restrict what each admin sees in the database?", fr: "Puis-je restreindre ce que chaque admin voit dans la base de données ?" },
    faq7_a: {
      en: "Yes. Scope each admin to one or more sites, locations, or teams, and assign them a custom admin role with a specific permission set. They only see profiles within their scope, the bulk actions and exports respect those boundaries, and shared custom views are filtered automatically when applied. A hospital coordinator never sees clinic volunteers, even when opening a portfolio-wide saved view.",
      fr: "Oui. Limitez chaque admin à un ou plusieurs sites, lieux ou équipes, et affectez-lui un rôle admin personnalisé avec un jeu de permissions précis. L'admin ne voit que les profils dans sa portée, les actions en lot et exports respectent ces limites, et les vues partagées sont filtrées automatiquement à l'application. Une coordonnatrice d'hôpital ne voit jamais les bénévoles d'une clinique, même en ouvrant une vue partagée à l'échelle du portfolio.",
    },
    faq8_q: { en: "What actions can I take directly from the database?", fr: "Quelles actions puis-je faire directement depuis la base de données ?" },
    faq8_a: {
      en: "Select any rows in any view and you can: assign tags, sequences, shifts, opportunities, languages, or skills; bulk-update custom field values; send a broadcast email; merge duplicate profiles; archive, reactivate, or delete records. The same actions are available from saved custom views, so a coordinator can act on their segment without leaving the page.",
      fr: "Sélectionnez n'importe quelles lignes dans n'importe quelle vue, et vous pouvez : affecter étiquettes, séquences, quarts, opportunités, langues ou compétences ; mettre à jour en lot les valeurs de champs personnalisés ; envoyer un courriel en lot ; fusionner des doublons ; archiver, réactiver ou supprimer des fiches. Les mêmes actions sont accessibles depuis les vues personnalisées sauvegardées, alors un coordonnateur peut agir sur son segment sans quitter la page.",
    },
    faq9_q: { en: "What analytics dashboards are included?", fr: "Quels tableaux de bord analytiques sont inclus ?" },
    faq9_a: {
      en: "Built-in dashboards cover Overview, Profiles, Hours, Shifts, Sequences, Forms, and your own Custom Database Fields. The Custom Database Fields dashboard charts any field you've added, with single-select breakdowns, attachment-expiry timelines, and numeric distributions, all without extra configuration. Every dashboard filters by site, opportunity, tag, date range, or any field on the profile.",
      fr: "Les tableaux de bord intégrés couvrent Aperçu, Profils, Heures, Quarts, Séquences, Formulaires et vos propres Champs personnalisés. Le tableau Champs personnalisés graphe tout champ ajouté, avec des répartitions de choix uniques, des échéances de pièces jointes et des distributions numériques, sans configuration supplémentaire. Chaque tableau se filtre par site, opportunité, étiquette, plage de dates ou tout champ du profil.",
    },

    // ── Matrix heading override ──
    matrix_h2: { en: "Database & reporting features by plan", fr: "Fonctionnalités de base de données et rapports par forfait" },
  },

  module_app: {
    page_title: { en: "Volunteer mobile app: reserve shifts, check in by QR, message admins | Vome", fr: "Application mobile bénévole : réservez des quarts, pointez par QR, écrivez à vos admins | Vome" },
    page_description: {
      en: "A native iOS and Android app where your volunteers browse opportunities, reserve shifts, bring guests, check in by QR on arrival, manage their schedule and time off, finish onboarding from their phone, and chat with your team in real time.",
      fr: "Une application native iOS et Android où vos bénévoles parcourent les opportunités, réservent leurs quarts, ajoutent des invités, pointent par QR à leur arrivée, gèrent leur horaire et leurs congés, terminent leur intégration depuis leur téléphone et clavardent avec votre équipe en temps réel.",
    },

    // ── Hero ──
    hero_eyebrow: { en: "App for volunteers", fr: "Application pour bénévoles" },
    hero_h1_part1: { en: "Give your volunteers a mobile app that's ", fr: "Offrez à vos bénévoles une application mobile " },
    hero_h1_accent: { en: "actually easy to use", fr: "vraiment facile à utiliser" },
    hero_h1_part2: { en: ".", fr: "." },
    hero_sub: {
      en: "A native <strong>iOS and Android app</strong> built for volunteers — browse opportunities, reserve shifts, <strong>QR check-in on arrival</strong>, manage their schedule, sign waivers, watch training videos, and chat with your team. Free for every volunteer, forever.",
      fr: "Une application native <strong>iOS et Android</strong> conçue pour les bénévoles : parcourir les opportunités, réserver des quarts, <strong>pointer par QR à l'arrivée</strong>, gérer leur horaire, signer les renonciations, regarder les vidéos de formation et clavarder avec votre équipe. Gratuite pour chaque bénévole, à vie.",
    },
    hero_meta_native: { en: "iOS + Android", fr: "iOS et Android" },
    hero_meta_free: { en: "Free for volunteers", fr: "Gratuite pour les bénévoles" },
    hero_meta_multiorg: { en: "SSO with Apple, Google or Microsoft", fr: "SSO avec Apple, Google ou Microsoft" },

    // ── Hero mockup labels: Home / dashboard phone screen ──
    home_mock: {
      header_title: { en: "Home", fr: "Accueil" },
      greet_question: { en: "What are you looking to do today,", fr: "Que voulez-vous faire aujourd'hui," },
      name: { en: "Daisy?", fr: "Daisy ?" },
      action_book: { en: "Book shifts", fr: "Réserver" },
      action_schedule: { en: "View schedule", fr: "Mon horaire" },
      action_claim: { en: "Claim hours", fr: "Réclamer heures" },
      upcoming_label: { en: "Upcoming shift", fr: "Prochain quart" },
      upcoming_date: { en: "Saturday, May 9", fr: "Samedi 9 mai" },
      shift_time: { en: "9:00 AM", fr: "9 h 00" },
      shift_title: { en: "Hospital companion", fr: "Accompagnement hôpital" },
      shift_org: { en: "Good Health Hospital", fr: "Hôpital Good Health" },
      myorg_label: { en: "My organization", fr: "Mon organisation" },
      myorg_name: { en: "Good Health Hospital", fr: "Hôpital Good Health" },
      myorg_meta: { en: "12 active programs", fr: "12 programmes actifs" },
      tab_home: { en: "Home", fr: "Accueil" },
      tab_sched: { en: "Schedule", fr: "Horaire" },
      tab_inbox: { en: "Alerts", fr: "Alertes" },
      tab_profile: { en: "Profile", fr: "Profil" },
    },

    // ── Spotlight 1 mockup: Reserve shift detail + group reservation ──
    reserve_mock: {
      kicker: { en: "RESERVE SHIFT", fr: "RÉSERVER LE QUART" },
      back: { en: "Back", fr: "Retour" },
      opportunity: { en: "Hospital companion program", fr: "Accompagnement hospitalier" },
      title: { en: "Saturday morning shift", fr: "Quart du samedi matin" },
      when_label: { en: "When", fr: "Quand" },
      when_value: { en: "Sat May 9 · 9:00 AM – 1:00 PM", fr: "Sam 9 mai · 9 h – 13 h" },
      where_label: { en: "Where", fr: "Où" },
      where_value: { en: "Good Health Hospital · Main lobby", fr: "Hôpital Good Health · Hall principal" },
      role_label: { en: "Role", fr: "Rôle" },
      role_value: { en: "Greeter · 4 hr", fr: "Accueil · 4 h" },
      spots: { en: "3 spots remaining", fr: "3 places restantes" },
      bring_label: { en: "Bring a guest", fr: "Inviter un proche" },
      bring_value: { en: "Add up to 2 friends or family", fr: "Ajoutez jusqu'à 2 amis ou proches" },
      bring_chip: { en: "+1 added", fr: "+1 ajouté" },
      reserve_btn: { en: "Reserve shift", fr: "Réserver le quart" },
      cancel_link: { en: "Cancel anytime up to 24 hr before", fr: "Annulez jusqu'à 24 h avant le quart" },
    },

    // ── Spotlight 2 mockup: QR check-in on arrival ──
    qr_arrive_mock: {
      kicker: { en: "QR CHECK-IN", fr: "POINTAGE QR" },
      onsite_label: { en: "ON SITE", fr: "SUR PLACE" },
      shift_title: { en: "Hospital companion shift", fr: "Quart d'accompagnement" },
      shift_when: { en: "Today · 9:00 AM – 1:00 PM", fr: "Aujourd'hui · 9 h – 13 h" },
      scan_caption: { en: "Show this code at the front desk", fr: "Présentez ce code à l'accueil" },
      geo_chip: { en: "Geo-fence verified", fr: "Géolocalisation vérifiée" },
      hours_label: { en: "Hours this month", fr: "Heures ce mois-ci" },
      hours_value: { en: "24.5", fr: "24,5" },
      checkout_btn: { en: "Tap to check out", fr: "Toucher pour pointer le départ" },
    },

    // ── Spotlight 3 mockup: Onboarding sequence ──
    sequence_mock: {
      header_title: { en: "Onboarding", fr: "Intégration" },
      seq_title: { en: "Volunteer onboarding", fr: "Intégration bénévole" },
      seq_org: { en: "Assigned by Good Health Hospital", fr: "Assignée par Hôpital Good Health" },
      progress_label: { en: "3 of 5 steps completed", fr: "3 sur 5 étapes complétées" },
      step1_label: { en: "Personal information", fr: "Informations personnelles" },
      step1_status: { en: "Completed", fr: "Complétée" },
      step2_label: { en: "Welcome video · 4 min", fr: "Vidéo d'accueil · 4 min" },
      step2_status: { en: "Completed", fr: "Complétée" },
      step3_label: { en: "Sign volunteer waiver", fr: "Signer la renonciation" },
      step3_status: { en: "Current step", fr: "Étape actuelle" },
      step4_label: { en: "Upload background check", fr: "Téléverser la vérification" },
      step4_status: { en: "Up next", fr: "À venir" },
      step5_label: { en: "Training quiz", fr: "Quiz de formation" },
      step5_status: { en: "Up next", fr: "À venir" },
      continue_btn: { en: "Continue step 3", fr: "Continuer l'étape 3" },
    },

    // ── (Unused) Schedule mock kept for reference ──
    schedule_mock: {
      header_title: { en: "Schedule", fr: "Horaire" },
      month_label: { en: "May", fr: "Mai" },
      group1_label: { en: "Saturday, May 9", fr: "Samedi 9 mai" },
      shift1_time: { en: "9:00 AM", fr: "9 h 00" },
      shift1_title: { en: "Hospital companion", fr: "Accompagnement hôpital" },
      shift1_org: { en: "Good Health Hospital", fr: "Hôpital Good Health" },
      group2_label: { en: "Tuesday, May 12", fr: "Mardi 12 mai" },
      shift2_time: { en: "4:00 PM", fr: "16 h 00" },
      shift2_title: { en: "Tutoring · Reading", fr: "Tutorat · Lecture" },
      shift2_org: { en: "Westview Elementary", fr: "École Westview" },
      group3_label: { en: "Wednesday, May 13", fr: "Mercredi 13 mai" },
      group3_empty: { en: "No shifts on this day", fr: "Aucun quart ce jour" },
      cancel_action: { en: "Cancel", fr: "Annuler" },
      timeoff_pill: { en: "+ Add time off", fr: "+ Ajouter un congé" },
    },

    // ── Benefits grid (6 cards) ──
    benefits_h2: { en: "Everything your volunteers need, in one app", fr: "Tout ce dont vos bénévoles ont besoin, dans une seule application" },
    benefits_sub: {
      en: "Designed with every age group in mind — from tech-savvy users to those just getting started — the Vome app makes it simple for volunteers to engage with the organizations they care about. Reserving a shift, finishing an onboarding sequence, checking in on arrival, logging hours, getting notified the moment plans change — it all just works.",
      fr: "Conçue en pensant à tous les âges — des utilisateurs aguerris à ceux qui débutent —, l'application Vome permet à vos bénévoles d'interagir simplement avec les organisations qui leur tiennent à cœur. Réserver un quart, terminer une séquence d'intégration, pointer à l'arrivée, enregistrer ses heures, recevoir un avis dès qu'un plan change — tout fonctionne sans friction.",
    },
    ben1_title: { en: "Browse and apply to opportunities", fr: "Parcourir et postuler aux opportunités" },
    ben1_desc: { en: "Volunteers explore your available opportunities, filter by role or location, and apply or join with one tap. Application forms render natively, with rich fields and file uploads.", fr: "Les bénévoles explorent les opportunités disponibles, filtrent par rôle ou site, et s'inscrivent en un toucher. Les formulaires s'affichent en natif avec champs riches et téléversement de fichiers." },
    ben2_title: { en: "Reserve shifts in seconds", fr: "Réserver un quart en quelques secondes" },
    ben2_desc: { en: "Calendar and list views, instant booking or request-to-book, and group reservations so volunteers can bring a friend, family member, or +1 to the same shift.", fr: "Vues calendrier et liste, réservation instantanée ou demande, et réservations de groupe pour amener un ami, un proche ou un +1 au même quart." },
    ben3_title: { en: "Effortless hour tracking", fr: "Suivi des heures sans effort" },
    ben3_desc: { en: "Tap to check in, scan a QR code at the site, or let attendance log automatically — whichever fits your program. Hours roll up to the volunteer's profile, no clipboard or spreadsheet required.", fr: "Pointage par toucher, scan de QR sur place, ou pointage automatique — selon ce qui convient à votre programme. Les heures s'accumulent au profil du bénévole, sans planchette ni tableur." },
    ben4_title: { en: "Manage schedule and time off", fr: "Gérer son horaire et ses congés" },
    ben4_desc: { en: "Upcoming, past, and time-off views. Cancel a shift, request hours after the fact, or block date ranges so they're not auto-scheduled while they're away.", fr: "Vues à venir, passé et congés. Annulez un quart, demandez des heures après coup, ou bloquez des plages de dates pour ne pas être assigné en votre absence." },
    ben5_title: { en: "Finish onboarding from their phone", fr: "Compléter l'intégration depuis le téléphone" },
    ben5_desc: { en: "Sign waivers with on-screen e-signature, upload required documents from camera or files, watch training videos, and finish background-check sequences without leaving the app.", fr: "Signez des renonciations avec signature électronique à l'écran, téléversez les documents requis depuis l'appareil photo ou les fichiers, regardez les vidéos de formation et complétez les séquences de vérification sans quitter l'application." },
    ben6_title: { en: "Chat, push, and shift chatrooms", fr: "Clavardage, push et salons de quart" },
    ben6_desc: { en: "Direct-message admins, get push reminders before each shift, and join the auto-generated chatroom for every shift volunteers reserve. Voice notes, images, and document attachments included.", fr: "Messagez les admins, recevez des rappels push avant chaque quart et rejoignez le salon automatique de chaque quart réservé. Notes vocales, images et documents inclus." },

    // ── Spotlight 1: Reserve shifts ──
    spot1_kicker: { en: "RESERVE SHIFTS", fr: "RÉSERVER UN QUART" },
    spot1_title: { en: "Browse, tap, reserve. With a guest if they want.", fr: "Parcourir, toucher, réserver. Avec un proche s'ils le souhaitent." },
    spot1_body: {
      en: "Volunteers see your real-time availability the moment they open the app — calendar grid or list, filtered by role, site, or program. They reserve in one tap, request to book if approval is needed, or kick off a <strong>group reservation</strong> to bring a friend or family member to the same shift.",
      fr: "Vos bénévoles voient les disponibilités en temps réel dès qu'ils ouvrent l'application : calendrier ou liste, filtrés par rôle, site ou programme. Ils réservent en un toucher, demandent une approbation si nécessaire, ou lancent une <strong>réservation de groupe</strong> pour amener un proche au même quart.",
    },
    spot1_b1: { en: "Calendar and list views with role, location, and cause filters", fr: "Vues calendrier et liste avec filtres rôle, lieu et cause" },
    spot1_b2: { en: "Instant booking or request-to-book per opportunity, set by you", fr: "Réservation instantanée ou demande, configurée par vous" },
    spot1_b3: { en: "Group reservations let one volunteer bring up to N guests, with name and contact for each", fr: "Réservations de groupe permettant d'amener jusqu'à N invités, avec nom et coordonnées" },
    spot1_b4: { en: "Self-schedule positions, recurring shifts, and waitlists are all supported in-app", fr: "Postes auto-programmés, quarts récurrents et listes d'attente pris en charge dans l'application" },

    // ── Spotlight 2: Check-in & hour logging ──
    spot2_kicker: { en: "ARRIVE & CHECK IN", fr: "ARRIVÉE ET POINTAGE" },
    spot2_title: { en: "Tap, scan, or auto-check-in. Hours log themselves.", fr: "Toucher, scanner, ou pointage automatique. Les heures s'enregistrent toutes seules." },
    spot2_body: {
      en: "Volunteers can pull up a <strong>personal QR code</strong> for a coordinator to scan at the kiosk, scan a <strong>station QR</strong> posted at the door, or simply <strong>tap to check in</strong> from their shift on the home screen. Hours roll up to their profile in real time — no clipboard, no spreadsheet, no manual entry. <a href=\"/volunteer-hour-tracking\">See every hour-tracking option →</a>",
      fr: "Vos bénévoles peuvent afficher un <strong>code QR personnel</strong> que le coordonnateur scanne au kiosque, scanner un <strong>QR de poste</strong> affiché à l'entrée, ou simplement <strong>toucher pour pointer</strong> depuis leur quart à l'accueil. Les heures s'accumulent au profil en temps réel — sans planchette, sans tableur, sans saisie manuelle. <a href=\"/fr/volunteer-hour-tracking\">Voir toutes les options de suivi des heures →</a>",
    },
    spot2_b1: { en: "Multiple methods to choose from per opportunity: personal QR, station QR, tap-to-check-in, or fully automated", fr: "Plusieurs méthodes au choix par opportunité : QR personnel, QR de poste, pointage par toucher ou entièrement automatisé" },
    spot2_b2: { en: "Optional geo-fence rejects check-ins from outside the site radius you set", fr: "Géolocalisation optionnelle qui refuse les pointages hors du rayon défini" },
    spot2_b3: { en: "Hours auto-roll into the volunteer's profile and the dashboard, no manual entry", fr: "Les heures s'accumulent automatiquement au profil et au tableau de bord, sans saisie manuelle" },
    spot2_b4: { en: "Volunteers can also claim hours after the fact for shifts they checked in offline", fr: "Les bénévoles peuvent aussi réclamer leurs heures après coup pour un pointage hors ligne" },

    // ── Spotlight 3: Onboarding from the phone ──
    spot3_kicker: { en: "ONBOARD ON THEIR PHONE", fr: "INTÉGRATION DEPUIS LEUR TÉLÉPHONE" },
    spot3_title: { en: "The whole onboarding sequence including waivers, docs, training — done from the app.", fr: "Toute la séquence d'intégration, incluant renonciations, documents et formation — depuis l'application." },
    spot3_body: {
      en: "Drop a volunteer into one of your sequences and they finish every step from their phone. <strong>E-sign waivers</strong> with their finger, <strong>upload documents</strong> from camera or file picker, watch <strong>training videos</strong>, complete background checks, and confirm profile fields — all without ever opening a laptop. Coordinators see progress in real time and get pinged when a step needs review.",
      fr: "Affectez un bénévole à une séquence et il complète chaque étape depuis son téléphone. <strong>Signature électronique</strong> au doigt sur les renonciations, <strong>téléversement de documents</strong> depuis l'appareil photo ou les fichiers, <strong>vidéos de formation</strong>, vérifications d'antécédents et confirmation des champs de profil — sans jamais ouvrir un ordinateur. Les coordonnateurs voient l'avancement en direct et reçoivent une alerte quand une étape demande une révision.",
    },
    spot3_b1: { en: "On-screen e-signature with timestamp + IP capture, stored on the volunteer's profile", fr: "Signature électronique à l'écran avec horodatage et IP, stockée au profil du bénévole" },
    spot3_b2: { en: "Document upload from camera, photo library, or file picker (PDFs, images, IDs)", fr: "Téléversement par appareil photo, photothèque ou sélecteur de fichiers (PDF, images, pièces d'identité)" },
    spot3_b3: { en: "Embedded training videos and YouTube playlists, with completion tracking per step", fr: "Vidéos de formation intégrées et listes YouTube, avec suivi de complétion par étape" },
    spot3_b4: { en: "Background-check sequences kick off straight from the app and surface back in the dashboard", fr: "Les vérifications d'antécédents se lancent depuis l'application et reviennent au tableau de bord" },

    // ── Mid-page CTA ──
    midcta_h2: { en: "Your volunteers can be browsing shifts before lunch.", fr: "Vos bénévoles peuvent parcourir des quarts avant midi." },
    midcta_sub: {
      en: "Send them an invite link, they download the app, sign in with Apple, Google or Microsoft, and they're in. No paywall, no per-volunteer fee, ever.",
      fr: "Envoyez-leur un lien d'invitation, ils téléchargent l'application, se connectent avec Apple, Google ou Microsoft, et c'est parti. Aucun paiement, aucun frais par bénévole, jamais.",
    },
    midcta_button: { en: "Sign up for free", fr: "Inscrivez-vous gratuitement" },

    // ── Differentiators (3) ──
    diff_h2: { en: "More than a mobile site in a shell", fr: "Plus qu'un site mobile dans une coquille" },
    diff_sub: {
      en: "A lot of volunteer apps are wrapped web pages. Vome's app is built native — fast on older phones, real push notifications, real camera, real offline behavior. And it's free for every volunteer, on every plan.",
      fr: "Beaucoup d'applications bénévoles sont des sites web emballés. L'application Vome est native — rapide sur les anciens téléphones, vraies notifications push, vrai appareil photo, vrai comportement hors ligne. Et elle est gratuite pour chaque bénévole, sur chaque forfait.",
    },
    diff1_title: { en: "Free for volunteers, on every plan", fr: "Gratuite pour les bénévoles, sur chaque forfait" },
    diff1_desc: { en: "We never charge volunteers a cent — not for the app, not to apply, not to reserve. The price of the platform is paid by the organization, not the people doing the work.", fr: "Nous ne facturons jamais un sou aux bénévoles : ni pour l'application, ni pour postuler, ni pour réserver. Le prix de la plateforme est payé par l'organisation, pas par les gens qui font le travail." },
    diff2_title: { en: "One app for every organization they serve", fr: "Une seule app pour toutes leurs organisations" },
    diff2_desc: { en: "A volunteer who serves at a hospital, a food bank, and a school doesn't need three apps. They search for each organization in Vome, join, and switch between them in the side menu.", fr: "Un bénévole qui sert dans un hôpital, une banque alimentaire et une école n'a pas besoin de trois applications. Il cherche chaque organisation dans Vome, se joint, et passe de l'une à l'autre dans le menu latéral." },
    diff3_title: { en: "Sign in with what they already use", fr: "Connexion avec ce qu'ils utilisent déjà" },
    diff3_desc: { en: "Apple, Google, and Microsoft sign-in are wired in alongside email + password. Volunteers don't need to invent a new account or remember another password to start contributing.", fr: "Connexion Apple, Google et Microsoft câblée à côté du courriel et mot de passe. Les bénévoles n'ont pas besoin d'inventer un nouveau compte ou de retenir un autre mot de passe pour commencer." },

    // ── FAQ ──
    faq_h2: { en: "Mobile app FAQs", fr: "FAQ application mobile" },
    faq_sub: {
      en: "Common questions about the volunteer mobile app.",
      fr: "Questions fréquentes sur l'application mobile pour bénévoles.",
    },
    faq_cta_text: { en: "Still have questions?", fr: "Vous avez encore des questions ?" },
    faq_cta_link: { en: "Talk to our team", fr: "Parlez à notre équipe" },
    faq1_q: { en: "Is there a native iOS and Android app, and where do volunteers download it?", fr: "Une application native iOS et Android existe-t-elle, et où les bénévoles la téléchargent-ils ?" },
    faq1_a: {
      en: "Yes. The Vome volunteer app is in the Apple App Store and Google Play. Volunteers search \"Vome volunteer\" or open an invite link from your team and the app store opens to the right listing.",
      fr: "Oui. L'application bénévole Vome est dans l'App Store d'Apple et Google Play. Les bénévoles cherchent « Vome volunteer » ou ouvrent un lien d'invitation, et la bonne fiche s'ouvre dans le magasin.",
    },
    faq2_q: { en: "Do volunteers have to pay or create an account before they can sign up?", fr: "Les bénévoles doivent-ils payer ou créer un compte avant de s'inscrire ?" },
    faq2_a: {
      en: "Volunteers never pay anything to use Vome. They create a free account once — using Apple, Google, Microsoft, or email — and that one account works across every organization on Vome they choose to join.",
      fr: "Les bénévoles ne paient jamais rien pour utiliser Vome. Ils créent un compte gratuit une fois — avec Apple, Google, Microsoft ou courriel — et ce même compte fonctionne pour toutes les organisations Vome qu'ils choisissent de rejoindre.",
    },
    faq3_q: { en: "Can a volunteer belong to more than one organization in the same app?", fr: "Un bénévole peut-il appartenir à plusieurs organisations dans la même application ?" },
    faq3_a: {
      en: "Yes. The app has a built-in organization search where volunteers can find and join any nonprofit using Vome. Once joined, they switch between their organizations from the side menu and see the right schedule, chats, and onboarding for each one. The same volunteer can serve five different orgs from the same app on the same phone.",
      fr: "Oui. L'application intègre une recherche d'organisations où les bénévoles trouvent et rejoignent toute organisation utilisant Vome. Une fois inscrits, ils passent de l'une à l'autre depuis le menu latéral et voient le bon horaire, les bons clavardages et la bonne intégration pour chacune. Un même bénévole peut servir cinq organisations depuis la même application.",
    },
    faq4_q: { en: "Can volunteers actually finish onboarding from the phone — waivers, ID, training?", fr: "Les bénévoles peuvent-ils vraiment terminer leur intégration depuis le téléphone — renonciations, pièce d'identité, formation ?" },
    faq4_a: {
      en: "Yes, every step. Volunteers e-sign waivers with their finger, upload documents from the camera or photo library, watch embedded training videos, and complete background-check steps without leaving the app. Each completion writes back to their profile and the dashboard shows coordinators the live status of every sequence.",
      fr: "Oui, chaque étape. Les bénévoles signent les renonciations au doigt, téléversent leurs documents depuis l'appareil photo ou la photothèque, regardent les vidéos intégrées et complètent les vérifications d'antécédents sans quitter l'application. Chaque complétion s'inscrit au profil et le tableau de bord montre l'état en direct de chaque séquence.",
    },
    faq5_q: { en: "What happens at the door — how does check-in actually work?", fr: "Que se passe-t-il à l'entrée — comment le pointage fonctionne-t-il ?" },
    faq5_a: {
      en: "There are tons of different check-in methods available. We recommend checking our <a href=\"/volunteer-hour-tracking\">hour tracking page</a> to learn more about all the options available.",
      fr: "Plusieurs méthodes de pointage sont disponibles. Nous vous recommandons de consulter notre <a href=\"/fr/volunteer-hour-tracking\">page sur le suivi des heures</a> pour découvrir toutes les options offertes.",
    },
    faq6_q: { en: "Can volunteers cancel a shift or block dates they're unavailable?", fr: "Les bénévoles peuvent-ils annuler un quart ou bloquer leurs dates indisponibles ?" },
    faq6_a: {
      en: "Yes. From the schedule tab they can cancel any shift inside the cancellation window you set (admins are notified automatically). They can also add time-off date ranges so the system won't auto-schedule them while they're away — useful for vacations, exam weeks, or surgery recoveries.",
      fr: "Oui. Depuis l'onglet horaire, ils peuvent annuler tout quart à l'intérieur de la fenêtre d'annulation que vous fixez (les admins sont avisés automatiquement). Ils peuvent aussi ajouter des plages de congé pour ne pas être assignés en leur absence — utile pour les vacances, les semaines d'examens ou les convalescences.",
    },

    // ── Matrix heading override ──
    matrix_h2: { en: "Mobile-app capabilities by plan", fr: "Capacités de l'application mobile par forfait" },
  },

  module_integrations: {
    page_title: { en: "Integrations & API for volunteer management | Vome", fr: "Intégrations et API pour la gestion des bénévoles | Vome" },
    page_description: {
      en: "Connect Vome to Salesforce, Sterling Volunteers, SCORM Cloud, Double the Donation, Google Sheets, Zapier, and Microsoft Power Automate. SAML SSO. REST API and custom webhooks for everything else.",
      fr: "Connectez Vome à Salesforce, Sterling Volunteers, SCORM Cloud, Double the Donation, Google Sheets, Zapier et Microsoft Power Automate. SSO SAML. API REST et webhooks personnalisés pour tout le reste.",
    },

    // ── Hero ──
    hero_eyebrow: { en: "Integrations & API", fr: "Intégrations et API" },
    hero_h1_part1: { en: "Plug Vome into the ", fr: "Branchez Vome aux " },
    hero_h1_accent: { en: "tools your team", fr: "outils que votre équipe" },
    hero_h1_part2: { en: " already uses.", fr: " utilise déjà." },
    hero_sub: {
      en: "Vome offers <strong>native integrations</strong> with Salesforce, Sterling Volunteers, Microsoft Entra ID, and more. Build <em>no-code automation flows</em> through Zapier and Power Automate. A full <em>REST API</em> when you need to build something custom.",
      fr: "Vome offre des <strong>intégrations natives</strong> avec Salesforce, Sterling Volunteers, Microsoft Entra ID et plus encore. Mettez en place des <em>flux d'automatisation sans code</em> via Zapier et Power Automate. Une <em>API REST</em> complète quand il faut bâtir sur mesure.",
    },
    hero_meta_native: { en: "Native integrations", fr: "Intégrations natives" },
    hero_meta_nocode: { en: "No-code via Zapier", fr: "Sans code via Zapier" },
    hero_meta_dev: { en: "REST API & webhooks", fr: "API REST et webhooks" },

    // ── Hero mockup labels: hub-and-spoke ──
    hub_mock: {
      chip: { en: "INTEGRATIONS", fr: "INTÉGRATIONS" },
      vome: { en: "Vome", fr: "Vome" },
      vome_sub: { en: "Volunteer database", fr: "Base de bénévoles" },
      sf: { en: "Salesforce", fr: "Salesforce" },
      sf_kind: { en: "Native app", fr: "App native" },
      sterling: { en: "Sterling", fr: "Sterling" },
      sterling_kind: { en: "Background checks", fr: "Vérifications d'antécédents" },
      scorm: { en: "SCORM Cloud", fr: "SCORM Cloud" },
      scorm_kind: { en: "E-learning", fr: "Apprentissage en ligne" },
      sheets: { en: "Google Sheets", fr: "Google Sheets" },
      sheets_kind: { en: "Two-way sync", fr: "Synchronisation bidirectionnelle" },
      zap: { en: "Zapier", fr: "Zapier" },
      zap_kind: { en: "No-code automations", fr: "Automatisations sans code" },
      api: { en: "REST API", fr: "API REST" },
      api_kind: { en: "Custom webhooks", fr: "Webhooks personnalisés" },
      synced: { en: "All connections live", fr: "Toutes les connexions actives" },
    },

    // ── Spotlight 1 mockup: native integrations grid ──
    native_mock: {
      chip: { en: "NATIVE INTEGRATIONS", fr: "INTÉGRATIONS NATIVES" },
      title: { en: "5 connections, all configured", fr: "5 connexions, toutes configurées" },
      sf_name: { en: "Salesforce Lightning", fr: "Salesforce Lightning" },
      sf_meta: { en: "Two-way contact & activity sync", fr: "Synchronisation bidirectionnelle contacts et activités" },
      sf_status: { en: "Connected", fr: "Connectée" },
      sf_stat: { en: "1,284 records · Live", fr: "1 284 dossiers · En direct" },
      sterling_name: { en: "Sterling Volunteers", fr: "Sterling Volunteers" },
      sterling_meta: { en: "Background checks in onboarding", fr: "Vérifications d'antécédents à l'intégration" },
      sterling_status: { en: "Connected", fr: "Connectée" },
      sterling_stat: { en: "47 checks · This month", fr: "47 vérif. · Ce mois-ci" },
      scorm_name: { en: "SCORM Cloud", fr: "SCORM Cloud" },
      scorm_meta: { en: "E-learning scores on profile", fr: "Notes de formation au profil" },
      scorm_status: { en: "Connected", fr: "Connectée" },
      scorm_stat: { en: "12 courses · Active", fr: "12 cours · Actifs" },
      dtd_name: { en: "Double the Donation", fr: "Double the Donation" },
      dtd_meta: { en: "Matching gifts on hour claims", fr: "Dons jumelés aux déclarations d'heures" },
      dtd_status: { en: "Connected", fr: "Connectée" },
      dtd_stat: { en: "$2,460 · Matched MTD", fr: "2 460 $ · Jumelés ce mois" },
      sheets_name: { en: "Google Sheets", fr: "Google Sheets" },
      sheets_meta: { en: "Two-way database mirror", fr: "Miroir bidirectionnel de la base" },
      sheets_status: { en: "Connected", fr: "Connectée" },
      sheets_stat: { en: "Live · 2-way sync", fr: "En direct · Bidirectionnel" },
    },

    // ── Spotlight 2 mockup: automation chain (no-code) ──
    chain_mock: {
      chip: { en: "ZAPIER ZAP", fr: "ZAP ZAPIER" },
      title: { en: "When new applicant in Vome", fr: "Quand un candidat arrive dans Vome" },
      enabled: { en: "Live", fr: "En ligne" },
      trigger_label: { en: "Trigger", fr: "Déclencheur" },
      trigger_app: { en: "Vome", fr: "Vome" },
      trigger_event: { en: "New volunteer application submitted", fr: "Nouvelle candidature de bénévole soumise" },
      action1_label: { en: "Action 1", fr: "Action 1" },
      action1_app: { en: "Mailchimp", fr: "Mailchimp" },
      action1_event: { en: "Add subscriber to 'Spring 2026' audience", fr: "Ajouter à l'audience « Printemps 2026 »" },
      action2_label: { en: "Action 2", fr: "Action 2" },
      action2_app: { en: "Slack", fr: "Slack" },
      action2_event: { en: "Post message in #volunteer-leads", fr: "Publier un message dans #volunteer-leads" },
      action3_label: { en: "Action 3", fr: "Action 3" },
      action3_app: { en: "Google Sheets", fr: "Google Sheets" },
      action3_event: { en: "Append a row in 'Applicants 2026'", fr: "Ajouter une ligne dans « Candidats 2026 »" },
      runs_label: { en: "Runs this month", fr: "Exécutions ce mois-ci" },
      runs_value: { en: "1,284", fr: "1 284" },
    },

    // ── Spotlight 3 mockup: webhook payload + response ──
    api_mock: {
      chip: { en: "WEBHOOK", fr: "WEBHOOK" },
      title: { en: "POST /your-endpoint", fr: "POST /votre-endpoint" },
      method: { en: "POST", fr: "POST" },
      event_label: { en: "Event", fr: "Événement" },
      event_value: { en: "volunteer.application.submitted", fr: "volunteer.application.submitted" },
      delivered: { en: "Delivered · 200 OK", fr: "Livré · 200 OK" },
      payload_label: { en: "Payload", fr: "Charge utile" },
      response_label: { en: "Response", fr: "Réponse" },
      retries_label: { en: "Auto-retry on failure", fr: "Réessais automatiques en cas d'échec" },
      retries_value: { en: "Up to 5 attempts", fr: "Jusqu'à 5 tentatives" },
      signed_label: { en: "Signed with HMAC", fr: "Signé avec HMAC" },
      signed_value: { en: "X-Vome-Signature", fr: "X-Vome-Signature" },
    },

    // ── Benefits grid (6 cards) ──
    benefits_h2: { en: "Connect Vome to your stack without rebuilding it", fr: "Branchez Vome à votre pile technologique sans la reconstruire" },
    benefits_sub: {
      en: "Vome talks to the systems you already pay for. Volunteer activity can flow across your background-check tools, CRMs, your inbox, or other custom-built systems.",
      fr: "Vome dialogue avec les systèmes pour lesquels vous payez déjà. L'activité des bénévoles peut circuler entre vos outils de vérification d'antécédents, vos CRM, votre boîte courriel ou d'autres systèmes sur mesure.",
    },
    ben1_title: { en: "Salesforce Lightning App", fr: "Application Salesforce Lightning" },
    ben1_desc: { en: "Two-way sync between Vome and Salesforce lets you sync any data you need between the platforms, completely out of the box. No CSV exports, no copy-paste.", fr: "La synchronisation bidirectionnelle entre Vome et Salesforce vous permet de synchroniser toutes les données nécessaires entre les plateformes, prête à l'emploi. Sans export CSV ni copier-coller." },
    ben2_title: { en: "Background checks in-flow", fr: "Vérifications d'antécédents intégrées" },
    ben2_desc: { en: "Trigger Sterling Volunteers or Verified First checks from an onboarding step. Results land on the volunteer profile and unlock the next step automatically.", fr: "Déclenchez les vérifications Sterling Volunteers ou Verified First depuis une étape d'intégration. Les résultats arrivent au profil et débloquent l'étape suivante." },
    ben3_title: { en: "Training scores from SCORM", fr: "Notes de formation depuis SCORM" },
    ben3_desc: { en: "Host SCORM courses through SCORM Cloud, deliver them as a step in any sequence, and keep scores on the volunteer record.", fr: "Hébergez les cours SCORM via SCORM Cloud, livrez-les comme étape d'une séquence, et conservez les notes au dossier du bénévole." },
    ben4_title: { en: "Matching gifts on every hour claim", fr: "Dons jumelés à chaque déclaration d'heures" },
    ben4_desc: { en: "Double the Donation runs employer matching when volunteers log hours. Vome surfaces the match in their profile and on reports.", fr: "Double the Donation déclenche les jumelages d'employeurs à la déclaration d'heures. Vome affiche le jumelage au profil et dans les rapports." },
    ben5_title: { en: "Email from your domain", fr: "Courriels depuis votre domaine" },
    ben5_desc: { en: "Connect a Google or Microsoft mailbox so confirmation, reminder, and onboarding emails send from your address, not a Vome subdomain.", fr: "Connectez une boîte Google ou Microsoft pour que les courriels de confirmation, rappel et intégration partent de votre adresse, pas d'un sous-domaine Vome." },
    ben6_title: { en: "SAML SSO for staff and admins", fr: "SSO SAML pour le personnel et les admins" },
    ben6_desc: { en: "Provision admins through Microsoft Entra ID, JumpCloud, or any SAML 2.0 provider. Enforce SSO and offboard from one place.", fr: "Provisionnez les admins via Microsoft Entra ID, JumpCloud ou tout fournisseur SAML 2.0. Imposez le SSO et désactivez les comptes en un seul endroit." },

    // ── Spotlight 1: Native integrations (CONNECT) ──
    spot1_kicker: { en: "CONNECT", fr: "CONNECTER" },
    spot1_title: { en: "Native integrations for the essentials, hand-built by Vome.", fr: "Des intégrations natives pour l'essentiel, conçues par Vome." },
    spot1_body: {
      en: "<strong>Native integrations</strong> with popular providers like <strong>Salesforce</strong>, <strong>Sterling Volunteers</strong>, <strong>SCORM Cloud</strong>, <strong>Double the Donation</strong>, and <strong>Google Sheets</strong> make it easy to plug Vome into your tools in a few clicks. Configure them once, and the data flows where you'd expect it: onto the volunteer profile, into your sequences, and across reports.",
      fr: "Des <strong>intégrations natives</strong> avec des fournisseurs populaires comme <strong>Salesforce</strong>, <strong>Sterling Volunteers</strong>, <strong>SCORM Cloud</strong>, <strong>Double the Donation</strong> et <strong>Google Sheets</strong> facilitent le branchement de Vome à vos outils en quelques clics. Configurez-les une fois, les données circulent où il faut : au profil du bénévole, dans vos séquences et dans les rapports.",
    },
    spot1_b1: { en: "Two background-check providers supported: Sterling Volunteers and Verified First, with results stored on the profile", fr: "Deux fournisseurs de vérifications pris en charge : Sterling Volunteers et Verified First, résultats conservés au profil" },
    spot1_b2: { en: "Map any Vome field to its Salesforce counterpart, including custom fields — for a seamless two-way integration", fr: "Associez tout champ Vome à son équivalent Salesforce, y compris les champs personnalisés — pour une intégration bidirectionnelle sans accroc" },
    spot1_b3: { en: "SCORM Cloud completion scores arrive in real time and unlock the next onboarding step automatically", fr: "Les notes SCORM Cloud arrivent en temps réel et débloquent automatiquement l'étape d'intégration suivante" },
    spot1_b4: { en: "Two-way Google Sheets sync keeps a live mirror of your database for downstream reporting and BI tools", fr: "La synchronisation bidirectionnelle Google Sheets maintient un miroir vivant de votre base pour vos outils de rapport et BI" },

    // ── Spotlight 2: No-code automations (AUTOMATE) ──
    spot2_kicker: { en: "AUTOMATE", fr: "AUTOMATISER" },
    spot2_title: { en: "Reach 5,000+ apps without writing a single line of code.", fr: "Joignez plus de 5 000 applications sans écrire une seule ligne de code." },
    spot2_body: {
      en: "Vome ships with native <strong>Zapier</strong> and <strong>Microsoft Power Automate</strong> connectors. Trigger flows on a new applicant, a status change, a new reservation, or a logged hour — then chain the apps your team already lives in.",
      fr: "Vome est livré avec des connecteurs natifs <strong>Zapier</strong> et <strong>Microsoft Power Automate</strong>. Déclenchez des flux à une nouvelle candidature, un changement de statut, une nouvelle réservation ou une heure enregistrée — puis enchaînez les applications que votre équipe utilise déjà.",
    },
    spot2_b1: { en: "Pre-built Vome triggers in both connectors — pick a trigger, pick an action, no API config or schema mapping required", fr: "Déclencheurs Vome pré-construits dans les deux connecteurs — choisissez un déclencheur, une action, sans configuration API ni mappage de schéma" },
    spot2_b2: { en: "Reach 5,000+ apps through Zapier and the full Microsoft 365 ecosystem through Power Automate", fr: "Joignez plus de 5 000 applications via Zapier et tout l'écosystème Microsoft 365 via Power Automate" },
    spot2_b3: { en: "Filter and branch flows by site, program, or volunteer attribute so the same trigger forks per audience", fr: "Filtrez et embranchez les flux par site, programme ou attribut de bénévole pour que le même déclencheur se divise par auditoire" },
    spot2_b4: { en: "Operations teams own and monitor the flows, no Vome dev access or developer involvement required", fr: "Les équipes opérationnelles possèdent et surveillent les flux, sans accès dev Vome ni intervention de développeur" },

    // ── Spotlight 3: API + webhooks (BUILD) ──
    spot3_kicker: { en: "BUILD", fr: "BÂTIR" },
    spot3_title: { en: "A REST API and webhook system for the work that needs custom code.", fr: "Une API REST et un système de webhooks pour le travail qui exige du code sur mesure." },
    spot3_body: {
      en: "When the work needs custom code, Vome offers a full <strong>REST API</strong> and a <strong>custom webhook</strong> system. Your developers can read and write across the Vome data model, subscribe to the events that matter to your stack, and build the integration your program actually needs. <a href=\"https://docs.vomevolunteer.com/\" target=\"_blank\" rel=\"noopener noreferrer\">See the developer docs →</a>",
      fr: "Quand le travail demande du code sur mesure, Vome offre une <strong>API REST</strong> complète et un système de <strong>webhooks personnalisés</strong>. Vos développeurs lisent et écrivent dans le modèle de données Vome, s'abonnent aux événements qui comptent pour votre pile, et bâtissent l'intégration dont votre programme a besoin. <a href=\"https://docs.vomevolunteer.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Consulter la documentation développeur →</a>",
    },
    spot3_b1: { en: "Read and write across the Vome data model — volunteers, opportunities, shifts, hours, and custom fields", fr: "Lecture et écriture dans le modèle de données Vome — bénévoles, opportunités, quarts, heures et champs personnalisés" },
    spot3_b2: { en: "Subscribe webhook endpoints to the events you care about, so your systems react in real time without polling", fr: "Abonnez vos webhooks aux événements qui vous intéressent pour que vos systèmes réagissent en temps réel sans interrogation" },
    spot3_b3: { en: "A developer dashboard for issuing keys, inspecting payloads, and auditing past deliveries", fr: "Un tableau de bord développeur pour émettre des clés, inspecter les charges utiles et auditer les livraisons passées" },
    spot3_b4: { en: "Pair the API with Zapier or Power Automate flows so each integration gets the right tool for the job", fr: "Combinez l'API avec les flux Zapier ou Power Automate pour donner le bon outil à chaque intégration" },

    // ── Logo grid (replaces "How it works") ──
    logos_h2: { en: "Every integration Vome ships with", fr: "Chaque intégration livrée avec Vome" },
    logos_sub: {
      en: "Grouped by category. Native partners are configured from the Vome admin. Identity providers, email domains, no-code automations, and the developer surface all live alongside them in the same settings area.",
      fr: "Groupées par catégorie. Les partenaires natifs se configurent depuis l'admin Vome. Fournisseurs d'identité, domaines courriel, automatisations sans code et surface développeur cohabitent dans la même zone de paramètres.",
    },
    logos_cat_native: { en: "Native integrations", fr: "Intégrations natives" },
    logos_cat_identity: { en: "Identity & SSO", fr: "Identité et SSO" },
    logos_cat_email: { en: "Email domain", fr: "Domaine courriel" },
    logos_cat_auto: { en: "No-code automations", fr: "Automatisations sans code" },
    logos_cat_dev: { en: "Developer surface", fr: "Surface développeur" },
    logo_sf: { en: "Salesforce", fr: "Salesforce" },
    logo_sf_sub: { en: "Lightning app", fr: "Application Lightning" },
    logo_sterling: { en: "Sterling Volunteers", fr: "Sterling Volunteers" },
    logo_sterling_sub: { en: "Background checks", fr: "Vérifications d'antécédents" },
    logo_vfirst: { en: "Verified First", fr: "Verified First" },
    logo_vfirst_sub: { en: "Background checks", fr: "Vérifications d'antécédents" },
    logo_scorm: { en: "SCORM Cloud", fr: "SCORM Cloud" },
    logo_scorm_sub: { en: "E-learning", fr: "Apprentissage en ligne" },
    logo_dtd: { en: "Double the Donation", fr: "Double the Donation" },
    logo_dtd_sub: { en: "Matching gifts", fr: "Dons jumelés" },
    logo_sheets: { en: "Google Sheets", fr: "Google Sheets" },
    logo_sheets_sub: { en: "Two-way database sync", fr: "Synchronisation bidirectionnelle" },
    logo_google_mail: { en: "Google Workspace", fr: "Google Workspace" },
    logo_google_mail_sub: { en: "Send from your domain", fr: "Envoyer depuis votre domaine" },
    logo_outlook: { en: "Microsoft 365", fr: "Microsoft 365" },
    logo_outlook_sub: { en: "Send from your domain", fr: "Envoyer depuis votre domaine" },
    logo_entra: { en: "Microsoft Entra ID", fr: "Microsoft Entra ID" },
    logo_entra_sub: { en: "SAML SSO", fr: "SSO SAML" },
    logo_jumpcloud: { en: "JumpCloud", fr: "JumpCloud" },
    logo_jumpcloud_sub: { en: "SAML SSO", fr: "SSO SAML" },
    logo_okta: { en: "Okta", fr: "Okta" },
    logo_okta_sub: { en: "SAML SSO", fr: "SSO SAML" },
    logo_adfs: { en: "Microsoft ADFS", fr: "Microsoft ADFS" },
    logo_adfs_sub: { en: "SAML SSO", fr: "SSO SAML" },
    logo_zapier: { en: "Zapier", fr: "Zapier" },
    logo_zapier_sub: { en: "5,000+ apps", fr: "Plus de 5 000 applications" },
    logo_power: { en: "Power Automate", fr: "Power Automate" },
    logo_power_sub: { en: "Microsoft 365 flows", fr: "Flux Microsoft 365" },
    logo_api: { en: "REST API", fr: "API REST" },
    logo_api_sub: { en: "Scoped keys", fr: "Clés à portée" },
    logo_webhooks: { en: "Custom webhooks", fr: "Webhooks personnalisés" },
    logo_webhooks_sub: { en: "HMAC-signed", fr: "Signés HMAC" },
    logo_devdash: { en: "Developer dashboard", fr: "Tableau de bord développeur" },
    logo_devdash_sub: { en: "Logs & payload replay", fr: "Journaux et rejeu" },

    // ── Differentiators (3) ──
    diff_h2: { en: "Why integrations work better here", fr: "Pourquoi les intégrations fonctionnent mieux ici" },
    diff_sub: {
      en: "Most volunteer platforms either bolt on third-party tools or stop at a single export. Vome ships native, no-code, and developer paths in the same product, so you choose the one that fits.",
      fr: "La plupart des plateformes de bénévolat collent des outils tiers ou s'arrêtent à un simple export. Vome livre les voies natives, sans code et développeur dans le même produit. Choisissez celle qui convient.",
    },
    diff1_title: { en: "Native, not bolted-on", fr: "Natives, pas rapportées" },
    diff1_desc: { en: "Sterling, SCORM, Salesforce, Double the Donation, and Google Sheets are built into Vome. Their data lives on the volunteer profile, not in a separate dashboard.", fr: "Sterling, SCORM, Salesforce, Double the Donation et Google Sheets sont intégrés dans Vome. Leurs données vivent au profil du bénévole, pas dans un tableau séparé." },
    diff2_title: { en: "Both no-code and code paths", fr: "Voies sans code et avec code" },
    diff2_desc: { en: "Operations teams build flows in Zapier or Power Automate. Developers ship custom integrations through the REST API and webhooks. Same data model under both.", fr: "Les équipes opérationnelles bâtissent des flux dans Zapier ou Power Automate. Les développeurs livrent des intégrations sur mesure via l'API REST et les webhooks. Même modèle de données pour les deux." },
    diff3_title: { en: "5,000+ apps reachable on day one", fr: "Plus de 5 000 applications accessibles dès le premier jour" },
    diff3_desc: { en: "Through the native Zapier connector alone, Vome can talk to Mailchimp, Blackbaud products, Notion, and thousands more without an engineer. Power Automate covers the Microsoft 365 side. Auth, audit logs, and key rotation come standard.", fr: "Via le seul connecteur Zapier natif, Vome dialogue avec Mailchimp, les produits Blackbaud, Notion et des milliers d'autres applications sans développeur. Power Automate couvre l'écosystème Microsoft 365. Authentification, journaux d'audit et rotation des clés inclus." },

    // ── FAQ ──
    faq_h2: { en: "Integration FAQs", fr: "FAQ Intégrations" },
    faq_sub: {
      en: "Common questions about Vome's native integrations, automations, and developer surface.",
      fr: "Questions fréquentes sur les intégrations natives, les automatisations et la surface développeur de Vome.",
    },
    faq_cta_text: { en: "Have a stack we haven't covered?", fr: "Vous avez une pile que nous n'avons pas couverte ?" },
    faq_cta_link: { en: "Talk to our team", fr: "Parlez à notre équipe" },
    faq1_q: { en: "Which integrations are included with each plan?", fr: "Quelles intégrations sont incluses à chaque forfait ?" },
    faq1_a: {
      en: "Salesforce, SAML SSO, Zapier, Power Automate, and the developer surface (REST API, webhooks, developer dashboard) are available on the Ultimate plan. The full breakdown is in the comparison table above.",
      fr: "Salesforce, SSO SAML, Zapier, Power Automate et la surface développeur (API REST, webhooks, tableau de bord) sont offerts sur le forfait Ultimate. La répartition complète est dans le tableau ci-dessus.",
    },
    faq2_q: { en: "How can I integrate Vome with my other tools?", fr: "Comment intégrer Vome à mes autres outils ?" },
    faq2_a: {
      en: "We offer many options to integrate Vome with platforms, with our native integrations or through automated workflows using Zapier or Microsoft Power Automate.",
      fr: "Nous offrons plusieurs façons d'intégrer Vome à vos plateformes, avec nos intégrations natives ou via des flux automatisés avec Zapier ou Microsoft Power Automate.",
    },
    faq3_q: { en: "What can I do with the Vome Zapier connector?", fr: "Que puis-je faire avec le connecteur Zapier Vome ?" },
    faq3_a: {
      en: "Trigger Zaps on new applicants, status changes, hour claims, and form submissions. Chain Vome with Mailchimp, Slack, HubSpot, Outlook, Teams, Google Sheets, or any other Zapier app. The same triggers and actions are available through the Microsoft Power Automate connector for Microsoft 365 shops.",
      fr: "Déclenchez des Zaps à de nouveaux candidats, changements de statut, déclarations d'heures et soumissions. Enchaînez Vome avec Mailchimp, Slack, HubSpot, Outlook, Teams, Google Sheets ou toute autre app Zapier. Les mêmes déclencheurs et actions sont offerts par le connecteur Microsoft Power Automate pour les organisations Microsoft 365.",
    },
    faq4_q: { en: "How do the REST API and custom webhooks work?", fr: "Comment fonctionnent l'API REST et les webhooks personnalisés ?" },
    faq4_a: {
      en: "The developer surface gives your team API keys, a dashboard for monitoring, and the ability to create custom webhook subscriptions per event type. Reach out to our team if you'd like to talk through your specific integration plans.",
      fr: "La surface développeur fournit à votre équipe des clés API, un tableau de bord pour le suivi, et la possibilité de créer des abonnements webhook par type d'événement. Contactez notre équipe pour discuter de vos plans d'intégration.",
    },
    faq5_q: { en: "Which SSO providers does Vome support?", fr: "Quels fournisseurs SSO Vome prend-il en charge ?" },
    faq5_a: {
      en: "Any SAML 2.0 provider, including Microsoft Entra ID (formerly Azure AD), JumpCloud, Okta, and others. Vome supports JIT provisioning of admins through SAML, enforced SSO at the org level, and offboarding when an admin is removed from your IdP.",
      fr: "Tout fournisseur SAML 2.0, y compris Microsoft Entra ID (anciennement Azure AD), JumpCloud, Okta et autres. Vome prend en charge le provisionnement JIT des admins via SAML, l'imposition du SSO au niveau de l'organisation et la désactivation des comptes lorsqu'un admin est retiré de votre IdP.",
    },
    faq6_q: { en: "Can confirmation emails come from our own domain?", fr: "Les courriels de confirmation peuvent-ils provenir de notre domaine ?" },
    faq6_a: {
      en: "Yes. Connect a Google Workspace or Microsoft 365 mailbox to Vome and outbound emails (confirmations, reminders, sequence notifications, automations) send from your address with proper SPF and DKIM, not a Vome subdomain.",
      fr: "Oui. Connectez une boîte Google Workspace ou Microsoft 365 à Vome et les courriels sortants (confirmations, rappels, notifications de séquence, automatisations) partent de votre adresse avec SPF et DKIM appropriés, pas d'un sous-domaine Vome.",
    },
    faq7_q: { en: "Is there a Verified First integration alongside Sterling?", fr: "Y a-t-il une intégration Verified First en plus de Sterling ?" },
    faq7_a: {
      en: "Yes. Vome ships native integrations with both Sterling Volunteers and Verified First, so you can pick the background-check provider you already use. Either way, checks fire from an onboarding step and results land on the volunteer profile.",
      fr: "Oui. Vome livre des intégrations natives avec Sterling Volunteers et Verified First, ce qui vous permet de choisir le fournisseur de vérifications que vous utilisez déjà. Dans les deux cas, les vérifications se déclenchent depuis une étape d'intégration et les résultats arrivent au profil du bénévole.",
    },
    faq8_q: { en: "Does Vome support two-factor authentication?", fr: "Vome prend-il en charge l'authentification à deux facteurs ?" },
    faq8_a: {
      en: "Yes. Two-factor authentication can be enabled per admin and enforced across your whole team. Pair it with SAML SSO for the strongest posture, or use it on its own.",
      fr: "Oui. L'authentification à deux facteurs peut être activée par administrateur et imposée à toute votre équipe. Combinez-la avec le SSO SAML pour la posture la plus solide, ou utilisez-la seule.",
    },

    // ── Matrix heading override ──
    matrix_h2: { en: "Advanced features and integrations by plan", fr: "Fonctionnalités avancées et intégrations par forfait" },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  MOBILE APP section
  // ─────────────────────────────────────────────────────────────────────────
  mobile_app: {
    h2: { en: "The app your volunteers love.", fr: "L'application que vos bénévoles adorent." },
    h2_sub: { en: "Designed for every age, skill, and shift.", fr: "Conçue pour tous les âges, toutes les compétences et tous les quarts." },
    sub: {
      en: "Volunteers can register for opportunities, reserve shifts, check in, and message your team, all from their phone. Admins get the same app to run the whole program from anywhere.",
      fr: "Les bénévoles peuvent s'inscrire aux opportunités, réserver des quarts, pointer leur présence et communiquer avec votre équipe, le tout depuis leur téléphone. Les administrateurs ont la même application pour gérer tout le programme depuis n'importe où.",
    },
    callout_browse: { en: "Browse and sign up\nfor opportunities", fr: "Parcourez et inscrivez-vous\naux opportunités" },
    callout_reserve: { en: "Reserve and manage\nyour shifts", fr: "Réservez et gérez\nvos quarts" },
    callout_awards: { en: "Earn awards and\nachievements", fr: "Gagnez des prix et\ndes accomplissements" },
    callout_checkin: { en: "Check in and\ntrack hours", fr: "Pointez et\nsuivez vos heures" },
    callout_push: { en: "Push notifications\nand shift reminders", fr: "Notifications push\net rappels de quart" },
    callout_chat: { en: "Chat with admins\nand volunteers", fr: "Clavardez avec administrateurs\net bénévoles" },
    badge_apple_aria: { en: "Download on the App Store", fr: "Téléchargez sur l'App Store" },
    badge_google_aria: { en: "Get it on Google Play", fr: "Disponible sur Google Play" },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  ENTERPRISE section
  // ─────────────────────────────────────────────────────────────────────────
  enterprise: {
    h2: { en: "Built for enterprise scale.", fr: "Conçu pour l'échelle de l'entreprise." },
    sub: {
      en: "Run multiple programs, locations, and teams under one account, with the integrations, compliance, and admin controls your organization requires.",
      fr: "Gérez plusieurs programmes, sites et équipes dans un seul compte, avec les intégrations, la conformité et les contrôles d'administration que votre organisation exige.",
    },
    card_struct_title: { en: "Segment your portal by site, department, or location", fr: "Segmentez votre portail par site, département ou lieu" },
    card_struct_body: {
      en: "Organize your entire portal around how your organization is actually structured. Each location, department, or location can have its own content, admins, and branded experience. Volunteers only see what's relevant to them. Admins only manage what's theirs.",
      fr: "Organisez l'entièreté de votre portail selon la structure réelle de votre organisation. Chaque emplacement, département ou lieu peut avoir son propre contenu, ses administrateurs et son image de marque. Les bénévoles ne voient que ce qui les concerne. Les administrateurs ne gèrent que ce qui leur appartient.",
    },
    card_roles_title: { en: "Admin roles and permissions, as granular as you need", fr: "Rôles et permissions d'administrateur, aussi granulaires que nécessaire" },
    card_roles_body: {
      en: "Invite your whole team with scoped access. Department leads see their department. Site managers see their site. Configure granular read or edit permissions by folder, module, or content type, so every admin has exactly the access they need.",
      fr: "Invitez toute votre équipe avec un accès délimité. Les responsables de département voient leur département. Les gestionnaires de site voient leur site. Configurez des permissions granulaires de lecture ou de modification par dossier, module ou type de contenu, afin que chaque administrateur ait exactement l'accès dont il a besoin.",
    },
    card_int_title: { en: "Integrations that fit your tech stack", fr: "Des intégrations qui s'arriment à votre pile technologique" },
    card_int_body: {
      en: "Native Salesforce app with two-way sync, Zapier, Microsoft Power Automate, Sterling Volunteers, SCORM Cloud, Verified First, and Double the Donation. All built in. Or use our REST API and custom webhooks to achieve any workflow.",
      fr: "Application Salesforce native avec synchronisation bidirectionnelle, Zapier, Microsoft Power Automate, Sterling Volunteers, SCORM Cloud, Verified First et Double the Donation. Toutes intégrées. Ou utilisez notre API REST et nos webhooks personnalisés pour réaliser n'importe quel flux de travail.",
    },
    cta_demo: { en: "Book a demo", fr: "Réserver une démo" },
    cta_pricing: { en: "See pricing", fr: "Voir les tarifs" },
    node_org: { en: "Organization", fr: "Organisation" },
    node_downtown: { en: "Downtown site", fr: "Site centre-ville" },
    node_east: { en: "East location", fr: "Lieu de l'Est" },
    node_youth: { en: "Youth programs", fr: "Programmes jeunesse" },
    node_volunteers_count: { en: "volunteers", fr: "bénévoles" },
    role_full_access: { en: "Org admin, full access", fr: "Admin de l'organisation, accès complet" },
    role_site_manager: { en: "Site manager, Downtown", fr: "Gestionnaire de site, Centre-ville" },
    role_scheduler: { en: "Scheduler, read & edit shifts", fr: "Planificateur, lire et modifier des quarts" },
    role_invite: { en: "Invite teammate", fr: "Inviter un coéquipier" },
    role_custom: { en: "Custom role", fr: "Rôle personnalisé" },
    int_more: { en: "+ more", fr: "+ plus" },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  SECURITY section
  // ─────────────────────────────────────────────────────────────────────────
  security: {
    h2: { en: "Security your organization can trust.", fr: "Une sécurité à laquelle votre organisation peut faire confiance." },
    sub: {
      en: "Enterprise-grade infrastructure built to meet the reliability, authentication, and compliance standards your organization requires.",
      fr: "Une infrastructure de niveau entreprise conçue pour répondre aux normes de fiabilité, d'authentification et de conformité exigées par votre organisation.",
    },
    pillar_id_title: { en: "Identity & access", fr: "Identité et accès" },
    pillar_id_body: {
      en: "Connect to Microsoft Entra ID, ADFS, Jump Cloud, or any SAML-based single sign-on provider. Enforce two-factor authentication across your team with role-based access controls that keep every admin scoped to what they need.",
      fr: "Connectez-vous à Microsoft Entra ID, ADFS, Jump Cloud ou tout fournisseur d'authentification unique basé sur SAML. Appliquez l'authentification à deux facteurs à toute votre équipe avec des contrôles d'accès basés sur les rôles qui maintiennent chaque administrateur dans son périmètre.",
    },
    pillar_infra_title: { en: "Infrastructure & encryption", fr: "Infrastructure et chiffrement" },
    pillar_infra_body: {
      en: "AES-256 encryption at rest, TLS 1.2+ in transit. Hosted on AWS with high availability, redundancy and continuous monitoring. Built to support the privacy and data protection standards expected by healthcare and enterprise clients.",
      fr: "Chiffrement AES-256 au repos, TLS 1.2+ en transit. Hébergé sur AWS avec haute disponibilité, redondance et surveillance continue. Conçu pour soutenir les normes de confidentialité et de protection des données attendues par les clients du secteur de la santé et des grandes entreprises.",
    },
    pillar_compliance_title: { en: "Compliance", fr: "Conformité" },
    pillar_compliance_body: {
      en: "Vome follows industry-leading privacy and security frameworks to protect your organization's data at every layer: HIPAA, SOC 2, GDPR, PIPEDA, CCPA, and PCI DSS.",
      fr: "Vome suit les meilleurs cadres de confidentialité et de sécurité de l'industrie pour protéger les données de votre organisation à chaque niveau : HIPAA, SOC 2, RGPD, LPRPDE, CCPA et PCI DSS.",
    },
    badge_compliant: { en: "COMPLIANT", fr: "CONFORME" },
    badges_aria: { en: "Compliance certifications", fr: "Certifications de conformité" },
    cta_privacy: { en: "Read our privacy policy →", fr: "Lire notre politique de confidentialité →" },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  TESTIMONIALS — section header + each quote
  // ─────────────────────────────────────────────────────────────────────────
  testimonials: {
    header_part_1: { en: "See what our customers", fr: "Voyez ce que disent" },
    header_accent: { en: "are saying", fr: "nos clients" },
    sub: {
      en: "From hospital systems to national nonprofits, thousands of coordinators trust Vome to manage their volunteers.",
      fr: "Des systèmes hospitaliers aux organismes à but non lucratif nationaux, des milliers de coordonnateurs font confiance à Vome pour gérer leurs bénévoles.",
    },
    // Shown only on the FR site, beneath the section sub. Empty on EN so the
    // <p> is not rendered. The quotes themselves were given to us in English by
    // English-speaking customers, so we flag the translation for transparency.
    fr_translation_note: {
      en: "",
      fr: "Note : les témoignages ci-dessous ont été traduits en français pour faciliter la lecture. Les versions originales ont été fournies en anglais par nos clients.",
    },

    laura_quote: {
      en: "Very easy to use and navigate; it is intuitive, visually appealing, and has great features - both for administrators and users. Vome support is helpful, responsive, and effective. Communication and tracking features make the program a great tool for our uses and needs.",
      fr: "Très facile à utiliser et à naviguer ; intuitif, visuellement attrayant, avec d'excellentes fonctionnalités — à la fois pour les administrateurs et les utilisateurs. Le soutien de Vome est utile, réactif et efficace. Les fonctions de communication et de suivi font du programme un excellent outil pour nos besoins.",
    },
    laura_title: { en: "Program Coordinator, Hospice Care Ottawa", fr: "Coordonnatrice de programme, Hospice Care Ottawa" },

    brook_quote: {
      en: "We gave Vome a shot - you should too. As a manager of volunteers, I've worked with five other volunteer software companies. This is the first time I've felt valued as a customer - instead of just one of the masses. Vome is easy to navigate, easy to customize, and affordable.",
      fr: "Nous avons donné une chance à Vome — vous devriez aussi. En tant que gestionnaire de bénévoles, j'ai travaillé avec cinq autres entreprises de logiciels. C'est la première fois que je me sens valorisée en tant que cliente, plutôt qu'un numéro parmi tant d'autres. Vome est facile à naviguer, facile à personnaliser et abordable.",
    },
    brook_title: { en: "Volunteer Coordinator, Dawn Health", fr: "Coordonnatrice des bénévoles, Dawn Health" },

    roberta_quote: {
      en: "We've been using this volunteer management system for a while now, and it has exceeded our expectations in every way. The platform itself is intuitive, easy to navigate, and has streamlined the way we organise, schedule, and communicate with our volunteers. What really sets this system apart, however, is the outstanding customer care. Highly recommend to any organization that values both great tools and outstanding service.",
      fr: "Nous utilisons ce système de gestion des bénévoles depuis un certain temps et il a dépassé toutes nos attentes. La plateforme est intuitive, facile à naviguer et a simplifié notre façon d'organiser, planifier et communiquer avec nos bénévoles. Ce qui distingue vraiment ce système, c'est l'excellence du service à la clientèle. Hautement recommandé à toute organisation qui apprécie à la fois de bons outils et un service exceptionnel.",
    },
    roberta_title: { en: "Human Resources, Red Cross Malta", fr: "Ressources humaines, Croix-Rouge de Malte" },

    jaime_quote: {
      en: "Vome suits our needs and more! The main reason we looked for volunteer management software was to offer the flexibility for our volunteers to schedule and change shifts on their own. Vome allows this with ease, and is quite user friendly for most of our volunteers and has created efficiency for our Volunteer Manager.",
      fr: "Vome répond à nos besoins et plus encore ! La raison principale pour laquelle nous cherchions un logiciel de gestion des bénévoles était d'offrir la flexibilité à nos bénévoles de planifier et modifier leurs quarts par eux-mêmes. Vome permet cela facilement, est convivial pour la majorité de nos bénévoles, et a créé de l'efficacité pour notre gestionnaire de bénévoles.",
    },
    jaime_title: { en: "Event and Volunteer Manager, Habitat for Humanity Victoria", fr: "Gestionnaire d'événements et de bénévoles, Habitat for Humanity Victoria" },

    gary_quote: {
      en: "Vome has been a game changer for us! We are pretty unique in the way we utilize 2000+ volunteers a year and Vome has been the only site I've come across that is this flexible and meets our budget needs. The automation has been a huge time saver.",
      fr: "Vome a tout changé pour nous ! Nous sommes assez uniques dans notre façon d'utiliser plus de 2 000 bénévoles par année, et Vome est la seule plateforme que j'ai trouvée qui soit aussi flexible et qui respecte nos besoins budgétaires. L'automatisation nous fait gagner énormément de temps.",
    },
    gary_title: { en: "Manager of Volunteer Programs & Internships, WaterFire", fr: "Gestionnaire des programmes de bénévolat et stages, WaterFire" },

    hanna_quote: {
      en: "We've been using Vome Volunteer for a little over six months, and it's been a game-changer. The check-in kiosk has been a wonderful resource, and it has helped to streamline our volunteer check-in/check out processes. This centralization has helped bring in new volunteers, as well as increased the number of young adults interested in participating in our programs and events. Additionally, everyone on the Vome team is a delight to work with. Questions are answered promptly, and Vome is very receptive to customer feedback.",
      fr: "Nous utilisons Vome Volunteer depuis un peu plus de six mois et ça a tout changé. La borne de pointage est une ressource formidable qui a simplifié nos processus de pointage entrée/sortie. Cette centralisation a aidé à attirer de nouveaux bénévoles et a augmenté le nombre de jeunes adultes intéressés à participer à nos programmes et événements. De plus, toute l'équipe de Vome est un plaisir avec qui travailler. Les questions reçoivent des réponses rapides et Vome est très réceptif aux commentaires de la clientèle.",
    },
    hanna_title: { en: "Volunteer Coordinator, Raising Readers in Story County", fr: "Coordonnatrice des bénévoles, Raising Readers in Story County" },

    kadie_quote: {
      en: "10/10 Volunteer Platform! It is very user-friendly for our volunteers and admin. It has features that make it more engaging for volunteers which really helps our program. I also appreciate the access to Vome staff for training - it really makes it easier to use to implement in our agency!",
      fr: "Plateforme de bénévolat 10/10 ! Elle est très conviviale pour nos bénévoles et nos administrateurs. Elle dispose de fonctionnalités qui la rendent plus engageante pour les bénévoles, ce qui aide vraiment notre programme. J'apprécie également l'accès au personnel de Vome pour la formation — cela facilite vraiment la mise en œuvre dans notre organisme !",
    },
    kadie_title: { en: "Volunteer Coordinator, Grow with Trellis", fr: "Coordonnatrice des bénévoles, Grow with Trellis" },

    jolie_quote: {
      en: "Love VOME! Everything from the ease of use, reporting, cost and the scheduling. I am able to set up a whole section for my trainers and that allows volunteers to sign up for the training very easily. Vome lets the volunteers to be flexible and add a shift quickly and last minute. Vome also helped me set it up from start to finish.",
      fr: "J'adore VOME ! Facile d'utilisation, rapports, coût et planification. Je peux configurer une section complète pour mes formateurs, ce qui permet aux bénévoles de s'inscrire à la formation très facilement. Vome permet aux bénévoles d'être flexibles et d'ajouter un quart rapidement et à la dernière minute. Vome m'a aussi aidée à le configurer du début à la fin.",
    },
    jolie_title: { en: "Volunteer Manager, Humane Society of Utah", fr: "Gestionnaire des bénévoles, Humane Society of Utah" },

    gia_quote: {
      en: "Loving Vome. Definitely has been a huge help. It has been so much easier keeping track of hours and who we have on our team of volunteers using this technology. During our busiest time, Vome has helped our center streamline applications. So glad we made the change!",
      fr: "J'adore Vome. Cette technologie nous aide énormément. Il est tellement plus facile de suivre les heures et de savoir qui fait partie de notre équipe de bénévoles. Pendant nos périodes les plus chargées, Vome a aidé notre centre à rationaliser les candidatures. Nous sommes ravis d'avoir fait ce changement !",
    },
    gia_title: { en: "Director of Day Program Services, Long Island Alzheimer's & Dementia Center", fr: "Directrice des services du programme de jour, Long Island Alzheimer's & Dementia Center" },

    kate_quote: {
      en: "Implementing Vome has revolutionized our volunteer management operations at the Ronald McDonald House Charities of Columbia, SC. The automated scheduling system is a standout feature, saving us significant time and reducing errors. Our volunteers appreciate the flexibility and ease of being able to schedule shifts, which has led to a notable 55% increase in participation and significant improvements in retention.",
      fr: "La mise en œuvre de Vome a révolutionné nos opérations de gestion des bénévoles à la Ronald McDonald House Charities de Columbia, SC. Le système de planification automatisé est une caractéristique remarquable qui nous a permis de gagner beaucoup de temps et de réduire les erreurs. Nos bénévoles apprécient la flexibilité et la facilité avec lesquelles ils peuvent planifier leurs quarts, ce qui a mené à une augmentation notable de 55 % de la participation et à des améliorations importantes en rétention.",
    },
    kate_title: { en: "Marketing & Communications Manager, RMHC Columbia SC", fr: "Responsable du marketing et de la communication, RMHC Columbia SC" },

    elizabeth_quote: {
      en: "Vome has been saving me a lot of time managing volunteers across my programs. It offers a robust set of tools that make it simple to recruit and onboard new volunteers, while also providing the functionality needed to communicate with them. They made our transition straightforward, respond to my questions immediately, and incorporate feedback into the platform in record time.",
      fr: "Vome m'a permis de gagner beaucoup de temps dans la gestion des bénévoles de mes programmes. Il offre un ensemble d'outils robustes qui facilitent le recrutement et l'intégration de nouveaux bénévoles, tout en fournissant les fonctionnalités nécessaires pour communiquer avec eux. Ils ont facilité notre transition, répondent immédiatement à mes questions et intègrent les commentaires dans la plateforme en un temps record.",
    },
    elizabeth_title: { en: "Manager, Volunteer & Guest Services", fr: "Responsable du service des bénévoles et des invités" },

    jessica_quote: {
      en: "I like that I can search for particular volunteers and track their shifts. I love that we can get a quick total of all volunteers and their hours. Customer service is the best — I usually hear right back if not by the next day. And Vome is always trying to improve. Feedback is welcomed and improvements are always being rolled out.",
      fr: "J'aime le fait que je puisse rechercher des bénévoles particuliers et suivre leurs quarts. J'aime que nous puissions obtenir rapidement le total de tous les bénévoles et de leurs heures. Le service à la clientèle est le meilleur — je reçois généralement une réponse immédiate, sinon le lendemain. Et Vome cherche toujours à s'améliorer. Les commentaires sont bienvenus et des améliorations sont déployées en continu.",
    },
    jessica_title: { en: "Community Engagement Manager", fr: "Gestionnaire de l'engagement communautaire" },

    wesley_quote: {
      en: "The ease of doing reports is faaaar better than our previous platform. I have zero issues creating volunteer reports for our team.",
      fr: "La facilité d'élaboration des rapports est nettement supérieure à celle de notre plateforme précédente. Je n'ai aucun problème à créer des rapports sur les bénévoles pour notre équipe.",
    },
    wesley_title: { en: "Volunteer Engagement Manager", fr: "Gestionnaire de l'engagement des bénévoles" },

    deidre_quote: {
      en: "The database is easy to use. I can quickly get the monthly total hours of volunteering and it is incredibly easy to speak with their team. They are also constantly improving.",
      fr: "La base de données est facile à utiliser. Je peux rapidement obtenir le nombre total d'heures de bénévolat par mois et il est incroyablement facile de parler à leur équipe. Ils s'améliorent également constamment.",
    },
    deidre_title: { en: "Volunteer & Donations Coordinator", fr: "Coordonnatrice des bénévoles et des dons" },

    stars_aria: { en: "5 out of 5", fr: "5 sur 5" },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  CLOSING CTA — homepage + plans page
  // ─────────────────────────────────────────────────────────────────────────
  cta: {
    headline: { en: "Ready to see it in action, or want a walk-through with our team?", fr: "Prêt à voir Vome en action ou à programmer une démonstration avec notre équipe ?" },
    sub: {
      en: "Sign up for free or schedule a demo to see why thousands of volunteer managers and coordinators are choosing Vome.",
      fr: "Inscrivez-vous gratuitement ou réservez une démo pour voir pourquoi des milliers de gestionnaires et coordonnateurs de bénévoles choisissent Vome.",
    },
    primary: { en: "Start for free", fr: "Commencer gratuitement" },
    secondary: { en: "Schedule a demo", fr: "Réserver une démo" },
    meta_free: { en: "Start with free plan", fr: "Commencez avec le forfait gratuit" },
    meta_migration: { en: "Migration assistance included", fr: "Aide à la migration incluse" },
    meta_onboarding: { en: "Live onboarding support", fr: "Soutien d'intégration en direct" },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  FAQ (homepage) — header + question/answer pairs
  // ─────────────────────────────────────────────────────────────────────────
  faq: {
    header: { en: "Frequently asked questions", fr: "Foire aux questions" },
    sub: { en: "Everything coordinators ask before switching to Vome.", fr: "Tout ce que les coordonnateurs demandent avant de passer à Vome." },
    cta_text: { en: "Still have questions?", fr: "Encore des questions ?" },
    cta_link: { en: "Talk to our team →", fr: "Parlez à notre équipe →" },

    q_what_is: { en: "What is Vome?", fr: "Qu'est-ce que Vome ?" },
    a_what_is: {
      en: "Vome is a volunteer management software that helps administrators streamline their workflows and the volunteer journey. It offers a complete end-to-end volunteer app that helps organizations with volunteer recruitment, onboarding, scheduling, hour tracking, database management, reporting and integrations.",
      fr: "Vome est un logiciel de gestion des bénévoles qui aide les administrateurs à simplifier leurs flux de travail et le parcours des bénévoles. Il offre une application bénévole complète de bout en bout qui aide les organisations dans le recrutement, l'intégration, la planification, le suivi des heures, la gestion de bases de données, la production de rapports et les intégrations.",
    },

    q_integrations: { en: "Does Vome offer integrations?", fr: "Vome offre-t-il des intégrations ?" },
    a_integrations: {
      en: "Vome offers API integrations, custom webhooks, and automations via Zapier and Microsoft Power Automate. That means that Vome can integrate with other systems such as Salesforce, Blackbaud products (i.e. Raiser's Edge), CRM systems, HRIS, donor management platforms, etc. Integration features are only accessible via the Ultimate plan.",
      fr: "Vome offre des intégrations API, des webhooks personnalisés et des automatisations via Zapier et Microsoft Power Automate. Cela signifie que Vome peut s'intégrer à d'autres systèmes tels que Salesforce, les produits Blackbaud (par ex. Raiser's Edge), les CRM, les SIRH, les plateformes de gestion des donateurs, etc. Les fonctionnalités d'intégration ne sont accessibles qu'avec le forfait Ultime.",
    },

    q_messaging: { en: "Why is instant messaging important for a volunteer management platform?", fr: "Pourquoi la messagerie instantanée est-elle importante pour une plateforme de gestion des bénévoles ?" },
    a_messaging: {
      en: "Instant messaging facilitates real-time communication between administrators and volunteers, eliminating the need for email chains, text messaging, or phone calls. Combined with the Vome mobile app, it keeps admins and volunteers connected wherever they are. Vome's proprietary chats feature generates auto-chatrooms for every opportunity and shift, alleviating the administrative burden of coordinating group chats manually.",
      fr: "La messagerie instantanée facilite la communication en temps réel entre administrateurs et bénévoles, éliminant le besoin de chaînes de courriels, de textos ou d'appels téléphoniques. Combinée à l'application mobile de Vome, elle garde administrateurs et bénévoles connectés où qu'ils soient. La fonction de clavardage propriétaire de Vome génère des salons automatiques pour chaque opportunité et quart, allégeant la charge administrative de coordonner les groupes manuellement.",
    },

    q_account_required: { en: "Do all my volunteers need to create a Vome account?", fr: "Tous mes bénévoles doivent-ils créer un compte Vome ?" },
    a_account_required: {
      en: "No. As an administrator, you can manage offline profiles for volunteers directly in Vome, scheduling and tracking their activity without requiring them to create an account. Inviting volunteers to claim their own profile unlocks the full experience — form submissions, shift reservations, automated reminders, QR check-in, and chats — but it is never required.",
      fr: "Non. En tant qu'administrateur, vous pouvez gérer des profils hors ligne pour les bénévoles directement dans Vome, planifier et suivre leur activité sans qu'ils aient à créer un compte. Inviter les bénévoles à revendiquer leur propre profil débloque l'expérience complète — soumissions de formulaires, réservations de quarts, rappels automatisés, pointage QR et clavardage — mais ce n'est jamais obligatoire.",
    },

    q_auto_updates: { en: "Are automatic updates included in my subscription?", fr: "Les mises à jour automatiques sont-elles incluses dans mon abonnement ?" },
    a_auto_updates: {
      en: "Yes. As part of your subscription, you can expect automatic software updates. Vome is continuously evolving to meet the changing needs of volunteer managers, with regular releases that include improvements to existing features, new tools and functionalities, and performance and stability enhancements.",
      fr: "Oui. Votre abonnement inclut les mises à jour automatiques du logiciel. Vome évolue continuellement pour répondre aux besoins changeants des gestionnaires de bénévoles, avec des versions régulières incluant des améliorations des fonctionnalités existantes, de nouveaux outils et fonctionnalités, et des améliorations de performance et de stabilité.",
    },

    q_free_trial: { en: "Do you offer a free trial for any of the premium plans?", fr: "Offrez-vous un essai gratuit pour les forfaits payants ?" },
    a_free_trial: {
      en: "Yes, we offer a 30-day free trial for all premium plans — Pro, Enterprise, and Ultimate. The free trial begins automatically as soon as you upgrade from your admin portal.",
      fr: "Oui, nous offrons un essai gratuit de 30 jours pour tous les forfaits payants — Pro, Entreprise et Ultime. L'essai gratuit commence automatiquement dès que vous passez à un forfait supérieur depuis votre portail d'administration.",
    },

    q_eligible: { en: "Which organizations are eligible to use Vome?", fr: "Quelles organisations peuvent utiliser Vome ?" },
    a_eligible: {
      en: "Any organization looking to streamline community engagement for volunteers, staff, members, clients, or event attendees. We serve hospitals and healthcare networks, membership associations, grassroots organizations, multi-national NGOs, community centres, food banks and shelters, municipalities and government agencies, festivals, school districts and universities, and businesses. Vome's Enterprise plan is well-suited for multi-site entities.",
      fr: "Toute organisation cherchant à simplifier l'engagement communautaire avec des bénévoles, du personnel, des membres, des clients ou des participants à des événements. Nous servons des hôpitaux et réseaux de santé, des associations, des organismes communautaires, des ONG multinationales, des centres communautaires, des banques alimentaires et refuges, des municipalités et agences gouvernementales, des festivals, des commissions scolaires, des universités et des entreprises. Le forfait Entreprise de Vome convient particulièrement aux organisations multi-sites.",
    },

    q_max_volunteers: { en: "How many volunteers am I allowed to manage?", fr: "Combien de bénévoles puis-je gérer ?" },
    a_max_volunteers: {
      en: "As many as you have. There is no limit to the number of volunteers you can recruit or import. Our pricing depends on the number of administrative seats you wish to use on any paid plan.",
      fr: "Autant que vous en avez. Il n'y a aucune limite au nombre de bénévoles que vous pouvez recruter ou importer. Notre tarification dépend du nombre de sièges administratifs que vous souhaitez activer sur un forfait payant.",
    },

    q_per_admin: { en: "Why do you charge per administrator?", fr: "Pourquoi facturez-vous par administrateur ?" },
    a_per_admin: {
      en: "We charge per administrative seat to help you with budgetary planning. Most organizations know how many administrators will need access to Vome, but the number of active volunteers may vary throughout the year.",
      fr: "Nous facturons par siège administratif pour faciliter votre planification budgétaire. La plupart des organisations savent combien d'administrateurs auront besoin d'accéder à Vome, alors que le nombre de bénévoles actifs peut varier au cours de l'année.",
    },

    q_mix_billing: { en: "Can I use monthly and annual pricing at the same time for different administrators?", fr: "Puis-je combiner la tarification mensuelle et annuelle pour différents administrateurs ?" },
    a_mix_billing: {
      en: "Yes. We allow organizations to purchase a combination of monthly and annual seats for maximum flexibility. For example, you can purchase annual seats for your full-time employees and monthly seats for part-time employees who do not require year-round access.",
      fr: "Oui. Nous permettons aux organisations d'acheter une combinaison de sièges mensuels et annuels pour une flexibilité maximale. Par exemple, vous pouvez acheter des sièges annuels pour vos employés à temps plein et des sièges mensuels pour les employés à temps partiel qui n'ont pas besoin d'un accès toute l'année.",
    },

    q_cancel: { en: "What happens if we decide to cancel our plan?", fr: "Que se passe-t-il si nous décidons d'annuler notre forfait ?" },
    a_cancel: {
      en: "If you no longer wish to use a premium plan, you may cancel at any time. You will be able to use your premium plan until your current billing cycle is over, and will then be downgraded to the free base plan.",
      fr: "Si vous ne souhaitez plus utiliser un forfait payant, vous pouvez l'annuler à tout moment. Vous pourrez utiliser votre forfait payant jusqu'à la fin de votre cycle de facturation actuel, puis vous serez rétrogradé au forfait de base gratuit.",
    },

    q_discounts: { en: "Do you offer any discounts?", fr: "Offrez-vous des rabais ?" },
    a_discounts: {
      en: "Yes. When you choose the annual billing option on Vome Pro, you receive a 33% discount compared to 12 monthly payments. We also offer additional savings for organizations that require a sizeable number of admin seats, have unique organizational structures, or are looking to partner for longer terms.",
      fr: "Oui. Lorsque vous choisissez la facturation annuelle sur Vome Pro, vous recevez un rabais de 33 % par rapport à 12 paiements mensuels. Nous offrons aussi des économies supplémentaires aux organisations qui ont besoin d'un grand nombre de sièges administratifs, qui ont des structures organisationnelles uniques, ou qui cherchent un partenariat à long terme.",
    },

    q_languages: { en: "What languages do you support?", fr: "Quelles langues supportez-vous ?" },
    a_languages: {
      en: "Vome is a bilingual platform, available in both English and French.",
      fr: "Vome est une plateforme bilingue, disponible en anglais et en français.",
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  FOOTER
  // ─────────────────────────────────────────────────────────────────────────
  footer: {
    tagline: { en: "The one-stop volunteer management software & mobile app.", fr: "Le logiciel et appli de gestion des bénévoles tout-en-un." },
    col_features: { en: "Features", fr: "Fonctionnalités" },
    col_software: { en: "Software", fr: "Logiciel" },
    col_about: { en: "About Vome", fr: "À propos de Vome" },
    col_resources: { en: "Resources", fr: "Ressources" },
    address: { en: "2900 Loyalist St, Cornwall, ON K6H 6C8, Canada", fr: "2900 Loyalist St, Cornwall, ON K6H 6C8, Canada" },

    // Feature column
    feat_overview: { en: "Feature overview", fr: "Aperçu des fonctionnalités" },
    feat_apps: { en: "Volunteer application forms", fr: "Formulaires de candidature pour bénévoles" },
    feat_onboarding: { en: "Volunteer onboarding", fr: "Intégration des bénévoles" },
    feat_scheduling: { en: "Volunteer scheduling", fr: "Planification des bénévoles" },
    feat_hours: { en: "Hour tracking", fr: "Suivi des heures" },
    feat_database: { en: "Database & reports", fr: "Base de données et rapports" },
    feat_comms: { en: "Communications", fr: "Communications" },
    feat_app: { en: "App for volunteers", fr: "Application pour bénévoles" },

    // Software column
    sw_home: { en: "Visit our homepage", fr: "Visitez notre page d'accueil" },
    sw_plans: { en: "View plans & pricing", fr: "Voir les forfaits et tarifs" },
    sw_signup_org: { en: "Sign up as an organization", fr: "S'inscrire comme organisation" },
    sw_signup_vol: { en: "Sign up as a volunteer", fr: "S'inscrire comme bénévole" },
    sw_login: { en: "Login", fr: "Connexion" },

    // About column
    about_story: { en: "Our story", fr: "Notre histoire" },
    about_video: { en: "Watch a video", fr: "Regarder une vidéo" },
    about_demo: { en: "Book a demo", fr: "Réserver une démo" },
    about_contact: { en: "Contact us", fr: "Nous joindre" },
    about_affiliate: { en: "Become an affiliate", fr: "Devenir affilié" },

    // Resources column
    res_blog: { en: "Blog", fr: "Blogue" },
    res_privacy: { en: "Privacy policy", fr: "Politique de confidentialité" },
    res_terms: { en: "Terms of service", fr: "Conditions d'utilisation" },
    res_cookie: { en: "Cookie policy", fr: "Politique de témoins" },
    res_glossary: { en: "Glossary", fr: "Glossaire" },
    res_support: { en: "Get support", fr: "Obtenir de l'aide" },
    res_devdocs: { en: "Developer docs", fr: "Documentation développeur" },

    badge_apple_aria: { en: "Download on the App Store", fr: "Téléchargez sur l'App Store" },
    badge_google_aria: { en: "Get it on Google Play", fr: "Disponible sur Google Play" },
    badge_apple_sm: { en: "Download on the", fr: "Téléchargez sur" },
    badge_apple_lg: { en: "App Store", fr: "App Store" },
    badge_google_sm: { en: "Get it on", fr: "Disponible sur" },
    badge_google_lg: { en: "Google Play", fr: "Google Play" },
    lang_label: { en: "Language", fr: "Langue" },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  CONTACT FORM (shared component used on About Us)
  // ─────────────────────────────────────────────────────────────────────────
  contact_form: {
    heading_default: { en: "Contact Us", fr: "Nous joindre" },
    first_name: { en: "First Name", fr: "Prénom" },
    last_name: { en: "Last Name", fr: "Nom" },
    email: { en: "Email", fr: "Courriel" },
    organization: { en: "Organization", fr: "Organisation" },
    phone: { en: "Phone", fr: "Téléphone" },
    website: { en: "Website", fr: "Site web" },
    message: { en: "Message", fr: "Message" },
    required: { en: "required", fr: "obligatoire" },
    submit: { en: "Send Message", fr: "Envoyer le message" },
    sending: { en: "Sending…", fr: "Envoi en cours…" },
    note: { en: "We typically reply within 1-2 business days.", fr: "Nous répondons généralement en 1 à 2 jours ouvrables." },
    success_heading: { en: "Message sent", fr: "Message envoyé" },
    success_body: { en: "We typically reply within 1-2 business days.", fr: "Nous répondons généralement en 1 à 2 jours ouvrables." },
    success_body_named: { en: "Thanks, {name}. We typically reply within 1-2 business days.", fr: "Merci, {name}. Nous répondons généralement en 1 à 2 jours ouvrables." },
    error: { en: "Something went wrong — please try again, or visit our support portal if the issue continues.", fr: "Une erreur s'est produite — veuillez réessayer ou visiter notre portail de soutien si le problème persiste." },
    fr_docs_note: {
      en: "Looking for documentation in French? Email us at admin@vomevolunteer.com and we'll send the French version.",
      fr: "Vous cherchez de la documentation en français ? Écrivez-nous à admin@vomevolunteer.com et nous vous enverrons la version française.",
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  ABOUT US page
  // ─────────────────────────────────────────────────────────────────────────
  about_us: {
    page_title: { en: "About Us | Vome Volunteer", fr: "À propos | Vome Volunteer" },
    page_description: {
      en: "Learn about Vome's mission to make volunteering easy and accessible for everyone — our story, our team, and our commitment to volunteer managers worldwide.",
      fr: "Découvrez la mission de Vome — rendre le bénévolat facile et accessible à tous. Notre histoire, notre équipe et notre engagement envers les coordonnateurs de bénévoles.",
    },
    eyebrow: { en: "About Us", fr: "À propos" },
    hero_h1: {
      en: "By partnering with Vome, you are choosing to work with a team of dedicated, passionate and innovative professionals.",
      fr: "En vous associant à Vome, vous choisissez de travailler avec une équipe de jeunes professionnels dévoués, passionnés et innovants.",
    },
    hero_alt: { en: "Vome volunteer management platform in action", fr: "La plateforme de gestion des bénévoles Vome en action" },
    story_head: { en: "About Us", fr: "À propos" },
    p1: {
      en: "Vome is a volunteer management platform that was built with a clear mission in mind — to make volunteering easy and accessible for everyone. We believe that volunteering is the cornerstone of building strong communities, and that everyone should have the opportunity to give back in a way that is meaningful to them.",
      fr: "Vome est une plateforme de gestion des bénévoles qui a été construite avec une mission claire à l'esprit — rendre le bénévolat facile et accessible à tous. Nous croyons que le bénévole est le pilier de communautés fortes, et que tout le monde devrait avoir l'opportunité de donner en retour d'une manière qui est significative pour eux.",
    },
    p2: {
      en: "Our platform was designed to meet the needs of volunteer managers, so they can easily streamline their workflows and focus on the most important part of their job — managing their volunteers. We understand that managing and engaging volunteers can be a challenging and time-consuming process, which is why we built Vome to be intuitive, powerful, and affordable.",
      fr: "Notre plateforme a été conçue pour répondre aux besoins des coordonnateurs de bénévoles, afin qu'ils puissent facilement rationaliser leurs flux de travail et se concentrer sur la partie la plus importante de leur travail — la gestion de leurs bénévoles. Nous comprenons que la gestion et l'engagement des bénévoles peuvent être un processus difficile et laborieux, c'est pourquoi nous avons construit Vome pour qu'il soit intuitif, puissant et abordable.",
    },
    p3: {
      en: "At Vome, we believe that the volunteer journey should be just as seamless as booking a hotel, flight or a table at your favorite restaurant. That's why we've made it incredibly easy for volunteers to sign up for opportunities and reserve shifts, all within just a few clicks.",
      fr: "Chez Vome, nous pensons que le parcours du bénévole doit être aussi fluide que la réservation d'un hôtel, d'un vol ou d'une table dans votre restaurant préféré. C'est pourquoi nous avons fait en sorte qu'il soit incroyablement facile pour les bénévoles de s'inscrire à des opportunités et de réserver des quarts, le tout en quelques clics.",
    },
    p4: {
      en: "We take pride in our commitment to listening to our customers' feedback and continuously improving the platform. Our team is dedicated to adding new features and capabilities that make it even easier for volunteer managers to do their jobs. We strive to continue building a community of individuals who are passionate about volunteer management and share our vision of making volunteering accessible to everyone.",
      fr: "Nous sommes fiers de notre promesse d'écouter les commentaires de nos clients et d'améliorer continuellement la plateforme. Notre équipe se consacre à l'ajout de nouvelles fonctionnalités et capacités qui facilitent encore plus le travail des gestionnaires de bénévoles. Nous nous efforçons de continuer à construire une communauté de personnes passionnées par la gestion des bénévoles et partageant notre vision de rendre le bénévolat accessible à tous.",
    },
    p5: {
      en: "We understand the vital role that volunteers play in the success of many organizations and their operations. Without the selfless dedication and hard work of volunteers, many organizations would not have the resources to achieve their missions and continue making a positive impact. As a technology provider, it is our responsibility to continue making their lives as easy as possible to continue giving their time.",
      fr: "Nous comprenons le rôle vital que jouent les bénévoles dans la réussite de nombreuses organisations et de leurs activités. Sans le dévouement altruiste et le travail soutenu des bénévoles, de nombreuses organisations n'auraient pas les ressources nécessaires pour accomplir leurs missions et continuer à avoir un impact positif. En tant que fournisseur de technologie, il est de notre responsabilité de continuer à leur rendre la vie aussi facile que possible pour qu'ils continuent à donner de leur temps.",
    },
    p6: {
      en: "Our team also recognizes the challenge of quantifying the value (or ROI) of volunteer contribution for organizations. That's why our platform makes it super easy to track and report on various forms of volunteer activity, including hours contributed. By integrating with other tools and data sources, we've set out to provide clear visibility into organizational KPIs, empowering our partners to secure funding, engage stakeholders, and make better informed decisions.",
      fr: "Notre équipe est également consciente du défi que représente la quantification de la valeur (ou du retour sur investissement) de la contribution des bénévoles pour les organisations. C'est pourquoi notre plateforme facilite grandement le suivi et la production de rapports sur les différentes formes d'activité bénévole, y compris les heures contribuées. En intégrant d'autres outils et sources de données, nous avons entrepris de fournir une visibilité claire sur les indicateurs clés de performance des organisations, permettant ainsi à nos partenaires d'obtenir des financements, d'impliquer les parties prenantes et de prendre des décisions plus éclairées.",
    },
    p7: {
      en: "For organizations evaluating using Vome to manage their volunteers, we can guarantee that working with the Vome team will be unlike any other platform. You can consider us a partner to help you accomplish your technology goals, go the extra mile to understand your operations and provide levels of customer support you won't find anywhere else. You'll immediately feel the difference after your first meeting with us.",
      fr: "Pour les organisations qui envisagent d'utiliser Vome pour gérer leurs bénévoles, nous pouvons garantir que la collaboration avec l'équipe de Vome ne ressemblera à aucune autre plateforme. Vous pouvez nous considérer comme un partenaire qui vous aidera à atteindre vos objectifs technologiques, qui fera un effort supplémentaire pour comprendre vos opérations et qui vous fournira un niveau de support client que vous ne trouverez nulle part ailleurs. Vous sentirez immédiatement la différence après votre première rencontre avec nous.",
    },
    cta_part_1: { en: "See for yourself and", fr: "Voyez par vous-même en" },
    cta_link_1: { en: "sign up for free", fr: "s'inscrire gratuitement" },
    cta_or: { en: "or", fr: "ou" },
    cta_link_2: { en: "book a demo", fr: "réserver une démo" },
    cta_period: { en: ".", fr: "." },
    contact_head: { en: "Need more information?", fr: "Besoin de plus d'informations sur Vome ?" },
    contact_sub: {
      en: "We would love to hear more about your organization and learn how volunteers help drive your mission. We can't wait to hear from you!",
      fr: "Nous aimerions en savoir plus sur votre organisation et découvrir comment les bénévoles contribuent à votre mission. Nous sommes impatients d'avoir de vos nouvelles !",
    },
    contact_address: { en: "2900 Loyalist St, Cornwall, ON K6H 6C8", fr: "2900 Loyalist St, Cornwall, ON K6H 6C8" },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  CONTACT PAGE
  // ─────────────────────────────────────────────────────────────────────────
  contact_page: {
    page_title: { en: "Contact Us | Vome Volunteer", fr: "Nous joindre | Vome Volunteer" },
    page_description: {
      en: "Get in touch with the Vome team. Ask about the platform, get account support, or explore a partnership — we'd love to hear from you.",
      fr: "Communiquez avec l'équipe Vome. Posez vos questions sur la plateforme, obtenez du soutien pour votre compte ou explorez un partenariat — nous serions ravis d'avoir de vos nouvelles.",
    },
    eyebrow: { en: "We're here to help", fr: "Nous sommes là pour vous aider" },
    h1: { en: "How can we help?", fr: "Comment pouvons-nous vous aider ?" },
    sub: {
      en: "Whether you have questions about Vome, need support, or want to explore a partnership, we'd love to hear from you.",
      fr: "Que vous ayez des questions sur Vome, que vous ayez besoin de soutien ou que vous souhaitiez explorer un partenariat, nous serions ravis d'avoir de vos nouvelles.",
    },

    route_demo_title: { en: "Looking for a demo?", fr: "Vous cherchez une démo ?" },
    route_demo_body: { en: "See Vome in action with one of our team members. We'll walk you through the platform and answer your questions live.", fr: "Voyez Vome en action avec un membre de notre équipe. Nous vous guiderons à travers la plateforme et répondrons à vos questions en direct." },
    route_demo_cta: { en: "Book a demo →", fr: "Réserver une démo →" },

    route_support_title: { en: "Need help with your account?", fr: "Besoin d'aide avec votre compte ?" },
    route_support_body: { en: "Our support portal has step-by-step guides and direct access to our support team for billing, bugs, and account questions.", fr: "Notre portail de soutien propose des guides étape par étape et un accès direct à notre équipe pour la facturation, les anomalies et les questions de compte." },
    route_support_cta: { en: "Visit support portal →", fr: "Visiter le portail de soutien →" },

    route_faq_title: { en: "Have a quick question?", fr: "Une question rapide ?" },
    route_faq_body: { en: "We've answered the most common questions about Vome, pricing, integrations, and getting started on our FAQ page.", fr: "Nous avons répondu aux questions les plus courantes sur Vome, la tarification, les intégrations et le démarrage dans notre foire aux questions." },
    route_faq_cta: { en: "Browse the FAQ →", fr: "Consulter la FAQ →" },

    form_h2: { en: "Send us a message", fr: "Envoyez-nous un message" },
    form_sub: { en: "Fill in the form and we should get back to you within 1-2 business days.", fr: "Remplissez le formulaire et nous devrions vous répondre en 1 à 2 jours ouvrables." },

    fld_first: { en: "First name", fr: "Prénom" },
    fld_last: { en: "Last name", fr: "Nom" },
    fld_email: { en: "Email", fr: "Courriel" },
    fld_org: { en: "Organization", fr: "Organisation" },
    fld_topic: { en: "Topic", fr: "Sujet" },
    fld_topic_placeholder: { en: "Select a topic…", fr: "Choisir un sujet…" },
    fld_message: { en: "Message", fr: "Message" },
    fld_message_placeholder: { en: "Tell us what's on your mind…", fr: "Dites-nous ce qui vous préoccupe…" },
    required: { en: "required", fr: "obligatoire" },

    topic_general: { en: "General inquiry", fr: "Question générale" },
    topic_sales: { en: "Sales", fr: "Ventes" },
    topic_support: { en: "Support", fr: "Soutien" },
    topic_partnership: { en: "Partnership", fr: "Partenariat" },
    topic_press: { en: "Press", fr: "Presse" },
    topic_other: { en: "Other", fr: "Autre" },

    submit: { en: "Send message", fr: "Envoyer le message" },
    sending: { en: "Sending…", fr: "Envoi en cours…" },
    note: { en: "We typically reply within 1-2 business days.", fr: "Nous répondons généralement en 1 à 2 jours ouvrables." },

    success_heading: { en: "Message sent", fr: "Message envoyé" },
    success_body: { en: "We typically reply within 1-2 business days.", fr: "Nous répondons généralement en 1 à 2 jours ouvrables." },
    success_body_named: { en: "Thanks, {name}. We typically reply within 1-2 business days.", fr: "Merci, {name}. Nous répondons généralement en 1 à 2 jours ouvrables." },
    success_back: { en: "Back to homepage", fr: "Retour à l'accueil" },
    error: { en: "Something went wrong — please try again, or visit our support portal if the issue continues.", fr: "Une erreur s'est produite — veuillez réessayer ou visiter notre portail de soutien si le problème persiste." },

    info_h2: { en: "Other ways to reach us", fr: "Autres façons de nous joindre" },
    info_support_h: { en: "Support", fr: "Soutien" },
    info_support_body: { en: "For account help, billing questions, or bugs, our support portal connects you directly to our support team and is usually the fastest path to a resolution.", fr: "Pour de l'aide avec votre compte, des questions de facturation ou des anomalies, notre portail de soutien vous connecte directement à notre équipe et constitue habituellement la voie la plus rapide vers une résolution." },
    info_address_h: { en: "Mailing address", fr: "Adresse postale" },
    info_address_body: { en: "2900 Loyalist St\nCornwall, ON K6H 6C8\nCanada", fr: "2900 Loyalist St\nCornwall, ON K6H 6C8\nCanada" },
    info_response_h: { en: "Response time", fr: "Délai de réponse" },
    info_response_body: { en: "We monitor messages during business hours (EST) and aim to reply within one business day. Urgent account issues are typically resolved faster through the support portal.", fr: "Nous surveillons les messages durant les heures d'ouverture (HNE) et visons à répondre en un jour ouvrable. Les problèmes urgents de compte se résolvent généralement plus vite via le portail de soutien." },

    cfaq_h2: { en: "Common questions", fr: "Questions fréquentes" },
    cfaq_q1: { en: "How quickly will I hear back?", fr: "À quelle vitesse aurai-je une réponse ?" },
    cfaq_a1: {
      en: "We typically reply within 1-2 business days. If your need is urgent, the fastest path to an answer is our support portal — it usually gets you there faster.",
      fr: "Nous répondons généralement en 1 à 2 jours ouvrables. Si votre besoin est urgent, le chemin le plus rapide vers une réponse est notre portail de soutien — il vous y mène habituellement plus vite.",
    },
    cfaq_q2: { en: "Can I schedule a call instead of sending a message?", fr: "Puis-je planifier un appel au lieu d'envoyer un message ?" },
    cfaq_a2: {
      en: "Absolutely. Head to our demo page to pick a time that works. You'll book a call directly with our team.",
      fr: "Absolument. Rendez-vous sur notre page de démo pour choisir un créneau qui vous convient. Vous réserverez un appel directement avec notre équipe.",
    },
    cfaq_q3: { en: "Where can I find documentation and guides?", fr: "Où puis-je trouver de la documentation et des guides ?" },
    cfaq_a3: {
      en: "Our support portal has step-by-step articles, tutorials, and guides for every Vome feature — available at support.vomevolunteer.com.",
      fr: "Notre portail de soutien contient des articles pas à pas, des tutoriels et des guides pour chaque fonctionnalité de Vome — disponibles à support.vomevolunteer.com.",
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  DEMO PAGE
  // ─────────────────────────────────────────────────────────────────────────
  demo_page: {
    page_title: { en: "Book a Demo | Vome Volunteer", fr: "Réserver une démo | Vome Volunteer" },
    page_description: {
      en: "See Vome in action. Book a personalized demo with our team and learn how we can help your organization manage volunteers more effectively.",
      fr: "Voyez Vome en action. Réservez une démo personnalisée avec notre équipe et découvrez comment nous pouvons aider votre organisation à mieux gérer ses bénévoles.",
    },
    eyebrow: { en: "See Vome in action", fr: "Voir Vome en action" },
    h1: { en: "Schedule a demo", fr: "Réserver une démo" },
    sub: { en: "Pick a time and we'll walk you through Vome and answer your questions.", fr: "Choisissez un créneau et nous vous présenterons Vome en répondant à vos questions." },
    faq_h2: { en: "Questions about the demo", fr: "Questions sur la démo" },
    faq_sub: { en: "Everything people ask before booking a call with us.", fr: "Tout ce que les gens demandent avant de réserver un appel avec nous." },
    faq_cta: { en: "Something else?", fr: "Autre chose ?" },
    faq_cta_link: { en: "Contact our team →", fr: "Contacter notre équipe →" },
    fallback_part_1: { en: "Can't find a time that works?", fr: "Vous ne trouvez pas de créneau qui convient ?" },
    fallback_link: { en: "Visit our contact page", fr: "Visitez notre page de contact" },
    fallback_part_2: { en: "and we'll sort something out.", fr: "et nous trouverons une solution." },

    q_prepare: { en: "Do I need to prepare anything?", fr: "Dois-je préparer quelque chose ?" },
    a_prepare: {
      en: "We recommend two things before the call: sign up for the free Vome Recruit plan and spend a few minutes exploring the platform, and watch our brief explainer video. You'll come to the meeting with better questions and a much clearer sense of what you want to see. Neither is required, but both make the call significantly more useful.",
      fr: "Nous recommandons deux choses avant l'appel : inscrivez-vous au forfait gratuit Vome Recruit et passez quelques minutes à explorer la plateforme, et regardez notre courte vidéo explicative. Vous arriverez à la rencontre avec de meilleures questions et une idée beaucoup plus claire de ce que vous voulez voir. Aucun des deux n'est obligatoire, mais les deux rendent l'appel beaucoup plus utile.",
    },
    q_team: { en: "Can I include other team members on the call?", fr: "Puis-je inclure d'autres membres de l'équipe à l'appel ?" },
    a_team: {
      en: "Absolutely. Forward the calendar invite to anyone who should be there — volunteer coordinator, program manager, IT lead, whoever. Just add them before the meeting.",
      fr: "Absolument. Transférez l'invitation calendrier à quiconque devrait y participer — coordonnateur des bénévoles, gestionnaire de programme, responsable TI, qui que ce soit. Ajoutez-les simplement avant la rencontre.",
    },
    q_no_time: { en: "What if I can't find a time that works?", fr: "Que faire si je ne trouve pas de créneau ?" },
    a_no_time: {
      en: "Visit our contact page and we'll find something that works. We have availability across multiple time zones.",
      fr: "Visitez notre page de contact et nous trouverons un créneau qui convient. Nous avons des disponibilités sur plusieurs fuseaux horaires.",
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  DEMO CONFIRMED page
  // ─────────────────────────────────────────────────────────────────────────
  demo_confirmed: {
    page_title: { en: "You're booked! | Vome Volunteer", fr: "C'est réservé ! | Vome Volunteer" },
    page_description: {
      en: "Your discovery call is confirmed. Here's how to make the most of it before we meet.",
      fr: "Votre appel de découverte est confirmé. Voici comment en tirer le maximum avant notre rencontre.",
    },
    h1: { en: "You're booked. See you soon!", fr: "C'est réservé. À bientôt !" },
    sub: {
      en: "A calendar invite is on its way to your inbox. We're looking forward to learning about your organization and how we can help.",
      fr: "Une invitation calendrier est en route vers votre boîte de réception. Nous avons hâte d'en apprendre sur votre organisation et de voir comment nous pouvons vous aider.",
    },
    prep_h2: { en: "Make the most of your call", fr: "Tirez le maximum de votre appel" },
    prep_sub: {
      en: "Two things we recommend before we meet — they take less than 10 minutes and make the conversation significantly more useful.",
      fr: "Deux choses que nous recommandons avant notre rencontre — elles prennent moins de 10 minutes et rendent la conversation beaucoup plus utile.",
    },
    step1_title: { en: "Sign up for the free plan and have a look around", fr: "Inscrivez-vous au forfait gratuit et explorez" },
    step1_text: {
      en: "Vome Recruit is free with no time limit. Creating an account takes two minutes, and exploring the platform before we meet means you'll come with much more specific questions — and you'll get a lot more out of the call.",
      fr: "Vome Recruit est gratuit sans limite de temps. Créer un compte prend deux minutes, et explorer la plateforme avant notre rencontre vous permettra d'arriver avec des questions beaucoup plus précises — et de tirer beaucoup plus de l'appel.",
    },
    step1_cta: { en: "Sign up for free →", fr: "S'inscrire gratuitement →" },
    step2_title: { en: "Watch our brief explainer video", fr: "Regardez notre courte vidéo explicative" },
    step2_text: {
      en: "Get a quick overview of what Vome does and how it fits into a volunteer program. Two minutes that give you a solid foundation before we go deeper on your specific needs.",
      fr: "Obtenez un aperçu rapide de ce que fait Vome et de la façon dont il s'intègre à un programme de bénévolat. Deux minutes qui vous donnent une base solide avant que nous explorions vos besoins spécifiques.",
    },
    step2_cta: { en: "Watch a 2-minute video →", fr: "Regarder une vidéo de 2 minutes →" },
    foot_part_1: { en: "Need to reschedule or have a question before we meet?", fr: "Besoin de reporter ou une question avant la rencontre ?" },
    foot_link: { en: "Contact our team →", fr: "Contacter notre équipe →" },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  VIDEO PAGE
  // ─────────────────────────────────────────────────────────────────────────
  //  AFFILIATES PAGE
  // ─────────────────────────────────────────────────────────────────────────
  affiliates_page: {
    page_title: { en: "Become an Affiliate | Vome Volunteer", fr: "Devenir affilié | Vome Volunteer" },
    page_description: {
      en: "Refer organizations to Vome and earn rewards as a referral partner. Apply to join the Vome affiliate program.",
      fr: "Référez des organisations à Vome et obtenez des récompenses en tant que partenaire de référence. Postulez pour rejoindre le programme d'affiliation Vome.",
    },
    eyebrow: { en: "Affiliate program", fr: "Programme d'affiliation" },
    h1: { en: "Become a referral partner", fr: "Devenez un partenaire de référence" },
    sub: {
      en: "Refer organizations to Vome and earn rewards. Fill out the form below and our team will be in touch.",
      fr: "Référez des organisations à Vome et obtenez des récompenses. Remplissez le formulaire ci-dessous et notre équipe vous contactera.",
    },
    fallback_part_1: { en: "Questions about the program?", fr: "Des questions sur le programme ?" },
    fallback_link: { en: "Contact our team", fr: "Contactez notre équipe" },
    fallback_part_2: { en: "and we'll be happy to help.", fr: "et nous serons heureux de vous aider." },
  },

  // ─────────────────────────────────────────────────────────────────────────
  video_page: {
    page_title: { en: "Watch Vome in Action | Volunteer Management Software", fr: "Voir Vome en action | Logiciel de gestion des bénévoles" },
    page_description: {
      en: "See how Vome handles volunteer recruitment, scheduling, and reporting in 2 minutes. No signup required.",
      fr: "Voyez comment Vome gère le recrutement, la planification et les rapports de bénévoles en 2 minutes. Aucune inscription requise.",
    },
    eyebrow: { en: "See Vome in 2 minutes", fr: "Voyez Vome en 2 minutes" },
    h1: { en: "See how Vome works", fr: "Découvrez le fonctionnement de Vome" },
    sub: { en: "No signup required — just hit play.", fr: "Aucune inscription — appuyez simplement sur lecture." },
    play_aria: { en: "Play Vome product video", fr: "Lire la vidéo produit Vome" },
    thumb_alt: { en: "Vome volunteer management software walkthrough", fr: "Présentation du logiciel de gestion des bénévoles Vome" },
    cta_h2: { en: "Ready to try it yourself?", fr: "Prêt à l'essayer vous-même ?" },
    cta_sub: { en: "Start free today, or book a personalized demo.", fr: "Commencez gratuitement aujourd'hui ou réservez une démo personnalisée." },
    cta_primary: { en: "Start for free", fr: "Commencer gratuitement" },
    cta_secondary: { en: "Book a demo", fr: "Réserver une démo" },
    foot_part_1: { en: "Questions?", fr: "Des questions ?" },
    foot_link: { en: "Contact us", fr: "Nous joindre" },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  PLANS PAGE
  // ─────────────────────────────────────────────────────────────────────────
  plans: {
    page_title: { en: "Plans & Pricing | Vome Volunteer", fr: "Forfaits et tarification | Vome Volunteer" },
    page_description: {
      en: "Explore Vome's flexible plans and pricing for volunteer management software. Start free — no credit card required — or upgrade to Pro, Enterprise, or Ultimate.",
      fr: "Découvrez les forfaits et la tarification flexibles de Vome pour la gestion des bénévoles. Commencez gratuitement — sans carte de crédit — ou passez à Pro, Entreprise ou Ultime.",
    },
    eyebrow: { en: "Plans & Pricing", fr: "Forfaits et tarifs" },
    hero_h1: { en: "Choosing the right plan is simple.", fr: "Choisir le bon forfait, c'est simple." },
    hero_sub: {
      en: "Get started with the free plan or upgrade to any of our paid plans for a 30-day free trial",
      fr: "Commencez avec le forfait gratuit ou passez à l'un de nos forfaits payants pour un essai gratuit de 30 jours",
    },
    pill_flexible: { en: "Flexible pricing", fr: "Tarification flexible" },
    pill_unlimited: { en: "Unlimited volunteers", fr: "Bénévoles illimités" },
    pill_trial: { en: "30-day free trial on paid plans", fr: "Essai gratuit de 30 jours sur les forfaits payants" },

    aria_currency: { en: "Currency", fr: "Devise" },
    aria_billing: { en: "Billing cycle", fr: "Cycle de facturation" },
    monthly: { en: "Monthly", fr: "Mensuel" },
    annual: { en: "Annual", fr: "Annuel" },
    save_chip: { en: "Save 33%", fr: "Économisez 33 %" },
    custom_pricing_part_1: { en: "For customized pricing on multi-year plans,", fr: "Pour une tarification personnalisée sur des forfaits pluriannuels," },
    custom_pricing_link: { en: "contact us", fr: "nous joindre" },
    custom_pricing_part_2: { en: "for a personalized quote.", fr: "pour un devis personnalisé." },

    most_popular: { en: "Most Popular", fr: "Le plus populaire" },
    forever_free: { en: "Forever free", fr: "Gratuit pour toujours" },
    seat_note: { en: "Per admin seat, per month", fr: "Par siège admin, par mois" },
    billed_annual: { en: "Billed annually", fr: "Facturé annuellement" },
    billed_monthly: { en: "Billed monthly", fr: "Facturé mensuellement" },
    billed_annual_min3: { en: "Billed annually | Minimum 3 seats", fr: "Facturé annuellement | Minimum 3 sièges" },
    billed_annual_min5: { en: "Billed annually | Minimum 5 seats", fr: "Facturé annuellement | Minimum 5 sièges" },
    get_started: { en: "Get started", fr: "Commencer" },

    plan_recruit: { en: "Recruit", fr: "Recruter" },
    plan_recruit_sub: { en: "For recruiters that need to collect application forms and manage an onboarding process.", fr: "Pour les recruteurs qui doivent recueillir des candidatures et gérer un processus d'intégration." },
    plan_pro: { en: "Pro", fr: "Pro" },
    plan_pro_sub: { en: "For coordinators that need to manage scheduling, hour tracking and generate reports.", fr: "Pour les coordonnateurs qui doivent gérer la planification, le suivi des heures et produire des rapports." },
    plan_ent: { en: "Enterprise", fr: "Entreprise" },
    plan_ent_sub: { en: "For management teams that need custom database fields and admin role provisioning.", fr: "Pour les équipes de gestion qui ont besoin de champs de base de données personnalisés et de gestion des rôles admin." },
    plan_ult: { en: "Ultimate", fr: "Ultime" },
    plan_ult_sub: { en: "For any team that needs more security features & the ability to integrate Vome with other apps.", fr: "Pour toute équipe qui a besoin de plus de fonctionnalités de sécurité et de la possibilité d'intégrer Vome à d'autres applications." },

    feat_head: { en: "Features include:", fr: "Fonctionnalités incluses :" },
    feat_head_pro: { en: "Everything in Recruit, plus:", fr: "Tout ce qui est dans Recruter, plus :" },
    feat_head_ent: { en: "Everything in Pro, plus:", fr: "Tout ce qui est dans Pro, plus :" },
    feat_head_ult: { en: "Everything in Enterprise, plus:", fr: "Tout ce qui est dans Entreprise, plus :" },

    rec_b1: { en: "Recruitment page with featured opportunities & access to forms", fr: "Page de recrutement avec opportunités vedettes et accès aux formulaires" },
    rec_b2: { en: "1 application form", fr: "1 formulaire de candidature" },
    rec_b3: { en: "1 onboarding sequence", fr: "1 séquence d'intégration" },
    rec_b4: { en: "Recruitment workflow automations", fr: "Flux d'automatisation de recrutement" },
    rec_b5: { en: "Manage opportunities & assignments", fr: "Gérez les opportunités et affectations" },
    rec_b6: { en: "Hour tracking via user-generated hour claims", fr: "Suivi des heures via déclarations d'heures par les utilisateurs" },
    rec_b7: { en: "35 default database fields, profile management with notes & document storage (no export)", fr: "35 champs de base de données par défaut, gestion de profils avec notes et stockage de documents (sans exportation)" },
    rec_b8: { en: "Integrated communication tools (email & instant messaging)", fr: "Outils de communication intégrés (courriel et messagerie instantanée)" },

    pro_b1: { en: "Unlimited forms & sequences", fr: "Formulaires et séquences illimités" },
    pro_b2: { en: "Shift management & user reservations", fr: "Gestion des quarts et réservations par les utilisateurs" },
    pro_b3: { en: "Streamline group reservations", fr: "Simplifiez les réservations de groupe" },
    pro_b4: { en: "Advanced hour tracking via Attendance QR Code & Kiosk", fr: "Suivi des heures avancé via code QR et borne de pointage" },
    pro_b5: { en: "Unlimited profile tags & database export", fr: "Étiquettes de profil illimitées et exportation de la base de données" },
    pro_b6: { en: "Advanced mass communication tools (email lists, group chats & auto-generated shift chatrooms)", fr: "Outils de communication de masse avancés (listes courriel, conversations de groupe et salons de quart automatiques)" },
    pro_b7: { en: "Mobile app, custom & automated notifications, reminders & updates", fr: "Application mobile, notifications personnalisées et automatiques, rappels et mises à jour" },
    pro_b8: { en: "Canned reports & analytics with advanced filtering and sorting", fr: "Rapports prédéfinis et analyses avec filtrage et tri avancés" },

    ent_b1: { en: "Unlimited custom & dynamic database fields", fr: "Champs de base de données personnalisés et dynamiques illimités" },
    ent_b2: { en: "Import custom field data", fr: "Importation de données de champs personnalisés" },
    ent_b3: { en: "Map form fields to database fields", fr: "Associer les champs de formulaire à des champs de base de données" },
    ent_b4: { en: "Custom admin roles & permissions", fr: "Rôles et permissions admin personnalisés" },
    ent_b5: { en: "Multi-site segmentation", fr: "Segmentation multi-sites" },
    ent_b6: { en: "Two-Factor Authentication (2FA)", fr: "Authentification à deux facteurs (2FA)" },
    ent_b7: { en: "Advanced group management", fr: "Gestion de groupe avancée" },
    ent_b8: { en: "Recognition module with custom awards", fr: "Module de reconnaissance avec distinctions personnalisées" },

    ult_b1: { en: "API integration & custom webhooks", fr: "Intégration API et webhooks personnalisés" },
    ult_b2: { en: "Automations with Zapier & Power Automate", fr: "Automatisations avec Zapier et Power Automate" },
    ult_b3: { en: "Native integration with Salesforce", fr: "Intégration native avec Salesforce" },
    ult_b4: { en: "SAML & Azure SSO for admins", fr: "SSO SAML et Azure pour les administrateurs" },
    ult_b5: { en: "Tech & operational consulting", fr: "Conseil technique et opérationnel" },

    disclaimer: { en: "*Additional sales tax may apply.", fr: "*Des taxes de vente supplémentaires peuvent s'appliquer." },

    comp_h2: { en: "Feature comparison by plan", fr: "Comparaison des fonctionnalités par forfait" },
    comp_th_plans: { en: "Plans", fr: "Forfaits" },
    comp_show_all: { en: "Show all features by plan", fr: "Afficher toutes les fonctionnalités par forfait" },
    comp_show_less: { en: "Show fewer features", fr: "Afficher moins de fonctionnalités" },
    comp_footnote: { en: "* Onboarding sessions & account review sessions: maximum of 2 hours per week", fr: "* Sessions d'intégration et de revue de compte : maximum de 2 heures par semaine" },
    comp_unlimited: { en: "Unlimited", fr: "Illimité" },
    comp_unlimited_star: { en: "Unlimited *", fr: "Illimité *" },
    comp_basic: { en: "Basic", fr: "Base" },
    comp_standard: { en: "Standard", fr: "Standard" },
    comp_priority: { en: "Priority", fr: "Prioritaire" },
    comp_advanced: { en: "Advanced", fr: "Avancé" },
    comp_form_1: { en: "1 form", fr: "1 formulaire" },
    comp_seq_1: { en: "1 sequence", fr: "1 séquence" },
    comp_one: { en: "1", fr: "1" },
    comp_four: { en: "4", fr: "4" },
    comp_five: { en: "5", fr: "5" },
    comp_aria_included: { en: "Included", fr: "Inclus" },
    comp_aria_excluded: { en: "Not included", fr: "Non inclus" },

    // Section titles
    sec_fundamentals: { en: "Fundamentals", fr: "Fondamentaux" },
    sec_recruitment: { en: "Recruitment", fr: "Recrutement" },
    sec_onboarding: { en: "Onboarding", fr: "Intégration" },
    sec_scheduling: { en: "Scheduling", fr: "Planification" },
    sec_hours: { en: "Hour tracking", fr: "Suivi des heures" },
    sec_data: { en: "Data & reports", fr: "Données et rapports" },
    sec_comms: { en: "Communications", fr: "Communications" },
    sec_recognition: { en: "Recognition", fr: "Reconnaissance" },
    sec_advanced: { en: "Advanced", fr: "Avancé" },
    sec_success: { en: "Customer success", fr: "Succès client" },

    // Comparison rows — fundamentals
    f_users_n: { en: "Max number of manageable users & profiles", fr: "Nombre maximal d'utilisateurs et profils gérables" },
    f_users_d: { en: "You can grow your volunteer base without worrying about paying more — we don't charge for volunteer records.", fr: "Faites croître votre base de bénévoles sans payer plus — nous ne facturons pas les fiches de bénévoles." },
    f_seats_n: { en: "Max number of admin seats", fr: "Nombre maximal de sièges admin" },
    f_seats_d: { en: "You can invite an unlimited number of admins to the portal. On paid plans you're charged per seat you activate.", fr: "Vous pouvez inviter un nombre illimité d'administrateurs au portail. Sur les forfaits payants, vous êtes facturé par siège activé." },
    f_devices_n: { en: "Access on any device (iOS & Android apps, web & mobile browser)", fr: "Accès sur tout appareil (apps iOS et Android, navigateur web et mobile)" },
    f_devices_d: { en: "Our platform is accessible from any device. The Vome Volunteer mobile app on the App Store and Google Play is free to download for all users.", fr: "Notre plateforme est accessible depuis tout appareil. L'application Vome Volunteer sur l'App Store et Google Play est gratuite pour tous les utilisateurs." },

    // Comparison rows — recruitment
    rc_page_n: { en: "Custom-branded recruitment page", fr: "Page de recrutement à votre image" },
    rc_page_d: { en: "Promote a volunteer recruitment page featuring volunteer opportunities and application forms.", fr: "Promouvez une page de recrutement présentant des opportunités et formulaires de candidature." },
    rc_opps_n: { en: "Feature volunteer opportunities", fr: "Mettez en avant des opportunités de bénévolat" },
    rc_opps_d: { en: "Build volunteer opportunities structured by activity, role, or anything you want.", fr: "Mettez en place des opportunités structurées par activité, rôle ou tout ce que vous voulez." },
    rc_group_n: { en: "Group opportunities by category", fr: "Regroupez les opportunités par catégorie" },
    rc_group_d: { en: "Group your opportunities by location, program, event, department, or whatever works best for you.", fr: "Regroupez vos opportunités par lieu, programme, événement, département ou ce qui vous convient le mieux." },
    rc_dash_n: { en: "Access to opportunity dashboards", fr: "Accédez aux tableaux de bord d'opportunité" },
    rc_dash_d: { en: "View everything about your opportunity from a single page — applicants, shift requests, hour claims, analytics and more.", fr: "Voyez tout sur votre opportunité depuis une seule page — candidats, demandes de quart, déclarations d'heures, analyses et plus." },
    rc_appforms_n: { en: "Opportunity-specific application forms", fr: "Formulaires de candidature par opportunité" },
    rc_appforms_d: { en: "Customize application forms for your opportunities and events, including templates to reuse across opportunities.", fr: "Personnalisez les formulaires pour vos opportunités et événements, avec des modèles réutilisables." },
    rc_forms_n: { en: "Customize forms for recruitment, data collection & surveys", fr: "Personnalisez formulaires de recrutement, collecte de données et sondages" },
    rc_forms_d: { en: "Get access to a dynamic form-builder that allows you to collect any information you need from volunteers.", fr: "Accédez à un concepteur de formulaires dynamique pour recueillir toute information nécessaire auprès des bénévoles." },
    rc_proc_n: { en: "Custom recruitment process", fr: "Processus de recrutement personnalisé" },
    rc_proc_d: { en: "Choose the volunteer recruitment workflow that works best for your organization.", fr: "Choisissez le flux de recrutement qui convient le mieux à votre organisation." },
    rc_links_n: { en: "Generate direct landing page links to your page, forms, opportunities, programs, events, locations, etc.", fr: "Générez des liens directs vers votre page, formulaires, opportunités, programmes, événements, lieux, etc." },
    rc_links_d: { en: "Dynamic shareable links open the mobile app if the person is already logged into the Vome Volunteer app.", fr: "Les liens partageables dynamiques ouvrent l'application mobile si la personne est déjà connectée à Vome Volunteer." },
    rc_notif_n: { en: "App & email notifications for new applicants", fr: "Notifications app et courriel pour nouveaux candidats" },
    rc_notif_d: { en: "Choose which admin users will receive app and/or email notifications when you receive new applicants.", fr: "Choisissez quels administrateurs reçoivent des notifications app et/ou courriel à l'arrivée de nouveaux candidats." },

    // Comparison rows — onboarding
    on_seq_n: { en: "Build onboarding sequences to manage your entire screening process", fr: "Mettez en place des séquences d'intégration pour gérer tout votre processus de sélection" },
    on_seq_d: { en: "Put volunteers through step-by-step onboarding processes to complete, with optional visibility for the volunteer.", fr: "Mettez en place des processus d'intégration étape par étape pour les bénévoles, avec visibilité optionnelle pour le bénévole." },
    on_int_n: { en: "Manage interviews, orientation & training sessions for opportunities", fr: "Gérez entrevues, orientations et sessions de formation pour les opportunités" },
    on_int_d: { en: "Put together a screening checklist to use across your opportunities to stay on track about who completed what.", fr: "Mettez en place une liste de sélection à utiliser à travers vos opportunités pour suivre qui a complété quoi." },
    on_bg_n: { en: "Sterling Volunteers background check integration", fr: "Intégration des vérifications d'antécédents Sterling Volunteers" },
    on_bg_d: { en: "Integrate background checks directly into volunteer sequences with automatic status updates and ongoing monitoring.", fr: "Intégrez les vérifications d'antécédents directement dans les séquences avec mises à jour automatiques et suivi continu." },
    on_scorm_n: { en: "SCORM Cloud E-Learning integration", fr: "Intégration SCORM Cloud d'apprentissage en ligne" },
    on_scorm_d: { en: "Add SCORM-compliant e-learning courses directly into volunteer sequences with automatic progress tracking.", fr: "Ajoutez des cours en ligne conformes SCORM directement dans les séquences avec suivi automatique de la progression." },
    on_waiv_n: { en: "Manage submitted waivers", fr: "Gérez les décharges soumises" },
    on_waiv_d: { en: "Allow volunteers to submit signed forms and waivers as part of your screening process.", fr: "Permettez aux bénévoles de soumettre formulaires et décharges signés dans le cadre de votre processus de sélection." },
    on_notes_n: { en: "Create and manage notes", fr: "Créez et gérez des notes" },
    on_notes_d: { en: "Create notes on volunteer profiles and specific components of their onboarding process.", fr: "Créez des notes sur les profils des bénévoles et des composantes précises de leur processus d'intégration." },
    on_status_n: { en: "Onboarding status tracking", fr: "Suivi du statut d'intégration" },
    on_status_d: { en: "Easily keep track of whether volunteers completed their screening requirements and if there are any expiration dates.", fr: "Suivez facilement si les bénévoles ont complété leurs exigences de sélection et s'il y a des dates d'expiration." },

    // Comparison rows — scheduling
    sc_shifts_n: { en: "Generate one-time and recurring shifts", fr: "Générez des quarts uniques et récurrents" },
    sc_shifts_d: { en: "Easily add available shifts on your calendar in a few clicks, with bulk creation for recurring time slots.", fr: "Ajoutez facilement des quarts disponibles à votre calendrier en quelques clics, avec création en lot pour les plages récurrentes." },
    sc_self_n: { en: "Allow volunteers to self-schedule pre-determined shifts", fr: "Permettez aux bénévoles de s'auto-planifier sur des quarts prédéterminés" },
    sc_self_d: { en: "Volunteers who are eligible for your opportunities can directly reserve their spots to available shifts.", fr: "Les bénévoles admissibles à vos opportunités peuvent directement réserver leur place sur des quarts disponibles." },
    sc_dtd_n: { en: "Double the Donation corporate matching gifts integration", fr: "Intégration des dons jumelés Double the Donation" },
    sc_dtd_d: { en: "Unlock corporate matching gifts during volunteer registration and shift reservations.", fr: "Débloquez les dons jumelés corporatifs lors de l'inscription et des réservations de quart." },
    sc_inst_n: { en: "Allow instant bookings for approved volunteers", fr: "Permettez les réservations instantanées pour les bénévoles approuvés" },
    sc_inst_d: { en: "Choose to allow approved volunteers to instantly reserve spots to shifts or require them to submit a request first.", fr: "Choisissez d'autoriser les bénévoles approuvés à réserver instantanément des places ou exigez d'abord une demande." },
    sc_own_n: { en: "Allow volunteers to create their own schedule", fr: "Permettez aux bénévoles de créer leur propre horaire" },
    sc_own_d: { en: "Allow approved volunteers to create shifts based on their availabilities, which automatically populate your calendar.", fr: "Permettez aux bénévoles approuvés de créer des quarts selon leurs disponibilités, qui peuplent automatiquement votre calendrier." },
    sc_pol_n: { en: "Create custom scheduling policies to manage check-ins, cancellations and more", fr: "Créez des politiques de planification personnalisées (pointage, annulations, etc.)" },
    sc_pol_d: { en: "Control how many reservations volunteers can create, when they can check-in, and much more.", fr: "Contrôlez combien de réservations un bénévole peut créer, quand il peut pointer, et bien plus." },
    sc_assign_n: { en: "Recurring schedule assignments", fr: "Affectations d'horaire récurrentes" },
    sc_assign_d: { en: "Bulk-assign volunteers to shifts, log hours, and manage cancellations directly from your schedule view.", fr: "Affectez en lot des bénévoles à des quarts, consignez les heures et gérez les annulations directement depuis votre vue d'horaire." },
    sc_rooms_n: { en: "Auto-generated shift chatrooms", fr: "Salons de quart générés automatiquement" },
    sc_rooms_d: { en: "Streamline communication among attendees with auto-generated shift chatrooms for each shift.", fr: "Simplifiez la communication entre participants avec des salons de quart générés automatiquement pour chaque quart." },
    sc_export_n: { en: "Export & print your schedule in PDF, Excel or .CSV format", fr: "Exportez et imprimez votre horaire en PDF, Excel ou .CSV" },
    sc_export_d: { en: "Export your calendar in various formats with customizable field visibility.", fr: "Exportez votre calendrier dans divers formats avec visibilité des champs personnalisable." },
    sc_remind_n: { en: "Mobile app & email scheduling reminders", fr: "Rappels de planification par app mobile et courriel" },
    sc_remind_d: { en: "Automate all sorts of scheduling notifications to keep volunteers and administrators in the loop.", fr: "Automatisez toutes sortes de notifications de planification pour garder bénévoles et administrateurs informés." },

    // Comparison rows — hour tracking
    hr_claims_n: { en: "Receive hour claims", fr: "Recevez des déclarations d'heures" },
    hr_claims_d: { en: "Allow volunteers to submit hour claims for shifts they completed. Once approved, their hours are added to their profiles.", fr: "Permettez aux bénévoles de soumettre des déclarations d'heures pour les quarts complétés. Une fois approuvées, leurs heures sont ajoutées à leur profil." },
    hr_qr_n: { en: "QR-code attendance tracking", fr: "Suivi de présence par code QR" },
    hr_qr_d: { en: "Print and display a QR code to allow volunteers to scan via the mobile app to check-in/out of shifts and automate hour tracking.", fr: "Imprimez et affichez un code QR pour permettre aux bénévoles de scanner via l'application mobile pour pointer leur entrée/sortie." },
    hr_tap_n: { en: "Tap-to-check-in (no scan needed)", fr: "Pointage en un appui (sans scan)" },
    hr_tap_d: { en: "Let volunteers confirm a shift with a single tap in the Vome app, no QR scan required. Configurable per opportunity for programs that prefer a frictionless check-in.", fr: "Permettez aux bénévoles de confirmer un quart d'un seul appui dans l'app Vome, sans scan QR. Configurable par opportunité pour les programmes qui préfèrent un pointage sans friction." },
    hr_kiosk_n: { en: "On-site Attendance Kiosk", fr: "Borne de présence sur place" },
    hr_kiosk_d: { en: "Customize unlimited on-site attendance kiosks to let volunteers self check-in/out from any device (tablet, computer, smartphone).", fr: "Personnalisez un nombre illimité de bornes de présence sur place pour permettre aux bénévoles de se pointer depuis tout appareil (tablette, ordinateur, téléphone)." },
    hr_gps_n: { en: "GPS proximity validation", fr: "Validation par proximité GPS" },
    hr_gps_d: { en: "Require volunteers to be within range of the site before they can check in from their phone. Set the radius per site or per shift to keep attendance honest.", fr: "Exigez que les bénévoles soient à proximité du site avant de pouvoir pointer depuis leur téléphone. Définissez le rayon par site ou par quart pour garder la présence fiable." },
    hr_auto_n: { en: "Auto check-in & check-out", fr: "Pointage entrée/sortie automatique" },
    hr_auto_d: { en: "Skip check-in entirely. Vome can automatically log hours based on the shift's scheduled start and end times — ideal for programs that don't need to track attendance per shift.", fr: "Sautez le pointage. Vome peut consigner les heures automatiquement selon l'heure de début et de fin du quart — idéal pour les programmes qui n'ont pas besoin de suivre la présence par quart." },
    hr_settings_n: { en: "Custom attendance & claim settings", fr: "Paramètres d'assiduité et de déclaration personnalisés" },
    hr_settings_d: { en: "Configure check-in methods, GPS rules, grace windows, and claim policies per opportunity so each program runs the way it needs to.", fr: "Configurez les méthodes de pointage, les règles GPS, les fenêtres de grâce et les politiques de déclaration par opportunité pour que chaque programme fonctionne à sa façon." },
    hr_mass_n: { en: "Mass hour loggings", fr: "Saisie d'heures en masse" },
    hr_mass_d: { en: "Bulk log hours for volunteers in a few clicks, keeping accurate date/time records without manual work.", fr: "Consignez les heures en lot pour les bénévoles en quelques clics, avec des enregistrements précis de date et heure, sans travail manuel." },
    hr_reports_n: { en: "Hours reports", fr: "Rapports d'heures" },
    hr_reports_d: { en: "Easily generate reservation and hours reports with integrated analytics.", fr: "Générez facilement des rapports de réservation et d'heures avec analyses intégrées." },

    // Comparison rows — data
    da_profiles_n: { en: "Access volunteer profiles", fr: "Accédez aux profils des bénévoles" },
    da_profiles_d: { en: "View everything you need about a volunteer from a single view — contacts, opportunities, shifts, notes and more.", fr: "Voyez tout ce dont vous avez besoin sur un bénévole en une seule vue — contacts, opportunités, quarts, notes et plus." },
    da_import_n: { en: "Import volunteer profiles", fr: "Importez des profils de bénévoles" },
    da_import_d: { en: "Add up to 10,000 volunteer contacts from Excel per import with batch assignment of tags, opportunities, and shifts.", fr: "Ajoutez jusqu'à 10 000 contacts de bénévoles depuis Excel par importation avec affectation en lot d'étiquettes, opportunités et quarts." },
    da_imp_field_n: { en: "Import custom field data", fr: "Importez des données de champs personnalisés" },
    da_imp_field_d: { en: "Import and map data into any custom field in your database via Excel or .CSV.", fr: "Importez et associez des données à n'importe quel champ personnalisé de votre base de données via Excel ou .CSV." },
    da_offline_n: { en: "Offline profile management", fr: "Gestion de profils hors ligne" },
    da_offline_d: { en: "Create offline profiles for volunteers who will not claim their profile on Vome — ideal for seniors or non-digital participants.", fr: "Créez des profils hors ligne pour les bénévoles qui ne revendiqueront pas leur profil sur Vome — idéal pour les aînés ou les participants non numériques." },
    da_fields_n: { en: "Unlimited custom database fields", fr: "Champs de base de données personnalisés illimités" },
    da_fields_d: { en: "Field types include text, number, date, time, single and multi-select, email, URL, address, attachment, boolean, and unique ID.", fr: "Les types de champs incluent texte, nombre, date, heure, choix unique et multiple, courriel, URL, adresse, pièce jointe, booléen et identifiant unique." },
    da_tags_n: { en: "Profile tags", fr: "Étiquettes de profil" },
    da_tags_d: { en: "Group volunteers in your database by anything you want — great for bulk actions like emails or shift assignments.", fr: "Regroupez les bénévoles dans votre base de données comme vous le souhaitez — parfait pour les actions en lot comme les courriels ou les affectations de quart." },
    da_groups_n: { en: "Advanced group management", fr: "Gestion de groupe avancée" },
    da_groups_d: { en: "Unlock the Groups module to associate group reservations to dedicated groups for cleaner workflows and analytics.", fr: "Débloquez le module Groupes pour associer les réservations de groupe à des groupes dédiés, pour des flux et analyses plus propres." },
    da_filter_n: { en: "Filtering, sorting & exporting", fr: "Filtrage, tri et exportation" },
    da_filter_d: { en: "Use filters and sorting to get the data you need quickly, plus export everything to Excel at any time.", fr: "Utilisez filtres et tri pour obtenir rapidement les données voulues, et exportez tout vers Excel en tout temps." },
    da_views_n: { en: "Saved custom views", fr: "Vues personnalisées sauvegardées" },
    da_views_d: { en: "Save any combination of filters, sort order, and visible columns as a named view. Each admin can keep their own and share with the team.", fr: "Sauvegardez toute combinaison de filtres, d'ordre de tri et de colonnes visibles comme vue nommée. Chaque admin peut garder les siennes et les partager avec l'équipe." },
    da_formula_n: { en: "Custom-formula filters", fr: "Filtres à formule personnalisée" },
    da_formula_d: { en: "Combine field conditions for advanced segments — for example, active volunteers with over 50 hours and a specific tag.", fr: "Combinez des conditions de champs pour des segments avancés — par exemple, les bénévoles actifs avec plus de 50 heures et une étiquette précise." },
    da_bulk_n: { en: "Bulk actions from any view", fr: "Actions en lot depuis toute vue" },
    da_bulk_d: { en: "Assign tags, sequences, shifts, opportunities, languages, or skills; bulk-update custom fields; broadcast emails; merge duplicate profiles — all from selected rows.", fr: "Affectez étiquettes, séquences, quarts, opportunités, langues ou compétences ; mettez à jour des champs personnalisés en lot ; envoyez des courriels en lot ; fusionnez les doublons — tout depuis les lignes sélectionnées." },
    da_sheets_n: { en: "Google Sheets ↔ Vome Database integration", fr: "Intégration Google Sheets ↔ base de données Vome" },
    da_sheets_d: { en: "Sync your Vome database with a Google Sheet to automatically keep a backup or perform additional operations on your data.", fr: "Synchronisez votre base de données Vome avec une feuille Google Sheets pour conserver automatiquement une copie de sauvegarde ou effectuer des opérations supplémentaires." },
    da_reports_n: { en: "Access instant reports", fr: "Accédez à des rapports instantanés" },
    da_reports_d: { en: "Instantly generate different types of reports about attendees, hours, volunteers, shifts and more.", fr: "Générez instantanément différents types de rapports sur les participants, heures, bénévoles, quarts et plus." },
    da_analytics_n: { en: "Access instant analytics dashboards", fr: "Accédez aux tableaux de bord analytiques instantanés" },
    da_analytics_d: { en: "Integrated analytics dashboards show you key metrics about your volunteers and activity to detail performance.", fr: "Les tableaux de bord analytiques intégrés montrent les métriques clés sur vos bénévoles et activités pour détailler les performances." },

    // Comparison rows — comms
    co_email_n: { en: "Individual & bulk emailing", fr: "Courriels individuels et en masse" },
    co_email_d: { en: "Send targeted emails to specific contact lists or one-off emails to individuals directly from Vome.", fr: "Envoyez des courriels ciblés à des listes spécifiques ou des courriels ponctuels à des individus directement depuis Vome." },
    co_dom_n: { en: "Integrate your email domain using Google or Microsoft", fr: "Intégrez votre domaine courriel via Google ou Microsoft" },
    co_dom_d: { en: "Send more personalized emails on Vome from your own mailbox using our integrations with Google and Microsoft.", fr: "Envoyez des courriels plus personnalisés sur Vome depuis votre propre boîte courriel grâce à nos intégrations Google et Microsoft." },
    co_priv_n: { en: "Private chats", fr: "Conversations privées" },
    co_priv_d: { en: "Use Vome's integrated instant messaging feature to message volunteers directly from the platform.", fr: "Utilisez la messagerie instantanée intégrée de Vome pour envoyer des messages aux bénévoles directement depuis la plateforme." },
    co_grp_n: { en: "Custom group chats", fr: "Conversations de groupe personnalisées" },
    co_grp_d: { en: "Build custom group chats with volunteers and other administrators to simplify coordination.", fr: "Créez des conversations de groupe personnalisées avec bénévoles et administrateurs pour simplifier la coordination." },
    co_auto_n: { en: "Auto-generated chatrooms", fr: "Salons générés automatiquement" },
    co_auto_d: { en: "Choose to use auto-generated chatrooms for your opportunities or shifts with automatic participant management.", fr: "Choisissez d'utiliser des salons générés automatiquement pour vos opportunités ou quarts avec gestion automatique des participants." },
    co_temp_n: { en: "Email templates & shared template folders", fr: "Modèles de courriel et dossiers partagés" },
    co_temp_d: { en: "Build a library of reusable email templates and folder them so every coordinator pulls from the same shared library.", fr: "Mettez en place une bibliothèque de modèles de courriel réutilisables et classez-les en dossiers pour que chaque coordonnateur tire de la même bibliothèque partagée." },
    co_dyn_n: { en: "Dynamic variable placeholders", fr: "Variables dynamiques" },
    co_dyn_d: { en: "Personalize email subjects and bodies with dynamic placeholders like first name, role, site, shift name, shift time, and any custom field.", fr: "Personnalisez objets et corps de courriel avec des variables dynamiques comme prénom, rôle, site, nom du quart, heure du quart et tout champ personnalisé." },
    co_attach_n: { en: "Rich media in chats (images, video, audio, docs, links)", fr: "Médias enrichis dans les clavardages (images, vidéo, audio, docs, liens)" },
    co_attach_d: { en: "Send and receive images, video, voice notes, documents, and links inside any chat without leaving Vome.", fr: "Envoyez et recevez images, vidéo, notes vocales, documents et liens dans tout clavardage sans quitter Vome." },
    co_chatshift_n: { en: "Assign or share a shift inside chat", fr: "Assigner ou partager un quart dans le clavardage" },
    co_chatshift_d: { en: "Assign a shift to a volunteer or share a shift link directly inside a private or group chat, without switching to the schedule.", fr: "Assignez un quart à un bénévole ou partagez un lien de quart directement dans un clavardage privé ou de groupe, sans quitter pour l'horaire." },
    co_outbox_n: { en: "Shared outbox & email sharing policy", fr: "Boîte d'envoi partagée et politique de partage" },
    co_outbox_d: { en: "Audit every email sent from Vome (one-off, bulk, shift-notification, birthday) in a shared outbox; control admin visibility with the email sharing policy.", fr: "Vérifiez chaque courriel envoyé depuis Vome (ponctuel, en masse, notification de quart, anniversaire) dans une boîte d'envoi partagée; contrôlez la visibilité des admins via la politique de partage." },
    co_shiftpol_n: { en: "Shift notification policies", fr: "Politiques de notification de quart" },
    co_shiftpol_d: { en: "Build reusable policies with pre-shift reminders, change alerts, and post-shift follow-ups (with optional survey link); attach to one shift or to a shift generator.", fr: "Mettez en place des politiques réutilisables avec rappels pré-quart, alertes de changement et suivis post-quart (avec lien de sondage facultatif); attachez à un quart ou à un générateur." },
    co_bday_n: { en: "Birthday notifications", fr: "Notifications d'anniversaire" },
    co_bday_d: { en: "Send automatic birthday wishes to volunteers and/or alerts to admins, with site-level recipient rules and template-based content.", fr: "Envoyez des vœux d'anniversaire automatiques aux bénévoles et/ou des alertes aux admins, avec règles de destinataires par site et contenu basé sur des modèles." },
    co_handoff_n: { en: "Hand-off notifications", fr: "Notifications de transfert" },
    co_handoff_d: { en: "Notify coordinators and watchers whenever a profile is assigned (manually or automatically) to a site, sequence, opportunity, or shift they own.", fr: "Notifiez coordonnateurs et observateurs chaque fois qu'un profil est affecté (manuellement ou automatiquement) à un site, séquence, opportunité ou quart dont ils sont responsables." },

    // Comparison rows — recognition
    re_ach_n: { en: "Vome Achievements (Bronze → Platinum)", fr: "Vome Achievements (Bronze → Platine)" },
    re_ach_d: { en: "A platform-wide four-tier badge ladder fueled by Vome Points. Every volunteer earns these by completing platform challenges, on every plan including Recruit.", fr: "Une échelle de badges à quatre niveaux à l'échelle de la plateforme, alimentée par les Vome Points. Chaque bénévole les gagne en complétant des défis de la plateforme, sur tous les forfaits y compris Recruit." },
    re_aw_n: { en: "Custom awards (rule-based & manual)", fr: "Prix personnalisés (par règle et manuels)" },
    re_aw_d: { en: "Design your own awards with custom name, icon, and description. Pick an auto rule on hours or shifts (any window), or send manually to one volunteer or a hand-picked group with a personal note.", fr: "Concevez vos propres prix avec nom, icône et description personnalisés. Choisissez une règle automatique sur heures ou quarts (toute fenêtre), ou envoyez manuellement à un bénévole ou à un groupe choisi avec un mot personnel." },
    re_notif_n: { en: "Award notifications & watcher admins", fr: "Notifications de prix et admins témoins" },
    re_notif_d: { en: "When an award fires, Vome emails the volunteer at a time and timezone you choose, using your template, sender, and signature. Watcher admins get notified too, with personalized variables per recipient.", fr: "Quand un prix se déclenche, Vome envoie un courriel au bénévole à l'heure et au fuseau choisis, avec votre modèle, expéditeur et signature. Les admins témoins sont aussi notifiés, avec des variables personnalisées par destinataire." },
    re_elig_n: { en: "Advanced eligibility scoping", fr: "Ciblage d'admissibilité avancé" },
    re_elig_d: { en: "Restrict any award by tag, opportunity, site, finished onboarding sequence, active database status, or age range. Volunteers outside scope never see it in catalog or progress.", fr: "Restreignez tout prix par étiquette, opportunité, site, séquence d'intégration terminée, statut actif dans la base de données, ou tranche d'âge. Les bénévoles hors périmètre ne le voient jamais dans le catalogue ni la progression." },

    // Comparison rows — advanced
    ad_roles_n: { en: "Custom admin roles & permissions", fr: "Rôles et permissions admin personnalisés" },
    ad_roles_d: { en: "Restrict administrative access by assigning admin roles with custom permission sets.", fr: "Restreignez l'accès administratif en assignant des rôles admin avec des ensembles de permissions personnalisés." },
    ad_2fa_n: { en: "Two-Factor Authentication (2FA)", fr: "Authentification à deux facteurs (2FA)" },
    ad_2fa_d: { en: "Protect your account with Two-Factor Authentication. Add a secure phone number and enter a code upon each login attempt.", fr: "Protégez votre compte avec l'authentification à deux facteurs. Ajoutez un numéro de téléphone sécurisé et entrez un code à chaque tentative de connexion." },
    ad_kpi_n: { en: "Built-in KPI & metric dashboards", fr: "Tableaux de bord KPI et métriques intégrés" },
    ad_kpi_d: { en: "Access integrated analytics dashboards and reports to gain a deeper understanding of your operation.", fr: "Accédez à des tableaux de bord et rapports analytiques intégrés pour mieux comprendre vos opérations." },
    ad_multi_n: { en: "Multi-site segmentation", fr: "Segmentation multi-sites" },
    ad_multi_d: { en: "Setup your portal to better manage multiple sites under a single account.", fr: "Configurez votre portail pour mieux gérer plusieurs sites sous un seul compte." },
    ad_map_n: { en: "Map form fields to database fields", fr: "Associez les champs de formulaire à des champs de base de données" },
    ad_map_d: { en: "Map any question or attachment field on a form to a database field to centralize your data.", fr: "Associez tout champ de question ou de pièce jointe d'un formulaire à un champ de base de données pour centraliser vos données." },
    ad_api_n: { en: "API integration & custom webhooks", fr: "Intégration API et webhooks personnalisés" },
    ad_api_d: { en: "Access a developer dashboard to create integrations with Vome using APIs or custom webhooks.", fr: "Accédez à un tableau de bord développeur pour créer des intégrations avec Vome via API ou webhooks personnalisés." },
    ad_zap_n: { en: "Automations with Zapier & Power Automate", fr: "Automatisations avec Zapier et Power Automate" },
    ad_zap_d: { en: "Choose from thousands of custom automations using our integrations with Zapier and Microsoft Power Automate.", fr: "Choisissez parmi des milliers d'automatisations personnalisées via nos intégrations Zapier et Microsoft Power Automate." },
    ad_sf_n: { en: "Native integration with Salesforce", fr: "Intégration native avec Salesforce" },
    ad_sf_d: { en: "Access an installable Vome package on Salesforce to achieve a native integration.", fr: "Accédez à un paquet Vome installable sur Salesforce pour une intégration native." },
    ad_sso_n: { en: "SAML & Azure SSO for admins", fr: "SSO SAML et Azure pour les administrateurs" },
    ad_sso_d: { en: "Ensure you're compliant by provisioning admin users and enforcing SSO for their accounts.", fr: "Assurez votre conformité en provisionnant les administrateurs et en imposant le SSO pour leurs comptes." },
    ad_sterling_n: { en: "Sterling Volunteers integration", fr: "Intégration Sterling Volunteers" },
    ad_sterling_d: { en: "Trigger background checks from an onboarding step. Results land on the volunteer profile.", fr: "Déclenchez les vérifications d'antécédents depuis une étape d'intégration. Les résultats arrivent au profil du bénévole." },
    ad_vfirst_n: { en: "Verified First integration", fr: "Intégration Verified First" },
    ad_vfirst_d: { en: "Alternative native background-check provider. Same in-flow trigger, results back on the profile.", fr: "Fournisseur natif alternatif de vérifications d'antécédents. Même déclenchement intégré, résultats au profil." },
    ad_dtd_n: { en: "Double the Donation matching gifts", fr: "Dons jumelés Double the Donation" },
    ad_dtd_d: { en: "Surface employer matching gifts on every hour claim. Match status visible on the volunteer profile and in reports.", fr: "Affichez les dons jumelés d'employeurs à chaque déclaration d'heures. Le statut du jumelage est visible au profil et dans les rapports." },
    ad_sheets_n: { en: "Google Sheets two-way sync", fr: "Synchronisation bidirectionnelle Google Sheets" },
    ad_sheets_d: { en: "Mirror your Vome database to a live Google Sheet for downstream reporting and BI tools. Updates flow both ways.", fr: "Reflétez votre base Vome dans un Google Sheet en direct pour vos outils de rapport et BI. Les mises à jour circulent dans les deux sens." },
    ad_maildomain_n: { en: "Send emails from your own domain", fr: "Envoi de courriels depuis votre domaine" },
    ad_maildomain_d: { en: "Connect Google Workspace or Microsoft 365 so confirmations, reminders, and sequence emails send from your address with proper SPF and DKIM.", fr: "Connectez Google Workspace ou Microsoft 365 pour que confirmations, rappels et courriels de séquence partent de votre adresse avec SPF et DKIM appropriés." },

    // Comparison rows — customer success
    cs_kb_n: { en: "FAQ & Knowledge base", fr: "FAQ et base de connaissances" },
    cs_kb_d: { en: "Access many articles for quick answers to frequently asked questions.", fr: "Accédez à de nombreux articles pour des réponses rapides aux questions fréquentes." },
    cs_email_n: { en: "Email support", fr: "Soutien par courriel" },
    cs_email_d: { en: "Personalized customer support with guaranteed quick response times.", fr: "Soutien client personnalisé avec délais de réponse rapides garantis." },
    cs_tech_n: { en: "Technical support", fr: "Soutien technique" },
    cs_tech_d: { en: "We offer base tech support when you come across a technical issue that needs to be resolved by a developer.", fr: "Nous offrons un soutien technique de base lorsque vous rencontrez un problème technique nécessitant l'intervention d'un développeur." },
    cs_onb_n: { en: "Onboarding sessions", fr: "Sessions d'intégration" },
    cs_onb_d: { en: "One-hour calls with a platform specialist to get you fully set up on Vome. Unlocked as a one-time benefit upon upgrading.", fr: "Appels d'une heure avec un spécialiste de la plateforme pour vous configurer complètement sur Vome. Débloqué comme avantage unique à la mise à niveau." },
    cs_rev_n: { en: "Account review sessions", fr: "Sessions de revue de compte" },
    cs_rev_d: { en: "Check-ins with a Vome specialist to go through new features, improvements, or any questions your team has. Unlocked as a one-time benefit upon upgrading.", fr: "Suivis avec un spécialiste Vome pour parcourir nouvelles fonctionnalités, améliorations ou questions de votre équipe. Débloqué comme avantage unique à la mise à niveau." },
    cs_dam_n: { en: "Dedicated account management", fr: "Gestion de compte dédiée" },
    cs_dam_d: { en: "Gain access to a dedicated Vome expert to help you optimize your portal and share best practices for managing volunteers at scale.", fr: "Accédez à un expert Vome dédié pour vous aider à optimiser votre portail et partager les meilleures pratiques pour gérer les bénévoles à grande échelle." },
    cs_trans_n: { en: "New Admin & Transition Onboarding", fr: "Intégration de nouvel admin et transition" },
    cs_trans_d: { en: "When your team brings on a new admin or transitions coordinators, we provide a complimentary onboarding session for a smooth handoff.", fr: "Lorsque votre équipe accueille un nouvel administrateur ou change de coordonnateur, nous offrons une session d'intégration gratuite pour une transition en douceur." },
    cs_consult_n: { en: "Tech & operational consulting", fr: "Conseil technique et opérationnel" },
    cs_consult_d: { en: "Get access to Vome's software engineers and onboarding experts to help you strategize your tech setup.", fr: "Accédez aux ingénieurs logiciels et experts en intégration de Vome pour vous aider à élaborer votre stratégie technologique." },

    // Plans page support + closing
    support_h2: { en: "Personalized customer service", fr: "Service à la clientèle personnalisé" },
    support_body: {
      en: "Our team is passionate about helping organizations effectively manage volunteer programs & events. We'll help you migrate your data, build the foundation of the admin portal, and show you best practices when it comes to volunteer management & engagement. We also offer extensive customer support resources: email tickets, FAQ knowledge base, and a dedicated account manager to make sure you're taken care of.",
      fr: "Notre équipe est passionnée par l'aide aux organisations pour gérer efficacement leurs programmes et événements de bénévolat. Nous vous aiderons à migrer vos données, à bâtir les fondations du portail admin et à vous montrer les meilleures pratiques en matière de gestion et d'engagement des bénévoles. Nous offrons aussi de nombreuses ressources de soutien : billets courriel, base de connaissances FAQ et un gestionnaire de compte dédié pour s'assurer que vous êtes pris en charge.",
    },
    support_cta_label: { en: "Want to see the difference for yourself?", fr: "Vous voulez voir la différence par vous-même ?" },
    support_cta: { en: "Book a demo", fr: "Réserver une démo" },

    plans_faq_h2: { en: "Frequently asked questions", fr: "Foire aux questions" },
    plans_faq_sub: { en: "Still have questions?", fr: "Encore des questions ?" },
    plans_faq_team: { en: "Talk to our team →", fr: "Parlez à notre équipe →" },
    plans_q_more: { en: "What if I have more questions?", fr: "Et si j'ai d'autres questions ?" },
    plans_a_more: {
      en: "That's what we're here for! You can contact us to share your questions, or book a demo to see the platform in action.",
      fr: "Nous sommes là pour ça ! Vous pouvez nous joindre pour partager vos questions ou réserver une démo pour voir la plateforme en action.",
    },

    closing_h2: { en: "Ready to get started?", fr: "Prêt à commencer ?" },
    closing_sub: {
      en: "Sign up for free or schedule a demo to see why thousands of volunteer managers choose Vome.",
      fr: "Inscrivez-vous gratuitement ou réservez une démo pour voir pourquoi des milliers de gestionnaires de bénévoles choisissent Vome.",
    },
    closing_primary: { en: "Start for free", fr: "Commencer gratuitement" },
    closing_secondary: { en: "Schedule a demo", fr: "Réserver une démo" },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  MOCKUP CHROME — labels rendered inside the product-UI screenshots that
  //  appear in HeroMockup, HeroMockupFull, FeatureTabs panels, and MobileApp
  //  phone screens. These are decorative demos of the product; sample
  //  proper nouns (volunteer names, sample URLs) stay as-is, but every
  //  navigation label, status pill, button, header, and date prefix is
  //  translated so the screenshots themselves read in the active locale.
  // ─────────────────────────────────────────────────────────────────────────
  mockup: {
    // Sidebar (HeroMockupFull)
    side_org: { en: "Your Organization", fr: "Votre organisation" },
    side_view_page: { en: "View page", fr: "Voir la page" },
    side_logo_l1: { en: "YOUR", fr: "VOTRE" },
    side_logo_l2: { en: "LOGO", fr: "LOGO" },
    group_manage: { en: "Manage", fr: "Gérer" },
    group_data: { en: "Data", fr: "Données" },
    group_configure: { en: "Configure", fr: "Configurer" },
    group_help: { en: "Help", fr: "Aide" },
    nav_dashboard: { en: "Dashboard", fr: "Tableau de bord" },
    nav_forms: { en: "Forms", fr: "Formulaires" },
    nav_sequences: { en: "Sequences", fr: "Séquences" },
    nav_opportunities: { en: "Opportunities", fr: "Opportunités" },
    nav_schedule: { en: "Schedule", fr: "Horaire" },
    nav_groups: { en: "Groups", fr: "Groupes" },
    nav_resources: { en: "Resources", fr: "Ressources" },
    nav_recognition: { en: "Recognition", fr: "Reconnaissance" },
    nav_database: { en: "Database", fr: "Base de données" },
    nav_reports: { en: "Reports & Analytics", fr: "Rapports et analyses" },
    nav_users: { en: "Users & Access", fr: "Utilisateurs et accès" },
    nav_sites: { en: "Sites", fr: "Sites" },
    nav_integrations: { en: "Integrations", fr: "Intégrations" },
    nav_setup: { en: "Setup Checklist", fr: "Liste de configuration" },
    nav_support: { en: "Support", fr: "Soutien" },

    // Hero board (sequences kanban)
    crumb_sequences: { en: "Sequences", fr: "Séquences" },
    vol_onboarding: { en: "Volunteer Onboarding", fr: "Intégration des bénévoles" },
    add_volunteer: { en: "Add Volunteer", fr: "Ajouter un bénévole" },
    step_1: { en: "Step 1", fr: "Étape 1" },
    step_2: { en: "Step 2", fr: "Étape 2" },
    step_3: { en: "Step 3", fr: "Étape 3" },
    chip_interview: { en: "Interview", fr: "Entrevue" },
    chip_fillable_pdf: { en: "Fillable PDF", fr: "PDF interactif" },
    chip_background_check: { en: "Background Check", fr: "Vérification d'antécédents" },
    chip_background: { en: "Background", fr: "Antécédents" },
    started_label: { en: "Started:", fr: "Débuté :" },
    assigned_label: { en: "Assigned:", fr: "Assigné :" },
    due_label: { en: "Due:", fr: "Échéance :" },
    completed_label: { en: "Completed:", fr: "Complété :" },

    // FeatureTabs — Recruitment panel mockup
    bartitle_share_url: { en: "share.vomevolunteer.com/your-org", fr: "share.vomevolunteer.com/votre-org" },
    cover_photo: { en: "Your cover photo", fr: "Votre photo de couverture" },
    org_tag_community: { en: "Community Support", fr: "Soutien communautaire" },
    org_tag_education: { en: "Education", fr: "Éducation" },
    featured_opps: { en: "Featured opportunities", fr: "Opportunités vedettes" },
    opp_food_bank: { en: "Weekend Food Bank Volunteer", fr: "Bénévole banque alimentaire (week-end)" },
    opp_food_bank_meta: { en: "On-site · Saturdays 9am–1pm", fr: "Sur place · samedis 9 h–13 h" },
    opp_hospital: { en: "Hospital Visitor Program", fr: "Programme de visiteurs hospitaliers" },
    opp_hospital_meta: { en: "Flexible · Weekly", fr: "Flexible · hebdomadaire" },
    chip_adults: { en: "Adults", fr: "Adultes" },
    chip_groups: { en: "Groups", fr: "Groupes" },
    chip_social: { en: "Social", fr: "Social" },
    chip_indoors: { en: "Indoors", fr: "Intérieur" },
    view_btn: { en: "View", fr: "Voir" },
    copy_link_btn: { en: "Copy link", fr: "Copier le lien" },

    // FeatureTabs — Onboarding panel mockup
    bartitle_sequences: { en: "Sequences", fr: "Séquences" },
    seq_name: { en: "Volunteer Onboarding Sequence", fr: "Séquence d'intégration des bénévoles" },
    seq_general: { en: "General Onboarding", fr: "Intégration générale" },
    pill_active: { en: "Active", fr: "Actifs" },
    pill_my_tasks: { en: "My Tasks", fr: "Mes tâches" },
    col_zoom_interview: { en: "Zoom Interview", fr: "Entrevue Zoom" },
    col_liability_waiver: { en: "Liability Waiver", fr: "Décharge de responsabilité" },
    col_background_check: { en: "Background Check", fr: "Vérification d'antécédents" },
    toast_completed_part: { en: "completed the last step in a sequence:", fr: "a complété la dernière étape d'une séquence :" },
    toast_seq_name: { en: "Group Leader Onboarding", fr: "Intégration des chefs de groupe" },
    toast_status_change: { en: "Sequence status updated from Active to Finished.", fr: "Statut de la séquence : Actif → Terminé." },
    toast_time: { en: "6m ago · Automated update", fr: "Il y a 6 min · Mise à jour automatique" },

    // FeatureTabs — Scheduling panel mockup
    bartitle_schedule: { en: "Schedule · April 2026", fr: "Horaire · avril 2026" },
    create_shifts: { en: "+ Create shifts", fr: "+ Créer des quarts" },
    today: { en: "Today", fr: "Aujourd'hui" },
    daterange: { en: "Apr 2026 ▾", fr: "avr. 2026 ▾" },
    view_calendar: { en: "📅 Calendar", fr: "📅 Calendrier" },
    view_month: { en: "Month ▾", fr: "Mois ▾" },
    dow_sun: { en: "Sun", fr: "dim" },
    dow_mon: { en: "Mon", fr: "lun" },
    dow_tue: { en: "Tue", fr: "mar" },
    dow_wed: { en: "Wed", fr: "mer" },
    dow_thu: { en: "Thu", fr: "jeu" },
    dow_fri: { en: "Fri", fr: "ven" },
    dow_sat: { en: "Sat", fr: "sam" },
    evt_opp_a: { en: "9a Opp A", fr: "9 h Opp A" },
    evt_pos_b: { en: "10a Pos B", fr: "10 h Pos B" },
    evt_job_c: { en: "11a Job C", fr: "11 h Tâche C" },
    evt_orientation: { en: "5p Orientation", fr: "17 h Orientation" },
    evt_shift: { en: "3p Shift", fr: "15 h Quart" },
    evt_full: { en: "Full", fr: "Plein" },
    evt_mentor: { en: "4p Mentor", fr: "16 h Mentor" },
    evt_training: { en: "6p Training", fr: "18 h Formation" },
    evt_orient_short: { en: "2p Orient", fr: "14 h Orient." },
    drawer_signup_orient: { en: "Sign Up For Orientation!", fr: "Inscrivez-vous à l'orientation !" },
    drawer_vol_orient: { en: "Volunteer Orientation", fr: "Orientation des bénévoles" },
    drawer_date_time: { en: "Date & Time", fr: "Date et heure" },
    drawer_date_val: { en: "Apr 10, 5:00–7:00 PM", fr: "10 avr., 17 h–19 h" },
    drawer_location: { en: "Location", fr: "Lieu" },
    drawer_location_val: { en: "3435 Drummond St, Montréal", fr: "3435 rue Drummond, Montréal" },
    drawer_attendees: { en: "Attendees", fr: "Participants" },
    checkin_btn: { en: "Check-in", fr: "Pointer" },

    // FeatureTabs — Hour tracking panel mockup
    bartitle_hours_report: { en: "Hours Report · April 2026", fr: "Rapport d'heures · avril 2026" },
    method_qr: { en: "QR scan", fr: "Code QR" },
    method_tap: { en: "Tap to check in", fr: "Tape pour pointer" },
    method_kiosk: { en: "On-site kiosk", fr: "Borne sur place" },
    method_auto: { en: "Automatic", fr: "Automatique" },
    total_vol_hours_label: { en: "Total volunteer hours · April 2026", fr: "Heures totales de bénévolat · avril 2026" },
    delta_vs_march: { en: "▲ 12% vs March", fr: "▲ 12 % vs mars" },
    th_volunteer: { en: "Volunteer", fr: "Bénévole" },
    th_shift: { en: "Opportunity", fr: "Opportunité" },
    th_method: { en: "Shift", fr: "Quart" },
    th_hours: { en: "Hours", fr: "Heures" },
    shift_food_bank: { en: "Food Bank Sorting", fr: "Tri à la banque alimentaire" },
    shift_hospital: { en: "Hospital Reception", fr: "Accueil à l'hôpital" },
    shift_mentorship: { en: "Youth Mentorship", fr: "Mentorat jeunesse" },
    shift_community_day: { en: "Community Day", fr: "Journée communautaire" },
    pill_qr: { en: "Apr 14 · 2–6pm", fr: "14 avr. · 14h–18h" },
    pill_kiosk: { en: "Apr 14 · 9am–12pm", fr: "14 avr. · 9h–12h" },
    pill_claim: { en: "Apr 10 · 6–8pm", fr: "10 avr. · 18h–20h" },
    pill_tap: { en: "Apr 21 · 2–6pm", fr: "21 avr. · 14h–18h" },
    pill_auto: { en: "Apr 7 · All day", fr: "7 avr. · Toute la journée" },
    hour_unit: { en: "h", fr: "h" },
    export_audit: { en: "Export audit report", fr: "Exporter le rapport d'audit" },

    // FeatureTabs — Data & reports panel mockup
    bartitle_analytics: { en: "Analytics overview", fr: "Aperçu analytique" },
    kpi_total_hours: { en: "TOTAL HOURS", fr: "HEURES TOTALES" },
    kpi_active_profiles: { en: "ACTIVE PROFILES", fr: "PROFILS ACTIFS" },
    kpi_retention: { en: "RETENTION RATE", fr: "TAUX DE RÉTENTION" },
    kpi_bookings: { en: "BOOKINGS (28D)", fr: "RÉSERVATIONS (28 J)" },
    ytd_hours: { en: "YTD Hours: 24,180", fr: "Heures cumulées : 24 180" },
    avg_hours_profile: { en: "Avg hours per profile: 3.0", fr: "Moy. heures/profil : 3,0" },
    window_180: { en: "180-day window", fr: "Fenêtre de 180 jours" },
    vs_prev_28: { en: "vs. previous 28 days", fr: "vs 28 derniers jours" },
    card_hours_over_time: { en: "Hours Over Time", fr: "Heures dans le temps" },
    legend_hours: { en: "Hours", fr: "Heures" },
    legend_total_shifts: { en: "Total Shifts", fr: "Quarts totaux" },
    card_top_profiles: { en: "Top Profiles", fr: "Profils principaux" },
    card_age_dist: { en: "Age Distribution", fr: "Répartition par âge" },

    // FeatureTabs — Communications panel mockup
    bartitle_comms: { en: "Communications", fr: "Communications" },
    chan_email: { en: "Email", fr: "Courriel" },
    chan_chat: { en: "Chat", fr: "Clavardage" },
    chan_automations: { en: "Automations", fr: "Automatisations" },
    comp_to: { en: "To", fr: "À" },
    comp_from: { en: "From", fr: "De" },
    comp_subject: { en: "Subject", fr: "Objet" },
    tag_active: { en: "Tag: Active", fr: "Étiquette : Actif" },
    prog_food_bank: { en: "Program: Food Bank", fr: "Programme : Banque alimentaire" },
    recipients_count: { en: "384 recipients", fr: "384 destinataires" },
    verified_label: { en: "✓ Verified", fr: "✓ Vérifié" },
    subj_your: { en: "Your", fr: "Votre quart" },
    subj_shift_saturday: { en: "shift is this Saturday", fr: "est ce samedi" },
    body_hi: { en: "Hi", fr: "Bonjour" },
    body_reminder_pre: { en: "Just a reminder that you're signed up for", fr: "Petit rappel : vous êtes inscrit à" },
    body_on: { en: "on", fr: "le" },
    body_at: { en: "at", fr: "à" },
    body_thanks: { en: "Thanks for everything you do —", fr: "Merci pour tout ce que vous faites —" },
    auto_tag: { en: "⚡ Automated · sends 24h before shift", fr: "⚡ Automatisé · envoyé 24 h avant le quart" },
    active_automations: { en: "Active automations", fr: "Automatisations actives" },
    view_all: { en: "View all", fr: "Voir tout" },
    auto_birthday: { en: "Birthday wishes", fr: "Vœux d'anniversaire" },
    auto_birthday_rule: { en: "On volunteer birthday", fr: "À l'anniversaire du bénévole" },
    auto_reminder: { en: "Shift reminder (24h)", fr: "Rappel de quart (24 h)" },
    auto_reminder_rule: { en: "1 day before shift start", fr: "1 jour avant le quart" },
    auto_survey: { en: "Post-shift survey", fr: "Sondage post-quart" },
    auto_survey_rule: { en: "2 hours after check-out", fr: "2 h après la sortie" },
    status_on: { en: "On", fr: "Activé" },
    float_meal_prep: { en: "Meal Prep · Food Bank", fr: "Préparation de repas · Banque alimentaire" },
    float_now: { en: "Now", fr: "Maintenant" },
    float_msg_pre: { en: "we need a spot —", fr: "il nous faut une place —" },

    // MobileApp — phone screens
    phone_greet: { en: "Good morning,", fr: "Bonjour," },
    phone_upcoming: { en: "UPCOMING SHIFT", fr: "PROCHAIN QUART" },
    phone_meal_prep: { en: "Meal prep & distribution", fr: "Préparation et distribution de repas" },
    phone_when: { en: "Fri, Jan 24 · 9:00 AM", fr: "ven. 24 janv. · 9 h" },
    phone_in_2_days: { en: "In 2 days", fr: "Dans 2 jours" },
    phone_available: { en: "Available near you", fr: "Près de chez vous" },
    phone_food_pantry: { en: "Food pantry sort", fr: "Tri de garde-manger" },
    phone_sat_10: { en: "Sat · 10 AM", fr: "sam. · 10 h" },
    phone_tutoring: { en: "Tutoring program", fr: "Programme de tutorat" },
    phone_tue_4: { en: "Tue · 4 PM", fr: "mar. · 16 h" },
    phone_checkin: { en: "CHECK-IN", fr: "POINTAGE" },
    phone_meal_shift: { en: "Meal prep shift", fr: "Quart de préparation de repas" },
    phone_scan: { en: "Scan to check in", fr: "Scannez pour pointer" },
    phone_total_hours: { en: "Total hours", fr: "Heures totales" },
    phone_achievements: { en: "Achievements", fr: "Accomplissements" },
    phone_next_badge: { en: "NEXT BADGE", fr: "PROCHAIN BADGE" },
    phone_bronze_vol: { en: "Bronze volunteer", fr: "Bénévole bronze" },
    phone_progress: { en: "350 / 500 hours", fr: "350 / 500 heures" },
    phone_bronze: { en: "Bronze", fr: "Bronze" },
    phone_500h: { en: "500 hours", fr: "500 heures" },
    phone_silver: { en: "Silver", fr: "Argent" },
    phone_1000h: { en: "1,000 hours", fr: "1 000 heures" },
    phone_gold: { en: "Gold", fr: "Or" },
    phone_2500h: { en: "2,500 hours", fr: "2 500 heures" },
  },
} as const;

/**
 * Read a string value for the current locale.
 * Falls back to English if the localized translation is missing or empty.
 */
export function t(
  entry: { en: string; fr?: string },
  locale: Locale,
): string {
  if (locale === "fr") {
    const fr = entry.fr;
    return fr && fr.length > 0 ? fr : entry.en;
  }
  return entry.en;
}
