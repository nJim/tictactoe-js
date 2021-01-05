import { FunctionalComponent, h } from "preact";
import Border from "../3-organisms/Border";
import * as style from "../0-base/global.css";

const AboutPage: FunctionalComponent = () => (
  <Border>
    <div>
      This is a sandbox project for experimenting with Preact, a fast 3kB alternative to React with the same ES6 API. It&rsquo;s written in TypeScript and includes custom preact hooks, context, and state management.
      <br /><br />
      Part of this project is to compare ease of development, performance, and build size  between multiple frameworks. I&rsquo;ll publish the findings in a future blog post.
      <br /><br/>
      <a class={style.funderline} href="https://github.com/nJim/tictactoe-react">View this project on GitHub</a>.
    </div>
  </Border>
);

export default AboutPage;
