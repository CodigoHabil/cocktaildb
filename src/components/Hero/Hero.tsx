import React from 'react'
import styled from 'styled-components'
import HeroImage from '../../assets/hero.svg' 
import { Container } from '../general'

const Hero = () => {
  return (
    <Section>
        <Container>
            <Title>
                All kind of cocktails in only one place!
            </Title>
        </Container>
    </Section>
  )
}

const Section = styled.section`
    color: #fff;
    height: 60vh;
    display: flex;
    align-items: center;
    width: 100%;
    left: 0;
    overflow: hidden;
    background-size: cover;
    background-image: url("/src/assets/hero.svg");
`

const Title = styled.h1`
    font-size: 48px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--primary-color);
`



export default Hero