import { useEffect, useState, useCallback } from 'react';
import { Observable, fromEvent } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import fetchListItems from '../functions';

export default function ListPage() {
  const [listItem, setListItem] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  const fetchData = useCallback(
    () => {
      console.log("fetchData");
      fetchListItems(itemCount).then((data) => {
        const newItems = data.assets;
        setListItem([...listItem, ...newItems]);
        setItemCount(itemCount + newItems.length);
      });
    },
    [itemCount, listItem],
  )

  useEffect(() => {
    // fetch on page load
    fetchData();
    // Bind the fetchData method to the window scrolling event
    let scrollEvent = fromEvent(window, 'scroll');
    scrollEvent.pipe(
      map((e) => ({
        scrollHeight: e.target.scrollHeight,
        scrollTop: e.target.scrollTop,
        clientHeight: e.target.clientHeight
      })),
      filter(position => position.scrollTop + position.clientHeight >= position.scrollHeight)
    ).subscribe(() => fetchData());
    return () => {

    }
  }, [fetchData]);

  return (
    <div>
    {listItem.toString()}
    </div>
  );
}
