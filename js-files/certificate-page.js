function showContainer(containerId) {
    var containers = document.getElementsByClassName('container');
    for (var i = 0; i < containers.length; i++) {
      containers[i].style.display = 'none';
    }
    var containerToShow = document.getElementById(containerId);
    containerToShow.style.display = 'block';
  }