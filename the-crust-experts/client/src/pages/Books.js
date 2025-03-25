import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        const fetchAllBooks = async ()=> {
            try{
                const res = await axios.get("http://localhost:8800/books")
                setBooks(res.data);
                console.log(books)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllBooks()
        //dependency is [], which makes it run once
    },[])

    return (
        <div className="books">
            {books.map(book=>(
                <div className="book">
                    {book.cover && <img src={book.cover} alt="" />}
                    <h2>{book.title}</h2>
                    <p>{book.desc}</p>
                    <span>{book.price}</span>
                </div>
            ))}
        </div>
    )
}

export default Books