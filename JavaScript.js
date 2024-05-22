document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var query = document.getElementById("search-input").value;
    search(query);
});

function search(query) {
    // Send AJAX request to backend with the search query
    // Update the UI with search results
}
