function Login() {

	var username=document.masuk.username.value;
	var password=document.masuk.password.value;

		if (username == "huda" && password == "nicecare") {
			alert("Selamat anda berhasil login");
			window.location="sukses.html";

		}
		else {
			alert("User name dan password anda salah!");
		}
}