import { Container, ContentInput } from "./style"

export const Input = ({icon: Icon, label, register, ...rest }) => {
    
    return (
        <Container>
            <span>{ label }</span>
            {Icon && <Icon/>}
            
            <ContentInput>
                <input {...rest} {...register} />
            </ContentInput>
        </Container>
    )
}