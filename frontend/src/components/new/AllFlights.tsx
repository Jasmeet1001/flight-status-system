import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { SetStateAction, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Flight, HeaderProps, SearchField } from "@/types";
import { handleTime, locationCodes } from "@/utils/helper";
import { Search } from "./Search";

export default function AllFlights() {
  // const [sortColumn, setSortColumn] = useState("flightNumber");
  // const [sortDirection, setSortDirection] = useState("asc");
  const [flights, setFlights] = useState<Flight[]>([]);
  const [LatestflightChanges, setLatestflightChanges] = useState<Flight[]>([]);
  // const [notifications, setNotifications] = useState<Notification[]>([]);

  const [flightSearch, setFlightSearch] = useState("");

  const handleFlightSearch = (value: string) => {
    setFlightSearch(value);
  };

  const locationAbbr = (loc: string) => {
    return locationCodes[loc] || loc;
  };

  const fetchLatestFlight = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/recent-flight-changes"
      );
      if (response.data.length === 0) {
        setLatestflightChanges([]);
      }
      setLatestflightChanges(response.data);
    } catch (error) {
      console.error("Error fetching flights data:", error);
    }
  };

  const fetchFlights = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/flights/");
      setFlights(response.data);
    } catch (error) {
      console.error("Error fetching flights data:", error);
    }
  };

  // const fetchNotifications = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:8000/api/notifications/"
  //     );
  //     setNotifications(response.data as Notification[]);
  //   } catch (error) {
  //     console.error("Error fetching notifications data:", error);
  //   }
  // };

  useEffect(() => {
    fetchLatestFlight();
    fetchFlights();
    // fetchNotifications();

    const intervalFId = setInterval(fetchFlights, 30000);
    // const intervalNId = setInterval(fetchNotifications, 30000);
    return () => {
      clearInterval(intervalFId);
      // clearInterval(intervalNId);
    };
  }, []);

  // const handleSort = (column: SetStateAction<string>) => {
  //   if (sortColumn === column) {
  //     setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  //   } else {
  //     setSortColumn(column);
  //     setSortDirection("asc");
  //   }
  // };

  //   const sortedFlights = useMemo(() => {
  //     return flights.sort((a, b) => {
  //       if (a[sortColumn] < b[sortColumn])
  //         return sortDirection === "asc" ? -1 : 1;
  //       if (a[sortColumn] > b[sortColumn])
  //         return sortDirection === "asc" ? 1 : -1;
  //       return 0;
  //     });
  //   }, [flights, sortColumn, sortDirection]);

  //   const filteredFlights: Flight[] = useMemo(() => {
  //     if (flightSearch.trim() === "") {
  //       return sortedFlights;
  //     }
  //     return sortedFlights.filter((flight: Flight) => {
  //       return (
  //         flight.flight_id.toLowerCase().includes(flightSearch.toLowerCase()) ||
  //         flight.scheduled_departure
  //           .toLowerCase()
  //           .includes(flightSearch.toLowerCase()) ||
  //         flight.scheduled_arrival
  //           .toLowerCase()
  //           .includes(flightSearch.toLowerCase())
  //       );
  //     });
  //   }, [sortedFlights, flightSearch]);
  return (
    <>
      <Search flightSearch={flightSearch} onSearchChange={handleFlightSearch} />
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Latest Flight Updates
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {LatestflightChanges
                  ? LatestflightChanges.map((flight, index) => (
                      <Card key={index} className="pt-5">
                        <CardContent className="grid gap-2">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium">
                              Flight {flight.flight_id}
                            </div>
                            <div
                              className={`px-2 py-1 rounded-md text-green-50 text-xs font-medium ${
                                flight.status === "On Time"
                                  ? "bg-green-100 text-green-600"
                                  : flight.status === "Delayed"
                                  ? "bg-yellow-100 text-yellow-600"
                                  : flight.status === "Boarding"
                                  ? "bg-blue-100 text-blue-600"
                                  : "bg-red-100 text-red-600"
                              }`}
                            >
                              {flight.status}
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="text-xs text-muted-foreground">
                                Departure
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="text-lg font-medium">
                                  {locationAbbr(flight.departure_location)}
                                </div>
                              </div>
                              <div>
                                {handleTime(flight.scheduled_departure)}
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground">
                                Arrival
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="text-lg font-medium">
                                  {locationAbbr(flight.arrival_location)}
                                </div>
                              </div>
                              <div>{handleTime(flight.scheduled_arrival)}</div>
                            </div>
                          </div>
                        </CardContent>
                        <Separator />
                        <CardFooter className="flex justify-end p-5">
                          {/* <div className="text-xs text-muted-foreground">
                          Duration: 7h 15m
                        </div> */}
                          <Button variant="outline" size="sm">
                            <Link to={`/flight/${flight.flight_id}`}>
                              View Details
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))
                  : flights.map((flight, index) => (
                      <Card key={index}>
                        <CardContent className="grid gap-2">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium">
                              Flight {flight.flight_id}
                            </div>
                            <div className="bg-green-500 px-2 py-1 rounded-md text-green-50 text-xs font-medium">
                              {flight.status}
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="text-xs text-muted-foreground">
                                Departure
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="text-lg font-medium">
                                  {locationAbbr(flight.departure_location)}
                                </div>
                              </div>
                              <div>
                                {handleTime(flight.scheduled_departure)}
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground">
                                Arrival
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="text-lg font-medium">
                                  {locationAbbr(flight.arrival_location)}
                                </div>
                              </div>
                              <div>{handleTime(flight.scheduled_arrival)}</div>
                            </div>
                          </div>
                        </CardContent>
                        <Separator />
                        <CardFooter className="flex items-center justify-between">
                          {/* <div className="text-xs text-muted-foreground">
                          Duration: 7h 15m
                        </div> */}
                          <Button variant="outline" size="sm">
                            <Link to={`/flight/${flight.flight_id}`}>
                              View Details
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">All Flights</h2>
              <div className="mt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Flight</TableHead>
                      <TableHead>Departure</TableHead>
                      <TableHead>Arrival</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {flights.map((flight, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="text-sm font-medium">
                              {flight.flight_id}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <div className="text-sm font-medium">
                              {locationAbbr(flight.departure_location)}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {handleTime(flight.scheduled_departure)}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <div className="text-sm font-medium">
                              {locationAbbr(flight.arrival_location)}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {handleTime(flight.scheduled_arrival)}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div
                            className={`px-2 py-1 rounded-md text-green-50 text-xs font-medium ${
                              flight.status === "On Time"
                                ? "bg-green-100 text-green-600"
                                : flight.status === "Delayed"
                                ? "bg-yellow-100 text-yellow-600"
                                : flight.status === "Boarding"
                                ? "bg-blue-100 text-blue-600"
                                : "bg-red-100 text-red-600"
                            }`}
                          >
                            {flight.status}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
