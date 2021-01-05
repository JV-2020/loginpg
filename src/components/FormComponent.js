import React from 'react'
import styled from 'styled-components'

const BackgroundBox = styled.div`
background-color: white;
height:50vh;
width:50%

display:flex;
justify-content: center;
align-items: center;

margin: 15rem auto;
// margin: 15rem 40rem;

position:relative;
border-radius:23px;`
;

const Box1= styled.div`
background-color: #0025A4;
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
    background-color: #0025A4;

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
background-color: #96E1FF;
height:100%;
width: 50%;
position:absolute;
right:0;
top:0;

border-radius: 0 23px 23px 0;
`;

// const Form=styled.form`
// color: #1b1b1b;
// display: flex;
// flex-direction: column;
// align-items:center;
// justify-content: center;
// height:100%;
// z-index: 100;
// `;

function FormComponent(){
    return <>
    <BackgroundBox>

        {/* <Form>
            <input type="email" name="email" id="emailId" placeholder="Email"/>
            <input type="password" name="password" id="passwordId" placeholder="Password"/>
        </Form> */}
        <Box1 />
        <Box2 />
    </BackgroundBox>
    </>
}

export default FormComponent