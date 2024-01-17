import { cn } from '@/lib/utils';
import Image, { type StaticImageData } from 'next/image';
import CodewarsIcon from '@/public/vectors/codewars.svg';

function IconTemplate({
  image,
  alt,
  className,
}: {
  image: StaticImageData;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      src={image}
      alt={alt}
      className={cn('size-6 dark:invert', className)}
    />
  );
}

export function Codewars({ className }: { className?: string }) {
  return (
    <IconTemplate image={CodewarsIcon} alt="codewars" className={className} />
  );
}
