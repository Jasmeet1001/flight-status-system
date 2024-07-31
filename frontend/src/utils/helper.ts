export const locationCodes: Record<string, string> = {
  "San Francisco": "SFO",
  "New York": "NYC",
  "Los Angeles": "LAX",
  Delhi: "DEL",
  Mumbai: "BOM",
};

export const handleTime = (timeval: string) => {
  const date = new Date(timeval);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  return formattedTime;
};
