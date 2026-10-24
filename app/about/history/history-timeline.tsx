"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";

type ChapterParagraph =
  | string
  | {
      parts: Array<{
        text: string;
        strong?: boolean;
        italic?: boolean;
      }>;
    };

type Chapter = {
  label: string;
  title: string;
  paragraphs: ChapterParagraph[];
  closingStatement?: ChapterParagraph;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  imagePosition?: string;
  visual?: {
    eyebrow: string;
    title: string;
    footer: string;
    compact?: boolean;
  };
};

const chapters: Chapter[] = [
  {
    label: "The Beginning: 2025",
    title: "A Different Path, A Greater Purpose",
    paragraphs: [
      "During his university years as an Electrical and Electronic Engineering (EEE) student, Samiul Alam Shajal believed that education should go beyond academic results and employment—it should inspire innovation and solve real-world problems.",
      "When his ideas for meaningful innovation failed to gain attention from existing companies, he decided to create the opportunity himself. Leaving university to pursue his vision, he founded an IT company in 2025, laying the foundation for Paboya Group.",
    ],
    closingStatement: {
      parts: [
        { text: "His journey began with a simple belief: " },
        {
          text: "innovation and enterprise should create lasting value for humanity.",
          strong: true,
        },
      ],
    },
    image: "/images/history/it-industry.jpg",
    imageAlt: "A presenter speaking to an audience in a classroom",
    imageCaption: "Paboya Group’s early technology journey",
  },
  {
    label: "The Vision Behind Paboya Group",
    title: "A Vision Beyond Business",
    paragraphs: [
      "The vision behind Paboya Group is simple: to help make Bangladesh great again—not merely by looking back at its glorious past, but by building a future worthy of its potential.",
      "We believe business should serve a greater purpose: contributing to society, creating meaningful value, and building industries that can compete on the global stage.",
      {
        parts: [
          { text: "Our ambition is to take " },
          { text: "Made in Bangladesh", strong: true },
          {
            text: " beyond a label of origin and establish it as a global symbol of quality, innovation, and excellence.",
          },
        ],
      },
    ],
    closingStatement: {
      parts: [
        {
          text: "Made in Bangladesh. Built for the World. With Paboya Group.",
          strong: true,
        },
      ],
    },
    image: "/images/history/paboya-group-vision.webp",
    imageAlt: "Paboya Group logo on a branded visual about its shared vision",
    imageCaption: "Paboya Group · A shared vision for a wider horizon",
    imagePosition: "center 50%",
  },
  {
    label: "From IT to a Diversified Group",
    title: "Beyond One Industry",
    paragraphs: [
      {
        parts: [
          { text: "In 2025, global IT services spending was projected to reach approximately " },
          { text: "$1.69 trillion", strong: true },
          { text: ". Meanwhile, India’s technology industry generated an estimated " },
          { text: "$283 billion in annual revenue", strong: true },
          { text: ", including approximately " },
          { text: "$224 billion from exports", strong: true },
          { text: "." },
        ],
      },
      "These figures demonstrated the enormous potential of the global technology economy. For Samiul Alam Shajal, they raised an important question: how much more could be achieved from Bangladesh?",
      "He believed there was significant room to build technology businesses, develop innovative solutions, and serve international clients. This conviction led Paboya Group to begin with IT in 2025—not as the limit of its ambitions, but as the foundation for a broader journey across industries.",
    ],
    closingStatement: {
      parts: [
        {
          text: "The goal was to start in technology, think globally, and build enterprises that create lasting value for society.",
          strong: true,
        },
      ],
    },
    image: "/images/history/it-diversified-founder.webp",
    imageAlt: "Samiul Alam Shajal seated at his desk",
    imageCaption: "Samiul Alam Shajal · Building Paboya Group",
    imagePosition: "center 58%",
  },
  {
    label: "Pharmaceuticals",
    title: "Affordable Medicines, Global Ambitions",
    paragraphs: [
      {
        parts: [
          { text: "The global pharmaceutical market was valued at approximately " },
          { text: "$1.74 trillion in 2025", strong: true },
          {
            text: ", representing one of the world's largest and most essential industries. Yet Bangladesh's pharmaceutical exports reached around ",
          },
          { text: "$213 million in FY2024–25", strong: true },
          { text: ", despite local manufacturers meeting approximately " },
          { text: "98%", strong: true },
          { text: " of domestic medicine demand." },
        ],
      },
      "For Paboya Group, this represents an opportunity to think bigger. By focusing on cost-efficient manufacturing, quality, innovation, and reliable access to essential medicines, we believe there is room to build a pharmaceutical enterprise capable of competing internationally.",
      "Our first priority would be to serve domestic demand with affordable, high-quality medicines. From that foundation, we aim to expand into international markets, strengthen manufacturing capabilities, and develop products that meet global regulatory standards.",
    ],
    closingStatement: {
      parts: [
        {
          text: "The ambition is clear: serve our nation first, earn the world's trust, and build a Bangladeshi pharmaceutical brand with global reach.",
          strong: true,
        },
      ],
    },
    image: "/images/history/pharmaceuticals.webp",
    imageAlt: "A scientist inspecting medicine vials in a quality-control laboratory",
    imageCaption: "Research and quality control in pharmaceutical manufacturing",
  },
  {
    label: "Textile",
    title: "Building on Bangladesh's Strength",
    paragraphs: [
      {
        parts: [
          { text: "The global textile market was valued at approximately " },
          { text: "$1.16 trillion in 2025", strong: true },
          {
            text: ". Meanwhile, Bangladesh's ready-made garment exports reached approximately ",
          },
          { text: "$39.35 billion in FY2024–25", strong: true },
          {
            text: ", demonstrating the country's established role in the global apparel industry.",
          },
        ],
      },
      "For Paboya Group, this industry represents an opportunity to build on Bangladesh's manufacturing strengths while pursuing greater value creation. Our ambition is to develop textile capabilities that emphasize quality, cost efficiency, innovation, sustainable production, and higher-value products.",
      "The journey would begin by building competitive manufacturing capabilities and serving established market demand. Over time, the goal would be to expand into advanced textiles, strengthen international partnerships, and develop products that compete on quality and value in markets around the world.",
    ],
    closingStatement: {
      parts: [
        {
          text: "Our ambition is to help take Made in Bangladesh beyond manufacturing—to make it a global symbol of quality, innovation, and excellence.",
          strong: true,
        },
      ],
    },
    image: "/images/history/textile.webp",
    imageAlt: "A textile mill worker monitoring rows of looms and colored yarn",
    imageCaption: "Textile manufacturing and skilled production",
  },
  {
    label: "Leather",
    title: "From Local Resources to Global Brands",
    paragraphs: [
      {
        parts: [
          { text: "The global leather and leather goods market exceeds " },
          { text: "$450 billion", strong: true },
          {
            text: ", creating opportunities across footwear, bags, accessories, and finished leather products. In FY2024–25, Bangladesh exported approximately ",
          },
          {
            text: "$1.14 billion worth of leather, leather goods, and related products",
            strong: true,
          },
          { text: ", demonstrating the industry's established export potential." },
        ],
      },
      "For Paboya Group, the ambition is to build on Bangladesh's access to locally sourced hides, competitive manufacturing costs, and growing industrial capabilities. By investing in quality, modern production, sustainable processing, and innovative product design, we aim to develop leather businesses that can compete with established international manufacturers.",
      "Our approach would begin with building strong manufacturing capabilities and serving domestic demand, followed by expanding exports and developing products for international markets.",
    ],
    closingStatement: {
      parts: [
        {
          text: "The long-term vision is to transform locally sourced resources into globally competitive products—and make Paboya Group a name associated with quality, craftsmanship, and excellence worldwide.",
          strong: true,
        },
      ],
    },
    image: "/images/history/leather.webp",
    imageAlt: "A craftsperson hand-stitching a leather bag in a workshop",
    imageCaption: "Craftsmanship in leather goods production",
  },
  {
    label: "Agriculture",
    title: "Growing Value, Feeding the Future",
    paragraphs: [
      {
        parts: [
          { text: "Agriculture is one of the world's most essential industries. The global agribusiness market was estimated at approximately " },
          { text: "$2.42 trillion in 2025", strong: true },
          { text: ". Meanwhile, Bangladesh exported around " },
          { text: "$988.6 million worth of agricultural products in FY2024–25", strong: true },
          {
            text: ", highlighting both the country's existing export capabilities and the potential for further growth.",
          },
        ],
      },
      "For Paboya Group, the opportunity extends beyond growing crops. We envision developing an integrated agribusiness that connects agricultural production with modern processing, packaging, storage, and distribution. By reducing waste, improving productivity, and transforming raw materials into higher-value products, we aim to create greater value for farmers, consumers, and the wider economy.",
      "Our first priority would be to contribute to domestic food demand through efficient and responsible production. From there, we aspire to expand into processed foods and agricultural products for international markets, building a reputation for quality, reliability, and innovation.",
    ],
    closingStatement: {
      parts: [
        {
          text: "The long-term ambition is to transform agricultural potential into industrial value—and take Bangladeshi agro-products to the world.",
          strong: true,
        },
      ],
    },
    image: "/images/history/agriculture.webp",
    imageAlt: "A farmer walking through a green rice field at sunrise",
    imageCaption: "Bangladesh’s agricultural landscape",
  },
  {
    label: "Fisheries",
    title: "Growing Sustainably, Competing Globally",
    paragraphs: [
      {
        parts: [
          {
            text: "Fisheries and aquaculture play a vital role in global food security, with international trade in fish and aquatic products valued at approximately ",
          },
          { text: "$171 billion in 2024", strong: true },
          {
            text: ". Bangladesh, with its established fisheries sector and aquaculture capabilities, earned around ",
          },
          { text: "৳45.32 billion from fish and fisheries product exports in FY2023–24", strong: true },
          { text: "." },
        ],
      },
      "For Paboya Group, this industry presents an opportunity to develop modern, efficient, and sustainable fisheries businesses. By improving aquaculture practices, investing in quality-controlled processing, strengthening cold-chain logistics, and developing higher-value seafood products, we aim to create greater value from the sector.",
      "Our initial focus would be to support domestic demand through responsible production while building the capabilities required to serve international markets. Over time, we aspire to expand exports, meet global food-safety standards, and compete in markets where quality, traceability, and reliability matter.",
    ],
    closingStatement: {
      parts: [
        {
          text: "The ambition is to turn sustainable fisheries into a source of food security, economic opportunity, and globally competitive Bangladeshi products.",
          strong: true,
        },
      ],
    },
    image: "/images/history/agriculture-fisheries-logistics.jpg",
    imageAlt: "Fishers working from a long boat on a river in Bangladesh",
    imageCaption: "Fishing and river transport in Bangladesh",
  },
  {
    label: "Logistics",
    title: "Moving Goods, Creating Opportunities",
    paragraphs: [
      {
        parts: [
          {
            text: "Logistics is the backbone of global commerce, connecting manufacturers, suppliers, and consumers across markets. One industry estimate valued the global logistics market at approximately ",
          },
          { text: "$4.1 trillion in 2025", strong: true },
          { text: ", while Bangladesh's freight and logistics market was estimated at nearly " },
          { text: "$32 billion", strong: true },
          { text: "." },
        ],
      },
      "For Paboya Group, logistics represents more than the transportation of goods. It is an opportunity to strengthen supply chains, improve distribution efficiency, and connect businesses with customers at home and abroad.",
      "Our ambition is to develop reliable logistics capabilities spanning transportation, warehousing, freight forwarding, and integrated supply-chain services. These capabilities could also support Paboya Group's future businesses in pharmaceuticals, textiles, leather, agriculture, and fisheries.",
    ],
    closingStatement: {
      parts: [
        {
          text: "The long-term vision is to connect industries, reduce inefficiencies, and help Bangladeshi products reach markets around the world.",
          strong: true,
        },
      ],
    },
    image: "/images/history/logistics.webp",
    imageAlt: "A container ship and freight cranes at a busy seaport",
    imageCaption: "Connecting industries through global logistics",
  },
  {
    label: "Semiconductors and Advanced Technology",
    title: "From Bangladesh to the Global Chip Industry",
    paragraphs: [
      {
        parts: [
          { text: "The global semiconductor industry generated approximately " },
          { text: "$795.6 billion in sales in 2025", strong: true },
          {
            text: ", making it one of the most strategically important sectors powering artificial intelligence, smartphones, data centres, automobiles, and modern industrial systems. The industry is moving towards the trillion-dollar mark, creating opportunities across chip design, manufacturing, testing, and packaging.",
          },
        ],
      },
      "For Paboya Group, semiconductors represent a long-term strategic ambition: to help build Bangladesh's capabilities in one of the world's most advanced technology industries. We believe that developing engineering talent, investing in innovation, and establishing international partnerships can create pathways into the global semiconductor value chain.",
      "Rather than attempting to build every part of the industry at once, the journey can begin with chip design, engineering services, and related technical capabilities, gradually exploring semiconductor testing, assembly, and advanced packaging as the necessary expertise, investment, and infrastructure develop. These are also among the areas identified as priorities for Bangladesh's semiconductor sector.",
    ],
    closingStatement: {
      parts: [
        {
          text: "Our long-term ambition is to help position Bangladesh within the global semiconductor ecosystem—and contribute to the technologies shaping the future of the world.",
          strong: true,
        },
      ],
    },
    image: "/images/history/semiconductors.webp",
    imageAlt: "A silicon wafer inspected by gloved hands in a semiconductor cleanroom",
    imageCaption: "Advanced technology and semiconductor manufacturing",
  },
  {
    label: "The Founder and His Vision",
    title: "Building a Stronger Bangladesh, Reaching the World",
    paragraphs: [
      "For Samiul Alam Shajal, Paboya Group represents a vision that goes beyond building businesses. It is about contributing to a stronger, more economically powerful Bangladesh—one where homegrown enterprises meet national needs, create opportunities, and compete confidently on the global stage.",
      {
        parts: [
          { text: "His philosophy is straightforward: " },
          { text: "serve the nation first, then compete with the world.", strong: true },
          {
            text: " Across every industry Paboya Group enters, the ambition is to help meet domestic demand through quality products and reliable services before expanding into international markets and pursuing global competitiveness.",
          },
        ],
      },
      {
        parts: [
          {
            text: "At the heart of this vision is a larger aspiration: to transform ",
          },
          { text: "Made in Bangladesh", italic: true },
          {
            text: " into a globally recognised symbol of quality, innovation, and excellence. Through industrial development, technological advancement, and purposeful enterprise, Paboya Group aims to contribute to a future where Bangladeshi businesses do not simply participate in the global economy, but help shape it.",
          },
        ],
      },
    ],
    closingStatement: {
      parts: [
        {
          text: "The vision is to build from Bangladesh, serve the world, and make Made in Bangladesh a global brand.",
          strong: true,
        },
      ],
    },
    image: "/images/history/founder-quote.jpg",
    imageAlt: "Samiul Alam Shajal, Founder and Managing Director of Paboya Group",
    imageCaption: "Samiul Alam Shajal · Founder & Managing Director",
  },
  {
    label: "Looking Towards the Future",
    title: "Embracing Technology, Advancing Humanity",
    paragraphs: [
      "The future belongs to those who are willing to adapt, innovate, and look beyond the limitations of today. While the past can offer valuable lessons, meaningful progress requires us to look forward. We cannot contribute to the advancement of humanity by moving backwards; we must embrace new ideas, explore emerging possibilities, and build solutions for the challenges that lie ahead.",
      {
        parts: [
          {
            text: "Artificial intelligence, advanced computing, automation, and other emerging technologies are reshaping industries, economies, and societies. ",
          },
          {
            text: "Technology is not simply a passing trend—it is one of the defining forces shaping the future of human civilisation.",
            strong: true,
          },
          {
            text: " For businesses and nations alike, the ability to adapt to technological change will be essential to remaining competitive and creating lasting value.",
          },
        ],
      },
      "At Paboya Group, we believe that progress requires a forward-looking mindset. Across our areas of interest, we aspire to embrace innovation, apply relevant technologies, and develop capabilities that respond to evolving needs. From strengthening traditional industries through digital transformation to exploring advanced fields such as artificial intelligence and semiconductors, our ambition is to remain open to the possibilities that technology can create.",
      "Our vision extends beyond business growth. We want to contribute to a future in which technology empowers people, industries create greater value, and Bangladeshi enterprises compete confidently on the global stage.",
    ],
    closingStatement: {
      parts: [
        {
          text: "The future will not be built by looking backwards. It will be built by those who dare to look ahead, adapt to change, and turn possibilities into progress.",
          strong: true,
        },
      ],
    },
    image: "/images/history/future-ai-research.webp",
    imageAlt: "An AI researcher studying machine-learning visualisations in a computing lab",
    imageCaption: "Artificial intelligence research and advanced computing",
  },
];

export default function HistoryTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeChapter = chapters[activeIndex];
  const activeTabId = `history-story-tab-${activeIndex}`;

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % chapters.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + chapters.length) % chapters.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = chapters.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <section aria-labelledby="history-timeline-title" className="history-timeline-section">
      <div className="container">
        <header className="history-timeline-heading">
          <p className="history-eyebrow">Our journey</p>
          <h2 id="history-timeline-title">A timeline of Paboya Group&apos;s history</h2>
          <p>
            Follow the Group&apos;s story from its 2025 beginnings in technology
            to a vision that continues to evolve.
          </p>
        </header>

        <div
          aria-label="Paboya Group history chapters"
          className="history-story-tabs"
          role="tablist"
        >
          {chapters.map((chapter, index) => (
            <button
              aria-controls="history-story-panel"
              aria-selected={activeIndex === index}
              className="history-story-tab"
              id={`history-story-tab-${index}`}
              key={chapter.label}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              role="tab"
              tabIndex={activeIndex === index ? 0 : -1}
              type="button"
            >
              {chapter.label}
            </button>
          ))}
        </div>

        <div
          aria-labelledby={activeTabId}
          className="history-story-list"
          id="history-story-panel"
          role="tabpanel"
          tabIndex={0}
        >
          <div className="history-story">
            {activeChapter.image ? (
              <figure className="history-story__figure">
                <div className="history-story__image-wrap">
                  <Image
                    alt={activeChapter.imageAlt ?? ""}
                    className="history-story__image"
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
                    src={activeChapter.image}
                    style={{ objectPosition: activeChapter.imagePosition ?? "center 30%" }}
                  />
                </div>
                <figcaption>{activeChapter.imageCaption}</figcaption>
              </figure>
            ) : (
              <div
                aria-hidden="true"
                className={`history-story__future${activeChapter.visual?.compact ? " history-story__future--compact" : ""}`}
              >
                <span>{activeChapter.visual?.eyebrow}</span>
                <strong>{activeChapter.visual?.title}</strong>
                <i>{activeChapter.visual?.footer} <b>→</b></i>
              </div>
            )}

            <article className="history-story__copy">
              <p className="history-story__index">
                <span>{String(activeIndex + 1).padStart(2, "0")}</span>
                {activeChapter.label}
              </p>
              <h3>{activeChapter.title}</h3>
              {activeChapter.paragraphs.map((paragraph) => (
                <p
                  key={
                    typeof paragraph === "string"
                      ? paragraph
                      : paragraph.parts.map((part) => part.text).join("")
                  }
                >
                  {typeof paragraph === "string" ? (
                    paragraph
                  ) : (
                    paragraph.parts.map((part, index) => (
                      <span key={index}>
                        {part.strong ? (
                          <strong>{part.text}</strong>
                        ) : part.italic ? (
                          <em>{part.text}</em>
                        ) : (
                          part.text
                        )}
                      </span>
                    ))
                  )}
                </p>
              ))}
              {activeChapter.closingStatement && (
                <p>
                  {typeof activeChapter.closingStatement === "string"
                    ? activeChapter.closingStatement
                    : activeChapter.closingStatement.parts.map((part, index) => (
                        <span key={index}>
                          {part.strong ? (
                            <strong>{part.text}</strong>
                          ) : part.italic ? (
                            <em>{part.text}</em>
                          ) : (
                            part.text
                          )}
                        </span>
                      ))}
                </p>
              )}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
