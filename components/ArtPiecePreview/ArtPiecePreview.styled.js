import styled from "styled-components";
import Image from "next/image";

export const StyledImage = styled(Image)`
  object-fit: cover;
`;

export const ImageWrap = styled.div`
  position: relative;
  display: table;
`;
