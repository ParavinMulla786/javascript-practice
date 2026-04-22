let allProjects = [];
let filteredProjects = [];



// Fetch API
async function fetchProjects() {
  try {
    const res = await fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects');
    const data = await res.json();

    allProjects = data;
    filteredProjects = data;

    displayData();
    setupPagination();
  } catch (err) {
    console.log(err);
  }
}

document.addEventListener('DOMContentLoaded', fetchProjects);



// ✅ Display Data with Pagination
function displayData() {
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;

  const paginatedItems = filteredProjects.slice(start, end);

  document.getElementById("projectRows").innerHTML = paginatedItems.map((p, i) => `
    <tr>
      <td>${start + i + 1}</td>
      <td>${p.ProjectName}</td>
      <td>${p.Department}</td>
      <td>${p.priority}</td>
      <td>${p.status}</td>
      <td>${p.startDate}</td>
      <td>${p.EndDate}</td>
    </tr>
  `).join("");
}


let currentPage = 1;
const rowsPerPage = 10;

// Pagination Numbers
function setupPagination() {
  const pagination = document.getElementById("pagination");

  // remove old numbers
  document.querySelectorAll(".page-number").forEach(e => e.remove());

  const pageCount = Math.ceil(filteredProjects.length / rowsPerPage);

  for (let i = 1; i <= pageCount; i++) {
    const li = document.createElement("li");
    li.classList.add("page-item", "page-number");

    if (i === currentPage) li.classList.add("active");

    li.innerHTML = `<a class="page-link" href="#">${i}</a>`;

    li.addEventListener("click", (e) => {
      e.preventDefault();
      currentPage = i;
      displayData();
      setupPagination();
    });

    pagination.insertBefore(li, document.getElementById("nextBtn").parentElement);
  }
}



// ✅ Previous / Next
document.getElementById("prevBtn").addEventListener("click", (e) => {
  e.preventDefault();
  if (currentPage > 1) {
    currentPage--;
    displayData();
    setupPagination();
  }
});

document.getElementById("nextBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const totalPages = Math.ceil(filteredProjects.length / rowsPerPage);

  if (currentPage < totalPages) {
    currentPage++;
    displayData();
    setupPagination();
  }
});



// ✅ Search (Real-time optional)
function searchdata() {
  applyFilters();
}



// ✅ Filter + Search Combined
function filterData() {
  applyFilters();
}


function applyFilters() {
  const search = document.getElementById("searchkey").value.toLowerCase();
  const status = document.getElementById("statusFilter").value.toLowerCase();
  const priority = document.getElementById("priorityFilter").value.toLowerCase();

  filteredProjects = allProjects.filter(p => {

    const matchSearch =
      p.ProjectName.toLowerCase().includes(search) ||
      p.Department.toLowerCase().includes(search);

    const matchStatus = status ? p.status.toLowerCase() === status : true;
    const matchPriority = priority ? p.priority.toLowerCase() === priority : true;

    return matchSearch && matchStatus && matchPriority;
  });

  currentPage = 1; // reset page
  displayData();
  setupPagination();
}