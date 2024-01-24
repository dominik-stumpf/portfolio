'use client';

import { useTextExpressionModifier } from '@/hooks/use-text-expression-modifier';
import { WavyText } from './text-effects';

export function SillyModeTrigger() {
  const { setActive } = useTextExpressionModifier();

  return (
    <button className="" onClick={() => setActive(true)} type="button">
      <WavyText>silly things</WavyText>
    </button>
  );
}
