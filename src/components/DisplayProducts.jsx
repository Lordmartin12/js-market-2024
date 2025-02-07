import React from 'react'
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom'

const DisplayProducts = ({ productsToDisplay }) => {
    console.log(productsToDisplay);
    
    let noOfStars = (rating) => {
        let starRating = Math.round(rating);
        let stars = [];
        let noneStars = [];
        
        for (let i = 0; i < starRating; i++) {
            stars.push(0)
        }

        for (let i = 0; i < 5 - starRating; i++) {
            noneStars.push(1)
        }

        return (
            <div className='flex items-center gap-1'>
                { [...stars].map((star,i) => (
                    <FaStar className='text-yellow-300' />
                ))}
                { [...noneStars].map((star,i) => (
                    <FaStar className='text-slate-300' />
                ))}
            </div>
        );
    }


    return (
        <div className='grid grid-cols-4 gap-4'>
            {productsToDisplay.map((product, index) => (
                <div key={index}>
                    <Link href="product_details.php?product_id=${product.id}" className='relative p-4 overflow-hidden rounded-r-lg shadow-lg hover:shadow-2xl block'>
                        <div className="" >
                            {/* <aside className="absolute left-0 mx-0 bg-pink-200 w-44 rounded-r-xl top-2">
                                <h1 className="text-lg">
                                    <span className="ml-2 text-yellow-500"><i className="fa-solid fa-face-smile"></i></span><span className="font-extrabold text-pink-600">Konga</span><span className="font-extrabold text-stone-800">Now</span><span className="ml-1 text-pink-600"><i className="fa-solid fa-truck-fast"></i></span>
                                </h1>
                            </aside> */}
                            <aside className="flex items-center justify-center w-full h-40 overflow-hidden">
                                <img src={product.image} alt="" className="object-cover min-w-full min-h-full" />
                            </aside>
                            <aside className="py-2">
                                <h3 className="text-lg font-semibold">
                                    {product.category}
                                </h3>
                            </aside>
                            <aside>
                                <h1 className="pb-2 text-lg font-medium line-clamp-1">
                                    {product.name}
                                </h1>
                            </aside>
                            <aside className="flex gap-10 pb-2">
                                <aside>
                                    <h2 className="text-xl font-bold">
                                        &#8358;{product.price - (product.price * (product.discount / 100))}
                                    </h2>
                                </aside>
                                {(product.discount > 0) ? (<aside className="">
                                    <small className="text-sm font-medium line-through text-slate-600">
                                        &#8358;{product.price}
                                    </small>
                                </aside>) : ''}
                                {(product.discount > 0) ? (<aside>
                                    <h2 className="p-1 font-bold text-red-500 bg-red-200 rounded-xl">
                                        -{product.discount}%
                                    </h2>
                                </aside>) : ''}
                            </aside>
                            {(product.discount > 0) ? (<aside>
                                <h4 className="pb-2 font-medium text-green-900">
                                    You just saved &#8358; {(product.price * (product.discount / 100))}
                                </h4>
                            </aside>) : ''}
                            <aside className="py-2 text-xs">
                                {noOfStars(product.rating)}
                                ({product.no_reviews} Reviews)
                            </aside>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default DisplayProducts