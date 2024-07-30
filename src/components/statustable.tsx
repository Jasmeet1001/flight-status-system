/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Flight, SearchField } from "@/types";
import { BellIcon } from "./ui/customIcons/icons";
import { Separator } from "./ui/separator";

export default function StatusTable({ flightSearch }: SearchField) {
  const [sortColumn, setSortColumn] = useState("flightNumber");
  const [sortDirection, setSortDirection] = useState("asc");
  const [flights, setFlights] = useState([
    {
      flightNumber: "AA123",
      departureAirport: "JFK",
      arrivalAirport: "LAX",
      departureTime: "10:30 AM",
      arrivalTime: "1:45 PM",
      gate: "B12",
      status: "On Time",
    },
    {
      flightNumber: "UA456",
      departureAirport: "ORD",
      arrivalAirport: "SFO",
      departureTime: "8:00 AM",
      arrivalTime: "10:15 AM",
      gate: "C5",
      status: "Delayed",
    },
    {
      flightNumber: "DL789",
      departureAirport: "ATL",
      arrivalAirport: "MIA",
      departureTime: "12:00 PM",
      arrivalTime: "2:30 PM",
      gate: "A7",
      status: "Boarding",
    },
    {
      flightNumber: "SW101",
      departureAirport: "MDW",
      arrivalAirport: "HOU",
      departureTime: "3:45 PM",
      arrivalTime: "5:55 PM",
      gate: "D2",
      status: "Cancelled",
    },
  ]);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message:
        "Attention passengers: Due to inclement weather, all flights are experiencing delays. Please check with your airline for updated departure times.",
      timestamp: "2023-07-30 11:30 AM",
    },
    {
      id: 2,
      message:
        "Flight AA123 from JFK to LAX has been delayed by 30 minutes due to a mechanical issue. We apologize for the inconvenience.",
      timestamp: "2023-07-30 10:15 AM",
    },
    {
      id: 3,
      message:
        "Attention all passengers: The security checkpoint at Terminal B is currently experiencing longer than normal wait times. Please arrive at the airport at least 2 hours before your scheduled departure.",
      timestamp: "2023-07-30 9:00 AM",
    },
  ]);

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedFlights = useMemo(() => {
    return flights.sort((a, b) => {
      if (a[sortColumn as keyof Flight] < b[sortColumn as keyof Flight])
        return sortDirection === "asc" ? -1 : 1;
      if (a[sortColumn as keyof Flight] > b[sortColumn as keyof Flight])
        return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [flights, sortColumn, sortDirection]);

  const filteredFlights = useMemo(() => {
    if (flightSearch.trim() === "") {
      return sortedFlights;
    }
    return sortedFlights.filter((flight) => {
      return (
        flight.flightNumber
          .toLowerCase()
          .includes(flightSearch.toLowerCase()) ||
        flight.departureAirport
          .toLowerCase()
          .includes(flightSearch.toLowerCase()) ||
        flight.arrivalAirport.toLowerCase().includes(flightSearch.toLowerCase())
      );
    });
  }, [sortedFlights, flightSearch]);
  return (
    <>
      <div className="mb-6">
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
                onClick={() => handleSort("gate")}
              >
                Gate
                {sortColumn === "gate" && (
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
                  <Link to={`/flight/${flight.flightNumber}`}>
                    {flight.flightNumber}
                  </Link>
                </TableCell>
                <TableCell>{flight.departureAirport}</TableCell>
                <TableCell>{flight.arrivalAirport}</TableCell>
                <TableCell>{flight.departureTime}</TableCell>
                <TableCell>{flight.arrivalTime}</TableCell>
                <TableCell>{flight.gate}</TableCell>
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
        </Table>
      </div>
      <Separator />
      <div className="border rounded-lg mt-12">
        <div className="bg-muted text-black p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="font-semibold text-lg">Notifications</div>
          </div>
        </div>
        <Separator />
        <div className="space-y-5 overflow-y-scroll p-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start gap-4">
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
