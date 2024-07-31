import { ChangeEvent, FormEvent } from "react";
import { PlaneIcon } from "./ui/customIcons/icons";
import { Input } from "./ui/input";
import { HeaderProps } from "@/types";
import { Link } from "react-router-dom";
// import SideBar from "./Sidebar";

export default function Header({ flightSearch, onSearchChange }: HeaderProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      {/* <SideBar /> */}
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PlaneIcon />
            <span className="hidden sm:block text-base lg:text-2xl font-semibold">
              <Link to="/">Indigo Airlines</Link>
            </span>
          </div>
          <div className="flex-1 max-w-md">
            <form onSubmit={handleSubmit} className="flex justify-end w-full">
              <Input
                type="text"
                placeholder="Search by flight number, departure, or arrival"
                value={flightSearch}
                onChange={handleChange}
                className="w-auto md:w-full px-4 py-2 rounded-md bg-primary-foreground text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </form>
          </div>
        </div>
      </header>
    </>
  );
}
