import React from 'react'
import { BackButton } from '../BackButton';
import { ShowMore } from '../ShowMore';
import { Tab } from '../Tab';
import { ArticleContainer, ImageSection, TextSection, Wrapper } from './Coponents'


const Article = (props: {drink:any}) => {
    const {drink} = props;
    const {strDrink: title, strInstructions: text, strDrinkThumb: img} = drink;
    const ingredients = [];

    for (let i = 1; i <= 15; i++) {
        if (drink[`strIngredient${i}`]) {
            ingredients.push(
                <li>
                    {drink[`strIngredient${i}`]} - {drink[`strMeasure${i}`]}
                </li>
            );
        } else {
            break;
        }
    }
    

    //        <Article title={drink.strDrink} text={drink.strInstructions} img={drink.strDrinkThumb} />
    return (
        <Wrapper>
            <ArticleContainer>
                <ImageSection>
                    <img src={img} alt={title}/>
                </ImageSection>
                <TextSection>
                    <BackButton/>
                    <h1>{title}</h1>
                    <h3>Ingredients</h3>
                    { <ul>{ingredients}</ul> }
      
                    <h3>Instructions</h3>
                    { (text?.length > 400) ? 
                        <ShowMore><div className='instructions-list'>{text}</div></ShowMore>
                        :   <div className='instructions-list'>{text}</div> }
                </TextSection>
            </ArticleContainer>
        </Wrapper>
    )
}

export default Article