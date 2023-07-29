import { useState, useEffect } from "react";
import DataFetch from "../services/sampleDataFetching";

export interface data{
    id: number;
    title: string;
}

const Fetch = () => {
    const [data, setData] = useState<data[]>();
    useEffect((() => {
        DataFetch.get()?.then(res => {
            setData(res.data);
        }).catch(err => {
            console.log(err);  
        })
    }),[])
    return (
        <div>
            {data && data.map(item => {
                return <div key={item.id}>
                    <h2>{item.title}</h2>
                </div>
            })}
        </div>
        );
};

export default Fetch
