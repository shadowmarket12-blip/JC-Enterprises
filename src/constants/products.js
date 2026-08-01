export function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const CATEGORIES = [
  {
    id: "all",
    label: "All Products",
    icon: "HiSquares2X2",
    // metaTitle: "Buy Electrical & Home Products Online – JC Enterprises",
    // metaDescription:
    //   "Shop switches, wires, MCBs, lighting, fans, water pumps, pipes and more online in Bhubaneswar. Genuine brands, best prices, home delivery – JC Enterprises.",
  },
  {
    id: "switches-accessories",
    label: "Switches & Accessories",
    icon: "HiAdjustmentsHorizontal",
    // metaTitle: "Switches & Accessories Price – Buy Online Bhubaneswar",
    // metaDescription:
    //   "Buy modular switches, sockets and accessories online in Bhubaneswar. Genuine Myrah switches, fire-resistant, ISI certified. Home delivery – JC Enterprises.",
  },
  {
    id: "electrical-wires-cables",
    label: "Electrical Wires & Cables",
    icon: "HiBolt",
    // metaTitle: "Electrical Wires & Cables Price – Buy Online Bhubaneswar",
    // metaDescription:
    //   "Buy FR/FRLS house wires and cables online in Bhubaneswar from Finolex, Havells, KEI, Polycab and RR Kabel. ISI marked, genuine – JC Enterprises.",
  },
  {
    id: "mcbs-protection",
    label: "MCBs & Protection",
    icon: "HiShieldCheck",
    // metaTitle: "MCBs & Protection Devices – Buy Online in Bhubaneswar",
    // metaDescription:
    //   "Buy MCBs, RCCBs and ELCBs online in Bhubaneswar from Havells, KEI and Polycab. ISI certified circuit protection, genuine, home delivery – JC Enterprises.",
  },
  {
    id: "lighting",
    label: "Lighting",
    icon: "HiLightBulb",
    // metaTitle: "LED Lighting & Bulbs Price – Buy Online Bhubaneswar",
    // metaDescription:
    //   "Buy LED bulbs, panels, battens and strip lights online in Bhubaneswar from GreatWhite. Energy-efficient, BIS certified, home delivery – JC Enterprises.",
  },
  {
    id: "fans",
    label: "Fans",
    icon: "HiArrowPath",
    // metaTitle: "Ceiling, BLDC & Exhaust Fans – Buy Online Bhubaneswar",
    // metaDescription:
    //   "Buy Atomberg BLDC ceiling, designer, pedestal, wall and exhaust fans online in Bhubaneswar. Genuine, energy-efficient, home delivery – JC Enterprises.",
  },
  {
    id: "water-pumps-heaters",
    label: "Water Pumps & Heaters",
    icon: "HiFire",
    // metaTitle: "Water Pumps & Heaters Price – Buy Online Bhubaneswar",
    // metaDescription:
    //   "Buy water pumps, motors and water heaters online in Bhubaneswar. Reliable brands, genuine products, home delivery across Odisha – JC Enterprises.",
  },
  {
    id: "pipes-fittings",
    label: "Pipes and Fittings",
    icon: "HiCube",
    // metaTitle: "Pipes & Fittings Price – Buy Online in Bhubaneswar",
    // metaDescription:
    //   "Buy PVC, CPVC and UPVC pipes and fittings online in Bhubaneswar. Durable, pressure-rated, genuine products with home delivery – JC Enterprises.",
  },
  {
    id: "industrial-electrical-products",
    label: "Industrial Electrical Products",
    icon: "HiBuildingOffice2",
    // metaTitle: "Industrial Electrical Products – Buy Online Bhubaneswar",
    // metaDescription:
    //   "Buy industrial electrical products online in Bhubaneswar — panels, drives and control gear. Genuine, reliable, home delivery – JC Enterprises.",
  },
  {
    id: "electrical-tools-accessories",
    label: "Electrical Tools & Accessories",
    icon: "HiWrenchScrewdriver",
    // metaTitle: "Electrical Tools & Accessories – Buy Online Bhubaneswar",
    // metaDescription:
    //   "Buy electrical tools, drills and accessories online in Bhubaneswar. Genuine branded tools for professionals and homes, home delivery – JC Enterprises.",
  },
  {
    id: "earthing-materials",
    label: "Earthing Materials",
    icon: "HiGlobeAlt",
    // metaTitle: "Earthing Materials Price – Buy Online in Bhubaneswar",
    // metaDescription:
    //   "Buy earthing rods, strips and accessories online in Bhubaneswar. Corrosion-resistant, standard-compliant earthing materials – JC Enterprises.",
  },
  {
    id: "home-appliance",
    label: "Home Appliance",
    icon: "HiHome",
    // metaTitle: "Home Appliances Price – Buy Online in Bhubaneswar",
    // metaDescription:
    //   "Buy home appliances online in Bhubaneswar. Genuine products, energy-efficient, best prices with home delivery across Odisha – JC Enterprises.",
  },
  {
    id: "aquagard",
    label: "Aquagard",
    icon: "HiBeaker",
    // metaTitle: "Aquaguard Water Purifiers – Buy Online Bhubaneswar",
    // metaDescription:
    //   "Buy genuine Aquaguard RO and UV water purifiers online in Bhubaneswar. Safe drinking water solutions with home delivery – JC Enterprises.",
  },
];

export const CATEGORY_SPECS = {
  fans: [
    "Sweep Size (mm)",
    "Power Consumption (Watts)",
    "Air Delivery (CMM)",
    "RPM",
    "Number of Blades",
    "Voltage",
    "Frequency",
    "Motor Type",
    "Warranty",
    "Color",
  ],
  "switches-accessories": [
    "Current Rating (A)",
    "Voltage (V)",
    "Number of Modules",
    "Material",
    "Finish",
    "Indicator",
    "Fire Resistant",
    "ISI Certified",
    "Warranty",
  ],
  "electrical-wires-cables": [
    "Size (Sq mm)",
    "Length",
    "Conductor Material",
    "Insulation Type",
    "Voltage Grade",
    "FR / FRLS / HRFR",
    "Number of Cores",
    "Color",
    "ISI Mark",
    "Application",
  ],
  lighting: [
    "Wattage",
    "Voltage",
    "Lumens",
    "Color Temperature (K)",
    "Beam Angle",
    "CRI",
    "IP Rating",
    "Lifespan",
    "Driver Type",
    "Warranty",
  ],
  "mcbs-protection": [
    "Current Rating",
    "Pole",
    "Breaking Capacity",
    "Curve Type",
    "Voltage",
    "Frequency",
    "Mounting Type",
    "ISI Certified",
  ],
  "water-pumps-heaters": [
    "HP",
    "Head",
    "Flow Rate",
    "Voltage",
    "Power",
    "Pipe Size",
    "Motor Type",
    "Warranty",
  ],
  "pipes-fittings": [
    "Material",
    "Size",
    "Pressure Rating",
    "Length",
    "Thickness",
    "Color",
    "Application",
  ],
  "home-appliance": [
    "Power",
    "Voltage",
    "Capacity",
    "Dimensions",
    "Weight",
    "Warranty",
    "Energy Rating",
  ],
  "industrial-electrical-products": [
    "Model",
    "Input Voltage",
    "Output Voltage",
    "Current",
    "Phase",
    "Frequency",
    "Mounting",
    "IP Rating",
  ],
  "electrical-tools-accessories": [
    "Power",
    "Battery",
    "Speed",
    "Torque",
    "Weight",
    "Warranty",
  ],
  "earthing-materials": [
    "Material",
    "Length",
    "Diameter",
    "Coating",
    "Resistance",
    "Standard",
  ],
  aquagard: [
    "Capacity",
    "Purification Technology",
    "Storage",
    "Power",
    "Filter Type",
    "Recovery Rate",
    "Warranty",
  ],
};

const RAW_PRODUCTS = [
  // ============================================================
  // Switches & Accessories
  // ============================================================
  {
    id: 1,
    name: "arcus-switches",
    category: "Switches & Accessories",
    categoryId: "switches-accessories",
    brand: "Myrah",
    tag: "Best Seller",
    price: 249,
    originalPrice: 329,
    discount: 24,
    stock: 140,
    rating: 4.8,
    reviews: 2345,
    image: "/myrahswitches/arcus-switches.webp",
    badge: "Best Seller",
    colors: [
      {
        name: "White",
        hex: "#f5f5f4",
        images: [
          "/myrahswitches/arcus-switches.webp",
          "/myrahswitches/arcus-switches.webp",
        ],
        stock: 140,
      },
      {
        name: "Ivory",
        hex: "#f0e6d2",
        images: [
          "/myrahswitches/arcus-switches.webp",
          "/myrahswitches/arcus-switches.webp",
        ],
        price: 269,
        originalPrice: 349,
        stock: 6,
      },
      {
        name: "Black",
        hex: "#1c1c1c",
        images: [
          "/myrahswitches/arcus-switches.webp",
          "/myrahswitches/arcus-switches.webp",
        ],
        price: 279,
        originalPrice: 359,
        stock: 2,
        specifications: {
          Finish: "Matte Black",
        },
      },
    ],
    description:
      "Premium quality modular switch with LED indicator, designed for durability and safety in modern homes.",
    features: [
      "20A current rating",
      "LED indicator light",
      "Fire-resistant polycarbonate body",
      "Easy snap-fit installation",
      "5-year warranty",
    ],
    specifications: {
      "Current Rating (A)": "20A",
      "Voltage (V)": "240V",
      "Number of Modules": "1 Module",
      Material: "Polycarbonate",
      Finish: "Matte",
      Indicator: "LED Indicator",
      "Fire Resistant": "Yes",
      "ISI Certified": "Yes",
      Warranty: "5 Years",
    },
  },
  {
    id: 2,
    name: "Domia switches",
    category: "Switches & Accessories",
    categoryId: "switches-accessories",
    brand: "Myrah",
    tag: "Featured",
    price: 89,
    originalPrice: 119,
    discount: 25,
    stock: 320,
    rating: 4.7,
    reviews: 1432,
    image: "/myrahswitches/Domia switches.webp",
    badge: "Featured",
    colors: [
      {
        name: "White",
        hex: "#f5f5f4",
        images: ["/myrahswitches/Domia switches.webp"],
      },
      {
        name: "Ivory",
        hex: "#f0e6d2",
        images: ["/myrahswitches/Domia switches.webp"],
      },
    ],
    description:
      "Sleek one-way switch with a soft-touch rocker action, built to the highest French design standards.",
    features: [
      "6A current rating",
      "Soft-touch rocker action",
      "Anti-bacterial finish",
      "Concealed screw design",
      "10-year warranty",
    ],
    specifications: {
      "Current Rating (A)": "6A",
      "Voltage (V)": "240V",
      "Number of Modules": "1 Module",
      Material: "Polycarbonate",
      Finish: "Soft-touch Rocker",
      Indicator: "No",
      "Fire Resistant": "Yes",
      "ISI Certified": "Yes",
      Warranty: "10 Years",
    },
  },
  {
    id: 3,
    name: "fiana switches",
    category: "Switches & Accessories",
    categoryId: "switches-accessories",
    brand: "Myrah",
    tag: "Featured",
    price: 89,
    originalPrice: 119,
    discount: 25,
    stock: 320,
    rating: 4.7,
    reviews: 1432,
    image: "/myrahswitches/fiana switches.webp",
    badge: "Featured",
    colors: [
      {
        name: "White",
        hex: "#f5f5f4",
        images: ["/myrahswitches/fiana switches.webp"],
      },
      {
        name: "Ivory",
        hex: "#f0e6d2",
        images: ["/myrahswitches/fiana switches.webp"],
      },
    ],
    description:
      "Sleek one-way switch with a soft-touch rocker action, built to the highest French design standards.",
    features: [
      "6A current rating",
      "Soft-touch rocker action",
      "Anti-bacterial finish",
      "Concealed screw design",
      "10-year warranty",
    ],
    specifications: {
      "Current Rating (A)": "6A",
      "Voltage (V)": "240V",
      "Number of Modules": "1 Module",
      Material: "Polycarbonate",
      Finish: "Soft-touch Rocker",
      Indicator: "No",
      "Fire Resistant": "Yes",
      "ISI Certified": "Yes",
      Warranty: "10 Years",
    },
  },
  {
    id: 4,
    name: "myrah-brilliant-shine switches",
    category: "Switches & Accessories",
    categoryId: "switches-accessories",
    brand: "Myrah",
    tag: "Featured",
    price: 89,
    originalPrice: 119,
    discount: 25,
    stock: 320,
    rating: 4.7,
    reviews: 1432,
    image: "/myrahswitches/myrah-brilliant-shine switches.webp",
    badge: "Featured",
    colors: [
      {
        name: "White",
        hex: "#f5f5f4",
        images: ["/myrahswitches/myrah-brilliant-shine switches.webp"],
      },
      {
        name: "Ivory",
        hex: "#f0e6d2",
        images: ["/myrahswitches/myrah-brilliant-shine switches.webp"],
      },
    ],
    description:
      "Sleek one-way switch with a soft-touch rocker action, built to the highest French design standards.",
    features: [
      "6A current rating",
      "Soft-touch rocker action",
      "Anti-bacterial finish",
      "Concealed screw design",
      "10-year warranty",
    ],
    specifications: {
      "Current Rating (A)": "6A",
      "Voltage (V)": "240V",
      "Number of Modules": "1 Module",
      Material: "Polycarbonate",
      Finish: "Soft-touch Rocker",
      Indicator: "No",
      "Fire Resistant": "Yes",
      "ISI Certified": "Yes",
      Warranty: "10 Years",
    },
  },
  {
    id: 5,
    name: "petra extension board",
    category: "Switches & Accessories",
    categoryId: "switches-accessories",
    brand: "Myrah",
    tag: "Featured",
    price: 89,
    originalPrice: 119,
    discount: 25,
    stock: 320,
    rating: 4.7,
    reviews: 1432,
    image: "/myrahswitches/petra extension board.webp",
    badge: "Featured",
    colors: [
      {
        name: "White",
        hex: "#f5f5f4",
        images: ["/myrahswitches/petra extension board.webp"],
      },
      {
        name: "Ivory",
        hex: "#f0e6d2",
        images: ["/myrahswitches/petra extension board.webp"],
      },
    ],
    description:
      "Sleek one-way switch with a soft-touch rocker action, built to the highest French design standards.",
    features: [
      "6A current rating",
      "Soft-touch rocker action",
      "Anti-bacterial finish",
      "Concealed screw design",
      "10-year warranty",
    ],
    specifications: {
      "Current Rating (A)": "16A",
      "Voltage (V)": "240V",
      "Number of Modules": "6 Modules",
      Material: "Polycarbonate",
      Finish: "Matte",
      Indicator: "No",
      "Fire Resistant": "Yes",
      "ISI Certified": "Yes",
      Warranty: "1 Year",
    },
  },
  {
    id: 6,
    name: "trivo switches",
    category: "Switches & Accessories",
    categoryId: "switches-accessories",
    brand: "Myrah",
    tag: "Featured",
    price: 89,
    originalPrice: 119,
    discount: 25,
    stock: 320,
    rating: 4.7,
    reviews: 1432,
    image: "/myrahswitches/trivo switches.webp",
    badge: "Featured",
    colors: [
      {
        name: "White",
        hex: "#f5f5f4",
        images: ["/myrahswitches/trivo switches.webp"],
      },
      {
        name: "Ivory",
        hex: "#f0e6d2",
        images: ["/myrahswitches/trivo switches.webp"],
      },
    ],
    description:
      "Sleek one-way switch with a soft-touch rocker action, built to the highest French design standards.",
    features: [
      "6A current rating",
      "Soft-touch rocker action",
      "Anti-bacterial finish",
      "Concealed screw design",
      "10-year warranty",
    ],
    specifications: {
      "Current Rating (A)": "6A",
      "Voltage (V)": "240V",
      "Number of Modules": "1 Module",
      Material: "Polycarbonate",
      Finish: "Soft-touch Rocker",
      Indicator: "No",
      "Fire Resistant": "Yes",
      "ISI Certified": "Yes",
      Warranty: "10 Years",
    },
  },

  // ============================================================
  // Electrical Wires & Cables
  // ============================================================
  {
    id: 7,
    name: "Finolex FR — 1.5 Sq mm PVC Insulated Copper Wire (90m)",
    category: "Electrical Wires & Cables",
    categoryId: "electrical-wires-cables",
    brand: "Finolex",
    tag: "New Arrival",
    price: 1899,
    originalPrice: 2399,
    discount: 21,
    stock: 54,
    rating: 4.9,
    reviews: 1823,
    image:
      "/wiresandcables/Finolex FR — 1.5 Sq mm PVC Insulated Copper Wire (90m).webp",
    badge: "New",
    colors: [
      {
        name: "Red",
        hex: "#c0392b",
        images: [
          "/wiresandcables/Finolex FR — 1.5 Sq mm PVC Insulated Copper Wire (90m).webp",
        ],
      },
      {
        name: "Blue",
        hex: "#2c5f8a",
        images: [
          "/wiresandcables/Finolex FR — 1.5 Sq mm PVC Insulated Copper Wire (90m).webp",
        ],
      },
      {
        name: "Black",
        hex: "#1c1c1c",
        images: [
          "/wiresandcables/Finolex FR — 1.5 Sq mm PVC Insulated Copper Wire (90m).webp",
        ],
      },
    ],
    description:
      "Flame retardant house wire ideal for residential and commercial wiring, ensuring maximum safety.",
    features: [
      "1.5 sq mm thickness",
      "90 meters length",
      "Flame retardant (FR) grade",
      "High conductivity copper",
      "ISI marked",
    ],
    specifications: {
      "Size (Sq mm)": "1.5 Sq mm",
      Length: "90 Meters",
      "Conductor Material": "Copper",
      "Insulation Type": "PVC",
      "Voltage Grade": "1100V",
      "FR / FRLS / HRFR": "FR",
      "Number of Cores": "Single Core",
      Color: "Red / Blue / Black",
      "ISI Mark": "Yes",
      Application: "Residential & Commercial Wiring",
    },
  },
  {
    id: 8,
    name: "Havells Life Line Plus S3 — 1.5 Sq mm PVC HRFR Wire (90m)",
    category: "Electrical Wires & Cables",
    categoryId: "electrical-wires-cables",
    brand: "Havells",
    tag: "Best Seller",
    price: 2799,
    originalPrice: 3499,
    discount: 20,
    stock: 38,
    rating: 4.6,
    reviews: 1567,
    image:
      "/wiresandcables/Havells Life Line Plus S3 — 1.5 Sq mm PVC HRFR Wire (90m).webp",
    badge: "Best Seller",
    colors: [
      {
        name: "Red",
        hex: "#c0392b",
        images: [
          "/wiresandcables/Havells Life Line Plus S3 — 1.5 Sq mm PVC HRFR Wire (90m).webp",
        ],
      },
      {
        name: "Black",
        hex: "#1c1c1c",
        images: [
          "/wiresandcables/Havells Life Line Plus S3 — 1.5 Sq mm PVC HRFR Wire (90m).webp",
        ],
      },
    ],
    description:
      "Multistrand FR-LSH cable with silicon-treated insulation for higher fire and heat resistance.",
    features: [
      "2.5 sq mm thickness",
      "90 meters length",
      "Silicon FR-LSH insulation",
      "High flexibility multistrand copper",
      "ISI marked",
    ],
    specifications: {
      "Size (Sq mm)": "1.5 Sq mm",
      Length: "90 Meters",
      "Conductor Material": "Multistrand Copper",
      "Insulation Type": "Silicon FR-LSH PVC",
      "Voltage Grade": "1100V",
      "FR / FRLS / HRFR": "HRFR",
      "Number of Cores": "Single Core",
      Color: "Red / Black",
      "ISI Mark": "Yes",
      Application: "Residential & Commercial Wiring",
    },
  },
  {
    id: 9,
    name: "KEI Homecab FR — 1 Sq mm PVC Insulated Copper Wire (90m)",
    category: "Electrical Wires & Cables",
    categoryId: "electrical-wires-cables",
    brand: "KEI",
    tag: "Best Seller",
    price: 2799,
    originalPrice: 3499,
    discount: 20,
    stock: 38,
    rating: 4.6,
    reviews: 1567,
    image:
      "/wiresandcables/KEI Homecab FR — 1 Sq mm PVC Insulated Copper Wire (90m).webp",
    badge: "Best Seller",
    colors: [
      {
        name: "Red",
        hex: "#c0392b",
        images: [
          "/wiresandcables/KEI Homecab FR — 1 Sq mm PVC Insulated Copper Wire (90m).webp",
        ],
      },
      {
        name: "Black",
        hex: "#1c1c1c",
        images: [
          "/wiresandcables/KEI Homecab FR — 1 Sq mm PVC Insulated Copper Wire (90m).webp",
        ],
      },
    ],
    description:
      "Multistrand FR-LSH cable with silicon-treated insulation for higher fire and heat resistance.",
    features: [
      "2.5 sq mm thickness",
      "90 meters length",
      "Silicon FR-LSH insulation",
      "High flexibility multistrand copper",
      "ISI marked",
    ],
    specifications: {
      "Size (Sq mm)": "1 Sq mm",
      Length: "90 Meters",
      "Conductor Material": "Multistrand Copper",
      "Insulation Type": "FR-LSH PVC",
      "Voltage Grade": "1100V",
      "FR / FRLS / HRFR": "FR",
      "Number of Cores": "Single Core",
      Color: "Red / Black",
      "ISI Mark": "Yes",
      Application: "Residential & Commercial Wiring",
    },
  },
  {
    id: 10,
    name: "Polycab FR-LF — 1 Sq mm PVC Insulated Copper Wire (90m)",
    category: "Electrical Wires & Cables",
    categoryId: "electrical-wires-cables",
    brand: "Polycab",
    tag: "Best Seller",
    price: 2799,
    originalPrice: 3499,
    discount: 20,
    stock: 38,
    rating: 4.6,
    reviews: 1567,
    image:
      "/wiresandcables/Polycab FR-LF — 1 Sq mm PVC Insulated Copper Wire (90m).webp",
    badge: "Best Seller",
    colors: [
      {
        name: "Red",
        hex: "#c0392b",
        images: [
          "/wiresandcables/Polycab FR-LF — 1 Sq mm PVC Insulated Copper Wire (90m).webp",
        ],
      },
      {
        name: "Black",
        hex: "#1c1c1c",
        images: [
          "/wiresandcables/Polycab FR-LF — 1 Sq mm PVC Insulated Copper Wire (90m).webp",
        ],
      },
    ],
    description:
      "Multistrand FR-LSH cable with silicon-treated insulation for higher fire and heat resistance.",
    features: [
      "2.5 sq mm thickness",
      "90 meters length",
      "Silicon FR-LSH insulation",
      "High flexibility multistrand copper",
      "ISI marked",
    ],
    specifications: {
      "Size (Sq mm)": "1 Sq mm",
      Length: "90 Meters",
      "Conductor Material": "Multistrand Copper",
      "Insulation Type": "FR-LSH PVC",
      "Voltage Grade": "1100V",
      "FR / FRLS / HRFR": "FR-LF",
      "Number of Cores": "Single Core",
      Color: "Red / Black",
      "ISI Mark": "Yes",
      Application: "Residential & Commercial Wiring",
    },
  },
  {
    id: 11,
    name: "RR Kabel Superex FR — 1 Sq mm PVC Insulated Copper Wire (90m)",
    category: "Electrical Wires & Cables",
    categoryId: "electrical-wires-cables",
    brand: "RR Kabel",
    tag: "Best Seller",
    price: 2799,
    originalPrice: 3499,
    discount: 20,
    stock: 38,
    rating: 4.6,
    reviews: 1567,
    image:
      "/wiresandcables/RR Kabel Superex FR — 1 Sq mm PVC Insulated Copper Wire (90m).webp",
    badge: "Best Seller",
    colors: [
      {
        name: "Red",
        hex: "#c0392b",
        images: [
          "/wiresandcables/RR Kabel Superex FR — 1 Sq mm PVC Insulated Copper Wire (90m).webp",
        ],
      },
      {
        name: "Black",
        hex: "#1c1c1c",
        images: [
          "/wiresandcables/RR Kabel Superex FR — 1 Sq mm PVC Insulated Copper Wire (90m).webp",
        ],
      },
    ],
    description:
      "Multistrand FR-LSH cable with silicon-treated insulation for higher fire and heat resistance.",
    features: [
      "2.5 sq mm thickness",
      "90 meters length",
      "Silicon FR-LSH insulation",
      "High flexibility multistrand copper",
      "ISI marked",
    ],
    specifications: {
      "Size (Sq mm)": "1 Sq mm",
      Length: "90 Meters",
      "Conductor Material": "Multistrand Copper",
      "Insulation Type": "FR-LSH PVC",
      "Voltage Grade": "1100V",
      "FR / FRLS / HRFR": "FR",
      "Number of Cores": "Single Core",
      Color: "Red / Black",
      "ISI Mark": "Yes",
      Application: "Residential & Commercial Wiring",
    },
  },

  // ============================================================
  // MCBs & Protection
  // ============================================================
  {
    id: 12,
    name: "Havells 32A Double Pole MCB",
    category: "MCBs & Protection",
    categoryId: "mcbs-protection",
    brand: "Havells",
    tag: "Popular",
    price: 349,
    originalPrice: 449,
    discount: 22,
    stock: 210,
    rating: 4.7,
    reviews: 892,
    image: "/images/productimages/p3.jpg",
    badge: "Popular",
    description:
      "Double pole miniature circuit breaker providing reliable overload and short circuit protection.",
    features: [
      "32A current rating",
      "Double pole (DP)",
      "C curve tripping",
      "10kA breaking capacity",
      "DIN rail mounting",
    ],
    specifications: {
      "Current Rating": "32A",
      Pole: "Double Pole (DP)",
      "Breaking Capacity": "10kA",
      "Curve Type": "C Curve",
      Voltage: "240V / 415V",
      Frequency: "50Hz",
      "Mounting Type": "DIN Rail",
      "ISI Certified": "Yes",
    },
  },
  {
    id: 13,
    name: "KEI 40A 4-Pole RCCB/ELCB",
    category: "MCBs & Protection",
    categoryId: "mcbs-protection",
    brand: "KEI",
    tag: "Featured",
    price: 1299,
    originalPrice: 1699,
    discount: 24,
    stock: 65,
    rating: 4.8,
    reviews: 532,
    image: "/images/productimages/p4.webp",
    badge: "Featured",
    description:
      "Residual current circuit breaker providing earth leakage protection for entire electrical circuits.",
    features: [
      "40A rated current",
      "30mA sensitivity",
      "4-pole configuration",
      "Fast tripping mechanism",
      "ISI marked",
    ],
    specifications: {
      "Current Rating": "40A",
      Pole: "4 Pole",
      "Breaking Capacity": "10kA",
      "Curve Type": "N/A (RCCB)",
      Voltage: "415V",
      Frequency: "50Hz",
      "Mounting Type": "DIN Rail",
      "ISI Certified": "Yes",
    },
  },
  {
    id: 14,
    name: "Polycab 32A DP MCB",
    category: "MCBs & Protection",
    categoryId: "mcbs-protection",
    brand: "Polycab",
    tag: "Featured",
    price: 1299,
    originalPrice: 1699,
    discount: 24,
    stock: 65,
    rating: 4.8,
    reviews: 532,
    image: "/images/productimages/p4.webp",
    badge: "Featured",
    description:
      "Residual current circuit breaker providing earth leakage protection for entire electrical circuits.",
    features: [
      "40A rated current",
      "30mA sensitivity",
      "4-pole configuration",
      "Fast tripping mechanism",
      "ISI marked",
    ],
    specifications: {
      "Current Rating": "32A",
      Pole: "Double Pole (DP)",
      "Breaking Capacity": "10kA",
      "Curve Type": "C Curve",
      Voltage: "240V / 415V",
      Frequency: "50Hz",
      "Mounting Type": "DIN Rail",
      "ISI Certified": "Yes",
    },
  },

  // ============================================================
  // Lighting
  // ============================================================
  {
    id: 15,
    name: "SHOCKINGLY BRIGHT A TYPE BULB - 120LPW",
    category: "Lighting",
    categoryId: "lighting",
    brand: "GreatWhite",
    tag: "Best Seller",
    price: 320,
    originalPrice: 326,
    discount: 29,
    stock: 480,
    rating: 4.7,
    reviews: 4521,
    image: "/luma_pro_light/SHOCKINGLY BRIGHT A TYPE BULB - 120LPW.webp",
    badge: "Best Seller",
    colors: [
      {
        name: "Cool Daylight",
        hex: "#eef3ff",
        images: ["/luma_pro_light/SHOCKINGLY BRIGHT A TYPE BULB - 120LPW.webp"],
      },
    ],
    description:
      "Energy-saving LED bulb twin pack with cool daylight color, perfect for home and office lighting.",
    features: [
      "120LPW power consumption",
      "6500K cool daylight",
      "1200 lumens brightness",
      "25,000 hours lifespan",
      "BIS certified",
    ],
    specifications: {
      Wattage: "10W",
      Voltage: "140-300V",
      Lumens: "1200 lm",
      "Color Temperature (K)": "6500K",
      "Beam Angle": "360°",
      CRI: ">80",
      "IP Rating": "IP20",
      Lifespan: "25,000 Hours",
      "Driver Type": "Inbuilt Driver",
      Warranty: "2 Years",
    },
  },
  {
    id: 16,
    name: "SHOCKINGLY BRIGHT BATTEN - 120LPW",
    category: "Lighting",
    categoryId: "lighting",
    brand: "GreatWhite",
    tag: "New Arrival",
    price: 350,
    originalPrice: 354,
    discount: 27,
    stock: 96,
    rating: 4.6,
    reviews: 1876,
    image: "/luma_pro_light/SHOCKINGLY BRIGHT BATTEN - 120LPW.webp",
    badge: "New",
    colors: [
      {
        name: "Cool White",
        hex: "#eef3ff",
        images: ["/luma_pro_light/SHOCKINGLY BRIGHT BATTEN - 120LPW.webp"],
      },
    ],
    description:
      "Sleek round LED panel light delivering uniform illumination, perfect for modern false ceilings.",
    features: [
      "120LPW power consumption",
      "6500K cool white light",
      "1800 lumens brightness",
      "Surface/recess mounting",
    ],
    specifications: {
      Wattage: "20W",
      Voltage: "140-300V",
      Lumens: "1800 lm",
      "Color Temperature (K)": "6500K",
      "Beam Angle": "120°",
      CRI: ">80",
      "IP Rating": "IP20",
      Lifespan: "25,000 Hours",
      "Driver Type": "Inbuilt Driver",
      Warranty: "2 Years",
    },
  },
  {
    id: 17,
    name: "SHOCKINGLY BRIGHT PANEL - 120LMW (WITH CUTOUT ADJUSTMENT)",
    category: "Lighting",
    categoryId: "lighting",
    brand: "GreatWhite",
    tag: "New Arrival",
    price: 850,
    originalPrice: 870,
    discount: 27,
    stock: 96,
    rating: 4.6,
    reviews: 1876,
    image:
      "/luma_pro_light/SHOCKINGLY BRIGHT PANEL - 120LMW (WITH CUTOUT ADJUSTMENT)_1.webp",
    badge: "New",
    colors: [
      {
        name: "Cool White",
        hex: "#eef3ff",
        images: [
          "/luma_pro_light/SHOCKINGLY BRIGHT PANEL - 120LMW (WITH CUTOUT ADJUSTMENT)_1.webp",
        ],
      },
    ],
    description:
      "Sleek round LED panel light delivering uniform illumination, perfect for modern false ceilings.",
    features: [
      "120LPW power consumption",
      "6500K cool white light",
      "1800 lumens brightness",
      "Surface/recess mounting",
    ],
    specifications: {
      Wattage: "18W",
      Voltage: "140-300V",
      Lumens: "1800 lm",
      "Color Temperature (K)": "6500K",
      "Beam Angle": "120°",
      CRI: ">80",
      "IP Rating": "IP20",
      Lifespan: "25,000 Hours",
      "Driver Type": "Inbuilt Driver",
      Warranty: "2 Years",
    },
  },
  {
    id: 18,
    name: "SHOCKINGLY BRIGHT PANEL - 120LMW (WITH CUTOUT ADJUSTMENT)_2",
    category: "Lighting",
    categoryId: "lighting",
    brand: "GreatWhite",
    tag: "New Arrival",
    price: 1000,
    originalPrice: 1101,
    discount: 27,
    stock: 96,
    rating: 4.6,
    reviews: 1876,
    image:
      "/luma_pro_light/SHOCKINGLY BRIGHT PANEL - 120LMW (WITH CUTOUT ADJUSTMENT)_2.webp",
    badge: "New",
    colors: [
      {
        name: "Cool White",
        hex: "#eef3ff",
        images: [
          "/luma_pro_light/SHOCKINGLY BRIGHT PANEL - 120LMW (WITH CUTOUT ADJUSTMENT)_2.webp",
        ],
      },
    ],
    description:
      "Sleek round LED panel light delivering uniform illumination, perfect for modern false ceilings.",
    features: [
      "120LPW power consumption",
      "6500K cool white light",
      "1800 lumens brightness",
      "Surface/recess mounting",
    ],
    specifications: {
      Wattage: "22W",
      Voltage: "140-300V",
      Lumens: "2200 lm",
      "Color Temperature (K)": "6500K",
      "Beam Angle": "120°",
      CRI: ">80",
      "IP Rating": "IP20",
      Lifespan: "25,000 Hours",
      "Driver Type": "Inbuilt Driver",
      Warranty: "2 Years",
    },
  },
  {
    id: 19,
    name: "SHOCKINGLY BRIGHT T TYPE BULB - 120LPW",
    category: "Lighting",
    categoryId: "lighting",
    brand: "GreatWhite",
    tag: "New Arrival",
    price: 350,
    originalPrice: 370,
    discount: 27,
    stock: 96,
    rating: 4.6,
    reviews: 1876,
    image: "/luma_pro_light/SHOCKINGLY BRIGHT T TYPE BULB - 120LPW.webp",
    badge: "New",
    colors: [
      {
        name: "Cool White",
        hex: "#eef3ff",
        images: ["/luma_pro_light/SHOCKINGLY BRIGHT T TYPE BULB - 120LPW.webp"],
      },
    ],
    description:
      "Sleek round LED panel light delivering uniform illumination, perfect for modern false ceilings.",
    features: [
      "120LPW power consumption",
      "6500K cool white light",
      "1800 lumens brightness",
      "Surface/recess mounting",
    ],
    specifications: {
      Wattage: "12W",
      Voltage: "140-300V",
      Lumens: "1400 lm",
      "Color Temperature (K)": "6500K",
      "Beam Angle": "200°",
      CRI: ">80",
      "IP Rating": "IP20",
      Lifespan: "25,000 Hours",
      "Driver Type": "Inbuilt Driver",
      Warranty: "2 Years",
    },
  },
  {
    id: 20,
    name: "SLIM PANEL (THERMO PLASTIC) - EDGE LIT (INBUILT DRIVER) ROUND",
    category: "Lighting",
    categoryId: "lighting",
    brand: "GreatWhite",
    tag: "New Arrival",
    price: 600,
    originalPrice: 650,
    discount: 27,
    stock: 96,
    rating: 4.6,
    reviews: 1876,
    image:
      "/luma_pro_light/SLIM PANEL (THERMO PLASTIC) - EDGE LIT (INBUILT DRIVER) ROUND.webp",
    badge: "New",
    colors: [
      {
        name: "Cool White",
        hex: "#eef3ff",
        images: [
          "/luma_pro_light/SLIM PANEL (THERMO PLASTIC) - EDGE LIT (INBUILT DRIVER) ROUND.webp",
        ],
      },
    ],
    description:
      "Sleek round LED panel light delivering uniform illumination, perfect for modern false ceilings.",
    features: [
      "120LPW power consumption",
      "6500K cool white light",
      "1800 lumens brightness",
      "Surface/recess mounting",
    ],
    specifications: {
      Wattage: "15W",
      Voltage: "140-300V",
      Lumens: "1650 lm",
      "Color Temperature (K)": "6500K",
      "Beam Angle": "120°",
      CRI: ">80",
      "IP Rating": "IP20",
      Lifespan: "25,000 Hours",
      "Driver Type": "Inbuilt Driver (Edge Lit)",
      Warranty: "2 Years",
    },
  },
  {
    id: 21,
    name: "STRIP LIGHT 12VDC - 120 & 240 LEDMTR. (5 MTRROLL)",
    category: "Lighting",
    categoryId: "lighting",
    brand: "GreatWhite",
    tag: "New Arrival",
    price: 850,
    originalPrice: 870,
    discount: 27,
    stock: 96,
    rating: 4.6,
    reviews: 1876,
    image:
      "/luma_pro_light/STRIP LIGHT 12VDC - 120 & 240 LEDMTR. (5 MTRROLL).webp",
    badge: "New",
    colors: [
      {
        name: "Cool White",
        hex: "#eef3ff",
        images: [
          "/luma_pro_light/STRIP LIGHT 12VDC - 120 & 240 LEDMTR. (5 MTRROLL).webp",
        ],
      },
    ],
    description:
      "Sleek round LED panel light delivering uniform illumination, perfect for modern false ceilings.",
    features: [
      "120LPW power consumption",
      "6500K cool white light",
      "1800 lumens brightness",
      "Surface/recess mounting",
    ],
    specifications: {
      Wattage: "9.6W/m",
      Voltage: "12V DC",
      Lumens: "120-240 lm/m",
      "Color Temperature (K)": "6500K / 3000K",
      "Beam Angle": "120°",
      CRI: ">80",
      "IP Rating": "IP65",
      Lifespan: "20,000 Hours",
      "Driver Type": "External Driver Required",
      Warranty: "1 Year",
    },
  },
  {
    id: 22,
    name: "NIGHT LAMP",
    category: "Lighting",
    categoryId: "lighting",
    brand: "GreatWhite",
    tag: "New Arrival",
    price: 65,
    originalPrice: 70,
    discount: 27,
    stock: 96,
    rating: 4.6,
    reviews: 1876,
    image: "/luma_pro_light/NIGHT LAMP.webp",
    badge: "New",
    colors: [
      {
        name: "Cool White",
        hex: "#eef3ff",
        images: ["/luma_pro_light/NIGHT LAMP.webp"],
      },
    ],
    description:
      "Sleek round LED panel light delivering uniform illumination, perfect for modern false ceilings.",
    features: [
      "120LPW power consumption",
      "6500K cool white light",
      "1800 lumens brightness",
      "Surface/recess mounting",
    ],
  },
  {
    id: 23,
    name: "ROPE LIGHT - IP65 (50 MTRROLL)",
    category: "Lighting",
    categoryId: "lighting",
    brand: "GreatWhite",
    tag: "New Arrival",
    price: 65,
    originalPrice: 70,
    discount: 27,
    stock: 96,
    rating: 4.6,
    reviews: 1876,
    image: "/luma_pro_light/ROPE LIGHT - IP65 (50 MTRROLL).webp",
    badge: "New",
    colors: [
      {
        name: "Cool White",
        hex: "#eef3ff",
        images: ["/luma_pro_light/ROPE LIGHT - IP65 (50 MTRROLL).webp"],
      },
    ],
    description:
      "Sleek round LED panel light delivering uniform illumination, perfect for modern false ceilings.",
    features: [
      "120LPW power consumption",
      "6500K cool white light",
      "1800 lumens brightness",
      "Surface/recess mounting",
    ],
  },
  {
    id: 24,
    name: "RIMLESS SURFACE DOWN LIGHT (THERMO PLASTIC)- (DOB) SQUARE",
    category: "Lighting",
    categoryId: "lighting",
    brand: "GreatWhite",
    tag: "New Arrival",
    price: 550,
    originalPrice: 560,
    discount: 27,
    stock: 96,
    rating: 4.6,
    reviews: 1876,
    image:
      "/luma_pro_light/RIMLESS SURFACE DOWN LIGHT (THERMO PLASTIC)- (DOB) SQUARE.webp",
    badge: "New",
    colors: [
      {
        name: "Cool White",
        hex: "#eef3ff",
        images: [
          "/luma_pro_light/RIMLESS SURFACE DOWN LIGHT (THERMO PLASTIC)- (DOB) SQUARE.webp",
        ],
      },
    ],
    description:
      "Sleek round LED panel light delivering uniform illumination, perfect for modern false ceilings.",
    features: [
      "120LPW power consumption",
      "6500K cool white light",
      "1800 lumens brightness",
      "Surface/recess mounting",
    ],
  },
  {
    id: 25,
    name: "E-NOVA COB DOWN LIGHT EXTERNAL DRIVER",
    category: "Lighting",
    categoryId: "lighting",
    brand: "GreatWhite",
    tag: "New Arrival",
    price: 65,
    originalPrice: 70,
    discount: 27,
    stock: 96,
    rating: 4.6,
    reviews: 1876,
    image: "/luma_pro_light/E-NOVA COB DOWN LIGHT EXTERNAL DRIVER.webp",
    badge: "New",
    colors: [
      {
        name: "Cool White",
        hex: "#eef3ff",
        images: ["/luma_pro_light/E-NOVA COB DOWN LIGHT EXTERNAL DRIVER.webp"],
      },
    ],
    description:
      "Sleek round LED panel light delivering uniform illumination, perfect for modern false ceilings.",
    features: [
      "120LPW power consumption",
      "6500K cool white light",
      "1800 lumens brightness",
      "Surface/recess mounting",
    ],
  },

  // ============================================================
  // Fans
  // ============================================================
  {
    id: 26,
    name: "Emperion Magna",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Popular",
    price: 17999,
    originalPrice: 25999,
    discount: 23,
    stock: 14,
    rating: 4.7,
    reviews: 987,
    image: "/Fan/emperion_magna_1280_plis_amber_lightteak.webp",
    badge: "Popular",
    colors: [
      {
        name: "Amberlight Teak",
        hex: "#6b4426",
        images: [
          "/Fan/emperion_magna_1280_plis_amber_lightteak.webp",
          "/Fan/emperion_magna_1280_plis_amber_lightteak.webp",
        ],
        price: 17999,
        originalPrice: 25999,
        stock: 14,
      },
      {
        name: "Pearl White",
        hex: "#f5f5f4",
        images: [
          "/Fan/emperion_magna_1280_plis_pearl_white.webp",
          "/Fan/emperion_magna_1280_plis_pearl_white.webp",
        ],
        price: 16999,
        originalPrice: 24999,
        stock: 9,
      },
      {
        name: "Lava Grey",
        hex: "#4a4a4a",
        images: [
          "/Fan/emperion_magna_plis_1280_lava_grey-01.webp",
          "/Fan/emperion_magna_plis_1280_lava_grey-01.webp",
        ],
        price: 16999,
        originalPrice: 24999,
        stock: 5,
      },
    ],
    metaTitle: "Atomberg Emperion Magna – Buy Online Bhubaneswar",
    metaDescription:
      "Buy the Atomberg Emperion Magna 1200mm sweep online in Bhubaneswar in Amberlight Teak, Pearl White and more shades. Genuine, home delivery – JC Enterprises.",
    description:
      "Energy-efficient BLDC ceiling fan with remote control, delivering superior air delivery and silent operation.",
    features: [
      "1200mm sweep size",
      "Remote control operation",
      "350 RPM motor speed",
      "Double ball bearing",
      "2-year warranty",
    ],
    specifications: {
      "Sweep Size (mm)": "1200mm",
      "Power Consumption (Watts)": "28W",
      "Air Delivery (CMM)": "230 CMM",
      RPM: "350",
      "Number of Blades": "3",
      Voltage: "220-240V",
      Frequency: "50Hz",
      "Motor Type": "BLDC Motor",
      Warranty: "2 Years",
      Color: "Amberlight Teak / Pearl White / Lava Grey",
    },
  },
  {
    id: 27,
    name: "Emperion Linea",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Featured",
    price: 17999,
    originalPrice: 25999,
    discount: 22,
    stock: 72,
    rating: 4.5,
    reviews: 654,
    image: "/Fan/Emperio_linea_1250_Antique_goldleaf.webp",
    badge: "Featured",
    colors: [
      {
        name: "Antique Goldleaf",
        hex: "#f5f5f4",
        images: [
          "/Fan/Emperio_linea_1250_Antique_goldleaf.webp",
          "/Fan/Emperio_linea_1250_Antique_goldleaf.webp",
        ],
        price: 17999,
        originalPrice: 25999,
        stock: 40,
      },
      {
        name: "Pearl White",
        hex: "#2c5f8a",
        images: [
          "/Fan/Emperio_linea_1250_pearlwhite.webp",
          "/Fan/Emperio_linea_1250_pearlwhite.webp",
        ],
        price: 16999,
        originalPrice: 24999,
        stock: 32,
      },
      {
        name: "Lava Grey",
        hex: "#2c5f8a",
        images: [
          "/Fan/Emperio_linea_1250_lava_grey.webp",
          "/Fan/Emperio_linea_1250_lava_grey.webp",
        ],
        price: 16999,
        originalPrice: 24999,
        stock: 32,
      },
    ],
    metaTitle: "Atomberg Emperion Linea – Buy Online Bhubaneswar",
    metaDescription:
      "Shop the Atomberg Emperion Linea online in Bhubaneswar — 400mm sweep, Antique Goldleaf, Pearl White and more shades. Genuine, home delivery – JC Enterprises.",
    description:
      "Powerful high-speed table fan with a rust-proof body, ideal for home and office use.",
    features: [
      "400mm blade sweep",
      "3-speed control",
      "Rust-proof powder coating",
      "High air thrust motor",
      "2-year warranty",
    ],
    specifications: {
      "Sweep Size (mm)": "400mm",
      "Power Consumption (Watts)": "55W",
      "Air Delivery (CMM)": "60 CMM",
      RPM: "2300",
      "Number of Blades": "3",
      Voltage: "220-240V",
      Frequency: "50Hz",
      "Motor Type": "Induction Motor",
      Warranty: "2 Years",
      Color: "White / Blue",
    },
  },
  {
    id: 28,
    name: "Renesa Elite",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "New Arrival",
    price: 5699,
    originalPrice: 9600,
    discount: 24,
    stock: 58,
    rating: 4.4,
    reviews: 421,
    image: "/Fan/renesa_elite_dark_walnut-1400.webp",
    badge: "New",
    colors: [
      {
        name: "Dark Walnut",
        hex: "#f0e6d2",
        images: [
          "/Fan/renesa_elite_dark_walnut-1400.webp",
          "/Fan/renesa_elite_dark_walnut-1400.webp",
        ],
        price: 5699,
        originalPrice: 9600,
        stock: 30,
      },
      {
        name: "Golden Oakwood ",
        hex: "#5c3a21",
        images: [
          "/Fan/renesa_elite_golden_oakwood-1400.webp",
          "/Fan/renesa_elite_golden_oakwood-1400.webp",
        ],
        price: 5699,
        originalPrice: 9600,
        stock: 18,
      },
      {
        name: "Ritz Blue",
        hex: "#1c1c1c",
        images: [
          "/Fan/renesa_elite_ritz_blue-1400.webp",
          "/Fan/renesa_elite_ritz_blue-1400.webp",
        ],
        price: 5199,
        originalPrice: 8700,
        stock: 10,
        specifications: {
          Warranty: "3 Years",
        },
      },
      {
        name: "Sand Grey",
        hex: "#1c1c1c",
        images: [
          "/Fan/renesa_elite_sand_grey-1400.webp",
          "/Fan/renesa_elite_sand_grey-1400.webp",
        ],
        price: 5199,
        originalPrice: 8700,
        stock: 10,
        specifications: {
          Warranty: "3 Years",
        },
      },
    ],
    metaTitle: "Atomberg Renesa Elite – Buy Online Bhubaneswar",
    metaDescription:
      "The Atomberg Renesa Elite (1200mm sweep) is available online in Bhubaneswar in Dark Walnut, Golden Oakwood and more shades. Genuine, home delivery – JC Enterprises.",
    description:
      "Anti-dust coated ceiling fan with a decorative finish, built for strong air delivery and easy maintenance.",
    features: [
      "1200mm sweep size",
      "Anti-dust powder coating",
      "High air delivery",
      "Double ball bearing",
      "2-year warranty",
    ],
    specifications: {
      "Sweep Size (mm)": "1200mm",
      "Power Consumption (Watts)": "75W",
      "Air Delivery (CMM)": "210 CMM",
      RPM: "380",
      "Number of Blades": "3",
      Voltage: "220-240V",
      Frequency: "50Hz",
      "Motor Type": "Induction Motor",
      Warranty: "2 Years",
      Color: "Ivory / Brown / Black",
    },
  },
  {
    id: 29,
    name: "Aris Illusia ",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "New Arrival",
    price: 9999,
    originalPrice: 16960,
    discount: 24,
    stock: 58,
    rating: 4.4,
    reviews: 421,
    image: "/Fan/arisllusia_1250_glacierblue.webp",
    badge: "New",
    colors: [
      {
        name: "Glacier Blue",
        hex: "#f0e6d2",
        images: [
          "/Fan/arisllusia_1250_glacierblue.webp",
          "/Fan/arisllusia_1250_glacierblue.webp",
        ],
        price: 9999,
        originalPrice: 16960,
        stock: 30,
      },
      {
        name: "Pearl White",
        hex: "#5c3a21",
        images: [
          "/Fan/arisllusia_1250_pearlwhite.webp",
          "/Fan/arisllusia_1250_pearlwhite.webp",
        ],
        price: 5699,
        originalPrice: 9600,
        stock: 18,
      },
      {
        name: "Rose Gold",
        hex: "#1c1c1c",
        images: [
          "/Fan/arisllusia_1250_rosegold.webp",
          "/Fan/arisllusia_1250_rosegold.webp",
        ],
        price: 5199,
        originalPrice: 8700,
        stock: 10,
        specifications: {
          Warranty: "3 Years",
        },
      },
      {
        name: "Sand Grey",
        hex: "#1c1c1c",
        images: [
          "/Fan/renesa_elite_sand_grey-1400.webp",
          "/Fan/renesa_elite_sand_grey-1400.webp",
        ],
        price: 5199,
        originalPrice: 8700,
        stock: 10,
        specifications: {
          Warranty: "3 Years",
        },
      },
    ],
    metaTitle: "Atomberg Aris Illusia – Buy Online Bhubaneswar",
    metaDescription:
      "Order the Atomberg Aris Illusia online in Bhubaneswar: 1200mm sweep in Glacier Blue, Pearl White and more shades. Genuine, home delivery – JC Enterprises.",
    description:
      "Anti-dust coated ceiling fan with a decorative finish, built for strong air delivery and easy maintenance.",
    features: [
      "1200mm sweep size",
      "Anti-dust powder coating",
      "High air delivery",
      "Double ball bearing",
      "2-year warranty",
    ],
    specifications: {
      "Sweep Size (mm)": "1200mm",
      "Power Consumption (Watts)": "75W",
      "Air Delivery (CMM)": "210 CMM",
      RPM: "380",
      "Number of Blades": "3",
      Voltage: "220-240V",
      Frequency: "50Hz",
      "Motor Type": "Induction Motor",
      Warranty: "2 Years",
      Color: "Ivory / Brown / Black",
    },
  },

  // ============================================================
  // Fans (Atomberg) — added from Retailer Price List (Non-South, May 2026)
  // ============================================================

  {
    id: 30,
    name: "Aris Starlight",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Smart Ceiling Fan",
    price: 10949,
    originalPrice: 18660,
    discount: 41,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/Fan2/Atomberg Aris Starlight 1400 mm smart ceiling fan in Dark Teakwood.webp",
    badge: "Smart Ceiling Fan",
    colors: [
      {
        name: "Dark Teakwood",
        hex: "#4a3220",
        images: [
          "/Fan2/Atomberg Aris Starlight 1400 mm smart ceiling fan in Dark Teakwood.webp",
        ],
        price: 10949,
        originalPrice: 18660,
      },
      {
        name: "Marble White",
        hex: "#f2f0ec",
        images: [
          "/Fan2/Atomberg Aris Starlight 1400 mm smart ceiling fan in Marble White.webp",
        ],
        price: 8699,
        originalPrice: 14640,
      },
    ],
    metaTitle: "Atomberg Aris Starlight 1400mm – Buy Online Bhubaneswar",
    metaDescription:
      "): Buy Atomberg Aris Starlight smart BLDC ceiling fan online in Bhubaneswar. Premium wood-finish designs, 900–1400mm sweep. Genuine, home delivery – JC Enterprises.",
    description:
      "A premium smart BLDC ceiling fan with a genuine wood-finish look, fully app and remote controlled through the Atomberg Home App, suited to large living rooms and premium interiors that want strong airflow with a designer finish.",
    features: [
      "Genuine Atomberg smart BLDC fan",
      "App + remote controlled",
      "Premium wood-finish and metallic colour options",
      "Available in 900mm, 1200mm, 1400mm sweep",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "1400mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Dark Teakwood / Marble White",
      "Control Type (Smart App / Remote / Regulator)": "Smart",
    },
  },

  {
    id: 31,
    name: "Aris Starlight 1200mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Smart Ceiling Fan",
    price: 10749,
    originalPrice: 18300,
    discount: 41,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/Fan2/Atomberg Aris Starlight 1200 mm smart ceiling fan in Dark Teakwood.webp",
    badge: "Smart Ceiling Fan",
    colors: [
      {
        name: "Dark Teakwood",
        hex: "#4a3220",
        images: [
          "/Fan2/Atomberg Aris Starlight 1200 mm smart ceiling fan in Dark Teakwood.webp",
        ],
      },
      {
        name: "Marble White",
        hex: "#f2f0ec",
        images: [
          "/Fan2/Atomberg Aris Starlight 1200 mm smart ceiling fan in Marble White.webp",
        ],
        price: 8499,
        originalPrice: 14300,
      },
      {
        name: "Stellar Black",
        hex: "#1c1c1c",
        images: [
          "/Fan2/Atomberg Aris Starlight 1200 mm smart ceiling fan in Stellar Black.webp",
        ],
        price: 8499,
        originalPrice: 14300,
      },
      {
        name: "Umber Brown",
        hex: "#5c3a21",
        images: [
          "/Fan2/Atomberg Aris Starlight 1200 mm smart ceiling fan in Umber Brown.webp",
        ],
        price: 8499,
        originalPrice: 14300,
      },
      {
        name: "Tuscan Gold",
        hex: "#b8860b",
        images: [
          "/Fan2/Atomberg Aris Starlight 1200 mm smart ceiling fan in Umber Brown.webp",
        ],
        price: 8499,
        originalPrice: 14300,
      },
    ],
    metaTitle: "Atomberg Aris Starlight 1200mm – Buy Online Bhubaneswar",
    metaDescription:
      "Buy Atomberg Aris Starlight smart BLDC ceiling fan online in Bhubaneswar. Premium wood-finish designs, 900–1400mm sweep. Genuine, home delivery – JC Enterprises.",
    description:
      "A premium smart BLDC ceiling fan with a genuine wood-finish look, fully app and remote controlled through the Atomberg Home App, suited to large living rooms and premium interiors that want strong airflow with a designer finish.",
    features: [
      "Genuine Atomberg smart BLDC fan",
      "App + remote controlled",
      "Premium wood-finish and metallic colour options",
      "Available in 900mm, 1200mm, 1400mm sweep",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "1200mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color:
        "Dark Teakwood / Marble White / Stellar Black / Tuscan Gold / Umber Brown",
      "Control Type (Smart App / Remote / Regulator)": "Smart",
    },
  },

  {
    id: 32,
    name: "Aris Starlight 900mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Smart Ceiling Fan",
    price: 10749,
    originalPrice: 18300,
    discount: 41,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/Fan2/Atomberg Aris Starlight 900 mm smart ceiling fan in Dark Teakwood.webp",
    badge: "Smart Ceiling Fan",
    colors: [
      {
        name: "Dark Teakwood",
        hex: "#4a3220",
        images: [
          "/Fan2/Atomberg Aris Starlight 900 mm smart ceiling fan in Dark Teakwood.webp",
        ],
      },
      {
        name: "Marble White",
        hex: "#f2f0ec",
        images: [
          "/Fan2/Atomberg Aris Starlight 900 mm smart ceiling fan in Marble White.webp",
        ],
        price: 8499,
        originalPrice: 14300,
      },
    ],
    metaTitle: "Atomberg Aris Starlight 900mm – Buy Online Bhubaneswar",
    metaDescription:
      "Buy Atomberg Aris Starlight 900mm online in Bhubaneswar, Dark Teakwood and Marble White with Smart App control. Genuine, home delivery – JC Enterprises.",
    description:
      "A premium smart BLDC ceiling fan with a genuine wood-finish look, fully app and remote controlled through the Atomberg Home App, suited to large living rooms and premium interiors that want strong airflow with a designer finish.",
    features: [
      "Genuine Atomberg smart BLDC fan",
      "App + remote controlled",
      "Premium wood-finish and metallic colour options",
      "Available in 900mm, 1200mm, 1400mm sweep",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "900mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Dark Teakwood / Marble White",
      "Control Type (Smart App / Remote / Regulator)": "Smart",
    },
  },

  {
    id: 33,
    name: "Aris Gladius 1200mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Smart Ceiling Fan",
    price: 6799,
    originalPrice: 11400,
    discount: 40,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/Fan2/Atomberg Aris Gladius 1200 mm smart ceiling fan in pearl white.webp",
    badge: "Smart Ceiling Fan",
    colors: [
      {
        name: "Pearl White",
        hex: "#f5f5f4",
        images: [
          "/Fan2/Atomberg Aris Gladius 1200 mm smart ceiling fan in pearl white.webp",
        ],
      },
      {
        name: "Sand Grey",
        hex: "#9a9a92",
        images: [
          "/Fan2/Atomberg Aris Gladius 1200 mm smart ceiling fan in Sand Grey.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Aris Gladius 1200mm – Buy Online Bhubaneswar",
    metaDescription:
      "Buy Atomberg Aris Gladius smart BLDC ceiling fan online in Bhubaneswar. Pearl White & Sand Grey finishes. Genuine, home delivery – JC Enterprises.",
    description:
      "A smart BLDC ceiling fan built for a clean, minimal look in Pearl White and Sand Grey, fully controllable through the Atomberg Home App and remote — a straightforward fit for bedrooms and living spaces.",
    features: [
      "Genuine Atomberg smart BLDC fan",
      "App + remote controlled",
      "Pearl White and Sand Grey finishes",
      "Available in 900mm and 1200mm sweep",
      "Energy-efficient motor",
    ],
    specifications: {
      "Sweep Size (mm)": "1200mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Pearl White / Sand Grey",
      "Control Type (Smart App / Remote / Regulator)": "Smart",
    },
  },

  {
    id: 34,
    name: "Aris Gladius 900mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Smart Ceiling Fan",
    price: 6799,
    originalPrice: 11400,
    discount: 40,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/Fan2/Atomberg Aris Gladius 900 mm smart ceiling fan in pearl white.webp",
    badge: "Smart Ceiling Fan",
    colors: [
      {
        name: "Pearl White",
        hex: "#f5f5f4",
        images: [
          "/Fan2/Atomberg Aris Gladius 900 mm smart ceiling fan in pearl white.webp",
        ],
      },
      {
        name: "Sand Grey",
        hex: "#9a9a92",
        images: [
          "/Fan2/Atomberg Aris Gladius 900 mm smart ceiling fan in Sand Grey.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Aris Gladius 900mm – Buy Online Bhubaneswar",
    metaDescription:
      "Buy the Atomberg Aris Gladius 900mm online in Bhubaneswar in Pearl White and Sand Grey with Smart App control. Genuine, home delivery – JC Enterprises.",
    description:
      "A smart BLDC ceiling fan built for a clean, minimal look in Pearl White and Sand Grey, fully controllable through the Atomberg Home App and remote — a straightforward fit for bedrooms and living spaces.",
    features: [
      "Genuine Atomberg smart BLDC fan",
      "App + remote controlled",
      "Pearl White and Sand Grey finishes",
      "Available in 900mm and 1200mm sweep",
      "Energy-efficient motor",
    ],
    specifications: {
      "Sweep Size (mm)": "900mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Pearl White / Sand Grey",
      "Control Type (Smart App / Remote / Regulator)": "Smart",
    },
  },

  {
    id: 35,
    name: "Aris Contour 1200mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Smart Ceiling Fan",
    price: 7799,
    originalPrice: 13570,
    discount: 43,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/Fan2/Atomberg Aris Contour 1200 mm smart ceiling fan in Smoke Wood – JC Enterprises Bhubaneswar.webp",
    badge: "Smart Ceiling Fan",
    colors: [
      {
        name: "Smokewood",
        hex: "#5b4636",
        images: [
          "/Fan2/Atomberg Aris Contour 1200 mm smart ceiling fan in Smoke Wood – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Regent Grey",
        hex: "#8a8a82",
        images: [
          "/Fan2/Atomberg Aris Contour 1200 mm smart ceiling fan in Regent Grey – JC Enterprises Bhubaneswar.webp",
        ],
        price: 6799,
        originalPrice: 11400,
      },
      {
        name: "Marble White",
        hex: "#f2f0ec",
        images: [
          "/Fan2/Atomberg Aris Contour 1200 mm smart ceiling fan in Marble White – JC Enterprises Bhubaneswar.webp",
        ],
        price: 6799,
        originalPrice: 11400,
      },
      {
        name: "Midnight Black",
        hex: "#161616",
        images: [
          "/Fan2/Atomberg Aris Contour 1200 mm smart ceiling fan in Midnight Black – JC Enterprises Bhubaneswar.webp",
        ],
        price: 6799,
        originalPrice: 11400,
      },
      {
        name: "Umber Brown",
        hex: "#5c3a21",
        images: [
          "/Fan2/Atomberg Aris Contour 1200 mm smart ceiling fan in Umber Brown – JC Enterprises Bhubaneswar.webp",
        ],
        price: 6799,
        originalPrice: 11400,
      },
      {
        name: "Ritz Blue",
        hex: "#274472",
        images: [
          "/Fan2/Atomberg Aris Contour 1200 mm smart ceiling fan in Ritz Blue – JC Enterprises Bhubaneswar.webp",
        ],
        price: 6799,
        originalPrice: 11400,
      },
    ],
    metaTitle: "Atomberg Aris Contour 1200mm – Buy Online Bhubaneswar",
    metaDescription:
      "Shop the Atomberg Aris Contour 1200mm online in Bhubaneswar, offered in Smokewood and Regent Grey with Smart App control. Genuine, home delivery – JC Enterprises.",
    description:
      "A smart BLDC ceiling fan with a sculpted blade profile, available in Smokewood as well as Regent Grey, Marble White, Midnight Black, Umber Brown and Ritz Blue — app and remote controlled for contemporary interiors.",
    features: [
      "Genuine Atomberg smart BLDC fan",
      "App + remote controlled",
      "Sculpted blade design",
      "Wide colour range including Smokewood, Ritz Blue",
      "Available in 900mm and 1200mm sweep",
    ],
    specifications: {
      "Sweep Size (mm)": "1200mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color:
        "Marble White / Midnight Black / Regent Grey / Ritz Blue / Smokewood / Umber Brown",
      "Control Type (Smart App / Remote / Regulator)": "Smart",
    },
  },

  {
    id: 36,
    name: "Aris Contour 900mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Smart Ceiling Fan",
    price: 6799,
    originalPrice: 11400,
    discount: 40,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/Fan2/Atomberg Aris Contour 900 mm smart ceiling fan in Regent Grey – JC Enterprises Bhubaneswar - Copy.webp",
    badge: "Smart Ceiling Fan",
    colors: [
      {
        name: "Regent Grey",
        hex: "#8a8a82",
        images: [
          "/Fan2/Atomberg Aris Contour 900 mm smart ceiling fan in Regent Grey – JC Enterprises Bhubaneswar - Copy.webp",
        ],
      },
      {
        name: "Marble White",
        hex: "#f2f0ec",
        images: [
          "/Fan2/Atomberg Aris Contour 900 mm smart ceiling fan in Marble White – JC Enterprises Bhubaneswar - Copy.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Aris Contour 900mm – Buy Online Bhubaneswar",
    metaDescription:
      "The Atomberg Aris Contour 900mm is available online in Bhubaneswar in Regent Grey and Marble White with Smart App control. Genuine, home delivery – JC Enterprises.",
    description:
      "A smart BLDC ceiling fan with a sculpted blade profile, available in Smokewood as well as Regent Grey, Marble White, Midnight Black, Umber Brown and Ritz Blue — app and remote controlled for contemporary interiors.",
    features: [
      "Genuine Atomberg smart BLDC fan",
      "App + remote controlled",
      "Sculpted blade design",
      "Wide colour range including Smokewood, Ritz Blue",
      "Available in 900mm and 1200mm sweep",
    ],
    specifications: {
      "Sweep Size (mm)": "900mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Marble White / Regent Grey",
      "Control Type (Smart App / Remote / Regulator)": "Smart",
    },
  },

  {
    id: 37,
    name: "Atomberg Renesa Halo Smart BLDC Ceiling Fan 1400mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Smart Ceiling Fan",
    price: 4399,
    originalPrice: 7500,
    discount: 41,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Renesa Halo  smart ceiling fan blaze brown– JC Enterprises Bhubaneswar.webp",
    badge: "Smart Ceiling Fan",
    colors: [
      {
        name: "Misty Teal",
        hex: "#3f6c6a",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan misty teal– JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss White (RG Ring)",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan Gloss white RG Ring– JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Blaze Brown",
        hex: "#6e3d25",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo  smart ceiling fan blaze brown– JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Midnight Black",
        hex: "#161616",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan midnight black– JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Seasand Ivory",
        hex: "#f0e6d2",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan sea sand ivory– JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss White & Black",
        hex: "#e5e5e5",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan Gloss white and black– JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Renesa Halo Price – Buy Online Bhubaneswar",
    metaDescription:
      "Buy Atomberg Renesa Halo smart BLDC ceiling fan online in Bhubaneswar. Ring-light design, 600–1400mm sweep. Genuine, home delivery – JC Enterprises.",
    description:
      "The Atomberg Renesa Halo stands out with its signature ring-light (RG Ring) design around the fan body, offered in an extensive palette — Misty Teal, Gloss White, Blaze Brown, Midnight Black, Seasand Ivory, and more — across four sweep sizes from 600mm to 1400mm. Fully app and remote controlled, it works well as a statement piece in living rooms and premium bedrooms. Check the current Atomberg Renesa Halo price and buy the genuine model with home delivery across Bhubaneswar and Odisha through JC Enterprises.",
    features: [
      "Genuine Atomberg smart BLDC fan",
      "Signature ring-light (RG Ring) design",
      "App + remote controlled",
      "Extensive colour palette",
      "Available in 600mm, 900mm, 1200mm, 1400mm sweep",
    ],
    specifications: {
      "Sweep Size (mm)": "1400mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color:
        "Blaze Brown / Gloss White & Black / Gloss White (RG Ring) / Midnight Black / Misty Teal / Seasand Ivory",
      "Control Type (Smart App / Remote / Regulator)": "Smart",
    },
  },

  {
    id: 38,
    name: "Atomberg Renesa Halo Smart BLDC Ceiling Fan 1200mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Smart Ceiling Fan",
    price: 4199,
    originalPrice: 7100,
    discount: 41,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Renesa Halo  smart ceiling fan blaze brown– JC Enterprises Bhubaneswar.webp",
    badge: "Smart Ceiling Fan",
    colors: [
      {
        name: "Misty Teal",
        hex: "#3f6c6a",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan misty teal– JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Aegean Blue",
        hex: "#2f5d78",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan aegean blue.webp",
        ],
      },
      {
        name: "Copper Haze",
        hex: "#a86a44",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan copper haze – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Spring Green",
        hex: "#6b8f5a",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan spring green– JC Enterprises Bhubaneswar.webp",
        ],
      },

      {
        name: "Blaze Brown",
        hex: "#6e3d25",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo  smart ceiling fan blaze brown– JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Midnight Black",
        hex: "#161616",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan midnight black– JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Pebble Grey",
        hex: "#b0aea6",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan pebble grey– JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Seasand Ivory & Black",
        hex: "#e7dcc4",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan sea sand ivory and black– JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Matte Brown & Black",
        hex: "#3a2a20",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan matte brown and black– JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss White (AB Ring)",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan Gloss white RG Ring– JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "): Atomberg Renesa Halo Price – Buy Online Bhubaneswar",
    metaDescription:
      "Buy Atomberg Renesa Halo smart BLDC ceiling fan online in Bhubaneswar. Ring-light design, 600–1400mm sweep. Genuine, home delivery – JC Enterprises.",
    description:
      "The Atomberg Renesa Halo stands out with its signature ring-light (RG Ring) design around the fan body, offered in an extensive palette — Misty Teal, Gloss White, Blaze Brown, Midnight Black, Seasand Ivory, and more — across four sweep sizes from 600mm to 1400mm. Fully app and remote controlled, it works well as a statement piece in living rooms and premium bedrooms. Check the current Atomberg Renesa Halo price and buy the genuine model with home delivery across Bhubaneswar and Odisha through JC Enterprises.",
    features: [
      "Genuine Atomberg smart BLDC fan",
      "Signature ring-light (RG Ring) design",
      "App + remote controlled",
      "Extensive colour palette",
      "Available in 600mm, 900mm, 1200mm, 1400mm sweep",
    ],
    specifications: {
      "Sweep Size (mm)": "1200mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color:
        "Aegean Blue / Blaze Brown / Copper Haze / Gloss White (AB Ring) / Gloss White (RG Ring) / Matte Brown & Black / Midnight Black / Misty Teal / Pebble Grey / Seasand Ivory & Black / Spring Green",
      "Control Type (Smart App / Remote / Regulator)": "Smart",
    },
  },

  {
    id: 39,
    name: "Atomberg Renesa Halo Smart BLDC Ceiling Fan 900mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Smart Ceiling Fan",
    price: 4049,
    originalPrice: 6800,
    discount: 40,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan misty teal– JC Enterprises Bhubaneswar.webp",
    badge: "Smart Ceiling Fan",
    colors: [
      {
        name: "Misty Teal",
        hex: "#3f6c6a",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan misty teal– JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss White (RG Ring)",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan Gloss white RG Ring– JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Blaze Brown",
        hex: "#6e3d25",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo  smart ceiling fan blaze brown– JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Midnight Black",
        hex: "#161616",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan midnight black– JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Seasand Ivory",
        hex: "#f0e6d2",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan sea sand ivory– JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss White & Black",
        hex: "#e5e5e5",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan Gloss white and black– JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Renesa Halo 900mm – Buy Online Bhubaneswar",
    metaDescription:
      "Atomberg's Renesa Halo 900mm — Misty Teal and Gloss White (RG Ring) with Smart App control — is now online in Bhubaneswar. Genuine, home delivery – JC Enterprises.",
    description:
      ": The Atomberg Renesa Halo stands out with its signature ring-light (RG Ring) design around the fan body, offered in an extensive palette — Misty Teal, Gloss White, Blaze Brown, Midnight Black, Seasand Ivory, and more — across four sweep sizes from 600mm to 1400mm. Fully app and remote controlled, it works well as a statement piece in living rooms and premium bedrooms. Check the current Atomberg Renesa Halo price and buy the genuine model with home delivery across Bhubaneswar and Odisha through JC Enterprises.",
    features: [
      "Genuine Atomberg smart BLDC fan",
      "Signature ring-light (RG Ring) design",
      "App + remote controlled",
      "Extensive colour palette",
      "Available in 600mm, 900mm, 1200mm, 1400mm sweep",
    ],
    specifications: {
      "Sweep Size (mm)": "900mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color:
        "Blaze Brown / Gloss White & Black / Gloss White (RG Ring) / Midnight Black / Misty Teal / Seasand Ivory",
      "Control Type (Smart App / Remote / Regulator)": "Smart",
    },
  },

  {
    id: 40,
    name: "Atomberg Renesa Halo Smart BLDC Ceiling Fan 600mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Smart Ceiling Fan",
    price: 3899,
    originalPrice: 6600,
    discount: 41,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan misty teal– JC Enterprises Bhubaneswar.webp",
    badge: "Smart Ceiling Fan",
    colors: [
      {
        name: "Misty Teal",
        hex: "#3f6c6a",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan misty teal– JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss White (RG Ring)",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan Gloss white RG Ring– JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Blaze Brown",
        hex: "#6e3d25",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo  smart ceiling fan blaze brown– JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Midnight Black",
        hex: "#161616",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan midnight black– JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Seasand Ivory",
        hex: "#f0e6d2",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan sea sand ivory– JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss White & Black",
        hex: "#e5e5e5",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Halo smart ceiling fan Gloss white and black– JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Renesa Halo Price – Buy Online Bhubaneswar",
    metaDescription:
      "): Buy Atomberg Renesa Halo smart BLDC ceiling fan online in Bhubaneswar. Ring-light design, 600–1400mm sweep. Genuine, home delivery – JC Enterprises.",
    description:
      "The Atomberg Renesa Halo stands out with its signature ring-light (RG Ring) design around the fan body, offered in an extensive palette — Misty Teal, Gloss White, Blaze Brown, Midnight Black, Seasand Ivory, and more — across four sweep sizes from 600mm to 1400mm. Fully app and remote controlled, it works well as a statement piece in living rooms and premium bedrooms. Check the current Atomberg Renesa Halo price and buy the genuine model with home delivery across Bhubaneswar and Odisha through JC Enterprises.",
    features: [
      "Genuine Atomberg smart BLDC fan",
      "Signature ring-light (RG Ring) design",
      "App + remote controlled",
      "Extensive colour palette",
      "Available in 600mm, 900mm, 1200mm, 1400mm sweep",
    ],
    specifications: {
      "Sweep Size (mm)": "600mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color:
        "Blaze Brown / Gloss White & Black / Gloss White (RG Ring) / Midnight Black / Misty Teal / Seasand Ivory",
      "Control Type (Smart App / Remote / Regulator)": "Smart",
    },
  },

  {
    id: 41,
    name: "Atomberg Razon BLDC Ceiling Fan with Remote",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "BLDC Ceiling Fan",
    price: 3999,
    originalPrice: 6880,
    discount: 42,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Razon 1200mm BLDC ceiling fan with remote in Misty Teal – JC Enterprises Bhubaneswar.webp",
    badge: "BLDC Ceiling Fan",
    colors: [
      {
        name: "Misty Teal",
        hex: "#3f6c6a",
        images: [
          "/allfan/Fan image 3/Atomberg Razon 1200mm BLDC ceiling fan with remote in Misty Teal – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Sangria Brown",
        hex: "#5a2a27",
        images: [
          "/allfan/Fan image 3/Atomberg Razon 1200mm BLDC ceiling fan with remote in Sangria Brown – JC Enterprises Bhubaneswar.webp",
        ],
      },

      {
        name: "Urban Chrome",
        hex: "#9fa3a6",
        images: [
          "/allfan/Fan image 3/Atomberg Razon 1200mm BLDC ceiling fan with remote in Urban Chrome – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Razon Price – Buy Online in Bhubaneswar",
    metaDescription:
      "Buy Atomberg Razon 1200mm BLDC ceiling fan with remote online in Bhubaneswar. Genuine product, home delivery from JC Enterprises.",
    description:
      "The Atomberg Razon is a straightforward, remote-controlled BLDC ceiling fan in a 1200mm sweep, offered in Gloss White, Midnight Black, Misty Teal, Sangria Brown, Crème Brulee, and Urban Chrome finishes. It's a solid, energy-efficient option for buyers who want Atomberg's BLDC power savings without a smart-app connection. Check the current Atomberg Razon price and buy the genuine model with home delivery across Bhubaneswar and Odisha through JC Enterprises.",
    features: [
      "Genuine Atomberg BLDC fan",
      "Remote controlled",
      "1200mm sweep",
      "Six colour options",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "1200mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color:
        "Crème Brulee / Gloss White / Midnight Black / Misty Teal / Sangria Brown / Urban Chrome",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 42,
    name: "Atomberg Renesa Prime Crest BLDC Ceiling Fan 1400mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "BLDC Ceiling Fan",
    price: 4499,
    originalPrice: 7860,
    discount: 43,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Renesa Prime Crest BLDC ceiling fan Honey Maple wood – JC Enterprises Bhubaneswar.webp",
    badge: "BLDC Ceiling Fan",
    colors: [
      {
        name: "Honey Maplewood",
        hex: "#c68a3f",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Crest ceiling fan Honey Maple wood – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss Black",
        hex: "#141414",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Crest BLDC ceiling fan Gloss Black – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3999,
        originalPrice: 6960,
      },
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Crest ceiling fan Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3999,
        originalPrice: 6960,
      },
      {
        name: "Misty Teal",
        hex: "#3f6c6a",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Crest BLDC ceiling fan Misty Teal – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3999,
        originalPrice: 6960,
      },
    ],
    metaKeywords:
      "atomberg renesa prime crest price, BLDC fan multiple sizes Bhubaneswar, wood finish remote fan",
    metaTitle: "Atomberg Renesa Prime Crest 1400mm – Buy Online Bhubaneswar",
    metaDescription:
      "Buy the Atomberg Renesa Prime Crest 1400mm online in Bhubaneswar in Honey Maplewood and Gloss Black with remote control. Genuine, home delivery – JC Enterprises.",
    description:
      "A remote-controlled BLDC ceiling fan available across four sweep sizes, from a compact 600mm to a large 1400mm, in warm wood finishes or contemporary gloss colours.",
    features: [
      "Genuine Atomberg BLDC fan",
      "Remote controlled",
      "Available in 600mm, 900mm, 1200mm, 1400mm sweep",
      "Wood-finish and gloss colour options",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "1400mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Gloss Black / Gloss White / Honey Maplewood / Misty Teal",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 43,
    name: "Atomberg Renesa Prime Crest BLDC Ceiling Fan 1200mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "BLDC Ceiling Fan",
    price: 4299,
    originalPrice: 7230,
    discount: 41,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Renesa Prime Crest BLDC ceiling fan Honey Maple wood – JC Enterprises Bhubaneswar.webp",
    badge: "BLDC Ceiling Fan",
    colors: [
      {
        name: "Honey Maplewood",
        hex: "#c68a3f",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Crest BLDC ceiling fan Honey Maple wood – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Dark Walnut",
        hex: "#4a2f22",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Crest BLDC ceiling fan Dark Wallnut – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Nordic Ashwood",
        hex: "#c9b79c",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Crest BLDC ceiling fan Nordic Ash Wood– JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss Black",
        hex: "#141414",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Crest BLDC ceiling fan Gloss Black – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3799,
        originalPrice: 6340,
      },
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Crest BLDC ceiling fan Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3799,
        originalPrice: 6340,
      },
      {
        name: "Misty Teal",
        hex: "#3f6c6a",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Crest BLDC ceiling fan Misty Teal – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3799,
        originalPrice: 6340,
      },
      {
        name: "Desert Pearl",
        hex: "#e6dcc9",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Crest BLDC ceiling fan Desert Pearl – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3799,
        originalPrice: 6340,
      },
      {
        name: "Copper Haze",
        hex: "#a86a44",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Crest BLDC ceiling fan Copper Haze – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3799,
        originalPrice: 6340,
      },
    ],
    metaKeywords:
      "atomberg renesa prime crest price, BLDC fan multiple sizes Bhubaneswar, wood finish remote fan",
    metaTitle: "Atomberg Renesa Prime Crest 1200mm – Buy Online Bhubaneswar",
    metaDescription:
      "Order the Atomberg Renesa Prime Crest 1200mm in Honey Maplewood and Dark Walnut online in Bhubaneswar, remote control. Genuine, home delivery – JC Enterprises.",
    description:
      "A remote-controlled BLDC ceiling fan available across four sweep sizes, from a compact 600mm to a large 1400mm, in warm wood finishes or contemporary gloss colours.",
    features: [
      "Genuine Atomberg BLDC fan",
      "Remote controlled",
      "Available in 600mm, 900mm, 1200mm, 1400mm sweep",
      "Wood-finish and gloss colour options",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "1200mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color:
        "Copper Haze / Dark Walnut / Desert Pearl / Gloss Black / Gloss White / Honey Maplewood / Misty Teal / Nordic Ashwood",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 44,
    name: "Atomberg Renesa Prime Crest BLDC Ceiling Fan  900mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "BLDC Ceiling Fan",
    price: 4149,
    originalPrice: 7230,
    discount: 43,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Renesa Prime Crest BLDC ceiling fan Honey Maple wood – JC Enterprises Bhubaneswar.webp",
    badge: "BLDC Ceiling Fan",
    colors: [
      {
        name: "Honey Maplewood",
        hex: "#c68a3f",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Crest BLDC ceiling fan Honey Maple wood – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss Black",
        hex: "#141414",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Crest BLDC ceiling fan Gloss Black – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3649,
        originalPrice: 6340,
      },
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Crest BLDC ceiling fan Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3649,
        originalPrice: 6340,
      },
      {
        name: "Misty Teal",
        hex: "#3f6c6a",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Crest BLDC ceiling fan Misty Teal – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3649,
        originalPrice: 6340,
      },
    ],
    metaKeywords:
      "atomberg renesa prime crest price, BLDC fan multiple sizes Bhubaneswar, wood finish remote fan",
    metaTitle: "Atomberg Renesa Prime Crest 900mm – Buy Online Bhubaneswar",
    metaDescription:
      "Buy Atomberg Renesa Prime Crest 900mm online in Bhubaneswar, Honey Maplewood and Gloss Black with remote control. Genuine, home delivery – JC Enterprises.",
    description:
      "A remote-controlled BLDC ceiling fan available across four sweep sizes, from a compact 600mm to a large 1400mm, in warm wood finishes or contemporary gloss colours.",
    features: [
      "Genuine Atomberg BLDC fan",
      "Remote controlled",
      "Available in 600mm, 900mm, 1200mm, 1400mm sweep",
      "Wood-finish and gloss colour options",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "900mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Gloss Black / Gloss White / Honey Maplewood / Misty Teal",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 45,
    name: "Atomberg Renesa Prime Crest BLDC Ceiling Fan 600mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "BLDC Ceiling Fan",
    price: 3999,
    originalPrice: 6960,
    discount: 43,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Renesa Prime Crest BLDC ceiling fan Honey Maple wood – JC Enterprises Bhubaneswar.webp",
    badge: "BLDC Ceiling Fan",
    colors: [
      {
        name: "Honey Maplewood",
        hex: "#c68a3f",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Crest BLDC ceiling fan Honey Maple wood – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss Black",
        hex: "#141414",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Crest BLDC ceiling fan Gloss Black – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3499,
        originalPrice: 6070,
      },
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Crest BLDC ceiling fan Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3499,
        originalPrice: 6070,
      },
      {
        name: "Misty Teal",
        hex: "#3f6c6a",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Crest BLDC ceiling fan Misty Teal – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3499,
        originalPrice: 6070,
      },
    ],
    metaKeywords:
      "atomberg renesa prime crest price, BLDC fan multiple sizes Bhubaneswar, wood finish remote fan",
    metaTitle: "Atomberg Renesa Prime Crest 600mm – Buy Online Bhubaneswar",
    metaDescription:
      "Order the Atomberg Renesa Prime Crest 600mm online in Bhubaneswar in Honey Maplewood and Gloss Black with remote control. Genuine, home delivery – JC Enterprises.",
    description:
      "A remote-controlled BLDC ceiling fan available across four sweep sizes, from a compact 600mm to a large 1400mm, in warm wood finishes or contemporary gloss colours.",
    features: [
      "Genuine Atomberg BLDC fan",
      "Remote controlled",
      "Available in 600mm, 900mm, 1200mm, 1400mm sweep",
      "Wood-finish and gloss colour options",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "600mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Gloss Black / Gloss White / Honey Maplewood / Misty Teal",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 46,
    name: "Renesa Prime Remote 1200mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "BLDC Ceiling Fan",
    price: 4249,
    originalPrice: 7100,
    discount: 40,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Renesa Prime Remote [sweep]mm BLDC ceiling fan Dark Wallnut – JC Enterprises Bhubaneswar.webp",
    badge: "BLDC Ceiling Fan",
    colors: [
      {
        name: "Dark Walnut",
        hex: "#4a2f22",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Remote [sweep]mm BLDC ceiling fan Dark Wallnut – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Honey Maplewood",
        hex: "#c68a3f",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Remote [sweep]mm BLDC ceiling fan Honey Maplewood – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss Black",
        hex: "#141414",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Remote [sweep]mm BLDC ceiling fan Gloss Black] – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3749,
        originalPrice: 6200,
      },
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Remote [sweep]mm BLDC ceiling fan Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3749,
        originalPrice: 6200,
      },
      {
        name: "Pebble Grey",
        hex: "#b0aea6",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Remote [sweep]mm BLDC ceiling fan Pebble Grey – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3749,
        originalPrice: 6200,
      },
      {
        name: "Seasand Ivory",
        hex: "#f0e6d2",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Remote [sweep]mm BLDC ceiling fan Gloss Seasand Ivory] – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3749,
        originalPrice: 6200,
      },
      {
        name: "Misty Teal",
        hex: "#3f6c6a",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Remote [sweep]mm BLDC ceiling fan Misty Teal – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3749,
        originalPrice: 6200,
      },
      {
        name: "Gloss Brown",
        hex: "#4a2f1e",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Remote [sweep]mm BLDC ceiling fan Gloss Brown – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3749,
        originalPrice: 6200,
      },
    ],
    metaTitle: "Atomberg Renesa Prime Remote 1200mm – Buy Online Bhubaneswar",
    metaDescription:
      "Order the Atomberg Renesa Prime Remote 1200mm in Dark Walnut and Honey Maplewood online in Bhubaneswar, remote control. Genuine, home delivery – JC Enterprises.",
    description:
      "A value-focused BLDC ceiling fan available in 1200mm, 900mm and 600mm sweeps, offered in wood finishes as well as gloss colours — Atomberg's signature energy savings with straightforward remote control.",
    features: [
      "Genuine Atomberg BLDC fan",
      "Remote controlled",
      "Available in 600mm, 900mm, 1200mm sweep",
      "Wood-finish and gloss colour options",
      "Energy-efficient, value-focused BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "1200mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color:
        "Dark Walnut / Gloss Black / Gloss Brown / Gloss White / Honey Maplewood / Misty Teal / Pebble Grey / Seasand Ivory",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 47,
    name: "Renesa Prime Remote 900mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "BLDC Ceiling Fan",
    price: 4099,
    originalPrice: 6800,
    discount: 40,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Renesa Prime Remote [sweep]mm BLDC ceiling fan Honey Maplewood – JC Enterprises Bhubaneswar.webp",
    badge: "BLDC Ceiling Fan",
    colors: [
      {
        name: "Dark Walnut",
        hex: "#4a2f22",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Remote [sweep]mm BLDC ceiling fan Dark Wallnut – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Honey Maplewood",
        hex: "#c68a3f",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Remote [sweep]mm BLDC ceiling fan Honey Maplewood – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss Black",
        hex: "#141414",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Remote [sweep]mm BLDC ceiling fan Gloss Black] – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3599,
        originalPrice: 6200,
      },
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Remote [sweep]mm BLDC ceiling fan Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3599,
        originalPrice: 6200,
      },
      {
        name: "Pebble Grey",
        hex: "#b0aea6",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Remote [sweep]mm BLDC ceiling fan Pebble Grey – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3599,
        originalPrice: 6200,
      },
      {
        name: "Seasand Ivory",
        hex: "#f0e6d2",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Remote [sweep]mm BLDC ceiling fan Gloss Seasand Ivory] – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3599,
        originalPrice: 6200,
      },
    ],
    metaTitle: "Atomberg Renesa Prime Remote 900mm – Buy Online Bhubaneswar",
    metaDescription:
      "Atomberg's Renesa Prime Remote 900mm — Dark Walnut and Honey Maplewood with remote control — is now online in Bhubaneswar. Genuine, home delivery – JC Enterprises.",
    description:
      "A value-focused BLDC ceiling fan available in 1200mm, 900mm and 600mm sweeps, offered in wood finishes as well as gloss colours — Atomberg's signature energy savings with straightforward remote control.",
    features: [
      "Genuine Atomberg BLDC fan",
      "Remote controlled",
      "Available in 600mm, 900mm, 1200mm sweep",
      "Wood-finish and gloss colour options",
      "Energy-efficient, value-focused BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "900mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color:
        "Dark Walnut / Gloss Black / Gloss White / Honey Maplewood / Pebble Grey / Seasand Ivory",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 48,
    name: "Renesa Prime Remote 600mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "BLDC Ceiling Fan",
    price: 3949,
    originalPrice: 6600,
    discount: 40,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Renesa Prime Remote [sweep]mm BLDC ceiling fan Gloss Black] – JC Enterprises Bhubaneswar.webp",
    badge: "BLDC Ceiling Fan",
    colors: [
      {
        name: "Dark Walnut",
        hex: "#4a2f22",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Remote [sweep]mm BLDC ceiling fan Dark Wallnut – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Honey Maplewood",
        hex: "#c68a3f",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Remote [sweep]mm BLDC ceiling fan Honey Maplewood – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss Black",
        hex: "#141414",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Remote [sweep]mm BLDC ceiling fan Gloss Black] – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3449,
        originalPrice: 5700,
      },
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Remote [sweep]mm BLDC ceiling fan Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3449,
        originalPrice: 5700,
      },
      {
        name: "Pebble Grey",
        hex: "#b0aea6",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Remote [sweep]mm BLDC ceiling fan Pebble Grey – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3449,
        originalPrice: 5700,
      },
      {
        name: "Seasand Ivory",
        hex: "#f0e6d2",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Remote [sweep]mm BLDC ceiling fan Gloss Seasand Ivory] – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3449,
        originalPrice: 5700,
      },
    ],
    metaTitle: "Atomberg Renesa Prime Remote 600mm – Buy Online Bhubaneswar",
    metaDescription:
      "Shop Atomberg Renesa Prime Remote 600mm in Dark Walnut and Honey Maplewood online in Bhubaneswar, remote control. Genuine, home delivery – JC Enterprises.",
    description:
      "A value-focused BLDC ceiling fan available in 1200mm, 900mm and 600mm sweeps, offered in wood finishes as well as gloss colours — Atomberg's signature energy savings with straightforward remote control.",
    features: [
      "Genuine Atomberg BLDC fan",
      "Remote controlled",
      "Available in 600mm, 900mm, 1200mm sweep",
      "Wood-finish and gloss colour options",
      "Energy-efficient, value-focused BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "600mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color:
        "Dark Walnut / Gloss Black / Gloss White / Honey Maplewood / Pebble Grey / Seasand Ivory",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 49,
    name: "Renesa Prime Regulator 1400mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "BLDC Ceiling Fan",
    price: 4199,
    originalPrice: 7230,
    discount: 42,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Renesa Prime Regulator [sweep]mm BLDC ceiling fan Seasand Ivory – JC Enterprises Bhubaneswar.webp",
    badge: "BLDC Ceiling Fan",
    colors: [
      {
        name: "Honey Maplewood",
        hex: "#c68a3f",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Regulator [sweep]mm BLDC ceiling fan Honey Maplewood – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Regulator [sweep]mm BLDC ceiling fan Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3699,
        originalPrice: 6340,
      },
      {
        name: "Gloss Black",
        hex: "#141414",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Regulator [sweep]mm BLDC ceiling fan Gloss Black – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3699,
        originalPrice: 6340,
      },
    ],
    metaTitle: "Renesa Prime Regulator 1400mm – Buy Online Bhubaneswar",
    metaDescription:
      "Order the Atomberg Renesa Prime Regulator 1400mm in Honey Maplewood and Gloss White online in Bhubaneswar, regulator control. Genuine, home delivery – JC Enterprises.",
    description:
      "Pairs BLDC energy efficiency with a traditional regulator-based speed control, for buyers who prefer a wall-mounted regulator over a remote or app. Available across four sweep sizes.",
    features: [
      "Genuine Atomberg BLDC fan",
      "Traditional regulator speed control",
      "Available in 600mm, 900mm, 1200mm, 1400mm sweep",
      "Honey Maplewood and gloss colour options",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "1400mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Gloss Black / Gloss White / Honey Maplewood",
      "Control Type (Smart App / Remote / Regulator)": "Regulator",
    },
  },

  {
    id: 50,
    name: "Renesa Prime Regulator 1200mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "BLDC Ceiling Fan",
    price: 3999,
    originalPrice: 6800,
    discount: 41,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Renesa Prime Regulator [sweep]mm BLDC ceiling fan Gloss White – JC Enterprises Bhubaneswar.webp",
    badge: "BLDC Ceiling Fan",
    colors: [
      {
        name: "Honey Maplewood",
        hex: "#c68a3f",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Regulator [sweep]mm BLDC ceiling fan Honey Maplewood – JC Enterprises Bhubaneswar.webp",
        ],
      },

      {
        name: "Seasand Ivory",
        hex: "#f0e6d2",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Regulator [sweep]mm BLDC ceiling fan Seasand Ivory – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3499,
        originalPrice: 6200,
      },
      {
        name: "Gloss Black",
        hex: "#141414",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Regulator [sweep]mm BLDC ceiling fan Gloss Black – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3499,
        originalPrice: 6200,
      },
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Regulator [sweep]mm BLDC ceiling fan Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3499,
        originalPrice: 6200,
      },
    ],
    metaTitle: "Renesa Prime Regulator 1200mm – Buy Online Bhubaneswar",
    metaDescription:
      "Buy the Atomberg Renesa Prime Regulator 1200mm online in Bhubaneswar in Honey Maplewood and Gloss Brown with regulator control. Genuine, home delivery – JC Enterprises.",
    description:
      "Pairs BLDC energy efficiency with a traditional regulator-based speed control, for buyers who prefer a wall-mounted regulator over a remote or app. Available across four sweep sizes.",
    features: [
      "Genuine Atomberg BLDC fan",
      "Traditional regulator speed control",
      "Available in 600mm, 900mm, 1200mm, 1400mm sweep",
      "Honey Maplewood and gloss colour options",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "1200mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color:
        "Gloss Black / Gloss Brown / Gloss White / Gloss White & Black / Honey Maplewood / Seasand Ivory",
      "Control Type (Smart App / Remote / Regulator)": "Regulator",
    },
  },

  {
    id: 51,
    name: "Renesa Prime Regulator 900mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "BLDC Ceiling Fan",
    price: 3849,
    originalPrice: 6520,
    discount: 41,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Renesa Prime Regulator [sweep]mm BLDC ceiling fan Honey Maplewood – JC Enterprises Bhubaneswar.webp",
    badge: "BLDC Ceiling Fan",
    colors: [
      {
        name: "Honey Maplewood",
        hex: "#c68a3f",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Regulator [sweep]mm BLDC ceiling fan Honey Maplewood – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Regulator [sweep]mm BLDC ceiling fan Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3349,
        originalPrice: 5630,
      },
      {
        name: "Gloss Black",
        hex: "#141414",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Regulator [sweep]mm BLDC ceiling fan Gloss Black – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3349,
        originalPrice: 5630,
      },
    ],
    metaTitle: "Atomberg Renesa Prime Regulator 900mm – Buy Online Bhubaneswar",
    metaDescription:
      "Shop Atomberg Renesa Prime Regulator 900mm in Honey Maplewood and Gloss White online in Bhubaneswar, regulator control. Genuine, home delivery – JC Enterprises.",
    description:
      "Pairs BLDC energy efficiency with a traditional regulator-based speed control, for buyers who prefer a wall-mounted regulator over a remote or app. Available across four sweep sizes.",
    features: [
      "Genuine Atomberg BLDC fan",
      "Traditional regulator speed control",
      "Available in 600mm, 900mm, 1200mm, 1400mm sweep",
      "Honey Maplewood and gloss colour options",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "900mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Gloss Black / Gloss White / Honey Maplewood",
      "Control Type (Smart App / Remote / Regulator)": "Regulator",
    },
  },

  {
    id: 52,
    name: "Renesa Prime Regulator 600mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "BLDC Ceiling Fan",
    price: 3699,
    originalPrice: 6250,
    discount: 41,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Renesa Prime Regulator [sweep]mm BLDC ceiling fan Honey Maplewood – JC Enterprises Bhubaneswar.webp",
    badge: "BLDC Ceiling Fan",
    colors: [
      {
        name: "Honey Maplewood",
        hex: "#c68a3f",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Regulator [sweep]mm BLDC ceiling fan Honey Maplewood – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Regulator [sweep]mm BLDC ceiling fan Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3199,
        originalPrice: 5360,
      },
      {
        name: "Gloss Black",
        hex: "#141414",
        images: [
          "/allfan/Fan image 3/Atomberg Renesa Prime Regulator [sweep]mm BLDC ceiling fan Gloss Black – JC Enterprises Bhubaneswar.webp",
        ],
        price: 3199,
        originalPrice: 5360,
      },
    ],
    metaTitle: "Atomberg Renesa Prime Regulator 600mm – Buy Online Bhubaneswar",
    metaDescription:
      "Order the Atomberg Renesa Prime Regulator 600mm in Honey Maplewood and Gloss White online in Bhubaneswar, regulator control. Genuine, home delivery – JC Enterprises.",
    description:
      "Pairs BLDC energy efficiency with a traditional regulator-based speed control, for buyers who prefer a wall-mounted regulator over a remote or app. Available across four sweep sizes.",
    features: [
      "Genuine Atomberg BLDC fan",
      "Traditional regulator speed control",
      "Available in 600mm, 900mm, 1200mm, 1400mm sweep",
      "Honey Maplewood and gloss colour options",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "600mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Gloss Black / Gloss White / Honey Maplewood",
      "Control Type (Smart App / Remote / Regulator)": "Regulator",
    },
  },

  {
    id: 53,
    name: "Studio+ Smart",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Designer Fan",
    price: 5799,
    originalPrice: 9200,
    discount: 37,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Studio+ Smart 1200mm designer ceiling fan in Earth Brown – JC Enterprises Bhubaneswar.webp",
    badge: "Designer Fan",
    colors: [
      {
        name: "Earth Brown",
        hex: "#5b3a26",
        images: [
          "/allfan/Fan image 3/Atomberg Studio+ Smart 1200mm designer ceiling fan in Earth Brown – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Marble White",
        hex: "#f2f0ec",
        images: [
          "/allfan/Fan image 3/Atomberg Studio+ Smart 1200mm designer ceiling fan in Marble White – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Studio+ Smart – Buy Online Bhubaneswar",
    metaDescription:
      "Order the Atomberg Studio+ Smart online in Bhubaneswar: 1200mm sweep in Earth Brown and Marble White with Smart App control. Genuine, home delivery – JC Enterprises.",
    description:
      "A 1200mm designer BLDC ceiling fan with full app and remote control, offered in Earth Brown and Marble White finishes — smart features with a clean, understated look for living rooms and premium bedrooms.",
    features: [
      "Genuine Atomberg designer smart fan",
      "App + remote controlled",
      "1200mm sweep",
      "Earth Brown and Marble White finishes",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "1200mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Earth Brown / Marble White",
      "Control Type (Smart App / Remote / Regulator)": "Smart",
    },
  },

  {
    id: 54,
    name: "Studio+ 1200mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Designer Fan",
    price: 5399,
    originalPrice: 8400,
    discount: 36,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Studio+ [sweep]mm designer ceiling fan in Aegean Blue – JC Enterprises Bhubaneswar.webp",
    badge: "Designer Fan",
    colors: [
      {
        name: "Earth Brown",
        hex: "#5b3a26",
        images: [
          "/allfan/Fan image 3/Atomberg Studio+ [sweep]mm designer ceiling fan in Earth Brown – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Marble White",
        hex: "#f2f0ec",
        images: [
          "/allfan/Fan image 3/Atomberg Studio+ [sweep]mm designer ceiling fan in Marble White – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Sand Grey",
        hex: "#9a9a92",
        images: [
          "/allfan/Fan image 3/Atomberg Studio+ [sweep]mm designer ceiling fan in Sand Grey – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Aegean Blue",
        hex: "#2f5d78",
        images: [
          "/allfan/Fan image 3/Atomberg Studio+ [sweep]mm designer ceiling fan in Aegean Blue – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Onyx Black",
        hex: "#181818",
        images: [
          "/allfan/Fan image 3/Atomberg Studio+ [sweep]mm designer ceiling fan in Onyx Black – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Marble White with Teakwood",
        hex: "#c9b79c",
        images: [
          "/allfan/Fan image 3/Atomberg Studio+ [sweep]mm designer ceiling fan in Marble White with Teak wood – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Studio+ 1200mm – Buy Online Bhubaneswar",
    metaDescription:
      "Get the Atomberg Studio+ 1200mm online in Bhubaneswar, finished in Earth Brown and Marble White with remote control. Genuine, home delivery – JC Enterprises.",
    description:
      "A remote-controlled designer BLDC ceiling fan available in 1200mm and 950mm sweeps, with a wide colour range for buyers who want the Studio design language without Smart app control.",
    features: [
      "Genuine Atomberg designer fan",
      "Remote controlled",
      "Available in 950mm and 1200mm sweep",
      "Wide colour range including Aegean Blue, Onyx Black",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "1200mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color:
        "Aegean Blue / Earth Brown / Marble White / Marble White with Teakwood / Onyx Black / Sand Grey",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 55,
    name: "Studio+ 950mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Designer Fan",
    price: 5250,
    originalPrice: 8400,
    discount: 38,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Studio+ [sweep]mm designer ceiling fan in Marble White with Teak wood – JC Enterprises Bhubaneswar.webp",
    badge: "Designer Fan",
    colors: [
      {
        name: "Earth Brown",
        hex: "#5b3a26",
        images: [
          "/allfan/Fan image 3/Atomberg Studio+ [sweep]mm designer ceiling fan in Earth Brown – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Marble White",
        hex: "#f2f0ec",
        images: [
          "/allfan/Fan image 3/Atomberg Studio+ [sweep]mm designer ceiling fan in Marble White – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Sand Grey",
        hex: "#9a9a92",
        images: [
          "/allfan/Fan image 3/Atomberg Studio+ [sweep]mm designer ceiling fan in Sand Grey – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Studio+ 950mm – Buy Online Bhubaneswar",
    metaDescription:
      "Atomberg's Studio+ 950mm — Earth Brown, Marble White and more shades with remote control — is now online in Bhubaneswar. Genuine, home delivery – JC Enterprises.",
    description:
      "A remote-controlled designer BLDC ceiling fan available in 1200mm and 950mm sweeps, with a wide colour range for buyers who want the Studio design language without Smart app control.",
    features: [
      "Genuine Atomberg designer fan",
      "Remote controlled",
      "Available in 950mm and 1200mm sweep",
      "Wide colour range including Aegean Blue, Onyx Black",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "950mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Earth Brown / Marble White / Sand Grey",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 56,
    name: "Studio Nexus 1400mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Designer Fan",
    price: 5699,
    originalPrice: 9600,
    discount: 41,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Studio Nexus [sweep]mm BLDC ceiling fan Pebble Grey – JC Enterprises Bhubaneswar.webp",
    badge: "Designer Fan",
    colors: [
      {
        name: "Dark Walnut",
        hex: "#4a2f22",
        images: [
          "/allfan/Fan image 3/Atomberg Studio Nexus [sweep]mm BLDC ceiling fan Dark Wallnut – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Rose Gold",
        hex: "#caa08a",
        images: [
          "/allfan/Fan image 3/Atomberg Studio Nexus [sweep]mm BLDC ceiling fan Rose Gold – JC Enterprises Bhubaneswar.webp",
        ],
        price: 5199,
        originalPrice: 8700,
      },
      {
        name: "Regal Indigo",
        hex: "#3b3a6e",
        images: [
          "/allfan/Fan image 3/Atomberg Studio Nexus [sweep]mm BLDC ceiling fan Regal Indigo – JC Enterprises Bhubaneswar.webp",
        ],
        price: 5199,
        originalPrice: 8700,
      },
      {
        name: "Ritz Blue",
        hex: "#274472",
        images: [
          "/allfan/Fan image 3/Atomberg Studio Nexus [sweep]mm BLDC ceiling fan Ritz Blue – JC Enterprises Bhubaneswar.webp",
        ],
        price: 5199,
        originalPrice: 8700,
      },
      {
        name: "Pearl White",
        hex: "#f5f5f4",
        images: [
          "/allfan/Fan image 3/Atomberg Studio Nexus [sweep]mm BLDC ceiling fan Pearl White – JC Enterprises Bhubaneswar.webp",
        ],
        price: 5199,
        originalPrice: 8700,
      },
    ],
    metaTitle: "Atomberg Studio Nexus 1400mm – Buy Online Bhubaneswar",
    metaDescription:
      "Now available online in Bhubaneswar: the Atomberg Studio Nexus 1400mm in Dark Walnut and Rose Gold with Smart App control. Genuine, home delivery – JC Enterprises.",
    description:
      "A premium designer BLDC fan spanning 1400mm, 1200mm and 900mm sweeps, in both app-controlled Smart versions and a remote-only variant — built for living rooms wanting a large, statement-making fan with smart-home integration.",
    features: [
      "Genuine Atomberg designer fan, Smart and Remote versions",
      "App + remote controlled on Smart variants",
      "Available in 900mm, 1200mm, 1400mm sweep",
      "Premium finishes including Dark Walnut, Rose Gold",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "1400mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Dark Walnut / Pearl White / Regal Indigo / Ritz Blue / Rose Gold",
      "Control Type (Smart App / Remote / Regulator)": "Smart",
    },
  },

  {
    id: 57,
    name: "Studio Nexus 1200mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Designer Fan",
    price: 5499,
    originalPrice: 9300,
    discount: 41,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Studio Nexus [sweep]mm BLDC ceiling fan Dark Wallnut – JC Enterprises Bhubaneswar.webp",
    badge: "Designer Fan",
    colors: [
      {
        name: "Dark Walnut",
        hex: "#4a2f22",
        images: [
          "/allfan/Fan image 3/Atomberg Studio Nexus [sweep]mm BLDC ceiling fan Dark Wallnut – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Rose Gold",
        hex: "#caa08a",
        images: [
          "/allfan/Fan image 3/Atomberg Studio Nexus [sweep]mm BLDC ceiling fan Rose Gold – JC Enterprises Bhubaneswar.webp",
        ],
        price: 4999,
        originalPrice: 8400,
      },
      {
        name: "Regal Indigo",
        hex: "#3b3a6e",
        images: [
          "/allfan/Fan image 3/Atomberg Studio Nexus [sweep]mm BLDC ceiling fan Regal Indigo – JC Enterprises Bhubaneswar.webp",
        ],
        price: 4999,
        originalPrice: 8400,
      },
      {
        name: "Ritz Blue",
        hex: "#274472",
        images: [
          "/allfan/Fan image 3/Atomberg Studio Nexus [sweep]mm BLDC ceiling fan Ritz Blue – JC Enterprises Bhubaneswar.webp",
        ],
        price: 4999,
        originalPrice: 8400,
      },
      {
        name: "Pearl White",
        hex: "#f5f5f4",
        images: [
          "/allfan/Fan image 3/Atomberg Studio Nexus [sweep]mm BLDC ceiling fan Pearl White – JC Enterprises Bhubaneswar.webp",
        ],
        price: 4999,
        originalPrice: 8400,
      },
      {
        name: "Blaze Brown",
        hex: "#6e3d25",
        images: [
          "/allfan/Fan image 3/Atomberg Studio Nexus [sweep]mm BLDC ceiling fan Blaze Brown – JC Enterprises Bhubaneswar.webp",
        ],
        price: 4499,
        originalPrice: 7500,
      },
      {
        name: "Midnight Black",
        hex: "#161616",
        images: [
          "/allfan/Fan image 3/Atomberg Studio Nexus [sweep]mm BLDC ceiling fan Midnight Black – JC Enterprises Bhubaneswar.webp",
        ],
        price: 4499,
        originalPrice: 7500,
      },
      {
        name: "Pebble Grey",
        hex: "#b0aea6",
        images: [
          "/allfan/Fan image 3/Atomberg Studio Nexus [sweep]mm BLDC ceiling fan Pebble Grey – JC Enterprises Bhubaneswar.webp",
        ],
        price: 4499,
        originalPrice: 7500,
      },
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 3/Atomberg Studio Nexus [sweep]mm BLDC ceiling fan Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
        price: 4499,
        originalPrice: 7500,
      },
    ],
    metaTitle: "Atomberg Studio Nexus 1200mm – Buy Online Bhubaneswar",
    metaDescription:
      "Pick the Atomberg Studio Nexus 1200mm in Dark Walnut and Rose Gold with Smart App & remote control, online in Bhubaneswar. Genuine, home delivery – JC Enterprises.",
    description:
      "A premium designer BLDC fan spanning 1400mm, 1200mm and 900mm sweeps, in both app-controlled Smart versions and a remote-only variant — built for living rooms wanting a large, statement-making fan with smart-home integration.",
    features: [
      "Genuine Atomberg designer fan, Smart and Remote versions",
      "App + remote controlled on Smart variants",
      "Available in 900mm, 1200mm, 1400mm sweep",
      "Premium finishes including Dark Walnut, Rose Gold",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "1200mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color:
        "Blaze Brown / Dark Walnut / Gloss White / Midnight Black / Pearl White / Pebble Grey / Regal Indigo / Ritz Blue / Rose Gold",
      "Control Type (Smart App / Remote / Regulator)": "Remote/Smart",
    },
  },

  {
    id: 58,
    name: "Studio Nexus 900mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Designer Fan",
    price: 5249,
    originalPrice: 9000,
    discount: 42,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Studio Nexus [sweep]mm BLDC ceiling fan Rose Gold – JC Enterprises Bhubaneswar.webp",
    badge: "Designer Fan",
    colors: [
      {
        name: "Dark Walnut",
        hex: "#4a2f22",
        images: [
          "/allfan/Fan image 3/Atomberg Studio Nexus [sweep]mm BLDC ceiling fan Dark Wallnut – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Rose Gold",
        hex: "#caa08a",
        images: [
          "/allfan/Fan image 3/Atomberg Studio Nexus [sweep]mm BLDC ceiling fan Rose Gold – JC Enterprises Bhubaneswar.webp",
        ],
        price: 4849,
        originalPrice: 8100,
      },
      {
        name: "Regal Indigo",
        hex: "#3b3a6e",
        images: [
          "/allfan/Fan image 3/Atomberg Studio Nexus [sweep]mm BLDC ceiling fan Regal Indigo – JC Enterprises Bhubaneswar.webp",
        ],
        price: 4849,
        originalPrice: 8100,
      },
      {
        name: "Ritz Blue",
        hex: "#274472",
        images: [
          "/allfan/Fan image 3/Atomberg Studio Nexus [sweep]mm BLDC ceiling fan Ritz Blue – JC Enterprises Bhubaneswar.webp",
        ],
        price: 4849,
        originalPrice: 8100,
      },
      {
        name: "Pearl White",
        hex: "#f5f5f4",
        images: [
          "/allfan/Fan image 3/Atomberg Studio Nexus [sweep]mm BLDC ceiling fan Pearl White – JC Enterprises Bhubaneswar.webp",
        ],
        price: 4849,
        originalPrice: 8100,
      },
    ],
    metaTitle: "Atomberg Studio Nexus 900mm – Buy Online Bhubaneswar",
    metaDescription:
      "Buy the Atomberg Studio Nexus 900mm online in Bhubaneswar in Dark Walnut, Rose Gold and more shades with Smart App control. Genuine, home delivery – JC Enterprises.",
    description:
      "A premium designer BLDC fan spanning 1400mm, 1200mm and 900mm sweeps, in both app-controlled Smart versions and a remote-only variant — built for living rooms wanting a large, statement-making fan with smart-home integration.",
    features: [
      "Genuine Atomberg designer fan, Smart and Remote versions",
      "App + remote controlled on Smart variants",
      "Available in 900mm, 1200mm, 1400mm sweep",
      "Premium finishes including Dark Walnut, Rose Gold",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "900mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Dark Walnut / Pearl White / Regal Indigo / Ritz Blue / Rose Gold",
      "Control Type (Smart App / Remote / Regulator)": "Smart",
    },
  },

  {
    id: 59,
    name: "Studio Ventra",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Designer Fan",
    price: 4499,
    originalPrice: 7770,
    discount: 42,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Studio Ventra 1250mm BLDC ceiling fan in Creme Brulle – JC Enterprises Bhubaneswar.webp",
    badge: "Designer Fan",
    colors: [
      {
        name: "Crème Brulee",
        hex: "#e3b778",
        images: [
          "/allfan/Fan image 3/Atomberg Studio Ventra 1250mm BLDC ceiling fan in Creme Brulle – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Snow White",
        hex: "#fbfbf9",
        images: [
          "/allfan/Fan image 3/Atomberg Studio Ventra 1250mm BLDC ceiling fan in Snow White – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Urban Chrome",
        hex: "#9fa3a6",
        images: [
          "/allfan/Fan image 3/Atomberg Studio Ventra 1250mm BLDC ceiling fan in Urban Chrome – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Blaze Brown",
        hex: "#6e3d25",
        images: [
          "/allfan/Fan image 3/Atomberg Studio Ventra 1250mm BLDC ceiling fan in Blaze Brown – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Studio Ventra – Buy Online Bhubaneswar",
    metaDescription:
      "Shop the Atomberg Studio Ventra online in Bhubaneswar — 1250mm sweep, Crème Brulee and Snow White with remote control. Genuine, home delivery – JC Enterprises.",
    description:
      "A slightly larger 1250mm sweep with a remote-controlled BLDC motor, in distinctive finishes that stand apart from the more common wood and gloss-black options.",
    features: [
      "Genuine Atomberg designer fan",
      "Remote controlled",
      "1250mm sweep",
      "Distinctive finishes: Crème Brulee, Urban Chrome",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "1250mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Blaze Brown / Crème Brulee / Snow White / Urban Chrome",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 60,
    name: "Erica Nuvo Remote",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Designer Fan",
    price: 4399,
    originalPrice: 7700,
    discount: 43,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Erica Nuvo 1200mm BLDC ceiling fan with remote in Aegean Blue – JC Enterprises Bhubaneswar.webp",
    badge: "Designer Fan",
    colors: [
      {
        name: "Umber Brown",
        hex: "#5c3a21",
        images: [
          "/allfan/Fan image 3/Atomberg Erica Nuvo 1200mm BLDC ceiling fan with remote in Umber Brown – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Aegean Blue",
        hex: "#2f5d78",
        images: [
          "/allfan/Fan image 3/Atomberg Erica Nuvo 1200mm BLDC ceiling fan with remote in Aegean Blue – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Erica Nuvo Remote – Buy Online Bhubaneswar",
    metaDescription:
      "Shop Atomberg Erica Nuvo Remote in Umber Brown and Aegean Blue online in Bhubaneswar, remote control. Genuine, home delivery – JC Enterprises.",
    description:
      "A 1200mm BLDC ceiling fan in warm, distinctive colour choices for buyers who want their fan to complement a specific interior palette. Remote controlled for simple everyday use.",
    features: [
      "Genuine Atomberg designer fan",
      "Remote controlled",
      "1200mm sweep",
      "Umber Brown, Aegean Blue finishes",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "1200mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Aegean Blue / Umber Brown",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 61,
    name: "Erica Nuvo Regulator",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Designer Fan",
    price: 4047,
    originalPrice: 7100,
    discount: 43,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Erica Nuvo 1200mm BLDC ceiling fan with regulator in Lotus Pink – JC Enterprises Bhubaneswar.webp",
    badge: "Designer Fan",
    colors: [
      {
        name: "Midnight Black",
        hex: "#161616",
        images: [
          "/allfan/Fan image 3/Atomberg Erica Nuvo 1200mm BLDC ceiling fan with regulator in Midnight Black – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Lotus Pink",
        hex: "#e3a6b3",
        images: [
          "/allfan/Fan image 3/Atomberg Erica Nuvo 1200mm BLDC ceiling fan with regulator in Lotus Pink – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Snow White",
        hex: "#fbfbf9",
        images: [
          "/allfan/Fan image 3/Atomberg Erica Nuvo 1200mm BLDC ceiling fan with regulator in Snow White – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Erica Nuvo Regulator – Buy Online Bhubaneswar",
    metaDescription:
      "Order the Atomberg Erica Nuvo Regulator in Midnight Black and Lotus Pink online in Bhubaneswar, regulator control. Genuine, home delivery – JC Enterprises.",
    description:
      "Pairs the same 1200mm BLDC fan body with a traditional wall regulator, in Midnight Black, Lotus Pink and Snow White finishes — Lotus Pink being a distinctive choice for buyers wanting a softer accent colour.",
    features: [
      "Genuine Atomberg designer fan",
      "Regulator speed control",
      "1200mm sweep",
      "Midnight Black, Lotus Pink, Snow White finishes",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "1200mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Lotus Pink / Midnight Black / Snow White",
      "Control Type (Smart App / Remote / Regulator)": "Regulator",
    },
  },

  {
    id: 62,
    name: "Erica Signature",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Designer Fan",
    price: 3699,
    originalPrice: 6250,
    discount: 41,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Erica Signature 1230mm BLDC ceiling fan with regulator in Blaze Brown – JC Enterprises Bhubaneswar.webp",
    badge: "Designer Fan",
    colors: [
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 3/Atomberg Erica Signature 1230mm BLDC ceiling fan with regulator in Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Midnight Black",
        hex: "#161616",
        images: [
          "/allfan/Fan image 3/Atomberg Erica Signature 1230mm BLDC ceiling fan with regulator in Midnight Black – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "SS Ivory",
        hex: "#eee3cc",
        images: [
          "/allfan/Fan image 3/Atomberg Erica Signature 1230mm BLDC ceiling fan with regulator in SS Ivory – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Blaze Brown",
        hex: "#6e3d25",
        images: [
          "/allfan/Fan image 3/Atomberg Erica Signature 1230mm BLDC ceiling fan with regulator in Blaze Brown – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Erica Signature – Buy Online Bhubaneswar",
    metaDescription:
      "Buy Atomberg Erica Signature online in Bhubaneswar, Gloss White and Midnight Black with regulator control. Genuine, home delivery – JC Enterprises.",
    description:
      "A 1230mm BLDC ceiling fan with regulator control — a dependable, mid-range option in the Erica family for buyers who prefer regulator control over remote or app.",
    features: [
      "Genuine Atomberg designer fan",
      "Regulator speed control",
      "1230mm sweep",
      "Gloss White, Midnight Black, SS Ivory, Blaze Brown finishes",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "1230mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Blaze Brown / Gloss White / Midnight Black / SS Ivory",
      "Control Type (Smart App / Remote / Regulator)": "Regulator",
    },
  },

  {
    id: 63,
    name: "Erica Meta",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Designer Fan",
    price: 3499,
    originalPrice: 5900,
    discount: 41,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Erica Meta 1230mm BLDC ceiling fan with remote in Midnight Black – JC Enterprises Bhubaneswar.webp",
    badge: "Designer Fan",
    colors: [
      {
        name: "Midnight Black",
        hex: "#161616",
        images: [
          "/allfan/Fan image 3/Atomberg Erica Meta 1230mm BLDC ceiling fan with remote in Midnight Black – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Blaze Brown",
        hex: "#6e3d25",
        images: [
          "/allfan/Fan image 3/Atomberg Erica Meta 1230mm BLDC ceiling fan with remote in Blaze Brown – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "SS Ivory",
        hex: "#eee3cc",
        images: [
          "/allfan/Fan image 3/Atomberg Erica Meta 1230mm BLDC ceiling fan with remote in SS Ivory – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 3/Atomberg Erica Meta 1230mm BLDC ceiling fan with remote in Gloss white – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Erica Meta – Buy Online Bhubaneswar",
    metaDescription:
      "Atomberg's Erica Meta — 1230mm sweep, Midnight Black and Blaze Brown with remote control — is now online in Bhubaneswar. Genuine, home delivery – JC Enterprises.",
    description:
      "A remote-controlled 1230mm BLDC ceiling fan — a straightforward, well-priced option in the Erica range for everyday bedrooms and living spaces.",
    features: [
      "Genuine Atomberg designer fan",
      "Remote controlled",
      "1230mm sweep",
      "Midnight Black, Blaze Brown, SS Ivory, Gloss White finishes",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "1230mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Blaze Brown / Gloss White / Midnight Black / SS Ivory",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 64,
    name: "Erica Artesia",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Designer Fan",
    price: 3499,
    originalPrice: 5900,
    discount: 41,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 3/Atomberg Erica Artesia 1230mm BLDC ceiling fan with remote in Blaze Brown – JC Enterprises Bhubaneswar.webp",
    badge: "Designer Fan",
    colors: [
      {
        name: "Midnight Black",
        hex: "#161616",
        images: [
          "/allfan/Fan image 3/Atomberg Erica Artesia 1230mm BLDC ceiling fan with remote in Midnight Black – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Blaze Brown",
        hex: "#6e3d25",
        images: [
          "/allfan/Fan image 3/Atomberg Erica Artesia 1230mm BLDC ceiling fan with remote in Blaze Brown – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "SS Ivory",
        hex: "#eee3cc",
        images: [
          "/allfan/Fan image 3/Atomberg Erica Artesia 1230mm BLDC ceiling fan with remote in SS Ivory – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 3/Atomberg Erica Artesia 1230mm BLDC ceiling fan with remote in Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Erica Artesia – Buy Online Bhubaneswar",
    metaDescription:
      "Order the Atomberg Erica Artesia in Midnight Black and Blaze Brown online in Bhubaneswar, remote control. Genuine, home delivery – JC Enterprises.",
    description:
      "Shares the same 1230mm sweep and remote control as the Erica Meta, offering an alternate blade and body styling within the same Erica price bracket.",
    features: [
      "Genuine Atomberg designer fan",
      "Remote controlled",
      "1230mm sweep",
      "Midnight Black, Blaze Brown, SS Ivory, Gloss White finishes",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "1230mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Blaze Brown / Gloss White / Midnight Black / SS Ivory",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 65,
    name: "Erica Viso",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Designer Fan",
    price: 3499,
    originalPrice: 5900,
    discount: 41,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 4/Atomberg Erica Viso 1230mm BLDC ceiling fan with remote in Gloss White – JC Enterprises Bhubaneswar.webp",
    badge: "Designer Fan",
    colors: [
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 4/Atomberg Erica Viso 1230mm BLDC ceiling fan with remote in Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Midnight Black",
        hex: "#161616",
        images: [
          "/allfan/Fan image 4/Atomberg Erica Viso 1230mm BLDC ceiling fan with remote in Midnight Black – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "SS Ivory",
        hex: "#eee3cc",
        images: [
          "/allfan/Fan image 4/Atomberg Erica Viso 1230mm BLDC ceiling fan with remote in SS Ivory– JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Blaze Brown",
        hex: "#6e3d25",
        images: [
          "/allfan/Fan image 4/Atomberg Erica Viso 1230mm BLDC ceiling fan with remote in Blaze Brown – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Erica Viso – Buy Online Bhubaneswar",
    metaDescription:
      "Pick the Atomberg Erica Viso in Gloss White and Midnight Black with remote control, 1230mm sweep, online in Bhubaneswar. Genuine, home delivery – JC Enterprises.",
    description:
      "Completes the Erica trio at a 1230mm sweep with remote control, giving buyers a third styling choice within the same specs and price point as the Meta and Artesia.",
    features: [
      "Genuine Atomberg designer fan",
      "Remote controlled",
      "1230mm sweep",
      "Gloss White, Midnight Black, SS Ivory, Blaze Brown finishes",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "1230mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Blaze Brown / Gloss White / Midnight Black / SS Ivory",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 66,
    name: "Efficio Prime 1400mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Classic Fan",
    price: 3386,
    originalPrice: 5900,
    discount: 43,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 4/Atomberg Efficio Prime [sweep]mm BLDC ceiling fan with remote in Blaze Brown – JC Enterprises Bhubaneswar.webp",
    badge: "Classic Fan",
    colors: [
      {
        name: "Blaze Brown",
        hex: "#6e3d25",
        images: [
          "/allfan/Fan image 4/Atomberg Efficio Prime [sweep]mm BLDC ceiling fan with remote in Blaze Brown – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 4/Atomberg Efficio Prime [sweep]mm BLDC ceiling fan with remote in Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Efficio Prime 1400mm – Buy Online Bhubaneswar",
    metaDescription:
      "Buy the Atomberg Efficio Prime 1400mm online in Bhubaneswar in Blaze Brown and Gloss White with remote control. Genuine, home delivery – JC Enterprises.",
    description:
      "A classic-styled, remote-controlled BLDC ceiling fan available across three sweep sizes — a dependable everyday fan for buyers who want Atomberg's energy savings in a familiar, no-frills design.",
    features: [
      "Genuine Atomberg classic BLDC fan",
      "Remote controlled",
      "Available in 900mm, 1200mm, 1400mm sweep",
      "Blaze Brown, Gloss White, Midnight Black, SS Ivory finishes",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "1400mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Blaze Brown / Gloss White",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 67,
    name: "Efficio Prime 1200mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Classic Fan",
    price: 3300,
    originalPrice: 5500,
    discount: 40,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 4/Atomberg Efficio Prime [sweep]mm BLDC ceiling fan with remote in Gloss White – JC Enterprises Bhubaneswar.webp",
    badge: "Classic Fan",
    colors: [
      {
        name: "Midnight Black",
        hex: "#161616",
        images: [
          "/allfan/Fan image 4/Atomberg Efficio Prime [sweep]mm BLDC ceiling fan with remote in Midnight Black – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Blaze Brown",
        hex: "#6e3d25",
        images: [
          "/allfan/Fan image 4/Atomberg Efficio Prime [sweep]mm BLDC ceiling fan with remote in Blaze Brown – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "SS Ivory",
        hex: "#eee3cc",
        images: [
          "/allfan/Fan image 4/Atomberg Efficio Prime [sweep]mm BLDC ceiling fan with remote in SS Ivory – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 4/Atomberg Efficio Prime [sweep]mm BLDC ceiling fan with remote in Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Efficio Prime 1200mm – Buy Online Bhubaneswar",
    metaDescription:
      "Shop the Atomberg Efficio Prime 1200mm online in Bhubaneswar, offered in Midnight Black and Blaze Brown with remote control. Genuine, home delivery – JC Enterprises.",
    description:
      "A classic-styled, remote-controlled BLDC ceiling fan available across three sweep sizes — a dependable everyday fan for buyers who want Atomberg's energy savings in a familiar, no-frills design.",
    features: [
      "Genuine Atomberg classic BLDC fan",
      "Remote controlled",
      "Available in 900mm, 1200mm, 1400mm sweep",
      "Blaze Brown, Gloss White, Midnight Black, SS Ivory finishes",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "1200mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Blaze Brown / Gloss White / Midnight Black / SS Ivory",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 68,
    name: "Efficio Prime 900mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Classic Fan",
    price: 3036,
    originalPrice: 5420,
    discount: 44,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 4/Atomberg Efficio Prime [sweep]mm BLDC ceiling fan with remote in SS Ivory – JC Enterprises Bhubaneswar.webp",
    badge: "Classic Fan",
    colors: [
      {
        name: "Blaze Brown",
        hex: "#6e3d25",
        images: [
          "/allfan/Fan image 4/Atomberg Efficio Prime [sweep]mm BLDC ceiling fan with remote in Blaze Brown – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 4/Atomberg Efficio Prime [sweep]mm BLDC ceiling fan with remote in Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Efficio Prime 900mm – Buy Online Bhubaneswar",
    metaDescription:
      "The Atomberg Efficio Prime 900mm is available online in Bhubaneswar in Blaze Brown and Gloss White with remote control. Genuine, home delivery – JC Enterprises.",
    description:
      "A classic-styled, remote-controlled BLDC ceiling fan available across three sweep sizes — a dependable everyday fan for buyers who want Atomberg's energy savings in a familiar, no-frills design.",
    features: [
      "Genuine Atomberg classic BLDC fan",
      "Remote controlled",
      "Available in 900mm, 1200mm, 1400mm sweep",
      "Blaze Brown, Gloss White, Midnight Black, SS Ivory finishes",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "900mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Blaze Brown / Gloss White",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 69,
    name: "Efficio Prime Regulator 1400mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Classic Fan",
    price: 3400,
    originalPrice: 5900,
    discount: 42,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 4/Atomberg Efficio Prime [sweep]mm BLDC ceiling fan with remote in Blaze Brown – JC Enterprises Bhubaneswar.webp",
    badge: "Classic Fan",
    colors: [
      {
        name: "Blaze Brown",
        hex: "#6e3d25",
        images: [
          "/allfan/Fan image 4/Atomberg Efficio Prime [sweep]mm BLDC ceiling fan with remote in Blaze Brown – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 4/Atomberg Efficio Prime [sweep]mm BLDC ceiling fan with remote in Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Efficio Prime Regulator 1400mm – Buy Online Bhubaneswar",
    metaDescription:
      "Order the Atomberg Efficio Prime Regulator 1400mm online in Bhubaneswar in Blaze Brown and Gloss White with regulator control. Genuine, home delivery – JC Enterprises.",
    description:
      "Offers the same classic body and colour range with traditional regulator speed control instead of remote — a good fit for buyers replacing an older regulator-based fan with a BLDC upgrade.",
    features: [
      "Genuine Atomberg classic BLDC fan",
      "Regulator speed control",
      "Available in 900mm, 1200mm, 1400mm sweep",
      "Blaze Brown, Gloss White, Midnight Black, SS Ivory finishes",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "1400mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Blaze Brown / Gloss White",
      "Control Type (Smart App / Remote / Regulator)": "Regulator",
    },
  },

  {
    id: 70,
    name: "Efficio Prime Regulator 1200mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Classic Fan",
    price: 3199,
    originalPrice: 5500,
    discount: 42,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 4/Atomberg Efficio Prime [sweep]mm BLDC ceiling fan with remote in Midnight Black – JC Enterprises Bhubaneswar.webp",
    badge: "Classic Fan",
    colors: [
      {
        name: "Midnight Black",
        hex: "#161616",
        images: [
          "/allfan/Fan image 4/Atomberg Efficio Prime [sweep]mm BLDC ceiling fan with remote in Midnight Black – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Blaze Brown",
        hex: "#6e3d25",
        images: [
          "/allfan/Fan image 4/Atomberg Efficio Prime [sweep]mm BLDC ceiling fan with remote in Blaze Brown – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "SS Ivory",
        hex: "#eee3cc",
        images: [
          "/allfan/Fan image 4/Atomberg Efficio Prime [sweep]mm BLDC ceiling fan with remote in SS Ivory – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 4/Atomberg Efficio Prime [sweep]mm BLDC ceiling fan with remote in Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Efficio Prime Regulator 1200mm – Buy Online Bhubaneswar",
    metaDescription:
      "Order the Atomberg Efficio Prime Regulator 1200mm in Midnight Black and Blaze Brown online in Bhubaneswar, regulator control. Genuine, home delivery – JC Enterprises.",
    description:
      "Offers the same classic body and colour range with traditional regulator speed control instead of remote — a good fit for buyers replacing an older regulator-based fan with a BLDC upgrade.",
    features: [
      "Genuine Atomberg classic BLDC fan",
      "Regulator speed control",
      "Available in 900mm, 1200mm, 1400mm sweep",
      "Blaze Brown, Gloss White, Midnight Black, SS Ivory finishes",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "1200mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Blaze Brown / Gloss White / Midnight Black / SS Ivory",
      "Control Type (Smart App / Remote / Regulator)": "Regulator",
    },
  },

  {
    id: 71,
    name: "Efficio Prime Regulator 900mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Classic Fan",
    price: 3050,
    originalPrice: 5090,
    discount: 40,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 4/Atomberg Efficio Prime [sweep]mm BLDC ceiling fan with remote in Blaze Brown – JC Enterprises Bhubaneswar.webp",
    badge: "Classic Fan",
    colors: [
      {
        name: "Blaze Brown",
        hex: "#6e3d25",
        images: [
          "/allfan/Fan image 4/Atomberg Efficio Prime [sweep]mm BLDC ceiling fan with remote in Blaze Brown – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 4/Atomberg Efficio Prime [sweep]mm BLDC ceiling fan with remote in Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Efficio Prime Regulator 900mm – Buy Online Bhubaneswar",
    metaDescription:
      "Atomberg's Efficio Prime Regulator 900mm — Blaze Brown and Gloss White with regulator control — is now online in Bhubaneswar. Genuine, home delivery – JC Enterprises.",
    description:
      "Offers the same classic body and colour range with traditional regulator speed control instead of remote — a good fit for buyers replacing an older regulator-based fan with a BLDC upgrade.",
    features: [
      "Genuine Atomberg classic BLDC fan",
      "Regulator speed control",
      "Available in 900mm, 1200mm, 1400mm sweep",
      "Blaze Brown, Gloss White, Midnight Black, SS Ivory finishes",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "900mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Blaze Brown / Gloss White",
      "Control Type (Smart App / Remote / Regulator)": "Regulator",
    },
  },

  {
    id: 72,
    name: "Ikano Stylique",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Classic Fan",
    price: 3149,
    originalPrice: 5360,
    discount: 41,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 4/Atomberg Ikano Stylique 1200mm BLDC ceiling fan with remote in Pebble Grey – JC Enterprises Bhubaneswar.webp",
    badge: "Classic Fan",
    colors: [
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 4/Atomberg Ikano Stylique 1200mm BLDC ceiling fan with remote in Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss Black",
        hex: "#141414",
        images: [
          "/allfan/Fan image 4/Atomberg Ikano Stylique 1200mm BLDC ceiling fan with remote in Gloss Black – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Pebble Grey",
        hex: "#b0aea6",
        images: [
          "/allfan/Fan image 4/Atomberg Ikano Stylique 1200mm BLDC ceiling fan with remote in Pebble Grey – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Seasand Ivory",
        hex: "#f0e6d2",
        images: [
          "/allfan/Fan image 4/Atomberg Ikano Stylique 1200mm BLDC ceiling fan with remote in Sea Sand Ivory – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Ikano Stylique – Buy Online Bhubaneswar",
    metaDescription:
      "Shop Atomberg Ikano Stylique in Gloss White and Gloss Black online in Bhubaneswar, remote control. Genuine, home delivery – JC Enterprises.",
    description:
      "A 1200mm remote-controlled BLDC ceiling fan sitting in Atomberg's Classic Fans range as an accessible entry point into BLDC energy savings.",
    features: [
      "Genuine Atomberg classic BLDC fan",
      "Remote controlled",
      "1200mm sweep",
      "Gloss White, Gloss Black, Pebble Grey, Seasand Ivory finishes",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "1200mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Gloss Black / Gloss White / Pebble Grey / Seasand Ivory",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 73,
    name: "Ikano 1400mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Classic Fan",
    price: 3149,
    originalPrice: 5500,
    discount: 43,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 4/Atomberg Ikano [sweep]mm BLDC ceiling fan with remote in Gloss Black – JC Enterprises Bhubaneswar.webp",
    badge: "Classic Fan",
    colors: [
      {
        name: "Gloss Black",
        hex: "#141414",
        images: [
          "/allfan/Fan image 4/Atomberg Ikano [sweep]mm BLDC ceiling fan with remote in Gloss Black – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss Brown",
        hex: "#4a2f1e",
        images: [
          "/allfan/Fan image 4/Atomberg Ikano [sweep]mm BLDC ceiling fan with remote in Gloss Brown – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 4/Atomberg Ikano [sweep]mm BLDC ceiling fan with remote in Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Ikano 1400mm – Buy Online Bhubaneswar",
    metaDescription:
      "Pick the Atomberg Ikano 1400mm in Gloss Black, Gloss Brown and more shades with remote control, online in Bhubaneswar. Genuine, home delivery – JC Enterprises.",
    description:
      "The most accessible fan in the Classic range, spanning four sweep sizes from a compact 650mm bedroom fan up to a full 1400mm size — a practical, budget-friendly way to bring BLDC energy savings into smaller rooms.",
    features: [
      "Genuine Atomberg classic BLDC fan",
      "Remote controlled",
      "Available in 650mm, 900mm, 1200mm, 1400mm sweep",
      "Budget-friendly BLDC option",
      "Gloss Black, Gloss Brown, Gloss White, Pebble Grey, SS Ivory finishes",
    ],
    specifications: {
      "Sweep Size (mm)": "1400mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Gloss Black / Gloss Brown / Gloss White",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 74,
    name: "Ikano 1200mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Classic Fan",
    price: 2949,
    originalPrice: 4900,
    discount: 40,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 4/Atomberg Ikano [sweep]mm BLDC ceiling fan with remote in Gloss Brown – JC Enterprises Bhubaneswar.webp",
    badge: "Classic Fan",
    colors: [
      {
        name: "Gloss Black",
        hex: "#141414",
        images: [
          "/allfan/Fan image 4/Atomberg Ikano [sweep]mm BLDC ceiling fan with remote in Gloss Black – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss Brown",
        hex: "#4a2f1e",
        images: [
          "/allfan/Fan image 4/Atomberg Ikano [sweep]mm BLDC ceiling fan with remote in Gloss Brown – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 4/Atomberg Ikano [sweep]mm BLDC ceiling fan with remote in Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Pebble Grey",
        hex: "#b0aea6",
        images: [
          "/allfan/Fan image 4/Atomberg Ikano [sweep]mm BLDC ceiling fan with remote in Pebble Grey – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "SS Ivory",
        hex: "#eee3cc",
        images: [
          "/allfan/Fan image 4/Atomberg Ikano [sweep]mm BLDC ceiling fan with remote in SS Ivory – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Ikano 1200mm – Buy Online Bhubaneswar",
    metaDescription:
      "Buy the Atomberg Ikano 1200mm online in Bhubaneswar in Gloss Black, Gloss Brown and more shades with remote control. Genuine, home delivery – JC Enterprises.",
    description:
      "The most accessible fan in the Classic range, spanning four sweep sizes from a compact 650mm bedroom fan up to a full 1400mm size — a practical, budget-friendly way to bring BLDC energy savings into smaller rooms.",
    features: [
      "Genuine Atomberg classic BLDC fan",
      "Remote controlled",
      "Available in 650mm, 900mm, 1200mm, 1400mm sweep",
      "Budget-friendly BLDC option",
      "Gloss Black, Gloss Brown, Gloss White, Pebble Grey, SS Ivory finishes",
    ],
    specifications: {
      "Sweep Size (mm)": "1200mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Gloss Black / Gloss Brown / Gloss White / Pebble Grey / SS Ivory",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 75,
    name: "Ikano 900mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Classic Fan",
    price: 2799,
    originalPrice: 4900,
    discount: 43,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 4/Atomberg Ikano [sweep]mm BLDC ceiling fan with remote in Gloss Black – JC Enterprises Bhubaneswar.webp",
    badge: "Classic Fan",
    colors: [
      {
        name: "Gloss Black",
        hex: "#141414",
        images: [
          "/allfan/Fan image 4/Atomberg Ikano [sweep]mm BLDC ceiling fan with remote in Gloss Black – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss Brown",
        hex: "#4a2f1e",
        images: [
          "/allfan/Fan image 4/Atomberg Ikano [sweep]mm BLDC ceiling fan with remote in Gloss Brown – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 4/Atomberg Ikano [sweep]mm BLDC ceiling fan with remote in Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Ikano 900mm – Buy Online Bhubaneswar",
    metaDescription:
      "Shop the Atomberg Ikano 900mm online in Bhubaneswar, offered in Gloss Black, Gloss Brown and more shades with remote control. Genuine, home delivery – JC Enterprises.",
    description:
      "The most accessible fan in the Classic range, spanning four sweep sizes from a compact 650mm bedroom fan up to a full 1400mm size — a practical, budget-friendly way to bring BLDC energy savings into smaller rooms.",
    features: [
      "Genuine Atomberg classic BLDC fan",
      "Remote controlled",
      "Available in 650mm, 900mm, 1200mm, 1400mm sweep",
      "Budget-friendly BLDC option",
      "Gloss Black, Gloss Brown, Gloss White, Pebble Grey, SS Ivory finishes",
    ],
    specifications: {
      "Sweep Size (mm)": "900mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Gloss Black / Gloss Brown / Gloss White",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 76,
    name: "Ikano 650mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Classic Fan",
    price: 2649,
    originalPrice: 4400,
    discount: 40,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 4/Atomberg Ikano [sweep]mm BLDC ceiling fan with remote in Gloss White – JC Enterprises Bhubaneswar.webp",
    badge: "Classic Fan",
    colors: [
      {
        name: "Gloss Black",
        hex: "#141414",
        images: [
          "/allfan/Fan image 4/Atomberg Ikano [sweep]mm BLDC ceiling fan with remote in Gloss Black – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss Brown",
        hex: "#4a2f1e",
        images: [
          "/allfan/Fan image 4/Atomberg Ikano [sweep]mm BLDC ceiling fan with remote in Gloss Brown – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 4/Atomberg Ikano [sweep]mm BLDC ceiling fan with remote in Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Ikano 650mm – Buy Online Bhubaneswar",
    metaDescription:
      "The Atomberg Ikano 650mm is available online in Bhubaneswar in Gloss Black, Gloss Brown and more shades with remote control. Genuine, home delivery – JC Enterprises.",
    description:
      "The most accessible fan in the Classic range, spanning four sweep sizes from a compact 650mm bedroom fan up to a full 1400mm size — a practical, budget-friendly way to bring BLDC energy savings into smaller rooms.",
    features: [
      "Genuine Atomberg classic BLDC fan",
      "Remote controlled",
      "Available in 650mm, 900mm, 1200mm, 1400mm sweep",
      "Budget-friendly BLDC option",
      "Gloss Black, Gloss Brown, Gloss White, Pebble Grey, SS Ivory finishes",
    ],
    specifications: {
      "Sweep Size (mm)": "650mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Gloss Black / Gloss Brown / Gloss White",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  // {
  //   id: 77,
  //   name: "Metallion 18 Pedestal",
  //   category: "Fans",
  //   categoryId: "fans",
  //   brand: "Atomberg",
  //   tag: "Pedestal Fan",
  //   price: 4599,
  //   originalPrice: 8000,
  //   discount: 43,
  //   stock: 50,
  //   rating: 4.5,
  //   reviews: 100,
  //   image: "/Fan/atomberg-placeholder.webp",
  //   badge: "Pedestal Fan",
  //   colors: [
  //     {
  //       name: "Midnight Black",
  //       hex: "#161616",
  //       images: ["/Fan/atomberg-placeholder.webp"],
  //     },
  //     {
  //       name: "Pebble Grey",
  //       hex: "#b0aea6",
  //       images: ["/Fan/atomberg-placeholder.webp"],
  //     },
  //   ],
  //   metaTitle: "Atomberg Metallion 18 Pedestal – Buy Online Bhubaneswar",
  //   metaDescription:
  //     "Buy Atomberg Metallion 18 Pedestal online in Bhubaneswar, Midnight Black and Pebble Grey with remote control. Genuine, home delivery – JC Enterprises.",
  //   description:
  //     "A premium 450mm BLDC pedestal fan with remote control, built for strong, focused airflow in living rooms, offices and workspaces where a ceiling fan isn't practical or enough on its own.",
  //   features: [
  //     "Genuine Atomberg BLDC pedestal fan",
  //     "Remote controlled",
  //     "450mm blade size",
  //     "Midnight Black and Pebble Grey finishes",
  //     "Energy-efficient BLDC motor",
  //   ],
  //   specifications: {
  //     "Sweep Size (mm)": "450mm",
  //     "Motor Type": "BLDC Motor",
  //     Voltage: "220-240V",
  //     Frequency: "50Hz",
  //     Warranty: "2 Years",
  //     Color: "Midnight Black / Pebble Grey",
  //     "Control Type (Smart App / Remote / Regulator)": "Remote",
  //   },
  // },

  // {
  //   id: 78,
  //   name: "Metallion 18 Wall",
  //   category: "Fans",
  //   categoryId: "fans",
  //   brand: "Atomberg",
  //   tag: "Wall Fan",
  //   price: 4299,
  //   originalPrice: 7500,
  //   discount: 43,
  //   stock: 50,
  //   rating: 4.5,
  //   reviews: 100,
  //   image: "/Fan/atomberg-placeholder.webp",
  //   badge: "Wall Fan",
  //   colors: [
  //     {
  //       name: "Midnight Black",
  //       hex: "#161616",
  //       images: ["/Fan/atomberg-placeholder.webp"],
  //     },
  //   ],
  //   metaTitle: "Atomberg Metallion 18 Wall – Buy Online Bhubaneswar",
  //   metaDescription:
  //     "Get the Atomberg Metallion 18 Wall online in Bhubaneswar, 450mm blade size finished in Midnight Black with remote control. Genuine, home delivery – JC Enterprises.",
  //   description:
  //     "A 450mm BLDC wall-mounted fan with remote control, designed for spaces where floor or ceiling mounting isn't ideal — kitchens, workshops and compact rooms.",
  //   features: [
  //     "Genuine Atomberg BLDC wall fan",
  //     "Remote controlled",
  //     "450mm blade size",
  //     "Midnight Black finish",
  //     "Energy-efficient BLDC motor",
  //   ],
  //   specifications: {
  //     "Sweep Size (mm)": "450mm",
  //     "Motor Type": "BLDC Motor",
  //     Voltage: "220-240V",
  //     Frequency: "50Hz",
  //     Warranty: "2 Years",
  //     Color: "Midnight Black",
  //     "Control Type (Smart App / Remote / Regulator)": "Remote",
  //   },
  // },

  {
    id: 79,
    name: "SilenceAire Hi-Speed Pedestal",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Pedestal Fan",
    price: 4099,
    originalPrice: 7150,
    discount: 43,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image: "/allfan/Fan image 3/silenceaire_pedestal_400_black_p.webp",
    badge: "Pedestal Fan",
    colors: [
      {
        name: "Midnight Black",
        hex: "#161616",
        images: ["/allfan/Fan image 3/silenceaire_pedestal_400_black_p.webp"],
      },
      {
        name: "Snow White",
        hex: "#fbfbf9",
        images: ["/allfan/Fan image 3/silenceaire_pedestal_400_white_p.webp"],
      },
      {
        name: "Aegean Blue",
        hex: "#2f5d78",
        images: ["/allfan/Fan image 3/silenceaire_pedestal_400_blue_pl.webp"],
      },
    ],
    metaTitle: "SilenceAire Hi-Speed Pedestal – Buy Online Bhubaneswar",
    metaDescription:
      "Order the Atomberg SilenceAire Hi-Speed Pedestal in Midnight Black and Snow White online in Bhubaneswar, remote control. Genuine, home delivery – JC Enterprises.",
    description:
      "A 400mm BLDC pedestal fan built for quiet, high-speed airflow. Remote controlled, suited to bedrooms and study spaces where noise matters as much as cooling power.",
    features: [
      "Genuine Atomberg SilenceAire pedestal fan",
      "Remote controlled",
      "400mm blade size, high-speed silent motor",
      "Midnight Black, Snow White, Aegean Blue finishes",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "400mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Aegean Blue / Midnight Black / Snow White",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 80,
    name: "SilenceAire Hi-Speed Wall",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Wall Fan",
    price: 3799,
    originalPrice: 6600,
    discount: 42,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image: "/allfan/Fan image 3/silenceaire_wall_fan_plis_blue_1.webp",
    badge: "Wall Fan",
    colors: [
      {
        name: "Midnight Black",
        hex: "#161616",
        images: ["/allfan/Fan image 3/silenceaire_wall_fan_plis_black.webp"],
      },
      {
        name: "Snow White",
        hex: "#fbfbf9",
        images: ["/allfan/Fan image 3/silenceaire_wall_fan_plis_white.webp"],
      },
      {
        name: "Aegean Blue",
        hex: "#2f5d78",
        images: ["/allfan/Fan image 3/silenceaire_wall_fan_plis_blue_1.webp"],
      },
    ],
    metaTitle: "Atomberg SilenceAire Hi-Speed Wall – Buy Online Bhubaneswar",
    metaDescription:
      "Buy Atomberg SilenceAire Hi-Speed Wall online in Bhubaneswar, Midnight Black and Snow White with remote control. Genuine, home delivery – JC Enterprises.",
    description:
      "Brings the same quiet, high-speed BLDC motor to a wall-mounted 400mm fan, remote controlled — a practical choice for kitchens and workspaces needing strong airflow without added noise.",
    features: [
      "Genuine Atomberg SilenceAire wall fan",
      "Remote controlled",
      "400mm blade size, high-speed silent motor",
      "Midnight Black, Snow White, Aegean Blue finishes",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "400mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Aegean Blue / Midnight Black / Snow White",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 81,
    name: "Renesa Pedestal",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Pedestal Fan",
    price: 3699,
    originalPrice: 6700,
    discount: 45,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 4/Atomberg Renesa pedestal fan 400mm with remote in Snow White – JC Enterprises Bhubaneswar.webp",
    badge: "Pedestal Fan",
    colors: [
      {
        name: "Midnight Black",
        hex: "#161616",
        images: [
          "/allfan/Fan image 4/Atomberg Renesa pedestal fan 400mm with remote in Midnight Black – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Snow White",
        hex: "#fbfbf9",
        images: [
          "/allfan/Fan image 4/Atomberg Renesa pedestal fan 400mm with remote in Snow White – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Renesa Pedestal – Buy Online Bhubaneswar",
    metaDescription:
      "Shop Atomberg Renesa Pedestal in Midnight Black and Snow White online in Bhubaneswar, remote control. Genuine, home delivery – JC Enterprises.",
    description:
      "A 400mm BLDC pedestal fan, remote controlled, extending the trusted Renesa name into a floor-standing format for rooms needing supplementary airflow alongside a ceiling fan.",
    features: [
      "Genuine Atomberg Renesa pedestal fan",
      "Remote controlled",
      "400mm blade size",
      "Midnight Black and Snow White finishes",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "400mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Midnight Black / Snow White",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 82,
    name: "Renesa Wall",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Wall Fan",
    price: 3599,
    originalPrice: 5800,
    discount: 38,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 4/Atomberg Renesa wall fan 400mm with remote in Midnight Black – JC Enterprises Bhubaneswar.webp",
    badge: "Wall Fan",
    colors: [
      {
        name: "Midnight Black",
        hex: "#161616",
        images: [
          "/allfan/Fan image 4/Atomberg Renesa wall fan 400mm with remote in Midnight Black – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Snow White",
        hex: "#fbfbf9",
        images: [
          "/allfan/Fan image 4/Atomberg Renesa wall fan 400mm with remote in Snow White – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Renesa Wall – Buy Online Bhubaneswar",
    metaDescription:
      "Buy the Atomberg Renesa Wall 400mm blade size online in Bhubaneswar in Midnight Black and Snow White with remote control. Genuine, home delivery – JC Enterprises.",
    description:
      "A 400mm BLDC wall-mounted fan, remote controlled, offering the same Renesa reliability in a compact wall-fixed format for kitchens, balconies and smaller rooms.",
    features: [
      "Genuine Atomberg Renesa wall fan",
      "Remote controlled",
      "400mm blade size",
      "Midnight Black and Snow White finishes",
      "Energy-efficient BLDC motor",
    ],
    specifications: {
      "Sweep Size (mm)": "400mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Midnight Black / Snow White",
      "Control Type (Smart App / Remote / Regulator)": "Remote",
    },
  },

  {
    id: 83,
    name: "Studio+ Exhaust Fan",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Exhaust Fan",
    price: 2249,
    originalPrice: 4100,
    discount: 45,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 4/Atomberg Studio 150mm exhaust fan in Brushed Steel – JC Enterprises Bhubaneswar.webp",
    badge: "Exhaust Fan",
    colors: [
      {
        name: "Brushed Steel",
        hex: "#b7b9bb",
        images: [
          "/allfan/Fan image 4/Atomberg Studio 150mm exhaust fan in Brushed Steel – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Studio+ Exhaust Fan – Buy Online Bhubaneswar",
    metaDescription:
      "Shop the Atomberg Studio+ Exhaust Fan online in Bhubaneswar — 150mm size, Brushed Steel. Genuine, home delivery – JC Enterprises.",
    description:
      "A 150mm exhaust fan in a premium Brushed Steel finish, designed for bathrooms and kitchens that want a metallic, upscale look rather than a plain plastic grille.",
    features: [
      "Genuine Atomberg exhaust fan",
      "150mm size",
      "Premium Brushed Steel finish",
      "Suited to bathrooms and kitchens",
    ],
    specifications: {
      "Sweep Size (mm)": "150mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Brushed Steel",
    },
  },

  {
    id: 84,
    name: "Studio Exhaust Fan",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Exhaust Fan",
    price: 2128,
    originalPrice: 3800,
    discount: 44,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 4/Atomberg Studio 150mm exhaust fan in Brushed Steel – JC Enterprises Bhubaneswar.webp",
    badge: "Exhaust Fan",
    colors: [
      {
        name: "Brushed Steel",
        hex: "#b7b9bb",
        images: [
          "/allfan/Fan image 4/Atomberg Studio 150mm exhaust fan in Brushed Steel – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Dark Wood",
        hex: "#4a3220",
        images: [
          "/allfan/Fan image 4/Atomberg Studio 150mm exhaust fan in Dark Wood – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Matte Black",
        hex: "#1c1c1c",
        images: [
          "/allfan/Fan image 4/Atomberg Studio 150mm exhaust fan in Matte Black – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Orion Gold",
        hex: "#b8860b",
        images: [
          "/allfan/Fan image 4/Atomberg Studio 150mm exhaust fan in Orion Gold – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Brushed Rosegold",
        hex: "#caa08a",
        images: [
          "/allfan/Fan image 4/Atomberg Studio 150mm exhaust fan in Brushed Rose Gold – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 4/Atomberg Studio 150mm exhaust fan in Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
        price: 1870,
        originalPrice: 3400,
      },
      {
        name: "Gloss Black",
        hex: "#141414",
        images: [
          "/allfan/Fan image 4/Atomberg Studio 150mm exhaust fan in Gloss Black – JC Enterprises Bhubaneswar.webp",
        ],
        price: 1870,
        originalPrice: 3400,
      },
      {
        name: "Gloss Brown",
        hex: "#4a2f1e",
        images: [
          "/allfan/Fan image 4/Atomberg Studio 150mm exhaust fan in Gloss Brown – JC Enterprises Bhubaneswar.webp",
        ],
        price: 1870,
        originalPrice: 3400,
      },
    ],
    metaTitle: "Atomberg Studio Exhaust Fan – Buy Online Bhubaneswar",
    metaDescription:
      "The Atomberg Studio Exhaust Fan (150mm size) is available online in Bhubaneswar in Brushed Steel, Dark Wood and more shades. Genuine, home delivery – JC Enterprises.",
    description:
      "A 150mm exhaust fan offering the widest finish choice in the range — a flexible option for matching bathroom or kitchen fittings across different budgets.",
    features: [
      "Genuine Atomberg exhaust fan",
      "150mm size",
      "Widest finish range: Dark Wood, Matte Black, Orion Gold and more",
      "Suited to bathrooms and kitchens",
    ],
    specifications: {
      "Sweep Size (mm)": "150mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color:
        "Brushed Rosegold / Brushed Steel / Dark Wood / Gloss Black / Gloss Brown / Gloss White / Matte Black / Orion Gold",
    },
  },

  {
    id: 85,
    name: "Efficio Exhaust Fan 200mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Exhaust Fan",
    price: 1599,
    originalPrice: 2900,
    discount: 45,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 4/Atomberg Efficio [sweep]mm exhaust fan in Gloss Black – JC Enterprises Bhubaneswar.webp",
    badge: "Exhaust Fan",
    colors: [
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 4/Atomberg Efficio [sweep]mm exhaust fan in Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss Black",
        hex: "#141414",
        images: [
          "/allfan/Fan image 4/Atomberg Efficio [sweep]mm exhaust fan in Gloss Black – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss Brown",
        hex: "#4a2f1e",
        images: [
          "/allfan/Fan image 4/Atomberg Efficio [sweep]mm exhaust fan in Gloss Brown – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Efficio Exhaust Fan 200mm – Buy Online Bhubaneswar",
    metaDescription:
      "Order the Atomberg Efficio Exhaust Fan 200mm online in Bhubaneswar in Gloss White, Gloss Black and more shades. Genuine, home delivery – JC Enterprises.",
    description:
      "Available in both 200mm and 150mm sizes, giving buyers a choice between stronger extraction for larger bathrooms and a compact option for smaller spaces.",
    features: [
      "Genuine Atomberg exhaust fan",
      "Available in 150mm and 200mm",
      "Gloss White, Gloss Black, Gloss Brown finishes",
      "Suited to bathrooms and kitchens of different sizes",
    ],
    specifications: {
      "Sweep Size (mm)": "200mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Gloss Black / Gloss Brown / Gloss White",
    },
  },

  {
    id: 86,
    name: "Efficio Exhaust Fan 150mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Exhaust Fan",
    price: 1449,
    originalPrice: 2600,
    discount: 44,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 4/Atomberg Efficio [sweep]mm exhaust fan in Gloss Brown – JC Enterprises Bhubaneswar.webp",
    badge: "Exhaust Fan",
    colors: [
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 4/Atomberg Efficio [sweep]mm exhaust fan in Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss Black",
        hex: "#141414",
        images: [
          "/allfan/Fan image 4/Atomberg Efficio [sweep]mm exhaust fan in Gloss Black – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss Brown",
        hex: "#4a2f1e",
        images: [
          "/allfan/Fan image 4/Atomberg Efficio [sweep]mm exhaust fan in Gloss Brown – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Efficio Exhaust Fan 150mm – Buy Online Bhubaneswar",
    metaDescription:
      "Get the Atomberg Efficio Exhaust Fan 150mm online in Bhubaneswar, finished in Gloss White, Gloss Black and more shades. Genuine, home delivery – JC Enterprises.",
    description:
      "Available in both 200mm and 150mm sizes, giving buyers a choice between stronger extraction for larger bathrooms and a compact option for smaller spaces.",
    features: [
      "Genuine Atomberg exhaust fan",
      "Available in 150mm and 200mm",
      "Gloss White, Gloss Black, Gloss Brown finishes",
      "Suited to bathrooms and kitchens of different sizes",
    ],
    specifications: {
      "Sweep Size (mm)": "150mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Gloss Black / Gloss Brown / Gloss White",
    },
  },

  {
    id: 87,
    name: "Efficio Orb Exhaust Fan",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Exhaust Fan",
    price: 1200,
    originalPrice: 1900,
    discount: 37,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/allfan/Fan image 4/Atomberg Efficio Orb 150mm exhaust fan in Gloss Black – JC Enterprises Bhubaneswar.webp",
    badge: "Exhaust Fan",
    colors: [
      {
        name: "Gloss White",
        hex: "#fafafa",
        images: [
          "/allfan/Fan image 4/Atomberg Efficio Orb 150mm exhaust fan in Gloss White – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Gloss Black",
        hex: "#141414",
        images: [
          "/allfan/Fan image 4/Atomberg Efficio Orb 150mm exhaust fan in Gloss Black – JC Enterprises Bhubaneswar.webp",
        ],
      },
    ],
    metaTitle: "Atomberg Efficio Orb Exhaust Fan – Buy Online Bhubaneswar",
    metaDescription:
      "Atomberg's Efficio Orb Exhaust Fan — 150mm size, Gloss White and Gloss Black — is now online in Bhubaneswar. Genuine, home delivery – JC Enterprises.",
    description:
      "The most affordable exhaust fan in the range, a compact 150mm fan — a simple, budget-friendly choice for smaller bathrooms and utility spaces.",
    features: [
      "Genuine Atomberg exhaust fan",
      "150mm size",
      "Gloss White and Gloss Black finishes",
      "Most budget-friendly exhaust fan in the range",
    ],
    specifications: {
      "Sweep Size (mm)": "150mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color: "Gloss Black / Gloss White",
    },
  },

  {
    id: 88,
    name: "Renesa Elite 1400mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Smart Ceiling Fan",
    price: 5664,
    originalPrice: 9600,
    discount: 41,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/Fan2/Atomberg Renesa Elite 900 mm BLDC ceiling fan [SmartRemote] in Dark Wallnut – JC Enterprises Bhubaneswar - Copy.webp",
    badge: "Smart Ceiling Fan",
    colors: [
      {
        name: "Dark Walnut",
        hex: "#4a2f22",
        images: [
          "/Fan2/Atomberg Renesa Elite 900 mm BLDC ceiling fan [SmartRemote] in Dark Wallnut – JC Enterprises Bhubaneswar - Copy.webp",
        ],
      },
      {
        name: "Golden Oakwood",
        hex: "#8a6432",
        images: [
          "/Fan2/Atomberg Renesa Elite 900 mm BLDC ceiling fan [SmartRemote] in Golden Oakwood – JC Enterprises Bhubaneswar - Copy.webp",
        ],
      },
      {
        name: "Pearl White",
        hex: "#f5f5f4",
        images: [
          "/Fan2/Atomberg Renesa Elite 900 mm BLDC ceiling fan [SmartRemote] in Pearl Grey – JC Enterprises Bhubaneswar - Copy.webp",
        ],
        price: 5133,
        originalPrice: 8700,
      },
      {
        name: "Sand Grey",
        hex: "#9a9a92",
        images: [
          "/Fan2/Atomberg Renesa Elite 600 mm BLDC ceiling fan [SmartRemote] in Sand Grey – JC Enterprises Bhubaneswar - Copy - Copy.webp",
        ],
        price: 5133,
        originalPrice: 8700,
      },
      {
        name: "Ritz Blue",
        hex: "#274472",
        images: [
          "/Fan2/Atomberg Renesa Elite 600 mm BLDC ceiling fan [SmartRemote] in Ritz Blue – JC Enterprises Bhubaneswar - Copy - Copy.webp",
        ],
        price: 5133,
        originalPrice: 8700,
      },
      {
        name: "Earth Brown",
        hex: "#6b4a34",
        images: [
          "/Fan2/Atomberg Renesa Elite 900 mm BLDC ceiling fan [SmartRemote] in Earth Brown – JC Enterprises Bhubaneswar - Copy.webp",
        ],
        price: 5133,
        originalPrice: 8700,
      },
    ],
    metaTitle: "Atomberg Renesa Elite 1400mm – Buy Online Bhubaneswar",
    metaDescription:
      "Now available online in Bhubaneswar: the Atomberg Renesa Elite 1400mm in Dark Walnut and Golden Oakwood with Smart App control. Genuine, home delivery – JC Enterprises.",
    description:
      "A sleek designer ceiling fan pairing a modern silhouette with a transparent diffuser and Moonbeam LED night light, app-controlled through the Atomberg Home App across the widest sweep range in Atomberg's lineup.",
    features: [
      "Genuine Atomberg Renesa Elite, Smart version",
      "Moonbeam LED night light",
      "Widest sweep range: 600mm, 900mm, 1200mm, 1400mm",
      "Wide colour choice: Dark Walnut, Golden Oakwood, Pearl White, Sand Grey, Ritz Blue, Earth Brown",
      "Stable performance on voltage fluctuation",
    ],
    specifications: {
      "Sweep Size (mm)": "1400mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color:
        "Dark Walnut / Earth Brown / Golden Oakwood / Pearl White / Ritz Blue / Sand Grey",
      "Control Type (Smart App / Remote / Regulator)": "Smart",
    },
  },

  {
    id: 89,
    name: "Renesa Elite 1200mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Smart Ceiling Fan",
    price: 5487,
    originalPrice: 9300,
    discount: 41,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/Fan2/Atomberg Renesa Elite 1200 mm BLDC ceiling fan [SmartRemote] in Dark Wallnut – JC Enterprises Bhubaneswar.webp",
    badge: "Smart Ceiling Fan",
    colors: [
      {
        name: "Dark Walnut",
        hex: "#4a2f22",
        images: [
          "/Fan2/Atomberg Renesa Elite 1200 mm BLDC ceiling fan [SmartRemote] in Dark Wallnut – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Golden Oakwood",
        hex: "#8a6432",
        images: [
          "/Fan2/Atomberg Renesa Elite 1200 mm BLDC ceiling fan [SmartRemote] in Golden Oakwood – JC Enterprises Bhubaneswar.webp",
        ],
      },
      {
        name: "Pearl White",
        hex: "#f5f5f4",
        images: [
          "/Fan2/Atomberg Renesa Elite 600 mm BLDC ceiling fan [SmartRemote] in Pearl Grey – JC Enterprises Bhubaneswar - Copy - Copy.webp",
        ],
        price: 4956,
        originalPrice: 8400,
      },
      {
        name: "Rose Gold",
        hex: "#caa08a",
        images: [
          "/Fan2/Atomberg Renesa Elite 1200 mm BLDC ceiling fan [SmartRemote] in Rose Gold – JC Enterprises Bhubaneswar.webp",
        ],
        price: 4956,
        originalPrice: 8400,
      },
      {
        name: "Sand Grey",
        hex: "#9a9a92",
        images: [
          "/Fan2/Atomberg Renesa Elite 1200 mm BLDC ceiling fan [SmartRemote] in Sand Grey – JC Enterprises Bhubaneswar.webp",
        ],
        price: 4956,
        originalPrice: 8400,
      },
      {
        name: "Regal Indigo",
        hex: "#3b3a6e",
        images: [
          "/Fan2/Atomberg Renesa Elite 1200 mm BLDC ceiling fan [SmartRemote] in Regal Indigo – JC Enterprises Bhubaneswar.webp",
        ],
        price: 4956,
        originalPrice: 8400,
      },
      {
        name: "Ritz Blue",
        hex: "#274472",
        images: [
          "/Fan2/Atomberg Renesa Elite 1200 mm BLDC ceiling fan [SmartRemote] in Ritz Blue – JC Enterprises Bhubaneswar.webp",
        ],
        price: 4956,
        originalPrice: 8400,
      },
      {
        name: "Earth Brown",
        hex: "#6b4a34",
        images: [
          "/Fan2/Atomberg Renesa Elite 1200 mm BLDC ceiling fan [SmartRemote] in Earth Brown – JC Enterprises Bhubaneswar.webp",
        ],
        price: 4956,
        originalPrice: 8400,
      },
      {
        name: "Midnight Black",
        hex: "#161616",
        images: [
          "/Fan2/Atomberg Renesa Elite 1200 mm BLDC ceiling fan [Remote] in Midnight Black – JC Enterprises Bhubaneswar.webp",
        ],
        price: 4425,
        originalPrice: 7500,
      },
      {
        name: "Pebble Grey",
        hex: "#b0aea6",
        images: [
          "/Fan2/Atomberg Renesa Elite 1200 mm BLDC ceiling fan [Remote] in Pebble Grey – JC Enterprises Bhubaneswar.webp",
        ],
        price: 4425,
        originalPrice: 7500,
      },
      {
        name: "Blaze Brown",
        hex: "#6e3d25",
        images: [
          "/Fan2/Atomberg Renesa Elite 1200 mm BLDC ceiling fan [Remote] in Blaze Brown – JC Enterprises Bhubaneswar.webp",
        ],
        price: 4425,
        originalPrice: 7500,
      },
      {
        name: "Snow White",
        hex: "#fbfbf9",
        images: [
          "/Fan2/Atomberg Renesa Elite 1200 mm BLDC ceiling fan [Remote] in Snow White – JC Enterprises Bhubaneswar.webp",
        ],
        price: 4425,
        originalPrice: 7500,
      },
    ],
    metaTitle: "Atomberg Renesa Elite 1200mm – Buy Online Bhubaneswar",
    metaDescription:
      "): Buy Atomberg Renesa Elite BLDC ceiling fan online in Bhubaneswar — Smart and Remote versions, 600–1400mm sweep. Genuine, home delivery – JC Enterprises.",
    description:
      "A sleek designer ceiling fan pairing a modern silhouette with a transparent diffuser and Moonbeam LED night light, available in both app-controlled Smart versions and a remote-only variant at 1200mm.",
    features: [
      "Genuine Atomberg Renesa Elite, available in Smart and Remote versions",
      "Moonbeam LED night light on Smart variants",
      "Widest sweep range: 600mm, 900mm, 1200mm, 1400mm",
      "Wide colour choice: Dark Walnut, Golden Oakwood, Pearl White, Rose Gold, Midnight Black and more",
      "Stable performance on voltage fluctuation",
    ],
    specifications: {
      "Sweep Size (mm)": "1200mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color:
        "Blaze Brown / Dark Walnut / Earth Brown / Golden Oakwood / Midnight Black / Pearl White / Pebble Grey / Regal Indigo / Ritz Blue / Rose Gold / Sand Grey / Snow White",
      "Control Type (Smart App / Remote / Regulator)": "Remote/Smart",
    },
  },

  {
    id: 90,
    name: "Renesa Elite 900mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Smart Ceiling Fan",
    price: 5349,
    originalPrice: 9000,
    discount: 41,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/Fan2/Atomberg Renesa Elite 900 mm BLDC ceiling fan [SmartRemote] in Dark Wallnut – JC Enterprises Bhubaneswar - Copy.webp",
    badge: "Smart Ceiling Fan",
    colors: [
      {
        name: "Dark Walnut",
        hex: "#4a2f22",
        images: [
          "/Fan2/Atomberg Renesa Elite 900 mm BLDC ceiling fan [SmartRemote] in Dark Wallnut – JC Enterprises Bhubaneswar - Copy.webp",
        ],
      },
      {
        name: "Golden Oakwood",
        hex: "#8a6432",
        images: [
          "/Fan2/Atomberg Renesa Elite 900 mm BLDC ceiling fan [SmartRemote] in Golden Oakwood – JC Enterprises Bhubaneswar - Copy.webp",
        ],
      },
      {
        name: "Pearl White",
        hex: "#f5f5f4",
        images: [
          "/Fan2/Atomberg Renesa Elite 900 mm BLDC ceiling fan [SmartRemote] in Pearl Grey – JC Enterprises Bhubaneswar - Copy.webp",
        ],
        price: 4779,
        originalPrice: 8100,
      },
      {
        name: "Sand Grey",
        hex: "#9a9a92",
        images: [
          "/Fan2/Atomberg Renesa Elite 600 mm BLDC ceiling fan [SmartRemote] in Sand Grey – JC Enterprises Bhubaneswar - Copy - Copy.webp",
        ],
        price: 4779,
        originalPrice: 8100,
      },
      {
        name: "Ritz Blue",
        hex: "#274472",
        images: [
          "/Fan2/Atomberg Renesa Elite 600 mm BLDC ceiling fan [SmartRemote] in Ritz Blue – JC Enterprises Bhubaneswar - Copy - Copy.webp",
        ],
        price: 4779,
        originalPrice: 8100,
      },
      {
        name: "Earth Brown",
        hex: "#6b4a34",
        images: [
          "/Fan2/Atomberg Renesa Elite 900 mm BLDC ceiling fan [SmartRemote] in Earth Brown – JC Enterprises Bhubaneswar - Copy.webp",
        ],
        price: 4779,
        originalPrice: 8100,
      },
    ],
    metaTitle: "Atomberg Renesa Elite 900mm – Buy Online Bhubaneswar",
    metaDescription:
      "Buy the Atomberg Renesa Elite 900mm online in Bhubaneswar in Dark Walnut and Golden Oakwood with Smart App control. Genuine, home delivery – JC Enterprises.",
    description:
      "A sleek designer ceiling fan pairing a modern silhouette with a transparent diffuser and Moonbeam LED night light, app-controlled through the Atomberg Home App at a 900mm sweep.",
    features: [
      "Genuine Atomberg Renesa Elite, Smart version",
      "Moonbeam LED night light",
      "Widest sweep range: 600mm, 900mm, 1200mm, 1400mm",
      "Wide colour choice: Dark Walnut, Golden Oakwood, Pearl White, Sand Grey, Ritz Blue, Earth Brown",
      "Stable performance on voltage fluctuation",
    ],
    specifications: {
      "Sweep Size (mm)": "900mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color:
        "Dark Walnut / Earth Brown / Golden Oakwood / Pearl White / Ritz Blue / Sand Grey",
      "Control Type (Smart App / Remote / Regulator)": "Smart",
    },
  },

  {
    id: 91,
    name: "Renesa Elite 600mm",
    category: "Fans",
    categoryId: "fans",
    brand: "Atomberg",
    tag: "Smart Ceiling Fan",
    price: 5133,
    originalPrice: 8700,
    discount: 41,
    stock: 50,
    rating: 4.5,
    reviews: 100,
    image:
      "/Fan2/Atomberg Renesa Elite 600 mm BLDC ceiling fan [SmartRemote] in Dark Wallnut – JC Enterprises Bhubaneswar - Copy - Copy.webp",
    badge: "Smart Ceiling Fan",
    colors: [
      {
        name: "Dark Walnut",
        hex: "#4a2f22",
        images: [
          "/Fan2/Atomberg Renesa Elite 600 mm BLDC ceiling fan [SmartRemote] in Dark Wallnut – JC Enterprises Bhubaneswar - Copy - Copy.webp",
        ],
      },
      {
        name: "Golden Oakwood",
        hex: "#8a6432",
        images: [
          "/Fan2/Atomberg Renesa Elite 600 mm BLDC ceiling fan [SmartRemote] in Golden Oakwood – JC Enterprises Bhubaneswar - Copy - Copy.webp",
        ],
      },
      {
        name: "Pearl White",
        hex: "#f5f5f4",
        images: [
          "/Fan2/Atomberg Renesa Elite 600 mm BLDC ceiling fan [SmartRemote] in Pearl Grey – JC Enterprises Bhubaneswar - Copy - Copy.webp",
        ],
        price: 4661,
        originalPrice: 7900,
      },
      {
        name: "Sand Grey",
        hex: "#9a9a92",
        images: [
          "/Fan2/Atomberg Renesa Elite 600 mm BLDC ceiling fan [SmartRemote] in Sand Grey – JC Enterprises Bhubaneswar - Copy - Copy.webp",
        ],
        price: 4661,
        originalPrice: 7900,
      },
      {
        name: "Ritz Blue",
        hex: "#274472",
        images: [
          "/Fan2/Atomberg Renesa Elite 600 mm BLDC ceiling fan [SmartRemote] in Ritz Blue – JC Enterprises Bhubaneswar - Copy - Copy.webp",
        ],
        price: 4661,
        originalPrice: 7900,
      },
      {
        name: "Earth Brown",
        hex: "#6b4a34",
        images: [
          "/Fan2/Atomberg Renesa Elite 600 mm BLDC ceiling fan [SmartRemote] in Earth Brown – JC Enterprises Bhubaneswar - Copy - Copy.webp",
        ],
        price: 4661,
        originalPrice: 7900,
      },
    ],
    metaTitle: "Atomberg Renesa Elite 600mm – Buy Online Bhubaneswar",
    metaDescription:
      "Buy Atomberg Renesa Elite BLDC ceiling fan online in Bhubaneswar — Smart and Remote versions, 600–1400mm sweep. Genuine, home delivery – JC Enterprises.",
    description:
      "A sleek designer ceiling fan pairing a modern silhouette with a transparent diffuser and Moonbeam LED night light, app-controlled through the Atomberg Home App at a compact 600mm sweep.",
    features: [
      "Genuine Atomberg Renesa Elite, Smart version",
      "Moonbeam LED night light",
      "Widest sweep range: 600mm, 900mm, 1200mm, 1400mm",
      "Wide colour choice: Dark Walnut, Golden Oakwood, Pearl White, Sand Grey, Ritz Blue, Earth Brown",
      "Stable performance on voltage fluctuation",
    ],
    specifications: {
      "Sweep Size (mm)": "600mm",
      "Motor Type": "BLDC Motor",
      Voltage: "220-240V",
      Frequency: "50Hz",
      Warranty: "2 Years",
      Color:
        "Dark Walnut / Earth Brown / Golden Oakwood / Pearl White / Ritz Blue / Sand Grey",
      "Control Type (Smart App / Remote / Regulator)": "Smart",
    },
  },
];

export const PRODUCTS = RAW_PRODUCTS.map((product) => ({
  ...product,
  slug: slugify(product.name),
}));

// Derived from the actual product data (instead of a hand-maintained list)
// so a brand filter chip only ever appears when products for it exist.
export const BRANDS = [
  ...new Set(RAW_PRODUCTS.map((product) => product.brand)),
].sort();

export function getProductBySlug(slug) {
  return PRODUCTS.find((product) => product.slug === slug);
}
