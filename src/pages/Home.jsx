import React from 'react';
import styled from '@emotion/styled';

const WrapperHome = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 22px;
`;

const H2 = styled.h2`
    margin-bottom: 10px;
`;

const Home = () => {
    return (
        <WrapperHome>
            <H2>Welcome to Phonebook</H2>
            <p> Contacts manager page 🥹</p>
        </WrapperHome>
    );
};

export default Home;
