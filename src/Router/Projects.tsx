import styled from "styled-components";
import Background from "../component/Background";
import { useState } from "react";
import { motion } from "framer-motion";
import { AllProjects, JsProjects, ReactProjects } from "../projects";
import ProjectBox from "../component/ProjectBox";
import ProjectPoster from "../component/Aproject";
import { useMediaQuery } from "react-responsive";
import ProjectBoxMobile from "../component/responsive/ProjectBoxMobile";

const Container = styled.div`
  position: relative;
`;
const Wrapper = styled.div<{ isMobile?: boolean }>`
  height: 80%;
  width: 100%;
  padding: ${(p) => (p.isMobile ? " 0 10px" : "0 50px")};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Nav = styled.div`
  margin-top: 10px;
  width: 10%;
  display: flex;
  justify-content: center;
  width: 95%;
`;

const Box = styled.div<{ isactive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100px;
  border: 3px solid ${(props) => props.theme.box};
  font-weight: 600;
  margin-right: 10px;
  &:active {
    background-color: ${(props) => props.theme.box};
    color: ${(props) => props.theme.boxText};
  }
  background-color: ${(props) => (props.isactive ? props.theme.box : null)};
  color: ${(props) => (props.isactive ? props.theme.boxText : null)};
  cursor: pointer;
`;

const ProjectWrapper = styled.div<{ isPc?: boolean }>`
  width: 100%;
  height: 90%;
  margin-top: 36px;
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 36px;
  display: grid;
  justify-content: center;
  grid-template-columns: ${(p) =>
    !p.isPc ? "repeat(1, 1fr)" : "repeat(2, 1fr)"};
  overflow: scroll;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  display: block;
`;

const InfoBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoBox = styled(motion.div)<{ isMobile?: boolean }>`
  width: ${(p) => (p.isMobile ? "100%" : "40.5rem")};
  height: ${(p) => (p.isMobile ? "100%" : "43rem")};
  background-color: #e5eef7;
  border-radius: 10px;
  position: fixed;
  left: ${(p) => (p.isMobile ? "0" : "calc(50% - (40.5rem / 2))")};
  top: ${(p) => (p.isMobile ? "0" : "calc(50% - (43rem / 2))")};
  overflow: scroll;
  padding-bottom: 30px;
`;

const Back = styled.div`
  border: 1px solid black;
  width: 40px;
  height: 40px;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 10px;
  right: 20px;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 2rem;
  border-radius: 50%;
`;

export default function Projects() {
  const [state, setState] = useState("All");
  const [layoutId, setLayoutId] = useState("");
  const [overlay, setOverlay] = useState(false);

  const onClickOverlay = () => {
    setOverlay((prev) => !prev);
  };

  const onClickState = (data: string) => {
    setState(data);
  };

  const findProject = () => {
    return AllProjects.find((el) => el.title === layoutId);
  };
  const findProjectValue = findProject();

  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });

  return (
    <Container>
      {!isMobile ? (
        <Background content="Projects">
          {
            <Wrapper>
              <Nav>
                <Box
                  onClick={() => onClickState("All")}
                  isactive={state === "All"}
                >
                  All
                </Box>
                <Box
                  onClick={() => onClickState("React")}
                  isactive={state === "React"}
                >
                  React
                </Box>
                <Box
                  onClick={() => onClickState("JS")}
                  isactive={state === "JS"}
                >
                  JS
                </Box>
              </Nav>
              <ProjectWrapper isPc={isPc}>
                {state === "All"
                  ? AllProjects.map((el) => (
                      <ProjectPoster
                        onClickOverlay={onClickOverlay}
                        setLayoutId={setLayoutId}
                        el={el}
                      />
                    ))
                  : null}
                {state === "React"
                  ? ReactProjects.map((el) => (
                      <ProjectPoster
                        onClickOverlay={onClickOverlay}
                        setLayoutId={setLayoutId}
                        el={el}
                      />
                    ))
                  : null}
                {state === "JS"
                  ? JsProjects.map((el) => (
                      <ProjectPoster
                        onClickOverlay={onClickOverlay}
                        setLayoutId={setLayoutId}
                        el={el}
                      />
                    ))
                  : null}
              </ProjectWrapper>
            </Wrapper>
          }
        </Background>
      ) : (
        <Wrapper isMobile={isMobile}>
          <Nav>
            <Box onClick={() => onClickState("All")} isactive={state === "All"}>
              All
            </Box>
            <Box
              onClick={() => onClickState("React")}
              isactive={state === "React"}
            >
              React
            </Box>
            <Box onClick={() => onClickState("JS")} isactive={state === "JS"}>
              JS
            </Box>
          </Nav>
          <ProjectWrapper>
            {state === "All"
              ? AllProjects.map((el) => (
                  <ProjectPoster
                    onClickOverlay={onClickOverlay}
                    setLayoutId={setLayoutId}
                    el={el}
                  />
                ))
              : null}
            {state === "React"
              ? ReactProjects.map((el) => (
                  <ProjectPoster
                    onClickOverlay={onClickOverlay}
                    setLayoutId={setLayoutId}
                    el={el}
                  />
                ))
              : null}
            {state === "JS"
              ? JsProjects.map((el) => (
                  <ProjectPoster
                    onClickOverlay={onClickOverlay}
                    setLayoutId={setLayoutId}
                    el={el}
                  />
                ))
              : null}
          </ProjectWrapper>
        </Wrapper>
      )}
      {overlay && (
        <>
          <Overlay onClick={() => onClickOverlay()}></Overlay>
          <InfoBoxWrapper>
            <InfoBox isMobile={isMobile} layoutId={layoutId}>
              <ProjectBox findProjectValue={findProjectValue} />
              {isMobile && (
                <Back onClick={() => onClickOverlay()}>
                  <div>{"<"}</div>
                </Back>
              )}
            </InfoBox>
          </InfoBoxWrapper>
        </>
      )}
    </Container>
  );
}
