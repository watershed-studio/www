import Head from 'next/head'

import Link from 'next/link'
import Container from '../components/Container';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Grid from '../components/Grid';
import Card from '../components/Card';

import styles from '../styles/Home.module.scss'

import SITE from '../sitemap'

export default function Home() {
    return (
        <Container>
            <Head>
                <title>{SITE.Company.title} - {SITE.Company.slogan}</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="color-scheme" content="dark"/>
                <meta
                    name="description"
                    content={SITE.Company.description}/>
            </Head>

            <Main>
                <h1 className={styles.title}>
                    <a className="gradient"
                       href={`https://www.${SITE.Company.fqdn}`}>{SITE.Company.name}</a> {SITE.Company.tld}
                </h1>

                <p className={styles.description}>
                    {SITE.Company.slogan}.
                </p>

                <Grid className={"cards"}>

                    {
                        Object.keys(SITE.PRODUCTS).map((productName) => {
                            const product = SITE.PRODUCTS[productName];
                            return <Link href={product.page.href} key={product.name}>
                                <Card>
                                    <h2>{product.name} &rarr;</h2>
                                    <p>{product.description}.</p>
                                </Card>
                            </Link>
                        })
                    }

                </Grid>
            </Main>

            <Footer/>
        </Container>
    )
}
