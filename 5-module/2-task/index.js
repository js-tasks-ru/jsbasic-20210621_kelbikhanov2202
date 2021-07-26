function toggleText() {
  let button = document.querySelector('button');
  let text = document.getElementById('text');

  button.onclick = function() {
    let isToggle = text.hidden == false;
    text.hidden = isToggle ? hidden = true : hidden = false;
  }
}


