import { ColorCircle } from "./ColorPalette.styled.js";

export default function ColorPalette({ colors }) {
  return colors.map((color) => (
    <li key={color}>
      <ColorCircle color={color} />
    </li>
  ));
}
