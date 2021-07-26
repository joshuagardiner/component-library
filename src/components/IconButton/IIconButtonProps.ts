import { IconType } from "react-icons/lib/cjs/iconBase";

/**
 * Properties of the IconButton component
 */
export interface IIconButtonProps {
  /**
   * Color of the IconButton
   */
  color: string;

  /**
   * The testid of the IconButton component
   */
  "data-testid"?: string;

  /**
   * External link for the IconButton
   */
  external: boolean;

  /**
   * Height of the IconButton
   */
  height: string;

  /**
   * Hyperlink of the IconButton
   */
  href: string;

  /**
   * The Icon of the IconButton
   */
  icon: IconType;

  /**
   * Width of the IconButton
   */
  width: string;
}
