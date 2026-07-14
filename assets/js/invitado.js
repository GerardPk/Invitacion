const params =
  new URLSearchParams(
    window.location.search
  );

const token =
  params.get("token");
  
  console.log("Token: ", token);

const API =
"https://script.google.com/macros/s/AKfycbw8CREdG0D2joBa_VEoVBoxUPiCAfDgCmpfTBfaGidG_2lAAAyxNzMr4w0SmklwPFIN/exec";

async function cargarInvitado(){

console.log("consultando invitado");
  const response =
    await fetch(
      `${API}?token=${token}`
    );
     
    console.log("response: ", response);

  const data =
    await response.json(); 
    
    console.log("data: ", data);

  if(data.error){

    document.body.innerHTML =
      "<h1>Invitación inválida</h1>";

    return;
  }

  document
    .getElementById("nombre")
    .innerHTML =
    `Hola ${data.nombre}`;

  document
    .getElementById("boletos")
    .innerHTML =
    `Tienes ${data.boletos} boletos disponibles`;
}

cargarInvitado();