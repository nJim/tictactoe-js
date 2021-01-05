import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";

const Logo: FunctionalComponent = () =>
  <Link href="/">
    <svg clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" version="1.1" viewBox="18 5.22 64 89.55">
      <path fill="#2c3e50" d="m26 72c-6 0-8-3-8-7 0-6 6-6 10-6l4-18c-5 0-14 1-14-6 0-9 11-7 16-7 2-5 3-14 5-19 2-6 12-4 12 2 0 4-2 13-3 17h13c1-6 2-12 4-18 1-7 12-6 12 1 0 5-2 13-3 17 5 1 8 3 8 7 0 7-6 6-11 6l-3 18c5 0 14-2 14 6 0 9-11 7-17 7-1 6-2 12-4 18-2 7-12 6-12-1 0-5 2-13 3-17h-13c-1 5-3 16-5 20s-11 4-11-3c0-5 2-13 3-17zm32-31h-13l-3 18h13l3-18z"></path>
    </svg>
  </Link>;

export default Logo;
