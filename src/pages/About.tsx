import React from "react";
import { Container, PageArticle } from "../components/general";
import Layout from "../layouts";

const About = () => {
  return (
    <Layout>
      <Container>
        <PageArticle>
          <h1>About</h1>
          <p>
            <b>"Cocktail DB"</b> is an online database of cocktail recipes, created
            with the goal of providing users with an extensive collection of
            cocktails, both classic and modern, along with detailed information
            on ingredients, method of preparation, and garnishing.
          </p>
          <p>
            This project was made by <a href="https://twitter.com/Charlie_Araiza" target='_blank'>@Carlos Araiza</a>.
            You can find the source code on <a href="https://github.com/CodigoHabil/cocktaildb" target='_blank'>GitHub</a>
          </p>
        </PageArticle>
      </Container>
    </Layout>
  );
};

export default About;
