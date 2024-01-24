import '@/styles/animations.css';

export function WavyText({ children }: { children: string }) {
  return (
    <span>
      {[...children].map((char, i) => (
        <span
          key={i}
          className="inline-block animate-float whitespace-pre"
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
