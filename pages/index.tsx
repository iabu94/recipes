import { Inter } from "@next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Abdullah Recipes</title>
        <meta name="description" content="Sri Lankan Food Recipes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-2xl font-semibold text-center mt-4">
          Sri Lankan Food Recipes
        </h1>
      </main>
    </>
  );
}
