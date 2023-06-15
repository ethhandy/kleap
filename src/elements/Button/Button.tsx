import cn from "classnames";
import { FC, ReactNode } from "react";

export interface ButtonProps {
  value: string | ReactNode;
  size?: "sm" | "full";

  color?: "white" | "amber" | "green" | "gray";
  colorWeight?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

  hoverColor?: "white" | "amber" | "green" | "gray";
  hoverColorWeight?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

  extraClass?: string;
}

const colorArr = [
  "bg-white",

  "bg-amber-50",
  "bg-amber-100",
  "bg-amber-200",
  "bg-amber-300",
  "bg-amber-400",
  "bg-amber-500",
  "bg-amber-600",
  "bg-amber-700",
  "bg-amber-800",
  "bg-amber-900",

  "bg-green-50",
  "bg-green-100",
  "bg-green-200",
  "bg-green-300",
  "bg-green-400",
  "bg-green-500",
  "bg-green-600",
  "bg-green-700",
  "bg-green-800",
  "bg-green-900",

  "bg-gray-50",
  "bg-gray-100",
  "bg-gray-200",
  "bg-gray-300",
  "bg-gray-400",
  "bg-gray-500",
  "bg-gray-600",
  "bg-gray-700",
  "bg-gray-800",
  "bg-gray-900",
];

const hoverColorArr = [
  "hover:bg-white",

  "hover:bg-amber-50",
  "hover:bg-amber-100",
  "hover:bg-amber-200",
  "hover:bg-amber-300",
  "hover:bg-amber-400",
  "hover:bg-amber-500",
  "hover:bg-amber-600",
  "hover:bg-amber-700",
  "hover:bg-amber-800",
  "hover:bg-amber-900",

  "hover:bg-green-50",
  "hover:bg-green-100",
  "hover:bg-green-200",
  "hover:bg-green-300",
  "hover:bg-green-400",
  "hover:bg-green-500",
  "hover:bg-green-600",
  "hover:bg-green-700",
  "hover:bg-green-800",
  "hover:bg-green-900",

  "hover:bg-gray-50",
  "hover:bg-gray-100",
  "hover:bg-gray-200",
  "hover:bg-gray-300",
  "hover:bg-gray-400",
  "hover:bg-gray-500",
  "hover:bg-gray-600",
  "hover:bg-gray-700",
  "hover:bg-gray-800",
  "hover:bg-gray-900",
];

const Button: FC<ButtonProps> = ({
  value = "Button",
  size = "sm",

  color = "white",
  colorWeight = 0,

  hoverColor = "white",
  hoverColorWeight = 0,
  extraClass = "",
}) => {
  const sizeClass = cn(
    size === "sm" ? "px-8 py-5" : "",
    size === "full" ? "w-full py-5" : ""
  );

  const colorClass = cn(
    colorArr[
      colorArr.indexOf(
        `bg-${color}${colorWeight !== 0 ? `-${colorWeight * 100}` : ""}`
      )
    ]
  );

  const hoverColorClass = cn(
    hoverColorArr[
      hoverColorArr.indexOf(
        `hover:bg-${hoverColor}${
          hoverColorWeight !== 0 ? `-${hoverColorWeight * 100}` : ""
        }`
      )
    ]
  );

  return (
    <button className={cn(sizeClass, colorClass, hoverColorClass, extraClass)}>
      {value}
    </button>
  );
};

export default Button;
