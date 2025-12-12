import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with proper precedence
 * @param inputs - Class names to merge
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format phone number for display
 * @param phone - Phone number string
 * @returns Formatted phone number
 */
export function formatPhone(phone: string): string {
  return phone;
}

/**
 * Create mailto link
 * @param email - Email address
 * @param subject - Email subject
 * @returns mailto URL
 */
export function createMailtoLink(email: string, subject?: string): string {
  return `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
}

/**
 * Create tel link
 * @param phone - Phone number
 * @returns tel URL
 */
export function createTelLink(phone: string): string {
  return `tel:${phone.replace(/\s+/g, '')}`;
}
