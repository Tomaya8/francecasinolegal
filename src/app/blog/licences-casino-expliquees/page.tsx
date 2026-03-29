import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Licences Casino Expliquées : Curaçao, MGA, ANJ 2026",
  description:
    "Comprendre les licences de casino en ligne : Curaçao, MGA et ANJ. Apprenez à vérifier une licence, les différences clés et les signaux d'alerte.",
};

export default function LicencesCasinoExpliquees() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
        Les Licences de Casino Expliquées : Curaçao, MGA et ANJ — Ce Que Vous
        Devez Savoir
      </h1>

      <p className="text-muted mb-4 text-sm">
        Mot-clé cible : <em>licence casino en ligne</em> | Dernière mise à jour
        : mars 2026
      </p>

      <div className="bg-section-bg border border-card-border rounded-lg p-8 mb-8 text-center text-muted text-sm italic">
        [Image : Logos des autorités de régulation (ANJ, MGA, Curaçao) sur un
        fond de certificat officiel. Alt text : Licences de casino en ligne —
        logos ANJ, MGA et Curaçao pour la régulation des jeux d&apos;argent]
      </div>

      <p className="text-lg leading-relaxed mb-6">
        La licence d&apos;un casino en ligne est le premier indicateur de sa
        fiabilité. Avant de déposer le moindre euro, tout joueur averti devrait
        vérifier sous quelle juridiction le casino opère. Mais toutes les
        licences ne se valent pas : une licence de l&apos;ANJ française offre
        des protections très différentes d&apos;une licence de Curaçao. Ce guide
        détaille les principales autorités de régulation pour vous aider à
        faire des choix éclairés.
      </p>

      <p className="leading-relaxed mb-8">
        Comprendre le système de licences vous protège non seulement contre les
        arnaques, mais vous permet aussi de savoir exactement quels recours sont
        à votre disposition en cas de litige. Nous examinerons chaque autorité
        de régulation en profondeur, leurs exigences et ce qu&apos;elles
        signifient concrètement pour votre expérience de jeu.
      </p>

      {/* ANJ Section */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        L&apos;ANJ (Autorité Nationale des Jeux) — La licence française
      </h2>

      <p className="leading-relaxed mb-4">
        L&apos;Autorité Nationale des Jeux est l&apos;organisme de régulation
        français qui supervise les jeux d&apos;argent en ligne depuis 2020,
        succédant à l&apos;ARJEL. L&apos;ANJ délivre des licences pour les
        paris sportifs, le poker en ligne et les courses hippiques en France.
        Attention : les casinos en ligne (machines à sous, roulette, blackjack)
        ne sont pas autorisés par l&apos;ANJ, ce qui signifie qu&apos;aucun
        casino en ligne ne possède de licence ANJ pour ces jeux.
      </p>

      <p className="leading-relaxed mb-8">
        L&apos;ANJ impose des normes très strictes : vérification d&apos;identité
        obligatoire, plafonds de dépôt, exclusion des joueurs interdits de jeu
        (fichier FDJ/ANJ), et obligation d&apos;informer sur le jeu responsable.
        Les opérateurs licenciés ANJ doivent conserver les fonds des joueurs
        sur des comptes séparés, garantissant leur sécurité en cas de faillite.
      </p>

      {/* MGA Section */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        La MGA (Malta Gaming Authority) — Le standard européen
      </h2>

      <p className="leading-relaxed mb-4">
        La Malta Gaming Authority est considérée comme la référence européenne
        en matière de régulation iGaming. Fondée en 2001, elle supervise des
        centaines d&apos;opérateurs et impose des exigences rigoureuses :
        audits financiers réguliers, tests d&apos;équité des jeux, protection
        des données personnelles (conformité RGPD) et procédures de résolution
        des litiges.
      </p>

      <p className="leading-relaxed mb-8">
        Pour les joueurs français qui accèdent à des casinos non licenciés en
        France, la licence MGA est généralement le meilleur indicateur de
        sérieux. Les casinos sous licence MGA sont tenus de séparer les fonds
        des joueurs, de traiter les retraits dans des délais raisonnables et de
        répondre aux plaintes via un médiateur indépendant.
      </p>

      {/* Curacao Section */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        La licence de Curaçao — Accessibilité versus protection
      </h2>

      <p className="leading-relaxed mb-4">
        Curaçao est l&apos;une des juridictions les plus anciennes en matière de
        licences iGaming (depuis 1996). La Curaçao eGaming Authority délivre
        des licences à un coût bien inférieur à celui de la MGA, ce qui explique
        pourquoi de nombreux casinos en ligne optent pour cette juridiction.
        Depuis 2023, Curaçao a renforcé ses exigences avec une nouvelle loi sur
        les jeux en ligne, mais la supervision reste moins stricte que celle de
        Malte.
      </p>

      <p className="leading-relaxed mb-8">
        Une licence de Curaçao n&apos;est pas synonyme d&apos;arnaque, mais elle
        offre moins de recours aux joueurs en cas de problème. Les procédures
        de plainte sont moins structurées, et les audits moins fréquents. De
        nombreux casinos réputés opèrent sous licence Curaçao, mais il convient
        de redoubler de vigilance et de consulter les avis d&apos;autres joueurs
        avant de s&apos;inscrire.
      </p>

      {/* Comparison Table */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Comparatif détaillé des licences de casino
      </h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-card-bg text-gold">
              <th className="border border-card-border px-4 py-3 text-left">Critère</th>
              <th className="border border-card-border px-4 py-3 text-left">ANJ (France)</th>
              <th className="border border-card-border px-4 py-3 text-left">MGA (Malte)</th>
              <th className="border border-card-border px-4 py-3 text-left">Curaçao</th>
            </tr>
          </thead>
          <tbody className="text-foreground">
            <tr className="bg-section-bg">
              <td className="border border-card-border px-4 py-3 font-semibold">Casino en ligne autorisé</td>
              <td className="border border-card-border px-4 py-3 text-accent-red">Non (paris/poker uniquement)</td>
              <td className="border border-card-border px-4 py-3 text-accent-green">Oui</td>
              <td className="border border-card-border px-4 py-3 text-accent-green">Oui</td>
            </tr>
            <tr>
              <td className="border border-card-border px-4 py-3 font-semibold">Niveau de protection joueur</td>
              <td className="border border-card-border px-4 py-3 text-accent-green">Très élevé</td>
              <td className="border border-card-border px-4 py-3 text-accent-green">Élevé</td>
              <td className="border border-card-border px-4 py-3 text-muted">Modéré</td>
            </tr>
            <tr className="bg-section-bg">
              <td className="border border-card-border px-4 py-3 font-semibold">Séparation des fonds</td>
              <td className="border border-card-border px-4 py-3 text-accent-green">Obligatoire</td>
              <td className="border border-card-border px-4 py-3 text-accent-green">Obligatoire</td>
              <td className="border border-card-border px-4 py-3 text-accent-red">Non garanti</td>
            </tr>
            <tr>
              <td className="border border-card-border px-4 py-3 font-semibold">Résolution de litiges</td>
              <td className="border border-card-border px-4 py-3 text-accent-green">Médiateur officiel</td>
              <td className="border border-card-border px-4 py-3 text-accent-green">Médiateur indépendant</td>
              <td className="border border-card-border px-4 py-3 text-muted">Processus limité</td>
            </tr>
            <tr className="bg-section-bg">
              <td className="border border-card-border px-4 py-3 font-semibold">Audits des jeux</td>
              <td className="border border-card-border px-4 py-3 text-accent-green">Réguliers et stricts</td>
              <td className="border border-card-border px-4 py-3 text-accent-green">Réguliers</td>
              <td className="border border-card-border px-4 py-3 text-muted">Variables</td>
            </tr>
            <tr>
              <td className="border border-card-border px-4 py-3 font-semibold">Coût de la licence</td>
              <td className="border border-card-border px-4 py-3">Très élevé</td>
              <td className="border border-card-border px-4 py-3">Élevé (25 000 EUR+)</td>
              <td className="border border-card-border px-4 py-3">Modéré (5 000 EUR+)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* How to Verify */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Comment vérifier la licence d&apos;un casino en ligne
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gold-light">
        Étape 1 : Cherchez le numéro de licence
      </h3>
      <p className="leading-relaxed mb-4">
        Tout casino licencié affiche son numéro de licence en bas de page
        (footer). Pour une licence MGA, vous verrez un numéro du type
        MGA/B2C/XXX/20XX. Pour Curaçao, cherchez un numéro de sous-licence
        (ex. : 8048/JAZ ou Curaçao eGaming licence N° XXXX).
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gold-light">
        Étape 2 : Vérifiez sur le site officiel de l&apos;autorité
      </h3>
      <p className="leading-relaxed mb-4">
        Pour la MGA, rendez-vous sur le site officiel mga.org.mt et utilisez le
        registre des licences pour confirmer que le numéro est valide et actif.
        Pour l&apos;ANJ, consultez la liste officielle des opérateurs agréés sur
        anj.fr. Pour Curaçao, vérifiez sur le site de l&apos;autorité
        compétente.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gold-light">
        Étape 3 : Vérifiez la cohérence des informations
      </h3>
      <p className="leading-relaxed mb-8">
        Le nom de l&apos;entreprise sur la licence doit correspondre à celui
        mentionné dans les conditions générales du casino. Si le casino affiche
        un logo MGA mais que le numéro de licence est introuvable dans le
        registre, c&apos;est un signal d&apos;alerte majeur.
      </p>

      {/* Red Flags */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Signaux d&apos;alerte : comment repérer un casino non fiable
      </h2>

      <div className="bg-card-bg border border-card-border rounded-lg p-6 mb-8">
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <span className="text-accent-red mt-0.5">&#10007;</span>
            <span>Aucun numéro de licence visible sur le site</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-red mt-0.5">&#10007;</span>
            <span>Numéro de licence présent mais introuvable sur le registre officiel</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-red mt-0.5">&#10007;</span>
            <span>Pas de conditions générales ou CGU incomplètes</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-red mt-0.5">&#10007;</span>
            <span>Service client injoignable ou absent</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-red mt-0.5">&#10007;</span>
            <span>Bonus irréalistes sans conditions de mise mentionnées</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-red mt-0.5">&#10007;</span>
            <span>Avis massivement négatifs concernant les retraits</span>
          </li>
        </ul>
      </div>

      {/* Pros & Cons */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Avantages et inconvénients de chaque licence
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-card-bg border border-card-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-accent-green mb-4">
            Avantages d&apos;une licence stricte (ANJ/MGA)
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-accent-green mt-0.5">&#10003;</span>
              <span>Protection maximale des fonds des joueurs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-green mt-0.5">&#10003;</span>
              <span>Recours en cas de litige via un médiateur</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-green mt-0.5">&#10003;</span>
              <span>Jeux régulièrement audités pour leur équité</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-green mt-0.5">&#10003;</span>
              <span>Outils de jeu responsable obligatoires</span>
            </li>
          </ul>
        </div>
        <div className="bg-card-bg border border-card-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-accent-red mb-4">
            Inconvénients d&apos;une licence stricte
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-accent-red mt-0.5">&#10007;</span>
              <span>Offre de jeux parfois restreinte (pas de slots pour l&apos;ANJ)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-red mt-0.5">&#10007;</span>
              <span>Vérification KYC plus lourde et délais d&apos;inscription</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-red mt-0.5">&#10007;</span>
              <span>Bonus souvent moins généreux en raison des régulations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-red mt-0.5">&#10007;</span>
              <span>Limites de dépôt imposées par le régulateur</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-section-bg border border-card-border rounded-lg p-8 mb-8 text-center text-muted text-sm italic">
        [Image : Capture d&apos;écran montrant l&apos;emplacement d&apos;un
        numéro de licence en bas de page d&apos;un casino en ligne. Alt text :
        Vérification de licence casino — numéro de licence MGA visible en bas
        de page d&apos;un site de casino]
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Questions fréquentes sur les licences de casino
      </h2>

      <div className="space-y-4 mb-8">
        <details className="bg-card-bg border border-card-border rounded-lg p-4 group">
          <summary className="cursor-pointer font-semibold text-gold-light group-open:mb-2">
            Est-il illégal de jouer sur un casino non licencié en France ?
          </summary>
          <p className="text-muted leading-relaxed">
            En France, c&apos;est l&apos;opérateur non licencié qui est en
            infraction, pas le joueur. Cependant, jouer sur un site sans licence
            reconnue vous expose à des risques importants : aucun recours en cas
            de litige, aucune garantie sur la sécurité de vos fonds, et pas de
            protection de vos données personnelles. Il est toujours préférable de
            choisir un casino sous licence MGA ou ANJ.
          </p>
        </details>

        <details className="bg-card-bg border border-card-border rounded-lg p-4 group">
          <summary className="cursor-pointer font-semibold text-gold-light group-open:mb-2">
            Quelle est la meilleure licence pour un casino en ligne ?
          </summary>
          <p className="text-muted leading-relaxed">
            Pour les joueurs français, la licence MGA est généralement considérée
            comme le meilleur compromis entre offre de jeux complète et
            protection élevée. L&apos;ANJ offre la meilleure protection mais ne
            couvre pas les casinos en ligne (slots, roulette). La licence de
            Curaçao est acceptable mais avec un niveau de protection inférieur.
          </p>
        </details>

        <details className="bg-card-bg border border-card-border rounded-lg p-4 group">
          <summary className="cursor-pointer font-semibold text-gold-light group-open:mb-2">
            Un casino peut-il avoir plusieurs licences ?
          </summary>
          <p className="text-muted leading-relaxed">
            Oui, certains grands opérateurs détiennent des licences dans
            plusieurs juridictions. Par exemple, un casino peut être licencié par
            la MGA pour le marché européen et par l&apos;UKGC pour le marché
            britannique. Détenir plusieurs licences est souvent un signe positif,
            car cela démontre la volonté de l&apos;opérateur de se conformer à
            des régulations strictes dans plusieurs pays.
          </p>
        </details>

        <details className="bg-card-bg border border-card-border rounded-lg p-4 group">
          <summary className="cursor-pointer font-semibold text-gold-light group-open:mb-2">
            Que faire si un casino licencié refuse de payer mes gains ?
          </summary>
          <p className="text-muted leading-relaxed">
            Commencez par contacter le service client du casino et documentez
            tous vos échanges. Si le problème persiste, déposez une plainte
            auprès de l&apos;autorité de régulation qui a délivré la licence. Pour
            la MGA, utilisez le formulaire de plainte en ligne sur mga.org.mt.
            Pour l&apos;ANJ, contactez-les via anj.fr. Les médiateurs
            indépendants comme eCOGRA ou The POGG peuvent également intervenir.
          </p>
        </details>

        <details className="bg-card-bg border border-card-border rounded-lg p-4 group">
          <summary className="cursor-pointer font-semibold text-gold-light group-open:mb-2">
            Comment savoir si une licence Curaçao est authentique ?
          </summary>
          <p className="text-muted leading-relaxed">
            Vérifiez que le casino affiche un sceau de validation cliquable qui
            redirige vers le site officiel de l&apos;autorité de Curaçao. Le
            numéro de licence doit correspondre à l&apos;entreprise exploitant le
            casino. Méfiez-vous des casinos qui affichent simplement un logo
            Curaçao sans lien de vérification fonctionnel : il pourrait s&apos;agir
            d&apos;un faux.
          </p>
        </details>
      </div>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Conclusion : choisissez toujours un casino licencié
      </h2>

      <p className="leading-relaxed mb-4">
        La licence d&apos;un casino en ligne n&apos;est pas un simple détail
        administratif : c&apos;est votre première ligne de défense en tant que
        joueur. Privilégiez les casinos sous licence MGA pour une combinaison
        optimale de sécurité et d&apos;offre de jeux. Vérifiez systématiquement
        le numéro de licence avant de vous inscrire et n&apos;hésitez pas à
        consulter les registres officiels.
      </p>

      <p className="leading-relaxed mb-4">
        Un casino qui ne peut pas prouver sa licence est un casino à éviter,
        peu importe l&apos;attractivité de ses bonus ou de son catalogue de
        jeux. Votre sécurité financière et la protection de vos données
        personnelles en dépendent.
      </p>
    </article>
  );
}
