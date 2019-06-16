import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import background from '../assets/background.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${background}) no-repeat fixed bottom;
    background-size: cover;
    color: #EDF5E1;
    height: 240px;
    position: sticky;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: initial;
    top: 3;
    left: 3;
    bottom: 3;
    right: 3;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container className="cont">
        <h1 class="text-center">Welcome</h1>
        <p class="text-center">To the world of NCIS</p>
      </Container>
    </Jumbo>
  </Styles>
)