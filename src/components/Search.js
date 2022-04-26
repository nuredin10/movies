import {useState} from 'react'

function Search({searchKey,setSearchKey}) {
    const submitHandler = (e) =>{
        e.preventDefault();
        setSearchKey('')
        // console.log(searchKey)
    }
    const onChangeHandler = (e) =>{
        setSearchKey(e.target.value)
    }
  return (
    <div className='search'>
        <form onSubmit={submitHandler}>
            <input value={searchKey} placeholder="Enter Keyword" onChange={onChangeHandler}></input>
            <button>Search</button>
        </form>
    </div>
  )
}

export default Search