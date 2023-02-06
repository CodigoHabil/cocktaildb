import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 2rem);
  justify-content: center;
  align-items: center;
`;
export const ArticleContainer = styled.article`
  background: #fff;
  max-width: 700px;
  height: fit-content;

  h1 {
    border-right: 5px solid #b26b6b;
  }

  ul {
    font-family: "DM Serif Display", serif;
    padding-left: 22px;
  }

  li {
    color: #c34b4b;
    font-family: inherit;
  }

  .instructions-list {
    font-family: "DM Serif Display", serif;
    color: #919191;
    line-height: 22px;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    min-height: 520px;
    h1 {
      font-size: 3rem;
    }
  }
`;
export const ImageSection = styled.section`
  overflow: hidden;
  height: 300px;
  img   {
    width: 100%;
    object-fit: cover;
    width: 100%;
  }
  @media (min-width: 768px) {
    min-height: 520px;
    height: 100%;
    img {
      height: 100%;
    }
  }
`;

export const TextSection = styled.section`
  padding: 1rem;
`;
