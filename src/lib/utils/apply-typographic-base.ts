// @ts-expect-error: no typedef from module
import base from 'typographic-base';

export function applyTypographicBase(prose: string) {
  return base(prose);
}
