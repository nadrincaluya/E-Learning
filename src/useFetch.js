import { useState,useEffect } from "react";
const useFetch =(url)=>{
    const[data,setData] = useState(null);
    const[isPending,setIsPending] =useState(true);
    const [error,setError] = useState(null);

    const handleDelete = (id) =>{
    const newItems =data.filter(data => data.id !== id);
    setData(newItems);
  
}
    useEffect(()=>{

        const abortCont = new AbortController();
        fetch(url,{signal:abortCont.signal})
        .then(res =>{
         if(!res.ok){
           throw Error('Cloud not fetch data');
         }
         return res.json()
        })
        .then(data=>{
         
         setData(data);
         setIsPending(false);
         setError(null);
        })
        .catch(err=>{
            if(err.name === 'AbortError'){
                console.log('fetch aborted')
            }
            else{
         setIsPending(false);
         setError(err.message);
            }
        })
        return ()=> abortCont.abort();
       },[url]);
       return { data, isPending, error };
}
export default useFetch;