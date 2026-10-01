console.log("Studenthub JavaScript is working!");
function searchStudenthub() {
    let searchText= document.querySelector("input").value;
    let results = document.getElementById("searchResults");
    if 
    (searchText.toLowerCase().includes("python")){
        results.innerHTML = ` 
        <div class="job-card">
            <h2>Python Developer</h2>
            <p>Tech Solutions</p>
            <p>Hyderabad</p>
            <button>View Details</button>
        </div>
        `;
    } else {
        results.innerHTML = "<p>No results found.</p>";
    }
}