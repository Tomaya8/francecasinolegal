import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card-bg border-t border-card-border mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold mb-3">
              <span className="text-gold">France</span>
              <span className="text-foreground">Casino</span>
              <span className="text-gold-light">Legal</span>
            </p>
            <p className="text-muted text-sm leading-relaxed">
              Votre guide de confiance pour les casinos en ligne légaux et
              sécurisés accessibles aux joueurs français. Informations
              indépendantes et à jour.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gold mb-3">
              Pages Principales
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legalite-regulations" className="text-muted hover:text-gold-light no-underline">
                  Légalité &amp; Régulations
                </Link>
              </li>
              <li>
                <Link href="/fournisseurs-logiciels" className="text-muted hover:text-gold-light no-underline">
                  Fournisseurs de Logiciels
                </Link>
              </li>
              <li>
                <Link href="/solutions-paiement" className="text-muted hover:text-gold-light no-underline">
                  Solutions de Paiement
                </Link>
              </li>
              <li>
                <Link href="/types-de-bonus" className="text-muted hover:text-gold-light no-underline">
                  Types de Bonus
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted hover:text-gold-light no-underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gold mb-3">
              Informations Légales
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-3">
              18+ | Jouer comporte des risques : endettement, dépendance.
              Appelez le 09 74 75 13 13 (appel non surtaxé).
            </p>
            <p className="text-muted text-xs">
              Ce site est strictement informatif et ne propose aucun jeu
              d&apos;argent. Les informations sont fournies à titre éducatif.
            </p>
          </div>
        </div>

        <div className="border-t border-card-border mt-8 pt-6 text-center text-muted text-xs">
          &copy; {new Date().getFullYear()} francecasinolegal.com — Tous droits
          réservés.
        </div>
      </div>
    </footer>
  );
}
