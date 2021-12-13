import ProductHero from "./ProductHero";
import Grid from "./Grid";
import DAppLinkCard from "./DAppLinkCard";
import Main from "./Main";

export default function ProductMain({page}) {
    const product = page.Product;
    return <Main>
        <ProductHero product={product}/>

        <Grid className={'cards'}>
            <DAppLinkCard product={product}/>
        </Grid>
    </Main>
}