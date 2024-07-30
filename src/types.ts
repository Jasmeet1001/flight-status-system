export type Flight = {
  flightNumber: string;
  departureAirport: string;
  arrivalAirport: string;
  departureTime: string;
  arrivalTime: string;
  gate: string;
  status: string;
};

export type Notification = {
  id: number;
  message: string;
  timestamp: string;
};

export interface SearchField {
  flightSearch: string;
}

export interface HeaderProps {
  flightSearch: string;
  onSearchChange: (value: string) => void;
}
