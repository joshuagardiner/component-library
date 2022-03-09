import React from "react";
import Image from "next/image";
import { IAvatarProps } from "./IAvatarProps";

/**
 * The Avatar component
 *
 * @returns the Avatar component JSX
 */
export const Avatar: React.FC<IAvatarProps> = ({ altText, height, path, width }: IAvatarProps) => {
  return (
    <div
      id="tcl-avatar"
      data-testid="avatar"
      style={{
        display: "inherit",
        height: height,
        marginLeft: "auto",
        marginRight: "auto",
        position: "relative",
        width: width
      }}
    >
      <Image
        className={"tcl-avatar__image"}
        src={path}
        alt={altText}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};
