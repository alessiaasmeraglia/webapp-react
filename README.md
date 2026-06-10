

## Struttura di base

```txt
src/
├── assets/          # immagini, font e altri file statici
├── components/      # componenti riutilizzabili
│   ├── Header.jsx
│   └── Footer.jsx
├── contexts/        # React context (stato globale)
│   └── ThemeContext.jsx
├── hooks/           # hook personalizzati
│   └── useTheme.js
├── layouts/         # layout condivisi tra più pagine
│   └── MainLayout.jsx
├── pages/           # una pagina = un file
│   ├── HomePage.jsx
│   └── NotFound.jsx
├── styles/          # stili globali
│   └── index.css
├── utils/           # funzioni di utilità
├── App.jsx          # definizione delle route
└── main.jsx         # punto di ingresso
```

