function storePersonPhoto(Name, Where, When, Who, Details, Image, callback) {

  var postUrl = '/BikeLocker/add-photo';
  var postRequest = new XMLHttpRequest();
  postRequest.open('POST', postUrl);
  postRequest.setRequestHeader('Content-Type', 'application/json');

  postRequest.addEventListener('load', function (event) {
    var error;
    if (event.target.status !== 200) {
      error = event.target.response;
    }
    callback(error);
  });
  // Send our photo data off to the server.
  postRequest.send(JSON.stringify({
    what: Name,
    where: Where,
    details: Details,
    when: When,
    serial: Who,
    image: Image

  }));

  clearTodoInputValues();
  alert("Bike Added!!!!")
}

////////////////////////////////// clear fields
function clearTodoInputValues() {

  var todoInputElems = document.getElementsByClassName('todo-input-element');
  for (var i = 0; i < todoInputElems.length; i++) {
    var input = todoInputElems[i].querySelector('input, textarea');
    input.value = '';
  }
}

function logBikeInfo() {

  var Name = document.getElementById('what').value || '';
  var Where = document.getElementById('where').value || '';
  var When = document.getElementById('when').value || '';
  var Who = document.getElementById('who').value || '';
  var Details = document.getElementById('details').value || '';
  var Image = document.getElementById('image').value || '';

  if (Name.trim() && Where.trim() && When.trim() && Who.trim() && Details.trim() && Image.trim()) {

    storePersonPhoto(Name, Where, When, Who, Details, Image, function (err) {
        if (err) {
          alert("Unable to save person's photo.  Got this error:\n\n" + err);
        }
      });
  }
  else {
      alert('Must provide values for all fields');
  }
};

function gotoBike(event) {
  // console.log(event.target.getElementsByClassName('Serial#')[0].innerHTML);
  var bikeIndex = event.target.getElementsByClassName('Serial#')[0].innerHTML;
  if(bikeIndex) {
    window.location.href = 'BikeLocker-' + bikeIndex;
  }
}



function searchLogs(event) {
  var bikeSerial = document.getElementById('checker').value;
  if(bikeSerial) {
    window.location.href = 'BikeLocker-' + bikeSerial;
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



  var searchButton = document.querySelector('.checkButton');
  if (searchButton) {
    searchButton.addEventListener('click', searchLogs);
  }

});
