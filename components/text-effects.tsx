import '@/styles/animations.css';

export function WavyText({ children }: { children: string }) {
  return (
    <span>
      {[...children].map((char, i) => (
        <span
          key={i}
          className="inline-block whitespace-pre motion-safe:animate-float print:animate-none"
          style={{
            animationDelay: `${-i * 0.1}s`,
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
