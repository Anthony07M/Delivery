import { useState } from 'react'
import { FormDetails } from '../../Components/Form-Details'
import { Container, ContentRadio } from './style'
import { BiRadioCircle, BiRadioCircleMarked } from 'react-icons/bi'

export const SubscriptionContinue = () => {

    const [isJuridico, setIsJuridico] = useState(true)

    return(
        <Container>
            <h1> Experimente Grátis!</h1>

            <div className ="content">
                <h3>Dados da empresa</h3>
                 <p>
                 Queremos conhecer você e o seu negócio! Preencha os campos ao lado com suas informações ;) 
                *Campos Obrigatórios
                 </p>
            </div>


            <ContentRadio> 
                {isJuridico?
                (
                    <span className = 'icons'>
                        Eu sou
                        <BiRadioCircleMarked/> Pessoa Jurídica 
                        <BiRadioCircle onClick={() => setIsJuridico(!isJuridico)}/> Pessoa Física
                    </span>
                )
                :
                (
                    <span className = 'icons'>
                        Eu sou
                        <BiRadioCircle onClick={() => setIsJuridico(!isJuridico)} /> Pessoa Jurídica
                        <BiRadioCircleMarked/> Pessoa Física 
                    </span>
                )
                }
            </ContentRadio>

            <FormDetails isJuridico={isJuridico}/>


        </Container>
    )
}