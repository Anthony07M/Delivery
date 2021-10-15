import { Container, ContentInput } from "./style"

export const Input = ({icon: Icon, label, register, error, placeholder, ...rest }) => {
    
    return (
        <Container>
            <span>{ label }</span>
            {Icon && <Icon/>}
            
            <ContentInput>
                <input {...rest} {...register}  placeholder={!!error ? error : placeholder}/>
            </ContentInput>
        </Container>
    )
}