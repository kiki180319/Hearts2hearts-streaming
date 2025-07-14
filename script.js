function download() {
  const url = document.getElementById("urlInput").value.trim();
  const format = document.querySelector('input[name="format"]:checked').value;

  if (!url) {
    alert("Masukkan URL YouTube terlebih dahulu.");
    return;
  }

  // Buat link pencarian Google otomatis
  const query = encodeURIComponent(`Download YouTube ${format.toUpperCase()} ${url}`);
  const googleSearch = `https://www.google.com/search?q=${query}`;

  document.getElementById("result").innerHTML = `
    <p>Tidak menemukan converter aktif, coba cari langsung di Google:</p>
    <a href="${googleSearch}" target="_blank">
      <button>Cari Download ${format.toUpperCase()}</button>
    </a>
  `;
}