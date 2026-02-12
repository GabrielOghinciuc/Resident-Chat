# Resident Chat

Aplicatie de live chat in timp real, construita cu **Angular 20** (frontend) si **Node.js / Express / Socket.IO** (backend).

?? **Repository:** [https://github.com/GabrielOghinciuc/Resident-Chat](https://github.com/GabrielOghinciuc/Resident-Chat)

---

## Tech Stack

| Layer    | Tehnologii                                          |
| -------- | --------------------------------------------------- |
| Frontend | Angular 20, RxJS, Socket.IO Client, SCSS            |
| Backend  | Node.js, Express, Socket.IO, TSOA, Swagger, TypeScript |

---

## Cerinte preliminare

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/)
- [Angular CLI](https://angular.dev/tools/cli) (`npm install -g @angular/cli`)

---

## Instalare si pornire

### 1. Clonare repository

```bash
git clone https://github.com/GabrielOghinciuc/Resident-Chat.git
cd Resident-Chat
```

### 2. Backend

```bash
cd Back-end
npm install
```

**Pornire in modul development:**

```bash
npm run dev
```

**Pornire in modul productie:**

```bash
npm run build
npm start
```

Serverul va rula pe [http://localhost:3000](http://localhost:3000).
Documentatia Swagger este disponibila la [http://localhost:3000/docs](http://localhost:3000/docs).

### 3. Frontend

```bash
cd Front-end/chat
npm install
```

**Pornire in modul development:**

```bash
npm start
```

Aplicatia va rula pe [http://localhost:4200](http://localhost:4200).

---

## Structura proiectului

```
Resident-Chat/
??? Back-end/
?   ??? src/
?   ?   ??? controllers/
?   ?   ?   ??? ChatController.ts      # Endpointuri REST pentru chat
?   ?   ?   ??? HealthController.ts    # Health check
?   ?   ??? generated/
?   ?   ?   ??? routes.ts              # Rute generate de TSOA
?   ?   ?   ??? swagger.json           # Specificatie Swagger generata
?   ?   ??? app.ts                     # Configurare Express
?   ?   ??? server.ts                  # Entry point server
?   ?   ??? socket.ts                  # Configurare Socket.IO
?   ??? package.json
?   ??? tsconfig.json
?   ??? tsoa.json
?
??? Front-end/
?   ??? chat/
?       ??? src/
?       ?   ??? app/
?       ?       ??? components/
?       ?       ?   ??? chat-box/          # Componenta de afisare mesaje
?       ?       ?   ??? header/            # Header-ul aplicatiei
?       ?       ?   ??? message-form/      # Formularul de trimitere mesaje
?       ?       ??? shared/
?       ?           ??? interfaces/        # Interfete TypeScript (Message)
?       ?           ??? services/          # Servicii (ChatService, ThemeService)
?       ??? angular.json
?       ??? package.json
?
??? README.md
```

---

## API Endpoints

| Metoda | Endpoint          | Descriere                          |
| ------ | ----------------- | ---------------------------------- |
| GET    | `/chat/users`     | Returneaza lista utilizatorilor activi |
| GET    | `/chat/messages`  | Returneaza toate mesajele            |
| POST   | `/chat/message`   | Trimite un mesaj nou                 |
