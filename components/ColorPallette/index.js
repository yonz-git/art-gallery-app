export default function ColorPallette({ colors }) {
  return colors.map((color) => (
    <li key={color}>
      <div
        style={{
          backgroundColor: color,
          width: "50px",
          height: "50px",
          borderRadius: "50%",
        }}
      ></div>
    </li>
  ));
}
