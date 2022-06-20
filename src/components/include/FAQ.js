import React, { Fragment } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

const FAQ = () => {
  return (
    <Fragment>
      <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Who is OX Stocks</Accordion.Header>
        <Accordion.Body>
          We are an Australia company who are extremely passionate about crypto and the future of our financial systems
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Where can I buy OX Coin?</Accordion.Header>
        <Accordion.Body>
          Ox Coin will be available for purchase from xt.com on the 8th of January 2022
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2 ">
        <Accordion.Header>Do you create coins for others?</Accordion.Header>
        <Accordion.Body>
          Get in touch with us via our <Link to="/oxlabs">OX LABS</Link> for more information on how we can assist
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Fragment>
  )
}

export default FAQ;