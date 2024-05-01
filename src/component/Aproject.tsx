import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const AProject = styled(motion.div)`
  margin-bottom: 2rem;
  height: 22rem;
  width: 15.5rem; //250px
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  &:hover {
    filter: grayscale(70%);
    scale: 1.1;
    transition: all 0.5s;
  }
`;

const Poster = styled.div`
  height: 100%;
  width: 100%;
`;

const PosterImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  border: 1px solid black;
`;

const ViewDetail = styled(motion.div)`
  position: absolute;
  width: 80%;
  height: 20%;
  background-color: ${(props) => props.theme.box};
  color: ${(props) => props.theme.boxText};
  border-radius: 10px;
  top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  opacity: 1;
`;

const TitleDiv = styled(motion.div)`
  position: absolute;
  width: 80%;
  height: 15%;
  background-color: ${(props) => props.theme.box};
  bottom: 0;
  color: ${(props) => props.theme.boxText};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: 10px;
`;

interface IProjectPosterProps {
  onClickOverlay: () => void;
  setLayoutId: React.Dispatch<React.SetStateAction<string>>;
  el: any;
}

export default function ProjectPoster({
  onClickOverlay,
  setLayoutId,
  el,
}: IProjectPosterProps) {
  const [hover, setHover] = useState(false);

  const onClickLayoutId = (data: string) => {
    setLayoutId(data);
  };

  return (
    <AProject
      onClick={() => {
        onClickOverlay();
        onClickLayoutId(el.title);
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      layoutId={el.title}
    >
      <Poster>
        <PosterImg src={el.poster} alt="" />
      </Poster>
      {!hover ? (
        <TitleDiv layoutId={`123${el.title}`}>{el.title}</TitleDiv>
      ) : null}
      {hover ? (
        <ViewDetail layoutId={`123${el.title}`}>자세히 보기</ViewDetail>
      ) : null}
    </AProject>
  );
}
