import { ReactNode } from "react";

export interface ServiceData {
  slug: string;
  title: string;
  shortDesc: string;
  heroDesc: string;
  tags: string[];
  color: string;
  details: {
    whatIs: string;
    whatWeDo: string[];
    benefits: string[];
    process: { step: string; title: string; desc: string }[];
    faq: { q: string; a: string }[];
  };
}

export const servicesData: ServiceData[] = [
  {
    slug: "analitikai-vizsgalatok",
    title: "Analitikai vizsgálatok",
    shortDesc: "Alapvető és speciális laboratóriumi mérések.",
    heroDesc:
      "Modern műszeres analitikai módszerekkel végzett, pontosan dokumentált laboratóriumi mérések élelmiszer-, gyógyszer- és vegyipari alkalmazásokhoz.",
    tags: ["Kémiai analízis", "Műszeres mérés", "Mintalaboratórium", "GC-MS", "HPLC"],
    color: "#BBFF63",
    details: {
      whatIs:
        "Az analitikai vizsgálatok során anyagok kémiai összetételét, koncentrációját és minőségi paramétereit határozzuk meg korszerű műszeres és klasszikus analitikai eljárásokkal. A vizsgálatok kiterjednek nyersanyagokra, félkésztermékekre és késztermékekre egyaránt.",
      whatWeDo: [
        "Kvantitatív és kvalitatív kémiai elemzések elvégzése",
        "GC, HPLC, UV-Vis spektrofotometriás mérések",
        "Nehézfém- és szennyezőanyag-meghatározás",
        "Fizikai-kémiai paraméterek mérése (pH, sűrűség, viszkozitás)",
        "Nyomelem-analízis és ionkromatográfia",
        "Eredmények kiértékelése és dokumentálása",
      ],
      benefits: [
        "Gyors és pontos eredmények rövid határidővel",
        "Akkreditált módszerekre épülő, jogszabálynak megfelelő eljárások",
        "Részletes mérési jegyzőkönyvek és eredménylap",
        "Személyre szabott vizsgálati program",
        "Konzultáció az eredmények értelmezésében",
      ],
      process: [
        { step: "01", title: "Igényfelmérés", desc: "Megbeszéljük a vizsgálandó anyagokat és a szükséges paramétereket." },
        { step: "02", title: "Mintavétel", desc: "Szabályos mintavétel vagy beküldött minták átvétele és nyilvántartása." },
        { step: "03", title: "Vizsgálat", desc: "Analitikai mérések elvégzése validált módszerekkel." },
        { step: "04", title: "Kiértékelés", desc: "Eredmények statisztikai kiértékelése és dokumentálása." },
        { step: "05", title: "Átadás", desc: "Részletes eredménylap és konzultációs lehetőség." },
      ],
      faq: [
        { q: "Mennyi idő alatt kapom meg az eredményeket?", a: "Az elvégzett vizsgálat típusától függően általában 2–5 munkanapot vesz igénybe. Sürgős esetben expressz szolgáltatás is igénybe vehető." },
        { q: "Milyen mintamennyiség szükséges?", a: "A szükséges mintamennyiség vizsgálattípusonként eltér. Általában 50–200 g/ml elegendő a legtöbb analitikai méréshez." },
        { q: "Az eredmények alkalmasak hatósági beadványhoz?", a: "Igen, a vizsgálatok akkreditált módszereken alapulnak és a kiadott dokumentumok hatósági beadványokban felhasználhatók." },
      ],
    },
  },
  {
    slug: "minoseg-ellenorzes",
    title: "Minőségellenőrzés",
    shortDesc: "Termékek kémiai összetételének vizsgálata.",
    heroDesc:
      "Átfogó minőségellenőrzési rendszerek kialakítása és működtetése, a termék életciklus minden fázisában, az ipari szabványoknak megfelelően.",
    tags: ["ISO 9001", "GMP", "HACCP", "Megfelelőség", "Audit"],
    color: "#BBFF63",
    details: {
      whatIs:
        "A minőségellenőrzés a gyártási folyamatok és termékek minőségi paramétereinek szisztematikus vizsgálatát jelenti. Célja a szabványoktól és specifikációktól való eltérések korai felismerése, a reklamációk megelőzése és a jogszabályi megfelelőség biztosítása.",
      whatWeDo: [
        "Bejövő anyagok és késztermékek minőségvizsgálata",
        "Gyártásközi mintavétel és ellenőrzés",
        "Kémiai összetétel és fizikai tulajdonságok vizsgálata",
        "Jogszabályi megfelelőség ellenőrzése (ISO, GMP, HACCP)",
        "Belső auditok levezetése és riportálása",
        "Korrekciós intézkedések és CAPA tervek kidolgozása",
      ],
      benefits: [
        "Termékminőség folyamatos javítása",
        "Reklamációk és visszahívások megelőzése",
        "Hatósági előírásoknak való megfelelés garantálása",
        "Gyártási veszteségek csökkentése",
        "Ügyfélbizalom és márkaérték növelése",
      ],
      process: [
        { step: "01", title: "Auditálás", desc: "Jelenlegi minőségbiztosítási rendszer feltérképezése és értékelése." },
        { step: "02", title: "Tervkészítés", desc: "Testreszabott ellenőrzési és mintavételi terv kidolgozása." },
        { step: "03", title: "Megvalósítás", desc: "Minőségellenőrzési eljárások bevezetése és dokumentálása." },
        { step: "04", title: "Monitoring", desc: "Folyamatos nyomon követés és eltérések kezelése." },
        { step: "05", title: "Riportálás", desc: "Időszakos jelentések és fejlesztési javaslatok." },
      ],
      faq: [
        { q: "Milyen iparágakban van tapasztalata?", a: "Elsősorban az élelmiszer-, gyógyszer- és vegyiparban, de tapasztalatom kiterjed a kozmetikai és vegyészeti ágazatokra is." },
        { q: "Tud segíteni ISO-tanúsítvány megszerzésében?", a: "Igen, segítek a szükséges dokumentációs rendszer kialakításában és az előzetes belső auditok elvégzésében." },
        { q: "Milyen rendszerességgel javasolt a minőségellenőrzés?", a: "Ez iparágonként és terméktípusonként változó, de általában negyedéves ellenőrzés és éves audit javasolt." },
      ],
    },
  },
  {
    slug: "vegyipari-folyamatok",
    title: "Vegyipari folyamatok felügyelete",
    shortDesc: "Gyártási lépések ellenőrzése és optimalizálása.",
    heroDesc:
      "Vegyipari gyártási folyamatok szakszerű felügyelete, technológiai optimalizálás és biztonságos üzemeltetés támogatása.",
    tags: ["Folyamatirányítás", "Optimalizálás", "Biztonság", "Technológia"],
    color: "#BBFF63",
    details: {
      whatIs:
        "A vegyipari folyamatok felügyelete a gyártási lépések műszaki-kémiai ellenőrzését, a technológiai paraméterek optimalizálását és a biztonságos üzemeltetés biztosítását foglalja magában. A szaktudás segítségével csökkenthető az energiafelhasználás, javítható a termékhozam és megelőzhetők a veszélyes incidents-ek.",
      whatWeDo: [
        "Technológiai folyamatok feltérképezése és elemzése",
        "Kritikus folyamatparaméterek azonosítása és monitorozása",
        "Folyamat-optimalizálás hozam és hatékonyság növelés céljából",
        "Biztonsági kockázatok értékelése (HAZOP, FMEA)",
        "Üzemeltetési utasítások és SOP-ok kidolgozása",
        "Operátorok és technikusok szakmai támogatása",
      ],
      benefits: [
        "Gyártási hatékonyság és termékhozam növelése",
        "Energiafelhasználás és hulladék csökkentése",
        "Üzembiztonsági kockázatok minimalizálása",
        "Szabályozói előírások teljesítése",
        "Gépi állásidők és meghibásodások csökkentése",
      ],
      process: [
        { step: "01", title: "Helyszíni felmérés", desc: "Az üzem és a jelenlegi folyamatok részletes megismerése." },
        { step: "02", title: "Elemzés", desc: "Szűk keresztmetszetek és optimalizálási lehetőségek azonosítása." },
        { step: "03", title: "Javaslat", desc: "Fejlesztési terv kidolgozása prioritásokkal és határidőkkel." },
        { step: "04", title: "Implementálás", desc: "Változások bevezetésének szakmai felügyelete." },
        { step: "05", title: "Utánkövetés", desc: "Eredmények értékelése és finomhangolás." },
      ],
      faq: [
        { q: "Mekkora üzemet tud kezelni?", a: "Kis pilot-léptékű laboroktól egészen középüzemi gyártósorokig van tapasztalatom, elsősorban vegyipari és élelmiszeripari környezetben." },
        { q: "Milyen gyorsan lehet eredményeket elérni?", a: "Egyszerűbb optimalizálások akár 4–8 héten belül mérhető javulást hozhatnak. Komplexebb átalakítások 3–6 hónapot igényelnek." },
        { q: "Szükséges-e az üzem leállítása?", a: "Törekszünk minimalizálni az üzemzavarokat. Sok esetben az optimalizálás futó termelés mellett végrehajtható." },
      ],
    },
  },
  {
    slug: "laboratoriumi-dokumentacio",
    title: "Laboratóriumi dokumentáció",
    shortDesc: "Jegyzőkönyvek, riportok és eljárásrendek készítése.",
    heroDesc:
      "Szabványos laboratóriumi dokumentáció kidolgozása – SOP-ok, mérési protokollok, vizsgálati riportok és minőségügyi nyilvántartások.",
    tags: ["SOP", "Eljárásrendek", "Riportok", "GLP", "Nyilvántartás"],
    color: "#BBFF63",
    details: {
      whatIs:
        "A precíz laboratóriumi dokumentáció az akkreditáció, a megfelelőség és az átlátható működés alapköve. Magában foglalja a szabványos eljárásrendek (SOP), vizsgálati módszertanok, kalibrálási dokumentumok és vizsgálati riportok kidolgozását, amelyek megfelelnek a GLP, ISO és egyéb ipari előírásoknak.",
      whatWeDo: [
        "Szabványos eljárásrendek (SOP) megírása és felülvizsgálata",
        "Vizsgálati módszertanok és protokollok kidolgozása",
        "Mérési és kalibrálási nyilvántartások vezetése",
        "Vizsgálati riportok és tanúsítványok készítése",
        "Minőségügyi kézikönyvek és szabályzatok szerkesztése",
        "Dokumentumkezelési rendszer kialakítása",
      ],
      benefits: [
        "Akkreditációs és auditkövetelmények maradéktalan teljesítése",
        "Folyamatok reprodukálhatóságának és nyomon követhetőségének biztosítása",
        "Munkatársak egységes munkavégzésének támogatása",
        "Hatósági ellenőrzésekre való felkészültség",
        "Tudásmenedzsment és intézményi memória megőrzése",
      ],
      process: [
        { step: "01", title: "Igényfelmérés", desc: "Meglévő dokumentáció áttekintése, hiányosságok azonosítása." },
        { step: "02", title: "Tervezés", desc: "Dokumentumstruktúra és sablonrendszer kialakítása." },
        { step: "03", title: "Elkészítés", desc: "Dokumentumok megírása a vonatkozó szabványok alapján." },
        { step: "04", title: "Jóváhagyás", desc: "Belső felülvizsgálat, szükséges módosítások átvezetése." },
        { step: "05", title: "Bevezetés", desc: "Dokumentumok érvénybe helyezése és munkatársak tájékoztatása." },
      ],
      faq: [
        { q: "Milyen formátumban szállítja a dokumentumokat?", a: "Word, PDF és Excel formátumban, az ügyfél igényeinek megfelelő sablonnal. Elektronikus dokumentumkezelő rendszerbe való integráció is lehetséges." },
        { q: "Megfelel az elkészített dokumentáció a hatósági előírásoknak?", a: "Igen, minden dokumentumot az aktuális hazai és EU-s jogszabályokhoz, valamint a vonatkozó ISO, GLP és GMP szabványokhoz igazítunk." },
        { q: "Mennyi idő alatt lehet kész egy SOP csomag?", a: "Egy átlagos laboratórium SOP csomagjának elkészítése 3–6 hetet vesz igénybe a folyamatok összetettségétől függően." },
      ],
    },
  },
  {
    slug: "fejlesztesi-tamogatas",
    title: "Fejlesztési és beruházási támogatás",
    shortDesc: "Új technológiák bevezetésének szakmai támogatása.",
    heroDesc:
      "Laboratóriumi és vegyipari fejlesztési projektek szakértői irányítása – a beruházástervezéstől a technológia sikeres bevezetéséig.",
    tags: ["Innováció", "Beruházás", "Technológia", "Projektmenedzsment"],
    color: "#BBFF63",
    details: {
      whatIs:
        "A fejlesztési és beruházási támogatás keretében szakmai tanácsadást nyújtok új laboratóriumi eszközök, gyártási technológiák és eljárások bevezetéséhez. A szolgáltatás lefedi a szükségesség-elemzéstől a kivitelezési felügyeletig és az üzembe helyezésig tartó teljes folyamatot.",
      whatWeDo: [
        "Technológiai szükségletelemzés és feasibility study",
        "Berendezés- és technológia-kiválasztás szakmai támogatása",
        "Beruházási javaslatok, cost-benefit elemzések",
        "Szállítói tárgyalások és műszaki specifikációk készítése",
        "Telepítés és üzembe helyezés felügyelete",
        "Validálás, minősítés (IQ/OQ/PQ) koordinálása",
      ],
      benefits: [
        "Megalapozott beruházási döntések szakmai háttérrel",
        "Időben és költségkereten belüli projektvégrehajtás",
        "Technológiai kockázatok korai azonosítása és kezelése",
        "Gyorsabb megtérülés az optimális eszközválasztás révén",
        "Hatósági és szabványkövetelményeknek megfelelő bevezetés",
      ],
      process: [
        { step: "01", title: "Igényelemzés", desc: "Jelenlegi helyzet felmérése és fejlesztési igények pontosítása." },
        { step: "02", title: "Lehetőségek feltárása", desc: "Technológiai alternatívák értékelése és javaslattétel." },
        { step: "03", title: "Tervezés", desc: "Projekt-ütemterv, erőforrástervezés, kockázatkezelés." },
        { step: "04", title: "Megvalósítás", desc: "Beruházás kivitelezésének szakmai felügyelete." },
        { step: "05", title: "Átadás", desc: "Validálás, dokumentálás, munkatársak betanítása." },
      ],
      faq: [
        { q: "Miben különbözik a szolgáltatása egy általános tanácsadótól?", a: "Nem csupán stratégiai javaslatokat adok, hanem aktívan részt veszek a megvalósításban is – a lab-padtól a papírmunkáig mindent lefedve." },
        { q: "Tud segíteni EU-s pályázatoknál?", a: "Igen, a fejlesztési projekt szakmai tartalmának kidolgozásában és a műszaki dokumentáció összeállításában tudok segíteni." },
        { q: "Mennyibe kerül egy beruházási projekt kísérése?", a: "A díjazás projektmérettől és a bevonódás mértékétől függ. Ingyenes konzultáció keretében személyre szabott ajánlatot készítek." },
      ],
    },
  },
];
