import ListPage from './containers/ListPage';
import DetailPage from './containers/DetailPage';
import './App.scss';

function App() {
  const addr = '0x495f947276749ce646f68ac8c248420045cb7b5e';
  const tokenId = '96448705941447295663957679096720734318386598746918235613232686456707248816129';
  return (
    <div className="App">
      <ListPage />
      {/* <DetailPage contractAddress={addr} tokenId={tokenId} /> */}
    </div>
  );
}

export default App;
