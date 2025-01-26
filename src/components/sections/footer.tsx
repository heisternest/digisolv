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
              <span>Features</span>
            </Link>
            <Link to="#" className="text-body block hover:text-title">
              <span>Solution</span>
            </Link>
            <Link to="#" className="text-body block hover:text-title">
              <span>Customers</span>
            </Link>
            <Link to="#" className="text-body block hover:text-title">
              <span>Pricing</span>
            </Link>
            <Link to="#" className="text-body block hover:text-title">
              <span>Help</span>
            </Link>
            <Link to="#" className="text-body block hover:text-title">
              <span>About</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
