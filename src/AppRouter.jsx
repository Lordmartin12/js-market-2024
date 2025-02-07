import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GuestLayout from "./layouts/GuestLayout";
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import { useState } from 'react';
import { UserContext } from "./services/UserContext";


const AppRouter = () => {

  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user} >
      <BrowserRouter>
        <Routes>
          {/* The main/guest pages routes */}
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
          </Route>

          {/* The auth pages routes */}
          <Route element={<AuthLayout />} >
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
          </Route>


          {/* The admin pages routes */}
          <Route element={<AppLayout />} >
            <Route path="/admin/" element={<Dashboard />} />
            <Route path="/admin/products" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default AppRouter;
