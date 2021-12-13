import CSS from "../styles/Product.module.scss";
import Typed from "react-typed";

export default function ProductHero({product}) {
    return <>
        <h1 className={CSS.title}>
            <Typed strings={product.page.hero.strings} typeSpeed={100}/>
            <span className="gradient">{product.page.hero.suffix}</span>
        </h1>

        <div className={CSS.values_wrap}>
            <p className={CSS.values}>
                <span>{product.slogan}</span>
            </p>
        </div>
    </>
}
