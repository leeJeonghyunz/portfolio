import React from "react";
import styled from "styled-components";
import backImg from "../img/programmer.jpg";

const Wrapper = styled.div`
  width: 100%;
  height: 85vh;
  background-color: ${(props) => props.theme.backgroundColor2};
  display: flex;
`;

const ImageDiv = styled.div`
  width: 40%;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
`;

const RightDiv = styled.div`
  position: relative;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleDiv = styled.div`
  position: absolute;
  top: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;

const Title = styled.div`
  margin: 0px 10px;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Hr = styled.div`
  width: 100%;
  border-bottom: 3px solid black;
  text-align: center;
`;

interface IBackgroundProps {
  content: string;
  children?: React.ReactNode;
}

export default function Background({ content, children }: IBackgroundProps) {
  return (
    <Wrapper>
      <ImageDiv>
        <Img src={backImg} alt="" />
      </ImageDiv>
      <RightDiv>
        <TitleDiv>
          <Hr />
          <Title>{content}</Title>
          <Hr />
        </TitleDiv>
        {children}
      </RightDiv>
    </Wrapper>
  );
}
