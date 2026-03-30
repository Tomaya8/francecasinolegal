import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "L'ANJ : Autorité Nationale des Jeux en France",
  description:
    "Découvrez le rôle de l'ANJ, ses pouvoirs, les jeux autorisés en France et la liste des opérateurs agréés. Guide complet pour les joueurs français.",
};

export default function AnjFrance() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumb items={[
        { label: "Légalité & Régulations", href: "/legalite-regulations" },
        { label: "L'ANJ France" },
      ]} />
      {/* H1 */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
        L&apos;ANJ — Autorité Nationale des Jeux en France : Guide Complet 2026
      </h1>

      <p className="text-muted mb-4 text-sm">
        Mot-clé cible : <em>ANJ autorité nationale des jeux</em> | Dernière mise
        à jour : mars 2026
      </p>

      {/* Image placeholder */}
      <div className="bg-section-bg border border-card-border rounded-lg p-8 mb-8 text-center text-muted text-sm italic">
        [Image : Logo officiel de l&apos;ANJ avec le drapeau français en
        arrière-plan. Alt text : Logo de l&apos;Autorité Nationale des Jeux ANJ,
        le régulateur français des jeux d&apos;argent en ligne]
      </div>

      {/* Intro */}
      <p className="text-lg leading-relaxed mb-6">
        L&apos;Autorité Nationale des Jeux (ANJ) est l&apos;organisme public
        français chargé de réguler l&apos;ensemble du marché des jeux
        d&apos;argent, en ligne comme physiques. Créée en juin 2020 pour
        remplacer l&apos;ARJEL, l&apos;ANJ dispose de pouvoirs considérablement
        élargis et joue un rôle central dans la protection des joueurs français.
        Ce guide détaille son fonctionnement, ses prérogatives et la manière
        dont elle impacte votre expérience de jeu en ligne.
      </p>

      <p className="leading-relaxed mb-8">
        Comprendre le rôle de l&apos;ANJ est fondamental pour tout joueur
        français souhaitant s&apos;engager dans les jeux d&apos;argent en ligne
        en toute connaissance de cause. Que vous soyez amateur de paris
        sportifs, passionné de poker ou simplement curieux de connaître le cadre
        légal, cet article vous fournira toutes les informations nécessaires
        pour naviguer dans l&apos;univers réglementé du jeu en France.
      </p>

      {/* Section: Historique */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        De l&apos;ARJEL à l&apos;ANJ : Une Évolution Majeure
      </h2>

      <p className="leading-relaxed mb-4">
        L&apos;ARJEL (Autorité de Régulation des Jeux en Ligne) a été créée en
        2010 dans le sillage de la loi du 12 mai 2010 ouvrant le marché
        français des jeux en ligne à la concurrence. Pendant dix ans,
        l&apos;ARJEL a encadré exclusivement les jeux en ligne : poker, paris
        sportifs et paris hippiques. Cependant, son champ d&apos;action était
        limité et ne couvrait pas les casinos terrestres ni les loteries.
      </p>

      <p className="leading-relaxed mb-4">
        En juin 2020, la loi a transformé l&apos;ARJEL en Autorité Nationale
        des Jeux (ANJ), avec un mandat élargi couvrant désormais la totalité du
        secteur des jeux d&apos;argent en France. L&apos;ANJ supervise ainsi les
        jeux en ligne, les casinos physiques, les loteries de la Française des
        Jeux (FDJ) et l&apos;ensemble des paris mutuels. Cette transformation a
        marqué un tournant dans la politique française de régulation du jeu,
        avec un accent renforcé sur la prévention de l&apos;addiction et la
        protection des joueurs vulnérables.
      </p>

      <p className="leading-relaxed mb-8">
        Isabelle Falque-Pierrotin, première présidente de l&apos;ANJ, a imposé
        dès le départ une ligne dure en matière de publicité pour les jeux
        d&apos;argent et de protection des mineurs. L&apos;autorité a
        notamment renforcé les contrôles sur les influenceurs promouvant des
        sites de paris en ligne et durci les sanctions contre les opérateurs
        non conformes.
      </p>

      {/* Section: Pouvoirs */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Les Pouvoirs et Missions de l&apos;ANJ
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gold-light">
        Délivrance et Retrait des Agréments
      </h3>

      <p className="leading-relaxed mb-4">
        L&apos;ANJ est la seule autorité habilitée à délivrer des agréments aux
        opérateurs de jeux en ligne en France. Chaque opérateur doit soumettre
        un dossier complet démontrant sa solidité financière, la fiabilité de
        ses logiciels, ses mesures de protection des joueurs et son programme de
        lutte contre le blanchiment d&apos;argent. L&apos;agrément est délivré
        pour une durée de cinq ans, renouvelable sous condition de conformité
        continue.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gold-light">
        Contrôle et Sanctions
      </h3>

      <p className="leading-relaxed mb-4">
        L&apos;ANJ dispose d&apos;un pouvoir de sanction autonome. Elle peut
        infliger des amendes allant jusqu&apos;à 5 % du chiffre d&apos;affaires
        d&apos;un opérateur, suspendre ou retirer un agrément, et même
        demander le blocage DNS de sites illégaux. En 2024 et 2025,
        l&apos;autorité a considérablement intensifié ses actions contre les
        sites offshore non agréés, obtenant le blocage de plusieurs centaines
        de domaines.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gold-light">
        Protection des Joueurs et Lutte contre l&apos;Addiction
      </h3>

      <p className="leading-relaxed mb-8">
        La mission principale de l&apos;ANJ est la protection des joueurs.
        L&apos;autorité impose aux opérateurs agréés des mesures strictes :
        limites de dépôt obligatoires, auto-exclusion via le fichier national
        des interdits de jeux, messages d&apos;avertissement sur les risques
        d&apos;addiction, et interdiction de la publicité ciblant les mineurs.
        L&apos;ANJ a également mis en place un numéro vert (09 74 75 13 13) et
        un site dédié pour accompagner les joueurs en difficulté.
      </p>

      {/* Section: Jeux autorisés */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Quels Jeux l&apos;ANJ Autorise-t-elle en Ligne ?
      </h2>

      <p className="leading-relaxed mb-4">
        Le cadre réglementaire français est l&apos;un des plus restrictifs
        d&apos;Europe en matière de jeux en ligne. L&apos;ANJ autorise
        exclusivement trois catégories de jeux :
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-foreground">
        <li>
          <strong>Les paris sportifs</strong> — Couverture de la majorité des
          événements sportifs nationaux et internationaux.
        </li>
        <li>
          <strong>Les paris hippiques</strong> — Courses de chevaux régulées par
          le PMU et d&apos;autres opérateurs agréés.
        </li>
        <li>
          <strong>Le poker en ligne</strong> — Cash games et tournois, y compris
          les formats populaires comme le Texas Hold&apos;em et l&apos;Omaha.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gold-light">
        Ce que l&apos;ANJ N&apos;Autorise PAS
      </h3>

      <p className="leading-relaxed mb-8">
        Les jeux de casino en ligne sont strictement interdits en France. Cela
        inclut les machines à sous, la roulette, le blackjack, le baccarat, le
        vidéo poker et les jeux avec croupier en direct. C&apos;est cette
        interdiction qui pousse de nombreux joueurs français vers les casinos
        offshore opérant sous des licences étrangères comme la MGA ou Curaçao.
        Il est important de noter que l&apos;ANJ ne réglemente pas non plus les
        paris sur les événements e-sportifs, bien que des discussions soient en
        cours à ce sujet.
      </p>

      {/* Section: Auto-exclusion */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        L&apos;Auto-Exclusion et les Limites de Dépenses
      </h2>

      <p className="leading-relaxed mb-4">
        L&apos;ANJ a mis en place un système robuste de protection des joueurs à
        travers plusieurs mécanismes. Le fichier national des interdits de jeux
        permet à tout joueur de se faire exclure volontairement de l&apos;ensemble
        des sites agréés pour une durée minimale de trois ans. Cette inscription
        est gratuite et peut être effectuée directement auprès de l&apos;ANJ.
      </p>

      <p className="leading-relaxed mb-8">
        Les opérateurs agréés sont également tenus de proposer des outils de
        gestion du budget de jeu : limites de dépôt hebdomadaires et mensuelles,
        limites de mises, alertes de durée de session et possibilité de
        suspension temporaire du compte. Depuis 2023, l&apos;ANJ impose que ces
        outils soient accessibles dès la création du compte, avant même le
        premier dépôt.
      </p>

      {/* Section: Vérifier un opérateur */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Comment Vérifier un Opérateur Agréé ANJ
      </h2>

      <p className="leading-relaxed mb-4">
        Pour vérifier qu&apos;un site de jeux est bien agréé par l&apos;ANJ,
        plusieurs méthodes sont à votre disposition :
      </p>

      <ol className="list-decimal list-inside mb-8 space-y-3">
        <li>
          <strong>Consultez la liste officielle</strong> — L&apos;ANJ publie
          sur son site (anj.fr) la liste complète des opérateurs agréés.
        </li>
        <li>
          <strong>Cherchez le logo ANJ</strong> — Tout site agréé doit
          afficher le logo de l&apos;ANJ de manière visible.
        </li>
        <li>
          <strong>Vérifiez le domaine .fr</strong> — Les opérateurs agréés
          utilisent généralement un domaine en .fr pour leur version française.
        </li>
        <li>
          <strong>Contrôlez le pied de page</strong> — Le numéro d&apos;agrément
          et la mention de l&apos;ANJ doivent figurer en bas de chaque page.
        </li>
      </ol>

      {/* Image placeholder */}
      <div className="bg-section-bg border border-card-border rounded-lg p-8 mb-8 text-center text-muted text-sm italic">
        [Image : Capture d&apos;écran montrant le logo ANJ sur un site de paris
        agréé. Alt text : Logo de l&apos;ANJ affiché sur un site de paris
        sportifs agréé en France, preuve de conformité réglementaire]
      </div>

      {/* Table: Opérateurs agréés */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Les Principaux Opérateurs Agréés ANJ en 2026
      </h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-card-bg text-gold">
              <th className="border border-card-border px-4 py-3 text-left">
                Opérateur
              </th>
              <th className="border border-card-border px-4 py-3 text-left">
                Type de Jeux
              </th>
              <th className="border border-card-border px-4 py-3 text-left">
                Bonus
              </th>
              <th className="border border-card-border px-4 py-3 text-left">
                Licence
              </th>
            </tr>
          </thead>
          <tbody className="text-foreground">
            <tr className="bg-section-bg">
              <td className="border border-card-border px-4 py-3 font-medium">
                Betclic
              </td>
              <td className="border border-card-border px-4 py-3">
                Paris sportifs, Poker
              </td>
              <td className="border border-card-border px-4 py-3">
                Jusqu&apos;à 100 &euro; en freebets
              </td>
              <td className="border border-card-border px-4 py-3">
                ANJ n&deg;0015
              </td>
            </tr>
            <tr>
              <td className="border border-card-border px-4 py-3 font-medium">
                Winamax
              </td>
              <td className="border border-card-border px-4 py-3">
                Paris sportifs, Poker
              </td>
              <td className="border border-card-border px-4 py-3">
                Jusqu&apos;à 100 &euro; de bonus
              </td>
              <td className="border border-card-border px-4 py-3">
                ANJ n&deg;0014
              </td>
            </tr>
            <tr className="bg-section-bg">
              <td className="border border-card-border px-4 py-3 font-medium">
                Unibet
              </td>
              <td className="border border-card-border px-4 py-3">
                Paris sportifs, Poker, Hippiques
              </td>
              <td className="border border-card-border px-4 py-3">
                Jusqu&apos;à 100 &euro; remboursés
              </td>
              <td className="border border-card-border px-4 py-3">
                ANJ n&deg;0032
              </td>
            </tr>
            <tr>
              <td className="border border-card-border px-4 py-3 font-medium">
                PMU
              </td>
              <td className="border border-card-border px-4 py-3">
                Hippiques, Paris sportifs, Poker
              </td>
              <td className="border border-card-border px-4 py-3">
                Jusqu&apos;à 100 &euro; offerts
              </td>
              <td className="border border-card-border px-4 py-3">
                ANJ n&deg;0011
              </td>
            </tr>
            <tr className="bg-section-bg">
              <td className="border border-card-border px-4 py-3 font-medium">
                ParionsSport
              </td>
              <td className="border border-card-border px-4 py-3">
                Paris sportifs
              </td>
              <td className="border border-card-border px-4 py-3">
                Jusqu&apos;à 90 &euro; de bonus
              </td>
              <td className="border border-card-border px-4 py-3">
                ANJ n&deg;0007
              </td>
            </tr>
            <tr>
              <td className="border border-card-border px-4 py-3 font-medium">
                PokerStars
              </td>
              <td className="border border-card-border px-4 py-3">
                Poker
              </td>
              <td className="border border-card-border px-4 py-3">
                Jusqu&apos;à 50 &euro; de tickets
              </td>
              <td className="border border-card-border px-4 py-3">
                ANJ n&deg;0029
              </td>
            </tr>
            <tr className="bg-section-bg">
              <td className="border border-card-border px-4 py-3 font-medium">
                ZEbet
              </td>
              <td className="border border-card-border px-4 py-3">
                Paris sportifs, Hippiques
              </td>
              <td className="border border-card-border px-4 py-3">
                Jusqu&apos;à 150 &euro; en freebets
              </td>
              <td className="border border-card-border px-4 py-3">
                ANJ n&deg;0028
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pros & Cons */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Avantages et Inconvénients de Jouer sur un Site Agréé ANJ
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-section-bg border border-card-border rounded-lg p-6">
          <h3 className="text-lg font-bold text-accent-green mb-3">
            Avantages
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-accent-green mt-0.5">&#10003;</span>
              Protection juridique complète en cas de litige avec l&apos;opérateur
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-green mt-0.5">&#10003;</span>
              Fonds des joueurs séparés et garantis
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-green mt-0.5">&#10003;</span>
              Outils de jeu responsable obligatoires (limites, auto-exclusion)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-green mt-0.5">&#10003;</span>
              Audits réguliers des logiciels et des générateurs de nombres aléatoires
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-green mt-0.5">&#10003;</span>
              Gains non imposables pour les joueurs récréatifs
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
              Aucun jeu de casino en ligne (slots, roulette, blackjack)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-red mt-0.5">&#10007;</span>
              Bonus généralement moins généreux que sur les sites offshore
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-red mt-0.5">&#10007;</span>
              Offre de jeux limitée à trois catégories uniquement
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-red mt-0.5">&#10007;</span>
              Cotes parfois moins compétitives sur certains marchés
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-red mt-0.5">&#10007;</span>
              Pas de paiement en cryptomonnaie accepté
            </li>
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold mt-12 mb-6">
        FAQ — Questions Fréquentes sur l&apos;ANJ
      </h2>

      <div className="space-y-6 mb-8">
        <details className="bg-section-bg border border-card-border rounded-lg p-5 group">
          <summary className="font-semibold cursor-pointer text-gold-light group-open:mb-3">
            Quelle est la différence entre l&apos;ANJ et l&apos;ARJEL ?
          </summary>
          <p className="text-sm leading-relaxed">
            L&apos;ARJEL ne régulait que les jeux en ligne, tandis que
            l&apos;ANJ supervise l&apos;ensemble du secteur des jeux
            d&apos;argent en France, y compris les casinos physiques, la
            Française des Jeux et les paris hippiques. L&apos;ANJ dispose
            également de pouvoirs de sanction plus importants et d&apos;un
            mandat renforcé en matière de prévention de l&apos;addiction.
          </p>
        </details>

        <details className="bg-section-bg border border-card-border rounded-lg p-5 group">
          <summary className="font-semibold cursor-pointer text-gold-light group-open:mb-3">
            L&apos;ANJ autorise-t-elle les machines à sous en ligne ?
          </summary>
          <p className="text-sm leading-relaxed">
            Non. En 2026, les machines à sous, la roulette, le blackjack et
            tous les jeux de casino en ligne restent interdits en France. Seuls
            les paris sportifs, les paris hippiques et le poker en ligne sont
            autorisés. Des discussions sont en cours pour une éventuelle
            ouverture du marché, mais aucune date n&apos;a été fixée.
          </p>
        </details>

        <details className="bg-section-bg border border-card-border rounded-lg p-5 group">
          <summary className="font-semibold cursor-pointer text-gold-light group-open:mb-3">
            Comment signaler un site illégal à l&apos;ANJ ?
          </summary>
          <p className="text-sm leading-relaxed">
            Vous pouvez signaler un site de jeux non agréé directement sur le
            site officiel de l&apos;ANJ (anj.fr) via le formulaire de
            signalement en ligne. L&apos;autorité dispose d&apos;une cellule
            dédiée qui traite ces signalements et peut ordonner le blocage des
            sites incriminés auprès des fournisseurs d&apos;accès à Internet
            français.
          </p>
        </details>

        <details className="bg-section-bg border border-card-border rounded-lg p-5 group">
          <summary className="font-semibold cursor-pointer text-gold-light group-open:mb-3">
            Les gains sur les sites agréés ANJ sont-ils imposables ?
          </summary>
          <p className="text-sm leading-relaxed">
            Pour les joueurs récréatifs, les gains de jeux d&apos;argent ne
            sont généralement pas imposables en France. Cependant, les joueurs
            professionnels dont les gains constituent une source régulière de
            revenus peuvent être soumis à l&apos;impôt sur le revenu. En cas de
            doute, il est recommandé de consulter un expert-comptable
            spécialisé.
          </p>
        </details>

        <details className="bg-section-bg border border-card-border rounded-lg p-5 group">
          <summary className="font-semibold cursor-pointer text-gold-light group-open:mb-3">
            Peut-on s&apos;inscrire sur plusieurs sites agréés ANJ à la fois ?
          </summary>
          <p className="text-sm leading-relaxed">
            Oui, il n&apos;y a aucune restriction sur le nombre de comptes que
            vous pouvez ouvrir chez différents opérateurs agréés. Beaucoup de
            joueurs s&apos;inscrivent sur plusieurs plateformes pour comparer
            les cotes, profiter de différents bonus et diversifier leur
            expérience de jeu. La seule règle est de ne posséder qu&apos;un
            seul compte par opérateur.
          </p>
        </details>
      </div>

      <FaqSchema faqs={[
        { question: "Quelle est la différence entre l'ANJ et l'ARJEL ?", answer: "L'ARJEL ne régulait que les jeux en ligne, tandis que l'ANJ supervise l'ensemble du secteur des jeux d'argent en France, y compris les casinos physiques, la Française des Jeux et les paris hippiques. L'ANJ dispose également de pouvoirs de sanction plus importants et d'un mandat renforcé en matière de prévention de l'addiction." },
        { question: "L'ANJ autorise-t-elle les machines à sous en ligne ?", answer: "Non. En 2026, les machines à sous, la roulette, le blackjack et tous les jeux de casino en ligne restent interdits en France. Seuls les paris sportifs, les paris hippiques et le poker en ligne sont autorisés. Des discussions sont en cours pour une éventuelle ouverture du marché, mais aucune date n'a été fixée." },
        { question: "Comment signaler un site illégal à l'ANJ ?", answer: "Vous pouvez signaler un site de jeux non agréé directement sur le site officiel de l'ANJ (anj.fr) via le formulaire de signalement en ligne. L'autorité dispose d'une cellule dédiée qui traite ces signalements et peut ordonner le blocage des sites incriminés auprès des fournisseurs d'accès à Internet français." },
        { question: "Les gains sur les sites agréés ANJ sont-ils imposables ?", answer: "Pour les joueurs récréatifs, les gains de jeux d'argent ne sont généralement pas imposables en France. Cependant, les joueurs professionnels dont les gains constituent une source régulière de revenus peuvent être soumis à l'impôt sur le revenu. En cas de doute, il est recommandé de consulter un expert-comptable spécialisé." },
        { question: "Peut-on s'inscrire sur plusieurs sites agréés ANJ à la fois ?", answer: "Oui, il n'y a aucune restriction sur le nombre de comptes que vous pouvez ouvrir chez différents opérateurs agréés. Beaucoup de joueurs s'inscrivent sur plusieurs plateformes pour comparer les cotes, profiter de différents bonus et diversifier leur expérience de jeu. La seule règle est de ne posséder qu'un seul compte par opérateur." },
      ]} />
    </article>
  );
}
