import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateDomain = (input: string): string => {
  // Remove http:// or https:// if present
  let cleanedInput = input.replace(/^(https?:\/\/)/, "");

  // Remove www. if present
  cleanedInput = cleanedInput.replace(/^www\./, "");

  // Remove any path or query parameters
  cleanedInput = cleanedInput.split("/")[0]!;

  // More permissive domain validation regex
  const domainRegex =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])*\.[a-zA-Z]{2,}$/;

  if (!domainRegex.test(cleanedInput)) {
    throw new Error("Invalid domain format");
  }

  return cleanedInput;
};
