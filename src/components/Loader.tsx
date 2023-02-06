import styled from "styled-components";

import React from 'react'

const Loader = () => {
  return (
    <LoaderContainer>
      <Column>
        <span className="loader"></span>
        <div>
          Loading...  
        </div>
      </Column>         
    </LoaderContainer>
  )
}

export {Loader}

const Column  = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    text-transform: unset;
    font-weight: bold;

`

export const LoaderContainer = styled.span`
  padding: 1rem;
  display: flex;
  justify-content: center;
`;
