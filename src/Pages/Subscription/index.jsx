import { Form } from '../../Components/Form'
import { Container } from './style'

export const Subscription = () => {


    return(
        <Container>
            <h1> Experimente Grátis!</h1>

            <div className ="content">
                <h3>Vamos começar ?</h3>
                 <p>
                     Para começar digite seu email, usuário, senha e senha
                     ou se preferir cadastre-se pelo Facebook
                 </p>
            </div>

            <Form/>


        </Container>
    )
}