import styled from "styled-components";

export const SearchContainer = styled.div`
    background: white;
    padding: 0.6rem;
    box-shadow: -1px -2px 22px 7px rgb(222 162 155 / 67%);
    display: flex;
    justify-content: space-between;
    input {
        border: none;
        background: none;
        width: 100%;
        &:focus {
            outline: none;
        }
    }
    svg {
        color: var(--color);
        font-size: 1.5rem;
    }
`