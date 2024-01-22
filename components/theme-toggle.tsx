'use client';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Moon, Sun, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return;
  }

  return (
    <ToggleGroup
      type="single"
      onValueChange={(selected) => {
        setTheme(selected);
      }}
      defaultValue={theme}
      aria-label="Toggle between themes"
    >
      <ToggleGroupItem value="light" aria-label="Toggle light mode">
        <Sun className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Toggle dark mode">
        <Moon className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="system" aria-label="Toggle system theme">
        <SunMoon className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
