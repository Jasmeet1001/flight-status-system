import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import { useState } from "react";
import Footer from "./components/Footer";
// import StatusTable from "./components/StatusTable";
import FlightDetails from "./components/FlightDetails";
import AllFlights from "./components/new/AllFlights";
import HeaderNew from "./components/new/Header";

function AppRoutes() {
  return (
    <Router>
      {/* <div className="flex flex-col min-h-screen"> */}
      <div className="flex flex-col min-h-dvh">
        {/* <Header
          flightSearch={flightSearch}
          onSearchChange={handleFlightSearch}
        /> */}
        <HeaderNew />
        {/* <main className="flex-1 bg-background py-6 mx-10"> */}
        <main className="flex-1">
          <Routes>
            {/* <Route
              path="/"
              element={<StatusTable flightSearch={flightSearch} />}
            /> */}
            <Route
              path="/"
              element={
                <AllFlights
                />
              }
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
