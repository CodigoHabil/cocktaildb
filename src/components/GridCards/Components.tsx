import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 480px) { 
        grid-template-columns: repeat(1, 1fr);
    }
`

export const CardContainer = styled.div`
    border-radius: 5px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const ImgCard = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    a {
        width: 100%;
        height: 100%;
        top: 0;
    }

    @media (min-width: 768px) {
        height: 350px;
    }
`

export const CartegorySection = styled.div`
    min-height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    color: #fff;
    width: 100%;
    font-weight: 500;
    padding: 10px;
    background: linear-gradient(0deg, rgba(60,14,55,1) 0%, rgba(255,255,255,0) 100%);
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .ingredients {
        font-size: 12px;
        padding: 5px;
        border: 1px solid #fff;
    }
    p {
        font-size: 12px;
    }
`

export const Title = styled.h3`
    text-align: center;
  a {
    font-size: 1.2rem;
    text-align: center;
    color: var(--primary-color);
  }
`