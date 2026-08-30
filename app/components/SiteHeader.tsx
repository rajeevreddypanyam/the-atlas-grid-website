"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/#top" aria-label="TAGS home" onClick={closeMenu}>
        <img src="/brand/tags-logo-white.png" alt="TAGS" />
      </Link>
      <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
        <Link href="/#capabilities" onClick={closeMenu}>Capabilities</Link>
        <Link href="/#sectors" onClick={closeMenu}>Sectors</Link>
        <Link href="/#work" onClick={closeMenu}>Fieldwork</Link>
        <Link href="/#brief" onClick={closeMenu}>Contact</Link>
      </nav>
      <Link className="header-cta" href="/#brief">Start a mission <ArrowRight size={17} /></Link>
      <button className="menu-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu" aria-expanded={menuOpen}>
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}
