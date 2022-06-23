import { Button, Card, Form, Row } from "react-bootstrap";

export default function Register() {
  return (
    <Row>
      <div className="col-md-6 offset-md-3">
        <Card>
          <Card.Body>
            <Card.Title>Register</Card.Title>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Full name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3">
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
