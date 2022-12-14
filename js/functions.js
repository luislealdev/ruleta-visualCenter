var miRuleta = new Winwheel({
  numSegments: 11,
  outerRadius: 200,
  segments: [
    { fillStyle: "#304ffe", text: "Solución" },
    { fillStyle: "#FD1314", text: "Collar" },
    { fillStyle: "#EBECEE", text: "Lentes GRATIS" },
    { fillStyle: "#ffeb3b", text: "Estuche" },
    { fillStyle: "#304ffe", text: "Fleje" },
    { fillStyle: "#FD1314", text: "2x1" },
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
