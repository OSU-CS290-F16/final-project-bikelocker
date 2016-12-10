function logBikeInfo() {
  // Grab the values from all the input fields.
  var todoInputWhat = document.getElementById('todo-input-what').value || '';
  var todoInputWhere = document.getElementById('todo-input-where').value || '';
  var todoInputWhen = document.getElementById('todo-input-when').value || '';
  var todoInputWho = document.getElementById('todo-input-who').value || '';
  var todoInputDetails = document.getElementById('todo-input-details').value || '';
  var todoInputURL = document.getElementById('todo-input-image').value || '';

  // We only add the note if we have a value for "what".
  if (todoInputWhat.trim()) {

    // Create a new todo section and append it to the main element.
    var newTodoHTML = generateTodoHTML(
      todoInputWhat.trim(),
      todoInputWhere.trim(),
      todoInputWhen.trim(),
      todoInputWho.trim(),
      todoInputDetails.trim(),
      todoInputURL.trim()
    );



    // console.log(obj);
    // storePersonPhoto(todoInputWhat, todoInputWhere, todoInputWhen, todoInputWho);



    clearTodoInputValues();

  } else {

    // If there's no "what" value specified, throw an alert.
    alert('You must specify a value for the "what" field.');

  }

}

//// navigate to individual bike's info
function gotoBike(event) {
  // console.log(event.target.getElementsByClassName('Serial#')[0].innerHTML);
  var bikeIndex = event.target.getElementsByClassName('Serial#')[0].innerHTML;
  if(bikeIndex) {
    window.location.href = 'bikes-' + bikeIndex;
  }
}

window.addEventListener('DOMContentLoaded', function (event) {

  var modalCancalButton = document.querySelector('.modal-cancel-button');
  if (modalCancalButton) {
    modalCancalButton.addEventListener('click', clearTodoInputValues);
  }

  var logBikeButton = document.querySelector('.modal-accept-button');
  if(logBikeButton) {
    logBikeButton.addEventListener('click', logBikeInfo);
  }







  window.addEventListener('click', function (event) {

    if(event.target.classList.contains('todo')) {
      gotoBike(event);
    }
  });

});

