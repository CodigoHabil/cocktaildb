import React from "react";
import styled from "styled-components";
import Icon from "../../assets/logo-icon.svg";

export const Logo = () => {
  return (
    <LogoWrapper>
      <img src={Icon} alt="logo" />
      Cocktail DB
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  gap: 8px;
  font-size: 22px;
  font-weight: 500;
  img {
    width: 25px;
  }
`;
