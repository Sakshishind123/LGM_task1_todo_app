document.addEventListener('DOMContentLoaded', () => {
    const fetchQuote = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Fetched quote data:', data); // Debugging line
            displayQuote(data);
        } catch (error) {
            console.error('Error fetching the quote:', error);
        }
    };

    const displayQuote = (data) => {
        const quotesContainer = document.getElementById('quotes-container');
        if (quotesContainer) {
            quotesContainer.innerHTML = `
                <h3>${data.content}</h3>
                <p>— ${data.author}</p>
            `;
        } else {
            console.error('Quotes container not found.');
        }
    };

    fetchQuote();
});
