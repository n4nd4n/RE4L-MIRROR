// Access camera on load
window.onload = function () {
    const video = document.getElementById("video");
  
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
        })
        .catch(function (err) {
          console.error("Error accessing camera: ", err);
          alert("Please allow camera access to view the mirror!");
        });
    }
  };
  
  // Show the moon when button is clicked
  function showMoon() {
    document.getElementById("videoContainer").style.display = "none";
    document.getElementById("moonContainer").style.display = "block";
  
    const emoji = document.getElementById("emojiPointing");
    emoji.style.opacity = "0";
    void emoji.offsetWidth; // trigger reflow
    emoji.style.animation = "fadeIn 1.2s ease-out forwards";
  }