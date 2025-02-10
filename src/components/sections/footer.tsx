import { Link } from "react-router";

export default function FooterSection() {
  return (
    <footer className="border-b bg-white py-12 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap justify-between gap-6">
          <span className="text-caption order-last block text-center text-sm md:order-first">
            © 2025, DigiSolv All rights reserved
          </span>
          <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
            <Link to="#" className="text-body block hover:text-title">
              <span>Contact Us</span>
            </Link>
            <Link to="#" className="text-body block hover:text-title">
              <span>About Us</span>
            </Link>
            <Link to="#" className="text-body block hover:text-title">
              <span>Testimonials</span>
            </Link>
            <Link to="#" className="text-body block hover:text-title">
              <span>Privacy</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
