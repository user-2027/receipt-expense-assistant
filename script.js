
const WEBHOOK_URL = "https://agentspheonix.app.n8n.cloud/webhook/upload-receipt";
async function upload(){

  const file=document.getElementById("file").files[0];

  if(!file) return alert("Choose a receipt.");

  const form=new FormData();
  form.append("file",file);

  document.getElementById("output").textContent="Processing...";

  const res=await fetch(WEBHOOK,{
    method:"POST",
    body:form
  });

  const json=await res.json();

  document.getElementById("output").textContent=
      JSON.stringify(json,null,2);
}