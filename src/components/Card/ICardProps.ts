import React from "react";

/**
 * Properties of the Card component
 */
export interface ICardProps {
  /**
   * Child components.
   */
  children?: React.ReactNode;

  /**
   * ClassName of the Card.
   */
  className?: string;

  /**
   * Test ID of the Card.
   */
  "data-testid"?: string;

  /**
   * Height of the Card.
   *
   * @default "auto"
   */
  height?: string;

  /**
   * ID of the Card.
   */
  id?: string;

  /**
   * Width of the Card.
   *
   * @default "100%"
   */
  width?: string;
}
