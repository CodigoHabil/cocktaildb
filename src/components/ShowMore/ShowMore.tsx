import styled from "styled-components";
import { useState } from 'react'
import {AiOutlineEye} from 'react-icons/ai'

const ShowMore = (props : any) => {
  let { title, heigth } = props;
  heigth = heigth || '5rem'
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => {
    setIsExpanded(!isExpanded);
  }

  const getExpandClass = () => {
    return isExpanded ? 'expand' : '';
  }

  return (
    <ShowMoreContainer>
      <Content className={getExpandClass()}>{ props.children }</Content>
      <Gradient className={getExpandClass()}>
        <Tag onClick={toggle}>
          {isExpanded ? '–Show Less–' 
          : <><AiOutlineEye /> Show More</>
          }
        </Tag>
      </Gradient>
    </ShowMoreContainer >
  )
}

const Content = styled.div`
  height: 8rem;
  overflow: hidden;
  &.expand {
    height:calc(100% + 1rem);
    padding-bottom: 10px;
  }
`

const Gradient = styled.div`
    background: linear-gradient(0deg,rgb(255 255 255) 0%,rgba(255,255,255,0.7) 100%);
    width: 100%;
    position: absolute;
    bottom: 0;
    padding-top: 7px;
    &.expand {
      padding-top: 10px;
    }
`

const Tag = styled.span`
  font-size: 14px;
  padding: 0 2rem;
  font-family: 'DM Serif Display';
  color: #404040;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: fit-content;
  svg {
    margin-right: 5px;
  }
`

const ShowMoreContainer = styled.div`
  height: 5rem; 
  overflow: hidden;
  position: relative;
  width: 100%;
  height: fit-content;
  padding-bottom: 1rem;
  ul {
    margin-top: 0;
  }
`


export default ShowMore
