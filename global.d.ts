import { CSSProperties } from 'react';

// Extending CSSProperties to allow CSS custom properties
declare module 'react' {
  interface CSSProperties {
    '--i'?: number | string;  // Allow '--i' as a custom CSS property
  }
}