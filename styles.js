import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  ul {
  list-style: none;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }
  h2 {
    font-size: 2rem;
    line-height: 1.25;
    letter-spacing: -0.015;
  }
  h3 {
    font-size: 1.75rem;
    line-height: 1.3;
    letter-spacing: 0.01em;
  }
  p {
    font-size: 1rem;
    line-height: 1.6;
    letter-spacing: 0.01em;
  }



  body {
    padding:1em 3em 3em;
    color:#333;
    background:#eaeaea;
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  a {text-decoration:none;color:#d5561f;margin:.5em 0;display:inline-table;}
  a:hover {text-decoration:underline;}



@media (prefers-color-scheme: dark) {
  body {
    color:#eaeaea;
    background:#333;
  }
}



`;
