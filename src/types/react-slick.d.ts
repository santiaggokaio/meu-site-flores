// src/types/react-slick.d.ts

import { ComponentType, CSSProperties, ReactNode } from 'react';
import { Settings as SlickSettings } from 'slick-carousel';

/**
 * Props for the react-slick Slider component, extending Slick carousel settings.
 */
export interface SliderProps extends SlickSettings {
  /** Slides to render inside the carousel */
  children?: ReactNode;
  /** Tailwind or custom CSS class names */
  className?: string;
  /** Inline style overrides */
  style?: CSSProperties;
}

/**
 * Default export is the Slider component configured by react-slick.
 */
declare module 'react-slick' {
  const Slider: ComponentType<SliderProps>;
  export default Slider;
}