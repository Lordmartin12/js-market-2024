import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header className="bg-primary text-white">
            {/* <!-- Top Most Section of the header --> */}
            <section className="max-w-5xl mx-auto px-4 py-2 flex justify-end md:justify-between items-center">
                <aside className="md:flex items-center divide-x font-semibold hidden">
                    <a href="#" className="text-xs pr-4 py-1">
                        <i className="fas fa-map-pin"></i> 128 Umuerim Nekede, Nigeria.
                    </a>
                    <a href="#" className="text-xs px-4 py-1">
                        <i className="fas fa-phone"></i> +2349019606166
                    </a>
                </aside>
                <aside className="flex items-center divide-x font-semibold">
                    <div className="text-xs px-4 py-1">
                        USD <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className="text-xs px-4 py-1">
                        <i className="fas fa-flag"></i> English <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className="text-xs pl-4 py-1 flex items-center gap-3">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </aside>
            </section>

            {/* <!-- Brand, Search and CTA Section of the header --> */}
            <section className="max-w-5xl mx-auto px-4 py-2 flex justify-between items-center">
                <aside>
                    <Link to="/" className="text-2xl font-bold">
                        e-market
                    </Link>
                </aside>
                <aside>Search</aside>
                <aside>
                    <button className="sm:hidden">
                        <i className="fas fa-bars fa-2x"></i>
                    </button>
                </aside>
            </section>

            {/* <!-- Nav|Menu Section of the header --> */}
            <section className="max-w-5xl mx-auto px-4 py-2 sm:flex justify-between items-start flex-col sm:flex-row hidden">
                {/* <!-- Main Menu --> */}
                <aside>
                    <ul className="flex items-center gap-4">
                        <li>
                            <a href="products.php">Products</a>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact-us">Contact</Link>
                        </li>
                    </ul>
                </aside>

                {/* Other Menu */}
                <aside>
                    <ul className="flex items-center gap-4" >
                        <li>
                            <a href="#">Limited Sales</a>
                        </li>
                        <li>
                            <a href="#">Best Sellers</a>
                        </li>
                        <li>
                            <Link to="/login">
                                Login
                            </Link>
                        </li>
                    </ul>
                </aside>
            </section>
        </header>
    )
}

export default Header