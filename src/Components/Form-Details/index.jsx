import { Input } from '../Input'
import { Container } from './style'
import { useForm } from "react-hook-form"
import { useHistory } from 'react-router-dom'

export const FormDetails = ({isJuridico=false}) => {

    const { register, handleSubmit } = useForm()
    const history = useHistory()

    const onSubmitFunc = (data) => {
        console.log(data)
    }

    return(
        <Container>
            {
                isJuridico? 
                (
                    <form onSubmit={handleSubmit(onSubmitFunc)}>
                        <Input
                            label="CNPJ"
                            placeholder="00.000.000/0000-00"
                            type="text"
                        />

                        <Input
                            label="Razão social"
                            placeholder="Digite a razão social da sua empresa"
                            type="text"
                        />

                        <div className='container-buttons'>
                            <button onClick={() => history.push("/subscription")} >Voltar</button>
                            <button type='submit'> Avançar</button>
                        </div>
                    </form>
                )
                :
                (
                    <from onSubmit={handleSubmit(onSubmitFunc)} >
                         <Input
                            label="CPF"
                            placeholder="000.000.000-00"
                            type="text"
                        />

                        <Input
                            label="Nome"
                            placeholder="Digite seu nome"
                            type="text"
                        />

                        <div className='container-buttons'>
                            <button onClick={() => history.push("/subscription")} >Voltar</button>
                            <button type='submit'> Avançar</button>
                        </div>
                    </from>
                )
            }
        </Container>
    )
}