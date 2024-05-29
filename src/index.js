document.addEventListener("DOMContentLoaded", function() {
  const students = [
      { name: "Laura", age: 22, email: "laura@email.com" },
      { name: "Anna", age: 21, email: "anna@email.com" },
      { name: "Lluis", age: 28, email: "lluis@email.com" },
      { name: "Dani", age: 21, email: "dani@email.com" },
      { name: "Leo", age: 33, email: "leo@email.com" },
      { name: "Clara", age: 24, email: "clara@email.com" },
      { name: "Marc", age: 24, email: "marc@email.com" },
      { name: "Adriana", age: 28, email: "adriana@email.com" },
      { name: "Diego", age: 32, email: "diego@email.com" },
      { name: "Mar", age: 30, email: "mar@email.com" },
      { name: "Helena", age: 22, email: "helena@email.com" },
      { name: "Javi", age: 33, email: "javi@email.com" },
      { name: "Lorena", age: 34, email: "lorena@email.com" },
      { name: "Constanza", age: 28, email: "constanza@email.com" },
  ];

  document.getElementById("printButton").addEventListener("click", function() {
      const studentsList = document.getElementById("studentsList");
      studentsList.innerHTML = "";  // Clear the list before adding new items
      
      students.forEach(student => {
          const li = document.createElement("li");
          li.textContent = `${student.name}, Age: ${student.age}`;
          li.className = "border p-2 rounded shadow-md border border-red-500";  // Add some styling
          studentsList.appendChild(li);
      });
  });
});

var studentsList  = document.getElementById('students -list');


studentsTitle.style.color = 'blue';  
