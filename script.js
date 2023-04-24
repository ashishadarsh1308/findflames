// function girlTransit() {
//     document.getElementById("mobile-top").innerHTML = "hello"
// }
function girlTransit() {
    fetch('girl.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('mobile-top').innerHTML = html;
      })
      .catch(error => console.log(error));
  }