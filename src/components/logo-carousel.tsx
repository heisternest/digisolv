import { LogoCarousel } from "./ui/carousel";

export function LogoCarouselDemo() {
  return (
    <div className="space-y-8  py-24">
      <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center space-y-8">
        <div className="text-center text-5xl font-bold text-gray-800 mb-20">
          The best are already here
        </div>

        <LogoCarousel columnCount={3} />
      </div>
    </div>
  );
}
