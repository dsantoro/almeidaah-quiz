import React from 'react';
import styled from 'styled-components';

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

function Results() {
    return (
        <Container>
            <Row>
                <Title>Congratulations. You score 4 questions and did 2 errors!</Title>
            </Row>
        </Container>
    )
}

export default Results;