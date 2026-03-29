import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Casino | Guides, Stratégies et Actualités",
  description:
    "Articles et guides experts sur les casinos en ligne : stratégies, bonus, légalité, paiements et conseils pour les joueurs français en 2026.",
};

const articles = [
  {
    slug: "choisir-casino-en-ligne-fiable",
    title: "Comment choisir un casino en ligne fiable en 2026 ?",
    excerpt:
      "Les critères essentiels pour identifier un casino sécurisé : licence, service client, retraits et avis des joueurs.",
    image: "Loupe examinant un écran d\u0027ordinateur affichant un casino en ligne avec des badges de sécurité",
    imageAlt: "Loupe sur un écran de casino en ligne fiable avec badges de sécurité et licence vérifiée",
  },
  {
    slug: "comprendre-conditions-mise-wagering",
    title: "Comprendre les conditions de mise (Wagering) avant d\u0027accepter un bonus",
    excerpt:
      "Tout ce que vous devez savoir sur le wagering : calcul, pièges à éviter et comment trouver les meilleures offres.",
    image: "Calculatrice avec des jetons de casino et un document de conditions générales déroulé",
    imageAlt: "Calculatrice et jetons de casino illustrant le calcul des conditions de mise wagering",
  },
  {
    slug: "jouer-vpn-legal-securise",
    title: "Jouer avec un VPN : Est-ce légal et sécurisé pour les joueurs français ?",
    excerpt:
      "Analyse complète de l\u0027utilisation d\u0027un VPN sur les casinos en ligne : risques, légalité et alternatives.",
    image: "Cadenas numérique avec un bouclier VPN et le drapeau français en arrière-plan",
    imageAlt: "Cadenas VPN avec drapeau français symbolisant la sécurité et la légalité du jeu en ligne",
  },
  {
    slug: "crypto-casino-vs-traditionnel",
    title: "Crypto Casino vs Casino Traditionnel : Lequel choisir ?",
    excerpt:
      "Comparaison détaillée entre les crypto-casinos et les casinos classiques : avantages, inconvénients et sécurité.",
    image: "Bitcoin doré et cartes de crédit classiques face à face sur une table de casino verte",
    imageAlt: "Bitcoin versus cartes bancaires sur table de casino comparant crypto casino et casino traditionnel",
  },
  {
    slug: "strategies-roulette-en-ligne",
    title: "Les 5 meilleures stratégies pour la Roulette en ligne",
    excerpt:
      "Découvrez les stratégies les plus populaires pour maximiser vos chances à la roulette : Martingale, Fibonacci et plus.",
    image: "Roue de roulette européenne en rotation avec des jetons colorés disposés sur le tapis de jeu",
    imageAlt: "Roue de roulette européenne avec jetons illustrant les stratégies de mise",
  },
  {
    slug: "casino-en-direct-live",
    title: "Casino en direct (Live Casino) : L\u0027expérience ultime avec croupier",
    excerpt:
      "Guide complet du casino en direct : comment ça fonctionne, les meilleurs jeux et les studios leaders.",
    image: "Croupière professionnelle en direct derrière une table de blackjack filmée en studio HD",
    imageAlt: "Croupière en direct à une table de blackjack live casino en studio professionnel",
  },
  {
    slug: "licences-casino-expliquees",
    title: "Les licences de casino expliquées : Curaçao, MGA, et ANJ",
    excerpt:
      "Comprendre les différentes licences de casino et ce qu\u0027elles signifient pour votre sécurité en tant que joueur.",
    image: "Trois certificats de licence officielle (Curaçao, Malte, France) disposés sur un bureau",
    imageAlt: "Certificats de licence casino Curaçao MGA et ANJ pour la sécurité des joueurs",
  },
  {
    slug: "gerer-bankroll-jeu-responsable",
    title: "Gérer sa bankroll : Conseils pour jouer au casino de manière responsable",
    excerpt:
      "Stratégies de gestion de bankroll pour protéger vos finances et profiter du jeu en ligne sans stress.",
    image: "Portefeuille ouvert avec des billets et un graphique de budget à côté de jetons de casino",
    imageAlt: "Gestion de bankroll casino avec portefeuille billets et graphique de budget responsable",
  },
  {
    slug: "machines-sous-meilleur-rtp",
    title: "Les machines à sous avec le meilleur taux de retour (RTP) cette année",
    excerpt:
      "Classement des slots avec les meilleurs RTP en 2026 et comment choisir les jeux les plus rentables.",
    image: "Machine à sous numérique affichant un pourcentage RTP de 98% avec des pièces dorées",
    imageAlt: "Machine à sous avec affichage RTP élevé et pièces dorées pour les meilleurs taux de retour",
  },
  {
    slug: "casinos-refusent-retraits",
    title: "Pourquoi certains casinos refusent-ils les retraits ? Comment l\u0027éviter",
    excerpt:
      "Les raisons courantes des retraits refusés et nos conseils pour toujours recevoir vos gains sans problème.",
    image: "Panneau d\u0027avertissement rouge devant un écran de retrait refusé sur un casino en ligne",
    imageAlt: "Avertissement retrait refusé casino en ligne avec conseils pour éviter les problèmes",
  },
  {
    slug: "blackjack-en-ligne-guide-complet",
    title: "Blackjack en Ligne : Guide Complet et Stratégies",
    excerpt:
      "Règles, stratégie de base, variantes et conseils pour maîtriser le blackjack en ligne comme un pro.",
    image: "Main de blackjack avec un As et un Roi sur un tapis vert avec des jetons empilés",
    imageAlt: "Main gagnante de blackjack As et Roi sur tapis vert casino en ligne",
  },
  {
    slug: "casino-mobile-applications",
    title: "Casino Mobile : Les Meilleures Applications 2026",
    excerpt:
      "Comparatif des meilleures apps casino sur iOS et Android : performance, catalogue de jeux et bonus exclusifs.",
    image: "Smartphone affichant une interface de casino en ligne avec des machines à sous colorées",
    imageAlt: "Application casino mobile sur smartphone avec machines à sous et interface moderne",
  },
  {
    slug: "jackpots-progressifs-comment-gagner",
    title: "Jackpots Progressifs : Comment Fonctionnent-ils ?",
    excerpt:
      "Découvrez le fonctionnement des jackpots progressifs, les plus gros gains de l\u0027histoire et les meilleures slots.",
    image: "Compteur de jackpot progressif affichant des millions d\u0027euros avec des confettis dorés",
    imageAlt: "Compteur jackpot progressif millions euros casino en ligne avec confettis de victoire",
  },
  {
    slug: "baccarat-en-ligne-regles-strategies",
    title: "Baccarat en Ligne : Règles et Stratégies Gagnantes",
    excerpt:
      "Guide complet du baccarat : règles Punto Banco, troisième carte, avantage maison et stratégies de mise.",
    image: "Table de baccarat élégante avec des cartes retournées et des jetons haut de gamme",
    imageAlt: "Table de baccarat en ligne avec cartes et jetons illustrant les règles et stratégies",
  },
  {
    slug: "tournaments-casino-en-ligne",
    title: "Tournois de Casino en Ligne : Guide pour Gagner",
    excerpt:
      "Types de tournois, systèmes de points, stratégies gagnantes et comment trouver les meilleurs freerolls.",
    image: "Trophée doré sur un podium entouré de machines à sous et d\u0027un classement de joueurs",
    imageAlt: "Trophée de tournoi casino en ligne avec classement et machines à sous",
  },
  {
    slug: "addiction-jeux-reconnaitre-agir",
    title: "Addiction aux Jeux : Reconnaître les Signes et Agir",
    excerpt:
      "Les signes d\u0027alerte de l\u0027addiction, les outils d\u0027auto-exclusion et les ressources d\u0027aide en France.",
    image: "Main tendue offrant de l\u0027aide avec un téléphone affichant le numéro 09 74 75 13 13",
    imageAlt: "Aide contre addiction aux jeux avec numéro d\u0027assistance et main tendue symbolisant le soutien",
  },
  {
    slug: "fiscalite-gains-casino-france",
    title: "Fiscalité des Gains Casino en France : Guide 2026",
    excerpt:
      "Tout sur l\u0027imposition des gains de casino en France : seuils, CSG/CRDS, crypto et déclarations fiscales.",
    image: "Formulaire fiscal français avec des jetons de casino et une calculatrice sur un bureau",
    imageAlt: "Fiscalité gains casino France avec formulaire d\u0027impôt jetons et calculatrice",
  },
  {
    slug: "slots-volatilite-haute-vs-basse",
    title: "Slots Haute vs Basse Volatilité : Quel Choix ?",
    excerpt:
      "Comprendre la volatilité des machines à sous et choisir le niveau adapté à votre bankroll et style de jeu.",
    image: "Deux machines à sous côte à côte : l\u0027une avec des petits gains fréquents, l\u0027autre avec un mega win rare",
    imageAlt: "Comparaison volatilité slots haute et basse avec gains fréquents versus mega win",
  },
  {
    slug: "meilleurs-jeux-table-casino",
    title: "Les Meilleurs Jeux de Table Casino en Ligne 2026",
    excerpt:
      "Blackjack, roulette, baccarat, poker, craps : comparatif des jeux de table avec les meilleures cotes.",
    image: "Vue plongeante sur plusieurs tables de casino avec roulette blackjack et baccarat en action",
    imageAlt: "Tables de casino en ligne roulette blackjack baccarat vue d\u0027ensemble des meilleurs jeux",
  },
  {
    slug: "programme-affiliation-casino",
    title: "Programmes d\u0027Affiliation Casino : Comment Gagner",
    excerpt:
      "Revenue Share, CPA, modèles hybrides : guide complet pour monétiser un site avec l\u0027affiliation casino.",
    image: "Écran d\u0027ordinateur avec des graphiques de revenus d\u0027affiliation et un tableau de bord marketing",
    imageAlt: "Dashboard affiliation casino avec graphiques revenus et statistiques de performance",
  },
];

export default function BlogIndex() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Blog — Guides et Conseils Casino
      </h1>
      <p className="text-muted mb-10 text-lg">
        Articles experts pour les joueurs fran&ccedil;ais : strat&eacute;gies,
        l&eacute;galit&eacute;, bonus et actualit&eacute;s du monde des casinos
        en ligne.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="block bg-card-bg border border-card-border rounded-lg overflow-hidden hover:border-gold transition-colors no-underline group"
          >
            {/* Image placeholder */}
            <div className="bg-section-bg h-44 flex items-center justify-center px-4">
              <p className="text-muted text-xs text-center italic leading-relaxed">
                [Image : {article.image}. Alt text : {article.imageAlt}]
              </p>
            </div>

            <div className="p-5">
              <h2 className="text-lg font-bold text-gold-light group-hover:text-gold mb-2 leading-snug">
                {article.title}
              </h2>
              <p className="text-muted text-sm">{article.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
