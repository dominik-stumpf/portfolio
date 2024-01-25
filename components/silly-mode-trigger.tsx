'use client';

import { useTextExpressionModifier } from '@/hooks/use-text-expression-modifier';
import { FlashText, WavyText } from './text-effects';

export function SillyModeTrigger() {
  const { setActive } = useTextExpressionModifier();

  return (
    <FlashText>
      <button className="" onClick={() => setActive(true)} type="button">
        <WavyText>silly things</WavyText>
      </button>
    </FlashText>
  );
}
