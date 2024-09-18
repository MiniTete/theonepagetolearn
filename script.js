// Fetch live Bitcoin price
async function fetchBitcoinPrice() {
    const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const price = data.bitcoin.usd;

        // Update the HTML with the live price
        document.getElementById('bitcoin-price').textContent = `$${price}`;
    } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
    }
}

// Fetch the price when the page loads
fetchBitcoinPrice();

// Optionally, refresh the price every minute
setInterval(fetchBitcoinPrice, 60000); // Fetches price every 60 seconds