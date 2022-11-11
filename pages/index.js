import Head from "next/head";
import Home from "./Home";
// import LearnMore from "./learnmore";

export default function Index() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700"
        />
        <link
          rel="stylesheet"
          href="https://raw.github.com/FortAwesome/Font-Awesome/master/docs/assets/css/font-awesome.min.css"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Home />
      {/* <LearnMore /> */}
    </>
  );
}
