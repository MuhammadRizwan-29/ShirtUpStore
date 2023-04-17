import styled from "styled-components"
import Annoucment from "../components/Annoucment";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import ProductImage from "./../assets/Slider-image-1.png";
import { Add, Remove } from "@mui/icons-material";
const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const ImageContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;
const Info = styled.div`
    flex: 1;
    padding: 0px 50px;
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Description = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-size: 40px;
    font-weight: 100;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
    width: 50%;
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`;
export default function Product(){
    return(
        <Container>
            <Annoucment />
            <Navbar />
            <Wrapper>
                <ImageContainer>
                    <Image src={ProductImage}/>
                </ImageContainer>
                <Info>
                    <Title>Denium Jumpsuit</Title>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quibusdam incidunt alias autem. Maiores nesciunt, atque tempora iusto rem enim eveniet soluta amet voluptate cumque ea veritatis reprehenderit exercitationem.</Description>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color:</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="grey" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size:</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </Info>
                
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    );
}