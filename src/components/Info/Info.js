import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { infoData } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoData.title} src={infoData.image}/>
    <p>{infoData.description}</p>
  </Container>
);

Info.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default Info;