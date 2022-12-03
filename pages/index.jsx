import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import QuickMenu from "../components/QuickMenu";
import Fade from "react-reveal";
import PublicComp1 from "../components/PublicComp1";
import PublicComp2 from "../components/PublicComp2";
import PublicComp3 from "../components/PublicComp3";
import PublicComp4 from "../components/PublicComp4";
import Header_A from "../components/navigation/Header_A";

const datum = [
  {
    name: "INTRO",
    target: "/intro",
  },
  {
    name: "CONTACT",
    target: "/contact",
  },
  {
    name: "TEAM",
    target: "/team",
  },
  {
    name: "PROJECT",
    target: "/project",
  },
];

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .react-reveal {
    width: 100%;
    padding: 0px !important;
  }
`;

const ImageSection = styled.section`
  width: 100%;
  padding: 20px 0px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 50%;
  height: 400px;

  object-fit: cover;
  box-shadow: 3px 3px 7px #999;
  transition: 0.5s;

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 300px;
  } ;
`;

const QuickSection = styled.section`
  width: 100%;
  padding: 20px 0px;
`;

const App = () => {
  return (
    <Wrapper>
      <Header_A />
      <Fade left>
        <ImageSection>
          <Image
            src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-1-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753619946"
            alt="메인이미지1"
          />
          <Image
            src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-11-og-202210?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1664504610941"
            alt="메인이미지2"
          />
        </ImageSection>
      </Fade>
      <Fade bottom>
        <QuickSection>
          <QuickMenu datum={datum} />
        </QuickSection>
      </Fade>
      <div style={{ height: "150px" }}></div>
      <PublicComp4
        title="
        No One Knows The Future."
        desc="As Steve Jobs  Said..."
      />
      <div style={{ height: "150px" }}></div>
      <PublicComp2
        imgSource="https://developer.apple.com/news/images/og/apple-developer-og.png"
        text="APPLE"
      />
      <PublicComp4
        title="There is no time. Don't give up your life for someone else."
        desc="As Steve Jobs  Said..."
      />
      <PublicComp1
        datum={[
          {
            title: "INTROUCE",
            content: "introduce Us. Come To Here",
            link: "/intro",
          },
          {
            title: "OUR TEAM",
            content: "Team Profile And Team Description",
            link: "/team",
          },
          {
            title: "SHOW YOUR THINK",
            content: "If You Contact us...",
            link: "/contact",
          },
        ]}
      />
      <PublicComp3 />
    </Wrapper>
  );
};

export default App;
