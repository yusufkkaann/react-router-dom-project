import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SiteRoutes from "./SiteRoutes";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const handleLogin = () => {
    const user = { id: 1, name: "zuzu" };
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")) ?? null);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      <Navbar user={user} handleLogout={handleLogout} />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <SiteRoutes handleLogin={handleLogin} user={user} />
            {/* <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/urunler" element={<ProductsLayout />} />

              <Route path="/hakkimizda" element={<About />} />
              <Route path="/iletisim" element={<Contact />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
