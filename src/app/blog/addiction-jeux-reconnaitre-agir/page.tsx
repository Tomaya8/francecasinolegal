import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Addiction aux Jeux : Reconnaître les Signes et Agir",
  description:
    "Comment reconnaître une addiction aux jeux de casino, auto-évaluation, outils d\u2019auto-exclusion ANJ et contacts d\u2019aide : SOS Joueurs, Adictel, 09 74 75 13 13.",
};

export default function AddictionJeuxReconnaitreAgir() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
        Addiction aux Jeux de Casino : Reconnaître les Signes et Agir Rapidement
      </h1>

      <p className="text-muted mb-4 text-sm">
        Mot-clé cible : <em>addiction jeux casino</em> | Dernière mise à jour
        : mars 2026
      </p>

      <div className="bg-section-bg border border-card-border rounded-lg p-8 mb-8 text-center text-muted text-sm italic">
        [Image : Personne réfléchissant devant un écran de casino en ligne avec
        une expression inquiète. Alt text : Signes d&apos;addiction aux jeux de
        casino — joueur en difficulté devant son écran]
      </div>

      <p className="text-lg leading-relaxed mb-6">
        L&apos;addiction aux jeux de casino, aussi appelée jeu pathologique ou
        trouble du jeu d&apos;argent, est un problème de santé publique qui
        touche entre 1 et 3 % des joueurs en France. Contrairement à une idée
        reçue, il ne s&apos;agit pas d&apos;un manque de volonté mais d&apos;un
        véritable trouble comportemental reconnu par l&apos;Organisation
        mondiale de la santé. Ce guide vous aide à identifier les signaux
        d&apos;alerte, à évaluer votre propre situation et à connaître les
        ressources disponibles pour vous ou vos proches.
      </p>

      <p className="leading-relaxed mb-8">
        Que vous jouiez sur des machines à sous en ligne, aux tables de
        blackjack ou sur des sites de paris sportifs, les mécanismes de
        l&apos;addiction sont les mêmes. Plus tôt vous reconnaissez les signes,
        plus les chances de rétablissement sont élevées. Ce n&apos;est pas une
        question de honte, c&apos;est une question de santé.
      </p>

      {/* What is gambling addiction */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Qu&apos;est-ce que l&apos;addiction aux jeux ?
      </h2>

      <p className="leading-relaxed mb-4">
        L&apos;addiction aux jeux d&apos;argent se caractérise par une perte de
        contrôle progressive sur la fréquence et les montants misés. Le joueur
        pathologique ressent un besoin irrépressible de jouer, augmente ses
        mises pour retrouver la même excitation (phénomène de tolérance) et
        continue de jouer malgré des conséquences financières, sociales et
        psychologiques négatives. Le cerveau libère de la dopamine lors des
        gains, créant un circuit de récompense similaire à celui observé dans
        les addictions aux substances.
      </p>

      <p className="leading-relaxed mb-8">
        En France, l&apos;Autorité Nationale des Jeux (ANJ) estime que près de
        600 000 personnes présentent un risque modéré à sévère de jeu
        problématique. Les jeux en ligne, accessibles 24 heures sur 24,
        amplifient ce risque en supprimant les barrières physiques et temporelles
        qui existaient avec les casinos terrestres.
      </p>

      {/* Warning signs */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Les signes d&apos;alerte à surveiller
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gold-light">
        Signes comportementaux
      </h3>
      <p className="leading-relaxed mb-4">
        Le joueur en difficulté passe de plus en plus de temps à jouer, souvent
        au détriment de ses obligations professionnelles et familiales. Il
        cache sa pratique du jeu à ses proches, ment sur les sommes engagées et
        devient irritable lorsqu&apos;il ne peut pas jouer. La « chasse aux
        pertes » (tenter de récupérer l&apos;argent perdu en rejouant
        immédiatement) est l&apos;un des marqueurs les plus caractéristiques du
        jeu problématique.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gold-light">
        Signes financiers
      </h3>
      <p className="leading-relaxed mb-4">
        Des découverts bancaires inexpliqués, des emprunts fréquents auprès de
        proches, la vente d&apos;objets personnels ou des retards de paiement
        sur les factures courantes sont autant de signaux d&apos;alarme
        financiers. Certains joueurs pathologiques vont jusqu&apos;à contracter
        des crédits à la consommation pour financer leur jeu.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gold-light">
        Signes émotionnels et psychologiques
      </h3>
      <p className="leading-relaxed mb-8">
        L&apos;anxiété, la dépression, l&apos;insomnie et un sentiment de culpabilité
        persistant accompagnent souvent le jeu problématique. Le joueur peut
        alterner entre des périodes d&apos;euphorie (après un gain) et de
        profond abattement (après une perte importante). L&apos;isolement
        social progressif est fréquent.
      </p>

      {/* Self-assessment */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Auto-évaluation : testez votre rapport au jeu
      </h2>

      <p className="leading-relaxed mb-4">
        Répondez honnêtement aux questions suivantes, inspirées du questionnaire
        ICJE (Indice Canadien du Jeu Excessif) adapté au contexte français. Si
        vous répondez « oui » à 3 questions ou plus, nous vous recommandons
        fortement de consulter un professionnel.
      </p>

      <div className="bg-card-bg border border-card-border rounded-lg p-6 mb-8">
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <span className="text-accent-red mt-0.5">&#10007;</span>
            <span>Avez-vous déjà misé plus que vous ne pouviez vous permettre de perdre ?</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-red mt-0.5">&#10007;</span>
            <span>Avez-vous eu besoin de jouer avec des montants croissants pour ressentir de l&apos;excitation ?</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-red mt-0.5">&#10007;</span>
            <span>Avez-vous essayé de récupérer l&apos;argent perdu en rejouant le lendemain ?</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-red mt-0.5">&#10007;</span>
            <span>Avez-vous emprunté de l&apos;argent ou vendu des biens pour jouer ?</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-red mt-0.5">&#10007;</span>
            <span>Le jeu a-t-il provoqué des problèmes dans votre vie personnelle ou professionnelle ?</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-red mt-0.5">&#10007;</span>
            <span>Vous êtes-vous senti coupable ou honteux de votre pratique du jeu ?</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-red mt-0.5">&#10007;</span>
            <span>Avez-vous menti à vos proches concernant vos habitudes de jeu ?</span>
          </li>
        </ul>
        <p className="text-muted mt-4 text-sm">
          3 réponses positives ou plus = risque élevé de jeu problématique.
          Contactez Joueurs Info Service au 09 74 75 13 13.
        </p>
      </div>

      {/* Self-exclusion tools table */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Outils d&apos;auto-exclusion disponibles en France
      </h2>

      <p className="leading-relaxed mb-4">
        Plusieurs dispositifs permettent de limiter ou d&apos;interdire votre
        accès aux jeux d&apos;argent. Le choix dépend de la gravité de la
        situation et de vos objectifs personnels.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-card-bg text-gold">
              <th className="border border-card-border px-4 py-3 text-left">Outil</th>
              <th className="border border-card-border px-4 py-3 text-left">Durée</th>
              <th className="border border-card-border px-4 py-3 text-left">Portée</th>
              <th className="border border-card-border px-4 py-3 text-left">Comment Activer</th>
            </tr>
          </thead>
          <tbody className="text-foreground">
            <tr className="bg-section-bg">
              <td className="border border-card-border px-4 py-3 font-semibold">Auto-exclusion casino</td>
              <td className="border border-card-border px-4 py-3">24h à 6 mois</td>
              <td className="border border-card-border px-4 py-3">Un seul site</td>
              <td className="border border-card-border px-4 py-3">Paramètres du compte joueur</td>
            </tr>
            <tr>
              <td className="border border-card-border px-4 py-3 font-semibold">Interdiction volontaire ANJ</td>
              <td className="border border-card-border px-4 py-3">3 ans minimum</td>
              <td className="border border-card-border px-4 py-3">Tous les casinos licenciés France</td>
              <td className="border border-card-border px-4 py-3">Formulaire ANJ en ligne ou courrier</td>
            </tr>
            <tr className="bg-section-bg">
              <td className="border border-card-border px-4 py-3 font-semibold">Limites de dépôt</td>
              <td className="border border-card-border px-4 py-3">Jour / semaine / mois</td>
              <td className="border border-card-border px-4 py-3">Un seul site</td>
              <td className="border border-card-border px-4 py-3">Paramètres du compte joueur</td>
            </tr>
            <tr>
              <td className="border border-card-border px-4 py-3 font-semibold">Limites de pertes</td>
              <td className="border border-card-border px-4 py-3">Jour / semaine / mois</td>
              <td className="border border-card-border px-4 py-3">Un seul site</td>
              <td className="border border-card-border px-4 py-3">Paramètres du compte joueur</td>
            </tr>
            <tr className="bg-section-bg">
              <td className="border border-card-border px-4 py-3 font-semibold">Blocage bancaire</td>
              <td className="border border-card-border px-4 py-3">Variable</td>
              <td className="border border-card-border px-4 py-3">Tous les paiements vers sites de jeux</td>
              <td className="border border-card-border px-4 py-3">Contact avec votre banque</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Support organizations */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Organismes de soutien en France
      </h2>

      <p className="leading-relaxed mb-4">
        Vous n&apos;êtes pas seul. Plusieurs organismes spécialisés offrent une
        aide gratuite, confidentielle et professionnelle aux joueurs en
        difficulté et à leurs proches. N&apos;attendez pas que la situation
        devienne critique pour demander de l&apos;aide.
      </p>

      <div className="bg-section-bg border border-card-border rounded-lg p-6 mb-8">
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <span className="text-accent-green mt-0.5">&#10003;</span>
            <span>
              <strong>Joueurs Info Service :</strong> 09 74 75 13 13 (appel non
              surtaxé, 7j/7 de 8h à 2h) — écoute, orientation, chat en ligne
              sur joueurs-info-service.fr
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-green mt-0.5">&#10003;</span>
            <span>
              <strong>SOS Joueurs :</strong> 09 69 39 55 12 — association
              reconnue d&apos;utilité publique, accompagnement personnalisé,
              groupes de parole
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-green mt-0.5">&#10003;</span>
            <span>
              <strong>Adictel :</strong> 02 40 84 76 20 — association nantaise
              spécialisée dans l&apos;addiction aux jeux, consultations
              individuelles et familiales
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-green mt-0.5">&#10003;</span>
            <span>
              <strong>CSAPA :</strong> Centres de Soins, d&apos;Accompagnement
              et de Prévention en Addictologie — consultations gratuites dans
              toute la France via votre médecin traitant
            </span>
          </li>
        </ul>
      </div>

      {/* Recovery steps */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Les étapes du rétablissement
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gold-light">
        Étape 1 : Reconnaître le problème
      </h3>
      <p className="leading-relaxed mb-4">
        C&apos;est souvent l&apos;étape la plus difficile. Admettre que le jeu
        est devenu un problème nécessite du courage. Parlez-en à une personne de
        confiance ou appelez directement une ligne d&apos;écoute. Le simple fait
        de verbaliser la situation constitue déjà un premier pas majeur.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gold-light">
        Étape 2 : Se protéger immédiatement
      </h3>
      <p className="leading-relaxed mb-4">
        Activez l&apos;auto-exclusion sur tous les sites où vous avez un compte.
        Demandez l&apos;interdiction volontaire auprès de l&apos;ANJ si
        nécessaire. Confiez la gestion de vos finances à une personne de
        confiance le temps du rétablissement. Supprimez les applications de
        casino de votre téléphone.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gold-light">
        Étape 3 : Consulter un professionnel
      </h3>
      <p className="leading-relaxed mb-4">
        Un psychologue ou un addictologue spécialisé peut vous accompagner avec
        des thérapies cognitivo-comportementales (TCC) qui ont prouvé leur
        efficacité dans le traitement du jeu pathologique. Les CSAPA offrent ces
        consultations gratuitement.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gold-light">
        Étape 4 : Construire un nouveau quotidien
      </h3>
      <p className="leading-relaxed mb-8">
        Remplacez le temps consacré au jeu par des activités positives : sport,
        sorties culturelles, bénévolat. Rejoignez un groupe de parole pour
        partager votre expérience avec d&apos;autres personnes en
        rétablissement. Le soutien des pairs est un facteur clé de réussite à
        long terme.
      </p>

      {/* Pros & Cons */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Avantages et limites de l&apos;auto-exclusion
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-section-bg border border-card-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-accent-green mb-4">
            Avantages
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-accent-green mt-0.5">&#10003;</span>
              <span>Barrière physique empêchant l&apos;accès au jeu</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-green mt-0.5">&#10003;</span>
              <span>Suppression des communications marketing du casino</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-green mt-0.5">&#10003;</span>
              <span>Interdiction ANJ couvre tous les sites licenciés en France</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-green mt-0.5">&#10003;</span>
              <span>Démarches gratuites et confidentielles</span>
            </li>
          </ul>
        </div>
        <div className="bg-section-bg border border-card-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-accent-red mb-4">
            Limites
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-accent-red mt-0.5">&#10007;</span>
              <span>Ne couvre pas les sites offshore non licenciés</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-red mt-0.5">&#10007;</span>
              <span>L&apos;interdiction ANJ a une durée minimale de 3 ans</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-red mt-0.5">&#10007;</span>
              <span>Ne traite pas la cause profonde de l&apos;addiction</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-red mt-0.5">&#10007;</span>
              <span>Possibilité de contournement via de nouveaux comptes offshore</span>
            </li>
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Questions fréquentes sur l&apos;addiction aux jeux
      </h2>

      <div className="space-y-4 mb-8">
        <details className="bg-section-bg border border-card-border rounded-lg p-4 group">
          <summary className="cursor-pointer font-semibold text-gold-light group-open:mb-2">
            L&apos;addiction aux jeux est-elle une vraie maladie ?
          </summary>
          <p className="text-muted leading-relaxed">
            Oui, le trouble du jeu d&apos;argent est officiellement reconnu
            comme un trouble addictif par l&apos;Organisation mondiale de la
            santé (CIM-11) et par le Manuel diagnostique et statistique des
            troubles mentaux (DSM-5). Il s&apos;agit d&apos;une pathologie qui
            modifie le fonctionnement du circuit de récompense du cerveau et qui
            nécessite une prise en charge professionnelle.
          </p>
        </details>

        <details className="bg-section-bg border border-card-border rounded-lg p-4 group">
          <summary className="cursor-pointer font-semibold text-gold-light group-open:mb-2">
            Comment aider un proche qui a un problème de jeu ?
          </summary>
          <p className="text-muted leading-relaxed">
            Abordez le sujet avec bienveillance, sans jugement ni accusation.
            Exprimez vos inquiétudes en décrivant les changements que vous avez
            observés. Proposez-lui de contacter ensemble Joueurs Info Service
            (09 74 75 13 13). Ne prêtez pas d&apos;argent et ne couvrez pas ses
            dettes, car cela peut prolonger le problème. Les associations comme
            SOS Joueurs proposent aussi un accompagnement spécifique pour
            l&apos;entourage.
          </p>
        </details>

        <details className="bg-section-bg border border-card-border rounded-lg p-4 group">
          <summary className="cursor-pointer font-semibold text-gold-light group-open:mb-2">
            Peut-on se remettre d&apos;une addiction aux jeux ?
          </summary>
          <p className="text-muted leading-relaxed">
            Oui, le rétablissement est tout à fait possible. Les thérapies
            cognitivo-comportementales (TCC) montrent un taux de réussite élevé.
            De nombreuses personnes retrouvent une vie équilibrée après un
            traitement adapté. Le rétablissement est un processus qui demande du
            temps et du soutien, mais des milliers de joueurs y parviennent
            chaque année en France.
          </p>
        </details>

        <details className="bg-section-bg border border-card-border rounded-lg p-4 group">
          <summary className="cursor-pointer font-semibold text-gold-light group-open:mb-2">
            L&apos;interdiction volontaire ANJ est-elle définitive ?
          </summary>
          <p className="text-muted leading-relaxed">
            Non, l&apos;interdiction volontaire a une durée minimale de 3 ans.
            Passé ce délai, vous pouvez demander sa levée par courrier auprès de
            l&apos;ANJ. Cependant, la levée n&apos;est pas automatique : elle
            fait l&apos;objet d&apos;un examen. Beaucoup de professionnels
            recommandent de maintenir l&apos;interdiction le plus longtemps
            possible pour sécuriser le rétablissement.
          </p>
        </details>

        <details className="bg-section-bg border border-card-border rounded-lg p-4 group">
          <summary className="cursor-pointer font-semibold text-gold-light group-open:mb-2">
            Les casinos en ligne sont-ils plus addictifs que les casinos terrestres ?
          </summary>
          <p className="text-muted leading-relaxed">
            Les jeux en ligne présentent des facteurs de risque spécifiques :
            accessibilité 24h/24, rapidité des jeux, absence de repères
            temporels et facilité des dépôts. Cependant, l&apos;addiction dépend
            aussi de facteurs individuels (vulnérabilité psychologique,
            antécédents familiaux). Les outils d&apos;auto-limitation en ligne
            peuvent paradoxalement offrir une meilleure protection que les
            casinos physiques.
          </p>
        </details>
      </div>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Conclusion : n&apos;attendez pas pour agir
      </h2>

      <p className="leading-relaxed mb-4">
        L&apos;addiction aux jeux est un trouble sérieux mais traitable. Si vous
        reconnaissez certains des signes décrits dans cet article chez vous ou
        chez un proche, n&apos;attendez pas que la situation s&apos;aggrave. Les
        ressources existent, elles sont gratuites et confidentielles. Le premier
        pas est souvent le plus difficile, mais c&apos;est aussi le plus
        important.
      </p>

      <p className="leading-relaxed mb-4">
        Le jeu de casino doit rester un divertissement. Quand il cesse
        d&apos;être un plaisir pour devenir une contrainte, une obsession ou
        une source de souffrance, il est temps d&apos;agir. Vous méritez une
        vie équilibrée et sereine — et elle est à votre portée.
      </p>

      <div className="bg-section-bg border border-card-border rounded-lg p-6 mt-8 text-center">
        <p className="text-gold font-semibold text-lg mb-2">
          Besoin d&apos;aide ? Contactez Joueurs Info Service
        </p>
        <p className="text-2xl font-bold text-gold-light">09 74 75 13 13</p>
        <p className="text-muted text-sm mt-2">
          Appel non surtaxé — 7j/7 de 8h à 2h | Chat en ligne : joueurs-info-service.fr
        </p>
      </div>
    </article>
  );
}
