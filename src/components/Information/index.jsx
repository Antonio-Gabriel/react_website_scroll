import React from "react";

import { Button } from "../../styles/Button";
import desciptionLogo from "../../assets/images/svg-1.svg";

import {
  Container,
  Content,
  Row,
  ContentDescription,
  Text,
  ContentWrapper,
  TextWrapper,
  ContentImage,
} from "./styles";

function Information() {
  return (
    <>
      <Container>
        <Content>
          <Row>
            <ContentDescription>
              <TextWrapper>
                <Text>PREMIUM BANK</Text>
                <h2>Unlimited Transactions with zero fees</h2>
                <p>
                  Get acces to our exclusive app that allows you to send
                  unlimited transactions without getting charged any fees
                </p>
              </TextWrapper>
              <ContentWrapper>
                <Button to="signup" primary={true} dark={true} big={true}>
                  Get Started
                </Button>
              </ContentWrapper>
            </ContentDescription>

            <ContentImage>
              <img src={desciptionLogo} alt="description logo" />
            </ContentImage>
          </Row>
        </Content>
      </Container>
    </>
  );
}

export default Information;
