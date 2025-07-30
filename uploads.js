document.getElementById("backBtn").addEventListener("click", () => {
  window.location.href = "home.html";
});

const fileInput = document.getElementById("fileInput");
const uploadList = document.getElementById("uploadList");

fileInput.addEventListener("change", function () {
  const files = Array.from(fileInput.files);

  files.forEach(file => {
    const li = document.createElement("li");
    li.textContent = file.name;
    uploadList.appendChild(li);
  });
});
function goBack() {
  window.location.href = "home.html";
}
