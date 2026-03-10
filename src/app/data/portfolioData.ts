export interface PortfolioItem {
  slug: string;
  img: string;
  category: string;
  title: string;
  desc: string;
  tags: string[];
  fullDesc: string;
  challenge: string;
  solution: string;
  results: string[];
  duration: string;
  client: string;
  role: string;
  highlights: { label: string; value: string }[];
}

const img1 = "https://images.unsplash.com/photo-1764149635098-17adac6c2e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcXVhbGl0eSUyMGNvbnRyb2wlMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc3MjQ0NzE2M3ww&ixlib=rb-4.1.0&q=80&w=1080";
const img2 = "https://images.unsplash.com/photo-1758685848561-3658f433e6a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMGFuYWx5dGljYWwlMjBjaGVtaXN0cnl8ZW58MXx8fHwxNzcyNTM0ODg1fDA&ixlib=rb-4.1.0&q=80&w=1080";
const img3 = "https://images.unsplash.com/photo-1745921204896-c2011440a4e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaXN0cnklMjBwcm9jZXNzJTIwb3B0aW1pemF0aW9uJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzI1MzQ4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const img4 = "https://images.unsplash.com/photo-1700314040142-3389dd76fd20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWIlMjBkb2N1bWVudGF0aW9uJTIwcmVwb3J0JTIwd3JpdGluZ3xlbnwxfHx8fDE3NzI1MzQ4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080";

export const portfolioData: PortfolioItem[] = [
  {
    slug: "elelmiszeripari-minoseg-ellenorzes",
    img: img1,
    category: "Élelmiszeripar",
    title: "Élelmiszeripari minőségellenőrzési projekt",
    desc: "Komplex élelmiszeripari termékek kémiai és mikrobiológiai vizsgálata, minőségi szabványok auditálása.",
    tags: ["Minőségellenőrzés", "Élelmiszer", "Audit"],
    fullDesc:
      "Egy közepes méretű élelmiszeripari feldolgozóüzem felkérésére átfogó minőségellenőrzési rendszert alakítottam ki, amely lefedi a teljes termelési láncot – a nyersanyag-átvételtől a késztermék-raktározásig. A projekt középpontjában a HACCP-alapú kockázatelemzés megújítása, a laboratóriumi vizsgálati protokollok korszerűsítése és a dolgozói minőségtudat erősítése állt.",
    challenge:
      "Az üzem meglévő minőségellenőrzési rendszere elavult volt: a vizsgálati módszerek nem feleltek meg a legújabb EU-s élelmiszerbiztonsági rendeleteknek (EU 2073/2005/EK), az eredmények dokumentálása papíralapú és töredékes volt, a mikrobiológiai kontamináció kockázata a feldolgozósorok egyes pontjain magasabb volt az elfogadhatónál.",
    solution:
      "Elvégeztem a teljes termelési folyamat helyszíni felmérését, azonosítottam a kritikus szabályozási pontokat (CCP), majd korszerű kémiai és mikrobiológiai vizsgálati módszertant dolgoztam ki. Bevezettük a digitális eredményrögzítő rendszert, és a személyzet számára tematikus oktatásokat tartottam. A laborfolyamatokat akkreditált mintavételi és vizsgálati protokollokra állítottam át.",
    results: [
      "A mikrobiológiai nem-megfelelőségek aránya 68%-kal csökkent a projekt lezárása után 3 hónappal",
      "Az üzem sikeresen teljesítette az éves hatósági felülvizsgálatot, nulla kritikus hiányossággal",
      "A vizsgálati átfutási idő 40%-kal rövidült a digitális dokumentáció bevezetésével",
      "Az összes kritikus szabályozási ponton (CCP) bevezettük a valós idejű monitorozást",
      "A dolgozók minőségügyi tudatosságát mérő belső felmérés eredménye 52%-ról 84%-ra nőtt",
    ],
    duration: "6 hónap",
    client: "Közepes élelmiszeripari feldolgozóüzem (NDA alatt)",
    role: "Vezető minőségügyi tanácsadó és laboratóriumi szakértő",
    highlights: [
      { label: "Iparág", value: "Élelmiszeripar" },
      { label: "Időtartam", value: "6 hónap" },
      { label: "Vizsgálatok száma", value: "340+" },
      { label: "Megtakarítás", value: "~18%" },
    ],
  },
  {
    slug: "gyogyszeripari-analitikai-vizsgalatok",
    img: img2,
    category: "Gyógyszeripar",
    title: "Gyógyszeripari analitikai vizsgálatok",
    desc: "GMP megfelelőségi vizsgálatok, hatóanyag-tartalom meghatározás, stabilitásvizsgálatok koordinálása.",
    tags: ["Analitika", "GMP", "Gyógyszer"],
    fullDesc:
      "Egy hazai generikus gyógyszergyártó cég felkérésére koordináltam a hatóanyag-tartalom meghatározó és stabilitásvizsgálati programjukat, amelynek célja egy új tablettakészítmény európai piacra juttatásának analitikai alátámasztása volt. A projekt szorosan illeszkedett az EMA és az ICH Q1A(R2) stabilitásvizsgálati iránymutatásaihoz.",
    challenge:
      "A gyártó laboratóriuma rendelkezett a szükséges műszerekkel (HPLC, UV-Vis), azonban a validált analitikai módszerek hiányosak voltak, a stabilitásvizsgálati protokoll nem felelt meg az ICH-irányelveknek, és a GMP-dokumentáció több ponton nem volt naprakész. A regisztrációs határidő szoros volt, ezért gyors és pontos beavatkozásra volt szükség.",
    solution:
      "Kidolgoztam és validáltam az HPLC-alapú hatóanyag-tartalom és szennyezőprofil meghatározó módszert (ICH Q2(R1) szerint), felállítottam az accelerált és hosszú távú stabilitásvizsgálati programot, és elvégeztem a szükséges GMP-dokumentációs hiányosságok pótlását. Szorosan együttműködtem a gyár QA és QC csapatával.",
    results: [
      "Sikeres módszervalidáció: a specificitás, linearitás, pontosság és robosztusság valamennyi elfogadási kritériumnak megfelelt",
      "Az accelerált stabilitásvizsgálat (40 °C/75% RH, 6 hónap) alapján a készítmény stabilitása igazolt",
      "A GMP-dokumentáció hiányosságait 8 héten belül pótoltuk, az auditot zero critical finding eredménnyel zártuk",
      "A regisztrációs dossziéhoz szükséges analitikai fejezetek határidőre elkészültek",
      "A gyár belső QC-kapacitása hosszú távon megerősödött a közösen kialakított protokolloknak köszönhetően",
    ],
    duration: "9 hónap",
    client: "Hazai generikus gyógyszergyártó (NDA alatt)",
    role: "Analitikai kémiai szakértő és GMP-tanácsadó",
    highlights: [
      { label: "Iparág", value: "Gyógyszeripar" },
      { label: "Időtartam", value: "9 hónap" },
      { label: "Validált módszerek", value: "4 db" },
      { label: "Audit eredmény", value: "0 kritikus" },
    ],
  },
  {
    slug: "vegyipari-folyamatoptimalizalas",
    img: img3,
    category: "Vegyipar",
    title: "Vegyipari folyamatoptimalizálás",
    desc: "Gyártási folyamatok elemzése, hatékonysági és biztonsági fejlesztések bevezetése, KPI monitoring.",
    tags: ["Optimalizálás", "Vegyipar", "KPI"],
    fullDesc:
      "Egy specialkémiai gyártóüzem termelési vonalának komplex folyamatoptimalizálási projektjét vezettem. A projekt célja a reakcióhozam növelése, a segédanyag-felhasználás csökkentése és a munkabiztonsági kockázatok minimalizálása volt, egy sűrített ütemterv szerint.",
    challenge:
      "A gyártási sor egy kritikus szintézislépésénél a termékhozam következetesen elmaradt a tervezett 82%-os értéktől (átlag: 71%), a mellékreakciók aránya magas volt, és a feldolgozási veszteségek jelentős anyagköltséget okoztak. Emellett két munkabaleseti esemény is jelzett biztonsági hiányosságokat az oldószer-kezelési fázisban.",
    solution:
      "Részletes HAZOP-elemzést végeztem a teljes folyamatra, azonosítottam a hozamveszteséget okozó paraméterszórást (hőmérséklet-ingadozás, reagensadagolás pontossága), és tervezett kísérletsorozattal (DoE) optimáltam a reakciókörülményeket. Párhuzamosan felülvizsgáltam az oldószer-kezelési SOP-okat és bevezettük a szükséges műszaki biztonsági intézkedéseket.",
    results: [
      "A termékhozam 71%-ról 84%-ra emelkedett, meghaladva a tervezett célt",
      "A segédanyag-felhasználás 22%-kal csökkent a reakciókörülmények optimálásával",
      "A munkabalesetek száma 0-ra esett az oldószer-kezelési protokollok megújítása után",
      "Az éves anyagköltség-megtakarítás az ügyfél becslése szerint ~14 millió Ft",
      "A KPI-monitorozó rendszer bevezetése lehetővé tette a folyamatos valós idejű követést",
    ],
    duration: "5 hónap",
    client: "Specialkémiai gyártóvállalat (NDA alatt)",
    role: "Folyamatoptimalizálási szakértő és biztonsági tanácsadó",
    highlights: [
      { label: "Iparág", value: "Vegyipar" },
      { label: "Időtartam", value: "5 hónap" },
      { label: "Hozamnövekedés", value: "+13%" },
      { label: "Költségmegtakarítás", value: "~14M Ft/év" },
    ],
  },
  {
    slug: "laboratoriumi-dokumentacios-rendszer",
    img: img4,
    category: "Dokumentáció",
    title: "Laboratóriumi dokumentációs rendszerek kialakítása",
    desc: "Szabványos eljárásrendek (SOP), mérési protokollok és minőségügyi dokumentumok kidolgozása.",
    tags: ["SOP", "Dokumentáció", "Minőségügy"],
    fullDesc:
      "Egy akkreditációra készülő környezetanalitikai laboratórium teljes dokumentációs rendszerét dolgoztam ki a semmiből. A projekt az MSZ EN ISO/IEC 17025:2018 szabvány követelményei szerint folyt, és lefedett minden szükséges minőségügyi, technikai és eljárási dokumentumot.",
    challenge:
      "A laboratórium korszerű műszerekkel és tapasztalt szakembergárdával rendelkezett, azonban az akkreditációhoz szükséges dokumentációs infrastruktúra teljes egészében hiányzott. A meglévő, ad hoc alapon készített feljegyzések nem feleltek meg az ISO/IEC 17025 formai és tartalmi követelményeinek, és nem volt egységes dokumentumkezelési rendszer.",
    solution:
      "Elvégeztem a gap-analízist (meglévő állapot vs. ISO/IEC 17025 követelmények), majd felépítettem a teljes dokumentumpiramist: minőségügyi kézikönyv, eljárásrendek (SOP), munkautasítások és nyomtatványok szintjén. Kialakítottam a dokumentumkezelési és -felülvizsgálati rendszert, elvégeztem az előzetes belső auditot és koordináltam az akkreditáló testülettel folytatott kommunikációt.",
    results: [
      "A laboratórium sikeresen megkapta a NAT akkreditációt az első értékelési körben",
      "Összesen 47 SOP, 12 eljárásrend és 89 nyomtatvány-sablon készült el",
      "Az előzetes belső audit csak 3 kisebb (minor) eltérést tárt fel, amelyeket a helyszíni értékelés előtt korrigáltunk",
      "A dokumentumkezelési rendszer bevezeti az elektronikus jóváhagyási és felülvizsgálati workflow-t",
      "A laboratórium munkatársai képessé váltak az önálló dokumentumkarbantartásra a projekt során tartott képzések nyomán",
    ],
    duration: "8 hónap",
    client: "Környezetanalitikai laboratórium (NDA alatt)",
    role: "Minőségügyi dokumentációs szakértő",
    highlights: [
      { label: "Iparág", value: "Analitika / Környezet" },
      { label: "Időtartam", value: "8 hónap" },
      { label: "Elkészült dokumentum", value: "148 db" },
      { label: "Akkreditáció", value: "ISO 17025 ✓" },
    ],
  },
];
