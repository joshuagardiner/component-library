/**
 * Properties of the Text component
 */
export interface ITextProps {
  /**
   * The color of the Text
   */
  color?: string;

  /**
   * The font size of the Text
   */
  fontSize?: string;

  /**
   * The height on the Text' lines
   */
  lineHeight?: string;

  /**
   * The margin to the left of the Text
   *
   * @default 'auto'
   */
  marginLeft?: string;

  /**
   * The margin to the right of the Text
   *
   * @default 'auto'
   */
  marginRight?: string;

  /**
   * The width of the Text
   */
  maxWidth?: string;

  /**
   * The Text to be displayed
   */
  text: string;
}
