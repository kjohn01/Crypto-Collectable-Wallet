import React, { useEffect, useState } from 'react';
import fetchListItems from '../functions';

export default function ListPage() {
  const [listItem, setListItem] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    fetchListItems(itemCount).then((data) => {
      const newItems = data.assets;
      setListItem([...listItem, ...newItems]);
      setItemCount(itemCount + newItems.length);
    });
    return () => {

    }
  }, [])

  return (
    <div>
    {listItem.toString()}
    </div>
  );
}
