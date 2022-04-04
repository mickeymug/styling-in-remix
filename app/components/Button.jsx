import buttonStyles from "./button.css";

export function links() {
  return [{ rel: "stylesheet", href: buttonStyles }];
}

export default function Button({ children }) {
  return <button>{children}</button>;
}

/* ----------------------------
Typescript example:

import { LinksFunction } from "@remix-run/node";
import buttonStyles from "./button.css"

export function links(): LinksFunction {
  return [{ rel: "stylesheet", href: buttonStyles }];
}
---------------------------- */
