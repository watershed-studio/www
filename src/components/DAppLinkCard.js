import Link from "next/link";
import Card from "./Card";

export default function DAppLinkCard({product}) {
    return <Link href={product.fqdn}>
        <Card className={"card"}>
            <h2>{product.page.action} &rarr;</h2>
            <p>Click to visit dApp.</p>
        </Card>
    </Link>
}
