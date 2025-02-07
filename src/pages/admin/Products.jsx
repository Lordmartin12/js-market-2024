import React from 'react'
import { greetPeople } from '../../hooks/useDummyHook'
import usePersons from '../../hooks/useHookSample';
import { useProducts } from '../../hooks/productsHooks';
import DisplayProducts from '../../components/DisplayProducts';

const Products = () => {
    // Sample Hook Usage
    // const greetings = greetPeople();
    // const { person1, person2, person3 : ogaKpataKpata } = usePersons();
    // console.log(ogaKpataKpata);

    const { products, featured, error, isFetching } = useProducts();




    return (
        <div className='px-4 py-4'>
            <section className='mb-6'>
                <h1 className='text-3xl mb-5 font-bold'>Products</h1>
                {isFetching ? 'Loading...' : <DisplayProducts productsToDisplay={products} />}
            </section>

            
            <section className='mb-6'>
                <h1 className='text-3xl mb-5 font-bold'>Featured Products</h1>
                {isFetching ? 'Loading...' : <DisplayProducts productsToDisplay={featured} />}
            </section>
        </div>
    )
}

export default Products