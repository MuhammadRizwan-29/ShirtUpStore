import { Search, ShoppingCartOutlined } from "@mui/icons-material"
import { Badge } from "@mui/material"
import styled from "styled-components"

export default function Navbar(){
    const Container = styled.div`
        height: 60px;
    `
    const Wrapper  = styled.div`
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `
    const Left  = styled.div`
        flex: 1;
        display: flex;
        align-items: center;
    `
    const Languages = styled.span`
        font-size: 14px;
        cursor: pointer;
    `
    const SearchContainer  = styled.div`
        border: 0.5px solid lightgrey;
        display: flex;
        align-items: center;
        margin-left: 25px;
        padding: 5px;
    `
    const Input  = styled.input`
        border: none;
    `
    const Center = styled.div`
        flex: 1;
        text-align: center;
    `
    const Logo  = styled.h1`
        font-weight: bold;
    `
    const Right = styled.div`
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    `
    const MenuItem  = styled.div`
        font-size: 14px;
        cursor: pointer;
        margin-left: 25px;
    `

    return(
        <Container>
            <Wrapper>
                <Left>
                    <Languages>EN</Languages>
                    <SearchContainer>
                        <Input></Input>
                        <Search style={{color:"grey", fontSize: "16px"}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>ShurtUp Store</Logo>
                </Center>
                <Right>

                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIG IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent= {4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}