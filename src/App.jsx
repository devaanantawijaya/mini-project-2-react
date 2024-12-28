import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./pages/Detail Page";
import LoginPage from "./pages/Login Page";
import RegisterPage from "./pages/Register Page";
import ProtectedRoute from "./routes/ProtectedRoute";
import Member from "./pages/Member";
import HomePage from "./pages/Home Page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/member" element={<Member />} />
        <Route
          path="/detail-profile/:id"
          element={
            <ProtectedRoute>
              <DetailPage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
