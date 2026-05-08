import FavoriteIcon from "@/assets/favorite.svg";

export default function FavoriteButton({
  onToggleFavorite,
  isFavorite,
  disabled,
}) {
  function handleClick() {
    onToggleFavorite();
  }

  return (
    <button onClick={handleClick} disabled={disabled ? "disabled" : null}>
      {isFavorite ? "true" : "false"}
      <FavoriteIcon />
    </button>
  );
}
