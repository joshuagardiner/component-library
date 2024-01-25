import { IconType } from "react-icons/lib/iconBase";

/**
 * Properties of the IconButton component.
 */
export interface IIconButtonProps {
  /**
   * ClassName of the IconButton.
   */
  className?: string;

  /**
   * Test ID of the IconButton.
   */
  "data-testid"?: string;

  /**
   * External link for the IconButton.
   */
  external: boolean;

  /**
   * Hyperlink of the IconButton.
   */
  href: string;

  /**
   * The Icon of the IconButton.
   */
  icon: IconType;

  /**
   * ID of the IconButton.
   */
  id?: string;
}
