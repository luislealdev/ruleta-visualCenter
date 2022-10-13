var miRuleta = new Winwheel({
  numSegments: 14,
  outerRadius: 200,
  segments: [
    { fillStyle: "#EBECEE", text: "Falta" },
    { fillStyle: "#C01A34", text: "Lentes GRATIS" },
    { fillStyle: "#EBECEE", text: "Falta" },
    { fillStyle: "#304ffe", text: "Solución" },
    { fillStyle: "#FD1314", text: "Collar" },
    { fillStyle: "#ffeb3b", text: "Estuche" },
    { fillStyle: "#304ffe", text: "Fleje" },
    { fillStyle: "#FD1314", text: "2x1" },
    { fillStyle: "#EBECEE", text: "Falta" },
    { fillStyle: "#304ffe", text: "Solución" },
    { fillStyle: "#FD1314", text: "Collar" },
    { fillStyle: "#ffeb3b", text: "Estuche" },
    { fillStyle: "#304ffe", text: "Fleje" },
    { fillStyle: "#FD1314", text: "2x1" },
  ],
  animation: {
    type: "spinToStop",
    duration: 5,
    callbackFinished: "mensaje()",
    callbackAfter: "dibujarIndicador()",
  },
});

dibujarIndicador();

async function mensaje() {
  var SegmentoSeleccionado = miRuleta.getIndicatedSegment();
  console.log(SegmentoSeleccionado.text);

  if (SegmentoSeleccionado.text != "Falta")
    await Swal.fire({
      title: "¡FELICIDADES!",
      text: SegmentoSeleccionado.text,
      width: 400,
      padding: "3em",
      color: "#D91A1A",
      backdrop: `
      rgba(255,0,0,0.4)
      url("/images/navidadVisualin.png")
      left top 
      no-repeat
    `,
    });
  else
    await Swal.fire({
      title: "UPS!",
      text: "Suerte para la próxima!",
      icon: "warning",
      iconColor: "red",
      confirmButtonText: "Cool",
    });

  miRuleta.stopAnimation(false);
  miRuleta.rotationAngle = 0;
  miRuleta.draw();
  dibujarIndicador();
}

function dibujarIndicador() {
  var ctx = miRuleta.ctx;
  ctx.strokeStyle = "navy";
  ctx.fillStyle = "black";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(170, 0);
  ctx.lineTo(230, 0);
  ctx.lineTo(200, 60);
  ctx.lineTo(170, 0);
  ctx.stroke();
  ctx.fill();
}
