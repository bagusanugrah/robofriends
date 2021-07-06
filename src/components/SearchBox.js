import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots' 
                onChange={searchChange}// jika terjadi perubahan pada inputan maka fungsi searchChange dipanggil
            />
        </div>
    );
}

export default SearchBox;