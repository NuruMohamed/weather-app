import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-style: italic;
    font-size: 12px;
    padding: 5px;
    @media(min-width: 601px) {
      padding: 15px;
    }

    @media(min-width: 992px) {
        padding: 5px;
    }
`;

const Link = styled.a`
    font-style: italic;
    padding: 5px;
`;

function Footer(props) {


    return (
        <Wrapper>
            data from external<Link href="https://github.com/konstantinmuenster/graphql-weather-api">api</Link>
        </Wrapper>
    );
}

export default Footer;