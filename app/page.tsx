"use client";

import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Box,
  Check,
  ChevronRight,
  Crosshair,
  Eye,
  Layers3,
  Map,
  Menu,
  Mountain,
  Radio,
  ScanLine,
  Send,
  ThermometerSun,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const sectors = [
  {
    name: "Energy",
    tag: "THERMAL INTELLIGENCE",
    title: "Find the fault before it becomes the failure.",
    text: "Portfolio-scale RGB and thermal inspection turns every anomaly into a located, ranked maintenance action.",
    image: "/assets/solar-thermal-v2.jpg",
    stat: "100%",
    statLabel: "asset coverage",
    outputs: ["Thermal anomaly map", "Panel-level defect log", "Condition report"],
  },
  {
    name: "Mining",
    tag: "VOLUME & PROGRESS",
    title: "Measure every movement. Reconcile every tonne.",
    text: "Repeatable aerial surveys make stockpiles, cut-and-fill and operational change visible across the whole site.",
    image: "/assets/mining-stockpile-v2.jpg",
    stat: "3D",
    statLabel: "volume evidence",
    outputs: ["Stockpile volumes", "Progress surfaces", "Compliance records"],
  },
  {
    name: "Infrastructure",
    tag: "CORRIDOR MAPPING",
    title: "See the whole corridor, not isolated snapshots.",
    text: "High-accuracy mapping creates a single spatial record for planning, construction progress and asset condition.",
    image: "/assets/highway-corridor-v2.jpg",
    stat: "cm",
    statLabel: "positioning precision",
    outputs: ["Engineering base map", "CAD-ready layers", "Change detection"],
  },
  {
    name: "Land",
    tag: "LAND INTELLIGENCE",
    title: "Turn large landscapes into clear next actions.",
    text: "Multispectral, terrain and boundary intelligence supports faster decisions across agriculture and land development.",
    image: "/assets/agriculture-survey-v2.jpg",
    stat: "5x",
    statLabel: "faster site insight",
    outputs: ["Crop health indices", "Terrain model", "Boundary intelligence"],
  },
  {
    name: "Environment",
    tag: "LIDAR & MONITORING",
    title: "Read the terrain beneath the complexity.",
    text: "LiDAR and repeat monitoring reveal bare earth, canopy structure and environmental change with precision.",
    image: "/assets/lidar-forest-v2.jpg",
    stat: "360°",
    statLabel: "environmental context",
    outputs: ["Classified point cloud", "Bare-earth DTM", "Change evidence"],
  },
];

const projects = [
  { image: "/assets/mining-stockpile-v2.jpg", type: "MINING", title: "Industrial stockpile intelligence", metric: "VOLUME RECONCILIATION" },
  { image: "/assets/solar-thermal-v2.jpg", type: "ENERGY", title: "Solar thermal inspection", metric: "PANEL-LEVEL ANOMALIES" },
  { image: "/assets/railway-corridor-v2.jpg", type: "INFRASTRUCTURE", title: "Rail corridor mapping", metric: "ENGINEERING BASE MAP" },
  { image: "/assets/heritage-scan-v2.jpg", type: "HERITAGE", title: "Digital preservation survey", metric: "HIGH-FIDELITY 3D" },
];

const capabilities = [
  { icon: ScanLine, number: "01", name: "Drone survey", text: "Repeatable aerial capture designed around terrain, accuracy and project scale." },
  { icon: Layers3, number: "02", name: "LiDAR mapping", text: "Dense point clouds and bare-earth terrain in complex environments." },
  { icon: ThermometerSun, number: "03", name: "Thermal inspection", text: "Located heat anomalies for energy assets and built infrastructure." },
  { icon: Crosshair, number: "04", name: "RTK / PPK", text: "Centimetre-grade positioning with the right ground-control strategy." },
  { icon: Mountain, number: "05", name: "Photogrammetry", text: "Orthomosaics, terrain models and spatial layers engineered for use." },
  { icon: Map, number: "06", name: "GIS intelligence", text: "Clear analysis that moves directly into operational decision systems." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sectorIndex, setSectorIndex] = useState(0);
  const [compare, setCompare] = useState(52);
  const [scale, setScale] = useState("Single site");
  const [goal, setGoal] = useState("Inspection & condition");
  const sector = sectors[sectorIndex];

  const scope = useMemo(
    () => `${sector.name} project · ${scale} · ${goal}`,
    [sector.name, scale, goal],
  );

  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((node) => reveal.observe(node));
    return () => reveal.disconnect();
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="The Atlas Grid home">
          <img src="/atlas-grid-mark.svg" alt="" />
          <span><strong>THE ATLAS GRID</strong><small>AERIAL INTELLIGENCE</small></span>
        </a>
        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          <a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a>
          <a href="#sectors" onClick={() => setMenuOpen(false)}>Sectors</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Fieldwork</a>
          <a href="#brief" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="header-cta" href="#brief">Start a mission <ArrowRight size={17} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="top">
        <img className="hero-image" src="/assets/hero-aerial-v2.jpg" alt="Drone surveying an infrastructure corridor at blue hour" />
        <div className="hero-shade" />
        <div className="survey-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="kicker"><i /> GLOBAL ONLINE SOLUTIONS · INDIA</p>
          <h1>THE ATLAS<br /><span>GRID</span></h1>
          <p className="hero-statement">Aerial intelligence for decisions<br />that cannot wait.</p>
          <div className="hero-actions">
            <a className="button primary" href="#sectors">Enter the mission <ArrowDown size={18} /></a>
            <a className="text-link" href="#work">View fieldwork <ArrowRight size={18} /></a>
          </div>
        </div>
        <div className="mission-hud" aria-label="Sample live mission data">
          <div className="hud-top"><Radio size={16} /><span>MISSION 24A</span><b>LIVE</b></div>
          <div className="radar"><span className="radar-sweep" /><i className="target target-one" /><i className="target target-two" /><Crosshair size={20} /></div>
          <dl>
            <div><dt>POSITION</dt><dd>12.9716° N</dd></div>
            <div><dt>ALTITUDE</dt><dd>120 M AGL</dd></div>
            <div><dt>ACCURACY</dt><dd><em /> 1.8 CM</dd></div>
          </dl>
        </div>
        <div className="hero-index"><span>SCROLL TO EXPLORE</span><i /><b>01</b><small>/ 06</small></div>
      </section>

      <section className="signal-band" aria-label="Key results">
        <div><strong>CM</strong><span>RTK / PPK ACCURACY</span></div>
        <div><strong>2D + 3D</strong><span>ENGINEERING OUTPUTS</span></div>
        <div><strong>2,000+</strong><span>ACRES MAPPED</span></div>
        <div><strong>12+</strong><span>INDUSTRY APPLICATIONS</span></div>
      </section>

      <section className="capability-section" id="capabilities">
        <div className="section-intro" data-reveal>
          <p className="kicker dark"><i /> OUR CAPABILITY</p>
          <h2>Capture is only<br />the beginning.</h2>
          <p>We engineer the entire chain from field evidence to a decision your team can defend.</p>
        </div>
        <div className="capability-list">
          {capabilities.map(({ icon: Icon, number, name, text }) => (
            <article key={name} data-reveal>
              <span className="cap-number">{number}</span>
              <Icon aria-hidden="true" />
              <h3>{name}</h3>
              <p>{text}</p>
              <ChevronRight className="cap-arrow" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="compare-section" aria-label="Thermal comparison">
        <div className="compare-copy" data-reveal>
          <p className="kicker"><i /> SEE THE INVISIBLE</p>
          <h2>One site.<br />Two truths.</h2>
          <p>Move the scanner to reveal heat anomalies that ordinary imagery cannot show.</p>
          <div className="compare-legend"><span><i className="rgb-dot" /> RGB CAPTURE</span><span><i className="thermal-dot" /> THERMAL LAYER</span></div>
        </div>
        <div className="image-compare">
          <img src="/assets/solar-rgb-v2.jpg" alt="RGB drone capture of a utility-scale solar farm" />
          <div className="thermal-layer" style={{ clipPath: `inset(0 ${100 - compare}% 0 0)` }}>
            <img src="/assets/solar-thermal-v2.jpg" alt="Matching thermal inspection of the solar farm" />
          </div>
          <div className="compare-line" style={{ left: `${compare}%` }}><span><Eye size={20} /></span></div>
          <input type="range" min="8" max="92" value={compare} onChange={(event) => setCompare(Number(event.target.value))} aria-label="Reveal thermal inspection layer" />
          <small className="image-label left">RGB / 04:21:16</small><small className="image-label right">THERMAL / ΔT +18.4°C</small>
        </div>
      </section>

      <section className="sector-section" id="sectors">
        <div className="sector-head" data-reveal>
          <div><p className="kicker dark"><i /> SECTOR INTELLIGENCE</p><h2>Built around<br />the decision.</h2></div>
          <p>Choose an operating environment. The mission, sensor and output adapt instantly.</p>
        </div>
        <div className="sector-tabs" role="tablist" aria-label="Industry sectors">
          {sectors.map((item, index) => (
            <button key={item.name} role="tab" aria-selected={sectorIndex === index} onClick={() => setSectorIndex(index)}>
              <span>0{index + 1}</span>{item.name}
            </button>
          ))}
        </div>
        <div className="sector-stage" key={sector.name}>
          <img src={sector.image} alt={`${sector.name} aerial survey`} />
          <div className="sector-overlay" />
          <div className="geo-overlay" aria-hidden="true"><i /><i /><i /><span /></div>
          <div className="sector-story">
            <small>{sector.tag}</small>
            <h3>{sector.title}</h3>
            <p>{sector.text}</p>
            <ul>{sector.outputs.map((output) => <li key={output}><Check size={17} />{output}</li>)}</ul>
          </div>
          <div className="sector-stat"><strong>{sector.stat}</strong><span>{sector.statLabel}</span></div>
        </div>
      </section>

      <section className="process-section">
        <div className="process-title" data-reveal>
          <p className="kicker"><i /> FLIGHT TO FORESIGHT</p>
          <h2>A precise chain<br />of evidence.</h2>
        </div>
        <div className="process-steps">
          {[
            ["01", "CAPTURE", "RGB, thermal, multispectral or LiDAR payloads collect the right evidence.", ScanLine],
            ["02", "POSITION", "GNSS, RTK, PPK and control points anchor every observation.", Crosshair],
            ["03", "PROCESS", "Photogrammetry and point-cloud workflows build accurate models.", Box],
            ["04", "DECIDE", "GIS, CAD, reports and dashboards make evidence operational.", Zap],
          ].map(([number, title, text, Icon]) => {
            const StepIcon = Icon as typeof ScanLine;
            return <article key={String(number)} data-reveal><span>{String(number)}</span><StepIcon /><h3>{String(title)}</h3><p>{String(text)}</p></article>;
          })}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="work-head" data-reveal><p className="kicker dark"><i /> SELECTED FIELDWORK</p><h2>Evidence from<br />the real world.</h2><a href="#brief">Plan your project <ArrowRight size={18} /></a></div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project project-${index + 1}`} key={project.title} data-reveal>
              <img src={project.image} alt={project.title} />
              <div className="project-shade" />
              <div className="project-reticle" aria-hidden="true"><i /><i /></div>
              <span>{project.type}</span><h3>{project.title}</h3><p>{project.metric}</p><ArrowRight />
            </article>
          ))}
        </div>
      </section>

      <section className="deliverables">
        <div className="deliverable-copy" data-reveal><p className="kicker"><i /> DECISION-READY OUTPUTS</p><h2>Data that arrives<br />ready to work.</h2><p>Every deliverable is prepared for the systems your engineering, planning and operations teams already use.</p></div>
        <div className="output-orbit" aria-label="Available outputs">
          <div className="orbit-center"><Layers3 /><span>ATLAS<br />DATA CORE</span></div>
          {[["ORTHOMOSAIC", Map], ["DSM + DTM", Mountain], ["POINT CLOUD", Box], ["CAD + GIS", Crosshair], ["THERMAL", ThermometerSun], ["DASHBOARD", Eye]].map(([label, Icon], index) => {
            const OutputIcon = Icon as typeof Map;
            return <div className={`orbit-item orbit-${index + 1}`} key={String(label)}><OutputIcon /><span>{String(label)}</span></div>;
          })}
        </div>
      </section>

      <section className="brief-section" id="brief">
        <div className="brief-copy" data-reveal>
          <p className="kicker"><i /> SHAPE THE MISSION</p>
          <h2>Submit your<br />project brief.</h2>
          <p>Use this quick planner to tell us what you need surveyed. Your choices and contact details will be sent directly to our team.</p>
          <a href="mailto:hello@theatlasgrid.com">hello@theatlasgrid.com <ArrowRight size={18} /></a>
        </div>
        <form className="scope-builder" action="https://formsubmit.co/rajeev@neoglobalindustries.com" method="POST">
          <input type="hidden" name="_cc" value="hello@theatlasgrid.com" />
          <input type="hidden" name="_subject" value="New Atlas Grid project brief" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://gos-aerial-intelligence.ihatemuzik.chatgpt.site/#brief" />
          <input type="text" name="_honey" className="form-honey" tabIndex={-1} autoComplete="off" />
          <input type="hidden" name="Mission outline" value={scope} />
          <input type="hidden" name="Selected sector" value={sector.name} />
          <input type="hidden" name="Project scale" value={scale} />
          <input type="hidden" name="Primary goal" value={goal} />
          <div className="builder-status"><span>SURVEY SCOPE / LIVE</span><b><i /> READY</b></div>
          <fieldset><legend>01 / SECTOR</legend><div className="choice-grid">{sectors.slice(0, 4).map((item, index) => <button type="button" key={item.name} className={sectorIndex === index ? "active" : ""} onClick={() => setSectorIndex(index)}>{item.name}</button>)}</div></fieldset>
          <fieldset><legend>02 / PROJECT SCALE</legend><div className="choice-grid three">{["Single site", "Multi-site", "Long corridor"].map((item) => <button type="button" key={item} className={scale === item ? "active" : ""} onClick={() => setScale(item)}>{item}</button>)}</div></fieldset>
          <label><span>03 / PRIMARY GOAL</span><select value={goal} onChange={(event) => setGoal(event.target.value)}><option>Inspection & condition</option><option>Topography & design</option><option>Volume & progress</option><option>Environmental monitoring</option></select></label>
          <div className="contact-grid">
            <label><span>04 / YOUR NAME</span><input name="Name" type="text" placeholder="Your name" required /></label>
            <label><span>05 / EMAIL</span><input name="email" type="email" placeholder="name@company.com" required /></label>
            <label><span>06 / PHONE</span><input name="Phone" type="tel" placeholder="+91 phone number" /></label>
            <label><span>07 / COMPANY</span><input name="Company" type="text" placeholder="Company / project name" /></label>
          </div>
          <label><span>08 / PROJECT NOTES</span><textarea name="Project notes" placeholder="Location, approximate area, timeline, or anything important" rows={4} /></label>
          <div className="scope-output"><small>YOUR MISSION OUTLINE</small><p>{scope}</p></div>
          <button className="copy-scope" type="submit"><Send />Submit mission enquiry</button>
        </form>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><img src="/atlas-grid-mark.svg" alt="" /><span><strong>THE ATLAS GRID</strong><small>AERIAL INTELLIGENCE</small></span></a>
        <p>Map what matters. Decide with clarity.</p>
        <div><span>&copy; 2026 THE ATLAS GRID SOLUTIONS PVT LTD</span><a href="#top" aria-label="Back to top">BACK TO TOP <ArrowUp size={15} /></a></div>
      </footer>
    </main>
  );
}
