import React from "react";
import Home from "../components/home";
import Table from "../components/table";
import NewForm from "../components/new-entry-form";
// import Email from "../components/email-form";
// import AboutMe from "../components/about-me";
import AboutTheApp from '../components/about-the-app';

const routes = {
  "/": () => <Home />,
  "/table": () => <Table />,
  "/new-form": () => <NewForm />,
  // "/about-me": () => <AboutMe />,
  "/about-the-app": () => <AboutTheApp />,
  // "/email": () => <Email />
};
export default routes;