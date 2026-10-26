// 1. Array of Employee Objects (Data Layer)
const employees = [
    { name: "Alice Johnson", department: "Engineering", salary: 85000 },
    { name: "Bob Smith", department: "HR", salary: 60000 },
    { name: "Charlie Brown", department: "Marketing", salary: 65000 },
    { name: "Diana Prince", department: "Engineering", salary: 95000 },
    { name: "Evan Wright", department: "Finance", salary: 75000 },
    { name: "Fiona Gallagher", department: "HR", salary: 58000 }
];

// 2. DOM Elements
const directoryGrid = document.getElementById('directoryGrid');
const searchInput = document.getElementById('searchInput');
const deptFilter = document.getElementById('deptFilter');

// 3. Render Function (DOM Rendering)
function renderDirectory(filteredEmployees) {
    // Clear previous items
    directoryGrid.innerHTML = '';

    // Check if any employees match the criteria
    if (filteredEmployees.length === 0) {
        directoryGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999;">No employees found.</p>';
        return;
    }

    // Build and insert HTML cards dynamicallly
    filteredEmployees.forEach(employee => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <h3>${employee.name}</h3>
            <p><strong>Department:</strong> ${employee.department}</p>
            <p class="salary"><strong>Salary:</strong> $${employee.salary.toLocaleString()}</p>
        `;
        
        directoryGrid.appendChild(card);
    });
}

// 4. Filter and Search Logic
function filterEmployees() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedDept = deptFilter.value;

    const filtered = employees.filter(employee => {
        const matchesSearch = employee.name.toLowerCase().includes(searchTerm);
        const matchesDept = selectedDept === 'all' || employee.department === selectedDept;
        
        return matchesSearch && matchesDept;
    });

    renderDirectory(filtered);
}

// 5. Event Listeners
searchInput.addEventListener('input', filterEmployees);
deptFilter.addEventListener('change', filterEmployees);

// Initial render call when page loads
renderDirectory(employees);