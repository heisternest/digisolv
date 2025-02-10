"use client";

import { motion } from "framer-motion";

export default function About() {
  const features = [
    {
      title: "Innovative IT Solutions for Modern Businesses",
      description:
        "DigiSolv delivers secure, scalable, and reliable IT solutions to optimize your digital infrastructure.",
      image:
        "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "We empower businesses to thrive in a rapidly evolving digital world with comprehensive support and forward-thinking innovation.",
    },
    {
      title: "Your Trusted Partner for IT Growth and Security",
      description:
        "We take a proactive approach to prevent IT issues before they arise.",
      image:
        "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Backed by a team of experts, we empower businesses to thrive in a rapidly evolving digital world with comprehensive support and forward-thinking innovation.",
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
            Get to know us better
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
