/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useMemo, useEffect, SetStateAction } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Flight, SearchField } from "@/types";
import { BellIcon } from "./ui/customIcons/icons";
import { Separator } from "./ui/separator";
import axios from "axios";
import { handleTime } from "@/utils/helper";

export default function StatusTable({ flightSearch }: SearchField) {
  const [sortColumn, setSortColumn] = useState("flightNumber");
  const [sortDirection, setSortDirection] = useState("asc");
  const [flights, setFlights] = useState([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const fetchFlights = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/flights/");
      setFlights(response.data);
    } catch (error) {
      console.error("Error fetching flights data:", error);
    }
  };

  const fetchNotifications = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/notifications/"
      );
      setNotifications(response.data as Notification[]);
    } catch (error) {
      console.error("Error fetching notifications data:", error);
    }
  };
  
  useEffect(() => {
    fetchFlights();
    fetchNotifications();

    const intervalFId = setInterval(fetchFlights, 30000);
    const intervalNId = setInterval(fetchNotifications, 30000);
    console.log("reloaded")
    return () => {
      clearInterval(intervalFId)
      clearInterval(intervalNId)
    };

  }, []);

  const handleSort = (column: SetStateAction<string>) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedFlights = useMemo(() => {
    return flights.sort((a, b) => {
      if (a[sortColumn] < b[sortColumn])
        return sortDirection === "asc" ? -1 : 1;
      if (a[sortColumn] > b[sortColumn])
        return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [flights, sortColumn, sortDirection]);

  const filteredFlights: Flight[] = useMemo(() => {
    if (flightSearch.trim() === "") {
      return sortedFlights;
    }
    return sortedFlights.filter((flight: Flight) => {
      return (
        flight.flight_id.toLowerCase().includes(flightSearch.toLowerCase()) ||
        flight.scheduled_departure
          .toLowerCase()
          .includes(flightSearch.toLowerCase()) ||
        flight.scheduled_arrival
          .toLowerCase()
          .includes(flightSearch.toLowerCase())
      );
    });
  }, [sortedFlights, flightSearch]);
  return (
    <>
      <div className="mb-6 select-none">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("flightNumber")}
              >
                Flight Number
                {sortColumn === "flightNumber" && (
                  <span className="ml-2">
                    {sortDirection === "asc" ? "\u25B2" : "\u25BC"}
                  </span>
                )}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("departureAirport")}
              >
                Departure
                {sortColumn === "departureAirport" && (
                  <span className="ml-2">
                    {sortDirection === "asc" ? "\u25B2" : "\u25BC"}
                  </span>
                )}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("arrivalAirport")}
              >
                Arrival
                {sortColumn === "arrivalAirport" && (
                  <span className="ml-2">
                    {sortDirection === "asc" ? "\u25B2" : "\u25BC"}
                  </span>
                )}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("departureTime")}
              >
                Departure Time
                {sortColumn === "departureTime" && (
                  <span className="ml-2">
                    {sortDirection === "asc" ? "\u25B2" : "\u25BC"}
                  </span>
                )}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("arrivalTime")}
              >
                Arrival Time
                {sortColumn === "arrivalTime" && (
                  <span className="ml-2">
                    {sortDirection === "asc" ? "\u25B2" : "\u25BC"}
                  </span>
                )}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("arrivalGate")}
              >
                Arrival Gate
                {sortColumn === "arrivalGate" && (
                  <span className="ml-2">
                    {sortDirection === "asc" ? "\u25B2" : "\u25BC"}
                  </span>
                )}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("departureGate")}
              >
                Departure Gate
                {sortColumn === "departureGate" && (
                  <span className="ml-2">
                    {sortDirection === "asc" ? "\u25B2" : "\u25BC"}
                  </span>
                )}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("status")}
              >
                Status
                {sortColumn === "status" && (
                  <span className="ml-2">
                    {sortDirection === "asc" ? "\u25B2" : "\u25BC"}
                  </span>
                )}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredFlights.map((flight, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Link to={`/flight/${flight.flight_id}`}>
                    {flight.flight_id}
                  </Link>
                </TableCell>
                <TableCell>{flight.arrival_location}</TableCell>
                <TableCell>{flight.departure_location}</TableCell>
                <TableCell>{handleTime(flight.scheduled_departure)}</TableCell>
                <TableCell>{handleTime(flight.scheduled_arrival)}</TableCell>
                <TableCell>{flight.arrival_gate}</TableCell>
                <TableCell>{flight.departure_gate}</TableCell>
                <TableCell>
                  <div
                    className={`px-2 py-1 rounded-md text-sm font-medium ${
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
          <TableFooter>Pagination Here</TableFooter>
        </Table>
      </div>
      <Separator />
      <div className="rounded-lg mt-12">
        <div className=" text-black pb-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="font-semibold text-lg">Notifications</div>
          </div>
        </div>
        <Separator />
        <div className="space-y-5 overflow-y-auto p-4">
          {notifications.map((notification, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center text-primary-foreground">
                <BellIcon />
              </div>
              <div>
                <p className="font-medium">{notification.message}</p>
                <p className="text-sm text-muted-foreground">
                  {notification.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
