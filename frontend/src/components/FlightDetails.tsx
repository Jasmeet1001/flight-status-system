// import { useParams } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  DoorOpenIcon,
  InfoIcon,
  LuggageIcon,
  RadarIcon,
  RefreshCwIcon,
} from "./ui/customIcons/icons";
import { useParams } from "react-router-dom";

export default function FlightDetails() {
    const { flightNumber } = useParams<{ flightNumber: string }>();

  return (
    <div className="m-5">
      <div className="grid gap-8">
        <div className="grid gap-4">
          <div className="flex flex-col md:flex-row items-center justify-between p-5 rounded-md shadow-sm bg-blue-500 text-white">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div>
                <div className="text-xl font-semibold">Flight {flightNumber}</div>
                <div className="md:text-left text-center">Acme Airlines</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xl font-medium">SFO</div>
                <div className="">San Francisco</div>
              </div>
              <ArrowRightIcon />
              <div className="text-left">
                <div className="text-xl font-medium">JFK</div>
                <div className="">New York</div>
              </div>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-muted text-black p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="font-semibold text-lg">Flight Details</div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 text-black border-blue-50 hover:bg-blue-50 hover:text-blue-500"
              >
                <RefreshCwIcon />
                Refresh
              </Button>
            </div>
            <Separator />
            <div className="p-6 grid gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">
                    Flight Number
                  </div>
                  <div className="font-medium">AA123</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">Airline</div>
                  <div className="font-medium">American Airlines</div>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">Departure</div>
                  <div className="font-medium">
                    <div>SFO - San Francisco</div>
                    <div className="flex flex-col my-5">
                      <span className="font-normal mt-2">Scheduled:</span> 10:30
                      AM
                      <span className="font-normal mt-2"> Actual:</span> 10:25
                      AM
                    </div>
                  </div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">Arrival</div>
                  <div className="font-medium">
                    <div>JFK - New York</div>
                    <div className="flex flex-col my-5">
                      <span className="font-normal mt-2">Scheduled:</span> 5:45
                      PM
                      <span className="font-normal mt-2"> Actual:</span> 5:40 PM
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">Status</div>
                  <div className="flex items-center gap-2">
                    <div className="px-2 py-1 bg-green-500 text-green-50 rounded-md text-xs font-medium">
                      On Time
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="grid gap-1">
                    <div className="text-sm text-muted-foreground pb-2">
                      Gate Changes
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-2 py-1 bg-yellow-500 text-yellow-50 rounded-md text-xs font-medium">
                        Gate changed to A14
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-1 pt-2">
                  <div className="text-sm text-muted-foreground">
                    Delay Reason
                  </div>
                  <div className="flex items-center gap-2">
                    <InfoIcon />
                    <div className="text-base font-semibold">No Delays</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border shadow-sm rounded-lg overflow-hidden p-5">
          <div className="grid gap-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center gap-4">
                <DoorOpenIcon />
                <div>
                  <div className="text-xl font-medium">Gate Information</div>
                  <div className="text-muted-foreground">
                    Departure: Gate A12 | Arrival: Gate B5
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-5 md:mt-0">
                <div className="text-right">
                  <div className="text-xl font-medium">Baggage Claim</div>
                  <div className="text-muted-foreground">Carousel 5</div>
                </div>
                <LuggageIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 border shadow-sm rounded-md p-5">
          <div className="flex items-center gap-4">
            <RadarIcon />
            <div>
              <div className="text-xl font-medium">Flight Tracking</div>
              <div className="text-muted-foreground">
                Get real-time update on your flight's location.
              </div>
            </div>
          </div>
          <Separator />
          <Button className="w-full">Track Flight</Button>
        </div>
      </div>
    </div>
  );
}
