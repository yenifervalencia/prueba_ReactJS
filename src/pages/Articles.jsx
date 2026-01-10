import React from 'react'
import { Card } from './../components/Card'
import { useEffect, useState } from 'react'
import { Spinner } from '../components/Spinner';

export const Articles = ({ searchText }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData(searchText);
    }, [searchText]);

    const getData = async (searchText) => {
        const url = searchText?.trim()
            ? `https://jsonplaceholder.typicode.com/posts?title_like=${searchText}`
            : `https://jsonplaceholder.typicode.com/posts`;
        let search = await fetch(url);
        let data = await search.json();
        if (data) {
            setData(data);
        }
        setLoading(false)
    }
    return (
        <>
            {
                loading ? (
                    <Spinner></Spinner>
                ) :
                    data.length > 0 ? (
                        <div className='grid grid-cols-1 flex justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                            {
                                data.map((res) => (
                                    <Card key={res.id} title={res.title} description={res.body}></Card>
                                ))
                            }
                        </div>
                    ) : (
                        <div className='flex justify-center font-bold p-4 m-7 bg-white article'>No hay publicaciones</div>
                    )
            }

        </>
    )
}
