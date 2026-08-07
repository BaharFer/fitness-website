/**
 * Strips characters that have no legitimate place in plain-text form fields
 * and could otherwise be used for markup or script injection if the value
 * were ever rendered unsafely downstream.
 */
export function sanitizeText(value: string): string {
  return value.replace(/[<>]/g, '').trim();
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value);
}

export function isNonEmpty(value: string): boolean {
  return value.trim().length > 0;
}
