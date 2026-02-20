import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const links = [
  {
    label: "Google Scholar",
    url: "https://scholar.google.com/citations?user=uLVpCZYAAAAJ&hl=en",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 10a8 8 0 0 1 7.162 3.44L24 9.5z" />
      </svg>
    ),
    color: "text-blue-500",
  },
  {
    label: "ResearchGate",
    url: "https://www.researchgate.net/profile/Wijendra-Gunathilake?ev=hdr_xprf",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53c.029.148.065.29.113.437.243.744.65 1.303 1.213 1.68.565.376 1.255.564 2.073.564.818 0 1.509-.188 2.073-.563.565-.376.97-.936 1.213-1.68a3.193 3.193 0 0 0 .112-.438 8.369 8.369 0 0 0 .078-.53 9 9 0 0 0 .05-.727c.01-.282.013-.621.013-1.016a31.121 31.121 0 0 0-.014-1.017 9 9 0 0 0-.05-.727 7.946 7.946 0 0 0-.078-.53 3.193 3.193 0 0 0-.112-.437c-.243-.744-.648-1.303-1.213-1.68C21.095.19 20.404 0 19.586 0zm-6.4 3.78H9.34a.424.424 0 0 0-.424.424v9.64c0 .235.19.425.424.425h3.846c.235 0 .425-.19.425-.424V3.204a.424.424 0 0 0-.425-.424zm-6.53 0H3.204a.424.424 0 0 0-.424.424v9.64c0 .235.19.425.424.425H6.656c.234 0 .424-.19.424-.424V3.204a.424.424 0 0 0-.424-.424zm0 12.264H3.204a.424.424 0 0 0-.424.424v4.328c0 .235.19.425.424.425H6.656c.234 0 .424-.19.424-.424v-4.329a.424.424 0 0 0-.424-.424zm6.53 0H9.34a.424.424 0 0 0-.424.424v4.328c0 .235.19.425.424.425h3.846c.235 0 .425-.19.425-.424v-4.329a.424.424 0 0 0-.425-.424z" />
      </svg>
    ),
    color: "text-teal-500",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/dr-wijendra-gunathilake-2479b519/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "text-blue-600",
  },
  {
    label: "ORCID",
    url: "https://orcid.org/0000-0003-1762-930X",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 3.872-2.466 3.872-3.722 0-2.016-1.284-3.722-3.872-3.722h-2.297z" />
      </svg>
    ),
    color: "text-green-600",
  },
  {
    label: "Twitter / X",
    url: "https://x.com/WijendraGunath2",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: "text-foreground",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-8">
            Get in <span className="italic text-accent">Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a
                    href="mailto:wijendrapg@sjp.ac.lk"
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    wijendrapg@sjp.ac.lk
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Office</p>
                  <p className="text-foreground leading-relaxed">
                    Department of Information Systems Engineering and Informatics
                    <br />
                    Faculty of Computing
                    <br />
                    University of Sri Jayewardenepura
                    <br />
                    Gangodawila, Nugegoda, Sri Lanka
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                I'm always interested in hearing from prospective students and
                collaborators. Please reach out via email with a brief
                description of your interests and background.
              </p>
              <p className="text-sm font-medium text-foreground">Find me on</p>
              <div className="flex flex-wrap gap-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.label}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background hover:border-accent/50 hover:shadow-sm transition-all duration-200 text-sm font-medium ${link.color} hover:scale-105`}
                  >
                    {link.icon}
                    <span className="text-foreground/80">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto mt-20 pt-8 border-t border-border">
        <p className="text-xs text-muted-foreground/60">
          © 2025 Dr. Wijendra Gunathilake. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
