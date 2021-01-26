import {
CardGroup,
Card
} from 'react-bootstrap';
const Cards = (item) => {
	return(
      <CardGroup>
  <Card>
      <Card.Img variant="top" src="./assets/slider_img/annie-spratt-hCb3lIB8L8E-unsplash.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
      </CardGroup>
	);
}

export default Cards;










