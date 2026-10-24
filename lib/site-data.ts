export const contactDetails = {
  email: "info@paboyagroup.com",
  phone: "01830-941595",
  address: [
    "3/D, Kabbokosh Building",
    "Kawran Bazar, Opposite the Directorate General of Family Planning (DGFP)",
    "Ministry of Health and Family Welfare",
    "Dhaka–1215, Bangladesh",
  ],
};

export const navigation = [
  { label: "About Us", href: "/about" },
  { label: "Enterprises", href: "/companies" },
  { label: "Industries", href: "/industries" },
  { label: "Paboya Foundation", href: "/paboya-foundation" },
  { label: "News & Insights", href: "/news-insights" },
  { label: "Careers", href: "/careers" },
];

export const aboutNavigation = [
  { label: "About Paboya Group", href: "/about" },
  { label: "Our History", href: "/about/history" },
  {
    label: "Vision, Mission & Values",
    href: "/about/vision-mission-values",
  },
  {
    label: "Message from the Founder & Managing Director",
    href: "/founder-message",
  },
  { label: "Board of Directors", href: "/about/board-of-directors" },
  {
    label: "Awards and Recognitions",
    href: "/about/awards-and-recognitions",
  },
];

export const companies: Array<{
  name: string;
  sector: string;
  profileHref: string;
  logo: string;
  logoBackground?: "dark";
  description: string;
}> = [
  {
    name: "Paboya Pharmaceuticals Industries Limited",
    sector: "Pharmaceuticals",
    profileHref: "/industries/pharmaceuticals",
    logo: "/images/company-logos/display/pharma.webp",
    description:
      "Research-driven producer of quality medicines adhering to stringent standards.",
  },
  {
    name: "Paboya Textile Industries Limited",
    sector: "Textile",
    profileHref: "/industries/textile",
    logo: "/images/company-logos/display/textile.webp",
    description:
      "Integrated textile operations delivering consistent quality and reliability.",
  },
  {
    name: "Paboya Leather Industries Limited",
    sector: "Leather",
    profileHref: "/industries/leather",
    logo: "/images/company-logos/display/leather.webp",
    description:
      "Value-added leather processing with a focus on sustainability.",
  },
  {
    name: "Paboya Agro Industries Limited",
    sector: "Agriculture",
    profileHref: "/industries/agriculture",
    logo: "/images/company-logos/display/agro.webp",
    description:
      "Efficient agricultural processing supporting food security and quality.",
  },
  {
    name: "Paboya Fisheries Industries Limited",
    sector: "Fisheries",
    profileHref: "/industries/fisheries",
    logo: "/images/company-logos/display/fisheries.webp",
    description:
      "Responsible aquaculture and processing with rigorous quality controls.",
  },
  {
    name: "Paboya Logistics Industries Limited",
    sector: "Logistics",
    profileHref: "/industries/logistics",
    logo: "/images/company-logos/display/logistics.webp",
    description:
      "Reliable logistics solutions enabling efficient movement of goods.",
  },
  {
    name: "Paboya Limited",
    sector: "Information Technology",
    profileHref: "/industries/information-technology",
    logo: "/images/company-logos/display/general.webp",
    description:
      "IT solutions and services spanning software, systems, and digital transformation.",
  },
  {
    name: "Bipon",
    sector: "Fashion & Lifestyle",
    profileHref: "/companies/bipon",
    logo: "/images/company-logos/display/bipon.webp",
    logoBackground: "dark",
    description:
      "A fashion and lifestyle concept celebrating Bangladeshi craft, traditional wear and heritage-inspired design.",
  },
];

export const coreIndustries = [
  {
    name: "Pharmaceuticals",
    description:
      "Quality medicines manufactured to rigorous standards with continuous improvement.",
  },
  {
    name: "Textile & apparel",
    description:
      "Integrated operations delivering consistent quality across the textile chain.",
  },
  {
    name: "Leather & leather goods",
    description:
      "Value-added processing with environmental stewardship and traceability.",
  },
  {
    name: "Agriculture & agro industries",
    description:
      "Processing and supply that support food quality, safety and resilience.",
  },
  {
    name: "Fisheries & aquaculture",
    description:
      "Responsible aquaculture and processing with cold-chain capabilities.",
  },
  {
    name: "Logistics & supply chain",
    description:
      "Efficient movement of goods with network, reliability and safety.",
  },
  {
    name: "Information technology",
    description:
      "Software, systems and digital solutions enabling transformation and efficiency.",
  },
];

export const strategicSectorGroups = [
  {
    title: "Industry & materials",
    sectors: [
      "Jute & Natural Fibers",
      "Infrastructure & Industrial Construction",
      "Packaging Solutions",
      "Specialty Chemicals",
    ],
  },
  {
    title: "Health & sustainability",
    sectors: [
      "Healthcare Services",
      "Green & Renewable Energy",
      "Climate & Environmental Initiatives",
    ],
  },
  {
    title: "International services",
    sectors: [
      "International Import-Export Services",
      "International Human Resource Services",
    ],
  },
];

export const strategicSectors = strategicSectorGroups.flatMap(
  (group) => group.sectors,
);

type NewsUpdate = {
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  date?: string;
  organizationName?: string;
  recognition?: {
    presenterLogo: string;
    presenterName: string;
  };
  body: string[];
  sections?: Array<{
    heading: string;
    paragraphs: string[];
  }>;
  tagline?: string;
  about?: string[];
  reference?: {
    label: string;
    href: string;
  } | null;
  sources?: Array<{
    label: string;
    href: string;
  }>;
};

export const updates: NewsUpdate[] = [
  {
    slug: "samiul-alam-shajal-president-bangladesh-semiconductor-society",
    category: "Leadership",
    title:
      "Paboya Group congratulates Samiul Alam Shajal, Founder & President of Bangladesh Semiconductor Society",
    description:
      "Paboya Group congratulates Samiul Alam Shajal on serving as Founder & President of Bangladesh Semiconductor Society.",
    image: "/images/news/semiconductor-society-congratulations.png",
    imageAlt:
      "Congratulatory artwork featuring Samiul Alam Shajal and Bangladesh Semiconductor Society.",
    date: "2026-07-05",
    organizationName: "Bangladesh Semiconductor Society",
    body: [
      "Paboya Group congratulates its Managing Director, Samiul Alam Shajal, on serving as Founder & President of Bangladesh Semiconductor Society.",
      "The appointment comes as Bangladesh works to build its place in the global semiconductor industry. The Society can help bring together engineers, academic institutions, industry, and other stakeholders to strengthen the country’s semiconductor community.",
      "Paboya Group is proud of this achievement and wishes Mr. Shajal success as he leads the Society and contributes to the development of Bangladesh’s semiconductor ecosystem.",
    ],
    reference: null,
  },
  {
    slug: "paboya-group-it-industry-bangladesh-global-opportunity",
    category: "Information Technology",
    title: "Building Bangladesh’s IT industry for the global market",
    description:
      "Global technology spending and India’s export scale point to the opportunity—and work ahead—for Bangladesh’s IT sector.",
    image: "/images/history/it-industry-ai.webp",
    imageAlt: "Bangladeshi software professionals collaborating in a technology office.",
    date: "2026-10-24",
    body: [
      "Information technology is creating opportunities across software, digital services, cloud infrastructure, cybersecurity, and artificial intelligence. For Bangladesh, the opportunity is to turn local talent and growing capabilities into dependable services and products for customers at home and around the world.",
    ],
    sections: [
      {
        heading: "A global market in motion",
        paragraphs: [
          "Gartner estimates that worldwide IT spending will reach approximately $6.31 trillion in 2026. IT services alone are forecast to account for about $1.87 trillion, reflecting sustained demand for technology implementation, cloud, and managed services.",
        ],
      },
      {
        heading: "India’s export scale",
        paragraphs: [
          "NASSCOM’s FY2026 estimate puts India’s technology industry revenue at approximately $315.4 billion, with exports of about $246.4 billion. India’s growth shows how technology services can become a major export industry when talent, delivery capabilities, and international customer relationships scale together.",
        ],
      },
      {
        heading: "Where Bangladesh can grow",
        paragraphs: [
          "On the World Bank’s balance-of-payments measure of ICT service exports, 2025 figures are about $740.9 million for Bangladesh and $200.3 billion for India. These figures use a narrower services definition than NASSCOM’s broader technology-industry totals, but they show the scale Bangladesh can work toward.",
          "The opportunity is to build stronger software and IT-enabled services, develop skills in areas such as cloud, cybersecurity, data, and AI, and help more local firms meet international standards and deliver reliably to global clients.",
        ],
      },
      {
        heading: "Paboya Group’s commitment",
        paragraphs: [
          "Paboya Group is working to help Bangladesh’s IT industry grow. Through Paboya Limited, the Group aims to strengthen technology capabilities, create useful digital solutions, and build the capacity to serve both domestic needs and international markets.",
        ],
      },
    ],
    tagline: "Build capability in Bangladesh. Deliver value to the world.",
    reference: null,
    sources: [
      {
        label: "Gartner: Worldwide IT spending forecast",
        href: "https://www.gartner.com/en/newsroom/press-releases/2026-04-22-gartner-forecasts-worldwide-it-spending-to-grow-13-point-5-percent-in-2026-totaling-6-point-31-trillion-dollars",
      },
      {
        label: "IBEF / NASSCOM: India IT industry",
        href: "https://www.ibef.org/industry/information-technology-india",
      },
      {
        label: "World Bank: ICT service exports",
        href: "https://data.worldbank.org/indicator/BX.GSR.CCIS.CD?locations=IN-BD",
      },
    ],
  },
  {
    slug: "paboya-group-receives-responsible-ai-ethics-recognition-2026",
    category: "Artificial intelligence",
    title: "Paboya Group receives Responsible AI & Ethics Recognition",
    description:
      "The Artificial Intelligence Foundation of Bangladesh presented the recognition to Paboya Group on 2 October 2026.",
    image: "/images/news/ai-ethics-recognition-cover.png",
    imageAlt:
      "An AI accelerator chip and neural-network circuitry beside a single glass technology recognition award.",
    date: "2026-10-02",
    recognition: {
      presenterLogo: "/partners/6.jpg",
      presenterName: "The Artificial Intelligence Foundation of Bangladesh",
    },
    body: [
      "On 2 October 2026, The Artificial Intelligence Foundation of Bangladesh presented the Responsible AI & Ethics Recognition to Paboya Group.",
      "Paboya Group values this acknowledgement and remains committed to thoughtful, responsible approaches to technology and innovation.",
    ],
    sections: [
      {
        heading: "Recognition presented",
        paragraphs: ["Responsible AI & Ethics Recognition"],
      },
    ],
    reference: null,
  },
  {
    slug: "paboya-group-receives-child-welfare-recognitions-2026",
    category: "Child welfare",
    title: "Paboya Group receives three child welfare recognitions",
    description:
      "International Children Welfare Foundation presented three recognitions to Paboya Group for child welfare, safeguarding, and education.",
    image: "/images/news/child-welfare-recognitions-cover.png",
    imageAlt:
      "Children playing safely in a community courtyard beside a single glass award shaped like protective hands.",
    date: "2026-09-23",
    recognition: {
      presenterLogo: "/partners/4.jpeg",
      presenterName: "International Children Welfare Foundation",
    },
    body: [
      "On 23 September 2026, International Children Welfare Foundation presented three recognitions to Paboya Group in the areas of child welfare, child protection, and children's education and development.",
      "Paboya Group values this acknowledgement and remains committed to supporting initiatives that contribute to children's wellbeing and development.",
    ],
    sections: [
      {
        heading: "Recognitions presented",
        paragraphs: [
          "Child Welfare Excellence Award",
          "Child Protection & Safeguarding Recognition",
          "Children’s Education & Development Award",
        ],
      },
    ],
    reference: null,
  },
  {
    slug: "paboya-group-receives-food-systems-recognitions-2026",
    category: "Agriculture & food systems",
    title: "Paboya Group receives four food systems recognitions",
    description:
      "The International Agriculture, Fisheries and Food Systems Foundation presented four recognitions to Paboya Group.",
    image: "/images/news/agriculture-food-systems-recognition-cover.png",
    imageAlt:
      "Bangladeshi farmers harvest rice beside fresh produce and a single crystal food systems award.",
    date: "2026-09-10",
    recognition: {
      presenterLogo: "/partners/2.jpeg",
      presenterName: "International Agriculture, Fisheries and Food Systems Foundation",
    },
    body: [
      "On 10 September 2026, the International Agriculture, Fisheries and Food Systems Foundation presented four recognitions to Paboya Group, covering food systems, agricultural innovation, sustainable fisheries, and food security.",
      "The recognitions bring together fields that are central to resilient food systems and Bangladesh’s long-term development.",
      "Paboya Group values this acknowledgement and remains committed to supporting constructive work across agriculture, fisheries, and food systems.",
    ],
    sections: [
      {
        heading: "Recognitions presented",
        paragraphs: [
          "Recognition for Contribution to Food Systems",
          "Recognition for Agricultural Innovation",
          "Recognition for Sustainable Fisheries and Aquaculture",
          "Appreciation for Supporting Food Security",
        ],
      },
    ],
    reference: null,
  },
  {
    slug: "paboya-group-receives-environmental-recognitions-2026",
    category: "Climate & sustainability",
    title: "Paboya Group receives three environmental recognitions",
    description:
      "The Global Climate and Environmental Resilience Foundation presented three recognitions to Paboya Group.",
    image: "/images/news/climate-recognition-awards-cover.png",
    imageAlt:
      "A single glass recognition award beside mangrove restoration along a Bangladesh tidal river.",
    date: "2026-07-15",
    recognition: {
      presenterLogo: "/partners/1.jpg",
      presenterName: "The Global Climate and Environmental Resilience Foundation",
    },
    body: [
      "On 15 July 2026, the Global Climate and Environmental Resilience Foundation presented three recognitions to Paboya Group, in the areas of environmental sustainability, climate resilience, and environmental performance.",
      "Paboya Group values this acknowledgement and remains committed to considering environmental responsibility in its long-term growth.",
    ],
    sections: [
      {
        heading: "Recognitions presented",
        paragraphs: [
          "Environmental Sustainability Certification",
          "Climate Resilience Recognition",
          "Environmental Performance Assessment",
        ],
      },
    ],
    reference: null,
  },
  {
    slug: "paboya-group-recognized-by-uap-english-carnival-2026",
    category: "Academic engagement",
    title: "Samiul Alam Shajal receives Crest of Appreciation from University of Asia Pacific",
    description:
      "Samiul Alam Shajal, Founder and Managing Director of Paboya Group, received a Crest of Appreciation from University of Asia Pacific in 2026.",
    image: "/images/news/uap-english-carnival-2026.png",
    imageAlt:
      "Samiul Alam Shajal receives a Crest of Appreciation from University of Asia Pacific.",
    body: [
      "In 2026, University of Asia Pacific presented a Crest of Appreciation to Samiul Alam Shajal, Founder and Managing Director of Paboya Group, for his contribution to English Carnival 2026.",
      "Samiul Alam Shajal delivered the closing speech at the programme.",
      "The crest was presented as a token of appreciation for his contribution. The recognition reflects the value of constructive engagement between industry and academia in advancing technology, innovation, and professional opportunities.",
      "Paboya Group values its engagement with academic institutions and remains committed to supporting initiatives that strengthen the connection between education, technological advancement, and future professional opportunities.",
      "Samiul Alam Shajal extends his sincere appreciation to University of Asia Pacific for this recognition and for organizing English Carnival 2026.",
    ],
    reference: null,
  },
  {
    slug: "paboya-group-enters-semiconductor-sector",
    category: "Industry expansion",
    title: "Paboya Group enters the semiconductor sector",
    description:
      "The Group is expanding its portfolio into a technology sector that underpins modern electronics and digital infrastructure.",
    image: "/images/history/semiconductors.webp",
    imageAlt: "A semiconductor wafer representing chip design and advanced technology",
    body: [
      "Semiconductors are the essential components behind modern computing, smartphones, communications networks, vehicles, medical equipment, and industrial systems. As artificial intelligence and data-centre investment accelerate, demand for more capable and efficient chips is growing across the world.",
    ],
    sections: [
      {
        heading: "A fast-growing global industry",
        paragraphs: [
          "The Semiconductor Industry Association reported that global semiconductor sales passed $1 trillion through August 2026, and projected that sales for the full year could exceed $1.6 trillion. Chips are central to the expansion of AI, cloud computing, connected devices, and advanced manufacturing, making the sector one of the most strategically important industries in the global economy.",
          "The industry is a connected value chain: chip architecture and design, fabrication, assembly and packaging, testing, materials, and specialist equipment. These stages require deep engineering expertise, reliable infrastructure, significant investment, and close collaboration between companies and research institutions.",
        ],
      },
      {
        heading: "An opportunity for Bangladesh",
        paragraphs: [
          "Bangladesh does not need to build every part of this complex industry at once. The more practical opportunity is to develop capabilities in chip design and verification, embedded systems, and outsourced semiconductor assembly and testing (OSAT), while building the skills, quality systems, infrastructure, and international partnerships needed to move further along the value chain.",
          "Bangladesh Investment Development Authority’s sector profile identifies more than 700 chip designers in the country, over 20,000 annual graduates in computer science and electrical and electronic engineering, and more than $8 million in semiconductor exports in 2024. BIDA also identifies IC design, assembly and testing, and advanced packaging as areas with potential for growth.",
          "Turning that potential into a stronger industry will require sustained investment in practical engineering education, research and development, intellectual-property protection, access to design tools and infrastructure, and collaboration with global semiconductor companies.",
        ],
      },
      {
        heading: "Paboya Group’s direction",
        paragraphs: [
          "Paboya Group is entering semiconductors as a long-term opportunity to contribute to Bangladesh’s technology capabilities. The Group’s direction is to develop engineering talent, pursue relevant partnerships, and build expertise in areas such as chip design and related services. As local capabilities and the supporting ecosystem grow, further opportunities in testing, assembly, and packaging can be explored.",
          "The ambition is to help Bangladesh participate in the global semiconductor value chain—building knowledge and capability at home, and creating technology value for the world.",
        ],
      },
    ],
    reference: null,
    sources: [
      {
        label: "Semiconductor Industry Association: 2026 sales update",
        href: "https://www.semiconductors.org/year-to-date-global-semiconductor-sales-top-1-trillion-through-august/",
      },
      {
        label: "BIDA: Bangladesh semiconductor sector profile",
        href: "https://investbangladesh.gov.bd/investment-sector/semiconductor",
      },
      {
        label: "BIDA: Semiconductor taskforce and sector priorities",
        href: "https://www.boi.gov.bd/details/taskforce-formed-developing-bangladeshs-semiconductor-sector-focusing-testing-and-assembly",
      },
    ],
  },
];
