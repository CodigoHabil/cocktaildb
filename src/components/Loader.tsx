import styled from "styled-components";

import React from 'react'

const Loader = () => {
  return (
    <div>
        <span className="loader"></span>
    </div>
  )
}

export {Loader}


export const LoaderContainer = styled.span`
          width: 40px;
          height: 98px;
          display: inline-block;
          position: relative;
          border: 2px solid #FFF;
          box-sizing: border-box;
          color: rgba(255, 61, 0, 0.9);
          border-radius: 20px 20px 4px 4px;
          background: #fff;
          animation: fill 2s linear infinite alternate;
        }
        .&::after {
          content: '';
          box-sizing: border-box;
          position: absolute;
          left: 50%;
          top: 0%;
          transform: translate(-50% , -95%);
          border: 2px solid #FFF;
          border-bottom: none;
          background: #fff;
          width: 15px;
          height: 35px;
          animation: fillNeck 2s linear infinite alternate;
        }
`;
