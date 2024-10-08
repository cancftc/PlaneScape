# Proje Açıklaması

Bir havalimanı API’si ile basitçe uçuş bilgilerinin listelenebilmesi ve kullanıcı uçuş bilgilerinin basitçe kaydedilmesini sağlayacak bir web uygulaması

### NOT 

- Frontend klasörünü çalıştırırken aşşağıdaki hatayı alırsanız "Çalıştır(Windows + R)" penceresi ni açın ve komutu çalıştırın "chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security".
- " Access to XMLHttpRequest at 'https://api.schiphol.nl/public-flights/flights' from origin 'http://localhost:5173' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. "
- API'de uçuşun hangi ülkeler arasında olsuğu belirtilmemiş bunun icin gidiş bilinmiyor. iniş yapacağı yeri havalimanın ın koduna göre gösterildi.
- API'de uçuşun hangi ülkeler arasında olduğu verilmediği icin ucuşa göre filtreleme yapılmadı.
- Ucağın kalkış yaptığı havalimanı kodu verilmemiş API de onun icin bilinmiyor.
- İniş saati verilmiş kalkış saati verilmemiş onun yerine tahmini kalkış süresi kullanıldı.
- Uçuş süresi verilmemiş. onun yerine iniş süresi ve kalkış süresinde çıkarma işlemi yapıldı(kalkış süresi tahmini olduğu icin bazı uçuş süresi eksili cıkıyor)

### Uygulama Resimleri

![Ekran Görüntüsü (210)](https://github.com/user-attachments/assets/dd100f01-9066-4f53-b390-b34af2432342)
![Ekran Görüntüsü (211)](https://github.com/user-attachments/assets/7d864612-ba49-4092-b769-e2052ae0e7ee)
![Ekran Görüntüsü (212)](https://github.com/user-attachments/assets/e21456a6-24aa-4583-815e-63062d668b17)

### Uygulama Vidyosu
https://github.com/user-attachments/assets/d66bc44b-3df9-4564-b4a3-68c67199891c

[Uygulama Uçuşlarım Sayfası](./Frontend/public/Video_2024_09_24-4.webm)

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
