import * as React from "react";

import { cn } from "@/lib/utils";

type PatternPanelProps = React.ComponentProps<"div"> & {
  lineColor?: string;
  tileSize?: number;
  strokeWidth?: number;
};

export function PatternPanel({
  children,
  className,
  lineColor = "oklch(0.32 0 0 / 0.16)",
  strokeWidth = 1.5,
  tileSize = 28,
  ...props
}: PatternPanelProps) {
  const patternId = React.useId();

  return (
    <div
      className={cn(
        "bg-card text-card-foreground relative isolate overflow-hidden border",
        className,
      )}
      {...props}
    >
      <svg aria-hidden="true" className="absolute inset-0 size-full">
        <defs>
          <pattern
            height={tileSize}
            id={patternId}
            patternTransform="rotate(45)"
            patternUnits="userSpaceOnUse"
            width={tileSize}
          >
            <line
              stroke={lineColor}
              strokeLinecap="round"
              strokeWidth={strokeWidth}
              x1="0"
              x2="0"
              y1="0"
              y2={tileSize}
            />
          </pattern>
        </defs>
        <rect fill={`url(#${patternId})`} height="100%" width="100%" />
      </svg>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
