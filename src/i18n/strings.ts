/**
 * Central i18n strings for the marketing site.
 *
 * Shape: every top-level key is a section or shared namespace. Each leaf
 * is keyed by locale (`en`, `fr`). Pages pass the current locale into
 * <Layout /> and section components either import this file directly or
 * receive the strings they need as props.
 *
 * Add new strings here, not in components. When you add a new key, fill in
 * both `en` and `fr` — missing `fr` falls back to `en` at runtime via t().
 *
 * Source of FR translations so far: vome-react/src/translations/landingpage.js
 * (FAQ + testimonials blocks). Other sections are English-only until the
 * French copy lands.
 */

export type Locale = "en" | "fr";

export const LOCALES: readonly Locale[] = ["en", "fr"] as const;
export const DEFAULT_LOCALE: Locale = "en";

export const strings = {
  // ---------- Shared ----------
  common: {
    language_switcher_en: { en: "English", fr: "Anglais" },
    language_switcher_fr: { en: "Français", fr: "Français" },
  },

  // ---------- Nav ----------
  nav: {
    features: { en: "Features", fr: "Fonctionnalités" },
    plans: { en: "Plans", fr: "Forfaits" },
    about: { en: "About", fr: "À propos" },
    contact: { en: "Contact", fr: "Contact" },
    login: { en: "Login", fr: "Connexion" },
    book_demo: { en: "Book a demo", fr: "Réserver une démo" },
    signup_free: { en: "Sign up for Free", fr: "S'inscrire gratuitement" },
  },

  // ---------- Hero ----------
  hero: {
    eyebrow: { en: "4.6 ★ on Capterra, GetApp & G2", fr: "4,6 ★ sur Capterra, GetApp et G2" },
    headline_part_1: { en: "The volunteer management software your", fr: "Le logiciel de gestion des bénévoles que vos" },
    headline_accent: { en: "volunteers and staff", fr: "bénévoles et votre personnel" },
    headline_part_2: { en: "actually want to use", fr: "veulent vraiment utiliser" },
    sub: {
      en: "From a single coordinator to teams running programs across multiple sites, Vome automates the manual work behind onboarding, scheduling, and communication. All in one platform, with unlimited volunteers on every plan.",
      fr: "Du coordinateur unique aux équipes gérant des programmes sur plusieurs sites, Vome automatise le travail manuel derrière l'intégration, la planification et la communication. Tout sur une seule plateforme, avec un nombre illimité de bénévoles sur tous les forfaits.",
    },
    cta_primary: { en: "Sign up for Free", fr: "S'inscrire gratuitement" },
    cta_secondary: { en: "Book a demo", fr: "Réserver une démo" },
    meta_free_plan: { en: "Free plan + 30-day trials on paid", fr: "Forfait gratuit + essai 30 jours sur payant" },
    meta_setup: { en: "Set up in minutes", fr: "Prêt en quelques minutes" },
    meta_compliance: { en: "HIPAA, GDPR & SOC 2", fr: "HIPAA, RGPD et SOC 2" },
  },

  // ---------- Partners ----------
  partners: {
    eyebrow: { en: "Trusted by 1000+ amazing organizations", fr: "La confiance de 1000+ organisations extraordinaires" },
  },

  // ---------- Testimonials ----------
  // Quote/title pairs ported from vome-react/translations/landingpage.js.
  testimonials: {
    header_part_1: { en: "See what our customers", fr: "Voyez ce que disent" },
    header_accent: { en: "are saying", fr: "nos clients" },
    sub: {
      en: "From hospital systems to national nonprofits, thousands of coordinators trust Vome to manage their volunteers.",
      fr: "Des systèmes hospitaliers aux organismes à but non lucratif nationaux, des milliers de coordonnateurs font confiance à Vome pour gérer leurs bénévoles.",
    },
    gia_quote: {
      en: "Loving Vome. Definitely has been a huge help. It has been so much easier keeping track of hours and who we have on our team of volunteers using this technology. During our busiest time, Vome has helped our center streamline applications. So glad we made the change!",
      fr: "J'adore Vome. Cette technologie nous aide énormément. Il est tellement plus facile de suivre les heures et de savoir qui fait partie de notre équipe de bénévoles. Pendant nos périodes les plus chargées, Vome a aidé notre centre à rationaliser les candidatures. Nous sommes ravis d'avoir fait ce changement !",
    },
    gia_title: {
      en: "Director of Day Program Services, Long Island Alzheimer's & Dementia Center",
      fr: "Directrice des services du programme de jour, Long Island Alzheimer's & Dementia Center",
    },
    kate_quote: {
      en: "Implementing Vome has revolutionized our volunteer management operations at the Ronald McDonald House Charities of Columbia, SC. The automated scheduling system is a standout feature, saving us significant time and reducing errors. Our volunteers appreciate the flexibility and ease of being able to schedule shifts, which has led to a notable 55% increase in participation and significant improvements in retention.",
      fr: "La mise en œuvre de Vome a révolutionné nos opérations de gestion des bénévoles à la Ronald McDonald House Charities de Columbia, SC. Le système de planification automatisé est une caractéristique remarquable qui nous a permis de gagner beaucoup de temps et de réduire les erreurs. Nos bénévoles apprécient la flexibilité et la facilité avec lesquelles ils peuvent planifier leurs quarts, ce qui a mené à une augmentation notable de 55 % de la participation.",
    },
    kate_title: {
      en: "Marketing & Communications Manager, RMHC Columbia SC",
      fr: "Responsable du marketing et de la communication, RMHC Columbia SC",
    },
    elizabeth_quote: {
      en: "Vome has been saving me a lot of time managing volunteers across my programs. It offers a robust set of tools that make it simple to recruit and onboard new volunteers, while also providing the functionality needed to communicate with them. They made our transition straightforward, respond to my questions immediately, and incorporate feedback into the platform in record time.",
      fr: "Vome m'a permis de gagner beaucoup de temps dans la gestion des bénévoles de mes programmes. Il offre un ensemble d'outils robustes qui facilitent le recrutement et l'intégration de nouveaux bénévoles, tout en fournissant les fonctionnalités nécessaires pour communiquer avec eux. Ils ont facilité notre transition et répondent immédiatement à mes questions.",
    },
    elizabeth_title: {
      en: "Manager, Volunteer & Guest Services",
      fr: "Responsable du service des bénévoles et des invités",
    },
    jessica_quote: {
      en: "I like that I can search for particular volunteers and track their shifts. I love that we can get a quick total of all volunteers and their hours. Customer service is the best — I usually hear right back if not by the next day. And Vome is always trying to improve.",
      fr: "J'aime le fait que je puisse rechercher des bénévoles particuliers et suivre leurs affectations. J'aime que nous puissions obtenir rapidement le total de tous les bénévoles et de leurs heures. Le service clientèle est le meilleur — je reçois généralement une réponse immédiate, si ce n'est le lendemain.",
    },
    jessica_title: { en: "Community Engagement Manager", fr: "Gestionnaire de l'engagement communautaire" },
    wesley_quote: {
      en: "The ease of doing reports is faaaar better than our previous platform. I have zero issues creating volunteer reports for our team.",
      fr: "La facilité d'élaboration des rapports est nettement supérieure à celle de notre plateforme précédente. Je n'ai aucun problème à créer des rapports sur les bénévoles pour notre équipe.",
    },
    wesley_title: { en: "Volunteer Engagement Manager", fr: "Gestionnaire de l'engagement des bénévoles" },
    deidre_quote: {
      en: "The database is easy to use. I can quickly get the monthly total hours of volunteering and it is incredibly easy to speak with their team. They are also constantly improving.",
      fr: "La base de données est facile à utiliser. Je peux rapidement obtenir le nombre total d'heures de bénévolat par mois et il est incroyablement facile de parler à leur équipe. Ils s'améliorent aussi constamment.",
    },
    deidre_title: { en: "Volunteer & Donations Coordinator", fr: "Coordonnatrice des bénévoles et des dons" },
  },

  // ---------- FAQ ----------
  // Questions/answers ported from vome-react/translations/landingpage.js.
  faq: {
    header: { en: "Frequently asked questions", fr: "Foire aux questions" },
    sub: { en: "Everything coordinators ask before switching to Vome.", fr: "Tout ce que les coordonnateurs demandent avant de passer à Vome." },
    cta: { en: "Still have questions?", fr: "Encore des questions ?" },
    cta_link: { en: "Talk to our team →", fr: "Parlez à notre équipe →" },
    // Questions + answers: see FR text in landingpage.js (lp_quest_one etc. + question_pricing_*).
  },

  // ---------- Closing CTA ----------
  cta: {
    headline: { en: "Ready to see it in action, or want a walk-through with our team?", fr: "Prêt à voir Vome en action ou à programmer une démonstration avec notre équipe ?" },
    sub: {
      en: "Sign up for free or schedule a demo to see why thousands of volunteer managers and coordinators are choosing Vome.",
      fr: "Inscrivez-vous gratuitement ou réservez une démo pour voir pourquoi des milliers de gestionnaires de bénévoles choisissent Vome.",
    },
    primary: { en: "Start for free", fr: "Commencer gratuitement" },
    secondary: { en: "Schedule a demo", fr: "Réserver une démo" },
  },

  // ---------- Footer ----------
  footer: {
    tagline: { en: "Volunteer management software your team will actually use.", fr: "Le logiciel de gestion des bénévoles que votre équipe utilisera vraiment." },
    col_features: { en: "Features", fr: "Fonctionnalités" },
    col_software: { en: "Software", fr: "Logiciel" },
    col_about: { en: "About Vome", fr: "À propos de Vome" },
    col_resources: { en: "Resources", fr: "Ressources" },
    address: { en: "9145 Rue Boivin Suite, Montreal, Quebec H8R 2E5, Canada", fr: "9145 Rue Boivin Suite, Montréal, Québec H8R 2E5, Canada" },
  },
} as const;

/**
 * Read a string value for the current locale.
 * Falls back to English if the French translation is missing or empty.
 */
export function t(
  entry: { en: string; fr: string } | { en: string; fr?: string },
  locale: Locale,
): string {
  if (locale === "fr") {
    const fr = (entry as { fr?: string }).fr;
    return fr && fr.length > 0 ? fr : entry.en;
  }
  return entry.en;
}
