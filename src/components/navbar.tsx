import * as React from "react";
import { Link } from "react-router";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-200  py-1",
        isScrolled && "bg-white/80 backdrop-blur-md shadow-sm"
      )}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold">
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=394,fit=crop,q=95/A85wJ341aRiKz1w9/full-png-YNqyx8y0MVTpGv3W.png"
            alt="Logo"
            className="w-32"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-lg hover:text-primary">
            Home
          </Link>
          <Link to="/industries" className="text-lg hover:text-primary">
            Services
          </Link>
        </div>

        {/* Search Bar */}

        {/* Auth Buttons */}
        <div className="flex items-center gap-2">
          <Link to="/contact" className="cursor-pointer">
            <Button
              size="lg"
              className="bg-primary hover:bg-[#2952CC] text-white cursor-pointer"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
