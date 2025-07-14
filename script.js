function download() {
  const url = document.getElementById("urlInput").value.trim();
  const format = document.querySelector('input[name="format"]:checked').value;

  if (!url) {
    alert("Masukkan URL YouTube terlebih dahulu.");
    return;
  }

  let site;
  if (format === "mp3") {
    site = "https://mp3-convert.org/youtube-to-mp3/";
  } else {
    site = "https://y2mate.tools/";
  }

  document.getElementById("result").innerHTML = `
    <p>Tempel URL YouTube kamu di situs berikut:</p>
    <a href="${site}" target="_blank">
      <button>Buka Situs Download ${format.toUpperCase()}</button>
    </a>
  `;
}