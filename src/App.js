import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function App() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://static.zara.net/photos///2023/I/0/2/p/8211/309/052/2/w/279/8211309052_6_1_1.jpg?ts=1689087341680" />
        <Card.Body>
          <Card.Title>CHEMISES POUR HOMME</Card.Title>
          <Card.Text>
          Basique indispensable de la garde-robe masculine, la chemise offre des styles de jour comme de nuit qui répondent à tous vos besoins. Que vous soyez habillé pour le bureau, pour un événement formel ou pour une soirée décontractée, notre collection de chemises Zara.

          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://static.zara.net/photos///2023/I/0/2/p/1063/309/527/2/w/279/1063309527_6_1_1.jpg?ts=1687167483750" />
        <Card.Body>
          <Card.Title>CHEMISES POUR HOMME</Card.Title>
          <Card.Text>
          Basique indispensable de la garde-robe masculine, la chemise offre des styles de jour comme de nuit qui répondent à tous vos besoins. Que vous soyez habillé pour le bureau, pour un événement formel ou pour une soirée décontractée, notre collection de chemises Zara.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://static.zara.net/photos///2023/I/0/2/p/8211/309/481/2/w/279/8211309481_6_1_1.jpg?ts=1689087342020" />
        <Card.Body>
          <Card.Title>CHEMISES POUR HOMME</Card.Title>
          <Card.Text>
          Basique indispensable de la garde-robe masculine, la chemise offre des styles de jour comme de nuit qui répondent à tous vos besoins. Que vous soyez habillé pour le bureau, pour un événement formel ou pour une soirée décontractée, notre collection de chemises Zara
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>


    </div>
   
  );
}

export default App;

