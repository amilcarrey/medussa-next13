import { medusa } from "@lib/config";
import ProductPreview from "@modules/product/elements/preview";



export async function getProducts(regionId: string) {
  const { products } = await medusa.products.list({
    region_id: regionId,
    limit: 3,
  });
  return products;
}
export async function getRegions() {
  const { regions } = await medusa.regions.list();
  return regions;
}
export default async function Home() {
  const regions = await getRegions();
  const products = await getProducts(regions[0].id);

  return (
    <main>
      <h1>Region (hand picked) : {regions[0].id}</h1>
      <h1>Products</h1>
      <div className="flex overflow-x-auto">
      {products.map(({id,title,thumbnail}) => (
        <div>
          <ProductPreview id={id} title={title} thumbnail={thumbnail} />
        </div>
      ))}
      </div>
    </main>
  );
}
