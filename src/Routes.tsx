import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StatusTable from "./components/statustable";
import FlightDetails from "./components/flightdetails";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StatusTable />} />
        <Route path="/flight/:flightNumber" element={<FlightDetails />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
