import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Div = styled.div<{ isPc: boolean; isLaptop: boolean }>`
  width: 500px;
  height: 500px;
  background-color: ${(props) =>
    props.isPc ? "yellow" : props.isLaptop ? "green" : "black"};
`;

export default function Practice() {
  const isPc = useMediaQuery({ query: "(min-width: 1024px)" });
  const isLaptop = useMediaQuery({ query: "(min-width: 768px)" });
  const isPhone = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <Div isPc={isPc} isLaptop={isLaptop}></Div>
    </>
  );
}
