import React from 'react'
import styled from 'styled-components'

const BackgroundBox = styled.div`
background-color: #96E1FF;
height:50vh;
width:50%;

display:flex;
justify-content: center;
align-items: center;

margin: 15rem auto;

// margin: 15rem 40rem;
position:relative;
border-radius:23px;`
;

const Box1= styled.div`
background-color: #1977cc;
height:100%;
width:50%;
position:absolute;
left:0;
top:0;



&::after,
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;;

    z-index: -200;
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

const Box2= styled.div`
// background-color: #b5d3e7;
background-color: white;
height:100%;
width:50%;
position:absolute;
right:0;
top:0;

border-radius:0 23px 23px 0;
`;

const Form=styled.form`
color:white;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:100%;
padding: 0 4rem;

z-index:100;

`;
const Input=styled.input`
background-colour:#fff;
border-radius:23px;
padding: 1rem 2rem;
`;

function FormComponent(){
    return <>
    <BackgroundBox>

        <Form>
            <h1>Sign IN</h1>
            <Input type="email" name="email" id="emailId" placeholder="Email"/>
            <Input type="password" name="password" id="passwordId" placeholder="Password"/>
            <a href="#">Forgot your Password?</a>
            <button>Sign In</button>
        </Form>
        <Box1 />
        <Box2 />

    </BackgroundBox>
    </>
}

export default FormComponent