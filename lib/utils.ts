import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines Tailwind classes with clsx utility.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Validates if a string is within a specified length.
 */
export function validateString(input: unknown, maxLength: number): boolean {
  return typeof input === "string" && input.length > 0 && input.length <= maxLength;
}

/**
 * Extracts error message from an unknown error type.
 */
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return "An unknown error occurred";
}
