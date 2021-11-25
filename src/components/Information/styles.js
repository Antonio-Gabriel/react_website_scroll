import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0px;
  }
`;

export const Content = styled.div`
  display: grid;
  z-index: 1;
  height: 800px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;

  justify-content: center;
`;

export const Row = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1 col2'` : `'col1 col1' 'col1 col1'`};
  }
`;

export const ContentDescription = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const ContentImage = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;

  img { 
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
  }  
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0px;
  padding-bottom: 20px;  

  h2 {    
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #f7f8fa;
    /* color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")}; */

    @media screen and (max-width: 480px) {
      font-size: 32px;
    }
  }

  p {    
    max-width: 440px;
    margin-bottom: 15px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
  }
`;

export const Text = styled.p`
  color: #01bf71 !important;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;  
`;

