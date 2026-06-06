import { Redirect } from "expo-router";
import React from "react";

// Legacy route — the home tab IS the learn journey now. Redirect to /.
export default function LearnRedirect() {
  return <Redirect href="/" />;
}
