# Végésztechnikus Képzés Bemutató Weboldal – Projektdokumentáció

---

## 1. Projektösszegzés

| Mező | Adat |
|---|---|
| **Projekt neve** | Végésztechnikus Képzés Bemutató Weboldal |
| **Készítők** | Nemetz Levente, Keresztes Kornél |
| **Cél** | Egy modern, reszponzív weboldal, amely bemutatja a végésztechnikus képzést: tantárgyakat, követelményeket, karrierlehetőségeket és elérhetőségeket |
| **Állapot** | Build-ready (Vite + React + TypeScript + Tailwind CSS) |
| **Élesítés** | Netlify – automatikus deploy GitHub repóból |

---

## 2. Tartalmi blokkok

### 2.1 Hírek szekció – 3 oszlopos kártya elrendezés

A főoldal meghatározó eleme a legfrissebb hírek blokkja, amely **háromoszlopos rácsos (grid) elrendezésben** jeleníti meg a legújabb közleményeket, eseményekről szóló tudósításokat és egyéb tájékoztatókat.

**Egy hírkártya elemei:**

| Elem | Leírás |
|---|---|
| **Borítókép** | Minőségi fotó vagy illusztráció, 16:9 arányban |
| **Kategóriabadge** | Pl. *Közlemény*, *Rendezvény*, *Fejlesztés*, *Pályázat* |
| **Cím** | Rövid, figyelemfelkeltő főcím (max. 2 sor) |
| **Megjelenés dátuma** | Magyar formátumban: `2025. október 12.` |
| **Rövid leírás** | 2–3 mondatos összefoglaló (excerpt) |
| **„Tovább olvasom" link** | CTA gomb a teljes cikk megnyitásához |

**Viselkedés:**
- Hover-effekt: a kártya emelkedik, a borítókép finoman zoomol.
- Mobilon az oszlopok egymás alá törenek (1 oszlop).
- Tableten 2 oszlopos elrendezés jelenik meg.
- A blokk alatt egy „Összes hír" gomb vezet a teljes hírlista oldalra.

---

### 2.2 Aktuális események – Széles sávos naptár nézet

Az eseményeket bemutató szekció egy **teljes szélességű, prominens sávban** kapott helyet, amely vizuálisan elkülönül a többi tartalomtól.

**Elrendezés és tartalom:**

```
┌─────────────────────────────────────────────────────────────────┐
│  AKTUÁLIS ESEMÉNYEK                           [◀ Hónap ▶]       │
│─────────────────────────────────────────────────────────────────│
│  H   K   Sze  Cs   P   Szo  V                                   │
│  1   2   3    4   [5]  6    7                                    │
│  8   9   10   11   12  13   14                                   │
│  ...                                                            │
│─────────────────────────────────────────────────────────────────│
│  Közelgő rendezvények listája (következő 3–5 esemény)            │
│  [Dátum] – Esemény neve – Helyszín – [Részletek]                 │
└─────────────────────────────────────────────────────────────────┘
```

**Funkcionalitás:**
- A kijelölt napok vizuálisan kiemelve jelennek meg (ponttal vagy háttérszínnel jelölve).
- Egy napra kattintva az aznapi esemény részletei egy felugró panelben (tooltip / modal) jelennek meg.
- A hónapok között előre-hátra lehet navigálni.
- Az eseménylista részben a következő 3–5 esemény listaszerűen is megjelenik, az időrendnek megfelelően.

---

### 2.3 Lábléc (Footer)

A lábléc **négy tartalmi oszlopra** tagolódik, és az oldal minden aloldalán azonos formában jelenik meg.

#### 2.3.1 Gyors linkek

Navigációs hivatkozások a legfontosabb oldalakra:

- Főoldal
- A képzésről
- Hírek és közlemények
- Eseménynaptár
- Képgaléria
- Kapcsolat
- Adatvédelmi tájékoztató
- Impresszum

#### 2.3.2 Közösségi média ikonok

| Platform | Ikon | Link |
|---|---|---|
| **Facebook** | `fb` ikon | Hivatalos Facebook oldal |
| **Instagram** | `ig` ikon | Fotók, események, képzési hírek |

Az ikonok hover-re animálódnak (méret- vagy színváltozás), és új fülön nyitják meg a közösségi média oldalt.

#### 2.3.3 Hivatalos elérhetőségek

```
📍 Cím:        [Intézmény neve], [Utca], [Irányítószám]
📞 Telefon:    +36 XX XXX-XXXX
✉️ E-mail:     info@[intézmény].hu
🕐 Ügyfélfogadás:
   Hétfő–Szerda: 8:00–16:00
   Csütörtök:    8:00–18:00
   Péntek:       8:00–12:00
```

#### 2.3.4 Térkép

- Beágyazott **Google Maps** vagy **OpenStreetMap** iframe, amely az intézmény pontos helyzetét mutatja.
- Az épület helyzetét egy jelölő (pin) emeli ki.
- A térkép interaktív: közelítés/távolítás engedélyezett.
- Egy „Útvonaltervezés" gomb megnyitja a Maps alkalmazást.

---

## 3. Funkciólista – Technikai képességek

### 3.1 Hírmodul

**Leírás:** Dinamikus tartalomkezelő rendszer a közlemények és hírek megjelenítésére.

**Technikai jellemzők:**
- **Kategorizálás:** Minden hírhez egy vagy több kategória rendelhető (pl. *Közlemény*, *Pályázat*, *Fejlesztés*, *Kulturális*, *Sport*, *Szociális*).
- **Dátumozás:** Közzételi dátum és szerkesztési dátum tárolása, megjelenítése.
- **Szűrés és rendezés:** A hírek kategória és dátum szerint szűrhetők a listanézetben.
- **Kereshetőség:** A hírmodul tartalmait a globális kereső indexeli.
- **Archívum:** Korábbi cikkek havi bontásban böngészhetők.
- **Megosztás:** Minden híroldal rendelkezik Open Graph meta tagekkel (Facebook, WhatsApp megosztáshoz).

---

### 3.2 Eseménynaptár

**Leírás:** Interaktív naptár felület a helyi rendezvények és képzési események nyomon követéséhez.

**Technikai jellemzők:**
- **Nézetek:** Havi naptárnézet + listaszerű közelgő esemény megjelenítés.
- **Eseménytípusok:** Színkódolt kategóriák (pl. kék = kulturális, zöld = sport, piros = közmeghallgatás).
- **Esemény részletlap:** Cím, dátum, időpont, helyszín, leírás, esetlegesen regisztrációs link.
- **iCal export:** Az esemény letölthető `.ics` formátumban (Google Calendar, Outlook kompatibilis).
- **Értesítés:** Opcionális email emlékeztető küldése az érdeklődőknek.

---

### 3.3 Képgaléria

**Leírás:** Reszponzív, vizuálisan igényes fotógaléria a képzési eseményekről és közösségi életről.

**Technikai jellemzők:**
- **Reszponzív rácsos nézet:** Masonry (kőfalszerű) vagy egyenletes grid elrendezés.
- **Lightbox effekt:** A képre kattintva teljes képernyős nézet nyílik, sötét háttérrel.
- **Navigáció a Lightboxban:** Előző/következő gombok, billentyűzettel is kezelhetők (←, →, Esc).
- **Galéria albumok:** Képek albumokba csoportosíthatók (pl. *Évnyitó 2024*, *Gyakorlati foglalkozások*).
- **Lazy loading:** A képek csak görgetéskor töltődnek be, gyorsabb oldalbetöltés érdekében.
- **Zoom:** A Lightbox nézetben az egér görgőjével vagy két ujjal (mobilon) közelítés lehetséges.

---

### 3.4 Gyorskereső

**Leírás:** Az oldal teljes tartalmában (hírek, dokumentumok, oldalak, események) kereshetővé teszi az információkat.

**Technikai jellemzők:**
- **Élő keresés (Live Search):** Begépelés közben azonnali találatok jelennek meg legördülő panelben.
- **Találatok típusonként csoportosítva:** Hírek / Oldalak / Események / Dokumentumok.
- **Kiemelés:** A keresett szó a találatokban kiemelve jelenik meg.
- **Kategóriaszűrő:** A keresési eredmények tartalomtípus szerint szűrhetők.
- **Üres találat kezelése:** „Nem találtunk eredményt – Próbáljon más kulcsszót" üzenet jelenik meg.

---

### 3.5 Kapcsolati űrlap

**Leírás:** Közvetlen üzenőfelület az érdeklődők számára az intézmény írásos elérésére.

**Technikai jellemzők:**

**Mezők:**
```
Teljes név*       [                    ]
E-mail cím*       [                    ]
Tárgy*            [ Legördülő lista ▾  ]
Üzenet*           [                    ]
                  [                    ]
                  [                    ]
CAPTCHA           [ Nem vagyok robot ✓ ]
                  [  KÜLDÉS  ]
```

- **Automatikus email:** Az elküldött üzenet azonnal megérkezik az intézmény postaládájába.
- **Visszaigazoló email:** A feladó automatikus visszaigazolást kap a megadott e-mail-címre.
- **Validáció:** Kötelező mezők ellenőrzése küldés előtt, helytelen formátum jelzése.
- **Spam-védelem:** Google reCAPTCHA v3 integráció (láthatatlan, felhasználót nem zavarja).
- **Tárgy kategóriák:** pl. *Általános kérdés*, *Felvételi érdeklődés*, *Pályázat*, *Egyéb*.

---

### 3.6 Akadálymentesítés

**Leírás:** Az oldal megfelel a WCAG 2.1 AA szintű akadálymentességi irányelveknek, különös tekintettel az idősebb korosztályra.

**Elérhető funkciók:**

#### 🔠 Betűméret növelés
- Az oldal fejlécében elérhető `A` / `A+` / `A++` gombsor.
- Három méretlépés: normál → közepes → nagy.
- A beállítás cookie-ban tárolódik, következő látogatáskor is megmarad.

#### 🌓 Nagy kontrasztú mód
- Kapcsoló gomb a fejlécben (Nap/Hold ikon vagy `HC` felirat).
- Aktív módban: fekete háttér, fehér szöveg, sárga kiemelők – erős kontraszt az olvashatóságért.
- Képek nem tűnnek el, de szürkés szűrőt kapnak.

#### ♿ Egyéb akadálymentességi elemek

| Funkció | Leírás |
|---|---|
| **Billentyűzet navigáció** | Az oldal teljes egészében kezelhető egér nélkül |
| **Alt szövegek** | Minden képhez leíró alt text társul |
| **ARIA-jelölések** | Képernyőolvasók számára szemantikus HTML-struktúra |
| **Fókusz-jelzők** | Aktív elemek körül jól látható keret jelenik meg |
| **Szöveg-folyás** | Szövegek 200%-os zoomnál sem veszítik el formázásukat |

---

## 4. Technikai megvalósítás (Stack)

| Terület | Alkalmazott technológia |
|---|---|
| **Frontend keretrendszer** | React + TypeScript |
| **Stílus / UI** | Tailwind CSS |
| **Build eszköz** | Vite |
| **Routing** | React Router v7 (Data mode – `createBrowserRouter`) |
| **Tárhely / Hosztolás** | Netlify – automatikus deploy GitHub repóból |
| **Verziókezelés** | Git + GitHub |
| **Naptár komponens** | FullCalendar / react-big-calendar |
| **Lightbox** | yet-another-react-lightbox |
| **Keresés** | Fuse.js (kliens oldali fuzzy search) |
| **Ikonok** | lucide-react |

### Legnagyobb fejlesztési kihívás

> **A mobilmenü beállítása** – A reszponzív hamburger-menü helyes működésének megvalósítása (nyitás/zárás animáció, kattintáson kívüli bezárás, fókuszkezelés, z-index rétegzés) volt a projekt egyik legösszetettebb feladata.

---

## 5. Feladatmegosztás

### 5.1 Csapattagok és szerepkörök

| Szerepkör | Csapattag | Feladatok |
|---|---|---|
| **Projektmenedzser** | Keresztes Kornél | Határidők kezelése, dokumentáció összeállítása, kapcsolattartás |
| **UI/UX Designer** | Nemetz Levente | Arculat (színek, betűtípusok), drótvázak tervezése, logótervezés |
| **Frontend fejlesztő** | Keresztes Kornél | React szerkezet felépítése, reszponzív megjelenés (mobilbarát nézet) |
| **Tesztelő / QA** | Nemetz Levente | Hibák keresése különböző böngészőkön és mobilokon |
| **PPT készítése** | Nemetz Levente & Keresztes Kornél | A weboldal funkcióit bemutató és „eladó" prezentáció elkészítése |

---

### 5.2 Fejlesztési fázisok

```
Fázis 1 – Alap infrastruktúra
  ├─ Projekt setup (Vite + React + TS + Tailwind)
  ├─ React Router Data mode konfigurálása
  └─ Alaplayout: fejléc, lábléc, navigáció

Fázis 2 – Tartalom modulok
  ├─ Hero szekció
  ├─ Képzés bemutató szekciók
  ├─ Hírek – 3 oszlopos kártya grid
  └─ Eseménynaptár

Fázis 3 – Interaktív funkciók
  ├─ Képgaléria + Lightbox effekt
  ├─ Gyorskereső modul
  └─ Kapcsolati űrlap

Fázis 4 – Reszponzivitás & QA
  ├─ Mobilmenü implementálása ← (legnagyobb kihívás)
  ├─ Keresztböngésző tesztelés (Chrome, Firefox, Safari, Edge)
  └─ Mobil tesztelés különböző képernyőméreteken

Fázis 5 – Élesítés
  ├─ GitHub repó összekötése Netlify-jal
  ├─ Automatikus deploy beállítása
  └─ Domain konfigurálás, HTTPS
```

---

## 6. Megfelelőségi és minőségi követelmények

- **Reszponzivitás:** Mobilra (320px+), tabletre (768px+) és asztali gépekre (1280px+) egyaránt optimalizált.
- **Teljesítmény:** Google PageSpeed Insights pontszám ≥ 85 (mobil és desktop egyaránt).
- **Akadálymentesítés:** WCAG 2.1 AA szintű megfelelés (betűméret váltó, kontrasztos mód).
- **Biztonság:** HTTPS kötelező (Netlify automatikusan biztosítja), form adatok titkosítva.
- **GDPR:** Cookie-kezelési tájékoztató és adatkezelési tájékoztató elhelyezése.

---

*Dokumentum verziója: 1.1 — Készítők: Nemetz Levente, Keresztes Kornél — Utoljára frissítve: 2026. március*
