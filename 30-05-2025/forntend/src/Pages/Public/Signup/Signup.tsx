import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { signupUser } from "../../../Store/features/Auth/authThunks";
import type { AppDispatch } from "../../../Store/store";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const resultAction = await dispatch(signupUser(form));

      if (signupUser.fulfilled.match(resultAction)) {
        alert("Signup success");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="main-login-container">
      <div className="login-container">
        <h2>Sign Up</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-Container">
            <label>Name:</label>
            <input
              placeholder="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-Container">
            <label>Email:</label>
            <input
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-Container">
            <label>Password:</label>
            <input
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Sign Up</button>
          <p>
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Login</span>
          </p>
        </form>
      </div>
    </div>
  );
}
