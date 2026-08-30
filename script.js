const WEBHOOK_URL = "https://agentspheonix.app.n8n.cloud/webhook/upload-receipt";

async function upload() {
  const fileInput = document.getElementById("file");
  const output = document.getElementById("output");

  if (!fileInput.files.length) {
    alert("Choose a receipt.");
    return;
  }

  const form = new FormData();
  form.append("file", fileInput.files[0]);

  output.textContent = "Processing...";

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      body: form
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const json = await res.json();
    output.textContent = JSON.stringify(json, null, 2);

  } catch (err) {
    console.error(err);
    output.textContent = `Error: ${err.message}`;
  }
}