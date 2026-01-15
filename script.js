function loginAdmin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // VALIDASI KOSONG
  if (username === "" || password === "") {
    alert("Username dan password wajib diisi");
    return false;
  }

  // SIMULASI LOGIN (FRONTEND)
  // Bisa diganti backend nanti
  localStorage.setItem("isLogin", "true");
  localStorage.setItem("loginUser", username);

  // REDIRECT KE BERANDA
  window.location.href = "index.html";

  return false; // mencegah reload
}


