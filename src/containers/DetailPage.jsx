import { useEffect, useState } from 'react';
import { fetchItemDetail } from '../functions';

export default function DetailPage({contractAddress, tokenId}) {
    const [data, setData] = useState(null);
    // Fetch the item detail on page load
    useEffect(() => {
        fetchItemDetail(contractAddress, tokenId).then((data) => {
            setData(data);
          }).catch(err => {
              console.error("Error on fetching item detail");
              console.error(err);
          })
        return () => {
            setData(null);
        }
    }, [contractAddress, tokenId]);

    return (
        <div>
            { data ? data.toString() : '' }
        </div>
    );
}
