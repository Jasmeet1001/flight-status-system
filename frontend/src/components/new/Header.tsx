import { Link } from "react-router-dom"
import { PlaneIcon } from "../ui/customIcons/icons"


export default function HeaderNew() {

    return (
      <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center">
        <Link to="/" className="flex items-center justify-center">
          <PlaneIcon />
          <span className="sr-only">Flight Status</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            to="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Notifications
          </Link>
          <Link
            to="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Sign In
          </Link>
        </nav>
      </header>
    );
}