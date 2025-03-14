import React from 'react'
import Form from 'next/form'
import SearchFormReset from './SearchFormReset'
import { Search } from 'lucide-react'

// can we render it on server side and not client side?
// answer: yes! <form> tag automatically updates it.
const SearchForm = ({query} : {query?: string}) => {
    // const query = "Test"

    return (
        <Form action={"/"} scroll={false} className='search-form'>
            <input
                name="query"
                defaultValue={""}
                className='search-input'
                placeholder='Search Startups'
            />
            
            <div className='flex gap-2'>
                {query && <SearchFormReset />} 

                <button type='submit' className='search-btn text-white'>
                    <Search className='size-5'/>
                </button>
            </div>
            {/* <button/> */}
        </Form>
    )
}

export default SearchForm