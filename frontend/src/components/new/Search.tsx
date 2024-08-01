import { Input } from "../ui/input";
import { ChangeEvent, FormEvent } from "react";
import { HeaderProps } from "@/types";
import { SearchIcon } from "../ui/customIcons/icons";

export const Search = ({ flightSearch, onSearchChange }: HeaderProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <section className="bg-primary py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 space-y-6">
        <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
          Indigo Real-Time Flight Status
        </h1>
        <p className="max-w-[700px] text-primary-foreground/80 md:text-xl">
          Get up-to-date information on your flights, including delays, gate
          changes, and more.
        </p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="relative">
            <SearchIcon />
            <Input
              type="search"
              placeholder="Enter flight number or airport"
              value={flightSearch}
              onChange={handleChange}
              className="bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 pl-12 pr-4 py-3 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-primary focus:bg-primary-foreground/20"
            />
          </div>
        </form>
      </div>
    </section>
  );
};
