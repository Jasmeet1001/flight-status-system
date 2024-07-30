import { useState, ChangeEvent } from "react";
import { PlaneIcon } from "./ui/customIcons/icons";
import { Input } from "./ui/input";

export default function Header() {
  const [flightSearch, setFlightSearch] = useState("");
  const handleFlightSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setFlightSearch(e.target.value);
  };

  return (
    <header className="bg-primary text-primary-foreground py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PlaneIcon />
          <span className="text-2xl font-bold">XYZ Airlines</span>
        </div>
        <div className="flex-1 max-w-md">
          <Input
            type="text"
            placeholder="Search by flight number, departure, or arrival"
            value={flightSearch}
            onChange={handleFlightSearch}
            className="w-full px-4 py-2 rounded-md bg-primary-foreground text-primary focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
    </header>
  );
}
