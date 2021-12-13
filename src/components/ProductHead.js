import Head from "next/head";

export default function ProductHead({page}) {
    return <Head>
        <title>{page.Company.name} - {page.Product.name}</title>

        <link rel="icon" href="/favicon.ico"/>

        <meta name="color-scheme" content="dark"/>

        <meta
            name="description"
            content={page.Product.description}/>

    </Head>
}
