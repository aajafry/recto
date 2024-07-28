import { Link } from "react-router-dom";
import Heading from "./Heading";

function Logo() {
  return (
    <Link to="/">
      <Heading
        label="Recto"
        style="text-2xl uppercase text-highlighter-theme"
      />
    </Link>
  );
}

export default Logo;
