import { medusa } from "@lib/config";
import Auth from "./elements/auth";
import CategoriesNav from "./elements/categories-nav";
import Mobile from "./mobile";

async function getCategories() {
  const res = await medusa.productCategories.list();

  return res.product_categories;
}

export default async function Header() {
  const categories = await getCategories();
  console.log(categories);
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between lg:justify-start p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:mr-16">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src="logo.svg" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <Mobile />
        </div>
        <CategoriesNav categories={categories} />
        <Auth />
      </nav>
    </header>
  );
}
