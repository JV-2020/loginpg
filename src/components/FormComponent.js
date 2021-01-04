import React from 'react'
import styled from 'styled-components'

const BackgroundBox = styled.div`
background-color: #96E1FF;
height:50vh;
width:90%

display:flex;
justify-content: center;
align-items: center;

margin: 15rem 40rem;

position:relative;
border-radius:23px;`
;

const Box1= styled.div`
background-color: #0025A4;
height:100%;
width:50%;
positiom:absolute;
left:0;
top:0;



&::after,
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
}

&::before{
    top: 3rem; 
    border-radius: 23px
}

&::after{
    bottom: 3rem; 
    border-radius: 23px
}
`;

function FormComponent(){
    return <>
    <BackgroundBox>
        <Box1 />

    </BackgroundBox>
    </>
}

export default FormComponent