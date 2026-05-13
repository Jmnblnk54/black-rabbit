import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "Black Rabbit Creative",
  shortName: "Black Rabbit",
  owner: "Julia Blank",
  city: "Tampa",
  region: "FL",
  email: "blackrabbitcreative@yahoo.com",
  instagram: "blackrabbit.creative",
  tiktok: "blackrabbit.creative",
  facebook: "blackrabbitcreative",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://blackrabbitcreative.com",
  tagline: "Films worth keeping. Stories worth telling.",
  subline:
    "Tampa wedding videographer · brand films · creative direction",
} as const;

export const CLIENTS = [
  "Wodapalooza",
  "CrossFit Westchase",
  "Throttled In Bond",
  "Clark Custom Therapy",
  "Coflo",
  "Orenda Studio Tampa",
];
