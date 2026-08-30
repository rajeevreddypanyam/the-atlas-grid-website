import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Check, ChevronRight, FileText } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { capabilities, getCapability } from "../../capability-data";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

type CapabilityPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return capabilities.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: CapabilityPageProps): Promise<Metadata> {
  const capability = getCapability((await params).slug);
  if (!capability) return {};

  const url = `https://theatlasgrid.com/capabilities/${capability.slug}`;
  return {
    title: `${capability.name} | TAGS`,
    description: capability.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${capability.name} | TAGS`,
      description: capability.metaDescription,
      url,
      type: "website",
      images: [{ url: capability.heroImage, alt: capability.heroAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${capability.name} | TAGS`,
      description: capability.metaDescription,
      images: [capability.heroImage],
    },
  };
}

export default async function CapabilityPage({ params }: CapabilityPageProps) {
  const capability = getCapability((await params).slug);
  if (!capability) notFound();
  const capabilityIndex = capabilities.findIndex(({ slug }) => slug === capability.slug);
  const previous = capabilities[(capabilityIndex - 1 + capabilities.length) % capabilities.length];
  const next = capabilities[(capabilityIndex + 1) % capabilities.length];

  return (
    <main className="capability-page">
      <SiteHeader />

      <section className="capability-hero" id="top">
        <img src={capability.heroImage} alt={capability.heroAlt} />
        <div className="capability-hero-shade" />
        <div className="capability-hero-content">
          <Link className="capability-back" href="/#capabilities"><ArrowLeft size={17} /> All capabilities</Link>
          <p className="kicker"><i /> {capability.eyebrow}</p>
          <span className="capability-hero-number">{capability.number}</span>
          <h1>{capability.name}</h1>
          <p className="capability-hero-title">{capability.title}</p>
          <p className="capability-hero-summary">{capability.summary}</p>
          <Link className="button primary" href="/#brief">Discuss this service <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section className="capability-overview">
        <div className="capability-overview-copy">
          <p className="kicker dark"><i /> WHAT IT SOLVES</p>
          <h2>{capability.overviewTitle}</h2>
          <ul>{capability.solves.map((item) => <li key={item}><Check size={18} />{item}</li>)}</ul>
        </div>
        <figure>
          <img src={capability.secondaryImage} alt={capability.secondaryAlt} />
          <figcaption>REALISTIC SITE CONTEXT / DECISION-READY OUTPUTS</figcaption>
        </figure>
      </section>

      <section className="capability-applications">
        <div className="capability-section-heading">
          <p className="kicker dark"><i /> TYPICAL APPLICATIONS</p>
          <h2>Where this capability creates value.</h2>
        </div>
        <div className="application-grid">
          {capability.applications.map((application, index) => (
            <article key={application.title}>
              <span>0{index + 1}</span><h3>{application.title}</h3><p>{application.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="capability-workflow">
        <div className="capability-section-heading light">
          <p className="kicker"><i /> DELIVERY WORKFLOW</p>
          <h2>From requirement to usable evidence.</h2>
        </div>
        <div className="capability-steps">
          {capability.workflow.map((step) => (
            <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>
          ))}
        </div>
      </section>

      <section className="capability-deliverables">
        <div className="capability-section-heading">
          <p className="kicker dark"><i /> DELIVERABLES</p>
          <h2>Prepared for engineering and spatial systems.</h2>
        </div>
        <div className="deliverable-list">
          {capability.deliverables.map((deliverable, index) => (
            <div key={deliverable.name}><span>0{index + 1}</span><strong>{deliverable.name}</strong><small>{deliverable.formats}</small><ChevronRight /></div>
          ))}
        </div>
      </section>

      <section className="capability-report">
        <div className="report-copy">
          <p className="kicker"><i /> INSIDE YOUR TAGS REPORT</p>
          <h2>A clear record your team can act on.</h2>
          <p>{capability.reportIntro}</p>
        </div>
        <div className="report-preview" aria-label={`${capability.name} report preview`}>
          <div className="report-preview-head"><FileText /><div><small>TAGS / CAPABILITY REPORT</small><strong>{capability.name}</strong></div><span>REPORT STRUCTURE</span></div>
          <div className="report-preview-image"><img src={capability.secondaryImage} alt="" /></div>
          <div className="report-preview-rows">
            {capability.reportRows.map((row) => (
              <div key={row.label}><strong>{row.label}</strong><p>{row.detail}</p><span>{row.status}</span></div>
            ))}
          </div>
        </div>
      </section>

      <nav className="capability-pager" aria-label="More capabilities">
        <Link href={`/capabilities/${previous.slug}`}>
          <span><ArrowLeft size={17} /> Previous capability</span>
          <strong>{previous.name}</strong>
        </Link>
        <Link href={`/capabilities/${next.slug}`}>
          <span>Next capability <ArrowRight size={17} /></span>
          <strong>{next.name}</strong>
        </Link>
      </nav>

      <section className="capability-cta">
        <p className="kicker"><i /> START A PROJECT</p>
        <h2>Tell us what decision the survey needs to support.</h2>
        <Link className="button primary" href="/#brief">Discuss this service <ArrowRight size={18} /></Link>
      </section>

      <SiteFooter />
    </main>
  );
}
