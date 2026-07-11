const params =
  new URLSearchParams(
    window.location.search
  );

const token =
  params.get("token");
  
  console.log("Tomen: ", token)

const API =
"https://script.google.com/macros/s/AKfycbw8CREdG0D2joBa_VEoVBoxUPiCAfDgCmpfTBfaGidG_2lAAAyxNzMr4w0SmklwPFIN/exec";

async function cargarInvitado(){

  const response =
    await fetch(
      ${API}?token=${token}
    );

  const data =
    await response.json();

  if(data.error){

    document.body.innerHTML =
      "<h1>Invitación inválida</h1>";

    return;
  }

  document
    .getElementById("nombre")
    .innerHTML =
    Hola ${data.nombre};

  document
    .getElementById("boletos")
    .innerHTML =
    Tienes ${data.boletos} boletos disponibles;
}

cargarInvitado();