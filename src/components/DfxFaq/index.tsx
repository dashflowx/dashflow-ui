import type { FaqProps } from '../../lib/types';
import { Basic } from './variants/Basic';

export function DfxFaq({
  variant = 'basic',
  accordionvariant = 'basic',
  ...props
}: FaqProps) {
  if (variant !== 'basic') return null;
  return <Basic {...(props as Parameters<typeof Basic>[0])} accordionvariant={accordionvariant} />;
}

export type { FaqProps, FaqItem } from '../../lib/types';
