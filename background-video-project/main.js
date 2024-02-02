
const controlButton = document.getElementById("controlButton");
const video = document.getElementById("video");

controlButton.addEventListener("click", () => {
  if(!controlButton.classList.contains("paused")){
    video.pause()
    controlButton.classList.remove("playing")
    controlButton.classList.add("paused")
    controlButton.textContent = "Pausado"
  } else {
    video.play()
    controlButton.classList.remove("paused")
    controlButton.classList.add("playing")
    controlButton.textContent = "Reproduzindo"
  }
})