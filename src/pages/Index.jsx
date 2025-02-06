import { useState } from "react";
import { useProducts } from "../hooks/productsHooks";
import DisplayProducts from "../components/DisplayProducts";
const Index = () => {
    const [number, setNumber] = useState(0);
    const [num, setNum] = useState(0);

    const { products, featured, isFetching } = useProducts();

    const increment = () => {
        setNumber(number + 1);
    }

    const decreement = () => {
        if (number > 0) {
            setNumber(number - 1);
        }
    }

    return (
        <div className="px-4 py-4 max-w-6xl mx-auto">

            <section className='mb-6'>
                <h1 className='text-3xl mb-5 font-bold'>Products</h1>
                {isFetching ? 'Loading...' : <DisplayProducts productsToDisplay={products} />}
            </section>


            <section className='mb-6'>
                <h1 className='text-3xl mb-5 font-bold'>Featured Products</h1>
                {isFetching ? 'Loading...' : <DisplayProducts productsToDisplay={featured} />}
            </section>

            {/* Testing useState with Increment and Decrement */}
            <section className="flex gap-4 items-center">
                <button onClick={() => decreement()} className="py-1 px-2 bg-slate-300 text-2xl rounded-md flex justify-center items-center">
                    -
                </button>

                <div>
                    {number}
                </div>

                <button onClick={() => increment()} className="py-1 px-2 bg-slate-300 text-2xl rounded-md flex justify-center items-center">
                    +
                </button>
            </section>

            <section className="mt-8">
                <span className="text-7xl"> {number} </span>
            </section>

            <section className="flex gap-4 items-center mt-4">
                <button onClick={() => setNum((current) => (current > 0) ? current - 1 : 0)} className="py-1 px-2 bg-slate-300 text-2xl rounded-md flex justify-center items-center">
                    -
                </button>

                <div>
                    {num}
                </div>

                <button onClick={() => setNum((current) => current + 1)} className="py-1 px-2 bg-slate-300 text-2xl rounded-md flex justify-center items-center">
                    +
                </button>
            </section>
        </div>
    )
}

export default Index;