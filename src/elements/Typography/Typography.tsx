import cn from "classnames";
import { FC, ReactNode } from "react";

const sizeArr = [
  "text-xs",
  "text-sm",
  "text-base",
  "text-lg",
  "text-xl",
  "text-2xl",
  "text-3xl",
  "text-4xl",
  "text-5xl",
  "text-6xl",
  "text-7xl",
  "text-8xl",
  "text-9xl",
];

const mobileSizeArr = [
  "max-sm:text-xs",
  "max-sm:text-xs",
  "max-sm:text-sm",
  "max-sm:text-base",
  "max-sm:text-lg",
  "max-sm:text-xl",
  "max-sm:text-2xl",
  "max-sm:text-3xl",
  "max-sm:text-4xl",
  "max-sm:text-5xl",
  "max-sm:text-5xl",
  "max-sm:text-5xl",
  "max-sm:text-5xl",
];

const colorArr = [
  "text-black",
  "text-pink-50",
  "text-pink-100",
  "text-pink-200",
  "text-pink-300",
  "text-pink-400",
  "text-pink-500",
  "text-pink-600",
  "text-pink-700",
  "text-pink-800",
  "text-pink-900",
];

const trackingArr = [
  "tracking-tighter",
  "tracking-tight",
  "tracking-normal",
  "tracking-wide",
  "tracking-wider",
  "tracking-widest",
];

const alignArr = ["text-left", "text-right", "text-center"];

const fontArr = ["'DM Sans', sans-serif", "'Poppins', sans-serif"];

const weightArr = [
  "",
  "font-thin",
  "font-extralight",
  "font-light",
  "font-normal",
  "font-medium",
  "font-semibold",
  "font-bold",
  "font-extrabold",
  "font-black",
];

export interface TypographyProps {
  size?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
  color?: "black" | "pink";
  colorWeight?: number;
  opacity?: number;
  font?: "DM" | "Poppins";
  weight?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  align?: "left" | "center" | "right" | "none";
  tracking?: "tighter" | "tight" | "normal" | "wide" | "wider" | "widest";
  text: string | ReactNode;
  extraClass?: string;
}

const Typography: FC<TypographyProps> = ({
  size = "base",
  color = "black",
  colorWeight = 0,
  opacity = 1,
  font = "DM",
  weight = 4,
  align = "none",
  tracking = "normal",
  text = "",
  extraClass = "",
}) => {
  const sizeClass = cn(
    sizeArr[sizeArr.indexOf(`text-${size}`)],
    mobileSizeArr[sizeArr.indexOf(`text-${size}`)]
  );

  const colorClass = cn(
    colorArr[
      colorArr.indexOf(
        `text-${color}${colorWeight === 0 ? "" : `-${colorWeight * 100}`}`
      )
    ]
  );

  const trackingClass = cn(
    trackingArr[trackingArr.indexOf(`tracking-${tracking}`)]
  );

  const alignClass = cn(
    align === "none" ? "" : alignArr[alignArr.indexOf(`text-${align}`)]
  );

  const weightClass = cn(weightArr[weight]);

  return (
    <p
      style={{
        opacity,
        fontFamily: fontArr[fontArr.indexOf(font)],
      }}
      className={cn(
        sizeClass,
        colorClass,
        trackingClass,
        alignClass,
        weightClass,
        extraClass,
        "max-sm:text-center"
      )}
    >
      {text}
    </p>
  );
};

export default Typography;
