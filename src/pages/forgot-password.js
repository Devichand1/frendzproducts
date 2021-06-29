import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import ForgotPassword from "../containers/forgotPassword";

const ForgotPwdPage = () => {
  const router = useRouter();


  return <ForgotPassword  />;
};
export default ForgotPwdPage;
