import { Input } from '../Input'
import { Container } from './style'
import { useForm } from "react-hook-form"
import { useHistory } from 'react-router'

export const Form = () => {

    const { register, handleSubmit } = useForm()
    const history = useHistory()

    const onSubmitFunc = (data) => {
        console.log(data)
        history.push("/subscription-continue")
    }

    return(
        <Container>
            <form onSubmit={handleSubmit(onSubmitFunc)}>
            <Input
                label="Usuário (Sem espaços e caracteres especiais)"
                type="text"
                placeholder="Digite um nome para usuário"
                {...register("usuario")}
               /> 

               <Input
                    label="E-mail"
                    type="email"
                    placeholder="Digite seu email"
                    {...register("email")}
               /> 
               <Input
                    label="Senha"
                    type="password"
                    placeholder="6 ou mais caracteres"
                    {...register("password")}
               /> 

                <div className="container-button">
                    <button type='submit'>Avançar</button>
                </div>               

            </form>
        </Container>
    )
}