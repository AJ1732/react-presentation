import localFont from "next/font/local";

export const foundersGrotesk = localFont({
  variable: "--font-founders-grotesk",
  display: "swap",
  preload: false,
  src: [
    {
      path: "./Founders_Grotesk/FoundersGrotesk-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Founders_Grotesk/FoundersGrotesk-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./Founders_Grotesk/FoundersGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Founders_Grotesk/FoundersGrotesk-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Founders_Grotesk/FoundersGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Founders_Grotesk/FoundersGrotesk-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./Founders_Grotesk/FoundersGrotesk-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Founders_Grotesk/FoundersGrotesk-SemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./Founders_Grotesk/FoundersGrotesk-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Founders_Grotesk/FoundersGrotesk-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const foundersGroteskCondensed = localFont({
  variable: "--font-founders-grotesk-condensed",
  display: "swap",
  preload: false,
  src: [
    {
      path: "./Founders_Grotesk/FoundersGroteskCond-Lt.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Founders_Grotesk/FoundersGroteskXCond-Lt.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Founders_Grotesk/FoundersGroteskXCond-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});
