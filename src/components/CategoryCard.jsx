import { Link } from "react-router-dom";

function CategoryCard({ category }) {
    return (
        <Link
            to={`/categories/${category.id}`}
            className="text-decoration-none text-reset"
        >
            <article className="card h-100 rounded-4 border-0 shadow-sm category-card-cartoon">
                <div className="card-body p-4 d-flex flex-column">
                    <div className="category-card-icon mb-4">
                        🥔
                    </div>

                    <h3 className="card-title fw-bold">
                        {category.name}
                    </h3>

                    <p className="card-text flex-grow-1">
                        {category.description}
                    </p>

                    <span className="btn btn-category-card align-self-start">
                        Esplora
                    </span>
                </div>
            </article>
        </Link>
    );
}

export default CategoryCard;