import styled from "styled-components";
import Background from "../component/Background";
import Html from "../img/skills/html.png";
import css from "../img/skills/css.png";
import js from "../img/skills/js.png";
import react from "../img/skills/react.png";
import ts from "../img/skills/ts.png";
import router from "../img/lib/router.png";
import query from "../img/lib/query.png";
import recoil from "../img/lib/recoil.png";
import fMotion from "../img/lib/motion.png";
import style from "../img/lib/style.png";
import swiper from "../img/lib/swiper.png";

import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Ul = styled(motion.ul)``;

const Li = styled.li`
  list-style: disc;
  margin-bottom: 20px;
`;

const Wrapper = styled.div<{ isMobile?: boolean }>`
  height: 80%;
  width: 100%;
  padding: ${(props) => (props.isMobile ? "20px" : "50px")};
  display: flex;
  flex-direction: column;
`;

const Tag = styled.div`
  font-weight: 600;
`;

const Description = styled.div`
  margin-top: 10px;
`;

const Skill = styled.div`
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 500;
  color: black;
`;

const SkillBox = styled.div<{ isMobile?: boolean }>`
  height: ${(p) => (p.isMobile ? "5.5rem" : "7.5rem")};
  width: 100%;
  background-color: #cce3f9;
  margin-top: 10px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const IconBox = styled(motion.div)<{ isMobile?: boolean }>`
  height: ${(p) => (p.isMobile ? "2rem" : "3.75rem")};
`;

const Hr = styled.div`
  margin: 5px 0px;
  border: 1px solid #e5eef7;
  width: 30%;
`;

const Icon = styled.img`
  height: 100%;
  margin-right: 15px;
`;

const IconWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const myVars = {
  start: {
    opacity: 0,
    y: 50,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delayChildren: 1,
      staggerChildren: 0.2,
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

export default function About() {
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
        <Background content="About">
          {
            <>
              <Wrapper>
                <Ul variants={myVars} initial="start" animate="end">
                  <Li>
                    <Tag>Introduce</Tag>
                    <Description>
                      안녕하세요. 프론트엔드 개발자를 꿈꾸는 이정현입니다.
                      방문해주셔서 감사합니다.
                    </Description>
                  </Li>
                  <Li>
                    <Tag>Education</Tag>
                    <Description>서울 상명대학교 (2013~2020)</Description>
                  </Li>
                  <Li>
                    <Tag>Skills</Tag>
                    <SkillBox>
                      <Skill>Frontend</Skill>
                      <Hr />
                      <IconWrapper>
                        <IconBox variants={divVariant}>
                          <Icon src={Html} alt="" />
                        </IconBox>
                        <IconBox variants={divVariant}>
                          <Icon src={css} alt="" />
                        </IconBox>
                        <IconBox variants={divVariant}>
                          <Icon src={js} alt="" />
                        </IconBox>
                        <IconBox variants={divVariant}>
                          <Icon src={react} alt="" />
                        </IconBox>
                        <IconBox variants={divVariant}>
                          <Icon src={ts} alt="" />
                        </IconBox>
                      </IconWrapper>
                    </SkillBox>
                    <SkillBox>
                      <Skill>Library</Skill>
                      <Hr />
                      <IconWrapper>
                        <IconBox variants={divVariant}>
                          <Icon src={router} alt="" />
                        </IconBox>
                        <IconBox variants={divVariant}>
                          <Icon src={query} alt="" />
                        </IconBox>{" "}
                        <IconBox variants={divVariant}>
                          <Icon src={recoil} alt="" />
                        </IconBox>{" "}
                        <IconBox variants={divVariant}>
                          <Icon src={style} alt="" />
                        </IconBox>{" "}
                        <IconBox variants={divVariant}>
                          <Icon src={fMotion} alt="" />
                        </IconBox>{" "}
                        <IconBox variants={divVariant}>
                          <Icon src={swiper} alt="" />
                        </IconBox>
                      </IconWrapper>
                    </SkillBox>
                  </Li>
                </Ul>
              </Wrapper>
            </>
          }
        </Background>
      ) : (
        <>
          <Wrapper isMobile={isMobile}>
            <Ul variants={myVars} initial="start" animate="end">
              <Li>
                <Tag>Introduce</Tag>
                <Description>
                  안녕하세요. 프론트엔드 개발자를 꿈꾸는 이정현입니다.
                  방문해주셔서 감사합니다.
                </Description>
              </Li>
              <Li>
                <Tag>Education</Tag>
                <Description>서울 상명대학교 (2013~2020)</Description>
              </Li>
              <Li>
                <Tag>Skills</Tag>
                <SkillBox isMobile={isMobile}>
                  <Skill>Frontend</Skill>
                  <Hr />
                  <IconWrapper>
                    <IconBox variants={divVariant} isMobile={isMobile}>
                      <Icon src={Html} alt="" />
                    </IconBox>
                    <IconBox variants={divVariant} isMobile={isMobile}>
                      <Icon src={css} alt="" />
                    </IconBox>
                    <IconBox variants={divVariant} isMobile={isMobile}>
                      <Icon src={js} alt="" />
                    </IconBox>
                    <IconBox variants={divVariant} isMobile={isMobile}>
                      <Icon src={react} alt="" />
                    </IconBox>
                    <IconBox variants={divVariant} isMobile={isMobile}>
                      <Icon src={ts} alt="" />
                    </IconBox>
                  </IconWrapper>
                </SkillBox>
                <SkillBox isMobile={isMobile}>
                  <Skill>Library</Skill>
                  <Hr />
                  <IconWrapper>
                    <IconBox variants={divVariant}>
                      <Icon src={router} alt="" />
                    </IconBox>
                    <IconBox variants={divVariant}>
                      <Icon src={query} alt="" />
                    </IconBox>{" "}
                    <IconBox variants={divVariant}>
                      <Icon src={recoil} alt="" />
                    </IconBox>{" "}
                    <IconBox variants={divVariant}>
                      <Icon src={style} alt="" />
                    </IconBox>{" "}
                    <IconBox variants={divVariant}>
                      <Icon src={fMotion} alt="" />
                    </IconBox>{" "}
                    <IconBox variants={divVariant}>
                      <Icon src={swiper} alt="" />
                    </IconBox>
                  </IconWrapper>
                </SkillBox>
              </Li>
            </Ul>
          </Wrapper>
        </>
      )}
    </>
  );
}
