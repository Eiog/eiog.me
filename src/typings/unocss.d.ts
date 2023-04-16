import type { AttributifyAttributes } from '@unocss/preset-attributify';

declare module 'astro/jsx' {
  interface HTMLAttributes extends AttributifyAttributes {}
}
