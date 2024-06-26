import notFlix from "../src/img/netfilx.jpg";
import matchPic from "../src/img/matchPic.jpg";
import wetube from "../src/img/wetube.jpg";
import coin from "../src/img/coin.jpg";
import rock from "../src/img/rock.jpg";
import paint from "../src/img/paint.jpg";
import portfolio from "../src/img/portfolio.jpg";
import foot from "../src/img/foot.jpg";

interface ProjectArray {
  poster: string;
  title: string;
  engTitle: string;
  description: string;
  skills: string[];
  github: string;
  website: string;
  detail?: string;
}

export const ReactProjects: ProjectArray[] = [
  {
    poster: notFlix,
    title: "넷플릭스 클론코딩",
    engTitle: "Netflix Clone Coding",
    description:
      "React를 사용하여 만든 Netflix 클론 코딩 사이트인 'Notfilx' 사이트를 만들었습니다. 'TMDB' 사이트를 이용하여 영화와 TV관련 자료들을 보여줍니다.",
    skills: [
      "React",
      "TypeScript",
      "responsive",
      "react-router",
      "styled-components",
      "framer-motion",
      "recoil",
      "react-swiper",
      "react-query",
      "react-hook-form",
      "react-router",
      "react-helmet",
    ],
    github: "https://github.com/leeJeonghyunz/NotFlix",
    website: "https://leejeonghyunz.github.io/NotFlix/",
    detail:
      "https://aware-recess-952.notion.site/25948a05fdfc4894ad9cf0f9331d36c2?pvs=25",
  },
  {
    poster: matchPic,
    title: "그림맞추기 게임",
    engTitle: "Jigsaw Puzzle",
    description:
      "React와 그의 라이브러리 react-beautiful-dnd를 사용하여 퍼즐게임을 만들었습니다. 퍼즐은 3x3으로 이루어져 있으며 총 5개의 테마를 고를 수 있습니다.",
    skills: [
      "React",
      "TypeScript",
      "responsive",
      "styled-components",
      "recoil",
      "react-swiper",
      `react-beautiful-dnd`,
    ],
    github: "https://github.com/leeJeonghyunz/Match-pic",
    website: "https://leejeonghyunz.github.io/Match-pic/",
    detail:
      "https://aware-recess-952.notion.site/7b54483815e34de4b2690a8566f7f651",
  },
  {
    poster: coin,
    title: "코인 API",
    engTitle: "Coin API",
    description:
      "실시간으로 다양한 코인과 그 코인의 정보를 얻을 수 있는 사이트입니다.",
    skills: [
      "React",
      "TypeScript",
      "responsive",
      "react-router",
      "styled-components",
      "react-helmet",
    ],
    github: "https://github.com/leeJeonghyunz/coinApi",
    website: "https://leejeonghyunz.github.io/coinApi/",
    detail:
      "https://aware-recess-952.notion.site/Coin-Information-7b54d571823543d59d0fa6dcc2faa18c?pvs=4",
  },
  {
    poster: portfolio,
    title: "포트폴리오",
    engTitle: "Frontend Portfolio",
    description:
      "저의 포트폴리오입니다. 총 세개의 페이지로 이루어져 있으며 포트폴리오 포함 7개의 프로젝트가 있습니다. 반응형과 Dark모드 기능이 존재합니다.",
    skills: [
      "React",
      "TypeScript",
      "responsive",
      "react-router",
      "styled-components",
      "react-router",
      "react-helmet",
      "framer-motion",
    ],
    github: "https://github.com/leeJeonghyunz/portfolio",
    website: "https://leejeonghyunz.github.io/portfolio/",
  },
];

export const JsProjects: ProjectArray[] = [
  {
    poster: foot,
    title: "FootballTube",
    engTitle: "FootballTube",
    description:
      "Vanilla Js를 사용하여 축구선수의 유튜브 영상이 나오도록 코딩하였습니다.",
    skills: ["Html", "Css", "JavaScript"],
    github: "https://github.com/leeJeonghyunz/football",
    website: "https://leejeonghyunz.github.io/football/",
  },
  {
    poster: rock,
    title: "가위 바위 보!",
    engTitle: "Rock Paper Scissor",
    description: "Vanilla Js를 사용하여 가위바위보 게임을 만들었습니다.",
    skills: ["Html", "Css", "JavaScript"],
    github: "https://github.com/leeJeonghyunz/ropasc",
    website: "https://leejeonghyunz.github.io/ropasc/",
  },
  {
    poster: paint,
    title: "그림판",
    engTitle: "Drawing Board",
    description:
      "Vanilla Js를 사용하여 웹에서 사용할 수 있는 그림판을 만들었습니다..",
    skills: ["Html", "Css", "JavaScript"],
    github: "https://github.com/leeJeonghyunz/painting",
    website: "https://leejeonghyunz.github.io/painting/",
  },
];

export const AllProjects: ProjectArray[] = [...ReactProjects, ...JsProjects];
