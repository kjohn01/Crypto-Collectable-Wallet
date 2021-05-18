import { useEffect, useState, useMemo, useCallback } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { fromEvent } from 'rxjs';
import { map, filter, pairwise } from 'rxjs/operators';
import ItemCard from '../components/ItemCard';
import { fetchListItems } from '../functions';

export default function ListPage() {
  const [listItem, setListItem] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  const fetchData = useCallback(() => {
      if (!isLoading && !hasReachedEnd) {
        setIsLoading(true);
        fetchListItems(itemCount).then((data) => {
          const newItems = data.assets;
          if (newItems.length < 20) {
            // Reach the end of the list
            setHasReachedEnd(true);
          }
          setListItem([...listItem, ...newItems]);
          setItemCount(itemCount + newItems.length);
          setIsLoading(false);
        }).catch(err => {
          console.error("Error when fetching list items");
          console.error(err);
        });
      }
  }, [hasReachedEnd, isLoading, itemCount, listItem]); 

  useEffect(() => {
    // fetch on page load
    fetchData();
  }, []);

  useEffect(() => {
    const scrollEvent = fromEvent(window, 'scroll');
    const subscription = scrollEvent.pipe(
        map((e) => ({
          sT: (e.target.documentElement.scrollTop || e.target.body.scrollTop),
          sH: e.target.documentElement.scrollHeight,
          cH: e.target.documentElement.clientHeight
        })),
        pairwise(), // detecting if user is scrolling down
        filter(position => position[0].sT < position[1].sT && position[1].sT + position[1].cH === position[1].sH),
      ).subscribe(() => {
        if (!isLoading && !hasReachedEnd) {
          fetchData(itemCount);
        }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [fetchData, hasReachedEnd, isLoading, itemCount])

  const list = useMemo(() => listItem.map((item) => <Col key={item.id} sm={6} className="my-3">
  <ItemCard imageUrl={item.image_url} name={item.name} contractAddress={item.asset_contract.address} tokenId={item.token_id} />
</Col>) ,[listItem]);

  return (
    <Container>
      <h1 className="mx-auto text-center my-3">List</h1>
      <Row>
        {list}
      </Row>
    </Container>
  );
}
