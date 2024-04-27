import { Link, useHistory, useLocation } from "react-router-dom";
import { filterProps, motion } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";
import { defaultTheme } from "../theme";
import { useMediaQuery } from "react-responsive";

const Logo = styled.div`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  &:hover {
    color: ${(props) => props.theme.backgroundColor};
    background-color: ${(props) => props.theme.textColor};
  }
  transition: all 1s;
`;

const Nav = styled.nav<{ isPc: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${(props) => (props.isPc ? " 1.5rem" : "1rem")};
`;

const Ul = styled.ul<{ isPc: boolean }>`
  display: flex;
  justify-content: space-around;
  font-size: ${(props) => (props.isPc ? " 1.5rem" : "1rem")};
  margin-right: 20px;
`;

const List = styled(motion.div)<{ location: string }>`
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 0 10px;
  width: 100%;
  background-color: ${(props) =>
    props.location === "true" ? props.theme.box : props.theme.backgroundColor};
  color: ${(props) =>
    props.location === "true" ? props.theme.boxText : props.theme.textColor};
  &:hover {
    transform: rotateX(360deg);
    color: ${(props) => props.theme.boxText};
    background-color: ${(props) => props.theme.box};
    transition: all 0.5s;
  }
`;

export default function Navigate() {
  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });

  const location = useLocation();
  const history = useHistory();
  const [ljh, setLjh] = useState(false);

  const handleMouseEnter = () => {
    setLjh(true);
  };

  const handleMouseLeave = () => {
    setLjh(false);
  };

  const goHome = () => {
    history.push("/");
  };
  return (
    <>
      <Nav isPc={isPc}>
        <Logo
          onClick={goHome}
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
        >
          {ljh ? "Hello" : "LEEJH"}
        </Logo>
        <Ul isPc={isPc}>
          <Link to={"/"}>
            <List location={location.pathname === "/" ? "true" : ""}>Home</List>
          </Link>
          <Link to={"/about"}>
            <List location={location.pathname === "/about" ? "true" : ""}>
              About
            </List>
          </Link>
          <Link to={"/projects"}>
            <List location={location.pathname === "/projects" ? "true" : ""}>
              Projects
            </List>
          </Link>
        </Ul>
      </Nav>
    </>
  );
}
