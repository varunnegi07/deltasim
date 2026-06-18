import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Mechanical Design", href: "/solutions#mechanical-design" },
    { label: "FEA Analysis", href: "/solutions#fea" },
    { label: "CFD & Thermal", href: "/solutions#cfd" },
    { label: "Optimization", href: "/solutions#optimization" },
    { label: "Failure Analysis", href: "/solutions#failure-analysis" },
  ],
  Talent: [
    { label: "Mechanical Design Engineers", href: "/talent" },
    { label: "FEA Analysts", href: "/talent" },
    { label: "CFD Engineers", href: "/talent" },
    { label: "CAD Designers", href: "/talent" },
    { label: "Simulation Specialists", href: "/simulation-talent" },
  ],
  Industries: [
    { label: "Aerospace & Defence", href: "/industries" },
    { label: "Automotive", href: "/industries" },
    { label: "Energy & Power", href: "/industries" },
    { label: "Oil & Gas", href: "/industries" },
    { label: "Medical Devices", href: "/industries" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5">
      <div className="container-main section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-1 order-first">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/images/logo.png" alt="DeltaSim" className="h-8 w-auto" />
            </Link>
            <p className="text-grey-400 text-sm leading-relaxed mb-6">
              Advanced engineering simulation and talent solutions for
              high-performance engineering outcomes across global industries.
            </p>
            <div className="flex gap-3">
              {[
                { name: "LinkedIn", href: "https://linkedin.com/company/deltasim" },
                { name: "Twitter", href: "https://twitter.com/deltasim" },
                { name: "YouTube", href: "https://youtube.com/@deltasim" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-grey-400 text-xs hover:bg-cyan hover:text-navy transition-colors"
                >
                  {social.name[0]}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-semibold text-white text-sm mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-grey-400 text-sm hover:text-cyan transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-grey-500 text-sm">
            &copy; {new Date().getFullYear()} DeltaSim Engineering. All rights
            reserved.
          </p>
          <p className="text-grey-500 text-sm">
            Precision at the Core of Every Design
          </p>
        </div>
      </div>
    </footer>
  );
}
