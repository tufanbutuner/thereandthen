import Image from "next/image";
import { MouseEventHandler } from "react";

interface ICard {
  text: string;
  height?: string;
  textColour?: string;
  backgroundColor?: string;
  imagePath: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export default function Card({
  text,
  height,
  textColour,
  imagePath,
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
        backgroundImage: imagePath,
        overflow: "hidden",
      }}
      onClick={onClick}
    >
      <Image src={imagePath} alt="" />
      <p>{text}</p>
    </div>
  );
}
