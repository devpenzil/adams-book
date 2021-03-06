import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import google from "../../../assets/google.png";
import facebook from "../../../assets/facebook.png";
import Heading from "../../../components/Heading";
import PrimaryInput from "../../../components/PrimaryInput";
import PrimaryButton from "../../../components/PrimaryButton";
import SocialButtons from "../../../components/SocialButtons";
import Pageswitch from "../../../components/Pageswitch";
import { auth } from "../../../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
function SignupForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const triggersignup = (username, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        updateProfile(auth.currentUser, {
          displayName: username,
        });
        toast.success("Account created successfully");
        console.log(auth.currentUser);
        history.push("/");
      })
      .catch((Error) => {
        toast.error(Error.message);
      });
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
    </>
  );
}

export default SignupForm;
