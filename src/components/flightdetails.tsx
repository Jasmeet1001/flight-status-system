import { useParams } from "react-router-dom";
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, CheckIcon, ClockIcon, DoorOpenIcon, InfoIcon, LuggageIcon, PlaneIcon, RadarIcon } from "./ui/customIcons/icons";

export default function FlightDetails() {
  const { flightNumber } = useParams<{ flightNumber: string }>();

  return (
    <div className="m-5">
      <div className="grid gap-8">
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <PlaneIcon />
              <div>
                <div className="text-2xl font-bold">Flight #AB123</div>
                <div className="text-muted-foreground">Acme Airlines</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xl font-medium">SFO</div>
                <div className="text-muted-foreground">San Francisco</div>
              </div>
              <ArrowRightIcon />
              <div className="text-left">
                <div className="text-xl font-medium">JFK</div>
                <div className="text-muted-foreground">New York</div>
              </div>
            </div>
          </div>
          <Separator />
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="grid gap-1">
              <div className="text-muted-foreground">Scheduled Departure</div>
              <div className="flex items-center gap-2">
                <ClockIcon />
                <div className="text-xl font-medium">10:30 AM</div>
              </div>
            </div>
            <div className="grid gap-1">
              <div className="text-muted-foreground">Actual Departure</div>
              <div className="flex items-center gap-2">
                <ClockIcon />
                <div className="text-xl font-medium">10:25 AM</div>
              </div>
            </div>
            <div className="grid gap-1">
              <div className="text-muted-foreground">Scheduled Arrival</div>
              <div className="flex items-center gap-2">
                <ClockIcon />
                <div className="text-xl font-medium">5:45 PM</div>
              </div>
            </div>
            <div className="grid gap-1">
              <div className="text-muted-foreground">Actual Arrival</div>
              <div className="flex items-center gap-2">
                <ClockIcon />
                <div className="text-xl font-medium">5:40 PM</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <DoorOpenIcon />
              <div>
                <div className="text-xl font-medium">Gate Information</div>
                <div className="text-muted-foreground">Departure: Gate A12 | Arrival: Gate B5</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xl font-medium">Baggage Claim</div>
                <div className="text-muted-foreground">Carousel 5</div>
              </div>
              <LuggageIcon />
            </div>
          </div>
          <Separator />
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="grid gap-1">
              <div className="text-muted-foreground">Flight Status</div>
              <div className="flex items-center gap-2">
                <CheckIcon />
                <div className="text-xl font-medium">On Time</div>
              </div>
            </div>
            <div className="grid gap-1">
              <div className="text-muted-foreground">Delay Reason</div>
              <div className="flex items-center gap-2">
                <InfoIcon  />
                <div className="text-xl font-medium">No Delays</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <RadarIcon />
            <div>
              <div className="text-xl font-medium">Flight Tracking</div>
              <div className="text-muted-foreground">Get real-time updates on your flight's location and status.</div>
            </div>
          </div>
          <Separator />
          <Button className="w-full">Track Flight</Button>
        </div>
      </div>
    </div>
  )
}