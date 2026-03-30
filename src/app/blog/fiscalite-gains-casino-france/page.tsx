import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "Fiscalité Gains Casino France : Guide Complet 2026",
  description:
    "Tout savoir sur l\u2019imposition des gains de casino en France : seuils, CSG/CRDS, crypto, déclaration fiscale et exemples pratiques pour 2026.",
};

export default function FiscaliteGainsCasinoFrance() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumb items={[
        { label: "Blog", href: "/blog" },
        { label: "Fiscalite gains casino France" },
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
        Fiscalité des Gains de Casino en France : Guide Complet 2026
      </h1>

      <p className="text-muted mb-4 text-sm">
        Mot-clé cible : <em>impôt gains casino France</em> | Dernière mise à
        jour : mars 2026
      </p>

      <div className="bg-section-bg border border-card-border rounded-lg p-8 mb-8 text-center text-muted text-sm italic">
        [Image : Formulaire de déclaration de revenus français avec des jetons
        de casino et des billets euros. Alt text : Fiscalité des gains de casino
        en France — déclaration de revenus et jetons]
      </div>

      <p className="text-lg leading-relaxed mb-6">
        Vous avez décroché un jackpot ou accumulé des gains réguliers au casino
        en ligne ? Félicitations. Mais avant de dépenser cet argent, il est
        essentiel de comprendre vos obligations fiscales. En France, la
        fiscalité des gains de jeux d&apos;argent obéit à des règles précises
        qui varient selon le type de jeu, le montant gagné et la plateforme
        utilisée. Ce guide 2026 vous explique tout ce que vous devez savoir pour
        rester en conformité avec le fisc.
      </p>

      <p className="leading-relaxed mb-8">
        Contrairement à une croyance répandue, tous les gains de casino ne sont
        pas exonérés d&apos;impôts. Si les gains occasionnels de jeux de hasard
        purs échappent généralement à l&apos;impôt sur le revenu, d&apos;autres
        situations peuvent entraîner une imposition significative. Les gains
        issus de jeux régulés par l&apos;ANJ et ceux provenant de plateformes
        offshore ne sont pas traités de la même manière.
      </p>

      {/* General principle */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Le principe général : gains de hasard vs revenus réguliers
      </h2>

      <p className="leading-relaxed mb-4">
        En droit fiscal français, les gains provenant de jeux de hasard purs
        (machines à sous, roulette, loterie) ne sont en principe pas soumis à
        l&apos;impôt sur le revenu car ils ne constituent pas un revenu
        « catégoriel » au sens du Code général des impôts. Toutefois, cette
        exonération connaît des exceptions majeures : les gains importants
        (supérieurs à 1 500 EUR en un seul gain dans un casino physique) sont
        soumis au prélèvement social CSG de 12 %, et les joueurs professionnels
        ou réguliers peuvent être requalifiés en contribuables imposables.
      </p>

      <p className="leading-relaxed mb-8">
        La distinction clé réside entre le joueur occasionnel (dont les gains
        sont considérés comme des « fruits du hasard ») et le joueur
        professionnel ou habituel (dont les gains peuvent être assimilés à des
        bénéfices non commerciaux). L&apos;administration fiscale examine la
        fréquence de jeu, les montants engagés et la régularité des gains pour
        déterminer le statut du joueur.
      </p>

      {/* CSG/CRDS */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        CSG et CRDS : le prélèvement social sur les gains
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gold-light">
        Le seuil de 1 500 EUR
      </h3>
      <p className="leading-relaxed mb-4">
        Dans les casinos physiques, tout gain unitaire supérieur à 1 500 EUR est
        soumis à un prélèvement social de 12 % (CSG à 9,2 % + CRDS à 0,5 % +
        prélèvement de solidarité à 2,3 %). Ce prélèvement est effectué
        directement par le casino avant le versement du gain. En ligne, les
        opérateurs agréés ANJ appliquent un mécanisme similaire.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gold-light">
        Le cas des gains cumulés
      </h3>
      <p className="leading-relaxed mb-8">
        Le seuil de 1 500 EUR s&apos;applique par gain individuel, pas sur
        l&apos;ensemble de vos gains annuels. Ainsi, si vous gagnez 1 000 EUR
        à trois reprises au cours de l&apos;année, aucun prélèvement social ne
        s&apos;applique sur ces gains individuels. En revanche, un gain unique
        de 3 000 EUR sera soumis à la CSG/CRDS, même si vos pertes cumulées
        dépassent ce montant.
      </p>

      {/* Tax by game type table */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Comparatif fiscal par type de jeu
      </h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-card-bg text-gold">
              <th className="border border-card-border px-4 py-3 text-left">Type de Jeu</th>
              <th className="border border-card-border px-4 py-3 text-left">Seuil</th>
              <th className="border border-card-border px-4 py-3 text-left">Taux d&apos;Imposition</th>
              <th className="border border-card-border px-4 py-3 text-left">Déclaration Requise</th>
            </tr>
          </thead>
          <tbody className="text-foreground">
            <tr className="bg-section-bg">
              <td className="border border-card-border px-4 py-3 font-semibold">Machines à sous (casino)</td>
              <td className="border border-card-border px-4 py-3">1 500 EUR / gain</td>
              <td className="border border-card-border px-4 py-3">CSG 12 % (prélevé à la source)</td>
              <td className="border border-card-border px-4 py-3 text-accent-green">Non (prélevé automatiquement)</td>
            </tr>
            <tr>
              <td className="border border-card-border px-4 py-3 font-semibold">Jeux de table (roulette, blackjack)</td>
              <td className="border border-card-border px-4 py-3">1 500 EUR / gain</td>
              <td className="border border-card-border px-4 py-3">CSG 12 % (prélevé à la source)</td>
              <td className="border border-card-border px-4 py-3 text-accent-green">Non (prélevé automatiquement)</td>
            </tr>
            <tr className="bg-section-bg">
              <td className="border border-card-border px-4 py-3 font-semibold">Poker (tournois, gains &gt; 1 500 EUR)</td>
              <td className="border border-card-border px-4 py-3">1 500 EUR / tournoi</td>
              <td className="border border-card-border px-4 py-3">CSG 12 % + possibilité IR si habituel</td>
              <td className="border border-card-border px-4 py-3 text-accent-red">Oui, si joueur habituel (BNC)</td>
            </tr>
            <tr>
              <td className="border border-card-border px-4 py-3 font-semibold">Paris sportifs (ANJ)</td>
              <td className="border border-card-border px-4 py-3">Aucun seuil spécifique</td>
              <td className="border border-card-border px-4 py-3">Exonéré IR (sauf professionnel)</td>
              <td className="border border-card-border px-4 py-3 text-accent-green">Non (sauf gains importants réguliers)</td>
            </tr>
            <tr className="bg-section-bg">
              <td className="border border-card-border px-4 py-3 font-semibold">Casino offshore (non régulé)</td>
              <td className="border border-card-border px-4 py-3">Tout gain</td>
              <td className="border border-card-border px-4 py-3">IR barème progressif + pénalités possibles</td>
              <td className="border border-card-border px-4 py-3 text-accent-red">Oui, obligation déclarative</td>
            </tr>
            <tr>
              <td className="border border-card-border px-4 py-3 font-semibold">Gains en cryptomonnaie</td>
              <td className="border border-card-border px-4 py-3">305 EUR / an de plus-values crypto</td>
              <td className="border border-card-border px-4 py-3">Flat tax 30 % ou barème progressif</td>
              <td className="border border-card-border px-4 py-3 text-accent-red">Oui (formulaire 2086)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Regulated vs Offshore */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Casino régulé ANJ vs casino offshore : impact fiscal
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gold-light">
        Casinos régulés en France
      </h3>
      <p className="leading-relaxed mb-4">
        Les casinos en ligne agréés par l&apos;ANJ prélèvent automatiquement la
        CSG/CRDS sur les gains éligibles. Le joueur n&apos;a aucune démarche
        déclarative à effectuer pour ces prélèvements. Les gains occasionnels
        inférieurs au seuil de 1 500 EUR ne font l&apos;objet d&apos;aucune
        imposition. C&apos;est l&apos;un des avantages majeurs de jouer sur
        des plateformes régulées.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gold-light">
        Casinos offshore
      </h3>
      <p className="leading-relaxed mb-8">
        Les gains provenant de casinos non licenciés en France posent un
        problème fiscal et juridique complexe. D&apos;une part, jouer sur ces
        plateformes est illégal en France. D&apos;autre part, les gains
        éventuels doivent théoriquement être déclarés au titre de l&apos;impôt
        sur le revenu (catégorie BNC). En pratique, déclarer ces gains revient
        à signaler une activité illégale, ce qui peut entraîner des sanctions
        supplémentaires. Notre conseil : jouez exclusivement sur des
        plateformes régulées.
      </p>

      {/* Crypto taxation */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Gains en cryptomonnaie : une fiscalité spécifique
      </h2>

      <p className="leading-relaxed mb-4">
        Les crypto-casinos ajoutent une couche de complexité fiscale. En France,
        la conversion de cryptomonnaies en euros constitue un fait générateur
        d&apos;imposition. Si vous gagnez du Bitcoin ou de l&apos;Ethereum sur
        un casino en ligne et que vous le convertissez en euros, la plus-value
        réalisée est soumise à la flat tax de 30 % (12,8 % d&apos;impôt sur le
        revenu + 17,2 % de prélèvements sociaux) au-delà de 305 EUR de
        plus-values annuelles.
      </p>

      <p className="leading-relaxed mb-8">
        Vous devez également déclarer vos comptes sur les plateformes crypto
        étrangères (formulaire 3916-bis). L&apos;omission de cette déclaration
        est passible d&apos;une amende de 750 EUR par compte non déclaré, portée
        à 1 500 EUR pour les comptes dont la valeur dépasse 50 000 EUR.
      </p>

      {/* Practical examples */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Exemples pratiques de calcul fiscal
      </h2>

      <div className="bg-section-bg border border-card-border rounded-lg p-6 mb-4">
        <h3 className="text-xl font-semibold mb-3 text-gold-light">
          Exemple 1 : Gain de 5 000 EUR aux machines à sous (casino régulé)
        </h3>
        <p className="leading-relaxed mb-2">
          Gain brut : 5 000 EUR. CSG/CRDS (12 %) prélevée automatiquement :
          600 EUR. Gain net perçu : 4 400 EUR. Pas de déclaration à
          l&apos;impôt sur le revenu pour un joueur occasionnel.
        </p>
      </div>

      <div className="bg-section-bg border border-card-border rounded-lg p-6 mb-4">
        <h3 className="text-xl font-semibold mb-3 text-gold-light">
          Exemple 2 : Joueur de poker régulier avec 20 000 EUR de gains annuels
        </h3>
        <p className="leading-relaxed mb-2">
          L&apos;administration fiscale peut requalifier ces gains en BNC
          (Bénéfices Non Commerciaux). Imposition au barème progressif de
          l&apos;IR + prélèvements sociaux. Si TMI à 30 % : environ 6 000 EUR
          d&apos;IR + 3 440 EUR de prélèvements sociaux, soit environ 9 440 EUR
          d&apos;impôts.
        </p>
      </div>

      <div className="bg-section-bg border border-card-border rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-3 text-gold-light">
          Exemple 3 : Gain de 2 BTC converti en euros (valeur 80 000 EUR)
        </h3>
        <p className="leading-relaxed mb-2">
          Plus-value à déclarer sur formulaire 2086. Flat tax 30 % applicable
          sur la plus-value réalisée (prix de cession - prix d&apos;acquisition).
          Si la plus-value nette est de 50 000 EUR : impôt de 15 000 EUR.
          Obligation de déclarer le compte crypto étranger (3916-bis).
        </p>
      </div>

      {/* Pros & Cons */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Avantages et inconvénients du système fiscal français
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-section-bg border border-card-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-accent-green mb-4">
            Avantages
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-accent-green mt-0.5">&#10003;</span>
              <span>Gains occasionnels de hasard pur exonérés d&apos;IR</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-green mt-0.5">&#10003;</span>
              <span>Prélèvement CSG automatique sur casinos régulés (aucune démarche)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-green mt-0.5">&#10003;</span>
              <span>Seuil de 1 500 EUR protégeant les petits gains</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-green mt-0.5">&#10003;</span>
              <span>Cadre légal clair pour les jeux régulés ANJ</span>
            </li>
          </ul>
        </div>
        <div className="bg-section-bg border border-card-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-accent-red mb-4">
            Inconvénients
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-accent-red mt-0.5">&#10007;</span>
              <span>CSG de 12 % non déductible sur les gains de jeux</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-red mt-0.5">&#10007;</span>
              <span>Pertes non déductibles des gains (pas de compensation)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-red mt-0.5">&#10007;</span>
              <span>Flou juridique pour les joueurs de poker « semi-professionnels »</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-red mt-0.5">&#10007;</span>
              <span>Complexité accrue pour les gains en cryptomonnaie</span>
            </li>
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Questions fréquentes sur la fiscalité des gains casino
      </h2>

      <div className="space-y-4 mb-8">
        <details className="bg-section-bg border border-card-border rounded-lg p-4 group">
          <summary className="cursor-pointer font-semibold text-gold-light group-open:mb-2">
            Dois-je déclarer mes gains de casino en ligne sur ma déclaration de revenus ?
          </summary>
          <p className="text-muted leading-relaxed">
            Pour les gains occasionnels sur des casinos régulés ANJ, non. La
            CSG/CRDS est prélevée automatiquement par l&apos;opérateur. En
            revanche, si vous êtes considéré comme un joueur habituel ou
            professionnel (gains réguliers et significatifs), vous devez déclarer
            vos gains comme des BNC. En cas de doute, consultez un
            expert-comptable ou votre centre des impôts.
          </p>
        </details>

        <details className="bg-section-bg border border-card-border rounded-lg p-4 group">
          <summary className="cursor-pointer font-semibold text-gold-light group-open:mb-2">
            Puis-je déduire mes pertes de mes gains imposables ?
          </summary>
          <p className="text-muted leading-relaxed">
            Non. En France, les pertes de jeu ne sont pas déductibles des gains
            imposables. Chaque gain est considéré indépendamment. Même si vous
            avez perdu 10 000 EUR avant de gagner 5 000 EUR, la CSG/CRDS
            s&apos;appliquera sur le gain de 5 000 EUR (s&apos;il dépasse le
            seuil). C&apos;est une différence majeure avec certains pays comme
            les États-Unis.
          </p>
        </details>

        <details className="bg-section-bg border border-card-border rounded-lg p-4 group">
          <summary className="cursor-pointer font-semibold text-gold-light group-open:mb-2">
            Que risque-t-on en ne déclarant pas ses gains offshore ?
          </summary>
          <p className="text-muted leading-relaxed">
            La non-déclaration de revenus constitue une fraude fiscale passible
            de sanctions pouvant aller jusqu&apos;à 80 % de majoration sur les
            impôts dus, plus des intérêts de retard. S&apos;ajoutent les
            sanctions pénales liées au jeu sur des plateformes illégales. Le
            fisc dispose de moyens de détection (échanges automatiques
            d&apos;informations bancaires, surveillance des flux crypto) de plus
            en plus performants.
          </p>
        </details>

        <details className="bg-section-bg border border-card-border rounded-lg p-4 group">
          <summary className="cursor-pointer font-semibold text-gold-light group-open:mb-2">
            Les gains de bonus casino sont-ils imposables ?
          </summary>
          <p className="text-muted leading-relaxed">
            Les bonus eux-mêmes ne sont pas imposables tant qu&apos;ils ne sont
            pas convertis en gains retirables. Une fois les conditions de mise
            remplies et le retrait effectué, le gain est traité comme tout autre
            gain de casino : soumis à la CSG/CRDS s&apos;il dépasse 1 500 EUR
            en un seul retrait sur un casino régulé.
          </p>
        </details>
      </div>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Conclusion : jouez en toute connaissance fiscale
      </h2>

      <p className="leading-relaxed mb-4">
        La fiscalité des gains de casino en France est relativement favorable
        pour le joueur occasionnel : pas d&apos;impôt sur le revenu sur les
        gains de hasard pur, et un prélèvement social automatique sur les gros
        gains. En revanche, la situation se complique pour les joueurs réguliers,
        les adeptes du poker et les utilisateurs de crypto-casinos.
      </p>

      <p className="leading-relaxed mb-4">
        Notre recommandation : jouez exclusivement sur des plateformes régulées
        par l&apos;ANJ pour bénéficier d&apos;un cadre fiscal clair et
        automatisé. En cas de gains importants ou de pratique régulière,
        consultez un professionnel du chiffre pour optimiser votre situation
        fiscale en toute légalité. La transparence avec le fisc est toujours la
        meilleure stratégie à long terme.
      </p>

      <div className="bg-section-bg border border-card-border rounded-lg p-6 mt-8 text-center">
        <p className="text-gold font-semibold text-lg mb-2">
          Avertissement
        </p>
        <p className="text-muted text-sm">
          Ce guide est fourni à titre informatif uniquement et ne constitue pas
          un conseil fiscal. Consultez un expert-comptable ou l&apos;administration
          fiscale pour votre situation personnelle.
        </p>
      </div>

      <FaqSchema faqs={[
        { question: "Dois-je declarer mes gains de casino en ligne sur ma declaration de revenus ?", answer: "Pour les gains occasionnels sur des casinos regules ANJ, non. La CSG/CRDS est prelevee automatiquement par l'operateur. En revanche, si vous etes considere comme un joueur habituel ou professionnel (gains reguliers et significatifs), vous devez declarer vos gains comme des BNC. En cas de doute, consultez un expert-comptable ou votre centre des impots." },
        { question: "Puis-je deduire mes pertes de mes gains imposables ?", answer: "Non. En France, les pertes de jeu ne sont pas deductibles des gains imposables. Chaque gain est considere independamment. Meme si vous avez perdu 10 000 EUR avant de gagner 5 000 EUR, la CSG/CRDS s'appliquera sur le gain de 5 000 EUR (s'il depasse le seuil). C'est une difference majeure avec certains pays comme les Etats-Unis." },
        { question: "Que risque-t-on en ne declarant pas ses gains offshore ?", answer: "La non-declaration de revenus constitue une fraude fiscale passible de sanctions pouvant aller jusqu'a 80 % de majoration sur les impots dus, plus des interets de retard. S'ajoutent les sanctions penales liees au jeu sur des plateformes illegales. Le fisc dispose de moyens de detection (echanges automatiques d'informations bancaires, surveillance des flux crypto) de plus en plus performants." },
        { question: "Les gains de bonus casino sont-ils imposables ?", answer: "Les bonus eux-memes ne sont pas imposables tant qu'ils ne sont pas convertis en gains retirables. Une fois les conditions de mise remplies et le retrait effectue, le gain est traite comme tout autre gain de casino : soumis a la CSG/CRDS s'il depasse 1 500 EUR en un seul retrait sur un casino regule." },
      ]} />
    </article>
  );
}
