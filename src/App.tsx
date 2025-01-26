import { AppleCardsCarouselDemo } from "./components/cards";
import { LogoCarouselDemo } from "./components/logo-carousel";
import { Navbar } from "./components/navbar";
import About from "./components/sections/about";
import { GlobeDemo } from "./components/sections/animated-hero";
import { ContactPage } from "./components/sections/contact";
import FooterSection from "./components/sections/footer";
import { Hero } from "./components/sections/hero";
import { AnimatedTestimonialsDemo } from "./components/sections/testimonials";

function App() {
  return (
    <>
      <Navbar />
      <div className="my-44">
        <div className="container gap-40 my-10 mx-auto flex flex-col md:flex-row w-full justify-between">
          <Hero />
          <GlobeDemo />
        </div>
      </div>
      <div className="mt-32 px-0 lg:px-32 md:px-32 ">
        <About />
      </div>

      <div className="mt-30">
        <AppleCardsCarouselDemo />
      </div>
      {/* <div className="mt-32 px-0 lg:px-54 md:px-32 ">
        <div className="my-10">
          <h1 className="text-center text-4xl font-bold text-gray-800 ">
            Our Projects
          </h1>
          <p className="text-center text-lg text-gray-600">
            We have worked on a wide range of projects. Here are some of our
            projects.
          </p>
        </div>
        <BentoDemo />
      </div> */}

      <div className="mt-5">
        <LogoCarouselDemo />
      </div>

      <div className="my-40">
        <h1 className="text-center text-4xl font-bold text-gray-800">
          What our customers say
        </h1>
        <AnimatedTestimonialsDemo />
      </div>
      <div className=" my-10">
        <ContactPage />
      </div>
      <div className="mt-5">
        <FooterSection />
      </div>
    </>
  );
}

export default App;
