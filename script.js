function download() {
  const url = document.getElementById("urlInput").value.trim();
  const format = document.querySelector('input[name="format"]:checked').value;

  if (!url) {
    alert("Masukkan URL YouTube terlebih dahulu.");
    return;
  }

  // Rekomendasi redirect ke situs manual
  const redirectURL = (format === "mp3")
    ? `https://ytmp3.nu/ID/`
    : `https://ssyoutube.com/en169/`;

  document.getElementById("result").innerHTML = `
    <p>Buka situs berikut dan tempel URL YouTube kamu:</p>
    <a href="${redirectURL}" target="_blank">
      <button>Buka situs download ${format.toUpperCase()}</button>
    </a>
  `;
}