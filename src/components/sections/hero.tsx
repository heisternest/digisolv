// export function Hero() {
//   return (
//     <>
//       <main>
//         <div className="absolute inset-0 isolate z-[2] hidden contain-strict lg:block">
//           <div className="absolute left-0 top-0 h-[1280px] w-[560px] -translate-y-[350px] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]"></div>
//           <div className="absolute left-0 top-0 h-[1280px] w-[240px] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]"></div>
//           <div className="absolute left-0 top-0 h-[1280px] w-[240px] -translate-y-[350px] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]"></div>
//         </div>

//         <section className="overflow-hidden bg-white dark:bg-transparent">
//           <div className="relative mx-auto  px-6 py-28 lg:py-24">
//             <div className="relative z-10 mx-auto max-w-6xl  text-left">
//               <h1 className="text-title text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
//                 Secure, Scalable, and Trusted IT Solutions
//               </h1>
//               <p className="text-body mx-auto mt-8 max-w-2xl text-xl">
//                 Discover our comprehensive IT support, cybersecurity, and cloud
//                 solutions tailored for your business needs.
//               </p>
//               <div className="flex items-center gap-3 mx-auto">
//                 <div className="btn variant-neutral sz-md  mt-8 w-fit">
//                   <span className="btn-label">
//                     <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
//                       <span className="absolute inset-0 overflow-hidden rounded-full">
//                         <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
//                       </span>
//                       <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
//                         <span>Explore Now</span>
//                         <svg
//                           fill="none"
//                           height="16"
//                           viewBox="0 0 24 24"
//                           width="16"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M10.75 8.75L14.25 12L10.75 15.25"
//                             stroke="currentColor"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="1.5"
//                           />
//                         </svg>
//                       </div>
//                       <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
//                     </button>
//                   </span>
//                 </div>
//                 <div className="btn variant-neutral sz-md mt-8 w-fit">
//                   <span className="btn-label">
//                     <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
//                       <span className="absolute inset-0 overflow-hidden rounded-full">
//                         <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
//                       </span>
//                       <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
//                         <span>Contact Sales</span>
//                         <svg
//                           fill="none"
//                           height="16"
//                           viewBox="0 0 24 24"
//                           width="16"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M10.75 8.75L14.25 12L10.75 15.25"
//                             stroke="currentColor"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="1.5"
//                           />
//                         </svg>
//                       </div>
//                       <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
//                     </button>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }

import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight, Shield } from "lucide-react";
import { Link } from "react-router";
import { GridPattern } from "../magicui/grid-pattern";
import { Button } from "../ui/button";

export function GridPatternDemo() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background ">
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 w-full"
        )}
      />
      <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8">
            <Link
              to="#"
              className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-600 transition-colors hover:bg-gray-100"
            >
              Secure, Scalable and Cloud Powered
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <h1 className="text-center text-4xl font-semibold tracking-normal sm:text-5xl md:text-4xl lg:text-7xl max-w-5xl mx-auto">
              Future-Proof IT Solutions <br /> for Your Business
            </h1>

            <p className="mx-auto max-w-[700px] text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our comprehensive IT support, cybersecurity, and cloud
              solutions tailored for your business needs.
            </p>

            <div className="flex flex-col gap-4 min-[400px]:flex-row items-center justify-center">
              <Button
                size="lg"
                className="bg-[#3366FF] hover:bg-[#2952CC] text-white"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="link" size="lg" className="text-[#3366FF]">
                Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-col gap-4 min-[400px]:flex-row items-center justify-center text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <ArrowUpRight className="h-4 w-4" />
                <span>Next-Gen Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Safe & Secure</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function Hero() {
  return <GridPatternDemo />;
}
