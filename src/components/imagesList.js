import React from 'react';
import { getImageUrl } from '../utils';
import { Container, Row, Col } from 'reactstrap';
const ImagesList = ({ data }) => {
  console.log(data);
  return (
    // <Container>
      // {
        data.map((data, index) => {
          if (data) {
            return (
              // <Row>
                // <Col> 
                <img src={getImageUrl(data.id, data.server, 'w', data.secret)} alt='loading...' />
                // </Col>
              // </Row>
            )
          }
          return null
        })
      // }
    // </Container>
  );
}

export default ImagesList