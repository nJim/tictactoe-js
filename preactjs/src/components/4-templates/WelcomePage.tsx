import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import Grid from "../3-organisms/Board";

const WelcomePage: FunctionalComponent = () => {
  const values = ["T", "I", "C", "T", "A", "C", "T", "O", "E"];
  const handleClick = () => { return null; };
  return (
    <Link href="/play">
      <Grid handleClick={handleClick} values={values} />
    </Link>
  );
};

export default WelcomePage;
