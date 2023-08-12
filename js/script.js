document.addEventListener("DOMContentLoaded", function () {
let formDOM = document.querySelector("#myform");
formDOM.addEventListener('submit', myfunction);
const toast = new bootstrap.Toast(document.querySelector(".toast"));

  // fonksiyon tanımlaması 
  function myfunction(event) {
    event.preventDefault(); // submit olayı gerçekleşince sayfanın tekrar yüklenmesini önledim
    let sayi = document.querySelector("#sayiInput");
    let girilenSayi = document.querySelector("#girilenSayi");
    let yeniSayi = document.querySelector("#yeniSayi");
    let arr = Array();
    let kontrol, yeniBuyukSayi;

    yeniBuyukSayi = "";
    sayi = sayi.value;
    kontrol = Number.isInteger(parseInt(sayi)); // girilen veri integer değerde mi kontrol ettim

    if ((!sayi) || (kontrol == false)) { // integer olmama ve boş veri gönderilmesi durumunda uyarı mesajı verildi
      toast.show();
      return;
    }

    if (kontrol == true) { // verinin doğru olması durumunda gerçekleşecek işlemler 
      arr = sayi.split(''); // inputtan alınan verideki sayının rakamlarını ayırıp diziye atadım
      sayi = parseInt(sayi);
      girilenSayi.innerHTML = "";
      girilenSayi.innerHTML += sayi;
      yeniSayi.innerHTML = "";
      kontrol = false; // aşağıdaki döngü çalıştırılsa sonraki kontrol için false değeri verdim
      for (let i = arr.length - 1; i >= 1; i--) {
        if (arr[i] > arr[i - 1]) { // en sondaki rakam ile bir öncekini kıyasladım sondaki büyükse yer değiştirecek değilse bir sola kayacak 
          kontrol = true;
          bos = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = bos;
          for (let i = 0; i < arr.length; i++) { // ekrana yazdırabilmek için tekrar stringe dönüştürdüm
            yeniBuyukSayi += arr[i].toString();
          }
          yeniSayi.innerHTML += yeniBuyukSayi;
          break;
        } 
      }
      
      if (kontrol == false) {
        yeniSayi.innerHTML += "Bu rakamlarla yeni bir sayı oluşturulamıyor "; // döngü sonucunda yeni sayı üretilemezse kullanıcı bilgilendirilecek 
      } 

      
    }
  }
});
