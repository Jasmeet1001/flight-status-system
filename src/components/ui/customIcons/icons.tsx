import { Bell } from "lucide-react";
import { Plane } from "lucide-react";
import { Radar } from "lucide-react";
import { Luggage } from "lucide-react";
import { Info } from "lucide-react";
import { DoorOpen } from "lucide-react";
import { Clock } from "lucide-react";
import { Check } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { RefreshCw } from "lucide-react";

const RefreshCwIcon = () => {
  return <RefreshCw />;
};

const ArrowRightIcon = () => {
  return <ArrowRight className="text-muted-foreground" />;
};

const CheckIcon = () => {
  return <Check color="text-green-500" />;
};

const BellIcon = () => {
  return <Bell className="text-muted-foreground size-5" color="white"/>;
};

const PlaneIcon = () => {
  return <Plane className="size-8 md:size-6"/>;
};

const RadarIcon = () => {
  return <Radar className="text-primary" />;
};

const LuggageIcon = () => {
  return <Luggage className="text-muted-foreground" />;
};

const InfoIcon = () => {
  return <Info size={20}/>;
};

const DoorOpenIcon = () => {
  return <DoorOpen className="text-primary" />;
};

const ClockIcon = () => {
  return <Clock className="text-muted-foreground" />;
};

export {
  ClockIcon,
  DoorOpenIcon,
  InfoIcon,
  PlaneIcon,
  BellIcon,
  RadarIcon,
  LuggageIcon,
  CheckIcon,
  ArrowRightIcon,
  RefreshCwIcon,
};
