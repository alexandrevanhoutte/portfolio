import Head from "next/head";

type SeoProps = {
  pageTitle: string;
  pageDescription: string;
};

export default function Seo({ pageTitle, pageDescription }: SeoProps) {
  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content={pageDescription} />
    </Head>
  );
}
