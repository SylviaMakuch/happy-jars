import React from "react";
import styled from "styled-components";
import yellowwaves from "../media/yellowwaves.svg";
import colourfullbee from "../media/colourfullbee.svg";

const PageContainer = styled.div`
    background-image: url(${yellowwaves});
    background-repeat: no-repeat;
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;

    @media (max-width: 768px) {
        width: 100%;
        height: none;
    }
`;

const Title = styled.div`
    font-size: 6.5em;
    text-align: center;
    color: black;
    background-color: #00000036;
    padding: 200px;
    font-family: 'Knewave', cursive;
    font-weight: 400;
    max-width: 700px;

    @media (max-width: 768px) {
        font-size: 2.5em;
        padding: 100px;
    }
`;

const ColourFullBee = styled.img`
    width: 300px;
    height: 300px;
    position: absolute;
    bottom: 80px;
    
    @media (max-width: 768px) {
        width: 100px;
        height: 100px;
    }
    &:hover {
        animation: shake 0.5s;
        animation-iteration-count: infinite;
    }

    @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
}
`;

export default function Header() {
    return (
        <PageContainer>
            <Title>
                Welcome to Bee Happy Jars
                <ColourFullBee src={colourfullbee} />
            </Title>
        </PageContainer>
    );
};