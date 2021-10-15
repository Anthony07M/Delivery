import { Container } from "./style"
import { Input } from "../Input"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"



export const Form = () => {

    const schema = yup.object().shape({
        username: yup.string().required("* Campo obrigatório"),
        email: yup.string().required("* Campo obrigatório").email("Verifique seu seu email está correto"),
        password: yup.string().required("* Ccampo Obrigatório").min(6, "A senha deve pelo menos 6 caracteres")
    })


    const { register, handleSubmit, reset, formState: { errors } } = useForm({resolver: yupResolver(schema)});
    
    const onSubmit = (data) => {
        console.log(data)
        reset()
    }
    
    
    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>  
               
               <Input
                    label="Usuário (sem espaços e caracteres)"
                    placeholder="Digite um nome para usuário"
                    type="text"
                    error={errors.username?.message}
                    register={{...register("username")}}
                    />
               <Input
                    label="email"
                    placeholder="Digite seu email"
                    type="email"
                    error={errors.email?.message}
                    register={{...register("email")}}
                    />

                <Input
                    label="Senha"
                    placeholder="6 ou mais caracteres"
                    type="password"
                    error={errors.password?.message}
                    register={{...register("password")}}
                /> 
                <button type="submit">Avançar</button>

            </form>
        </Container>
    )
}