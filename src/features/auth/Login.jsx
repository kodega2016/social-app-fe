import { Button, Card, Form, Row } from "react-bootstrap";

export default function Login() {
  return (
    <Row>
      <div className="col-md-6 offset-md-3">
        <Card>
          <Card.Body>
            <Card.Title>Login</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary">Login</Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Row>
  );
}
