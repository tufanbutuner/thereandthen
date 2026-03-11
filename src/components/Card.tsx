import { MouseEventHandler } from "react";

interface ICard {
  text: string;
  height?: string;
  textColour?: string;
  backgroundColor?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export default function Card({
  text,
  height,
  textColour,
  backgroundColor,
  onClick,
}: ICard) {
  return (
    <div
      className="card-container"
      style={{
        backgroundColor: backgroundColor,
        height: height,
        color: textColour,
        overflow: "hidden",
      }}
      onClick={onClick}
    >
      <p>{text}</p>
    </div>
  );
}
