import { Container, Content } from './style'

export const Input = ({ icon:Icon, label, ...rest }) => {
    
    return (
        <Container>
            <span> {label} </span>
            <Content>
                {Icon && <Icon/>}
                <input autoComplete={false} {...rest} />
            </Content>                    
        </Container>
    )
}