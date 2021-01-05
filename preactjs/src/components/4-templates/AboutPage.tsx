import { FunctionalComponent, h } from "preact";
import Border from "../3-organisms/Border";

const AboutPage: FunctionalComponent = () => (
  <Border>
    <div>
      This is a sandbox project for experimenting with React. It&lsquo;s written in TypeScript and includes custom react hooks, context, and state management.
      <br /><br />
      Part of this project is to compare ease of development, performance, and build size  between multiple frameworks. I&lsquo;ll publish the findings in a future blog post.
      <br /><br/>
      <a className="funderline" href="https://github.com/nJim/tictactoe-react">View this project on GitHub</a>.
    </div>
  </Border>
);

export default AboutPage;
