import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
{ label: "About", href: "#about" },
{ label: "Publications", href: "#publications" },
{ label: "Teaching", href: "#teaching" },
{ label: "Contact", href: "#contact" }];


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32 flex items-center justify-between h-14">
        <a
          href="#"
          className="font-heading font-semibold text-foreground text-base">

          H.R.W.P. Gunathilake
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors">

              {link.label}
            </a>
          )}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu">

          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open &&
      <div className="md:hidden bg-background border-b border-border px-6 py-4 space-y-3">
          {links.map((link) =>
        <a
          key={link.href}
          href={link.href}
          onClick={() => setOpen(false)}
          className="block text-sm text-muted-foreground hover:text-foreground transition-colors">

              {link.label}
            </a>
        )}
        </div>
      }
    </nav>);

};

export default Navbar;