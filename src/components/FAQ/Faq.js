import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { faqData } from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText={faqData.title} src={faqData.image}/>
    <p>{faqData.description}</p>
  </Container>
);

Faq.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default Faq;