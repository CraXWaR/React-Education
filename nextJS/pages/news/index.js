import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-great">NextJS Is Great</Link>
        </li>
        <li>Smth Else</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
