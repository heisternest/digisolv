import { Card, Carousel } from "./ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-base md:text-lg mb-3">
            WE DELIVER THE BEST SOLUTIONS
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            We offer a wide range of services
          </h2>
        </div>
      </div>
      <Carousel items={cards} />
    </div>
  );
}

interface DummyContentProps {
  content: string;
  title: string;
}

const DummyContent = (props: DummyContentProps) => {
  return (
    <>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          {props.content}
        </p>
      </div>
    </>
  );
};

const data = [
  {
    category: "Product",
    title: "IT Support & HelpDesk",
    src: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=1132&h=506",
    content: (
      <DummyContent
        title="IT Support & HelpDesk"
        content="24/7 assistance to ensure your systems run smoothly and efficiently, minimizing downtime and disruptions."
      />
    ),
  },
  {
    category: "Productivity",
    title: "Cybersecurity & Threat Management",
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1104,h=492,fit=crop/A85wJ341aRiKz1w9/cyber-security-data-protection-business-technology-privacy-concept-cyber-security-data-protection-business-technology-privacy-123053001-dOqyB34wDZtLoB0D.webp",
    content: (
      <DummyContent
        title="Cybersecurity & Threat Management"
        content="Comprehensive protection against cyber threats, including firewalls, antivirus solutions, data encryption, and regular vulnerability assessments."
      />
    ),
  },
  {
    category: "Product",
    title: "Network Management & Monitoring",
    src: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?auto=format&fit=crop&w=1040&h=504",
    content: (
      <DummyContent
        title="Network Management & Monitoring"
        content="Optimize your business infrastructure with our scalable cloud solutions and reliable network management services, ensuring seamless connectivity and robust performance."
      />
    ),
  },

  {
    category: "Product",
    title: "Cloud Services & Solutions",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <DummyContent
        title="Cloud Services & Solutions"
        content="Scalable, flexible cloud solutions that allow you to store, access, and collaborate on data securely from anywhere."
      />
    ),
  },
  {
    category: "Product",
    title: "Server & Infrastructure Management",
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1104,h=492,fit=crop/A85wJ341aRiKz1w9/14_01edge-cloud-computing-AoPvMz4XD1S0pjk4.jpg",
    content: (
      <DummyContent
        title="Server & Infrastructure Management"
        content="Full management of your servers, hardware, and IT infrastructure to ensure they are running smoothly and efficiently."
      />
    ),
  },
  {
    category: "Product",
    title: "IT Consultancy & Project Management",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <DummyContent
        title="IT Consultancy & Project Management"
        content="Expert advice and project management to implement new technologies or improve existing systems."
      />
    ),
  },
  {
    category: "Product",
    title: "Data Backup & Disaster Recovery",
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1104,h=492,fit=crop/A85wJ341aRiKz1w9/1_dz64tpg2amels_ldrw_adq-mnlvDzaXzzh82Wan.png",
    content: (
      <DummyContent
        title="Data Backup & Disaster Recovery"
        content="Regular, automated backups and a clear disaster recovery plan to ensure your critical business data is protected and can be restored quickly in case of an emergency."
      />
    ),
  },
  {
    category: "Product",
    title: "VoIP & Unified Communications",
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1104,h=492,fit=crop/A85wJ341aRiKz1w9/business-voip-phone-systems-092b40eb-640w-dWxy7Gz66oFxnWeW.webp",
    content: (
      <DummyContent
        title="VoIP & Unified Communications"
        content="Streamlined communication systems that combine voice, video, messaging, and collaboration tools into one platform."
      />
    ),
  },
];
