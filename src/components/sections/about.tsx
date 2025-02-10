// export default function About() {
//   return (
//     <section className="container mx-auto px-4 py-8 md:py-16 space-y-16">
//       {/* Header */}
//       <div className="text-center max-w-2xl mx-auto space-y-4">
//         <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
//           UNIFIED IT SOLUTIONS FOR MODERN BUSINESSES
//         </h1>
//         <p className="text-sm md:text-base text-muted-foreground">
//           As a Web Development Services We are Committed to Building Custom Web
//           Solutions that Drive Business Success.
//         </p>
//       </div>

//       {/* Mission Section */}
//       <div className="grid md:grid-cols-2 gap-8 items-center">
//         <div className="relative aspect-video md:aspect-square w-full h-[200px] md:h-auto">
//           <img
//             src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Team working on laptop"
//             className="object-cover rounded-lg"
//           />
//         </div>
//         <div className="space-y-6 bg-slate-50 p-6 md:p-8 rounded-lg">
//           <div className="space-y-4">
//             <p className="text-sm font-semibold text-muted-foreground">
//               Who We Are
//             </p>
//             <h2 className="text-2xl md:text-3xl font-bold">
//               Innovative IT Solutions for Modern Businesses
//             </h2>
//             <p className="text-sm md:text-base text-muted-foreground">
//               DigiSolv delivers secure, scalable, and reliable IT solutions to
//               optimize your digital infrastructure. Our expertise spans managed
//               IT services, cybersecurity, and cloud solutions, all tailored to
//               meet your unique business objectives.
//             </p>
//             <Button
//               variant="link"
//               className="text-blue-600 p-0 h-auto font-semibold text-sm md:text-base"
//             >
//               Contact Sales
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Values Section */}
//       <div className="grid md:grid-cols-2 gap-8 items-center">
//         <div className="space-y-6 bg-slate-50 p-6 md:p-8 rounded-lg order-2 md:order-1">
//           <div className="space-y-4">
//             <p className="text-sm font-semibold text-muted-foreground">
//               Why DigiSolv?
//             </p>
//             <h2 className="text-2xl md:text-3xl font-bold">
//               Your Trusted Partner for IT Growth and Security
//             </h2>
//             <p className="text-sm md:text-base text-muted-foreground">
//               We take a proactive approach to prevent IT issues before they
//               arise, ensuring seamless operations. Backed by a team of experts,
//               we empower businesses to thrive in a rapidly evolving digital
//               world with comprehensive support and forward-thinking innovation.
//             </p>
//             <Button
//               variant="link"
//               className="text-blue-600 p-0 h-auto font-semibold text-sm md:text-base"
//             >
//               Explore Now
//             </Button>
//           </div>
//         </div>
//         <div className="relative aspect-video md:aspect-square w-full h-[200px] md:h-auto order-1 md:order-2">
//           <img
//             src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Team collaboration"
//             className="object-cover rounded-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

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

  return (
    <section className="py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-base md:text-lg mb-3">WE'RE HERE TO HELP YOU</p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Get to know us better
          </h2>
        </div>

        <div className="grid md:grid-cols-2  gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg p-1">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="rounded-lg  h-full object-cover"
                />
              </div>

              <p className="text-muted-foreground">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
