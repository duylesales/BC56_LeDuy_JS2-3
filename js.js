// Bài tập 1

function suatTongLuong() {
  var soNgayEl = document.getElementById("soNgayLamViec").value * 1;
  var tienLuong = 100;

  var tongLuong = 0;
  tongLuong = soNgayEl * tienLuong;
  document.getElementById(
    "tongLuong"
  ).innerHTML = `<h3 class ="mt-2 p-3 alert-danger"> ${
    tongLuong.toLocaleString() + ",000 VND"
  } </h3>`;
}

// Bài tập 2

function tinhTB() {
  var soT1El = document.getElementById("soThu1").value * 1;
  var soT2El = document.getElementById("soThu2").value * 1;
  var soT3El = document.getElementById("soThu3").value * 1;
  var soT4El = document.getElementById("soThu4").value * 1;
  var soT5El = document.getElementById("soThu5").value * 1;

  var ketQuaTB = 0;
  var ketQuaTB = (soT1El + soT2El + soT3El + soT4El + soT5El) / 5;

  document.getElementById(
    "ketQuaTB"
  ).innerHTML = `<h3 class ="mt-2 alert-warning"> ${
    "Điểm Trung Bình: " + ketQuaTB
  } </h3>`;
}

// Bài tập 3

function quyDoi() {
  var tienUSDEl = document.getElementById("tienUSD").value;
  var giaUSDEl = 23500;

  var ketQuaDoiTien = tienUSDEl * giaUSDEl;

  document.getElementById("doiTien").innerHTML = `<h3 class= "mt-2">${
    ketQuaDoiTien.toLocaleString() + " VND"
  }</h3>`;
}

// Bài tập 4

function tinhKetQua() {
  var chieuDaiEl = document.getElementById("chieuDai").value * 1;
  var chieuRongEl = document.getElementById("chieuRong").value * 1;

  var dienTich = 0;
  var chuVi = 0;
  dienTich = chieuDaiEl * chieuRongEl;
  chuVi = (chieuDaiEl + chieuRongEl) * 2;

  document.getElementById("dienTich").innerHTML = dienTich;
  document.getElementById("chuVi").innerHTML = chuVi;
}

// Bài tập 5

function Tong() {
  var kySoEl = document.getElementById("kySo").value * 1;

  var tongKySo = 0;

  var hangChuc = Math.floor(kySoEl % 10);
  var hangDonVi = Math.floor(kySoEl / 10);

  tongKySo = hangChuc + hangDonVi;

  document.getElementById("tongKySo").innerHTML = tongKySo;
}
