"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  Box,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleDot,
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

const sections = [
  ["01", "Overview", "overview"],
  ["02", "Method", "method"],
  ["03", "Capabilities", "capabilities"],
  ["04", "Sectors", "sectors"],
  ["05", "Evidence", "evidence"],
  ["06", "Deliverables", "deliverables"],
  ["07", "Brief", "brief"],
];

const sectors = [
  {
    name: "Renewable energy",
    kicker: "Inspect. Diagnose. Protect output.",
    copy: "Thermal and RGB surveys identify hotspots, faulty modules, alignment issues, vegetation growth and visible defects across solar plants, wind assets and power corridors.",
    deliverables: ["Thermal anomaly maps", "Panel-wise inspection logs", "Annotated condition reports"],
    image: "/assets/thermal-panels.jpg",
    icon: Zap,
  },
  {
    name: "Mining & quarry",
    kicker: "Measure every movement.",
    copy: "High-resolution aerial capture enables pit and dump mapping, stockpile volume measurement, haul-road analysis and repeatable change detection for operational control.",
    deliverables: ["Cut / fill analysis", "Stockpile volumes", "Mine-site 2D and 3D models"],
    image: "/assets/jsw-stockpile.jpg",
    icon: Mountain,
  },
  {
    name: "Infrastructure",
    kicker: "See the corridor before construction.",
    copy: "RTK and PPK-enabled corridor mapping captures terrain, structures, utilities and right-of-way conditions for roads, railways, telecom and pipelines.",
    deliverables: ["Orthomosaics", "Alignment profiles", "DSM / DTM and contours"],
    image: "/assets/highway.jpg",
    icon: Route,
  },
  {
    name: "Land & agriculture",
    kicker: "Boundaries made defensible.",
    copy: "Precise boundary mapping, topography and vegetation intelligence help define property, detect encroachment, improve irrigation planning and monitor crop health.",
    deliverables: ["Boundary maps", "NDVI analysis", "Property data cards"],
    image: "/assets/agriculture.jpg",
    icon: Map,
  },
  {
    name: "Forest & environment",
    kicker: "Reveal terrain beneath the canopy.",
    copy: "LiDAR classification, bare-earth extraction and time-based change detection support forest health, biodiversity, conservation and difficult-terrain mapping.",
    deliverables: ["Classified point clouds", "Bare-earth models", "Change-detection analysis"],
    image: "/assets/lidar-forest.jpg",
    icon: Layers3,
  },
  {
    name: "Urban & heritage",
    kicker: "Digitize what must endure.",
    copy: "Detailed topographic mapping and structural orthographic surveys give planners and conservation teams spatial context for infrastructure and restoration decisions.",
    deliverables: ["3D visual models", "Damage annotations", "Risk and maintenance reports"],
    image: "/assets/heritage.jpg",
    icon: Box,
  },
];

const cases = [
  {
    code: "IND / 01",
    title: "JSW Cements",
    subtitle: "Stockpile intelligence - Toranagallu, Bellary",
    image: "/assets/jsw-stockpile.jpg",
    scope: "Aerial surveillance and volumetric analysis of cement stockpiles to track quantity and structural-layout changes.",
    result: "2D, 3D and orthographic maps with volume reports and comparative datasets for inventory and logistics planning.",
  },
  {
    code: "IND / 02",
    title: "Solar plant portfolio",
    subtitle: "Multi-state thermal inspection",
    image: "/assets/solar-mapping.jpg",
    scope: "Boundary, waypoint and thermal mapping across projects in Maharashtra, Odisha, West Bengal and other locations.",
    result: "High-resolution RGB and thermal datasets for panel performance, cracks, dust, vegetation and installation quality.",
  },
  {
    code: "IND / 03",
    title: "Kaveri river bed",
    subtitle: "LiDAR point-cloud survey - Madikeri, Karnataka",
    image: "/assets/riverbed.jpg",
    scope: "Terrain modelling of the river-bed area to support concrete structures, retaining-wall planning and flood-control decisions.",
    result: "DTM reports, elevation models, orthomosaics and contours for engineering design and overflow analysis.",
  },
  {
    code: "IND / 04",
    title: "Railway corridor",
    subtitle: "Infrastructure and encroachment mapping - Mangaluru region",
    image: "/assets/railway.jpg",
    scope: "Aerial inspection of track, vegetation, power infrastructure, visible wear and surrounding encroachments.",
    result: "DSM, DTM, orthomosaic and condition reports for clearance planning and preventive maintenance.",
  },
  {
    code: "IND / 05",
    title: "Wind farm development",
    subtitle: "Pre- and post-construction point cloud",
    image: "/assets/wind-pointcloud.jpg",
    scope: "Topography, foundations, access roads, vegetation and construction progress captured across the asset lifecycle.",
    result: "Orthomosaic, contour, 3D, inspection and comparison outputs ready for GIS and CAD workflows.",
  },
];

const outputs = [
  { icon: Map, title: "Orthomosaic", tag: "GeoTIFF / JPEG", text: "A single, measurable and georeferenced aerial map assembled from high-resolution capture." },
  { icon: Layers3, title: "DSM + DTM", tag: "Surface / terrain", text: "Elevation intelligence for engineering, drainage, visibility, grade and terrain decisions." },
  { icon: Box, title: "Point cloud + 3D", tag: "LAS / model", text: "Dense spatial representation for measurement, inspection, classification and digital-twin workflows." },
  { icon: Route, title: "CAD + GIS", tag: "SHP / KML / DXF", text: "Decision-ready layers that move directly into the systems used by design and planning teams." },
  { icon: ThermometerSun, title: "Thermal report", tag: "Annotated insight", text: "Visible anomaly evidence paired with location, asset context and maintenance priority." },
  { icon: Eye, title: "Visual dashboard", tag: "Web analytics", text: "Custom reporting and project views for teams that need faster access to spatial evidence." },
];

function Logo({ compact = false }) {
  return (
    <a href="#overview" className={`logo ${compact ? "logoCompact" : ""}`} aria-label="Global Online Solutions home">
      <span className="logoMark" aria-hidden="true">
        <svg viewBox="0 0 56 56"><path d="M28 3 49 15v26L28 53 7 41V15L28 3Z"/><path d="M38 19c-3-6-10-9-16-6-8 3-12 11-9 19 3 8 11 12 19 9 4-1 7-4 9-7v-7H28"/><circle cx="44" cy="12" r="3"/></svg>
      </span>
      <span className="logoWords"><strong>GOS</strong><small>GLOBAL ONLINE SOLUTIONS</small></span>
    </a>
  );
}

function Header({ present, onPresent }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="siteHeader">
      <Logo />
      <nav className={open ? "topNav open" : "topNav"} aria-label="Primary navigation">
        {sections.slice(1, 6).map(([, label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="#brief" className="navCta" onClick={() => setOpen(false)}>Start a brief <ArrowRight size={15}/></a>
      </nav>
      <button className="presentButton" onClick={onPresent} aria-label="Toggle presentation mode"><Expand size={16}/><span>{present ? "Exit" : "Present"}</span></button>
      <button className="menuButton" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
    </header>
  );
}

function Rail({ current }) {
  return (
    <aside className="rail" aria-label="Section navigation">
      <div className="railTrack"><span style={{height: `${(current / (sections.length - 1)) * 100}%`}} /></div>
      {sections.map(([num, label, id], i) => (
        <a key={id} href={`#${id}`} className={current === i ? "active" : ""}><span>{num}</span><em>{label}</em></a>
      ))}
    </aside>
  );
}

function Eyebrow({ children }) { return <div className="eyebrow"><span/>{children}</div>; }

function Hero() {
  return (
    <section id="overview" className="hero observed" data-index="0">
      <div className="heroBackdrop"><Image src="/assets/hero-equipment.jpg" alt="Drone survey equipment montage" fill priority sizes="100vw"/></div>
      <div className="heroGrid" aria-hidden="true" />
      <div className="heroContent shell">
        <div className="heroCopy">
          <Eyebrow>Aerial intelligence from India</Eyebrow>
          <h1>Survey the<br/><span>unseen.</span></h1>
          <p>GOS turns aerial capture into precise, decision-ready intelligence for land, infrastructure, energy, mining and the built environment.</p>
          <div className="heroActions">
            <a href="#capabilities" className="primaryButton">Explore capabilities <ArrowDown size={17}/></a>
            <a href="#evidence" className="textButton">View field evidence <ArrowRight size={17}/></a>
          </div>
        </div>
        <div className="heroInstrument" aria-label="Animated aerial survey flight">
          <div className="aerialWindow">
            <Image src="/assets/mission-map.jpg" alt="Aerial survey mission map" fill priority sizes="(max-width: 850px) 320px, 430px"/>
            <div className="aerialShade"/>
            <svg className="flightRoute" viewBox="0 0 500 420" aria-hidden="true">
              <path d="M-40 330 C80 250 140 355 238 245 S365 130 550 78"/>
              <circle cx="67" cy="294" r="5"/>
              <circle cx="414" cy="118" r="5"/>
            </svg>
            <div className="flyingDrone" aria-hidden="true">
              <svg viewBox="0 0 120 72">
                <path d="M44 31h32l8 9-11 5H47l-11-5 8-9Z"/>
                <path d="M43 34 25 21M77 34 95 21M44 43 25 54M76 43 95 54"/>
                <ellipse cx="19" cy="17" rx="17" ry="4"/><ellipse cx="101" cy="17" rx="17" ry="4"/>
                <ellipse cx="19" cy="58" rx="17" ry="4"/><ellipse cx="101" cy="58" rx="17" ry="4"/>
                <circle cx="60" cy="48" r="6"/>
              </svg>
              <span className="cameraCone"/>
            </div>
            <div className="flightCard top"><span>FLIGHT 02</span><strong>120 m AGL</strong></div>
            <div className="flightCard bottom"><span>POSITIONING</span><strong><i/> RTK ACTIVE</strong></div>
          </div>
          <p className="flightCaption"><span>Live mission planning</span><b>Precise capture. Defensible data.</b></p>
        </div>
      </div>
      <div className="heroMetrics shell">
        <div><strong>cm</strong><span>RTK / PPK positioning</span></div>
        <div><strong>2D + 3D</strong><span>Engineering deliverables</span></div>
        <div><strong>2000+</strong><span>Acres in land surveys</span></div>
        <div><strong>12+</strong><span>Industry applications</span></div>
      </div>
      <div className="scrollCue"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></div>
    </section>
  );
}

function Method() {
  const steps = [
    { no: "01", title: "Capture", text: "RGB, thermal, multispectral and LiDAR payloads collect the evidence.", icon: ScanLine },
    { no: "02", title: "Position", text: "GNSS, RTK, PPK and ground control anchor every observation in space.", icon: Crosshair },
    { no: "03", title: "Process", text: "Photogrammetry and point-cloud workflows convert raw capture into models.", icon: Orbit },
    { no: "04", title: "Decide", text: "GIS, CAD, reports and dashboards make the data operational.", icon: Sparkles },
  ];
  return (
    <section id="method" className="section method observed" data-index="1">
      <div className="shell">
        <div className="sectionIntro splitIntro">
          <div><Eyebrow>From flight to foresight</Eyebrow><h2>A precise chain<br/>of <span>evidence.</span></h2></div>
          <p>Accuracy is designed into the workflow - before take-off, during capture and through every processing step.</p>
        </div>
        <div className="methodGrid">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return <article key={step.no} className="methodCard"><div className="methodIcon"><Icon/></div><span>{step.no}</span><h3>{step.title}</h3><p>{step.text}</p>{i < 3 && <ArrowRight className="methodArrow"/>}</article>;
          })}
        </div>
        <div className="precisionBand">
          <div className="precisionVisual"><Image src="/assets/mission-map.jpg" alt="Mission planning and pre-processing map" fill sizes="(max-width: 900px) 100vw, 45vw"/><div className="mapReticle"><CircleDot/></div><span className="mapLabel">MISSION / 07<br/><b>PRE-PROCESSING</b></span></div>
          <div className="precisionCopy"><Eyebrow>Choose the right positioning mode</Eyebrow><div className="mode"><strong>RTK</strong><p>Centimeter-level corrections in real time for live precision and rapid on-site confidence.</p></div><div className="mode"><strong>PPK</strong><p>Post-flight correction for high-accuracy mapping where signal conditions are difficult.</p></div><div className="mode"><strong>GNSS</strong><p>The satellite positioning foundation used for accurate georeferencing and control.</p></div></div>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const items = [
    [Radio, "Matrice 350 RTK", "Repeatable, high-accuracy missions"],
    [Layers3, "LiDAR", "Dense point clouds and bare-earth terrain"],
    [ThermometerSun, "Thermal", "Heat signatures and asset anomalies"],
    [Eye, "RGB", "High-resolution visual inspection"],
    [Sparkles, "Multispectral", "Vegetation and crop-health indices"],
    [Route, "VTOL", "Efficient capture across long corridors"],
  ];
  return (
    <section id="capabilities" className="section capabilities observed" data-index="2">
      <div className="shell">
        <div className="sectionIntro centered"><Eyebrow>Sensor fusion</Eyebrow><h2>One mission. <span>Multiple layers.</span></h2><p>We match platform and payload to the question - not the other way around.</p></div>
        <div className="capabilityBento">
          <div className="sensorScene">
            <Image src="/assets/dji-terra.jpg" alt="Processed aerial survey model in DJI Terra" fill sizes="(max-width: 900px) 100vw, 55vw"/>
            <div className="sceneHud"><span>POINT CLOUD DENSITY</span><b>HIGH</b></div>
            <div className="sceneLegend"><i/><span>Ground</span><i/><span>Structure</span><i/><span>Vegetation</span></div>
          </div>
          <div className="sensorList">
            {items.map(([Icon, title, text], i) => <div className="sensorItem" key={title}><span className="sensorNo">0{i+1}</span><Icon/><div><strong>{title}</strong><p>{text}</p></div></div>)}
          </div>
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
    <section id="sectors" className="section sectors observed" data-index="3">
      <div className="shell">
        <div className="sectionIntro splitIntro"><div><Eyebrow>Sector intelligence</Eyebrow><h2>Built for the<br/><span>real world.</span></h2></div><p>Explore how the same geospatial foundation is tailored to different operational questions.</p></div>
        <div className="sectorExplorer">
          <div className="sectorTabs" role="tablist" aria-label="Survey sectors">
            {sectors.map((sector, i) => <button key={sector.name} role="tab" aria-selected={active === i} onClick={() => setActive(i)}><span>0{i+1}</span>{sector.name}<ArrowRight size={16}/></button>)}
          </div>
          <div className="sectorStage" key={item.name}>
            <Image src={item.image} alt={`${item.name} survey field evidence`} fill sizes="(max-width: 900px) 100vw, 60vw"/>
            <div className="sectorShade"/>
            <div className="sectorContent"><div className="sectorIcon"><Icon/></div><span>APPLICATION / 0{active+1}</span><h3>{item.kicker}</h3><p>{item.copy}</p><ul>{item.deliverables.map(x => <li key={x}><Check size={14}/>{x}</li>)}</ul></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Evidence() {
  const [active, setActive] = useState(0);
  const item = cases[active];
  const next = (d) => setActive((active + d + cases.length) % cases.length);
  return (
    <section id="evidence" className="section evidence observed" data-index="4">
      <div className="shell">
        <div className="sectionIntro splitIntro"><div><Eyebrow>Selected experience</Eyebrow><h2>Field work.<br/><span>Made visible.</span></h2></div><div className="caseControls"><button onClick={() => next(-1)} aria-label="Previous case"><ChevronLeft/></button><span>{String(active+1).padStart(2,"0")} / {String(cases.length).padStart(2,"0")}</span><button onClick={() => next(1)} aria-label="Next case"><ChevronRight/></button></div></div>
        <div className="caseStage" key={item.title}>
          <div className="caseImage"><Image src={item.image} alt={`${item.title} project`} fill sizes="(max-width: 900px) 100vw, 60vw"/><span className="caseCode">{item.code}</span><span className="imageScan"/></div>
          <article className="caseDetail"><span>PROJECT EVIDENCE</span><h3>{item.title}</h3><h4>{item.subtitle}</h4><div><small>SCOPE</small><p>{item.scope}</p></div><div><small>OUTPUT</small><p>{item.result}</p></div><div className="caseTags"><i>Survey</i><i>Geospatial</i><i>Decision data</i></div></article>
        </div>
        <div className="caseDots">{cases.map((c,i) => <button key={c.title} className={active===i?"active":""} onClick={() => setActive(i)} aria-label={`View ${c.title}`}><span/></button>)}</div>
      </div>
    </section>
  );
}

function Deliverables() {
  const software = ["DJI Terra", "Pix4D", "DroneDeploy", "Mission Planner", "Metashape", "WebODM", "QGIS", "Global Mapper", "AutoCAD 3D", "Trimble Business Center", "CloudCompare", "OpenDroneMap"];
  return (
    <section id="deliverables" className="section deliverables observed" data-index="5">
      <div className="shell">
        <div className="sectionIntro centered"><Eyebrow>Outputs engineered for action</Eyebrow><h2>Data your team<br/><span>can actually use.</span></h2><p>From raw spatial evidence to familiar engineering formats, visual reports and live decision surfaces.</p></div>
        <div className="outputGrid">{outputs.map((item, i) => { const Icon=item.icon; return <article key={item.title}><div className="outputTop"><Icon/><span>0{i+1}</span></div><small>{item.tag}</small><h3>{item.title}</h3><p>{item.text}</p><ArrowRight className="outputArrow"/></article>})}</div>
        <div className="softwareBand"><span>POST-PROCESSING ECOSYSTEM</span><div className="softwareMarquee"><div>{[...software, ...software].map((x,i)=><i key={`${x}-${i}`}>{x}</i>)}</div></div></div>
      </div>
    </section>
  );
}

function BriefBuilder() {
  const [sector, setSector] = useState("Renewable energy");
  const [area, setArea] = useState("Single site");
  const [goal, setGoal] = useState("Inspection & condition");
  const [copied, setCopied] = useState(false);
  const brief = useMemo(() => `GOS SURVEY BRIEF\nSector: ${sector}\nProject scale: ${area}\nPrimary goal: ${goal}\n\nPlease recommend the capture method, positioning workflow, deliverables, schedule and field requirements.`, [sector, area, goal]);
  async function copyBrief() { await navigator.clipboard.writeText(brief); setCopied(true); setTimeout(()=>setCopied(false), 1800); }
  return (
    <section id="brief" className="section brief observed" data-index="6">
      <div className="briefGlow"/>
      <div className="shell">
        <div className="briefLayout">
          <div className="briefCopy"><Eyebrow>Start with the question</Eyebrow><h2>What do you<br/>need to <span>know?</span></h2><p>Define the mission in three steps. GOS can then shape the sensor, accuracy, flight plan, processing path and final outputs around the decision you need to make.</p><div className="contactLine"><span><Radio size={16}/> GLOBAL ONLINE SOLUTIONS</span><small>Aerial survey / geospatial intelligence / decision systems</small></div></div>
          <div className="briefBuilder">
            <div className="builderHeader"><span>MISSION CONFIGURATOR</span><i><b/>ONLINE</i></div>
            <label><span>01 / SECTOR</span><select value={sector} onChange={e=>setSector(e.target.value)}>{sectors.map(x=><option key={x.name}>{x.name}</option>)}</select></label>
            <label><span>02 / PROJECT SCALE</span><div className="segmented">{["Single site", "Multi-site", "Long corridor"].map(x=><button key={x} onClick={()=>setArea(x)} className={area===x?"active":""}>{x}</button>)}</div></label>
            <label><span>03 / PRIMARY GOAL</span><select value={goal} onChange={e=>setGoal(e.target.value)}><option>Inspection & condition</option><option>Topography & design</option><option>Volume & progress</option><option>Boundary & ownership</option><option>Environmental monitoring</option></select></label>
            <div className="briefPreview"><small>GENERATED BRIEF</small><p>{sector} / {area} / {goal}</p></div>
            <button className="copyButton" onClick={copyBrief}>{copied ? <><Check/> Copied to clipboard</> : <><Clipboard/> Copy survey brief</>}</button>
          </div>
        </div>
        <footer><Logo compact/><div><a href="#overview">Back to top <ArrowDown size={14}/></a><span>© {new Date().getFullYear()} Global Online Solutions</span></div></footer>
      </div>
    </section>
  );
}

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [present, setPresent] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const nodes = document.querySelectorAll(".observed");
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          setCurrent(Number(entry.target.dataset.index));
        }
      });
    }, { threshold: 0.35 });
    nodes.forEach(node => observerRef.current.observe(node));
    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    function onFull() { const is = Boolean(document.fullscreenElement); setPresent(is); document.body.classList.toggle("presenting", is); }
    document.addEventListener("fullscreenchange", onFull);
    return () => document.removeEventListener("fullscreenchange", onFull);
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (!present || !["ArrowDown","ArrowRight","ArrowUp","ArrowLeft"].includes(e.key)) return;
      e.preventDefault();
      const direction = ["ArrowDown","ArrowRight"].includes(e.key) ? 1 : -1;
      const index = Math.max(0, Math.min(sections.length-1, current + direction));
      document.getElementById(sections[index][2])?.scrollIntoView({behavior:"smooth"});
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [present, current]);

  async function togglePresent() {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen?.();
    else await document.exitFullscreen?.();
  }

  return (
    <main>
      <Header present={present} onPresent={togglePresent}/>
      <Rail current={current}/>
      <Hero/>
      <Method/>
      <Capabilities/>
      <Sectors/>
      <Evidence/>
      <Deliverables/>
      <BriefBuilder/>
    </main>
  );
}
