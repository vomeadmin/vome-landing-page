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
      en: "From a single coordinator to teams running programs across multiple sites, Vome <strong>automates the manual work</strong> behind onboarding, scheduling, and communication. All in one platform, with unlimited volunteers on every plan.",
      fr: "Du coordonnateur unique aux équipes gérant des programmes sur plusieurs sites, Vome <strong>automatise le travail manuel</strong> derrière l'intégration, la planification et la communication. Tout sur une seule plateforme, avec un nombre illimité de bénévoles sur tous les forfaits.",
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
    fly_message_preview: { en: "Céline: See you Saturday!", fr: "Céline : À samedi !" },
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
    rec_headline: { en: "Build the recruitment process you need.", fr: "Bâtissez le processus de recrutement dont vous avez besoin." },
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
      en: "Automations move applicants forward on their own and keep your system organized. Triggered by form responses, visibility rules, and eligibility requirements.",
      fr: "Les automatisations font avancer les candidats par eux-mêmes et gardent votre système organisé. Déclenchées par les réponses aux formulaires, les règles de visibilité et les critères d'admissibilité.",
    },
    rec_f4_title: { en: "Automated status updates", fr: "Mises à jour de statut automatisées" },
    rec_f4_body: {
      en: "Email and app notifications keep volunteers in the loop through every step of the application.",
      fr: "Les notifications par courriel et dans l'application tiennent les bénévoles informés à chaque étape de la candidature.",
    },

    // ── Panel: Onboarding ──
    onb_headline_l1: { en: "Onboard volunteers through custom workflows.", fr: "Intégrez les bénévoles avec des flux personnalisés." },
    onb_headline_l2: { en: "No manual follow-up.", fr: "Aucun suivi manuel." },
    onb_f1_title: { en: "Build any onboarding flow, your way", fr: "Construisez n'importe quel flux d'intégration, à votre façon" },
    onb_f1_body: {
      en: "Combine forms, fillable PDFs, e-signatures, training modules, checklists, and file uploads into a single guided sequence. Organize into folders by program, department, or season.",
      fr: "Combinez formulaires, PDF interactifs, signatures électroniques, modules de formation, listes de contrôle et téléversements en une seule séquence guidée. Organisez-les en dossiers par programme, département ou saison.",
    },
    onb_f2_title: { en: "Fillable PDFs, built in", fr: "PDF interactifs intégrés" },
    onb_f2_body: {
      en: "Waivers, releases, policies, and compliance forms. Signed and submitted inside the sequence, with no third-party tools, printing, scanning, or re-uploading needed.",
      fr: "Décharges, autorisations, politiques et formulaires de conformité. Signés et soumis directement dans la séquence, sans outil tiers, ni impression, numérisation ou téléversement supplémentaire.",
    },
    onb_f3_title: { en: "Control every step", fr: "Contrôlez chaque étape" },
    onb_f3_body: {
      en: "Due dates, reminders, skip rules, auto-expiration, and visibility settings per step. Choose whether volunteers move themselves forward or admins advance them.",
      fr: "Dates d'échéance, rappels, règles de saut, expiration automatique et paramètres de visibilité par étape. Choisissez si les bénévoles avancent eux-mêmes ou si les administrateurs les font progresser.",
    },
    onb_f4_title: { en: "Credentialing and compliance, handled", fr: "Accréditation et conformité, gérées" },
    onb_f4_body: {
      en: "Background check integrations, auto-expiring renewals for certifications and waivers, and audit-ready tracking at every step.",
      fr: "Intégrations de vérification d'antécédents, renouvellements automatiques pour les certifications et décharges, et suivi prêt pour les audits à chaque étape.",
    },

    // ── Panel: Scheduling ──
    sch_headline: { en: "850,000+ shifts scheduled and counting.", fr: "Plus de 850 000 quarts planifiés et ça continue." },
    sch_panel_sub: {
      en: "Single shifts. Recurring programs. Multi-site calendars. Vome handles them all.",
      fr: "Quarts uniques. Programmes récurrents. Calendriers multi-sites. Vome gère tout.",
    },
    sch_f1_title: { en: "Shift management at every scale", fr: "Gestion des quarts à toute échelle" },
    sch_f1_body: {
      en: "Create single shifts, recurring schedules, or import entire calendars from a spreadsheet. Save shift templates and reuse them across programs. Mass assign, edit, and cancel from one calendar view.",
      fr: "Créez des quarts uniques, des horaires récurrents, ou importez des calendriers complets depuis un chiffrier. Sauvegardez des modèles de quart et réutilisez-les à travers vos programmes. Affectez, modifiez et annulez en masse depuis une seule vue calendrier.",
    },
    sch_f2_title: { en: "Flexible booking, your rules", fr: "Réservation flexible, à vos règles" },
    sch_f2_body: {
      en: "Choose instant booking or admin approval. Open shifts to everyone, or make them private and visible only to tagged volunteers. Let volunteers propose their own times with flexible scheduling.",
      fr: "Choisissez la réservation instantanée ou l'approbation par un administrateur. Ouvrez les quarts à tous, ou rendez-les privés et visibles uniquement aux bénévoles étiquetés. Permettez aux bénévoles de proposer leurs propres plages avec la planification flexible.",
    },
    sch_f3_title: { en: "Group reservations for corporate and team events", fr: "Réservations de groupe pour événements corporatifs et d'équipe" },
    sch_f3_body: {
      en: "Volunteers reserve multiple spots in a single action for a team, a family, or a corporate volunteer day. Hours and participation roll up at the group level, ready for reporting.",
      fr: "Les bénévoles réservent plusieurs places en une seule action pour une équipe, une famille ou une journée de bénévolat corporative. Les heures et la participation sont consolidées au niveau du groupe, prêtes pour les rapports.",
    },
    sch_f4_title: { en: "Reminders, confirmations, and calendar sync", fr: "Rappels, confirmations et synchronisation de calendrier" },
    sch_f4_body: {
      en: "Configurable shift notifications send reminders before, during, and after each shift. Volunteers confirm, join waitlists, and sync shifts to Google, Outlook, or Apple Calendar.",
      fr: "Des notifications de quart configurables envoient des rappels avant, pendant et après chaque quart. Les bénévoles confirment, rejoignent les listes d'attente et synchronisent leurs quarts avec Google, Outlook ou Apple Calendar.",
    },

    // ── Panel: Hour tracking ──
    hrs_headline: { en: "So many ways to track volunteer hours. Pick what fits your program.", fr: "Tant de façons de suivre les heures des bénévoles. Choisissez ce qui convient à votre programme." },
    hrs_f1_title: { en: "Multiple ways to check in", fr: "Plusieurs façons de pointer" },
    hrs_f1_body: {
      en: "QR scan, tap-to-check-in, on-site kiosk, or fully automatic check-in and check-out. Pick one, or mix different methods across your different volunteer programs.",
      fr: "Code QR, pointage par tape, borne sur place, ou pointage et sortie entièrement automatiques. Choisissez-en une, ou mélangez les méthodes selon vos différents programmes.",
    },
    hrs_f2_title: { en: "Proximity validation for attendance integrity", fr: "Validation de proximité pour l'intégrité de la présence" },
    hrs_f2_body: {
      en: "Require volunteers to be physically within a defined radius to check in or out. Customizable by program. Prevents remote check-ins and protects program data.",
      fr: "Exigez que les bénévoles soient physiquement dans un rayon défini pour pointer leur arrivée ou leur départ. Personnalisable par programme. Empêche les pointages à distance et protège les données du programme.",
    },
    hrs_f3_title: { en: "Walk-ins, group reservations, and off-site hours", fr: "Bénévoles spontanés, réservations de groupe et heures hors site" },
    hrs_f3_body: {
      en: "On-site kiosks handle check-in and check-out for everyone on a shift, with an optional \"Join a shift\" mode for walk-ins who want to sign up on the spot. Group reservations roll up at the group level for reporting. Volunteers can also submit hour claims for work they did off-platform.",
      fr: "Les bornes sur place gèrent le pointage de tous les bénévoles d'un quart, avec un mode optionnel « Joindre un quart » pour les arrivées spontanées qui souhaitent s'inscrire sur place. Les réservations de groupe se consolident au niveau du groupe pour les rapports. Les bénévoles peuvent aussi soumettre des déclarations d'heures pour leur travail hors plateforme.",
    },
    hrs_f4_title: { en: "Audit-ready hour reports", fr: "Rapports d'heures prêts pour les audits" },
    hrs_f4_body: {
      en: "Shifts and hours by volunteer, a full reservations and hours log, and custom database exports. Every hour traced to a person, a shift, and a check-in method.",
      fr: "Quarts et heures par bénévole, un journal complet des réservations et des heures, et des exportations personnalisées de la base de données. Chaque heure est liée à une personne, un quart et une méthode de pointage.",
    },

    // ── Panel: Data & reports ──
    data_headline: { en: "Import your data. Organize it your way. Report in just a few clicks.", fr: "Importez vos données. Organisez-les à votre façon. Produisez vos rapports en quelques clics." },
    data_f1_title: { en: "Turnkey data import and migration", fr: "Importation et migration de données clés en main" },
    data_f1_body: {
      en: "Move your volunteer records into Vome in minutes. Bulk import from any other system, map custom fields to match your existing structure, and invite volunteers to claim their profiles. Duplicate handling built in.",
      fr: "Migrez vos dossiers de bénévoles dans Vome en quelques minutes. Importation en masse depuis tout autre système, association de champs personnalisés à votre structure existante, et invitation aux bénévoles à revendiquer leur profil. Gestion des doublons intégrée.",
    },
    data_f2_title: { en: "A database that flexes to your program", fr: "Une base de données qui s'adapte à votre programme" },
    data_f2_body: {
      en: "Segment volunteers by tag, program, or location with unlimited custom fields. Build and save custom views that filter and organize data any way you need. Give each admin access only to the data that belongs to them. Headquarters sees everything. Site managers see their site.",
      fr: "Segmentez les bénévoles par étiquette, programme ou lieu avec un nombre illimité de champs personnalisés. Créez et sauvegardez des vues personnalisées qui filtrent et organisent les données comme vous le voulez. Donnez à chaque administrateur l'accès uniquement aux données qui le concernent. Le siège voit tout. Les gestionnaires de site ne voient que leur site.",
    },
    data_f3_title: { en: "Ready-made reports for every audience", fr: "Rapports prêts à l'emploi pour tous les publics" },
    data_f3_body: {
      en: "Hours by volunteer, attendance logs, sequence completion, form submissions, and check-in history. Every report you need for funders, boards, and audits, ready in seconds.",
      fr: "Heures par bénévole, journaux de présence, complétion de séquences, soumissions de formulaires et historique des pointages. Tous les rapports nécessaires pour vos bailleurs de fonds, conseils d'administration et audits, prêts en quelques secondes.",
    },
    data_f4_title: { en: "Analytics dashboards at a glance", fr: "Tableaux de bord analytiques en un coup d'œil" },
    data_f4_body: {
      en: "Visualize hours, shifts, onboarding progress, form completion, and custom field trends. See the health of your program without running a single report.",
      fr: "Visualisez les heures, les quarts, la progression de l'intégration, la complétion des formulaires et les tendances des champs personnalisés. Mesurez la santé de votre programme sans exécuter un seul rapport.",
    },

    // ── Panel: Communications ──
    com_headline: { en: "Every way you need to communicate, in one place.", fr: "Toutes les façons de communiquer, au même endroit." },
    com_f1_title: { en: "Native instant messaging", fr: "Messagerie instantanée native" },
    com_f1_body: {
      en: "One-on-one messages, custom group chats, and auto-generated chatrooms for every shift and opportunity. No WhatsApp. No email chains. Volunteers talk to admins and each other right inside the platform.",
      fr: "Messages en tête-à-tête, conversations de groupe personnalisées et salons générés automatiquement pour chaque quart et opportunité. Pas de WhatsApp. Pas de chaînes de courriels. Les bénévoles communiquent avec les administrateurs et entre eux directement dans la plateforme.",
    },
    com_f2_title: { en: "Bulk email built for campaigns", fr: "Courriels de masse conçus pour les campagnes" },
    com_f2_body: {
      en: "Send personalized emails to volunteers through Vome's server, or connect your own Google or Outlook account to send from your domain. Build reusable email templates with dynamic variables. Target by group, tag, program, or any custom field.",
      fr: "Envoyez des courriels personnalisés aux bénévoles via le serveur de Vome, ou connectez votre propre compte Google ou Outlook pour envoyer depuis votre domaine. Créez des modèles de courriels réutilisables avec des variables dynamiques. Ciblez par groupe, étiquette, programme ou tout champ personnalisé.",
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
      en: "<em>Your</em> onboarding flows, <em>your</em> scheduling rules, <em>your</em> check-in methods, <em>your</em> reports.",
      fr: "<em>Vos</em> flux d'intégration, <em>vos</em> règles de planification, <em>vos</em> méthodes de pointage, <em>vos</em> rapports.",
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
    node_onboarding_desc: { en: "Guided workflows", fr: "Parcours guidés" },
    node_scheduling_title: { en: "Scheduling", fr: "Planification" },
    node_scheduling_desc: { en: "Shifts & self-scheduling", fr: "Quarts et auto-planification" },
    node_hours_title: { en: "Hour tracking", fr: "Suivi des heures" },
    node_hours_desc: { en: "QR, kiosk, tap & auto", fr: "QR, borne, tape et auto" },
    node_comms_title: { en: "Communications", fr: "Communications" },
    node_comms_desc: { en: "Chat, email & automations", fr: "Clavardage, courriel et automatisations" },
    node_data_title: { en: "Data & reports", fr: "Données et rapports" },
    node_data_desc: { en: "Your database, your way", fr: "Votre base de données, à votre façon" },
    node_recognition_title: { en: "Recognition", fr: "Reconnaissance" },
    node_recognition_desc: { en: "Custom challenges & awards", fr: "Défis et récompenses personnalisés" },
    node_app_title: { en: "Mobile app", fr: "Application mobile" },
    node_app_desc: { en: "iOS & Android", fr: "iOS et Android" },

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
      fr: "Bâtissez des formulaires modernes à votre image et transformez l'intérêt en candidats prêts à contribuer. Sans triage manuel.",
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
      fr: "Bâtissez n'importe quel flux d'intégration (entrevues, formations, décharges, vérifications d'antécédents) dans une seule séquence guidée.",
    },
    card_onboarding_f1: { en: "Step-by-step sequences with optional volunteer self-tracking", fr: "Séquences étape par étape avec autosuivi optionnel pour le bénévole" },
    card_onboarding_f2: { en: "Sterling Volunteers background-check integration", fr: "Intégration des vérifications d'antécédents Sterling Volunteers" },
    card_onboarding_f3: { en: "SCORM Cloud e-learning, fillable PDFs & e-signatures", fr: "Apprentissage en ligne SCORM Cloud, PDF interactifs et signatures électroniques" },
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
      en: "So many ways to track hours. Pick what fits each program: QR codes, kiosks, hour claims, or fully automatic check-in.",
      fr: "Tant de façons de suivre les heures. Choisissez ce qui convient à chaque programme : codes QR, bornes, déclarations ou pointage automatique.",
    },
    card_hours_f1: { en: "QR-code attendance tracking via the mobile app", fr: "Suivi de présence par code QR depuis l'application mobile" },
    card_hours_f2: { en: "Unlimited on-site kiosks (any tablet, computer, or phone)", fr: "Bornes sur place illimitées (sur toute tablette, ordinateur ou téléphone)" },
    card_hours_f3: { en: "Volunteer-submitted hour claims with admin approval", fr: "Déclarations d'heures soumises par les bénévoles avec approbation admin" },
    card_hours_f4: { en: "Bulk hour logging + integrated reservation & hours reports", fr: "Saisie d'heures en lot et rapports intégrés de réservations et d'heures" },
    card_hours_link: { en: "Learn more about hour tracking", fr: "En savoir plus sur le suivi des heures" },

    // Card 5 — Recognition (Enterprise+)
    card_recognition_title: { en: "Recognition", fr: "Reconnaissance" },
    card_recognition_desc: {
      en: "Reward and motivate your volunteers with auto-earned achievements and the custom awards your team designs.",
      fr: "Récompensez et motivez vos bénévoles avec des accomplissements gagnés automatiquement et les prix personnalisés conçus par votre équipe.",
    },
    card_recognition_f1: { en: "Automatic achievements based on hours & shift milestones", fr: "Accomplissements automatiques selon les heures et jalons de quarts" },
    card_recognition_f2: { en: "Custom awards & badges for personal moments", fr: "Prix et badges personnalisés pour les moments importants" },
    card_recognition_f3: { en: "Visible on volunteer profiles, share-ready", fr: "Visibles sur les profils des bénévoles, prêts à partager" },
    card_recognition_f4: { en: "Available on Enterprise & Ultimate plans", fr: "Disponible sur les forfaits Entreprise et Ultime" },
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

    // Post-modules CTA
    cta_h2: { en: "See it in action", fr: "Voyez Vome à l'œuvre" },
    cta_sub: {
      en: "Sign up free and explore the platform yourself, or book a demo and we'll walk you through the modules that matter most to you.",
      fr: "Inscrivez-vous gratuitement et explorez la plateforme par vous-même, ou réservez une démo et nous vous présenterons les modules les plus pertinents pour vous.",
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  MOBILE APP section
  // ─────────────────────────────────────────────────────────────────────────
  mobile_app: {
    h2: { en: "The app your volunteers love.", fr: "L'application que vos bénévoles adorent." },
    h2_sub: { en: "Designed for every age, skill, and shift.", fr: "Conçue pour tous les âges, toutes les compétences et tous les quarts." },
    sub: {
      en: "Volunteers register for opportunities, reserve shifts, check in, and message your team, all from their phone. Admins get the same app to run the whole program from anywhere.",
      fr: "Les bénévoles s'inscrivent aux opportunités, réservent des quarts, pointent leur présence et communiquent avec votre équipe, le tout depuis leur téléphone. Les administrateurs ont la même application pour gérer tout le programme depuis n'importe où.",
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
    card_struct_title: { en: "Split your portal by site, department, or chapter", fr: "Divisez votre portail par site, département ou section" },
    card_struct_body: {
      en: "Organize your entire portal around how your organization is actually structured. Each location, department, or chapter can have its own content, admins, and branded experience. Volunteers only see what's relevant to them. Admins only manage what's theirs.",
      fr: "Organisez l'entièreté de votre portail selon la structure réelle de votre organisation. Chaque emplacement, département ou section peut avoir son propre contenu, ses administrateurs et son image de marque. Les bénévoles ne voient que ce qui les concerne. Les administrateurs ne gèrent que ce qui leur appartient.",
    },
    card_roles_title: { en: "Admin roles and permissions, as granular as you need", fr: "Rôles et permissions d'administrateur, aussi granulaires que nécessaire" },
    card_roles_body: {
      en: "Invite your whole team with scoped access. Department leads see their department. Site managers see their site. Configure granular read or edit permissions by folder, module, or content type, so every admin has exactly the access they need.",
      fr: "Invitez toute votre équipe avec un accès délimité. Les responsables de département voient leur département. Les gestionnaires de site voient leur site. Configurez des permissions granulaires de lecture ou de modification par dossier, module ou type de contenu, afin que chaque administrateur ait exactement l'accès dont il a besoin.",
    },
    card_int_title: { en: "Integrations that fit your stack", fr: "Des intégrations qui s'arriment à votre pile technologique" },
    card_int_body: {
      en: "Native Salesforce app with two-way sync, Zapier, Microsoft Power Automate, Sterling Volunteers, SCORM Cloud, Verified First, and Double the Donation. All built in. Or use our REST API and custom webhooks to achieve any workflow.",
      fr: "Application Salesforce native avec synchronisation bidirectionnelle, Zapier, Microsoft Power Automate, Sterling Volunteers, SCORM Cloud, Verified First et Double the Donation. Toutes intégrées. Ou utilisez notre API REST et nos webhooks personnalisés pour réaliser n'importe quel flux de travail.",
    },
    cta_demo: { en: "Book a demo", fr: "Réserver une démo" },
    cta_pricing: { en: "See pricing", fr: "Voir les tarifs" },
    node_org: { en: "Organization", fr: "Organisation" },
    node_downtown: { en: "Downtown site", fr: "Site centre-ville" },
    node_east: { en: "East chapter", fr: "Section est" },
    node_youth: { en: "Youth programs", fr: "Programmes jeunesse" },
    node_volunteers_count: { en: "volunteers", fr: "bénévoles" },
    role_full_access: { en: "Org admin, full access", fr: "Admin de l'organisation, accès complet" },
    role_site_manager: { en: "Site manager, Downtown", fr: "Gestionnaire de site, centre-ville" },
    role_scheduler: { en: "Scheduler, read & edit shifts", fr: "Planificateur, lecture et modification des quarts" },
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
      en: "Yes. When you choose the annual billing option on Vome Pro, you receive a 33% discount compared to 12 monthly payments. We also offer additional savings for organizations that require a sizeable number of admin seats, have unique organizational structures, or are looking to partner for longer terms. We do not offer general nonprofit discounts because all of our clients are nonprofits.",
      fr: "Oui. Lorsque vous choisissez la facturation annuelle sur Vome Pro, vous recevez un rabais de 33 % par rapport à 12 paiements mensuels. Nous offrons aussi des économies supplémentaires aux organisations qui ont besoin d'un grand nombre de sièges administratifs, qui ont des structures organisationnelles uniques, ou qui cherchent un partenariat à long terme. Nous n'offrons pas de rabais OBNL généraux puisque tous nos clients sont des organismes à but non lucratif.",
    },

    q_languages: { en: "What languages do you support?", fr: "Quelles langues prenez-vous en charge ?" },
    a_languages: {
      en: "Vome is a bilingual platform, available in both English and French.",
      fr: "Vome est une plateforme bilingue, disponible en anglais et en français.",
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  FOOTER
  // ─────────────────────────────────────────────────────────────────────────
  footer: {
    tagline: { en: "The complete volunteer management software.", fr: "Le logiciel de gestion des bénévoles complet." },
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
    note: { en: "We typically reply within one business day.", fr: "Nous répondons généralement en un jour ouvrable." },
    success_heading: { en: "Message sent", fr: "Message envoyé" },
    success_body: { en: "We typically reply within one business day.", fr: "Nous répondons généralement en un jour ouvrable." },
    success_body_named: { en: "Thanks, {name}. We typically reply within one business day.", fr: "Merci, {name}. Nous répondons généralement en un jour ouvrable." },
    error: { en: "Something went wrong — please try again, or visit our support portal if the issue continues.", fr: "Une erreur s'est produite — veuillez réessayer ou visiter notre portail de soutien si le problème persiste." },
    fr_docs_note: {
      en: "Looking for documentation in French? Email us at hello@vomevolunteer.com and we'll send the French version.",
      fr: "Vous cherchez de la documentation en français ? Écrivez-nous à hello@vomevolunteer.com et nous vous enverrons la version française.",
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
    form_sub: { en: "Fill in the form and we'll get back to you within one business day.", fr: "Remplissez le formulaire et nous vous répondrons en un jour ouvrable." },

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
    note: { en: "We typically reply within one business day.", fr: "Nous répondons généralement en un jour ouvrable." },

    success_heading: { en: "Message sent", fr: "Message envoyé" },
    success_body: { en: "We typically reply within one business day.", fr: "Nous répondons généralement en un jour ouvrable." },
    success_body_named: { en: "Thanks, {name}. We typically reply within one business day.", fr: "Merci, {name}. Nous répondons généralement en un jour ouvrable." },
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
      en: "We typically reply within one business day. If your need is urgent, the fastest path to an answer is our support portal — it usually gets you there faster.",
      fr: "Nous répondons généralement en un jour ouvrable. Si votre besoin est urgent, le chemin le plus rapide vers une réponse est notre portail de soutien — il vous y mène habituellement plus vite.",
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
      en: "Get started with the free plan or upgrade to any of our paid plans for a 30-day free trial!",
      fr: "Commencez avec le forfait gratuit ou passez à l'un de nos forfaits payants pour un essai gratuit de 30 jours !",
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

    plan_recruit: { en: "Recruit", fr: "Recrutement" },
    plan_recruit_sub: { en: "For recruiters that need to collect application forms and manage an onboarding process.", fr: "Pour les recruteurs qui doivent recueillir des candidatures et gérer un processus d'intégration." },
    plan_pro: { en: "Pro", fr: "Pro" },
    plan_pro_sub: { en: "For coordinators that need to manage scheduling, hour tracking and generate reports.", fr: "Pour les coordonnateurs qui doivent gérer la planification, le suivi des heures et produire des rapports." },
    plan_ent: { en: "Enterprise", fr: "Entreprise" },
    plan_ent_sub: { en: "For management teams that need custom database fields and admin role provisioning.", fr: "Pour les équipes de gestion qui ont besoin de champs de base de données personnalisés et de gestion des rôles admin." },
    plan_ult: { en: "Ultimate", fr: "Ultime" },
    plan_ult_sub: { en: "For any team that needs more security features & the ability to integrate Vome with other apps.", fr: "Pour toute équipe qui a besoin de plus de fonctionnalités de sécurité et de la possibilité d'intégrer Vome à d'autres applications." },

    feat_head: { en: "Features include:", fr: "Fonctionnalités incluses :" },
    feat_head_pro: { en: "Everything in Recruit, plus:", fr: "Tout ce qui est dans Recrutement, plus :" },
    feat_head_ent: { en: "Everything in Pro, plus:", fr: "Tout ce qui est dans Pro, plus :" },
    feat_head_ult: { en: "Everything in Enterprise, plus:", fr: "Tout ce qui est dans Entreprise, plus :" },

    rec_b1: { en: "Recruitment page with featured opportunities & access to forms", fr: "Page de recrutement avec opportunités vedettes et accès aux formulaires" },
    rec_b2: { en: "Custom application form, onboarding sequence & recruitment automation workflows", fr: "Formulaire de candidature personnalisé, séquence d'intégration et flux d'automatisation de recrutement" },
    rec_b3: { en: "Manage opportunities & assignments", fr: "Gérez les opportunités et affectations" },
    rec_b4: { en: "Hour tracking via user-generated hour claims", fr: "Suivi des heures via déclarations d'heures par les utilisateurs" },
    rec_b5: { en: "35 default database fields, profile management with notes & document storage (no export)", fr: "35 champs de base de données par défaut, gestion de profils avec notes et stockage de documents (sans exportation)" },
    rec_b6: { en: "Integrated communication tools (email & instant messaging)", fr: "Outils de communication intégrés (courriel et messagerie instantanée)" },

    pro_b1: { en: "Unlimited forms & sequences", fr: "Formulaires et séquences illimités" },
    pro_b2: { en: "Shift management & user reservations", fr: "Gestion des quarts et réservations par les utilisateurs" },
    pro_b3: { en: "Streamline group reservations", fr: "Simplifiez les réservations de groupe" },
    pro_b4: { en: "Advanced hour tracking via Attendance QR Code & Kiosk", fr: "Suivi des heures avancé via code QR de présence et borne" },
    pro_b5: { en: "Unlimited profile tags & database export", fr: "Étiquettes de profil illimitées et exportation de la base de données" },
    pro_b6: { en: "Advanced mass communication tools (email lists, group chats & auto-generated shift chatrooms)", fr: "Outils de communication de masse avancés (listes courriel, conversations de groupe et salons de quart automatiques)" },
    pro_b7: { en: "Mobile app, custom & automated notifications, reminders & updates", fr: "Application mobile, notifications personnalisées et automatiques, rappels et mises à jour" },
    pro_b8: { en: "Canned reports & analytics with advanced filtering and sorting", fr: "Rapports prédéfinis et analyses avec filtrage et tri avancés" },

    ent_b1: { en: "Unlimited custom & dynamic database fields", fr: "Champs de base de données personnalisés et dynamiques illimités" },
    ent_b2: { en: "Import custom field data", fr: "Importation de données de champs personnalisés" },
    ent_b3: { en: "Advanced group management", fr: "Gestion de groupe avancée" },
    ent_b4: { en: "Custom admin roles & permissions", fr: "Rôles et permissions admin personnalisés" },
    ent_b5: { en: "Multi-site segmentation", fr: "Segmentation multi-sites" },
    ent_b6: { en: "Two-Factor Authentication (2FA)", fr: "Authentification à deux facteurs (2FA)" },
    ent_b7: { en: "Map form fields to database fields", fr: "Associer les champs de formulaire à des champs de base de données" },
    ent_b8: { en: "Advanced email customizations", fr: "Personnalisations courriel avancées" },
    ent_b9: { en: "Recognition module with custom awards", fr: "Module de reconnaissance avec prix personnalisés" },

    ult_b1: { en: "API integration & custom webhooks", fr: "Intégration API et webhooks personnalisés" },
    ult_b2: { en: "Automations with Zapier & Power Automate", fr: "Automatisations avec Zapier et Power Automate" },
    ult_b3: { en: "Native integration with Salesforce", fr: "Intégration native avec Salesforce" },
    ult_b4: { en: "SAML & Azure SSO for admins", fr: "SSO SAML et Azure pour les administrateurs" },
    ult_b5: { en: "Tech & operational consulting", fr: "Conseil technique et opérationnel" },

    disclaimer: { en: "*Additional sales tax may apply.", fr: "*Des taxes de vente supplémentaires peuvent s'appliquer." },

    comp_h2: { en: "Feature comparison by plan", fr: "Comparaison des fonctionnalités par forfait" },
    comp_th_plans: { en: "Plans", fr: "Forfaits" },
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
    rc_page_d: { en: "Build a volunteer recruitment page featuring volunteer opportunities and application forms.", fr: "Bâtissez une page de recrutement présentant des opportunités et formulaires de candidature." },
    rc_opps_n: { en: "Feature volunteer opportunities", fr: "Mettez en avant des opportunités de bénévolat" },
    rc_opps_d: { en: "Build volunteer opportunities structured by activity, role, or anything you want.", fr: "Construisez des opportunités structurées par activité, rôle ou tout ce que vous voulez." },
    rc_group_n: { en: "Group opportunities by category", fr: "Regroupez les opportunités par catégorie" },
    rc_group_d: { en: "Group your opportunities by location, program, event, department, or whatever works best for you.", fr: "Regroupez vos opportunités par lieu, programme, événement, département ou ce qui vous convient le mieux." },
    rc_dash_n: { en: "Access to opportunity dashboards", fr: "Accès aux tableaux de bord d'opportunité" },
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
    on_seq_n: { en: "Build onboarding sequences to manage your entire screening process", fr: "Construisez des séquences d'intégration pour gérer tout votre processus de sélection" },
    on_seq_d: { en: "Build step-by-step onboarding processes for volunteers to complete, with optional visibility for the volunteer.", fr: "Construisez des processus d'intégration étape par étape pour les bénévoles, avec visibilité optionnelle pour le bénévole." },
    on_int_n: { en: "Manage interviews, orientation & training sessions for opportunities", fr: "Gérez entrevues, orientations et sessions de formation pour les opportunités" },
    on_int_d: { en: "Build a screening checklist to use across your opportunities to stay on track about who completed what.", fr: "Bâtissez une liste de sélection à utiliser à travers vos opportunités pour suivre qui a complété quoi." },
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
    hr_kiosk_n: { en: "On-site Attendance Kiosk", fr: "Borne de présence sur place" },
    hr_kiosk_d: { en: "Customize unlimited on-site attendance kiosks to let volunteers self check-in/out from any device (tablet, computer, smartphone).", fr: "Personnalisez un nombre illimité de bornes de présence sur place pour permettre aux bénévoles de se pointer depuis tout appareil (tablette, ordinateur, téléphone)." },
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
    da_fields_n: { en: "Unlimited custom & dynamic database fields", fr: "Champs de base de données personnalisés et dynamiques illimités" },
    da_fields_d: { en: "Choose from various field types (lists, dates, attachments, links, etc.) when creating custom database fields.", fr: "Choisissez parmi divers types de champs (listes, dates, pièces jointes, liens, etc.) lors de la création de champs personnalisés." },
    da_tags_n: { en: "Profile tags", fr: "Étiquettes de profil" },
    da_tags_d: { en: "Group volunteers in your database by anything you want — great for bulk actions like emails or shift assignments.", fr: "Regroupez les bénévoles dans votre base de données comme vous le souhaitez — parfait pour les actions en lot comme les courriels ou les affectations de quart." },
    da_groups_n: { en: "Advanced group management", fr: "Gestion de groupe avancée" },
    da_groups_d: { en: "Unlock the Groups module to associate group reservations to dedicated groups for cleaner workflows and analytics.", fr: "Débloquez le module Groupes pour associer les réservations de groupe à des groupes dédiés, pour des flux et analyses plus propres." },
    da_filter_n: { en: "Filtering, sorting & exporting", fr: "Filtrage, tri et exportation" },
    da_filter_d: { en: "Use filters and sorting to get the data you need quickly, plus export everything to Excel at any time.", fr: "Utilisez filtres et tri pour obtenir rapidement les données voulues, et exportez tout vers Excel en tout temps." },
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

    // Comparison rows — recognition
    re_ach_n: { en: "Achievements", fr: "Accomplissements" },
    re_ach_d: { en: "Give volunteers automatic achievements based on their progress — hours logged, shifts completed, and more.", fr: "Attribuez aux bénévoles des accomplissements automatiques selon leur progression — heures consignées, quarts complétés et plus." },
    re_aw_n: { en: "Custom awards", fr: "Prix personnalisés" },
    re_aw_d: { en: "Create custom awards and badges to recognize volunteers for milestones, contributions, or special moments.", fr: "Créez des prix et badges personnalisés pour reconnaître les bénévoles pour leurs jalons, contributions ou moments spéciaux." },

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
    th_shift: { en: "Shift", fr: "Quart" },
    th_method: { en: "Method", fr: "Méthode" },
    th_hours: { en: "Hours", fr: "Heures" },
    shift_food_bank: { en: "Food Bank · Apr 14", fr: "Banque alim. · 14 avr." },
    shift_hospital: { en: "Hospital · Apr 14", fr: "Hôpital · 14 avr." },
    shift_mentorship: { en: "Mentorship · Apr 10", fr: "Mentorat · 10 avr." },
    shift_community_day: { en: "Group · Community Day", fr: "Groupe · Journée communautaire" },
    pill_qr: { en: "QR", fr: "QR" },
    pill_kiosk: { en: "Kiosk", fr: "Borne" },
    pill_claim: { en: "Claim", fr: "Décl." },
    pill_tap: { en: "Tap", fr: "Tape" },
    pill_auto: { en: "Auto", fr: "Auto" },
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
