import styled from "styled-components"
import Annoucment from "../components/Annoucment"
import Navbar from "../components/Navbar"


const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`

export default function ProductList(){
    return(
        <Container>
            <Annoucment />
            <Navbar />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter></Filter>
            </FilterContainer>
        </Container>
    )
}