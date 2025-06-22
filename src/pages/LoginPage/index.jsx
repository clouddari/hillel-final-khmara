import logo from "../../assets/rozetka-logo.svg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./loginPage.css";
import { InputGroup } from "react-bootstrap";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-card">
        <img src={logo} alt="Company logo" />

        <Form>
          <Form.Control
            className="rounded-0"
            placeholder="User Name"
            aria-label="User Name Input"
            required
          />

          <InputGroup className="password-input-group">
            <Form.Control
              className="rounded-0 mb-3"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              aria-label="User Password"
              required
            />

            <InputGroup.Text
              onClick={() => setShowPassword(!showPassword)}
              className="rounded-0"
              style={{
                cursor: "pointer",
                backgroundColor: "#d9d9d9",
                height: "56px",
                borderStyle: "none",
              }}
            >
              <i
                className={`bi ${
                  showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"
                }`}
                style={{
                  color: "#44b26f",
                }}
              ></i>
            </InputGroup.Text>
          </InputGroup>

          <Button className="rounded-0" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
