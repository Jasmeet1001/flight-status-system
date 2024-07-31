import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import Footer from "./components/Footer";
import StatusTable from "./components/StatusTable";
import FlightDetails from "./components/FlightDetails";

function AppRoutes() {
  const [flightSearch, setFlightSearch] = useState("");

  const handleFlightSearch = (value: string) => {
    setFlightSearch(value);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header
          flightSearch={flightSearch}
          onSearchChange={handleFlightSearch}
        />
        <main className="flex-1 bg-background p-6">
          <Routes>
            <Route
              path="/"
              element={<StatusTable flightSearch={flightSearch} />}
            />
            <Route path="/flight/:flightNumber" element={<FlightDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRoutes;
