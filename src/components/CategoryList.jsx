import ProductCard from "./ProductCard.jsx";

function productBelongsToCategory(product, category) {
    if (!product.categories) {
        return false;
    }

    const productCategories = product.categories
        .split(",")
        .map((categoryName) => categoryName.trim().toLowerCase());

    return productCategories.includes(category.name.toLowerCase());
}

function CategoryList({ categories, products }) {
    return (
        <div className="category-sections-wrapper">
            {categories.map((category) => {
                const categoryProducts = products.filter((product) =>
                    productBelongsToCategory(product, category)
                );

                return (
                    <section className="category-products-section" key={category.id}>
                        <div className="category-products-heading">
                            <h2>{category.name}</h2>
                            <p>{category.description}</p>
                        </div>

                        {categoryProducts.length > 0 ? (
                            <div className="row g-4">
                                {categoryProducts.map((product) => (
                                    <div className="col-12 col-sm-6 col-lg-3" key={product.id}>
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="empty-category-message">
                                <p>
                                    Nessun prodotto trovato per questa categoria. La dinastia è
                                    ancora in fase di frittura.
                                </p>
                            </div>
                        )}
                    </section>
                );
            })}
        </div>
    );
}

export default CategoryList;