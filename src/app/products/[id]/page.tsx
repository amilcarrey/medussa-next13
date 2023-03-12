
import { medusa } from "@lib/config";
import { ProductTemplate } from "@modules/product";

async function getProduct(product_id:string) {
 const res = await medusa.products.retrieve(product_id)
 return res.product
}

export default async function Page({params}:{params:{id:string}}) {
  const product = await getProduct(params.id)
  return (
    <ProductTemplate product={product} />
  )
}
