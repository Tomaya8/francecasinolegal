import type { Metadata } from "next";
import Link from "next/link";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "Types de Bonus Casino en Ligne | Guide Complet 2026",
  description:
    "Tous les types de bonus casino expliqués : bienvenue, sans dépôt, tours gratuits, cashback. Comprenez le wagering et trouvez les meilleures offres.",
};

export default function TypesDeBonus() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
        Les Types de Bonus Casino en Ligne : Guide Complet pour Maximiser Vos
        Gains en 2026
      </h1>

      <p className="text-muted mb-4 text-sm">
        Mot-clé cible : <em>bonus casino en ligne</em> | Dernière mise à jour :
        mars 2026
      </p>

      <div className="bg-section-bg border border-card-border rounded-lg p-8 mb-8 text-center text-muted text-sm italic">
        [Image : Coffre au trésor ouvert avec des jetons de casino et des billets
        dorés. Alt text : Bonus de casino en ligne — coffre au trésor avec jetons
        et billets dorés pour les joueurs français]
      </div>

      <p className="text-lg leading-relaxed mb-6">
        Les bonus sont l&apos;un des principaux attraits des casinos en ligne.
        Ils permettent aux joueurs d&apos;augmenter leur bankroll, de tester de
        nouveaux jeux sans risquer leur propre argent et de prolonger leur
        expérience de jeu. Mais tous les bonus ne se valent pas : derrière une
        offre alléchante se cachent parfois des conditions de mise
        (wagering) très exigeantes qui rendent le retrait des gains quasi
        impossible.
      </p>

      <p className="leading-relaxed mb-8">
        Dans ce guide complet, nous décortiquons chaque type de bonus disponible
        sur les casinos en ligne accessibles aux joueurs français. Vous
        apprendrez à distinguer les offres réellement avantageuses des pièges
        marketing, et surtout à comprendre les conditions de mise qui
        accompagnent chaque bonus. Faire le bon choix de bonus peut faire la
        différence entre une session profitable et une frustration totale.
      </p>

      {/* Comparison Table */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Comparatif des Types de Bonus Casino
      </h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-card-bg text-gold">
              <th className="border border-card-border px-4 py-3 text-left">
                Type de Bonus
              </th>
              <th className="border border-card-border px-4 py-3 text-left">
                Montant Typique
              </th>
              <th className="border border-card-border px-4 py-3 text-left">
                Wagering Moyen
              </th>
              <th className="border border-card-border px-4 py-3 text-left">
                Avantage Principal
              </th>
            </tr>
          </thead>
          <tbody className="text-foreground">
            <tr className="bg-section-bg">
              <td className="border border-card-border px-4 py-3 font-medium">
                <Link href="/types-de-bonus/bonus-bienvenue" className="text-gold hover:text-gold-dark no-underline hover:underline">Bonus de Bienvenue</Link>
              </td>
              <td className="border border-card-border px-4 py-3">
                100 % — 500 % du dépôt
              </td>
              <td className="border border-card-border px-4 py-3">x25 — x40</td>
              <td className="border border-card-border px-4 py-3">
                Double ou triple votre premier dépôt
              </td>
            </tr>
            <tr>
              <td className="border border-card-border px-4 py-3 font-medium">
                <Link href="/types-de-bonus/bonus-sans-depot" className="text-gold hover:text-gold-dark no-underline hover:underline">Bonus sans Dépôt</Link>
              </td>
              <td className="border border-card-border px-4 py-3">
                5 &euro; — 50 &euro;
              </td>
              <td className="border border-card-border px-4 py-3">x30 — x60</td>
              <td className="border border-card-border px-4 py-3">
                Jouer sans risquer votre argent
              </td>
            </tr>
            <tr className="bg-section-bg">
              <td className="border border-card-border px-4 py-3 font-medium">
                <Link href="/types-de-bonus/tours-gratuits" className="text-gold hover:text-gold-dark no-underline hover:underline">Tours Gratuits</Link>
              </td>
              <td className="border border-card-border px-4 py-3">
                10 — 200 free spins
              </td>
              <td className="border border-card-border px-4 py-3">x20 — x40</td>
              <td className="border border-card-border px-4 py-3">
                Tester des machines à sous gratuitement
              </td>
            </tr>
            <tr>
              <td className="border border-card-border px-4 py-3 font-medium">
                <Link href="/types-de-bonus/cashback" className="text-gold hover:text-gold-dark no-underline hover:underline">Cashback</Link>
              </td>
              <td className="border border-card-border px-4 py-3">
                5 % — 25 % des pertes
              </td>
              <td className="border border-card-border px-4 py-3">x0 — x5</td>
              <td className="border border-card-border px-4 py-3">
                Récupérer une partie des pertes
              </td>
            </tr>
            <tr className="bg-section-bg">
              <td className="border border-card-border px-4 py-3 font-medium">
                <Link href="/types-de-bonus/programme-vip" className="text-gold hover:text-gold-dark no-underline hover:underline">Programme VIP</Link>
              </td>
              <td className="border border-card-border px-4 py-3">
                Variable (niveaux)
              </td>
              <td className="border border-card-border px-4 py-3">x1 — x10</td>
              <td className="border border-card-border px-4 py-3">
                Récompenses exclusives et cashback élevé
              </td>
            </tr>
            <tr>
              <td className="border border-card-border px-4 py-3 font-medium">
                <Link href="/types-de-bonus/bonus-rechargement" className="text-gold hover:text-gold-dark no-underline hover:underline">Bonus de Rechargement</Link>
              </td>
              <td className="border border-card-border px-4 py-3">
                25 % — 100 % du dépôt
              </td>
              <td className="border border-card-border px-4 py-3">x20 — x35</td>
              <td className="border border-card-border px-4 py-3">
                Bonus régulier pour les joueurs fidèles
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bonus de Bienvenue */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        <Link href="/types-de-bonus/bonus-bienvenue" className="hover:underline no-underline">Le Bonus de Bienvenue : L&apos;Offre Phare</Link>
      </h2>

      <p className="leading-relaxed mb-4">
        Le bonus de bienvenue est la première offre que reçoit un nouveau joueur
        lors de son inscription. C&apos;est généralement le bonus le plus
        généreux proposé par un casino. Il prend la forme d&apos;un pourcentage
        appliqué à votre premier dépôt : par exemple, un bonus de 100 %
        jusqu&apos;à 500 &euro; signifie que si vous déposez 200 &euro;, le
        casino ajoute 200 &euro; supplémentaires à votre solde.
      </p>

      <p className="leading-relaxed mb-8">
        Certains casinos proposent des packages de bienvenue étalés sur
        plusieurs dépôts (2 à 4 dépôts), avec des pourcentages et des tours
        gratuits variables. L&apos;astuce est de toujours comparer le
        pourcentage ET les conditions de mise avant de choisir. Un bonus de
        200 % avec un wagering de x50 est souvent moins intéressant qu&apos;un
        bonus de 100 % avec un wagering de x25.
      </p>

      {/* Bonus sans Dépôt */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        <Link href="/types-de-bonus/bonus-sans-depot" className="hover:underline no-underline">Le Bonus sans Dépôt : Jouer Sans Risque</Link>
      </h2>

      <p className="leading-relaxed mb-4">
        Le bonus sans dépôt est le Saint Graal des joueurs prudents. Il
        s&apos;agit d&apos;une somme d&apos;argent ou de tours gratuits offerts
        simplement pour avoir créé un compte, sans aucun dépôt requis.
        C&apos;est l&apos;occasion idéale de tester un casino, ses jeux et son
        interface sans engager vos propres fonds.
      </p>

      <p className="leading-relaxed mb-8">
        Attention toutefois : les bonus sans dépôt viennent généralement avec
        des conditions de mise plus élevées (x40 à x60) et un plafond de gains
        retirables limité (souvent 50 &euro; à 100 &euro;). Ils restent
        néanmoins excellents pour évaluer la qualité d&apos;un casino avant
        d&apos;y investir votre argent.
      </p>

      {/* Tours Gratuits */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        <Link href="/types-de-bonus/tours-gratuits" className="hover:underline no-underline">Les Tours Gratuits (Free Spins)</Link>
      </h2>

      <p className="leading-relaxed mb-4">
        Les tours gratuits sont des spins offerts sur des machines à sous
        spécifiques. Ils peuvent faire partie d&apos;un bonus de bienvenue, être
        offerts indépendamment ou distribués dans le cadre de promotions
        hebdomadaires. La valeur de chaque spin varie généralement entre
        0,10 &euro; et 0,50 &euro;.
      </p>

      <p className="leading-relaxed mb-8">
        Les gains issus des tours gratuits sont soumis à des conditions de mise
        avant de pouvoir être retirés. Certains casinos proposent des &quot;tours
        gratuits sans wagering&quot; (wager-free spins), où les gains sont
        directement encaissables — ces offres sont rares mais extrêmement
        avantageuses.
      </p>

      {/* Cashback */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        <Link href="/types-de-bonus/cashback" className="hover:underline no-underline">Le Cashback : L&apos;Assurance du Joueur</Link>
      </h2>

      <p className="leading-relaxed mb-4">
        Le cashback est un remboursement partiel de vos pertes sur une période
        donnée (quotidien, hebdomadaire ou mensuel). Si vous perdez 500 &euro;
        en une semaine et que votre casino offre un cashback de 10 %, vous
        recevrez 50 &euro; en retour.
      </p>

      <p className="leading-relaxed mb-8">
        C&apos;est le bonus le plus avantageux pour les joueurs réguliers, car
        il est souvent assorti de conditions de mise très faibles (x1 à x5),
        voire aucune. Les programmes VIP offrent généralement des taux de
        cashback plus élevés, pouvant atteindre 15 % à 25 %.
      </p>

      {/* Wagering explanation */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Comprendre les Conditions de Mise (Wagering)
      </h2>

      <div className="bg-section-bg border border-card-border rounded-lg p-6 mb-6">
        <h3 className="text-lg font-bold text-gold-light mb-3">
          Exemple Concret
        </h3>
        <p className="leading-relaxed mb-3">
          Vous recevez un <strong>bonus de 100 &euro;</strong> avec un wagering
          de <strong>x30</strong>.
        </p>
        <p className="leading-relaxed mb-3">
          Calcul : 100 &euro; &times; 30 ={" "}
          <strong>3 000 &euro; de mises</strong> requises avant de pouvoir
          retirer vos gains issus du bonus.
        </p>
        <p className="leading-relaxed text-muted text-sm">
          Cela signifie que vous devez placer au total 3 000 &euro; de paris
          (pas perdre 3 000 &euro;) sur les jeux éligibles. Les machines à sous
          contribuent généralement à 100 %, tandis que les jeux de table
          (blackjack, roulette) ne contribuent souvent qu&apos;à 10 % — 20 %.
        </p>
      </div>

      <p className="leading-relaxed mb-4">
        Le wagering est LE critère le plus important à vérifier. Un bonus
        attractif avec un wagering abusif (x50+) sera presque impossible à
        convertir en argent réel. Voici notre échelle de référence :
      </p>

      <ul className="list-disc list-inside mb-8 space-y-2">
        <li>
          <strong>x1 — x10 :</strong> Excellent — conditions très avantageuses
        </li>
        <li>
          <strong>x20 — x30 :</strong> Bon — standard du marché, réalisable
        </li>
        <li>
          <strong>x35 — x45 :</strong> Moyen — difficile mais pas impossible
        </li>
        <li>
          <strong>x50+ :</strong> Défavorable — à éviter dans la plupart des cas
        </li>
      </ul>

      <div className="bg-section-bg border border-card-border rounded-lg p-8 mb-8 text-center text-muted text-sm italic">
        [Image : Infographie montrant le calcul du wagering avec des icônes de
        jetons. Alt text : Explication visuelle des conditions de mise wagering
        sur un bonus de casino en ligne]
      </div>

      {/* Pros & Cons */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Avantages et Inconvénients des Bonus Casino
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-section-bg border border-card-border rounded-lg p-6">
          <h3 className="text-lg font-bold text-accent-green mb-3">
            Avantages
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-accent-green mt-0.5">&#10003;</span>
              Augmentent significativement votre bankroll de départ
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-green mt-0.5">&#10003;</span>
              Permettent de tester des jeux sans risquer votre argent
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-green mt-0.5">&#10003;</span>
              Le cashback offre un filet de sécurité pour les joueurs réguliers
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-green mt-0.5">&#10003;</span>
              Les programmes VIP récompensent la fidélité avec des avantages
              exclusifs
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-green mt-0.5">&#10003;</span>
              Les bonus sans dépôt permettent d&apos;évaluer un casino
              gratuitement
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
              Conditions de mise souvent élevées et difficiles à remplir
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-red mt-0.5">&#10007;</span>
              Plafonds de gains limitant les retraits sur certains bonus
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-red mt-0.5">&#10007;</span>
              Jeux de table souvent exclus ou contribuant faiblement au wagering
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-red mt-0.5">&#10007;</span>
              Délai d&apos;expiration court (7 à 30 jours) pour remplir les
              conditions
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-red mt-0.5">&#10007;</span>
              Peuvent inciter à jouer plus que prévu pour atteindre le wagering
            </li>
          </ul>
        </div>
      </div>

      {/* Tips */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Nos Conseils pour Choisir le Meilleur Bonus
      </h2>

      <ol className="list-decimal list-inside mb-8 space-y-3">
        <li>
          <strong>Comparez le wagering avant le pourcentage</strong> — Un bonus
          de 100 % x25 bat un bonus de 300 % x50 dans presque tous les cas.
        </li>
        <li>
          <strong>Vérifiez la contribution des jeux</strong> — Si vous jouez
          principalement au blackjack, assurez-vous qu&apos;il contribue à au
          moins 20 % du wagering.
        </li>
        <li>
          <strong>Lisez les conditions de retrait maximum</strong> — Certains
          bonus limitent vos gains retirables à 5x ou 10x le montant du bonus.
        </li>
        <li>
          <strong>Privilégiez le cashback pour le long terme</strong> — Avec un
          wagering quasi nul, c&apos;est le bonus le plus fiable pour les
          joueurs réguliers.
        </li>
        <li>
          <strong>Méfiez-vous des offres &quot;trop belles&quot;</strong> — Un
          bonus de 500 % cache presque toujours un wagering de x50 ou plus.
        </li>
      </ol>

      {/* FAQ */}
      <h2 className="text-2xl font-bold mt-12 mb-6">
        FAQ — Questions Fréquentes sur les Bonus Casino
      </h2>

      <div className="space-y-6 mb-8">
        <details className="bg-section-bg border border-card-border rounded-lg p-5 group">
          <summary className="font-semibold cursor-pointer text-gold-light group-open:mb-3">
            Qu&apos;est-ce que le wagering et pourquoi est-ce important ?
          </summary>
          <p className="text-sm leading-relaxed">
            Le wagering (ou conditions de mise) est le nombre de fois que vous
            devez miser le montant du bonus avant de pouvoir retirer vos gains.
            Par exemple, un bonus de 100 &euro; avec un wagering x30 signifie
            que vous devez placer 3 000 &euro; de mises au total. Plus le
            wagering est bas, plus le bonus est avantageux.
          </p>
        </details>

        <details className="bg-section-bg border border-card-border rounded-lg p-5 group">
          <summary className="font-semibold cursor-pointer text-gold-light group-open:mb-3">
            Peut-on retirer un bonus sans dépôt immédiatement ?
          </summary>
          <p className="text-sm leading-relaxed">
            Non, les bonus sans dépôt sont toujours soumis à des conditions de
            mise (généralement x40 à x60) et un plafond de gains retirables.
            Vous devez remplir le wagering et les conditions avant tout retrait.
            Ils servent principalement à tester le casino, pas à retirer de
            l&apos;argent immédiatement.
          </p>
        </details>

        <details className="bg-section-bg border border-card-border rounded-lg p-5 group">
          <summary className="font-semibold cursor-pointer text-gold-light group-open:mb-3">
            Les tours gratuits sont-ils toujours un bon deal ?
          </summary>
          <p className="text-sm leading-relaxed">
            Pas toujours. La valeur réelle dépend de la mise par spin
            (0,10 &euro; vs 0,50 &euro;), du wagering sur les gains et du jeu
            concerné. Les tours gratuits sans wagering sont excellents. Les
            tours avec wagering x40+ et une valeur de 0,10 &euro;/spin ont une
            valeur réelle très faible.
          </p>
        </details>

        <details className="bg-section-bg border border-card-border rounded-lg p-5 group">
          <summary className="font-semibold cursor-pointer text-gold-light group-open:mb-3">
            Quel est le meilleur type de bonus pour un joueur régulier ?
          </summary>
          <p className="text-sm leading-relaxed">
            Le cashback est généralement le meilleur bonus pour les joueurs
            réguliers grâce à son wagering très faible (souvent x1 ou aucun) et
            sa récurrence (hebdomadaire ou mensuel). Les programmes VIP
            amplifient encore cet avantage avec des taux de cashback plus élevés
            et des récompenses exclusives.
          </p>
        </details>

        <details className="bg-section-bg border border-card-border rounded-lg p-5 group">
          <summary className="font-semibold cursor-pointer text-gold-light group-open:mb-3">
            Peut-on cumuler plusieurs bonus sur un même casino ?
          </summary>
          <p className="text-sm leading-relaxed">
            En règle générale, non. La plupart des casinos n&apos;autorisent
            qu&apos;un seul bonus actif à la fois. Vous devez terminer le
            wagering de votre bonus en cours (ou l&apos;annuler) avant
            d&apos;en réclamer un nouveau. Vérifiez toujours les conditions
            générales du casino pour les règles spécifiques.
          </p>
        </details>
      </div>

      <FaqSchema
        faqs={[
          {
            question:
              "Qu'est-ce que le wagering et pourquoi est-ce important ?",
            answer:
              "Le wagering (ou conditions de mise) est le nombre de fois que vous devez miser le montant du bonus avant de pouvoir retirer vos gains. Par exemple, un bonus de 100 euros avec un wagering x30 signifie que vous devez placer 3 000 euros de mises au total. Plus le wagering est bas, plus le bonus est avantageux.",
          },
          {
            question:
              "Peut-on retirer un bonus sans depot immediatement ?",
            answer:
              "Non, les bonus sans depot sont toujours soumis a des conditions de mise (generalement x40 a x60) et un plafond de gains retirables. Vous devez remplir le wagering et les conditions avant tout retrait. Ils servent principalement a tester le casino, pas a retirer de l'argent immediatement.",
          },
          {
            question:
              "Les tours gratuits sont-ils toujours un bon deal ?",
            answer:
              "Pas toujours. La valeur reelle depend de la mise par spin (0,10 euros vs 0,50 euros), du wagering sur les gains et du jeu concerne. Les tours gratuits sans wagering sont excellents. Les tours avec wagering x40+ et une valeur de 0,10 euros/spin ont une valeur reelle tres faible.",
          },
          {
            question:
              "Quel est le meilleur type de bonus pour un joueur regulier ?",
            answer:
              "Le cashback est generalement le meilleur bonus pour les joueurs reguliers grace a son wagering tres faible (souvent x1 ou aucun) et sa recurrence (hebdomadaire ou mensuel). Les programmes VIP amplifient encore cet avantage avec des taux de cashback plus eleves et des recompenses exclusives.",
          },
          {
            question:
              "Peut-on cumuler plusieurs bonus sur un meme casino ?",
            answer:
              "En regle generale, non. La plupart des casinos n'autorisent qu'un seul bonus actif a la fois. Vous devez terminer le wagering de votre bonus en cours (ou l'annuler) avant d'en reclamer un nouveau. Verifiez toujours les conditions generales du casino pour les regles specifiques.",
          },
        ]}
      />
    </article>
  );
}
