import { useEffect, useState } from 'react';
import { Navbar, Nav, Image, Button } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
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
        data && <div className="d-flex flex-column mb-3 detail-page">
            <Navbar bg="dark" className="header">
                <Nav.Link href="/" className="nav-link">
                    <ArrowLeft />
                </Nav.Link>
                <Navbar.Brand className="text-white text-center mx-auto">
                    {data.collection.name}
                </Navbar.Brand>
            </Navbar>
            <content className="content">
                <Image src={data.image_url} className="w-100" />
                <h3 className="my-3 text-center mx-auto">{data.name}</h3>
                <p className="px-3 my-3 overflow-auto">{data.description}</p>
            </content>
            <footer className="footer mx-3 py-3">
                <Button variant="primary" className="w-100" href={data.permalink}>Permalink</Button>
            </footer>
        </div>
    );
}
