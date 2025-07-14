function download() {
  const url = document.getElementById("urlInput").value.trim();
  const format = document.querySelector('input[name="format"]:checked').value;

  if (!url) {
    alert("Masukkan URL YouTube terlebih dahulu.");
    return;
  }

  let downloadURL;

  if (format === "mp3") {
    downloadURL = `https://ytmp3.nu/api/widget?url=${encodeURIComponent(url)}`;
  } else {
    // Bisa juga pakai situs redirect aman (iframe/landing)
    downloadURL = `https://yt1s.lc/en308`; 
  }

  document.getElementById("result").innerHTML = `
    <p>Jika tidak muncul otomatis, klik tombol di bawah ini:</p>
    <a href="${downloadURL}" target="_blank">
      <button>Download ${format.toUpperCase()}</button>
    </a>
  `;
}