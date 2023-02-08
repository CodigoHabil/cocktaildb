import styled from "styled-components";

export const ButtonContainer = styled.div`
  cursor: pointer;
  width: fit-content;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -1px;
  color: black;
  //border-bottom: 3px #ff6464 solid;
  self-align: center;
  margin-left: auto;
  position: relative;
  &:after {
    content: "";
    width: 49%;
    height: 4px;
    background-color: #c34b4b;
    position: absolute;
    left: 0;
    bottom: -5px;
    transition:0.3s;
  }
  &:hover {
    &:after {
      width: 100%;
    }
  }
  svg {
    padding-right: 8px;
  }
`;
