import React from "react";
import video from "../../assets/videos/video.mp4";

import { Button } from "../../styles/Button";

import { Container, HeroBg, VideoBg, Content, HeroWrapper } from "./styles";

function Hero() {
  return (
    <>
      <Container>
        <HeroBg>
          <VideoBg autoPlay loop muted src={video} type="video/mp4" />
        </HeroBg>

        <Content>
          <h1>Virtual Banking Made Easy</h1>
          <p>
            Sign up for a new account toady and recieve $250 in credit towards
            your next payment.
          </p>
          <HeroWrapper>
            <Button to="signup" primary={true} dark={true}>
              Get Started
            </Button>
          </HeroWrapper>
        </Content>
      </Container>
    </>
  );
}

export default Hero;
