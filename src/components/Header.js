import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
    display: flex;
    border: 3px solid black;
    flex-direction: column;
    text-align: left;
    padding-top: 0;
    
    margin: 2%;
`
const HeaderH1 = styled.h1`
    font-size: 4rem;
    margin-bottom: 0;
    margin-top: 0;
`
const HeaderP = styled.p`
    text-align: center;
`
const HeaderA = styled.a`

`


export default function Header() {
    return (
        <HeaderDiv className="header">
            <HeaderH1>Food Nutrition Lookup</HeaderH1>
            <HeaderP>Made by <HeaderA href="https://github.com/WRWPhillips">Will Phillips</HeaderA> using <HeaderA href="https://fdc.nal.usda.gov/index.html">USDA FoodData Central API</HeaderA></HeaderP>
        </HeaderDiv>
    )
}