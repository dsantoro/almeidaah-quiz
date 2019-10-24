import React, { useState } from 'react';
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

const Button = styled.button`
    background-color: #6441a5;
    align-self: flex-end;
    padding: 12px 22px;
    border-radius: 4px;
    color: white;
    font-size: 16px;
    display: block;
    margin-top: 60px;
    cursor: pointer;
`;

const quiz = ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5', 'Question 6'];

function Quiz({ history }) {
    const [page, setPage] = useState(0);
    const changePage = () => {
        if(page <= quiz.length - 2) {
            setPage(page + 1)
        }
    }
    return (
        <Container>
            <Row>
                {quiz[page]}
                { page <= quiz.length - 2 && <Button onClick={() => changePage()}>Next</Button> }
                { page >= quiz.length - 1 && <Button onClick={() => history.push('/results')}>Results</Button> }
            </Row>
        </Container>
    )
}

export default Quiz;