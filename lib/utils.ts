import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format, parseISO } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, 'MMM d, yyyy');
}

export function formatDateWithDay(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, 'EEEE, MMMM d, yyyy');
}

export function formatDateForSlug(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, 'yyyy-MM-dd');
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}