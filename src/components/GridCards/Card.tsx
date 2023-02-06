import React from 'react'
import { CardContainer, CartegorySection, ImgCard, Title } from './Components'
import { Link } from 'react-router-dom'

const Card = (props:{id:string, title:string, img:string, cat:string, ingridient:string}) => {
  const {id, title, img, cat, ingridient} = props

  return (
    <CardContainer>
      <ImgCard>
        <Link to={`cocktails/${id}`}>
          <img src={img} alt={title + ' image'} />
          <CartegorySection>
            <div className="wrapper">
              <p>{cat}</p>
              <span className='ingredients'>{ingridient}</span>
            </div>
          </CartegorySection>
        </Link>
      </ImgCard>
      <Title>
        <Link to={`cocktails/${id}`}>{title}</Link>
      </Title>
    </CardContainer>
  )
}



export default Card