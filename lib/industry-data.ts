export type Industry = {
  slug: string;
  name: string;
  image: string;
  imageAlt: string;
  description: string;
  essayTitle: string;
  paragraphs: [string, string];
};

export const industries: Industry[] = [
  {
    slug: "pharmaceuticals",
    name: "Pharmaceuticals",
    image: "/images/history/pharmaceuticals.webp",
    imageAlt: "A modern pharmaceutical research and production environment",
    description:
      "Research-driven medicine production focused on quality, affordability and dependable access.",
    essayTitle: "Quality medicines, built on local needs.",
    paragraphs: [
      "Paboya Group's ambition in pharmaceuticals is to contribute to reliable access to quality medicines in Bangladesh. We believe affordability, careful research and dependable standards should guide the way this sector develops.",
      "Our focus is to build the capabilities needed to serve local demand first and, over time, earn trust in international markets.",
    ],
  },
  {
    slug: "textile",
    name: "Textile",
    image: "/images/history/textile.webp",
    imageAlt: "Textile production and fabric quality in a modern mill",
    description:
      "Textile capabilities built on Bangladesh's manufacturing strengths, with a focus on quality and responsible production.",
    essayTitle: "Building on Bangladesh's textile strengths.",
    paragraphs: [
      "Bangladesh has an established place in global textile and apparel manufacturing. Paboya Group aims to build on that foundation through quality, responsible production and a focus on higher-value products.",
      "Over time, we want to develop capabilities that help Bangladeshi textiles compete through reliability, innovation and the value they create.",
    ],
  },
  {
    slug: "leather",
    name: "Leather",
    image: "/images/history/leather.webp",
    imageAlt: "Leather craftsmanship and finished leather materials",
    description:
      "Value-added leather processing and product development with attention to quality and sustainability.",
    essayTitle: "Turning local resources into lasting value.",
    paragraphs: [
      "Paboya Group sees an opportunity to develop leather processing and finished products with a clear focus on quality. Thoughtful design and responsible production can help create greater value from locally available resources.",
      "Our long-term ambition is to build manufacturing capabilities that serve customers in Bangladesh and compete on quality in international markets.",
    ],
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    image: "/images/history/agriculture.webp",
    imageAlt: "Agricultural fields representing Bangladesh's agribusiness potential",
    description:
      "Agribusiness that connects production with processing, storage and distribution to create more value.",
    essayTitle: "Growing value from land and harvest.",
    paragraphs: [
      "Our agricultural ambition is to connect production with processing, packaging, storage and distribution. These links can help reduce waste and create more value for farmers, consumers and the wider economy.",
      "We are committed to developing this work responsibly, with domestic food needs as an important starting point and quality as a guide for future growth.",
    ],
  },
  {
    slug: "fisheries",
    name: "Fisheries",
    image: "/images/history/agriculture-fisheries-logistics.jpg",
    imageAlt: "Fishers working together on a river in Bangladesh",
    description:
      "Responsible aquaculture and quality-led processing serving domestic demand and future export markets.",
    essayTitle: "Responsible growth from water and aquaculture.",
    paragraphs: [
      "Paboya Group aims to support the fisheries sector through responsible aquaculture and quality-led processing. Better handling and dependable cold-chain services can help preserve product quality and reduce waste.",
      "Our goal is to serve domestic demand while building the capabilities needed to meet international standards over time.",
    ],
  },
  {
    slug: "logistics",
    name: "Logistics",
    image: "/images/history/logistics.webp",
    imageAlt: "Logistics and freight operations supporting the movement of goods",
    description:
      "Supply-chain services that connect businesses, move goods efficiently and support trade.",
    essayTitle: "Connecting businesses and markets.",
    paragraphs: [
      "Reliable logistics helps businesses move goods and reach customers. Paboya Group's ambition is to develop capabilities across transportation, warehousing and supply-chain services.",
      "As the Group grows, these services can support its businesses and help connect Bangladeshi products with markets at home and abroad.",
    ],
  },
  {
    slug: "information-technology",
    name: "Information Technology",
    image: "/images/history/it-industry-ai.webp",
    imageAlt:
      "Bangladeshi software professionals collaborating on a digital product in a Dhaka workspace",
    description:
      "Paboya Group's starting point: software, systems and digital services shaped by a belief in technology's potential.",
    essayTitle: "Technology was where our journey began.",
    paragraphs: [
      "Paboya Group began in 2025 as an IT company. From the start, we believed technology could open opportunities, solve practical problems and support future growth.",
      "We remain committed to developing this foundation through useful software, systems and digital services as the Group explores opportunities across industries.",
    ],
  },
  {
    slug: "semiconductor-technology",
    name: "Semiconductor Technology",
    image: "/images/history/semiconductors.webp",
    imageAlt: "A semiconductor wafer representing advanced technology",
    description:
      "A long-term strategic interest in chip design, engineering, testing and advanced technology capabilities.",
    essayTitle: "A long-term ambition in advanced technology.",
    paragraphs: [
      "Semiconductors are a strategic area of interest for Paboya Group. We see an opportunity to help build Bangladesh's engineering and innovation capabilities in a field that supports modern technologies.",
      "Our approach is to develop relevant expertise and partnerships over time, exploring areas such as chip design and technical services as capabilities grow.",
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
