import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigate from "../component/Navgate";
import Footer from "../component/Footer";
import styled from "styled-components";
import About from "../Router/About";
import Projects from "../Router/Projects";
import Home from "../Router/Home";
import { useRecoilState } from "recoil";
import { DarkModeAtom } from "../atoms";
import { useMediaQuery } from "react-responsive";
import { Helmet } from "react-helmet";

const Wrapper = styled.div<{ isPc: boolean }>`
  padding: ${(props) => (props.isPc ? "15px 70px" : "")};
  position: relative;
`;

const DarkMode = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: black;
  color: yellow;
  bottom: 0;
  right: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 20px ${(props) => props.theme.box};
  cursor: pointer;
`;

const LightMode = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: black;
  color: yellow;
  bottom: 0;
  right: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 20px ${(props) => props.theme.box};
  cursor: pointer;
`;

const Svg = styled.svg`
  width: 60%;
  height: 60%;
`;

export function Router() {
  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const [darkModeState, setDarkModeState] = useRecoilState(DarkModeAtom);

  const onClickDarkMode = () => {
    setDarkModeState((prev) => !prev);
  };

  return (
    <Wrapper isPc={isPc}>
      <BrowserRouter>
        <Helmet>
          <title>Portfolio</title>
        </Helmet>
        <Navigate />
        <Switch>
          <Route path={"/about"}>
            <About />
          </Route>
          <Route path={"/projects"}>
            <Projects />
          </Route>{" "}
          <Route path={"/"}>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
      {isPc &&
        (darkModeState ? (
          <DarkMode onClick={onClickDarkMode}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                fill="#f9ca24"
                d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
              />
            </Svg>
          </DarkMode>
        ) : (
          <LightMode onClick={onClickDarkMode}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                fill="#fffa65"
                d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"
              />
            </Svg>
          </LightMode>
        ))}
    </Wrapper>
  );
}
