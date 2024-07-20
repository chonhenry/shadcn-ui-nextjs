"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div>
      <Button onClick={() => setTheme("light")}>light</Button>
      <Button onClick={() => setTheme("dark")}>dark</Button>
      <Button onClick={() => setTheme("system")}>system</Button>
    </div>
  );
}
