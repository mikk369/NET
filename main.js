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
  const eventDiv = document.createElement("tr");
  eventDiv.classList.add("event-data");

  // validate inputs & wont create empty div
  if (eventName.value === "") {
    alert("Please input event name");
  } else if (place.value === "") {
    alert("Please input Place"), (eventDiv = false);
  }

  //create event name
  const newEventData = document.createElement("td");
  newEventData.innerText = eventName.value;
  eventDiv.appendChild(newEventData);
  eventList.appendChild(newEventData);

  //date element
  const newDate = document.createElement("td");
  newDate.innerText = addDate.value;
  eventDiv.appendChild(newDate);
  eventList.appendChild(newDate);

  //create place element
  const newEventPlace = document.createElement("td");
  newEventPlace.innerText = place.value;
  eventDiv.appendChild(newEventPlace);
  eventList.appendChild(newEventPlace);

  //comment element
  const newComments = document.createElement("td");
  newComments.innerText = comments.value;
  eventDiv.appendChild(newComments);
  eventList.appendChild(newComments);

  //create tableRow
  const tableRow = document.createElement("tr");
  eventDiv.appendChild(tableRow);
  eventList.appendChild(tableRow);

  // clears input
  eventName.value = "";
  place.value = "";
  comments.value = "";
  addDate.value = "";
}
