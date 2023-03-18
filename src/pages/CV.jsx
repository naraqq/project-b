import Layout from "../components/Layouts/Layout";
import { Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
function CV() {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        const response = await fetch("/submit-cv", {
          method: "POST",
          body: new FormData(form),
        });
        const data = await response.json();
        if (data.success) {
          // Success message
        } else {
          setError(data.error);
        }
      } catch (error) {
        setError("An error occurred");
      }
    }
    setValidated(true);
  };
  return (
    <Layout>
      <div className="body bg-white">
        <div className="main min-h-[calc(100vh-90px)] flex items-center justify-center">
          {" "}
          <Form
            noValidate
            className="w-full px-1 md:px-10"
            validated={validated}
            onSubmit={handleSubmit}
          >
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group controlId="name">
              <Form.Label>Овог</Form.Label>
              <Form.Control type="text" placeholder="Овог..." required />
              <Form.Control.Feedback type="invalid">
                Овог нэрээ оруулна уу.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Нэр</Form.Label>
              <Form.Control type="text" placeholder="Нэр..." required />
              <Form.Control.Feedback type="invalid">
                Овог нэрээ оруулна уу.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="email" className="mt-2">
              <Form.Label>Имэйл хаяг</Form.Label>
              <Form.Control
                type="email"
                placeholder="Имэйл хаягаа оруулна уу."
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formFile" className="mt-2">
              <Form.Label>CV upload</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Button className="mt-5" type="submit">
              Илгээх
            </Button>
          </Form>
        </div>
      </div>
    </Layout>
  );
}

export default CV;
