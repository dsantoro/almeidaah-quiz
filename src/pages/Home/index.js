import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    display: flex;
    width: 100%;
`;

const Row = styled.div`
    max-width: 1000px;
    padding: 0 15px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    margin-bottom: 20px;
    text-align: center;
    font-size: 38px;
`;

const Text = styled.p`
    text-align: center;
`;

const Button = styled(Link)`
    background-color: #6441a5;
    align-self: flex-end;
    padding: 12px 22px;
    border-radius: 4px;
    color: white;
    margin-top: 60px;
`;

function Home() {
    return (
        <Container>
            <Row>
                <Title>Welcome to almeidaah's quiz!</Title>
                <Text>Click on Start button to take the quiz.</Text>
                <Button to="/quiz">Start</Button>
            </Row>
        </Container>
    )
}

export default Home;