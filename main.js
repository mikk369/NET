//selectors
const eventName = document.querySelector("#eventholder");
const addButton = document.querySelector("#addEvent");
const addDate = document.querySelector('input[type="date"]');
const place = document.querySelector("#placeholder");
const comments = document.querySelector("#comment");
const eventList = document.querySelector(".event-table");

//event listeners
addButton.addEventListener("click", addEvents);

//functions
function addEvents(event) {
  //prevent page refreshing
  event.preventDefault();
  //Event Div
  const eventDiv = document.createElement("td");
  eventDiv.classList.add("event-data");

  // validate inputs & wont create empty div
  if (eventName.value.trim() === "") {
    alert("Please add event name");
  } else if (place.value() === "") {
    alert("Please add place"), (tableInfo = false);
    return true;
  }
  // create tableRow
  const tableRow = document.createElement("tr");
  tableRow.classList.add("event-row");
  eventDiv.appendChild(tableRow);
  eventList.appendChild(tableRow);

  //create event name
  const newEventData = document.createElement("td");
  newEventData.innerText = eventName.value;
  eventDiv.appendChild(newEventData);
  tableRow.appendChild(newEventData);

  //date element
  const newDate = document.createElement("td");
  newDate.innerText = addDate.value;
  eventDiv.appendChild(newDate);
  tableRow.appendChild(newDate);

  //create place element
  const newEventPlace = document.createElement("td");
  newEventPlace.innerText = place.value;
  eventDiv.appendChild(newEventPlace);
  tableRow.appendChild(newEventPlace);

  //comment element
  const newComments = document.createElement("td");
  newComments.innerText = comments.value;
  eventDiv.appendChild(newComments);
  tableRow.appendChild(newComments);

  //selecting row element
  tableInfo = document.querySelector(".event-row");

  //Deletebutton
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "<button>DELETE</button>";
  deleteButton.classList.add("delete-btn");
  tableRow.appendChild(deleteButton);

  //Edit button
  const editButton = document.createElement("button");
  editButton.innerHTML = "<button>EDIT</button>";
  editButton.classList.add("edit-btn");
  tableRow.appendChild(editButton);

  //btn addEvent
  const deleteEventBtn = document.querySelectorAll(".delete-btn");
  console.log(deleteEventBtn.length);
  for (i = 0; i < deleteEventBtn.length; i++) {
    deleteEventBtn[i].addEventListener("click", deleteFunction);
  }

  function deleteFunction() {
    this.parentNode.remove();
  }

  // clears input
  eventName.value = "";
  place.value = "";
  comments.value = "";
  addDate.value = "";
}
