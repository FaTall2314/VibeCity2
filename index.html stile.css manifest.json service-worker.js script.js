<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VibeCity - La tua guida per l'intrattenimento urbano</title>
    <link rel="stylesheet" href="style.css">
    <link rel="manifest" href="manifest.json">
</head>
<body>
    <header>
        <div class="container">
            <h1>VibeCity</h1>
            <p>Scopri i migliori eventi in città e organizza il tuo intrattenimento con facilità!</p>
            <a href="#download" class="cta-button">Scarica l'App</a>
        </div>
    </header>

    <section id="about">
        <div class="container">
            <h2>Chi Siamo</h2>
            <p>VibeCity è un'app pensata per offrire un’esperienza di intrattenimento personalizzata e accessibile a tutti.</p>
        </div>
    </section>

    <section id="how-it-works">
        <div class="container">
            <h2>Come Funziona</h2>
            <p>Utilizziamo l'Intelligenza Artificiale per aiutarti a trovare eventi, promozioni e offerte.</p>
            <ul>
                <li>Assistenza e supporto 24/7</li>
                <li>Accesso rapido agli eventi con Face ID</li>
                <li>Community per condividere esperienze</li>
            </ul>
        </div>
    </section>

    <section id="services">
        <div class="container">
            <h2>Servizi Offerti</h2>
            <ul>
                <li><strong>Organizzazione e ricerca eventi:</strong> Trova eventi in tempo reale.</li>
                <li><strong>Voucher e sconti:</strong> Approfitta di promozioni esclusive.</li>
                <li><strong>Community:</strong> Unisciti alla nostra community per discutere e scoprire nuove esperienze.</li>
            </ul>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2023 VibeCity. Tutti i diritti riservati.</p>
            <p>Seguici sui social: <a href="#">Instagram</a> | <a href="#">Facebook</a></p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html> 
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

.container {
    width: 80%;
    margin: auto;
    overflow: hidden;
}

header {
    background: #1A73E8;
    color: #fff;
    padding: 80px 0;
    text-align: center;
}

.cta-button {
    display: inline-block;
    padding: 10px 20px;
    background: #FF5C5C;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 10px;
}

section {
    padding: 60px 0;
    text-align: center;
}

footer {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 30px 0;
} 
{
    "name": "VibeCity",
    "short_name": "VibeCity",
    "description": "La tua guida per l'intrattenimento urbano.",
    "start_url": "/index.html",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#1A73E8",
    "icons": [
        {
            "src": "icon.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "icon.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
} 
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('vibecity-cache').then(function(cache) {
            return cache.addAll([
                '/index.html',
                '/style.css',
                '/script.js',
                '/icon.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
}); 
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(function(error) {
            console.log('Service Worker registration failed:', error);
        });
}
