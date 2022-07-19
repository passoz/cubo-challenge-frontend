var ctx = document.getElementById("pie").getContext('2d');
var pie = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#f1c40f",
        "#e74c3c",
        "#95a5a6",
        "#9b59b6",
        "#34495e"
      ],
      data: []
    }]
  }
});


function addParticipation(firstName = '', lastName = '', participation = 0) {
  pie.data.labels.push(firstName + " " + lastName)
  pie.data.datasets[0].data.push(participation)
  pie.update()
  let table = document.getElementById("table")
  let row = table.insertRow()
  let rowNumberCell = row.insertCell()
  let firstNameCell = row.insertCell()
  let lastNameCell = row.insertCell()
  let participationCell = row.insertCell()
  let rowNumberText = document.createTextNode(table.rows.length - 1)
  let firstNameText = document.createTextNode(firstName)
  let lastNameText = document.createTextNode(lastName)
  let participationText = document.createTextNode(participation)
  firstNameCell.appendChild(firstNameText)
  lastNameCell.appendChild(lastNameText)
  participationCell.appendChild(participationText)
  rowNumberCell.appendChild(rowNumberText)
}


document
  .getElementById("send-button")
  .addEventListener("click", function(event) {
    event.preventDefault()
    addParticipation(
      document.getElementById("first-name").value,
      document.getElementById("last-name").value,
      parseInt(document.getElementById("participation").value)
    )
  }
  )


