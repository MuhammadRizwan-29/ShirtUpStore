import { Send } from "@mui/icons-material";
import styled from "styled-components";

const Conatiner = styled.div`
    height: 60vh;
    background-color: #fcfcf5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title =  styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Descrption = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer =  styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey;
`
const Input =  styled.input`
    flex: 8;
    border: none;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`

export default function NewsLetter(){
    return(
        <Conatiner>
            <Title>Newsletter</Title>
            <Descrption>Get timely updates from our favorite products.</Descrption>
            <InputContainer>
                <Input placeholder="Your Email Address"/>
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Conatiner>
    );
}