"use client";

interface Props {
  title: string;
  items: string[];
  color: "orange" | "pink" | "red";
  isSelected: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const colorMap = {
  orange: "bg-orange-500/10 border-orange-500",
  pink: "bg-pink-500/10 border-pink-500",
  red: "bg-red-500/10 border-red-500",
};

const textColorMap = {
  orange: "text-orange-400",
  pink: "text-pink-400",
  red: "text-red-400",
};

const bgColorMap = {
  orange: "bg-orange-500",
  pink: "bg-pink-500",
  red: "bg-red-500",
};

export default function LayerBox(props: Props) {
  return (
    <div
      className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
        props.isSelected
          ? colorMap[props.color]
          : "bg-gray-800/50 hover:bg-gray-800/80 border-transparent"
      }`}
      onMouseEnter={() => props.onHover()}
      onMouseLeave={() => props.onLeave()}
    >
      <h3
        className={`whitespace-nowrap text-lg md:text-xl font-semibold mb-3 md:mb-4 ${textColorMap[props.color]}`}
      >
        {props.title}
      </h3>
      <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
        {props.items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <div
              className={`w-1.5 h-1.5 ${bgColorMap[props.color]} rounded-full`}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
