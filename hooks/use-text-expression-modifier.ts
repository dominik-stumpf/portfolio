import { useEffect, useState } from 'react';
import Uwuifier from 'uwuifier';

type TextTransformer = (source: string) => string;

const uwu = new Uwuifier({
  spaces: {
    faces: 0.04,
    actions: 0,
    stutters: 0.06,
  },
  words: 1,
  exclamations: 1,
});

function transformTextNodes(element: Node, transformer: TextTransformer): void {
  try {
    if (element.nodeType === Node.TEXT_NODE) {
      if (typeof element.nodeValue === 'string') {
        element.nodeValue = transformer(element.nodeValue);
      }
    } else {
      if (element.childNodes.length > 0) {
        for (let i = 0; i < element.childNodes.length; i++) {
          transformTextNodes(element.childNodes[i], transformer);
        }
      }
    }
  } catch (error) {
    console.error(error);
    return;
  }
}

function mockingSpongebobTransformer(source: string): string {
  return [...source]
    .map((char, index) => (index % 2 ? char : char.toUpperCase()))
    .join('');
}

function uwuTransformer(source: string): string {
  return uwu.uwuifySentence(source);
}

const textTransformers: TextTransformer[] = [
  mockingSpongebobTransformer,
  uwuTransformer,
];

export function useTextExpressionModifier() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      transformTextNodes(
        document.body,
        textTransformers[Math.floor(textTransformers.length * Math.random())],
      );
    }
  }, [active]);

  return { setActive };
}
