import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Assuming you have a Home component
import SignIn from './pages/SignIn'; // Assuming you have a SignIn component
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Sign-in" element={<SignIn />} />
        <Route path="/Sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}