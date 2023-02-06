import React from 'react'
import styled from 'styled-components'
import { Container } from '../components/general'

const LayoutSinglePage = (props:any) => {
  return (
    <Background>
        <Container>
            {props.children}
        </Container>
    </Background>
  )
}

const Background = styled.div`
    background: var(--secundary-color);
    min-height: 100vh;
`

export default LayoutSinglePage