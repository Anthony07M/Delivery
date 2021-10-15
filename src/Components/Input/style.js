import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    text-align: left;

    span{
        margin-top: 20px;
        display: block;
        font-size: 1.1rem;
    }

`

export const ContentInput = styled.div`
    display: flex;
    align-items: center;
    margin: 0.5rem 0rem;
    border: 1px solid var(--Main-Grey-Primary);
    border-radius: 10px;

    input {
        font-size: 1rem;
        flex: 1;
        padding: 0.55rem;
        border: 2px solid transparent;
        border-radius: 10px;
    }

    svg {
        color: var(--Main-Orange-Primary);
        margin-left: 10px;
    }
`