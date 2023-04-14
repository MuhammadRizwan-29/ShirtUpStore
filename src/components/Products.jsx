import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Conatainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    justify-content: center;
`

export default function Products(){
    return(
        <Conatainer>
            {popularProducts.map(item =>(
                <Product item ={item} key={item.id}/>
            ))}
        </Conatainer>
    )
}