import { useState, useEffect } from 'react';

const useFetch = (data) => {
    const [result, setResult] = useState(null);

    useEffect(() => {
        (async function fetch() {
            const item = await data;
            setResult(item);
        })();
    }, [data]);

    return result;
};

export default useFetch;
