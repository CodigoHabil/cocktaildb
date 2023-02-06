import styled from "styled-components";

export const Item = styled.div`
    margin: 1rem 0;
    a {
        font-weight: 800;
        color: brown;
    }
    &:before {       
        content: "->";
        color: brown;
        font-size: 1rem;
        margin-right: 0.5rem;
    }
`