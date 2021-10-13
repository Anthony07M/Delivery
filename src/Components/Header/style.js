import styled from "styled-components";


export const Container = styled.div`
    

`


export const ContainerMobile = styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 5px 11px 0px rgb(0 0 0 / 45%);

    span{
        margin-right: 2rem;
        svg{
            color: var(--Main-Orange-Primary);
            font-size: 2rem;
        }
    }

    h2{
        margin-left: 2rem;
        color: var(--Main-Orange-Primary);
    }

`

export const ContainerDesktop = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 5px 11px 0px rgb(0 0 0 / 45%);

    span{
        margin-right: 2rem;
        svg{
            color: var(--Main-Orange-Primary);
            font-size: 1.5rem;
        }
    }

    h2{
        margin-left: 2rem;
        color: var(--Main-Orange-Primary);
    }

`