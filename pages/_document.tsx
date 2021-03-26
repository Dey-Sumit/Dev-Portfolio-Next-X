import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        {/* <Html lang='en' class='dark'> */}
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="MERN stack developer looking for a job"
          />
          <meta
            name="keywords"
            content="Full Stack Web Developer, Freelancer ,MERN developer"
          />
        </Head>
        <body className="bg-fixed bg-gradient-to-r from-green to-blue-500 dark:from-black-300 dark:to-black-700 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
