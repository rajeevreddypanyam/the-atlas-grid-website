import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer>
      <Link className="brand footer-brand" href="/#top" aria-label="TAGS home">
        <img src="/brand/tags-logo-white.png" alt="TAGS" />
      </Link>
      <p>Geospatial Intelligence from Ground to Sky.</p>
      <div>
        <span>&copy; The Atlas Grid Solutions Private Limited</span>
        <a href="#top" aria-label="Back to top">BACK TO TOP <ArrowUp size={15} /></a>
      </div>
    </footer>
  );
}
