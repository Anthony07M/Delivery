import { ContainerMobile, ContainerDesktop, Container } from './style'
import {FiMenu} from 'react-icons/fi'
import { Link } from 'react-router-dom'

export const Header = ({Tile, isDesktop=false}) => {
    return(
        <Container>
            {
                isDesktop?
                (
                    <ContainerDesktop>
                        <h2>{Tile}</h2>
                        <Link>Funcionalidades</Link>
                        <Link>Planos e preços</Link>
                        <Link>Fale conosco</Link>
                        <Link>Blog</Link>
                        <div>
                            <button>Experimente Grátis</button>
                        </div>

                        <div>
                            <button>Entrar</button>
                        </div>
                    </ContainerDesktop>
                )
                :
                (
                    <ContainerMobile>
                        <h2>{Tile}</h2>
                        <span>
                        <FiMenu/>
                    </span>
                </ContainerMobile>
                )
            }
        </Container>
     )
    }