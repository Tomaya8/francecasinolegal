import type { MetadataRoute } from "next";

const BASE = "https://francecasinolegal.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const corePages = [
    "",
    "/legalite-regulations",
    "/fournisseurs-logiciels",
    "/solutions-paiement",
    "/types-de-bonus",
    "/blog",
  ];

  const regulationPages = [
    "/legalite-regulations/anj-france",
    "/legalite-regulations/mga-malte",
    "/legalite-regulations/curacao",
    "/legalite-regulations/kahnawake",
  ];

  const providerPages = [
    "/fournisseurs-logiciels/evolution-gaming",
    "/fournisseurs-logiciels/pragmatic-play",
    "/fournisseurs-logiciels/netent",
    "/fournisseurs-logiciels/playn-go",
    "/fournisseurs-logiciels/microgaming",
    "/fournisseurs-logiciels/yggdrasil",
  ];

  const bonusPages = [
    "/types-de-bonus/bonus-bienvenue",
    "/types-de-bonus/bonus-sans-depot",
    "/types-de-bonus/tours-gratuits",
    "/types-de-bonus/cashback",
    "/types-de-bonus/programme-vip",
    "/types-de-bonus/bonus-rechargement",
  ];

  const blogPosts = [
    "/blog/choisir-casino-en-ligne-fiable",
    "/blog/comprendre-conditions-mise-wagering",
    "/blog/jouer-vpn-legal-securise",
    "/blog/crypto-casino-vs-traditionnel",
    "/blog/strategies-roulette-en-ligne",
    "/blog/casino-en-direct-live",
    "/blog/licences-casino-expliquees",
    "/blog/gerer-bankroll-jeu-responsable",
    "/blog/machines-sous-meilleur-rtp",
    "/blog/casinos-refusent-retraits",
    "/blog/blackjack-en-ligne-guide-complet",
    "/blog/casino-mobile-applications",
    "/blog/jackpots-progressifs-comment-gagner",
    "/blog/baccarat-en-ligne-regles-strategies",
    "/blog/tournaments-casino-en-ligne",
    "/blog/addiction-jeux-reconnaitre-agir",
    "/blog/fiscalite-gains-casino-france",
    "/blog/slots-volatilite-haute-vs-basse",
    "/blog/meilleurs-jeux-table-casino",
    "/blog/programme-affiliation-casino",
  ];

  return [
    ...corePages.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.9,
    })),
    ...regulationPages.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...providerPages.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...bonusPages.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogPosts.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
