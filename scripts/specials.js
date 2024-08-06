document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.getElementById('searchBar');
    const productCards = document.getElementById('productCards');

    searchBar.addEventListener('input', function(event) {
        const query = event.target.value.toLowerCase();
        const cards = productCards.querySelectorAll('.card-align');

        cards.forEach(card => {
            const productName = card.querySelector('.product-name').textContent.toLowerCase();
            const productDescription = card.querySelector('.text-align').textContent.toLowerCase();

            if (productName.includes(query) || productDescription.includes(query)) {
                card.style.display = 'block'; // Show card
            } else {
                card.style.display = 'none'; // Hide card
            }
        });
    });
});
