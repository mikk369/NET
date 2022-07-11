//selectors
const eventName = document.querySelector("#eventholder");
const addButton = document.querySelector("#addEvent");
const addDate = document.querySelector('input[type="date"]');
const place = document.querySelector("#placeholder");
const comments = document.querySelector("#comment");
const eventList = document.querySelector(".event-container");

//event listeners

addButton.addEventListener("click", addEvents);

//functions
function addEvents(event) {
  //prevent page refreshing
  event.preventDefault();
  //Event Div
  const eventDiv = document.createElement("div");
  eventDiv.classList.add("event");

  // validate inputs
  if (eventName.value === "") {
    alert("Please input values"), (eventDiv = false);
  }
  //create h1
  const newEventName = document.createElement("h1");
  newEventName.innerText = eventName.value;
  eventDiv.appendChild(newEventName);
  eventList.appendChild(eventDiv);

  //date element
  const newDate = document.createElement("h3");
  newDate.innerText = addDate.value;
  eventDiv.appendChild(newDate);
  eventList.appendChild(newDate);

  //create h2 place
  const newEventPlace = document.createElement("h2");
  newEventPlace.innerText = place.value;

  eventDiv.appendChild(newEventPlace);
  eventList.appendChild(newEventPlace);

  //comment span element
  const newComments = document.createElement("span");
  newComments.innerText = comments.value;
  eventDiv.appendChild(newComments);
  eventList.appendChild(newComments);

  //clears input
  eventName.value = "";
  place.value = "";
  comments.value = "";
  addDate.value = "";
}
