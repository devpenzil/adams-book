import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signingup } from "../../../Redux/slices/signupSlice";
import { useHistory } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import google from "../../../assets/google.png";
import facebook from "../../../assets/facebook.png";
import Heading from "../../../components/Heading";
import PrimaryInput from "../../../components/PrimaryInput";
import PrimaryButton from "../../../components/PrimaryButton";
import SocialButtons from "../../../components/SocialButtons";
import Pageswitch from "../../../components/Pageswitch";
function SignupForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const triggersignup = (username, email, password) => {
      if (email === "") {
        toast("Email is Mandatory");
        return 0
      }
      if (username === "") {
        toast("usename is Mandatory");
        return 0
      }
      if (password === "") {
        toast("password is Mandatory");
        return 0
      }
    dispatch(
      signingup({ username: username, email: email, password: password })
    );
  };
  return (
    <>
      <div className="w-full bg-green-appgreen h-screen flex justify-center items-center">
        <div>
          <Heading label={"Create your Book"} />
          <div>
            <PrimaryInput
              label={"Email"}
              triggerchange={(e) => setEmail(e.target.value)}
              type={"email"}
            />
            <PrimaryInput
              label={"UserName"}
              triggerchange={(e) => setUsername(e.target.value)}
              type={"text"}
            />
            <PrimaryInput
              label={"Password"}
              triggerchange={(e) => setPassword(e.target.value)}
              type={"password"}
            />

            <PrimaryButton
              label={"Sign up"}
              triggerclick={() => triggersignup(username, email, password)}
            />
          </div>
          <div className="mt-8">
            <div className="text-center text-xl">or sign up with</div>
            <div className="flex justify-center">
              <SocialButtons path={google} />
              <SocialButtons path={facebook} />
            </div>
          </div>
          <div className="text-center mt-8">
            <Pageswitch
              label={"Already have an acoount?"}
              triggerclick={() => history.push("/")}
              question={"Sign in"}
            />
          </div>
        </div>
      </div>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #0B8E8A",
            padding: "10px",
            color: "#0B8E8A",
          },
        }}
      />
    </>
  );
}

export default SignupForm;
