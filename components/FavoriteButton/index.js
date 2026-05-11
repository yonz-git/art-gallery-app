import FavoriteIcon from "@/assets/favorite.svg";
import { StyledButton } from "./FavoriteButton.styled";

export default function FavoriteButton({
  onToggleFavorite,
  isFavorite,
  disabled,
}) {
  function handleClick() {
    onToggleFavorite();
  }

  return (
    <StyledButton
      onClick={handleClick}
      $isFavorite={isFavorite}
      $isDisabled={disabled}
      disabled={disabled ? "disabled" : null}
    >
      <FavoriteIcon />
    </StyledButton>
  );
}
