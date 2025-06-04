import React, { useEffect, useState } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../../Store/features/Auth/authThunks";
import type { AppDispatch } from "../../../Store/store";
export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();

  const token = useSelector(
    (state: { auth: { token: string } }) => state.auth.token
  );

  useEffect(() => {
    if (token) {
      if (!location.state) {
        navigate("/");
      } else {
        navigate(location.state, { replace: true });
      }
    }
  }, [location.state, navigate, token]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(loginUser(form));
  };

  return (
    <div className="main-login-container">
      <div className="login-container">
        <h2>Login</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-Container">
            <label>Email:</label>
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-Container">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
          <p>
            Don't have an account?{" "}
            <span onClick={() => navigate("/signup")}>Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
}
