export interface NavItem {
  id: string;
  label: string;
}

export interface FloatingImageProps {
  url: string;
  position: [number, number, number];
  rotation: [number, number, number];
}

export interface RotatingTextProps {
  text: string;
  yPosition: number;
} 