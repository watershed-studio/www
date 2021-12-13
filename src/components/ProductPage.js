import Container from '../components/Container';
import Footer from '../components/Footer';
import Back from '../components/Back';
import ProductHead from "../components/ProductHead.js";
import ProductMain from "../components/ProductMain";

import SITE from '../sitemap';

export default function Cit1x({id}) {
    const PAGE = SITE.forPage(id)
    return (
        <Container>

            <ProductHead page={PAGE}/>

            <Back page={PAGE}/>

            <ProductMain page={PAGE}/>

            <Footer/>

        </Container>
    )
}
