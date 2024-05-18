import { twMerge } from 'tailwind-merge'
import { type ClassValue, clsx } from 'clsx'

import { navigateTo, useRouter } from '#imports'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}
