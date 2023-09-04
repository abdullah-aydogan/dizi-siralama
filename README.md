# Dizi Sıralama

Javascript ile dizi elemanlarını sıralama

## Küçükten Büyüğe Sıralama

```javascript
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
```

## Büyükten Küçüğe Sıralama

```javascript
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
```

## Ekran Görüntüleri


![photo-1](https://github.com/abdullah-aydogan/dizi-siralama/assets/117303457/b2675667-dafc-4f07-9563-a692c40b542b)


![photo-2](https://github.com/abdullah-aydogan/dizi-siralama/assets/117303457/3f60f323-e827-4f3d-8188-77e544663e19)
