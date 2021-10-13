import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    text-align: left;

  span {
    color: var(--Main-Grey-Primary);
    margin-top: 20px;
    display: block;
    font-size: 1.1rem;
  }

`

export const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0.5rem 0rem;
    background: var(--grey);
    border: 1px solid;
    border-radius: 10px;
    input {
        border: 0;
        background: transparent;
        font-size: 1rem;
        flex: 1;
        padding: 0.55rem;
        border: 2px solid transparent;
        border-radius: 10px;
    }

    svg {
        color: var(--pink);
        margin-left: 10px;
    }
`