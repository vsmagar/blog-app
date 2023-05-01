import React, { useContext } from "react";
import { BlogContext } from "../App";

export default function LoginOnly({ element }) {
  const { login } = useContext(BlogContext);
  return login ? element : "UnAuthorized Access";
}
