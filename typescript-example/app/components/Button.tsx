import React from "react";
import { LinksFunction } from "@remix-run/node";
import buttonStyles from "./button.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: buttonStyles }];
};

export default function Button({ children }: { children: React.ReactChild }) {
  return <button>{children}</button>;
}
