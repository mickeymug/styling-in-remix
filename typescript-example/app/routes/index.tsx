import { LinksFunction } from "@remix-run/node";
import illustration from "~/assets/illustration.png";
import appStyles from "~/styles/index.css";
import Button, { links as buttonLinks } from "~/components/Button";

export const links: LinksFunction = () => {
  return [...buttonLinks(), { rel: "stylesheet", href: appStyles }];
};

export default function Index() {
  return (
    <main className="app-wrapper">
      <div className="content-wrapper">
        <div className="content-left">
          <h1>How to style in Remix</h1>
          <p>Using just CSS</p>
          <Button>This is a button</Button>
        </div>
        <div className="content-right">
          <img src={illustration} alt="web styling illustration" />
        </div>
      </div>
    </main>
  );
}
