import React from 'react'
import { Card } from './../components/Card'
import { useEffect, useState } from 'react'

export const Articles = ({ searchText }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [originalData, setOriginalData] = useState([]);
    useEffect(() => {
        getData();
    }, []);
    useEffect(() => {
        if (!searchText.trim()) {
            setData(originalData);
            return;
        }
        const filtered = originalData.filter(item =>
            item.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setData(filtered);

    }, [searchText, originalData]);

    const getData = async () => {
        let search = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await search.json();
        if (data) {
            setOriginalData(data);
            setData(data);
        }
        setLoading(false)
    }
    return (
        <>
            {
                loading ? (<div>Cargando....</div>) :
                data.length>0? (
                    <div className='grid grid-cols-1 flex justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4'>
                        {
                            data.map((res) => (
                                <Card key={res.id} title={res.title} description={res.body}></Card>
                            ))
                        }
                    </div>
                ):(
                    <div className='flex justify-center font-bold p-4 m-7 bg-white article'>No hay publicaciones</div>
                )
            }

        </>
    )
}
