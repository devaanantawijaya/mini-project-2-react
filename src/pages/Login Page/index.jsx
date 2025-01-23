import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleInput = (e) => {
    setError("");
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    
    setLoading(true);

    try {
      const res = await axios.post("https://reqres.in/api/login", form);
      console.log(res);

      localStorage.setItem("access_token", res.data.token);
      setSuccess("Login successful");

      setTimeout(() => {
        navigate("/member");
      }, 1500);
    } catch (error) {
      console.log(error.response);
      setError(
        error.response ? error.response.data.error : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <Navbar />
      <div className="flex flex-col items-center justify-center p-8 pt-28 md:p-32 md:h-screen">
        <div className="grid items-center md:gap-10 md:grid-cols-2">
          <div className="text-center md:text-right">
            <h1 className="pb-2 text-4xl font-bold leading-tight text-blue-500 md:text-6xl md:pb-7">
              Build Connections, Expand Your Professional Network
            </h1>
            <p className="text-xl font-medium text-gray-500 md:text-2xl">
              Find partners across various fields, connect ideas with execution,
              collaborate easily, anytime.
            </p>
          </div>
          <div className="md:px-10">
            <div className="px-8 py-5 my-5 shadow-xl md:py-10 md:px-16 rounded-xl bg-slate-200">
              <h1 className="flex justify-center pb-3 text-2xl font-bold text-blue-500">
                LOGIN
              </h1>
              {error && (
                <p className="flex justify-center font-semibold text-red-600">
                  {error}
                </p>
              )}
              {success && (
                <p className="flex justify-center font-semibold text-green-600">
                  {success}
                </p>
              )}
              <div className="pb-5">
                <h3 className="pb-2 text-xl font-medium">Email</h3>
                <input
                  type="text"
                  name="email"
                  placeholder="myname@email.com"
                  className="w-full px-3 py-2 border-2 border-gray-400 rounded-lg"
                  onChange={handleInput}
                />
              </div>
              <div className="pb-5">
                <h3 className="pb-2 text-xl font-medium">Password</h3>
                <input
                  type="text"
                  name="password"
                  placeholder="***************"
                  className="w-full px-3 py-2 border-2 border-gray-400 rounded-lg"
                  onChange={handleInput}
                />
              </div>
              <div className="py-2">
                <Button
                  title={loading ? "loading..." : "login"}
                  bg="bg-blue-500"
                  hiddenL="hidden"
                  w="full"
                  onClick={handleLogin}
                />
              </div>
              <div className="justify-center gap-1 text-center md:flex">
                <p className="">{`Don't have an account yet?`}</p>
                <Link to={"/register"}>
                  <div className="font-medium text-blue-500">Register now!</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
