import { clsx, type ClassValue } from "clsx"

import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const dataHabit = ['progress', 'done', 'planned'];
const date = ['2024-01-01', '2024-01-02', '2024-01-03'];
