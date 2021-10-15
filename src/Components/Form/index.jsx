import { Container } from "./style"
import { Input } from "../Input"
import { useForm } from "react-hook-form"

export const Form = () => {

    const { register, handleSubmit, } = useForm();
    const onSubmit = (data) => console.log(data)

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>  
               <Input
                    label="email"
                    placeholder="Digite um nome para usuário"
                    type="email"
                    register={{...register("email")}}
                    />

                <Input
                    label="Senha"
                    placeholder="6 ou mais caracteres"
                    type="password"
                    register={{...register("senha")}}
                /> 
                <button type="submit">Avançar</button>

            </form>
        </Container>
    )
}