import React from 'react'
import styled from 'styled-components'
import HeroImage from '../../assets/hero.svg' 
import { Container } from '../general'

const Hero = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => {
  return (
    <Section>
        <Container>
            <Title>
                All kind of <span className='highlight'>cocktails</span> in only one place!
            </Title>
            <Subtitle>
                A database of cocktails, with a search engine to find your favorite drink.
            </Subtitle>
            {props.children}
        </Container>
    </Section>
  )
}

const Section = styled.section`
    background-color: #efdbd6;
    color: #fff;
    height: 100vh;
    //height: 60vh;
    display: flex;
    align-items: center;
    width: 100%;
    left: 0;
    overflow: hidden;
    background-size: cover;
    background-image: url("/src/assets/hero.svg");
    @media (min-width: 576px) { 
        height: 60vh;
    }

`

const Title = styled.h1`
    font-size: 45px;
    font-weight: 400;
    letter-spacing: 0px;
    color: var(--primary-color);
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
    .highlight {
        font-family: inherit;
        font-size: inherit;
        text-decoration: underline;
        text-decoration-color: var(--third-color);
    }
`

const Subtitle = styled.p`
    font-size: 20px;
    color: var(--primary-color);
    text-align: center;
`



export default Hero