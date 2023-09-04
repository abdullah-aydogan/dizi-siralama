// let sayilar = [43, 25, 49, 86, 12, 75, 84, 54, 93, 36];

// Boş sayı dizisi
let sayilar = [];

// 10 adet sayı alma
for(let i = 0; i < 10; i++) {

    let sayi = prompt((i + 1) + ". sayıyı giriniz.");
    // String gelen veriyi int veri türüne çevirme
    sayilar[i] = parseInt(sayi);
}

// Tarayıcı ekranına sayıları yazdıran kodlar
document.write("<p>Sayılar</p>");
document.write(sayilar.join(" - "));
document.write("<br><br>");

document.write("<p>Küçükten Büyüğe Doğru Sıralı</p>")
document.write(kucuktenBuyugeSirala(sayilar));
document.write("<br><br>");

document.write("<p>Büyükten Küçüğe Doğru Sıralı</p>")
document.write(buyuktenKucugeSirala(sayilar));

// Küçükten büyüğe sıralama yapan fonksiyon
function kucuktenBuyugeSirala(sayilar) {

    for (let i = 0; i < sayilar.length; i++) {

        let min = i;
           
        for (let j = i + 1; j < sayilar.length; j++) {
    
            if (sayilar[j] < sayilar[min]) {
                
                 min = j;
            } 
        }
        
        let geciciSayi = sayilar[i];
        sayilar[i] = sayilar[min];
        sayilar[min] = geciciSayi;
    }

    return sayilar.join(" - ");
};

// Büyükten küçüğe sıralama yapan fonksiyon
function buyuktenKucugeSirala(sayilar) {

    for (let i = 0; i < sayilar.length; i++) {

        let max = i;
           
        for (let j = i + 1; j < sayilar.length; j++) {
    
            if (sayilar[j] > sayilar[max]) {
                
                 max = j;
            } 
        }

        let geciciSayi = sayilar[i];
        sayilar[i] = sayilar[max];
        sayilar[max] = geciciSayi;
    }

    return sayilar.join(" - ");
};