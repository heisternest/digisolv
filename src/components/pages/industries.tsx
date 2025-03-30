import { motion } from "framer-motion";
import { Navbar } from "../navbar";
import FooterSection from "../sections/footer";

export default function IndustriesPage() {
  return (
    <div>
      <Navbar />
      <Services />
      <div className="mt-5">
        <FooterSection />
      </div>
    </div>
  );
}

function Services() {
  const features = [
    {
      title: "IT support and Help Desk",
      description:
        "DigiSolv delivers secure, scalable, and reliable IT solutions to optimize your digital infrastructure.",
      image:
        "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=1132&h=506",
      text: "With our IT support and help desk services, we ensure that your technology runs smoothly, allowing you to focus on your core business.",
    },
    {
      title: "Cybersecurity & Threat Management",
      description:
        "We take a proactive approach to prevent IT issues before they arise.",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1104,h=492,fit=crop/A85wJ341aRiKz1w9/cyber-security-data-protection-business-technology-privacy-concept-cyber-security-data-protection-business-technology-privacy-123053001-dOqyB34wDZtLoB0D.webp",
      text: "Our cybersecurity experts work tirelessly to protect your business from evolving threats, ensuring your data and systems are secure.",
    },
    {
      title: "Network Management & Monitoring",
      description:
        "Optimize your business infrastructure with our scalable cloud solutions and reliable network management services, ensuring seamless connectivity and robust performance.",
      image:
        "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?auto=format&fit=crop&w=1040&h=504",
      text: "Our network management services ensure that your systems are always up and running, providing you with peace of mind.",
    },
    {
      title: "Cloud Services & Solutions",
      description:
        "We provide comprehensive cloud solutions tailored to your business needs.",
      image:
        "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Our cloud services enable you to scale your operations efficiently while maintaining security and reliability.",
    },
    {
      title: "Data Backup & Disaster Recovery",
      description:
        "Protect your business from data loss with our comprehensive backup and disaster recovery solutions.",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1104,h=492,fit=crop/A85wJ341aRiKz1w9/14_01edge-cloud-computing-AoPvMz4XD1S0pjk4.jpg",
      text: "We ensure that your critical data is backed up and can be restored quickly in case of an emergency.",
    },
    {
      title: "IT Consulting & Strategy",
      description:
        "Our IT consulting services help you align technology with your business goals.",
      image:
        "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "We work with you to develop a strategic IT roadmap that supports your growth and innovation.",
    },
    {
      title: "Data Backup & Disaster Recovery",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1104,h=492,fit=crop/A85wJ341aRiKz1w9/1_dz64tpg2amels_ldrw_adq-mnlvDzaXzzh82Wan.png",
      description:
        "Streamlined communication systems that combine voice, video, messaging, and collaboration tools into one platform.",
      text: "Ensure your business continuity with our data backup and disaster recovery solutions, designed to protect your critical information.",
    },
    {
      title: "VoIP & Unified Communications",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1104,h=492,fit=crop/A85wJ341aRiKz1w9/business-voip-phone-systems-092b40eb-640w-dWxy7Gz66oFxnWeW.webp",
      description:
        "Streamlined communication systems that combine voice, video, messaging, and collaboration tools into one platform.",
      text: "Enhance your communication with our VoIP and unified communications solutions, designed to improve collaboration and productivity.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base md:text-lg mb-3">
            WE&apos;RE HERE TO HELP YOU
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            We offer a wide range of services
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="space-y-6"
              variants={itemVariants}
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>

              <motion.div
                className="relative aspect-[4/3] w-full overflow-hidden rounded-lg p-1"
                variants={imageVariants}
              >
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="rounded-lg h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </motion.div>

              <motion.p
                className="text-muted-foreground"
                variants={itemVariants}
              >
                {feature.text}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
