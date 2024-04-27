import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 15px;
`;

export default function Footer() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  return (
    <>
      {!isMobile && (
        <footer>
          <Wrapper>Made by LEEJH</Wrapper>
        </footer>
      )}
    </>
  );
}
