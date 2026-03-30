import type { Metadata } from "next";
import Link from "next/link";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "Casinos en Ligne Légaux pour les Joueurs Français",
  description:
    "Comparez les meilleurs casinos en ligne légaux et sécurisés pour les joueurs français. Bonus, régulations ANJ, guides et comparatifs 2026.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-card-bg to-background py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Votre Guide des Casinos en Ligne Légaux en France
          </h1>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
            Découvrez les plateformes fiables, comparez les bonus et comprenez
            la réglementation française des jeux en ligne. Des informations
            indépendantes et à jour pour jouer en toute sécurité en 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/legalite-regulations"
              className="bg-gold text-background font-semibold px-6 py-3 rounded-lg hover:bg-gold-light transition-colors no-underline"
            >
              Comprendre la Légalité
            </Link>
            <Link
              href="/types-de-bonus"
              className="border border-gold text-gold font-semibold px-6 py-3 rounded-lg hover:bg-gold hover:text-background transition-colors no-underline"
            >
              Voir les Bonus
            </Link>
          </div>
        </div>
      </section>

      {/* Image placeholder */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-section-bg border border-card-border rounded-lg p-8 -mt-8 mb-12 text-center text-muted text-sm italic">
          [Image : Bannière d&apos;accueil montrant une table de roulette
          élégante avec des jetons dorés. Alt text : Casino en ligne légal en
          France — table de roulette avec jetons dorés]
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 pb-12">
        {/* Intro */}
        <p className="text-lg leading-relaxed mb-6">
          Bienvenue sur <strong>francecasinolegal.com</strong>, votre référence
          indépendante pour tout ce qui concerne les casinos en ligne accessibles
          aux joueurs français. Notre mission est simple : vous fournir des
          informations fiables, transparentes et à jour pour que vous puissiez
          jouer en toute confiance.
        </p>

        <p className="leading-relaxed mb-6">
          Le marché des casinos en ligne évolue rapidement. Entre les
          plateformes régulées par l&apos;Autorité Nationale des Jeux (ANJ), les
          casinos offshore sous licence MGA ou Curaçao, et les nouvelles
          tendances comme les crypto-casinos, il est facile de se perdre.
          C&apos;est pourquoi nous analysons chaque aspect du jeu en ligne : la
          légalité, les bonus, les méthodes de paiement, les fournisseurs de
          logiciels et les meilleures stratégies.
        </p>

        <p className="leading-relaxed mb-8">
          Que vous soyez un joueur débutant cherchant à comprendre les bases ou
          un joueur expérimenté à la recherche du meilleur rapport
          bonus/conditions de mise, nos guides détaillés vous accompagnent à
          chaque étape. Nous ne sommes affiliés à aucun opérateur en
          particulier : notre seul objectif est votre sécurité et votre
          satisfaction.
        </p>

        {/* Top casinos comparison */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Comparatif des Meilleurs Casinos en Ligne pour la France — 2026
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg text-gold">
                <th className="border border-card-border px-4 py-3 text-left">
                  Casino
                </th>
                <th className="border border-card-border px-4 py-3 text-left">
                  Licence
                </th>
                <th className="border border-card-border px-4 py-3 text-left">
                  Bonus de Bienvenue
                </th>
                <th className="border border-card-border px-4 py-3 text-left">
                  Wagering
                </th>
                <th className="border border-card-border px-4 py-3 text-left">
                  Retrait Min.
                </th>
              </tr>
            </thead>
            <tbody className="text-foreground">
              <tr className="bg-section-bg">
                <td className="border border-card-border px-4 py-3 font-medium">
                  Casino A
                </td>
                <td className="border border-card-border px-4 py-3">MGA</td>
                <td className="border border-card-border px-4 py-3">
                  100 % jusqu&apos;à 500 &euro;
                </td>
                <td className="border border-card-border px-4 py-3">x30</td>
                <td className="border border-card-border px-4 py-3">
                  20 &euro;
                </td>
              </tr>
              <tr>
                <td className="border border-card-border px-4 py-3 font-medium">
                  Casino B
                </td>
                <td className="border border-card-border px-4 py-3">
                  Curaçao
                </td>
                <td className="border border-card-border px-4 py-3">
                  200 % jusqu&apos;à 1 000 &euro;
                </td>
                <td className="border border-card-border px-4 py-3">x35</td>
                <td className="border border-card-border px-4 py-3">
                  10 &euro;
                </td>
              </tr>
              <tr className="bg-section-bg">
                <td className="border border-card-border px-4 py-3 font-medium">
                  Casino C
                </td>
                <td className="border border-card-border px-4 py-3">MGA</td>
                <td className="border border-card-border px-4 py-3">
                  150 % + 100 tours gratuits
                </td>
                <td className="border border-card-border px-4 py-3">x25</td>
                <td className="border border-card-border px-4 py-3">
                  20 &euro;
                </td>
              </tr>
              <tr>
                <td className="border border-card-border px-4 py-3 font-medium">
                  Casino D
                </td>
                <td className="border border-card-border px-4 py-3">
                  Curaçao
                </td>
                <td className="border border-card-border px-4 py-3">
                  500 % jusqu&apos;à 500 &euro;
                </td>
                <td className="border border-card-border px-4 py-3">x40</td>
                <td className="border border-card-border px-4 py-3">
                  30 &euro;
                </td>
              </tr>
              <tr className="bg-section-bg">
                <td className="border border-card-border px-4 py-3 font-medium">
                  Casino E
                </td>
                <td className="border border-card-border px-4 py-3">
                  MGA + Curaçao
                </td>
                <td className="border border-card-border px-4 py-3">
                  100 % + 50 tours gratuits
                </td>
                <td className="border border-card-border px-4 py-3">x30</td>
                <td className="border border-card-border px-4 py-3">
                  20 &euro;
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted text-sm mb-8 italic">
          * Les noms des casinos seront mis à jour avec les partenaires
          affiliés. Les conditions des bonus sont sujettes à modification.
        </p>

        {/* Why francecasinolegal */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Pourquoi Faire Confiance à FranceCasinoLegal ?
        </h2>

        <p className="leading-relaxed mb-4">
          Notre équipe d&apos;experts analyse minutieusement chaque casino avant
          de le recommander. Nous évaluons la fiabilité de la licence, la
          qualité du service client, la rapidité des retraits, l&apos;équité des
          conditions de bonus et la diversité du catalogue de jeux. Seuls les
          casinos répondant à nos critères stricts figurent sur notre site.
        </p>

        <p className="leading-relaxed mb-8">
          Nous mettons également l&apos;accent sur le jeu responsable. Chaque
          guide inclut des rappels sur les risques liés aux jeux d&apos;argent
          et des ressources pour les joueurs en difficulté. Jouer doit rester un
          divertissement, jamais une source de stress financier.
        </p>

        {/* Pros & Cons */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Avantages et Inconvénients des Casinos en Ligne
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-section-bg border border-card-border rounded-lg p-6">
            <h3 className="text-lg font-bold text-accent-green mb-3">
              Avantages
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent-green mt-0.5">&#10003;</span>
                Accessibles 24h/24 depuis n&apos;importe quel appareil
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-green mt-0.5">&#10003;</span>
                Bonus généreux et programmes de fidélité attractifs
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-green mt-0.5">&#10003;</span>
                Des milliers de jeux disponibles (slots, table, live)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-green mt-0.5">&#10003;</span>
                Possibilité de jouer gratuitement en mode démo
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-green mt-0.5">&#10003;</span>
                Taux de retour (RTP) souvent supérieurs aux casinos terrestres
              </li>
            </ul>
          </div>

          <div className="bg-section-bg border border-card-border rounded-lg p-6">
            <h3 className="text-lg font-bold text-accent-red mb-3">
              Inconvénients
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent-red mt-0.5">&#10007;</span>
                Risque d&apos;addiction accru par l&apos;accessibilité
                permanente
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-red mt-0.5">&#10007;</span>
                Conditions de mise parfois complexes et défavorables
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-red mt-0.5">&#10007;</span>
                Délais de retrait variables selon la méthode choisie
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-red mt-0.5">&#10007;</span>
                Manque d&apos;interaction sociale par rapport au casino physique
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-red mt-0.5">&#10007;</span>
                Nécessité de vérifier la fiabilité de chaque plateforme
              </li>
            </ul>
          </div>
        </div>

        {/* Core pages links */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Explorez Nos Guides Complets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {[
            {
              href: "/legalite-regulations",
              title: "Légalité & Régulations",
              desc: "Comprenez le cadre juridique français, le rôle de l'ANJ et les licences offshore.",
            },
            {
              href: "/fournisseurs-logiciels",
              title: "Fournisseurs de Logiciels",
              desc: "Découvrez les studios qui créent vos jeux préférés : Evolution, Pragmatic Play, NetEnt...",
            },
            {
              href: "/solutions-paiement",
              title: "Solutions de Paiement",
              desc: "Comparez les méthodes de dépôt et retrait : crypto, Visa, Neosurf, virement...",
            },
            {
              href: "/types-de-bonus",
              title: "Types de Bonus",
              desc: "Bonus de bienvenue, tours gratuits, cashback — tout savoir sur les offres casino.",
            },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="bg-card-bg border border-card-border rounded-lg p-5 hover:border-gold transition-colors no-underline group"
            >
              <h3 className="text-lg font-bold text-gold-light group-hover:text-gold mb-2">
                {card.title}
              </h3>
              <p className="text-muted text-sm">{card.desc}</p>
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold mt-12 mb-6">
          FAQ — Questions Fréquentes
        </h2>

        <div className="space-y-6 mb-8">
          <details className="bg-section-bg border border-card-border rounded-lg p-5 group">
            <summary className="font-semibold cursor-pointer text-gold-light group-open:mb-3">
              Les casinos en ligne sont-ils légaux en France ?
            </summary>
            <p className="text-sm leading-relaxed">
              En France, seuls les paris sportifs, hippiques et le poker en
              ligne sont autorisés par l&apos;ANJ. Les jeux de casino (machines
              à sous, roulette, blackjack) ne sont pas régulés. Cependant, de
              nombreux joueurs français accèdent à des casinos sous licence MGA
              ou Curaçao sans risque de poursuites individuelles.
            </p>
          </details>

          <details className="bg-section-bg border border-card-border rounded-lg p-5 group">
            <summary className="font-semibold cursor-pointer text-gold-light group-open:mb-3">
              Comment choisir un casino en ligne fiable ?
            </summary>
            <p className="text-sm leading-relaxed">
              Vérifiez la licence (MGA de préférence), lisez les avis des
              joueurs, testez le service client et effectuez un petit retrait
              avant de déposer de grosses sommes. Consultez nos guides détaillés
              pour chaque critère d&apos;évaluation.
            </p>
          </details>

          <details className="bg-section-bg border border-card-border rounded-lg p-5 group">
            <summary className="font-semibold cursor-pointer text-gold-light group-open:mb-3">
              Quels bonus de casino sont les plus intéressants ?
            </summary>
            <p className="text-sm leading-relaxed">
              Les meilleurs bonus combinent un pourcentage élevé avec des
              conditions de mise raisonnables (x30 ou moins). Les tours gratuits
              sans dépôt et le cashback sont également très avantageux.
              Consultez notre page dédiée aux{" "}
              <Link href="/types-de-bonus">types de bonus</Link> pour un guide
              complet.
            </p>
          </details>
        </div>
      </article>

      <FaqSchema
        faqs={[
          {
            question: "Les casinos en ligne sont-ils legaux en France ?",
            answer:
              "En France, seuls les paris sportifs, hippiques et le poker en ligne sont autorises par l'ANJ. Les jeux de casino (machines a sous, roulette, blackjack) ne sont pas regules. Cependant, de nombreux joueurs francais accedent a des casinos sous licence MGA ou Curacao sans risque de poursuites individuelles.",
          },
          {
            question: "Comment choisir un casino en ligne fiable ?",
            answer:
              "Verifiez la licence (MGA de preference), lisez les avis des joueurs, testez le service client et effectuez un petit retrait avant de deposer de grosses sommes. Consultez nos guides detailles pour chaque critere d'evaluation.",
          },
          {
            question:
              "Quels bonus de casino sont les plus interessants ?",
            answer:
              "Les meilleurs bonus combinent un pourcentage eleve avec des conditions de mise raisonnables (x30 ou moins). Les tours gratuits sans depot et le cashback sont egalement tres avantageux. Consultez notre page dediee aux types de bonus pour un guide complet.",
          },
        ]}
      />
    </>
  );
}
