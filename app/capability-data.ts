export type Capability = {
  slug: string;
  number: string;
  name: string;
  eyebrow: string;
  title: string;
  summary: string;
  overviewTitle: string;
  heroImage: string;
  heroAlt: string;
  secondaryImage: string;
  secondaryAlt: string;
  solves: string[];
  applications: { title: string; text: string }[];
  workflow: { number: string; title: string; text: string }[];
  deliverables: { name: string; formats: string }[];
  reportIntro: string;
  reportRows: { label: string; detail: string; status: string }[];
  metaDescription: string;
};

export const capabilities: Capability[] = [
  {
    slug: "drone-survey",
    number: "01",
    name: "Drone survey",
    eyebrow: "REPEATABLE AERIAL EVIDENCE",
    title: "See the whole site. Measure what changes.",
    summary:
      "TAGS plans and captures high-resolution aerial data around the terrain, required accuracy and decision your team needs to make.",
    overviewTitle: "One current record for the whole project.",
    heroImage: "/assets/hero-aerial-v2.jpg",
    heroAlt: "Survey drone collecting aerial data above a major infrastructure corridor",
    secondaryImage: "/assets/highway-corridor-v2.jpg",
    secondaryAlt: "Aerial survey view of a highway corridor through varied terrain",
    solves: [
      "Replace fragmented ground observations with one current view of the site.",
      "Create repeatable records for planning, measurement and progress review.",
      "Prepare spatial outputs that engineering and GIS teams can use directly.",
    ],
    applications: [
      {
        title: "Topographic site survey",
        text: "Capture terrain, access, structures and visible constraints before design or construction begins.",
      },
      {
        title: "Construction progress",
        text: "Repeat the same mission to compare site conditions, quantities and completed work over time.",
      },
      {
        title: "Corridor reconnaissance",
        text: "Build a continuous aerial record of roads, rail, utilities and surrounding land context.",
      },
    ],
    workflow: [
      { number: "01", title: "Define", text: "Confirm the decision, boundary, accuracy, outputs and site constraints." },
      { number: "02", title: "Plan", text: "Design the mission, control strategy, overlap, height and field checks." },
      { number: "03", title: "Capture", text: "Collect aerial imagery and supporting positioning records safely and consistently." },
      { number: "04", title: "Deliver", text: "Process, verify and issue mapped outputs with a clear quality record." },
    ],
    deliverables: [
      { name: "Orthomosaic", formats: "GeoTIFF / JPEG" },
      { name: "Surface models", formats: "DSM / DTM" },
      { name: "Elevation products", formats: "Contours / spot levels" },
      { name: "Spatial layers", formats: "DXF / SHP / KML" },
      { name: "Three-dimensional data", formats: "LAS / LAZ / textured model" },
      { name: "Mission record", formats: "Web or document summary" },
    ],
    reportIntro:
      "The report connects the mission record, quality checks and delivered files so your team can understand what was captured and how to use it.",
    reportRows: [
      { label: "Project brief", detail: "Purpose, survey boundary, coordinate system and requested outputs", status: "DEFINED" },
      { label: "Capture record", detail: "Platform, sensor, mission plan, field conditions and coverage", status: "RECORDED" },
      { label: "Quality review", detail: "Control method, checkpoint approach and completeness checks", status: "VERIFIED" },
      { label: "Output register", detail: "Delivered files, formats, naming and intended use", status: "ISSUED" },
    ],
    metaDescription:
      "Professional drone surveying for topographic mapping, construction progress and corridor intelligence by TAGS.",
  },
  {
    slug: "lidar-mapping",
    number: "02",
    name: "LiDAR mapping",
    eyebrow: "DENSE TERRAIN INTELLIGENCE",
    title: "Reveal the ground beneath the complexity.",
    summary:
      "LiDAR captures dense three-dimensional observations that help separate terrain, vegetation and built features across difficult environments.",
    overviewTitle: "Terrain evidence where imagery alone is not enough.",
    heroImage: "/assets/lidar-forest-v2.jpg",
    heroAlt: "LiDAR point cloud revealing terrain through a forested landscape",
    secondaryImage: "/assets/highway-corridor-v2.jpg",
    secondaryAlt: "Infrastructure corridor crossing complex terrain",
    solves: [
      "Describe terrain beneath vegetation and across areas that are difficult to observe from the ground.",
      "Create a classified three-dimensional record for design, monitoring and spatial analysis.",
      "Prepare elevation products, profiles and point-cloud data for engineering teams.",
    ],
    applications: [
      {
        title: "Forestry and vegetation",
        text: "Separate ground, canopy and other classes to support terrain understanding and vegetation assessment.",
      },
      {
        title: "River and flood terrain",
        text: "Map banks, surrounding levels and accessible terrain context for drainage and protection planning.",
      },
      {
        title: "Corridor engineering",
        text: "Capture continuous three-dimensional context for transport, utility and right-of-way studies.",
      },
    ],
    workflow: [
      { number: "01", title: "Scope", text: "Define terrain classes, density, accuracy, extent and engineering outputs." },
      { number: "02", title: "Control", text: "Establish the positioning and check strategy for the operating environment." },
      { number: "03", title: "Scan", text: "Collect overlapping LiDAR observations and supporting field records." },
      { number: "04", title: "Classify", text: "Clean, classify, verify and convert the point cloud into usable terrain products." },
    ],
    deliverables: [
      { name: "Classified point cloud", formats: "LAS / LAZ" },
      { name: "Bare-earth terrain", formats: "DTM / GeoTIFF" },
      { name: "Surface model", formats: "DSM / GeoTIFF" },
      { name: "Elevation mapping", formats: "Contours / DXF / SHP" },
      { name: "Engineering sections", formats: "Profiles / cross-sections" },
      { name: "Classification record", formats: "Web or document summary" },
    ],
    reportIntro:
      "The report explains how the point cloud was collected, classified and checked, then records the terrain products prepared for the project team.",
    reportRows: [
      { label: "Acquisition record", detail: "Survey extent, sensor configuration, positioning and field conditions", status: "RECORDED" },
      { label: "Classification", detail: "Ground, vegetation, structures and project-specific class treatment", status: "REVIEWED" },
      { label: "Terrain products", detail: "Point cloud, DTM, DSM, contours and requested engineering sections", status: "PREPARED" },
      { label: "Quality record", detail: "Coverage, control approach, completeness and output register", status: "VERIFIED" },
    ],
    metaDescription:
      "LiDAR mapping for classified point clouds, bare-earth terrain, forestry and corridor engineering by TAGS.",
  },
  {
    slug: "thermal-inspection",
    number: "03",
    name: "Thermal inspection",
    eyebrow: "LOCATED ASSET ANOMALIES",
    title: "Find abnormal heat before it becomes a failure.",
    summary:
      "TAGS pairs thermal and RGB capture to locate temperature patterns, preserve visual context and organise findings for maintenance review.",
    overviewTitle: "Turn heat patterns into clear maintenance evidence.",
    heroImage: "/assets/solar-thermal-v2.jpg",
    heroAlt: "Thermal aerial inspection of a utility-scale solar farm",
    secondaryImage: "/assets/solar-rgb-v2.jpg",
    secondaryAlt: "Matching visible-light aerial view of the inspected solar farm",
    solves: [
      "Inspect large asset areas consistently without relying on isolated ground observations.",
      "Connect each thermal observation with a mapped location and matching visual context.",
      "Organise findings into a reviewable register for maintenance planning and follow-up.",
    ],
    applications: [
      {
        title: "Solar asset inspection",
        text: "Review panel fields for relative heat patterns and pair each observation with its visible condition.",
      },
      {
        title: "Electrical infrastructure",
        text: "Inspect substations and accessible electrical assets for unusual thermal behaviour and visual context.",
      },
      {
        title: "Industrial and built assets",
        text: "Survey roofs, facades and operating equipment where heat patterns support condition assessment.",
      },
    ],
    workflow: [
      { number: "01", title: "Prepare", text: "Confirm assets, operating conditions, access, timing and inspection criteria." },
      { number: "02", title: "Capture", text: "Collect aligned thermal and RGB observations using a repeatable mission." },
      { number: "03", title: "Review", text: "Compare relative patterns, visual context and location across the asset set." },
      { number: "04", title: "Prioritise", text: "Issue mapped observations and a structured register for technical review." },
    ],
    deliverables: [
      { name: "Thermal survey layer", formats: "Georeferenced imagery" },
      { name: "Anomaly map", formats: "GIS / web map" },
      { name: "RGB and thermal pairs", formats: "Linked inspection images" },
      { name: "Observation register", formats: "CSV / spreadsheet" },
      { name: "Priority review", formats: "Category-based findings" },
      { name: "Inspection summary", formats: "Web or document report" },
    ],
    reportIntro:
      "The report keeps thermal observations connected to asset location, visible condition and an agreed review category without claiming a diagnosis outside the survey scope.",
    reportRows: [
      { label: "Inspection basis", detail: "Asset scope, operating context, weather considerations and capture method", status: "DEFINED" },
      { label: "Mapped observations", detail: "Location, asset reference and paired thermal and RGB evidence", status: "LOCATED" },
      { label: "Review category", detail: "Relative pattern and agreed priority category for technical follow-up", status: "ORGANISED" },
      { label: "Action register", detail: "Observation list, image references and recommended review sequence", status: "ISSUED" },
    ],
    metaDescription:
      "Mapped thermal inspection for solar, electrical and industrial assets with paired RGB evidence by TAGS.",
  },
  {
    slug: "rtk-ppk",
    number: "04",
    name: "RTK / PPK",
    eyebrow: "CONTROLLED POSITIONING",
    title: "Anchor every observation to a reliable reference.",
    summary:
      "RTK and PPK positioning strategies connect aerial and ground observations to the project coordinate system with a documented control and check process.",
    overviewTitle: "Accuracy begins with the positioning strategy.",
    heroImage: "/assets/highway-corridor-v2.jpg",
    heroAlt: "Mapped highway corridor requiring controlled survey positioning",
    secondaryImage: "/assets/railway-corridor-v2.jpg",
    secondaryAlt: "Railway corridor survey extending across a long linear route",
    solves: [
      "Choose a positioning method that fits the site, connectivity and required output accuracy.",
      "Maintain a traceable connection between field observations and the project coordinate system.",
      "Document control, checkpoints and processing so downstream users understand the survey basis.",
    ],
    applications: [
      {
        title: "Survey control",
        text: "Establish and document reference points for aerial mapping, construction and repeat observations.",
      },
      {
        title: "Linear corridors",
        text: "Support consistent positioning across roads, railways, utilities and other extended project areas.",
      },
      {
        title: "Restricted connectivity",
        text: "Use post-processed correction where real-time communication is unreliable or unsuitable.",
      },
    ],
    workflow: [
      { number: "01", title: "Reference", text: "Confirm coordinate system, known control, accuracy need and site constraints." },
      { number: "02", title: "Establish", text: "Set the base, correction source, control and independent check method." },
      { number: "03", title: "Observe", text: "Record field and mission positioning data with complete survey notes." },
      { number: "04", title: "Validate", text: "Process corrections, compare checks and issue the positioning record." },
    ],
    deliverables: [
      { name: "Control schedule", formats: "Coordinates / descriptions" },
      { name: "Checkpoint record", formats: "Independent comparison" },
      { name: "Correction record", formats: "RTK / PPK processing notes" },
      { name: "Coordinate schedule", formats: "CSV / DXF / GIS" },
      { name: "Georeferenced outputs", formats: "Project coordinate system" },
      { name: "Accuracy statement", formats: "Quality summary" },
    ],
    reportIntro:
      "The positioning report records the reference system, correction method, field observations and independent checks used to support the delivered spatial data.",
    reportRows: [
      { label: "Reference system", detail: "Coordinate system, datum, units and supplied project control", status: "CONFIRMED" },
      { label: "Correction method", detail: "RTK or PPK setup, base information and observation records", status: "RECORDED" },
      { label: "Independent checks", detail: "Checkpoint method, comparison process and review notes", status: "COMPARED" },
      { label: "Positioning basis", detail: "Control schedule, processing summary and supported outputs", status: "ISSUED" },
    ],
    metaDescription:
      "RTK and PPK positioning strategies, survey control and documented accuracy checks for geospatial projects by TAGS.",
  },
  {
    slug: "photogrammetry",
    number: "05",
    name: "Photogrammetry",
    eyebrow: "MEASURABLE IMAGE-BASED MODELS",
    title: "Convert overlapping imagery into spatial evidence.",
    summary:
      "Photogrammetry transforms controlled aerial or close-range imagery into orthomosaics, elevation surfaces, point clouds and measurable three-dimensional models.",
    overviewTitle: "One image set. Multiple usable spatial products.",
    heroImage: "/assets/mining-stockpile-v2.jpg",
    heroAlt: "Photogrammetric survey of mining stockpiles and operational terrain",
    secondaryImage: "/assets/heritage-scan-v2.jpg",
    secondaryAlt: "Detailed three-dimensional documentation of a heritage structure",
    solves: [
      "Create current, measurable site context from systematically captured imagery.",
      "Support quantities, terrain review and visual documentation from a common dataset.",
      "Deliver two-dimensional and three-dimensional outputs suited to GIS, CAD and review workflows.",
    ],
    applications: [
      {
        title: "Topographic mapping",
        text: "Produce orthomosaics and surface information for planning, design context and site records.",
      },
      {
        title: "Volumes and earthworks",
        text: "Build measurable surfaces for stockpile, excavation and cut-and-fill assessment.",
      },
      {
        title: "As-built and heritage records",
        text: "Preserve detailed visual geometry for documentation, comparison and technical review.",
      },
    ],
    workflow: [
      { number: "01", title: "Design", text: "Set overlap, scale, viewpoints, control and required output resolution." },
      { number: "02", title: "Capture", text: "Collect consistent overlapping imagery and positioning observations." },
      { number: "03", title: "Reconstruct", text: "Align images and generate the cloud, surface, orthomosaic and model." },
      { number: "04", title: "Verify", text: "Check control, completeness, artefacts and suitability for intended use." },
    ],
    deliverables: [
      { name: "Orthomosaic", formats: "GeoTIFF / JPEG" },
      { name: "Dense point cloud", formats: "LAS / LAZ" },
      { name: "Elevation surfaces", formats: "DSM / DTM" },
      { name: "Three-dimensional model", formats: "Mesh / textured model" },
      { name: "Measurements", formats: "Area / volume / profile" },
      { name: "Engineering layers", formats: "DXF / SHP / contours" },
    ],
    reportIntro:
      "The processing report records the image set, reconstruction workflow, control checks and output register for the two-dimensional and three-dimensional products.",
    reportRows: [
      { label: "Image set", detail: "Capture method, overlap, viewpoints, positioning and field notes", status: "RECORDED" },
      { label: "Reconstruction", detail: "Alignment, dense cloud, surface, orthomosaic and model workflow", status: "PROCESSED" },
      { label: "Quality review", detail: "Control comparison, gaps, artefacts and intended-use checks", status: "VERIFIED" },
      { label: "Output register", detail: "Files, coordinate system, formats, measurements and limitations", status: "ISSUED" },
    ],
    metaDescription:
      "Photogrammetry for orthomosaics, terrain models, stockpile volumes and detailed three-dimensional documentation by TAGS.",
  },
  {
    slug: "gis-intelligence",
    number: "06",
    name: "GIS intelligence",
    eyebrow: "SPATIAL DATA FOR DECISIONS",
    title: "Bring every layer into one decision-ready view.",
    summary:
      "GIS intelligence organises survey, asset and contextual data into clear layers, analysis and records that project teams can maintain and use.",
    overviewTitle: "Move from disconnected files to usable spatial context.",
    heroImage: "/assets/agriculture-survey-v2.jpg",
    heroAlt: "Geospatial survey of agricultural land and surrounding infrastructure",
    secondaryImage: "/assets/highway-corridor-v2.jpg",
    secondaryAlt: "Mapped infrastructure corridor with surrounding land context",
    solves: [
      "Organise survey and project information into a consistent spatial structure.",
      "Connect assets, boundaries, terrain and observations through location and attributes.",
      "Prepare understandable maps, data dictionaries and delivery formats for operational use.",
    ],
    applications: [
      {
        title: "Asset and utility records",
        text: "Structure mapped assets, identifiers, condition observations and supporting information in one system.",
      },
      {
        title: "Land and boundary intelligence",
        text: "Combine cadastral, survey, terrain and site information for planning and review.",
      },
      {
        title: "Multi-layer project planning",
        text: "Compare constraints, access, environment, engineering and change across a common map base.",
      },
    ],
    workflow: [
      { number: "01", title: "Structure", text: "Define users, decisions, coordinate system, schema and required layers." },
      { number: "02", title: "Integrate", text: "Clean and combine survey, CAD, asset and contextual information." },
      { number: "03", title: "Analyse", text: "Apply spatial relationships, classifications and project-specific review." },
      { number: "04", title: "Operationalise", text: "Deliver documented layers, maps and interfaces in maintainable formats." },
    ],
    deliverables: [
      { name: "Spatial database", formats: "GeoPackage / File Geodatabase" },
      { name: "Project layers", formats: "SHP / KML / DXF" },
      { name: "Map series", formats: "PDF / PNG / web map" },
      { name: "Asset register", formats: "Spatial table / spreadsheet" },
      { name: "Data dictionary", formats: "Fields / codes / ownership" },
      { name: "Change layers", formats: "Time-based comparison" },
    ],
    reportIntro:
      "The GIS report documents the layer structure, source information, analysis performed and delivery formats so the spatial record remains understandable and maintainable.",
    reportRows: [
      { label: "Data sources", detail: "Survey, CAD, asset, boundary and contextual datasets included", status: "CATALOGUED" },
      { label: "Layer structure", detail: "Themes, attributes, identifiers, relationships and coordinate system", status: "ORGANISED" },
      { label: "Spatial review", detail: "Project-specific comparisons, constraints and mapped observations", status: "ANALYSED" },
      { label: "Delivery register", detail: "Files, formats, data dictionary, map products and update notes", status: "ISSUED" },
    ],
    metaDescription:
      "GIS intelligence for asset records, land information, project layers and decision-ready spatial analysis by TAGS.",
  },
];

export function getCapability(slug: string) {
  return capabilities.find((capability) => capability.slug === slug);
}
