import logo from "../../assets/rozetka-logo.svg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./loginPage.css";
import { InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const res = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token);
      navigate("/");
    } else {
      setError(data.error);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-card">
        <img src={logo} alt="Company logo" />

        {error && (
          <div
            className="alert alert-danger d-flex align-items-center mt-3 mb-4"
            role="alert"
            style={{ fontSize: "14px" }}
          >
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            {error}
          </div>
        )}

        <Form onSubmit={handleLogin}>
          <Form.Control
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="rounded-0"
            placeholder="User Name"
            aria-label="User Name Input"
            required
          />

          <InputGroup className="password-input-group">
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
