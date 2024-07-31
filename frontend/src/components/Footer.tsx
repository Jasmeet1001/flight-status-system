import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <footer className="bg-primary text-primary-foreground py-4 px-6">
        <div className="flex items-center justify-between">
          <p className="text-sm">
            &copy; 2023 Indigo Airlines. All rights reserved.
          </p>
          <nav className="flex items-center gap-4">
            <Link to="#" className="text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm hover:underline">
              Terms of Service
            </Link>
            <Link to="#" className="text-sm hover:underline">
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    );
}