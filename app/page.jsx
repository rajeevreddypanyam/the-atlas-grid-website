"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  Box,
  Check,
  ChevronLeft,
  ChevronRight,
  Clipboard,
  Crosshair,
  Expand,
  Eye,
  Layers3,
  Map,
  Menu,
  Mountain,
  Orbit,
  Radio,
  Route,
  ScanLine,
  Sparkles,
  ThermometerSun,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const navigation = [
  ["Capabilities", "capabilities"],
  ["Sectors", "sectors"],
  ["Approach", "approach"],
  ["Projects", "projects"],
  ["Deliverables", "deliverables"],
];

const sectors = [
  {
    name: "Renewable energy",
    eyebrow: "Protect energy output",
    title: "Inspect assets at portfolio scale.",
    copy: "Thermal and RGB surveys identify hotspots, faulty modules, alignment issues, vegetation growth and visible defects across solar plants, wind assets and power corridors.",
    outputs: ["Thermal anomaly maps", "Panel-level inspection logs", "Condition reports"],
    image: "/assets/thermal-panels.jpg",
    icon: Zap,
  },
  {
    name: "Mining & quarry",
    eyebrow: "Measure every movement",
    title: "Turn changing terrain into operational control.",
    copy: "High-resolution aerial capture supports pit and dump mapping, stockpile measurement, haul-road analysis and repeatable change detection.",
    outputs: ["Cut-and-fill analysis", "Stockpile volumes", "Site models"],
    image: "/assets/jsw-stockpile.jpg",
    icon: Mountain,
  },
  {
    name: "Infrastructure",
    eyebrow: "See the corridor early",
    title: "Plan, build and maintain with spatial context.",
    copy: "RTK- and PPK-enabled corridor mapping captures terrain, structures, utilities and right-of-way conditions for roads, railways, telecoms and pipelines.",
    outputs: ["Orthomosaics", "Alignment profiles", "DSM, DTM & contours"],
    image: "/assets/highway.jpg",
    icon: Route,
  },
  {
    name: "Land & agriculture",
    eyebrow: "Make boundaries defensible",
    title: "Connect land decisions to accurate evidence.",
    copy: "Precise boundary mapping, topography and vegetation intelligence support property definition, encroachment detection, irrigation planning and crop-health monitoring.",
    outputs: ["Boundary maps", "NDVI analysis", "Property data cards"],
    image: "/assets/agriculture.jpg",
    icon: Map,
  },
  {
    name: "Forest & environment",
    eyebrow: "Reveal hidden terrain",
    title: "Map complex landscapes beneath the canopy.",
    copy: "LiDAR classification, bare-earth extraction and time-based change detection support forest health, biodiversity, conservation and difficult-terrain mapping.",
    outputs: ["Classified point clouds", "Bare-earth models", "Change analysis"],
    image: "/assets/lidar-forest.jpg",
    icon: Layers3,
  },
  {
    name: "Urban & heritage",
    eyebrow: "Digitise what must endure",
    title: "Give planners and conservators a measurable record.",
    copy: "Detailed topographic mapping and structural surveys provide spatial context for urban infrastructure, restoration and long-term maintenance decisions.",
    outputs: ["3D visual models", "Damage annotations", "Maintenance reports"],
    image: "/assets/heritage.jpg",
    icon: Box,
  },
];

const projects = [
  {
    code: "01 / MINING",
    title: "JSW Cements",
    place: "Toranagallu, Bellary",
    image: "/assets/jsw-stockpile.jpg",
    scope: "Aerial capture and volumetric analysis of cement stockpiles to monitor quantity and structural-layout changes.",
    result: "2D and 3D models, orthomosaics, volume reports and comparison datasets for inventory and logistics planning.",
  },
  {
    code: "02 / ENERGY",
    title: "Solar plant portfolio",
    place: "Multi-state thermal inspection",
    image: "/assets/solar-mapping.jpg",
    scope: "Boundary, waypoint, RGB and thermal mapping across utility-scale solar projects.",
    result: "Mapped evidence for panel performance, cracks, dust, vegetation and installation quality.",
  },
  {
    code: "03 / WATER",
    title: "Kaveri river bed",
    place: "Madikeri, Karnataka",
    image: "/assets/riverbed.jpg",
    scope: "LiDAR terrain modelling to support concrete structures, retaining-wall planning and flood-control decisions.",
    result: "DTM, elevation models, orthomosaics and contours prepared for engineering design and overflow analysis.",
  },
  {
    code: "04 / RAIL",
    title: "Railway corridor",
    place: "Mangaluru region",
    image: "/assets/railway.jpg",
    scope: "Aerial inspection of track, vegetation, power infrastructure, visible wear and surrounding encroachments.",
    result: "DSM, DTM, orthomosaic and condition reporting for clearance planning and preventive maintenance.",
  },
  {
    code: "05 / WIND",
    title: "Wind farm development",
    place: "Pre- and post-construction survey",
    image: "/assets/wind-pointcloud.jpg",
    scope: "Topography, foundations, access roads, vegetation and construction progress captured across the asset lifecycle.",
    result: "Point clouds, contours, 3D models and comparison outputs ready for GIS and CAD workflows.",
  },
];

const deliverables = [
  [Map, "Orthomosaic", "GeoTIFF / JPEG", "A measurable, georeferenced aerial map assembled from high-resolution capture."],
  [Layers3, "DSM + DTM", "Surface / terrain", "Elevation intelligence for engineering, drainage, grade and terrain decisions."],
  [Box, "Point cloud + 3D", "LAS / model", "Dense spatial data for measurement, inspection, classification and digital twins."],
  [Route, "CAD + GIS", "SHP / KML / DXF", "Decision-ready layers that move into familiar design and planning systems."],
  [ThermometerSun, "Thermal report", "Annotated insight", "Located anomaly evidence with asset context and maintenance priority."],
  [Eye, "Visual dashboard", "Web analytics", "Clear project views that make spatial evidence accessible to wider teams."],
];

function Brand({ footer = false }) {
  return (
    <a className={`brand ${footer ? "brandFooter" : ""}`} href="#top" aria-label="The Atlas Grid home">
      <Image src="/atlas-grid-mark.svg" alt="" width={48} height={48} priority={!footer} />
      <span>
        <strong>THE ATLAS GRID</strong>
        <small>AERIAL SURVEY &amp; GEOSPATIAL INTELLIGENCE</small>
      </span>
    </a>
  );
}

function Eyebrow({ children, light = false }) {
  return <p className={`eyebrow ${light ? "eyebrowLight" : ""}`}><span />{children}</p>;
}

function Header({ onPresent }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menuOpen", open);
    return () => document.body.classList.remove("menuOpen");
  }, [open]);

  return (
    <header className="header">
      <Brand />
      <nav className={open ? "nav navOpen" : "nav"} aria-label="Primary navigation">
        {navigation.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="navBrief" href="#brief" onClick={() => setOpen(false)}>Build a scope <ArrowRight size={17} /></a>
      </nav>
      <div className="headerActions">
        <button className="presentButton" onClick={onPresent} aria-label="Toggle presentation view">
          <Expand size={17} /><span>Present</span>
        </button>
        <button className="menuButton" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="heroTexture" aria-hidden="true" />
      <div className="shell heroLayout">
        <div className="heroCopy">
          <Eyebrow>Aerial survey · Geospatial intelligence</Eyebrow>
          <h1>Map what matters.<br /><em>Decide with clarity.</em></h1>
          <p className="heroLead">The Atlas Grid combines drone capture, LiDAR, thermal imaging and precise positioning to turn complex sites into decision-ready spatial intelligence.</p>
          <div className="heroActions">
            <a className="button buttonPrimary" href="#capabilities">Explore capabilities <ArrowDown size={18} /></a>
            <a className="button buttonGhost" href="#brief">Build a survey scope <ArrowRight size={18} /></a>
          </div>
          <div className="heroTrust">
            <span><Check size={16} /> Mission-specific capture</span>
            <span><Check size={16} /> Engineering-ready outputs</span>
          </div>
        </div>

        <div className="missionVisual" aria-label="Animated drone survey mission">
          <div className="missionImage">
            <Image src="/assets/mission-map.jpg" alt="Aerial survey mission map and flight planning view" fill priority sizes="(max-width: 760px) 100vw, 44vw" />
          </div>
          <svg className="missionRoute" viewBox="0 0 600 680" aria-hidden="true">
            <path d="M-40 570 C120 510 170 590 265 430 S420 220 650 150" />
            <circle cx="106" cy="532" r="7" />
            <circle cx="510" cy="204" r="7" />
          </svg>
          <div className="drone" aria-hidden="true">
            <svg viewBox="0 0 120 70">
              <path d="M43 29h34l8 10-12 6H47l-12-6 8-10Z" />
              <path d="M43 33 24 20M77 33 96 20M44 43 24 55M76 43 96 55" />
              <ellipse cx="18" cy="16" rx="16" ry="4" /><ellipse cx="102" cy="16" rx="16" ry="4" />
              <ellipse cx="18" cy="59" rx="16" ry="4" /><ellipse cx="102" cy="59" rx="16" ry="4" />
              <circle cx="60" cy="48" r="6" />
            </svg>
          </div>
          <div className="missionCard missionCardTop"><small>MISSION 07</small><strong>RTK ACTIVE</strong><i /></div>
          <div className="missionCard missionCardBottom"><small>FLIGHT ALTITUDE</small><strong>120 m AGL</strong></div>
          <div className="mapCoordinates">12.9716° N<br />77.5946° E</div>
        </div>
      </div>
      <div className="shell metricStrip">
        <div><strong>cm</strong><span>RTK / PPK positioning</span></div>
        <div><strong>2D + 3D</strong><span>Engineering deliverables</span></div>
        <div><strong>2,000+</strong><span>Acres surveyed</span></div>
        <div><strong>12+</strong><span>Industry applications</span></div>
      </div>
    </section>
  );
}

function Capabilities() {
  const capabilities = [
    [ScanLine, "Drone surveying", "Repeatable aerial capture designed around terrain, accuracy and project scale."],
    [Layers3, "LiDAR mapping", "Dense point clouds, classified features and bare-earth terrain in complex environments."],
    [ThermometerSun, "Thermal inspection", "Located heat anomalies for solar assets, power systems and built infrastructure."],
    [Sparkles, "Multispectral intelligence", "Vegetation indices and crop-health evidence for faster field decisions."],
    [Crosshair, "RTK / PPK positioning", "Centimetre-grade positioning workflows with appropriate ground control."],
    [Orbit, "Photogrammetry & GIS", "Orthomosaics, terrain models and spatial layers prepared for operational systems."],
  ];
  return (
    <section className="section sectionLight" id="capabilities">
      <div className="shell">
        <div className="sectionHeading">
          <div><Eyebrow>Integrated capability</Eyebrow><h2>From aerial capture<br />to <em>usable intelligence.</em></h2></div>
          <p>Platform, payload and processing are chosen around the decision—not around a fixed technology stack.</p>
        </div>
        <div className="capabilityGrid">
          {capabilities.map(([Icon, title, text], index) => (
            <article className="capabilityCard" key={title}>
              <div className="capabilityTop"><Icon /><span>0{index + 1}</span></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="cardLine" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sectors() {
  const [active, setActive] = useState(0);
  const item = sectors[active];
  const Icon = item.icon;
  return (
    <section className="section sectorSection" id="sectors">
      <div className="shell">
        <div className="sectionHeading sectionHeadingLight">
          <div><Eyebrow light>Sector intelligence</Eyebrow><h2>One spatial foundation.<br /><em>Many critical decisions.</em></h2></div>
          <p>Choose a sector to see how the survey method and outputs adapt to the operational question.</p>
        </div>
        <div className="sectorTabs" role="tablist" aria-label="Industry sectors">
          {sectors.map((sector, index) => (
            <button key={sector.name} role="tab" aria-selected={active === index} onClick={() => setActive(index)}>
              <span>0{index + 1}</span>{sector.name}
            </button>
          ))}
        </div>
        <div className="sectorPanel" key={item.name}>
          <div className="sectorImage"><Image src={item.image} alt={`${item.name} aerial survey`} fill sizes="(max-width: 760px) 100vw, 55vw" /></div>
          <div className="sectorCopy">
            <Icon />
            <span>{item.eyebrow}</span>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
            <ul>{item.outputs.map((output) => <li key={output}><Check size={16} />{output}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const steps = [
    [ScanLine, "Capture", "RGB, thermal, multispectral or LiDAR payloads collect the evidence."],
    [Crosshair, "Position", "GNSS, RTK, PPK and control points anchor every observation."],
    [Orbit, "Process", "Photogrammetry and point-cloud workflows build accurate spatial models."],
    [Sparkles, "Decide", "GIS, CAD, reports and dashboards make the evidence operational."],
  ];
  return (
    <section className="section approachSection" id="approach">
      <div className="shell">
        <div className="sectionHeading">
          <div><Eyebrow>From flight to foresight</Eyebrow><h2>A precise chain<br />of <em>evidence.</em></h2></div>
          <p>Accuracy is designed into the workflow before take-off, during capture and through every processing step.</p>
        </div>
        <div className="approachGrid">
          {steps.map(([Icon, title, text], index) => (
            <article key={title}>
              <div><span>0{index + 1}</span><Icon /></div>
              <h3>{title}</h3><p>{text}</p>
              {index < steps.length - 1 && <ArrowRight className="stepArrow" />}
            </article>
          ))}
        </div>
        <div className="positioningBand">
          <div className="positioningImage">
            <Image src="/assets/dji-terra.jpg" alt="Processed drone survey point cloud" fill sizes="(max-width: 760px) 100vw, 48vw" />
            <span><Radio size={15} /> POSITIONING WORKFLOW / ACTIVE</span>
          </div>
          <div className="positioningCopy">
            <Eyebrow light>Accuracy matched to purpose</Eyebrow>
            <div><strong>RTK</strong><p>Real-time corrections for rapid field confidence and precise capture.</p></div>
            <div><strong>PPK</strong><p>Post-flight corrections when signal conditions or mission design demand flexibility.</p></div>
            <div><strong>GNSS</strong><p>The positioning foundation for control, georeferencing and defensible outputs.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [active, setActive] = useState(0);
  const touchStart = useRef(null);
  const item = projects[active];
  const move = (direction) => setActive((active + direction + projects.length) % projects.length);

  return (
    <section className="section projectsSection" id="projects">
      <div className="shell">
        <div className="sectionHeading sectionHeadingLight">
          <div><Eyebrow light>Selected experience</Eyebrow><h2>Field work.<br /><em>Made visible.</em></h2></div>
          <div className="projectControls">
            <button onClick={() => move(-1)} aria-label="Previous project"><ChevronLeft /></button>
            <span>{String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
            <button onClick={() => move(1)} aria-label="Next project"><ChevronRight /></button>
          </div>
        </div>
        <div
          className="projectStage"
          key={item.title}
          onTouchStart={(event) => { touchStart.current = event.changedTouches[0].clientX; }}
          onTouchEnd={(event) => {
            const delta = touchStart.current - event.changedTouches[0].clientX;
            if (Math.abs(delta) > 45) move(delta > 0 ? 1 : -1);
          }}
        >
          <div className="projectImage">
            <Image src={item.image} alt={`${item.title} survey project`} fill sizes="(max-width: 760px) 100vw, 58vw" />
            <span>{item.code}</span>
          </div>
          <article className="projectCopy">
            <small>PROJECT EVIDENCE</small>
            <h3>{item.title}</h3><h4>{item.place}</h4>
            <div><strong>Scope</strong><p>{item.scope}</p></div>
            <div><strong>Output</strong><p>{item.result}</p></div>
          </article>
        </div>
        <div className="projectDots">
          {projects.map((project, index) => <button key={project.title} className={active === index ? "active" : ""} onClick={() => setActive(index)} aria-label={`View ${project.title}`}><span /></button>)}
        </div>
        <p className="swipeHint">Swipe the project card to explore more field experience.</p>
      </div>
    </section>
  );
}

function Deliverables() {
  return (
    <section className="section deliverablesSection" id="deliverables">
      <div className="shell">
        <div className="sectionHeading">
          <div><Eyebrow>Outputs engineered for action</Eyebrow><h2>Data your team<br /><em>can actually use.</em></h2></div>
          <p>Spatial evidence prepared for familiar engineering, design, planning and decision workflows.</p>
        </div>
        <div className="deliverableGrid">
          {deliverables.map(([Icon, title, tag, text], index) => (
            <article key={title}>
              <div><Icon /><span>0{index + 1}</span></div>
              <small>{tag}</small><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
        <div className="softwareBand">
          <span>WORKFLOW COMPATIBILITY</span>
          <div>{["DJI Terra", "Pix4D", "Metashape", "QGIS", "AutoCAD", "Global Mapper", "CloudCompare"].map((item) => <b key={item}>{item}</b>)}</div>
        </div>
      </div>
    </section>
  );
}

function BriefBuilder() {
  const [sector, setSector] = useState("Renewable energy");
  const [scale, setScale] = useState("Single site");
  const [goal, setGoal] = useState("Inspection & condition");
  const [copied, setCopied] = useState(false);
  const brief = useMemo(() => `THE ATLAS GRID — SURVEY SCOPE\nSector: ${sector}\nProject scale: ${scale}\nPrimary goal: ${goal}\n\nPlease recommend the capture method, positioning workflow, field requirements, deliverables and indicative schedule.`, [sector, scale, goal]);

  async function copyBrief() {
    await navigator.clipboard.writeText(brief);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section className="section briefSection" id="brief">
      <div className="briefGrid" aria-hidden="true" />
      <div className="shell briefLayout">
        <div>
          <Eyebrow light>Shape the mission</Eyebrow>
          <h2>Start with the<br /><em>decision.</em></h2>
          <p>Define the project in three quick steps. The Atlas Grid can then shape the sensor, accuracy, flight plan, processing path and outputs around what your team needs to know.</p>
          <div className="briefNote"><Radio size={18} /><span><strong>THE ATLAS GRID</strong>Drone survey · LiDAR · Thermal · GIS</span></div>
        </div>
        <div className="builder">
          <div className="builderHeader"><span>SURVEY SCOPE BUILDER</span><i><b /> READY</i></div>
          <label>
            <span>01 / SECTOR</span>
            <select value={sector} onChange={(event) => setSector(event.target.value)}>{sectors.map((item) => <option key={item.name}>{item.name}</option>)}</select>
          </label>
          <fieldset>
            <legend>02 / PROJECT SCALE</legend>
            <div className="segments">{["Single site", "Multi-site", "Long corridor"].map((item) => <button type="button" key={item} className={scale === item ? "active" : ""} onClick={() => setScale(item)}>{item}</button>)}</div>
          </fieldset>
          <label>
            <span>03 / PRIMARY GOAL</span>
            <select value={goal} onChange={(event) => setGoal(event.target.value)}>
              <option>Inspection & condition</option><option>Topography & design</option><option>Volume & progress</option><option>Boundary & ownership</option><option>Environmental monitoring</option>
            </select>
          </label>
          <div className="briefPreview"><small>YOUR OUTLINE</small><p>{sector} · {scale} · {goal}</p></div>
          <button className="copyButton" onClick={copyBrief}>{copied ? <><Check /> Copied to clipboard</> : <><Clipboard /> Copy scope outline</>}</button>
          <p className="privacyNote">Nothing is submitted. This tool only prepares a brief you can copy and share.</p>
        </div>
      </div>
      <footer className="shell footer">
        <Brand footer />
        <div><a href="#top">Back to top <ArrowDown size={15} /></a><span>© {new Date().getFullYear()} The Atlas Grid</span><span>theatlasgrid.com</span></div>
      </footer>
    </section>
  );
}

export default function Home() {
  const [presenting, setPresenting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("revealed");
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".sectionHeading, .capabilityGrid, .sectorPanel, .approachGrid, .positioningBand, .projectStage, .deliverableGrid, .briefLayout").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("presenting", presenting);
    return () => document.body.classList.remove("presenting");
  }, [presenting]);

  async function togglePresent() {
    if (document.fullscreenEnabled) {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setPresenting(true);
      } else {
        await document.exitFullscreen();
        setPresenting(false);
      }
    } else {
      setPresenting((value) => !value);
    }
  }

  useEffect(() => {
    const sync = () => setPresenting(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", sync);
    return () => document.removeEventListener("fullscreenchange", sync);
  }, []);

  return (
    <main>
      <Header onPresent={togglePresent} />
      <Hero />
      <Capabilities />
      <Sectors />
      <Approach />
      <Projects />
      <Deliverables />
      <BriefBuilder />
      <a className="mobileBrief" href="#brief">Build a survey scope <ArrowRight size={17} /></a>
    </main>
  );
}
