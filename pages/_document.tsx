import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Memes, fun, talk, chat and much more."
        />
        <meta name="keywords" content="Memes, fun, talk, chat" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
