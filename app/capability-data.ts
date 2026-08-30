export type Deliverable = {
  name: string;
  formats: string;
  description: string;
};

export type Capability = {
  slug: string;
  number: string;
  name: string;
  listSummary: string;
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
  deliverables: Deliverable[];
  reportIntro: string;
  reportRows: { label: string; detail: string; status: string }[];
  metaDescription: string;
};

export const capabilities: Capability[] = [
  {
    slug: "drone-survey",
    number: "01",
    name: "Drone survey",
    listSummary: "Mapping with speed, safety and accuracy.",
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
      { name: "Orthomosaic", formats: "GeoTIFF / JPEG", description: "An orthomosaic combines many overlapping drone photographs into one geometrically corrected, map-accurate image of the full survey area. Unlike a normal aerial photograph, it can be measured and aligned with project coordinates. Your team can use it to review current site conditions, mark features, compare survey dates and provide a clear visual base for CAD, GIS, planning and progress discussions." },
      { name: "Surface models", formats: "DSM / DTM", description: "Surface models turn the captured survey data into a continuous digital representation of site height. A DSM includes visible features such as buildings, vegetation and equipment, while a DTM represents the underlying ground where it can be reliably determined. These models support drainage review, slope assessment, earthwork planning, line-of-sight checks and the preparation of contours, profiles and other engineering information." },
      { name: "Elevation products", formats: "Contours / spot levels", description: "Elevation products translate the surveyed terrain into familiar levels that design and site teams can read quickly. Contours show how height changes across the project, while spot levels record elevations at selected locations. They help teams understand slopes, high and low points, access conditions and possible drainage paths, and can be supplied in formats that fit existing CAD or GIS workflows." },
      { name: "Spatial layers", formats: "DXF / SHP / KML", description: "Spatial layers organise mapped features into separate, usable themes such as boundaries, roads, structures, drainage, utilities or survey observations. Each layer retains its project location and can include useful attributes. Delivering the information in DXF, SHP or KML allows engineering, GIS and planning teams to open the same survey evidence in their preferred software without rebuilding the data from an image." },
      { name: "Three-dimensional data", formats: "LAS / LAZ / textured model", description: "Three-dimensional data preserves the surveyed site's shape as a point cloud or textured model. It allows users to inspect terrain and visible structures from different viewpoints, take supported measurements and understand complex areas that are difficult to communicate on a flat map. LAS and LAZ files support specialist point-cloud software, while a textured model offers an accessible visual record for review and coordination." },
      { name: "Mission record", formats: "Web or document summary", description: "The mission record explains how the drone survey was planned and completed. It summarises the survey extent, capture date, equipment, positioning approach, site conditions, quality checks and delivered files. This gives future users important context about where the information came from and how it should be used, while providing the project team with a traceable reference for repeat surveys and later comparisons." },
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
    listSummary: "Dense point clouds and bare-earth terrain in complex environments.",
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
      { name: "Classified point cloud", formats: "LAS / LAZ", description: "A classified point cloud contains millions of three-dimensional LiDAR observations organised into practical groups such as ground, vegetation, buildings and other visible surfaces. The classification makes the dataset easier to filter, inspect and reuse for different technical tasks. LAS or compressed LAZ files can be opened in standard point-cloud, GIS and engineering software for terrain analysis, asset review and detailed measurement." },
      { name: "Bare-earth terrain", formats: "DTM / GeoTIFF", description: "A bare-earth terrain model represents the ground surface after suitable vegetation and above-ground objects have been separated from the LiDAR observations. It is particularly useful where trees or dense cover make normal aerial imagery difficult to interpret. The resulting DTM supports terrain understanding, drainage and watershed review, slope analysis, route planning and the preparation of contours or engineering sections within the surveyed conditions." },
      { name: "Surface model", formats: "DSM / GeoTIFF", description: "The LiDAR surface model records the uppermost measured surfaces across the site, including tree canopies, structures and exposed ground. It provides a continuous height reference for understanding what occupies the landscape, not only the terrain beneath it. Teams can use the DSM for canopy assessment, visibility studies, clearance review, surface comparison and as a supporting raster layer in GIS or specialist analysis software." },
      { name: "Elevation mapping", formats: "Contours / DXF / SHP", description: "Elevation mapping converts the LiDAR terrain into contours and other level information that can be read in CAD and GIS systems. It provides a practical view of relief, slope changes, valleys, ridges and local height differences across the survey area. The supplied interval and format are selected for the intended use so project teams can integrate the mapping into planning, environmental review or engineering development." },
      { name: "Engineering sections", formats: "Profiles / cross-sections", description: "Engineering sections extract the LiDAR surface along selected lines to show how elevation changes through a corridor, riverbed, embankment or other area of interest. Longitudinal profiles explain change along a route, while cross-sections show its shape from side to side. These focused outputs help teams review gradients, clearances, terrain constraints and design context without navigating the complete larger three-dimensional dataset." },
      { name: "Classification record", formats: "Web or document summary", description: "The classification record documents how the LiDAR dataset was processed and organised. It identifies the supplied classes, coordinate reference, coverage, point-cloud format, quality review and any limits that users should understand. This supporting information helps technical teams interpret the data consistently, select the right classes for their work and maintain a traceable basis when the terrain products are reused later." },
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
    listSummary: "Located heat anomalies for energy assets and built infrastructure.",
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
      { name: "Thermal survey layer", formats: "Georeferenced imagery", description: "The thermal survey layer places captured temperature-pattern imagery in its correct site location. This lets reviewers understand where each observation sits within the asset layout instead of working through disconnected photographs. It supports systematic coverage review, comparison with other spatial information and efficient navigation from a map to the relevant inspection evidence. Interpretation remains tied to the agreed operating and environmental conditions." },
      { name: "Anomaly map", formats: "GIS / web map", description: "An anomaly map presents identified thermal observations at their mapped asset locations. Symbols and agreed categories help the team see where unusual relative patterns occur and move directly to the linked supporting evidence. The map is designed for screening and maintenance planning rather than unsupported diagnosis, giving technical reviewers a clear spatial overview that can be filtered, shared and compared with asset or inspection records." },
      { name: "RGB and thermal pairs", formats: "Linked inspection images", description: "Paired RGB and thermal images show the same asset or inspection area in visible and heat-pattern views. The visible image provides physical context, while the thermal image records the relative pattern observed during capture. Keeping them linked helps reviewers identify the correct component, distinguish environmental or surface influences and decide which observations require closer technical assessment, site verification or continued monitoring." },
      { name: "Observation register", formats: "CSV / spreadsheet", description: "The observation register is a structured list of the items identified during review. Each entry can include an asset reference, mapped location, image links, observation category, notes and follow-up status. A spreadsheet or CSV format makes the information easy to sort, assign and bring into existing maintenance systems. It creates a practical bridge between the survey evidence and the team's own inspection or action workflow." },
      { name: "Priority review", formats: "Category-based findings", description: "The priority review groups thermal observations using the categories agreed for the project. It helps teams separate routine review items from patterns that may deserve earlier technical attention, while avoiding claims that cannot be supported by remote sensing alone. Each category remains connected to the location and paired imagery so qualified asset specialists can assess the evidence, operating context and appropriate next step." },
      { name: "Inspection summary", formats: "Web or document report", description: "The inspection summary brings the survey scope, capture conditions, mapped observations and review categories into one readable record. It explains the inspection basis, links key findings to their evidence and notes important limitations or recommended follow-up. The report is structured so asset managers and technical reviewers can understand what was observed, where it was found and how to continue the assessment." },
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
    listSummary: "Centimetre-grade positioning with the right ground-control strategy.",
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
      { name: "Control schedule", formats: "Coordinates / descriptions", description: "The control schedule lists the reference points used to connect survey observations to the project coordinate system. It records each point's identifier, coordinates, description and relevant field notes so it can be understood or revisited. This schedule gives aerial, ground, CAD and GIS teams a common positioning basis and supports repeatable work when later surveys or construction activities need to use the same control framework." },
      { name: "Checkpoint record", formats: "Independent comparison", description: "The checkpoint record documents observations that were kept independent from the main processing control and used to review the resulting position. It compares the surveyed output with known check locations and records the differences found. This provides a transparent quality check, helping users understand whether the positioning process supports the agreed purpose without presenting a precision claim that is not supported by the collected evidence." },
      { name: "Correction record", formats: "RTK / PPK processing notes", description: "The correction record explains how positioning corrections were obtained and applied during RTK or PPK processing. It can include the base or network source, observation timing, equipment references, processing approach and relevant field conditions. Keeping this information with the survey makes the positioning workflow traceable and helps technical users understand how raw receiver observations became the coordinates used by the delivered mapping and models." },
      { name: "Coordinate schedule", formats: "CSV / DXF / GIS", description: "A coordinate schedule provides the verified project points in formats that can move directly into spreadsheets, CAD or GIS software. Each point is supplied with a clear identifier and the appropriate coordinate and level fields. The schedule reduces manual transcription, supports setting-out or review workflows and gives different project teams a consistent list of positions tied to the stated coordinate reference and survey basis." },
      { name: "Georeferenced outputs", formats: "Project coordinate system", description: "Georeferenced outputs are survey images, models or spatial layers aligned to the confirmed project coordinate system. This alignment allows them to overlay correctly with design drawings, asset information, land data and later survey records. The delivery identifies the reference system and units so users can place the files accurately in their working environment and avoid shifts caused by missing or misunderstood coordinate information." },
      { name: "Accuracy statement", formats: "Quality summary", description: "The accuracy statement summarises the positioning method, control used, independent checks and review results relevant to the delivered data. It explains the basis on which the outputs should be used and records any limitations identified during processing. Rather than offering a generic guarantee, it gives engineers and GIS users a concise, evidence-based account of the survey's positional quality for the agreed project purpose." },
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
    listSummary: "Orthomosaics, terrain models and spatial layers engineered for use.",
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
      { name: "Orthomosaic", formats: "GeoTIFF / JPEG", description: "The photogrammetric orthomosaic combines overlapping photographs into a detailed, map-aligned image with a consistent scale. It gives project teams a current visual base that can be measured, annotated and compared with other spatial information. GeoTIFF supports accurate use in GIS and CAD-linked workflows, while JPEG offers a lighter review copy for reports, meetings and communication with users who do not need specialist mapping software." },
      { name: "Dense point cloud", formats: "LAS / LAZ", description: "A dense point cloud reconstructs the visible site geometry from matched locations across many overlapping photographs. Each point has a three-dimensional position and usually colour from the source imagery, creating a detailed digital record for inspection and measurement. LAS or compressed LAZ files can be filtered and analysed in point-cloud software to support surface creation, volume work, feature review and preparation of further engineering products." },
      { name: "Elevation surfaces", formats: "DSM / DTM", description: "Elevation surfaces convert the reconstructed survey into continuous height models. A DSM represents the visible upper surface, including structures and vegetation, while a DTM represents the terrain where ground information can be reliably prepared. These products support contour generation, slope and drainage review, earthwork planning and comparison between survey dates. They are delivered with the coordinate reference and resolution needed for the agreed use." },
      { name: "Three-dimensional model", formats: "Mesh / textured model", description: "A three-dimensional model joins the reconstructed survey points into a continuous surface and can apply the captured photographs as realistic texture. It provides an intuitive way to inspect complex sites, stockpiles, structures or heritage features from multiple viewpoints. The model supports visual coordination and suitable measurements, while giving teams a detailed condition record that can be revisited without needing everyone to be present on site." },
      { name: "Measurements", formats: "Area / volume / profile", description: "Measurement outputs extract agreed quantities or dimensions from the verified photogrammetric model. They may include surface area, stockpile volume, excavation comparison, height, distance or terrain profiles, depending on the survey purpose and visible data. Results are supplied with their measurement basis and relevant limitations so project teams can understand what was calculated, review the supporting geometry and use the figures appropriately in their own workflow." },
      { name: "Engineering layers", formats: "DXF / SHP / contours", description: "Engineering layers translate selected information from the photogrammetric survey into familiar CAD and GIS features. They can include contours, boundaries, visible structures, breaklines or other agreed mapping themes. DXF and SHP formats help design and spatial teams integrate the results without handling the full image model. Layer naming, coordinate reference and feature treatment are documented so the information remains clear when shared across disciplines." },
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
    listSummary: "Clear analysis that moves directly into operational decision systems.",
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
      { name: "Spatial database", formats: "GeoPackage / File Geodatabase", description: "A spatial database brings related project information into one organised, location-aware structure. It can store survey features, assets, boundaries, observations and supporting attributes while preserving their relationships and coordinate reference. GeoPackage offers a portable single-file option, while a File Geodatabase supports established Esri workflows. Both reduce scattered files and give teams a maintainable foundation for mapping, analysis and future updates." },
      { name: "Project layers", formats: "SHP / KML / DXF", description: "Project layers separate spatial information into practical themes such as access, parcels, utilities, survey observations, constraints or design context. Each layer is prepared with clear geometry and useful attributes for its intended users. SHP, KML and DXF options allow the information to move between GIS, browser-based mapping and CAD workflows, helping different teams work from the same mapped evidence without unnecessary manual conversion." },
      { name: "Map series", formats: "PDF / PNG / web map", description: "A map series presents the project's spatial information as a coordinated set of readable views. Each map uses consistent symbols, scale, labels and context to explain a particular theme or area. PDF and PNG versions work well for reports and meetings, while a web map supports interactive navigation and layer control. Together they make complex GIS information understandable to both technical specialists and wider project stakeholders." },
      { name: "Asset register", formats: "Spatial table / spreadsheet", description: "The asset register connects each mapped asset to a structured record containing its identifier, type, location and agreed project attributes. It may also link observations, photographs or status information where these form part of the scope. Delivering the register as a spatial table or spreadsheet makes it useful for mapping and everyday management, and provides a consistent starting point for maintenance, inspection or future data updates." },
      { name: "Data dictionary", formats: "Fields / codes / ownership", description: "A data dictionary explains what the fields, codes and values in the GIS delivery mean. It records expected formats, permitted categories, identifiers and responsibility for important information, helping users enter and interpret data consistently. This small reference prevents a spatial database from becoming confusing over time and supports a reliable handover to teams who were not involved in the original survey or data preparation." },
      { name: "Change layers", formats: "Time-based comparison", description: "Change layers organise comparable information from different survey dates so teams can see where mapped conditions have altered. Depending on the available data, they may show additions, removals, movement, land-cover differences or updated asset status. The comparison basis and dates are clearly recorded. This supports progress review and targeted investigation while keeping the original observations available for context instead of replacing them with an unexplained result." },
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
  {
    slug: "topography-cad-models",
    number: "07",
    name: "Topography and CAD models",
    listSummary: "Enable informed site planning with high-precision topographic data and accurate CAD models.",
    eyebrow: "ENGINEERING-READY TERRAIN",
    title: "Build design decisions on clear ground information.",
    summary:
      "TAGS combines controlled survey observations, terrain processing and CAD preparation to create an accurate, usable base for planning and engineering design.",
    overviewTitle: "Connect real site conditions with technical design.",
    heroImage: "/assets/highway-corridor-v2.jpg",
    heroAlt: "Aerial topographic survey of a highway corridor and surrounding terrain",
    secondaryImage: "/assets/mining-stockpile-v2.jpg",
    secondaryAlt: "Detailed terrain and operational features captured for topographic modelling",
    solves: [
      "Replace incomplete site sketches with a coordinated and measurable terrain record.",
      "Represent levels, breaks, visible features and project context in engineering-ready layers.",
      "Prepare a clear base that survey, planning, GIS and CAD teams can review together.",
    ],
    applications: [
      {
        title: "Site planning and design",
        text: "Map terrain, access, drainage context and visible constraints before engineering design begins.",
      },
      {
        title: "Corridor base mapping",
        text: "Create continuous topographic and CAD context for roads, railways, utilities and rights-of-way.",
      },
      {
        title: "Earthworks and grading",
        text: "Prepare surfaces, contours and sections that support levels, quantities and grading review.",
      },
    ],
    workflow: [
      { number: "01", title: "Define", text: "Confirm design purpose, coordinate system, extent, accuracy and required CAD standard." },
      { number: "02", title: "Survey", text: "Capture aerial and ground observations with the appropriate control strategy." },
      { number: "03", title: "Model", text: "Build terrain surfaces, contours, breaklines and mapped feature layers." },
      { number: "04", title: "Draft", text: "Organise verified information into coordinated CAD and spatial deliverables." },
    ],
    deliverables: [
      { name: "Topographic base map", formats: "DWG / DXF / GIS", description: "The topographic base map provides a coordinated plan of the surveyed terrain and agreed visible features. It can include boundaries, access, structures, drainage context, level information and other details needed for planning or design. DWG, DXF and GIS formats allow the same verified survey basis to support engineering and spatial teams, reducing the need to redraw site information or work from uncoordinated sketches." },
      { name: "Terrain surface", formats: "DTM / TIN / GeoTIFF", description: "The terrain surface is a continuous digital model of the surveyed ground, prepared from suitable aerial and ground observations. DTM, TIN or GeoTIFF formats support different engineering and GIS tools while describing the same coordinated site shape. Teams can use it to review gradients, drainage paths, earthworks, access and design relationships, with the survey basis and any areas of limited ground visibility clearly documented." },
      { name: "Elevation mapping", formats: "Contours / spot levels", description: "Elevation mapping expresses the terrain through contour lines and selected spot levels. Contours make broad slope and landform changes easy to see, while spot levels provide precise reference at important locations or features. Together they create an accessible height framework for layouts, grading, drainage and site review. The interval, units and coordinate reference are selected and stated according to the agreed design purpose." },
      { name: "Mapped features", formats: "Breaklines / structures / access", description: "Mapped features identify the visible site elements that give the terrain engineering meaning. These may include breaklines, roads, paths, structures, walls, drainage features and other agreed items within the survey scope. Organising them into clear CAD or GIS layers helps designers understand existing conditions and how features relate to levels. Feature definitions and any visibility limitations are recorded to avoid unsupported interpretation." },
      { name: "Engineering sections", formats: "Profiles / cross-sections", description: "Engineering sections cut through the terrain model along selected alignments to show levels and shape in profile. Long sections explain change along a road, utility or design route, while cross-sections show the ground across it. They provide an efficient way to review gradients, embankments, channels and design context. The section locations and reference information remain tied to the coordinated topographic survey." },
      { name: "Survey basis", formats: "Control and quality summary", description: "The survey basis summarises how the topographic and CAD information was created. It records the coordinate system, control approach, capture methods, key quality checks, supplied layers and important limitations. This gives designers and future users the context needed to place and interpret the files correctly. It also creates a traceable reference if the site is surveyed again or the mapping is updated later." },
    ],
    reportIntro:
      "The survey basis records how the terrain and mapped features were observed, checked and organised for the supplied CAD and spatial outputs.",
    reportRows: [
      { label: "Design brief", detail: "Project purpose, extent, coordinate system, accuracy and CAD standard", status: "DEFINED" },
      { label: "Survey basis", detail: "Capture method, control, field observations and feature treatment", status: "RECORDED" },
      { label: "Terrain model", detail: "Surface, contours, breaklines, spot levels and section preparation", status: "VERIFIED" },
      { label: "CAD register", detail: "Layers, files, units, coordinate reference and intended use", status: "ISSUED" },
    ],
    metaDescription:
      "Topographic surveying and accurate CAD models for site planning, corridors, terrain and engineering design by TAGS.",
  },
];

export function getCapability(slug: string) {
  return capabilities.find((capability) => capability.slug === slug);
}
