import styled from "styled-components";
import Background from "../component/Background";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Wrapper = styled(motion.div)<{ isMobile?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.isMobile ? "0 20px" : "")};
`;

const Box = styled(motion.div)<{ isMobile?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: ${(props) => (props.isMobile ? "2rem" : "5rem")};
  line-height: 100px;
`;

const BoxText = styled(motion.div)`
  font-family: "Black Han Sans", sans-serif;
`;

const GoToProject = styled.div`
  position: relative;
  padding: 10px;
  background-color: ${(props) => props.theme.box};
  color: ${(props) => props.theme.boxText};
  font-size: 2rem;
  font-weight: 600;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    top: -5px;
  }
  &:active {
    color: gold;
    top: -10px;
  }
`;

const myVars = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5, // delayChildren 을 사용하면 자식요소를 부모 요소의 animation이 끝난 뒤 delay 시켜 실행
      staggerChildren: 0.5,
    },
  },
};

const divVariant = {
  start: {
    opacity: 0,
    y: 10, // motion에만 있는 속성
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

export default function Home() {
  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <>
      {!isMobile ? (
        <Background content="Home">
          {
            <Wrapper>
              <Box variants={myVars} initial="start" animate="end">
                <BoxText variants={divVariant}>New </BoxText>
                <BoxText variants={divVariant}>Frontend Develper</BoxText>
                <BoxText variants={divVariant}>이정현 입니다.</BoxText>
                <BoxText variants={divVariant}>
                  <Link to={"/projects"}>
                    <GoToProject>Go To Project!</GoToProject>
                  </Link>
                </BoxText>
              </Box>
            </Wrapper>
          }
        </Background>
      ) : (
        <Wrapper isMobile={isMobile}>
          <Box
            isMobile={isMobile}
            variants={myVars}
            initial="start"
            animate="end"
          >
            <BoxText variants={divVariant}>New </BoxText>
            <BoxText variants={divVariant}>Frontend Develper</BoxText>
            <BoxText variants={divVariant}>이정현 입니다.</BoxText>
            <BoxText variants={divVariant}>
              <Link to={"/projects"}>
                <GoToProject>Go To Project!</GoToProject>
              </Link>
            </BoxText>
          </Box>
        </Wrapper>
      )}
    </>
  );
}
