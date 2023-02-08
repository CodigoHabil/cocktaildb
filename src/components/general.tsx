import styled from 'styled-components';

export const Main = styled.main`
`

export const PageArticle = styled.article`
    padding-top: 5rem;
    a {
        font-weight: 800;
        border-bottom: #f49191 2px solid;
    }
`

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    box-sizing: border-box;
    &.page {
        padding-top: 5rem;
    }
`;
