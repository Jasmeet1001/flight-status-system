export type Flight = {
  flight_id: string;
  airline: string;
  status: string;
  departure_gate: string;
  arrival_gate: string;
  scheduled_departure: string;
  scheduled_arrival: string;
  actual_departure: string | null;
  actual_arrival: string | null;
  departure_location: string;
  arrival_location: string;
};

export type Notification = {
  notificationId: number;
  flightId: string;
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
