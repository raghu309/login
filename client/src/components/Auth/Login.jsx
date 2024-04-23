import React, { useState } from "react";
import Input from "./Input";
import Enter from "./Enter";
import { useNavigate } from "react-router-dom";
import Warn from "./Warn";
import { Link } from "react-router-dom";

function Signup() {
  const [warn, setWarn] = useState(false);
  const [warnText, setWarnText] = useState("");
  const nav = useNavigate();

  async function login(e) {
    /* */
    e.preventDefault();
    console.log(email, password);
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    if (data.status === "success") {
      nav("/home");
    } else {
      setWarnText(data.status);
      setWarn((prev) => !prev);
      console.log(warnText);
      setTimeout(() => setWarn((prev) => !prev), 5000);
      console.log(warn);
    }
  }

  let name = "";
  let email = "";
  let password = "";

  function handleEmailChange(text) {
    email = text;
  }

  function handlePassChange(text) {
    password = text;
  }

  function handleNameChange(text) {

  }

  return (
    <div className="w-screen h-screen">
      <div className="bg-[#1D3557] rounded-2xl p-10 sm:w-2/3 md:w-1/2 w-3/4 m-auto mt-16">
        <form action="post" onSubmit={login}>
          <h1 className="text-[#F1FAEE] text-3xl text-center">Signup</h1>
          <Input
            label="Email"
            type="email"
            placeholder="example@.com"
            textColor="#F1FAEE"
            onTextChange={handleEmailChange}
          />
          <Input
            label="Password"
            type="password"
            placeholder="password"
            onTextChange={handlePassChange}
          />
          <div className="flex">
            <Enter className="mr-4" text="Signup" />
            {warn && <Warn text={warnText} />}
          </div>
        </form>
        <div className="text-xs underline text-[#F1FAEE] mt-4">
          <Link className="mr-4" to="/signup">Signup</Link>
          <Link to="/forgot">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
