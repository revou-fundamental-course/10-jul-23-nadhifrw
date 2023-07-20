//variabel yang akan digunakan
var umur = document.getElementById("usia")
var berat = document.getElementById("berat")
var tinggi = document.getElementById("tinggi")
var pria = document.getElementById("pria")
var wanita = document.getElementById("wanita")

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var hsl = document.getElementById("containerHasil")
var conta = document.getElementById("containerPerhitungan")

// Submit button function
// Validasi ada tidaknya data dalam input
function calculate(){
    if (umur.value=='' && berat.value=='' && tinggi.value=='' && (pria.checked==false && wanita.checked==false)) {
        modal.style.display = "block";
        modalText.innerHTML = "<b>PERHATIAN!<b/>" + "<br/>" + "Semua data perlu diisi!";
    } else if (umur.value <= 0 || berat.value <= 0 || tinggi.value <= 0) {
        modal.style.display = "block";
        modalText.innerHTML = "<b>PERHATIAN!<b/>" + "<br/>" + "Nilai data harus lebih besar dari 0!";
    } else if (pria.checked==false && wanita.checked==false) {
        modal.style.display = "block";
        modalText.innerHTML = "<b>PERHATIAN!<b/>" + "<br/>" + "Pilih gender anda!";
    } else if (berat.value=='') {
        modal.style.display = "block";
        modalText.innerHTML = "<b>PERHATIAN!<b/>" + "<br/>" + "Berat badan perlu diisi!";  
    } else if (umur=='') {
        modal.style.display = "block";
        modalText.innerHTML = "<b>PERHATIAN!<b/>" + "<br/>" + "Usia perlu diisi!";    
    } else if (umur.value < 18) {
        modal.style.display = "block";
        modalText.innerHTML = "<b>PERHATIAN!<b/>" + "<br/>" + "Usia perlu 18 tahun ke atas!";
    } else if (tinggi.value=='') {
        modal.style.display = "block";
        modalText.innerHTML = "<b>PERHATIAN!<b/>" + "<br/>" + "Tinggi badan perlu diisi!";
    } else {
        hitungBmi();
        hsl.scrollIntoView({ behavior: "smooth"})
    }
}

// Perhitungan BMI
function hitungBmi(){
    var p = [umur.value, tinggi.value, berat.value];
    if(pria.checked){
        p.push("Pria");
    }else if(wanita.checked){
        p.push("Wanita");
    }
    // Rumus perhitungan dan display container untuk hasil perhitungan 
    var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
    document.getElementById("containerHasil").style.display = "block";
    document.getElementById("hasilPeringatan").style.display = "block";
    document.getElementById("hasilPerhitungan").innerHTML = bmi.toFixed(1).toString();
    
    // Mengkategorikan hasil BMI 
    if(bmi < 18.5){
        document.getElementById("hasilKualitas").innerHTML = "Berat Badan Kurang";
        document.getElementById("hasilKet").innerHTML = "Anda kekurangan berat badan";
        document.getElementById("hasilKategori").innerHTML = "BMI kurang dari 18.5";
        document.getElementById("saranBmi").innerHTML = "Anda berada dalam kategori kekurangan berat badan." + "<br/>" + "Konsultasikan dengan dokter untuk menentukan program dan diet yang sehat guna mencapai berat badan yang sesuai dengan kebutuhan tubuh.";
    } else if (bmi < 24.9) {
        document.getElementById("hasilKualitas").innerHTML = "Berat Badan Normal (Ideal)";
        document.getElementById("hasilKet").innerHTML = "Anda memiliki berat badan yang normal (Ideal)";
        document.getElementById("hasilKategori").innerHTML = "BMI diantara 18.5 dan 24.9";
        document.getElementById("saranBmi").innerHTML = "Anda berada dalam kategori berat badan yang normal (Ideal)." + "<br/>" + "Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.";
    } else if (bmi < 29.9) {
        document.getElementById("hasilKualitas").innerHTML = "Berat Badan Kelebihan";
        document.getElementById("hasilKet").innerHTML = "Anda memiliki berat badan yang berlebihan";
        document.getElementById("hasilKategori").innerHTML = "BMI diantara 25.0 dan 29.9";
        document.getElementById("saranBmi").innerHTML = "Anda berada dalam kategori berat badan kelebihan." + "<br/>" + "Penting untuk mengadopsi pola makan seimbang dan rutin berolahraga agar mencapai berat badan yang sesuai dengan kebutuhan tubuh.";
    } else {
        document.getElementById("hasilKualitas").innerHTML = "Berat Badan Kegemukan (Obesitas)";
        document.getElementById("hasilKet").innerHTML = "Anda dalam kategori Kegemukan (Obesitas)";
        document.getElementById("hasilKategori").innerHTML = "BMI lebih dari 30.0";
        document.getElementById("saranBmi").innerHTML = "Anda berada dalam kategori Kegemukan (Obesitas)." + "<br/>" + "Konsultasikan segera dengan dokter untuk mengatasi obesitas dan mencari program penurunan berat badan yang tepat sesuai kebutuhan dan kesehatan Anda.";
    }
    
}

// Reset button fuction
function clearBmi() {
    document.getElementById("form-container").reset();
    document.getElementById("containerHasil").style.display = "none";
    document.getElementById("hasilPeringatan").style.display = "none";
    document.getElementById("hasilKualitas").innerHTML = "";
    document.getElementById("hasilKet").innerHTML = "";
    document.getElementById("hasilKategori").innerHTML = "";
    document.getElementById("saranBmi").innerHTML = "";
    document.getElementById("hasilPerhitungan").innerHTML = "";
    conta.scrollIntoView({ behavior: "smooth"})
}

// Kerja tombol (x) pada alert (jadiin indo)
span.onclick = function() {
  modal.style.display = "none";
}

// Penutupan alert ketika click diluar alert (jadiin Indo)
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}