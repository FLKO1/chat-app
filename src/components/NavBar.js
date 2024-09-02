import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FormExample() {
  return (
    <Navbar className="bg-body-tertiary justify-content-between">
      <Form inline>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
      <Form inline>
        <Row>
        <Col xs="auto">
            <Button type="submit">Ayuda!</Button>
        </Col>
          <Col xs="auto">
            <Button type="submit">Cerrar Sesion</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default FormExample;