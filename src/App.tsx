import { AppleCardsCarouselDemo } from "./components/cards";
import { Navbar } from "./components/navbar";
import About from "./components/sections/about";
import { ContactPage } from "./components/sections/contact";
import FooterSection from "./components/sections/footer";
import { Hero } from "./components/sections/hero";

function App() {
  return (
    <>
      <Navbar />
      <div className="">
        <Hero />
      </div>
      <div className=" px-0 lg:px-32 md:px-32 ">
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
