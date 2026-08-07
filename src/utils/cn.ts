import { clsx, type ClassValue } from 'clsx';

/**
 * Thin wrapper around clsx for conditional class name composition.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
