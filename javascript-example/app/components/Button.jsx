import buttonStyles from "./button.css";

export function links() {
  return [{ rel: "stylesheet", href: buttonStyles }];
}

export default function Button({ children }) {
  return <button>{children}</button>;
}
