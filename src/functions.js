async function fetchListItems(offset = 0) {
    const owner = '0x960DE9907A2e2f5363646d48D7FB675Cd2892e91';
    const url = `https://api.opensea.io/api/v1/assets?format=json&owner=${owner}&offset=${offset}&limit=20`;
    const response = await fetch(url);
    return response.json();
};

async function fetchItemDetail(contractAddress = "", tokenId = "") {
    if (contractAddress.length === 0 || tokenId.length === 0) return;
    const url = `https://api.opensea.io/api/v1/asset/${contractAddress}/${tokenId}/`;
    const response = await fetch(url);
    return response.json();
};

export { fetchListItems, fetchItemDetail };