import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utilitaire pour combiner les noms de classes conditionnellement.
// Utilise `clsx` et `tailwind-merge` pour une gestion robuste des classes.
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
