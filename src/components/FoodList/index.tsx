import {Sushis,Massas} from "../cards"

import {Container,List} from './styles'

type Props = {
    title:string;
    background:'gray' | 'black'
}

const FoodList = ({background, title}:Props) => (
    <Container>
        <h2>{title}</h2>
        <List>
            <Sushis/>
            <Massas/>
            <Massas/>
            <Massas/>
            <Massas/>
            <Massas/>
        </List>
    </Container>
)


export default FoodList