import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loggingin } from "../../../Redux/slices/loginSlice";
import google from "../../../assets/google.png";
import facebook from "../../../assets/facebook.png";
import PrimaryInput from "../../../components/PrimaryInput";
import PrimaryButton from "../../../components/PrimaryButton";
import SocialButtons from "../../../components/SocialButtons";
import Heading from "../../../components/Heading";
import Pageswitch from "../../../components/Pageswitch";
import 'react-toastify/dist/ReactToastify.css'
function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("login");

  const triggerlogin = (email, password) => {
    dispatch(loggingin({ email: email, password: password }));
    setMessage("loading")
    // * check login status after 3 seconds
    setTimeout(() => {
      jumbtodashboard() 
    }, 3000); 
  }
 
    //* Redirect  to dashboard when user logged in
  const jumbtodashboard = () => {
    if (localStorage.getItem("displayName") != null) {
      history.push("/dashboard");
    }
    setMessage("login")
  }

  useEffect(() => {
    jumbtodashboard();
  }, [])

  return (
    <>
      <div className="w-full bg-green-appgreen h-screen flex justify-center items-center">
        <div>
          <Heading label={"Open Your Book"} />
          <div>
            <PrimaryInput
              label={"Email"}
              triggerchange={(e) => setEmail(e.target.value)}
              type={"email"}
            />
            <PrimaryInput
              label={"Password"}
              triggerchange={(e) => setPassword(e.target.value)}
              type={"password"}
            />
            <PrimaryButton
              triggerclick={() => triggerlogin(email, password)}
              label={message}
            />
     
          </div>
     
          <div className="mt-8">
            <div className="text-center text-xl">or sign in with</div>
            <div className="flex justify-center">
              <SocialButtons path={google} />
              <SocialButtons path={facebook} />
            </div>
          </div>
          <Pageswitch
            label={"don't have an account ?"}
            triggerclick={() => history.push("/signup")}
            question={"create one"}
          />
        </div>
      </div>
    </>
  );
}

export default LoginForm;
