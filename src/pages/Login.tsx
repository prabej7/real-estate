import NavBar from "../components/NavBar";
import Section from "../components/Section";
import "../App.css";
import { ChangeEvent, FormEvent, useState } from "react";
import axios, { AxiosResponse } from "axios";
import url from "../url.ts";
import useAuth from "../hooks/auth/useAuth.tsx";
import { useCookies } from "react-cookie";
interface FormData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [cookie, setCookie] = useCookies(["user"]);
  const auth = useAuth();

  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response: AxiosResponse = await axios.post(`${url}/login`, formData);
    if (response.status == 200) {
      auth.navigate_to(response.data);
      setCookie("user", response.data);
    }
  }

  return (
    <>
      <Section>
        <NavBar className="bg-violet w-screen px-12" />
        <div className="flex justify-center items-center height-85 flex-col">
          <form className="form w-96" onSubmit={handleSubmit}>
            <h1 className="font-bold text-2xl text-violet text-center">
              Login
            </h1>
            <input
              className="input"
              placeholder="Email or Username"
              name="username"
              onChange={handleChange}
            />
            <input
              className="input"
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleChange}
            />
            <button className="btn-pri rounded" type="submit">
              Login
            </button>
          </form>
        </div>
      </Section>
    </>
  );
};

export default Login;
