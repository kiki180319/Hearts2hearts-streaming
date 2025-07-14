function download() {
  const url = document.getElementById("urlInput").value.trim();
  const format = document.querySelector('input[name="format"]:checked').value;

  if (!url) {
    alert("Masukkan URL YouTube terlebih dahulu.");
    return;
  }

  const encodedURL = encodeURIComponent(url);
  let downloadURL;

  // Gunakan pihak ketiga seperti yt1s, ytmp3.cc, atau API yang tersedia
  if (format === "mp3") {
    downloadURL = `https://api.vevioz.com/@api/button/mp3/${encodedURL}`;
  } else {
    downloadURL = `https://api.vevioz.com/@api/button/mp4/${encodedURL}`;
  }

  document.getElementById("result").innerHTML = `
    <p>Jika tidak muncul otomatis, klik tombol di bawah ini:</p>
    <a href="${downloadURL}" target="_blank">
      <button>Download ${format.toUpperCase()}</button>
    </a>
  `;
}