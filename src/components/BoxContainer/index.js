import React from 'react';
import { Container} from './styles/boxContainer'

export default function BoxContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}