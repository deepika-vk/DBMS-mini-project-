// Sample data for the table
var data = [
    { id: 1, userId: 'user123', username: 'JohnDoe', amountPaid: '$50.00', dateTime: '2023-11-14 12:30 PM' },
    { id: 2, userId: 'user456', username: 'JaneSmith', amountPaid: '$75.50', dateTime: '2023-11-14 2:45 PM' },
    { id: 3, userId: 'user789', username: 'AliceJohnson', amountPaid: '$30.25', dateTime: '2023-11-14 4:15 PM' },
    { id: 4, userId: 'user789', username: 'AliceJohnson', amountPaid: '$30.25', dateTime: '2023-11-14 4:15 PM' }
];

// Function to populate the table with data
function populateTable() {
    var tableBody = document.getElementById('tableBody');

    data.forEach(function(item) {
        var row = tableBody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = item.id;
        cell2.innerHTML = item.userId;
        cell3.innerHTML = item.username;
        cell4.innerHTML = item.amountPaid;
        cell5.innerHTML = item.dateTime;
    });
}

// Call the function to populate the table
populateTable();
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function changeHeaderColor() {
    const colorInput = getRandomColor();
    const element = document.getElementById("magicText"); 
    element.style.color = colorInput;
  }
  
  setInterval(changeHeaderColor, 500); 