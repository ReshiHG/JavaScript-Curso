const d = document,
  n = navigator;

export function webCam(id, cameraMessage) {
  const $video = d.getElementById(id);
  const $cameraMessage = d.getElementById(cameraMessage);

  console.log(n.mediaDevices);
  if (n.mediaDevices === undefined) {
    $cameraMessage.textContent = "No se detectó ninguna cámara";
    return;
  }

  n.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((stream) => {
      console.log(stream);
      $video.srcObject = stream;
      $video.play();
    })
    .catch((err) => {
      $video.insertAdjacentHTML("afterend", `<p><mark>${err}</m<rk></p>`);
      console.log(`¡Sucedio el siguiente error: ${err}!`);
    });
}
