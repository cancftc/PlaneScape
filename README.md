# Proje Açıklaması

Bir havalimanı API’si ile basitçe uçuş bilgilerinin listelenebilmesi ve kullanıcı uçuş bilgilerinin basitçe kaydedilmesini sağlayacak bir web uygulaması

### NOT 

- Frontend klasörünü çalıştırırken bu hatayı " Access to XMLHttpRequest at 'https://api.schiphol.nl/public-flights/flights' from origin 'http://localhost:5173' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. " alırsanız "Çalıştır(Windows + R)" penceresi ni açın ve komutu çalıştırın "chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security".
- API'de uçuşun hangi ülkeler arasında olsuğu belirtilmemiş bunun icin gidiş bilinmiyor. iniş yapacağı yeri havalimanın ın koduna göre gösterildi.
- API'de uçuşun hangi ülkeler arasında olduğu verilmediği icin ucuşa göre filtreleme yapılmadı.
- Ucağın kalkış yaptığı havalimanı kodu verilmemiş API de onun icin bilinmiyor.
- İniş saati verilmiş kalkış saati verilmemiş onun yerine tahmini kalkış süresi kullanıldı.
- Uçuş süresi verilmemiş. onun yerine iniş süresi ve kalkış süresinde çıkarma işlemi yapıldı(kalkış süresi tahmini olduğu icin bazı uçuş süresi eksili cıkıyor)

### Uygulama Resimleri

![Ekran Görüntüsü (210)](https://github.com/user-attachments/assets/dd100f01-9066-4f53-b390-b34af2432342)

[Uygulama Ana Sayfası](./Frontend/public/Ekran%20Görüntüsü%20(210).png)
[Uygulama Ana Sayfası](./Frontend/public/Ekran%20Görüntüsü%20(211).png)
[Uygulama Uçuşlarım Sayfası](./Frontend/public/Ekran%20Görüntüsü%20(212).png)

### Uygulama Vidyosu

[Uygulama Uçuşlarım Sayfası](./Frontend/public/Video_2024_09_24-4.webm)

[Video_2024_09_24-4 (1).webm](https://github.com/user-attachments/assets/a4c9258f-3af8-4f04-b207-050586389e00)

### Kullanıcı Arayüzü (UI)

- Uçuşların Listelenmesi 
- Tarihe göre Filtreleme 
- Uçuşu uçuşlarım sayfasına ekleme 
- Uçuşlarımı Listeleme 
 
### İşlevsellik (Arka Uç)

- Uçulşların uçuşlarım tablosuna ına eklenmesi
- Uçuşların listelenmesi

### Bonus Özellikler

- Mobil uyumlu tasarım


### Kullanılan teknolojiler 

- React
- Node.js
- Mongo.db

### Kurulum

1. Arka uç bağımlılıklarını kurun:

    ```bash
    cd backend
    npm install
    ```

2. Önyüz bağımlılıklarını kurun:

    ```bash
    cd frontend
    npm install
    ```

### Uygulamayı Çalıştırma

1. Arka uç sunucusunu başlatın:

    ```bash
    cd backend
    npm start
    ```

2. Önyüz geliştirme sunucusunu başlatın:

    ```bash
    cd frontend
    npm run dev
    ```

### Kullanılan teknoloji ve paketler

### Backend

- Node.js
- Express
- Cors
- Nodemon
- Mongo DB

### Frontend

- React
- React Router DOM
- Axios
- Fontawesome
