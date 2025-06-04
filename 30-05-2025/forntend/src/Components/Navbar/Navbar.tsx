import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Store/features/Auth/auth.Slice";
import type { UserData } from "../../TypeScript/constrain";
export default function Navbar() {
  const { token, user } = useSelector(
    (state: { auth: { token: string; user: UserData } }) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="NavbarContainer">
      <h2 className="navbar-Heading" onClick={() => navigate("/")}>
        Dashboard
      </h2>
      <h2 className="navbar-Heading" onClick={() => navigate("/products")}>
        Products
      </h2>
      <h2 className="navbar-Heading" onClick={() => navigate("/cart")}>
        Cart
      </h2>
      {token ? (
        <div style={{ display: "flex", gap: "1.7rem", alignItems: "center" }}>
          <h2 className="navbar-Heading" onClick={() => navigate("/orders")}>
            Order
          </h2>
          <h2 className="navbar-Heading" onClick={() => navigate("/")}>
            Welcome,{user.name}
          </h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
      )}
    </div>
  );
}
