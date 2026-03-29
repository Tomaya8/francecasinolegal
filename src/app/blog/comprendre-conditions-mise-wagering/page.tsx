import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comprendre les conditions de mise (Wagering) casino",
  description:
    "Calcul du wagering, contribution des jeux, pi&egrave;ges &agrave; &eacute;viter et astuces pour &eacute;valuer si un bonus casino vaut vraiment le coup.",
};

export default function ComprendreWagering() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
        Comprendre les conditions de mise (Wagering) avant d&rsquo;accepter un bonus
      </h1>

      <p className="text-muted mb-4 text-sm">
        Mot-cl&eacute; cible : <em>conditions de mise casino</em> | Derni&egrave;re mise &agrave; jour : mars 2026
      </p>

      <div className="bg-section-bg border border-card-border rounded-lg p-8 mb-8 text-center text-muted text-sm italic">
        [Image : Calculatrice pos&eacute;e sur une table de casino avec des jetons empil&eacute;s et un document de conditions. Alt text : Conditions de mise wagering &mdash; calculatrice et jetons de casino pour comprendre les exigences de mise]
      </div>

      <p className="text-lg leading-relaxed mb-6">
        Vous venez de recevoir un bonus de 200&nbsp;&euro; sur votre casino en ligne pr&eacute;f&eacute;r&eacute;. G&eacute;nial, non ? Pas si vite. Derri&egrave;re cette offre all&eacute;chante se cache un m&eacute;canisme essentiel que tout joueur doit comprendre : les conditions de mise, &eacute;galement appel&eacute;es &laquo;&nbsp;wagering requirements&nbsp;&raquo; en anglais. Ces conditions d&eacute;terminent le montant total que vous devez miser avant de pouvoir retirer vos gains issus du bonus.
      </p>

      <p className="leading-relaxed mb-8">
        Dans cet article, nous allons d&eacute;crypter le fonctionnement du wagering avec des exemples concrets, expliquer la contribution des diff&eacute;rents jeux, et vous donner les cl&eacute;s pour &eacute;valuer si un bonus vaut r&eacute;ellement la peine d&rsquo;&ecirc;tre accept&eacute;.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Qu&rsquo;est-ce que le wagering exactement ?
      </h2>
      <p className="leading-relaxed mb-4">
        Le wagering (ou conditions de mise) est un multiplicateur appliqu&eacute; au montant du bonus (et parfois au d&eacute;p&ocirc;t) qui indique combien de fois vous devez miser cette somme avant de pouvoir retirer vos gains. Par exemple, un bonus de 100&nbsp;&euro; avec un wagering x30 signifie que vous devez placer un total de 3&nbsp;000&nbsp;&euro; de mises &mdash; pas forc&eacute;ment perdre 3&nbsp;000&nbsp;&euro;, mais bien miser ce montant en cumulé.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">
        Exemple de calcul concret
      </h3>
      <div className="bg-card-bg border border-card-border rounded-lg p-6 mb-6">
        <p className="text-sm leading-relaxed mb-2">
          <strong className="text-gold">Situation :</strong> Vous d&eacute;posez 100&nbsp;&euro; et recevez un bonus de 100&nbsp;% (soit 100&nbsp;&euro; de bonus). Le wagering est de x35 sur le bonus uniquement.
        </p>
        <p className="text-sm leading-relaxed mb-2">
          <strong className="text-gold">Calcul :</strong> 100&nbsp;&euro; (bonus) &times; 35 = 3&nbsp;500&nbsp;&euro; de mises requises.
        </p>
        <p className="text-sm leading-relaxed">
          <strong className="text-gold">Attention :</strong> Si le wagering s&rsquo;applique au &laquo;&nbsp;d&eacute;p&ocirc;t + bonus&nbsp;&raquo;, le calcul devient : (100 + 100) &times; 35 = 7&nbsp;000&nbsp;&euro;. C&rsquo;est le double !
        </p>
      </div>

      {/* Section 2 */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Contribution des jeux au wagering
      </h2>
      <p className="leading-relaxed mb-4">
        Tous les jeux ne contribuent pas de la m&ecirc;me mani&egrave;re &agrave; l&rsquo;accomplissement des conditions de mise. Les machines &agrave; sous contribuent g&eacute;n&eacute;ralement &agrave; 100&nbsp;%, tandis que les jeux de table ont une contribution r&eacute;duite, voire nulle. Cela signifie que miser 100&nbsp;&euro; &agrave; la roulette peut ne compter que pour 10&nbsp;&euro; dans votre progression de wagering.
      </p>

      {/* Contribution Table */}
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-card-bg text-gold">
              <th className="border border-card-border px-4 py-3 text-left">Type de jeu</th>
              <th className="border border-card-border px-4 py-3 text-left">Contribution typique</th>
              <th className="border border-card-border px-4 py-3 text-left">Impact sur le wagering</th>
            </tr>
          </thead>
          <tbody className="text-foreground">
            <tr className="bg-section-bg">
              <td className="border border-card-border px-4 py-3 font-medium">Machines &agrave; sous (Slots)</td>
              <td className="border border-card-border px-4 py-3">100 %</td>
              <td className="border border-card-border px-4 py-3">Chaque euro mis&eacute; compte int&eacute;gralement</td>
            </tr>
            <tr>
              <td className="border border-card-border px-4 py-3 font-medium">Roulette</td>
              <td className="border border-card-border px-4 py-3">10 &mdash; 20 %</td>
              <td className="border border-card-border px-4 py-3">100&nbsp;&euro; mis&eacute;s = 10 &agrave; 20&nbsp;&euro; compt&eacute;s</td>
            </tr>
            <tr className="bg-section-bg">
              <td className="border border-card-border px-4 py-3 font-medium">Blackjack</td>
              <td className="border border-card-border px-4 py-3">5 &mdash; 10 %</td>
              <td className="border border-card-border px-4 py-3">Tr&egrave;s lent pour compl&eacute;ter le wagering</td>
            </tr>
            <tr>
              <td className="border border-card-border px-4 py-3 font-medium">Vid&eacute;o Poker</td>
              <td className="border border-card-border px-4 py-3">10 &mdash; 25 %</td>
              <td className="border border-card-border px-4 py-3">Variable selon les casinos</td>
            </tr>
            <tr className="bg-section-bg">
              <td className="border border-card-border px-4 py-3 font-medium">Baccarat</td>
              <td className="border border-card-border px-4 py-3">5 &mdash; 15 %</td>
              <td className="border border-card-border px-4 py-3">Rarement favorable au wagering</td>
            </tr>
            <tr>
              <td className="border border-card-border px-4 py-3 font-medium">Casino en direct (Live)</td>
              <td className="border border-card-border px-4 py-3">0 &mdash; 10 %</td>
              <td className="border border-card-border px-4 py-3">Souvent exclu compl&egrave;tement</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 3 */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Comment &eacute;valuer si un bonus vaut le coup ?
      </h2>
      <h3 className="text-xl font-semibold mt-6 mb-3">
        La r&egrave;gle d&rsquo;or du wagering
      </h3>
      <p className="leading-relaxed mb-4">
        En r&egrave;gle g&eacute;n&eacute;rale, un wagering inf&eacute;rieur &agrave; x30 est consid&eacute;r&eacute; comme raisonnable. Entre x30 et x40, c&rsquo;est acceptable mais exigeant. Au-del&agrave; de x40, le bonus devient tr&egrave;s difficile &agrave; convertir en gains retirables. Et au-dessus de x50, autant refuser le bonus et jouer avec votre propre argent.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">
        Autres conditions &agrave; v&eacute;rifier
      </h3>
      <p className="leading-relaxed mb-4">
        Le wagering n&rsquo;est pas la seule condition. V&eacute;rifiez &eacute;galement le d&eacute;lai d&rsquo;expiration du bonus (souvent 7 &agrave; 30 jours), la mise maximale autoris&eacute;e par tour (g&eacute;n&eacute;ralement 5&nbsp;&euro;), les jeux exclus, et le plafond de gains retirables &agrave; partir du bonus. Un bonus de 100&nbsp;&euro; avec un gain maximum de 200&nbsp;&euro; est bien moins int&eacute;ressant qu&rsquo;un bonus sans plafond.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">
        Astuces pour optimiser vos bonus
      </h3>
      <p className="leading-relaxed mb-8">
        Jouez prioritairement sur des slots &agrave; contribution 100&nbsp;% avec un RTP &eacute;lev&eacute; (96&nbsp;%+). &Eacute;vitez les mises trop &eacute;lev&eacute;es qui risquent de vider votre solde rapidement. G&eacute;rez votre bankroll en fixant des sessions de jeu limit&eacute;es et suivez votre progression de wagering dans le tableau de bord du casino. Enfin, comparez toujours plusieurs offres avant d&rsquo;en accepter une.
      </p>

      {/* Pros & Cons */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Avantages et inconv&eacute;nients des bonus avec wagering
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-card-bg border border-card-border rounded-lg p-6">
          <h3 className="text-lg font-bold text-accent-green mb-3">Avantages</h3>
          <ul className="space-y-2 text-sm">
            <li>&#10003; Augmente votre bankroll de d&eacute;part</li>
            <li>&#10003; Permet de tester des jeux sans risquer son propre argent</li>
            <li>&#10003; Prolonge consid&eacute;rablement le temps de jeu</li>
            <li>&#10003; Certains bonus sans d&eacute;p&ocirc;t offrent des gains r&eacute;els sans investissement</li>
          </ul>
        </div>
        <div className="bg-card-bg border border-card-border rounded-lg p-6">
          <h3 className="text-lg font-bold text-accent-red mb-3">Inconv&eacute;nients</h3>
          <ul className="space-y-2 text-sm">
            <li>&#10007; Wagering &eacute;lev&eacute; rendant le retrait difficile</li>
            <li>&#10007; D&eacute;lais d&rsquo;expiration souvent trop courts</li>
            <li>&#10007; Mise maximale par tour limit&eacute;e (risque d&rsquo;annulation)</li>
            <li>&#10007; Plafond de gains retirables sur certains bonus</li>
            <li>&#10007; Jeux de table souvent exclus ou &agrave; faible contribution</li>
          </ul>
        </div>
      </div>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Conclusion
      </h2>
      <p className="leading-relaxed mb-8">
        Les conditions de mise ne sont pas forc&eacute;ment un pi&egrave;ge &mdash; elles font partie du mod&egrave;le &eacute;conomique des casinos. L&rsquo;important est de les comprendre avant d&rsquo;accepter un bonus. En calculant le wagering r&eacute;el, en v&eacute;rifiant la contribution des jeux et en comparant les offres, vous transformerez un exercice opaque en d&eacute;cision &eacute;clair&eacute;e. Refusez syst&eacute;matiquement les bonus dont le wagering d&eacute;passe x50 et privil&eacute;giez les offres avec des conditions claires et transparentes.
      </p>

      {/* FAQ */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Questions fr&eacute;quentes (FAQ)
      </h2>
      <div className="space-y-4 mb-8">
        <details className="bg-card-bg border border-card-border rounded-lg p-4 group">
          <summary className="font-semibold cursor-pointer text-gold-light group-open:text-gold">
            Que se passe-t-il si je n&rsquo;atteins pas le wagering dans le d&eacute;lai imparti ?
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Si vous ne compl&eacute;tez pas les conditions de mise avant l&rsquo;expiration du bonus (g&eacute;n&eacute;ralement 7 &agrave; 30 jours), le bonus restant et les gains associ&eacute;s seront annul&eacute;s. Votre d&eacute;p&ocirc;t initial reste g&eacute;n&eacute;ralement disponible, mais tous les gains provenant du bonus sont perdus.
          </p>
        </details>
        <details className="bg-card-bg border border-card-border rounded-lg p-4 group">
          <summary className="font-semibold cursor-pointer text-gold-light group-open:text-gold">
            Le wagering s&rsquo;applique-t-il aussi aux tours gratuits (free spins) ?
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Oui, dans la plupart des cas. Les gains issus des tours gratuits sont soumis &agrave; leurs propres conditions de mise, qui peuvent diff&eacute;rer de celles du bonus principal. Certains casinos offrent cependant des tours gratuits &laquo;&nbsp;sans wagering&nbsp;&raquo; (wager-free), ce qui signifie que les gains sont directement retirables.
          </p>
        </details>
        <details className="bg-card-bg border border-card-border rounded-lg p-4 group">
          <summary className="font-semibold cursor-pointer text-gold-light group-open:text-gold">
            Puis-je refuser un bonus et jouer sans conditions de mise ?
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Absolument. Sur la plupart des casinos, vous pouvez d&eacute;cliner le bonus lors du d&eacute;p&ocirc;t ou contacter le support pour le faire retirer. Jouer sans bonus signifie aucune restriction de retrait, aucune mise maximale impos&eacute;e et une libert&eacute; totale sur le choix des jeux.
          </p>
        </details>
        <details className="bg-card-bg border border-card-border rounded-lg p-4 group">
          <summary className="font-semibold cursor-pointer text-gold-light group-open:text-gold">
            Qu&rsquo;est-ce qu&rsquo;un &laquo;&nbsp;sticky bonus&nbsp;&raquo; ?
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Un sticky bonus (ou bonus non retirable) est un bonus dont le montant ne peut jamais &ecirc;tre retir&eacute; &mdash; seuls les gains g&eacute;n&eacute;r&eacute;s avec ce bonus sont retirables apr&egrave;s avoir rempli les conditions de mise. Le montant du bonus est retir&eacute; de votre solde au moment du retrait.
          </p>
        </details>
      </div>
    </article>
  );
}
