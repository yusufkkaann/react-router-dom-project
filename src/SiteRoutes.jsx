import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import { ProductsLayout, Product } from "./products";
import Products from "./products/Products";
import Category from "./products/category";
import Login from "./pages/Login";
import Fav from "./pages/Fav";
import PrivateRouter from "./PrivateRouter";

export default function SiteRoutes({ handleLogin, handleLogout, user }) {
  return (
    <Routes>
      <Route path="/" element={<Home user={user} />} />
      <Route path="/urunler" element={<ProductsLayout user={user} />}>
        <Route index={true} element={<Products user={user} />} />
        <Route
          path="category/:categoryName"
          element={<Category user={user} />}
        />
        <Route path="urun/:productId" element={<Product user={user} />} />
      </Route>

      <Route path="/hakkimizda" element={<About />} />
      <Route
        path="/giris-yap"
        element={
          <Login handleLogin={handleLogin} handleLogout={handleLogout} />
        }
      />
      <Route path="/iletisim" element={<Contact />} />
      <Route
        path="/favoriler"
        element={
          // PrivateRouter componenti ile kullanıcı girişi olmadan favoriler sayfasına erişimi engelliyoruz.
          <PrivateRouter user={user}>
            <Fav />
          </PrivateRouter>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
