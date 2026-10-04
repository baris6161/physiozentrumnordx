// Alle Inhalte der Website. Texte bewusst menschlich und ohne Gedankenstriche.

const IMG = "/images/";

export type Focus = "left-top" | "center";
export type Fit = "cover" | "contain";

export interface Service {
  slug: string; // bestehender SEO-Slug, 1:1 erhalten
  name: string;
  cat: string;
  img: string;
  focus: Focus; // Praxisfotos mit Logo oben links: "left-top"
  fit: Fit;
  card: string; // Kurztext im Leistungs-Grid
  lead: string; // Einleitung auf der Detailseite
  body: string[];
  benefits: string[];
  device: string | null;
  related: string[]; // Slugs verwandter Leistungen
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "physiotherapie",
    name: "Physiotherapie",
    cat: "Kasse und Selbstzahler",
    img: IMG + "behandlungsraum.jpg",
    focus: "center",
    fit: "cover",
    card: "Persönlich abgestimmte Behandlung Ihres Bewegungsapparats, vom ersten Gespräch bis zur Reha.",
    lead: "Wir behandeln Ihren Bewegungsapparat gezielt und persönlich. Vom ersten Gespräch über die Untersuchung bis zur Reha begleiten wir Sie Schritt für Schritt.",
    body: [
      "Physiotherapie fasst verschiedene Methoden zusammen, mit denen wir Beschwerden am Bewegungsapparat gezielt behandeln. Dazu gehören Bewegungs und Trainingstherapie, Manualtherapie und das Training auf der Vibrationsplatte.",
      "Beim ersten Termin nehmen wir uns Zeit für ein ausführliches Gespräch und eine genaue Untersuchung. Daraus entsteht Ihr persönlicher Behandlungsplan. Kurzfristig lindern wir Schmerzen, langfristig arbeiten wir an mehr Beweglichkeit, Kraft und Lebensqualität.",
    ],
    benefits: [
      "Weniger Schmerzen und mehr Beweglichkeit",
      "Aktive und passive Bewegungstherapie",
      "Bessere Durchblutung und angeregter Stoffwechsel",
      "Vorbeugung und Rehabilitation",
    ],
    device: null,
    related: ["krankengymnastik", "manualtherapie", "massage"],
    metaTitle: "Physiotherapie in Hannover | Physiotherapie Zentrum Nord",
    metaDescription:
      "Klassische Physiotherapie in Hannover List. Mit gezielter Krankengymnastik und einem geschulten Team behandeln wir Ihr Anliegen zielgerichtet.",
  },
  {
    slug: "krankengymnastik",
    name: "Krankengymnastik",
    cat: "Kassenleistung",
    img: IMG + "sprossenwand.jpg",
    focus: "center",
    fit: "cover",
    card: "Bewährte Therapie und Reha bei akuten Bewegungseinschränkungen und in der Genesung.",
    lead: "Krankengymnastik hilft bei akuten Bewegungseinschränkungen und begleitet Sie zuverlässig durch die Reha.",
    body: [
      "Krankengymnastik und Reha kommen in fast jeder medizinischen Fachrichtung zum Einsatz, von der Orthopädie über die Neurologie bis zur Traumatologie. Wir behandeln akute Bewegungseinschränkungen und unterstützen Sie in der Genesung.",
      "Ob Vorbeugung, Geriatrie, Rückbildung oder Wiederherstellung nach Unfall und Operation. Unser Team baut Ihre Beweglichkeit, Kraft und Geschicklichkeit Schritt für Schritt wieder auf.",
    ],
    benefits: [
      "Für Orthopädie, Neurologie und Traumatologie",
      "Sturzvorbeugung und Geriatrie",
      "Rückbildung und Beckenboden",
      "Reha nach Operation oder Unfall",
    ],
    device: null,
    related: ["physiotherapie", "manualtherapie", "vibrationsplatten-training"],
    metaTitle: "Krankengymnastik und Reha in Hannover | Physiotherapie Zentrum Nord",
    metaDescription:
      "Krankengymnastik und Reha in Hannover List bei akuten Bewegungseinschränkungen und in der Genesung. Von Orthopädie bis Neurologie.",
  },
  {
    slug: "manualtherapie",
    name: "Manualtherapie",
    cat: "Kassenleistung",
    img: IMG + "manualtherapie-raum.jpg",
    focus: "center",
    fit: "cover",
    card: "Gezielte Untersuchung mit den Händen und sanfte Mobilisation von Gelenken, Muskeln und Nerven.",
    lead: "Mit den Händen finden wir die Ursache und mobilisieren Gelenke, Muskeln und Nerven sanft und gezielt.",
    body: [
      "In der Manualtherapie untersuchen wir Sie ausführlich mit den Händen und erarbeiten eine Vermutung zur Ursache Ihrer Beschwerden. Danach behandeln wir gezielt das betroffene Gelenk, den Muskel oder den Nerv.",
      "Blockierte Gelenke lösen wir mit sanften Techniken. Überbewegliche Gelenke stabilisieren wir mit passenden Übungen. So bringen wir das Zusammenspiel von Gelenken, Nerven und Muskeln wieder in Einklang.",
    ],
    benefits: [
      "Mobilisation blockierter Gelenke",
      "Bei Arthrose und Bandscheibenbeschwerden",
      "Lindert Kopfschmerzen",
      "Stabilisiert überbewegliche Gelenke",
    ],
    device: "Manuthera 242 von Lojer, die weltweit erste Behandlungsliege mit zwei synchronisierten Motoren.",
    related: ["physiotherapie", "krankengymnastik", "massage"],
    metaTitle: "Manualtherapie in Hannover | Physiotherapie Zentrum Nord",
    metaDescription:
      "Manualtherapie in Hannover List. Wir finden mit den Händen die Ursache und mobilisieren Gelenke, Muskeln und Nerven sanft und gezielt.",
  },
  {
    slug: "massage",
    name: "Massage",
    cat: "Rezept und Selbstzahler",
    img: IMG + "behandlungsraum-fenster.jpg",
    focus: "center",
    fit: "cover",
    card: "Wirksame medizinische Massagen gegen Verspannungen in Rücken und Nacken.",
    lead: "Unsere medizinischen Massagen lösen Verspannungen in Rücken und Nacken und bringen Ihre Muskulatur zur Ruhe.",
    body: [
      "Massagen gehören zu den ältesten Heilmethoden. Bei uns führen sie ausgebildete Fachkräfte durch. Sie lösen verspannte Muskelpartien und bringen Durchblutung und Stoffwechsel in Schwung.",
      "Ob klassische Massage, Reflexzonenmassage oder Bindegewebsmassage, wir wählen die Technik, die zu Ihnen passt. Auf Wunsch als medizinische Behandlung oder als entspannende Wellnessleistung.",
    ],
    benefits: [
      "Löst muskuläre Verspannungen",
      "Bringt Durchblutung und Stoffwechsel in Schwung",
      "Klassische Massage und Reflexzonenmassage",
      "Auch als Wellnessleistung",
    ],
    device: null,
    related: ["physiotherapie", "schroepftherapie", "manualtherapie"],
    metaTitle: "Medizinische Massage in Hannover | Physiotherapie Zentrum Nord",
    metaDescription:
      "Medizinische Massage in Hannover List gegen Verspannungen in Rücken und Nacken. Klassische Massage, Reflexzonen und Bindegewebe, auch als Wellness.",
  },
  {
    slug: "stosswellentherapie-hannover",
    name: "Stoßwellentherapie",
    cat: "Selbstzahler und Privatrezept",
    img: IMG + "EMS_Swiss_DolorClast_Master_Deivice_Cart_side-1920w.jpg",
    focus: "center",
    fit: "contain",
    card: "Radiale Stoßwellen wecken die Selbstheilung. Mit dem Swiss DolorClast von EMS.",
    lead: "Radiale Stoßwellen bringen mechanische Druckwellen ins Gewebe und wecken die Selbstheilungskräfte Ihres Körpers.",
    body: [
      "Bei der radialen Stoßwellentherapie leiten wir mechanische Druckwellen über die Haut ins Gewebe. Die stärkere Durchblutung verbessert den Stoffwechsel und aktiviert die Selbstheilungskräfte Ihres Körpers.",
      "Eine Sitzung dauert nur wenige Minuten. Meist reichen ein bis sechs Anwendungen in kurzen Abständen. Ganz ohne Operation und ohne Medikamente.",
    ],
    benefits: [
      "Bei Fersensporn und Achillesbeschwerden",
      "Bei Tennis und Golferellenbogen",
      "Bei Triggerpunkten und Faszienspannung",
      "Nur wenige Minuten pro Sitzung",
    ],
    device: "Swiss DolorClast von EMS, professionelle radiale Stoßwellentechnik.",
    related: ["lasertherapie-hannover", "physiotherapie", "massage"],
    metaTitle: "Stoßwellentherapie in Hannover | Physiotherapie Zentrum Nord",
    metaDescription:
      "Stoßwellentherapie in Hannover mit dem Swiss DolorClast von EMS. Radiale Stoßwellen bei Fersensporn, Tennisellenbogen und Triggerpunkten.",
  },
  {
    slug: "lasertherapie-hannover",
    name: "Lasertherapie",
    cat: "Selbstzahler und Privat",
    img: IMG + "Laser_1-1920w.JPG",
    focus: "center",
    fit: "cover",
    card: "Hochleistungslaser der Klasse 4. Entzündungshemmend, tief wirksam und ohne Medikamente.",
    lead: "Unser Hochleistungslaser wirkt entzündungshemmend und tief im Gewebe, ganz ohne Medikamente.",
    body: [
      "Mit dem K-Laser Cube, einem der stärksten Therapielaser seiner Klasse, behandeln wir entzündliche, verschleißbedingte und traumatische Beschwerden an Muskeln, Sehnen und Gelenken.",
      "Das gebündelte, energiereiche Licht wirkt entzündungshemmend und fördert die Durchblutung bis in tiefe Schichten. Schmerzfrei, ohne Medikamente und ohne die damit verbundenen Nebenwirkungen.",
    ],
    benefits: [
      "Bei Bandscheiben und Gelenkbeschwerden",
      "Bei Sehnen und Muskelerkrankungen",
      "Zwei Wellenlängen für tiefe Wirkung",
      "Ohne Medikamente und Nebenwirkungen",
    ],
    device: "Chattanooga LightForce XLi und K-Laser Cube, zwei Hochleistungslaser der Klasse 4.",
    related: ["stosswellentherapie-hannover", "physiotherapie", "schroepftherapie"],
    metaTitle: "Lasertherapie in Hannover | Physiotherapie Zentrum Nord",
    metaDescription:
      "Lasertherapie in Hannover mit Hochleistungslaser der Klasse 4. Entzündungshemmend und tief wirksam bei Gelenk, Sehnen und Bandscheibenbeschwerden.",
  },
  {
    slug: "schroepftherapie",
    name: "Schröpftherapie",
    cat: "Selbstzahler",
    img: IMG + "IMG_0317-1920w.jpg",
    focus: "center",
    fit: "cover",
    card: "Ein traditionelles Heilverfahren, kombiniert mit Massage und wohltuender Infrarotwärme.",
    lead: "Ein altes Heilverfahren im modernen Gewand. Wir verbinden Schröpfen mit Massage und wohltuender Infrarotwärme.",
    body: [
      "Das Schröpfen gehört zu den ältesten Heilverfahren. Durch Unterdruck weiten sich die Gefäße, die Durchblutung kommt in Gang und der Stoffwechsel wird angeregt.",
      "Unsere modernen Schröpfgläser verbinden das klassische Schröpfen mit Massage und Infrarotwärme. So erweitern wir die Wirkung spürbar.",
    ],
    benefits: [
      "Löst Muskelverspannungen",
      "Bei Rücken, Muskel und Gelenkschmerzen",
      "Regt Durchblutung und Stoffwechsel an",
      "Kombiniert mit Wärmetherapie",
    ],
    device: "Achedaway, Schröpfen kombiniert mit Massage und Infrarotwärme.",
    related: ["massage", "lasertherapie-hannover", "physiotherapie"],
    metaTitle: "Schröpftherapie in Hannover | Physiotherapie Zentrum Nord",
    metaDescription:
      "Schröpftherapie in Hannover, kombiniert mit Massage und Infrarotwärme. Löst Verspannungen und regt Durchblutung und Stoffwechsel an.",
  },
  {
    slug: "vibrationsplatten-training",
    name: "Vibrationsplatten Training",
    cat: "Selbstzahler und KG-Gerät",
    img: IMG + "cardioraum.jpg",
    focus: "center",
    fit: "cover",
    card: "Bis zu 97 Prozent Muskelaktivierung. Gelenkschonend und sehr effektiv.",
    lead: "Auf der Vibrationsplatte aktivieren Sie in kurzer Zeit fast Ihre gesamte Muskulatur, und das ganz schonend für die Gelenke.",
    body: [
      "Beim Training auf der Vibrationsplatte schwingen die Platten seitenwechselnd und lösen reflexartige Muskelkontraktionen aus, 1.800 bis 3.000 pro Minute. Dabei aktivieren Sie bis zu 97 Prozent Ihrer Muskelfasern.",
      "Das gelenkschonende Ganzkörpertraining kräftigt die Tiefenmuskulatur, beugt Rückenbeschwerden vor und passt für jedes Alter. Als Selbstzahler oder als KG-Geräteleistung.",
    ],
    benefits: [
      "Kräftigt die Tiefenmuskulatur",
      "1.800 bis 3.000 Kontraktionen pro Minute",
      "Beugt Rückenbeschwerden vor",
      "Für jedes Alter geeignet",
    ],
    device: "Galileo Fit mit Personal-Trainer-Display und BodyVibe Gravity 17, seitenwechselndes Vibrationstraining.",
    related: ["krankengymnastik", "physiotherapie", "stosswellentherapie-hannover"],
    metaTitle: "Vibrationsplatten Training in Hannover | Physiotherapie Zentrum Nord",
    metaDescription:
      "Vibrationsplatten Training in Hannover. Bis zu 97 Prozent Muskelaktivierung, gelenkschonend und effektiv, für jedes Alter.",
  },
  {
    slug: "faszienbehandlung",
    name: "Faszienbehandlung",
    cat: "Selbstzahler",
    img: IMG + "fasciq-faszientools.png",
    focus: "center",
    fit: "contain",
    card: "Gezielte Behandlung verklebter Faszien mit professionellen Werkzeugen aus Edelstahl.",
    lead: "Verklebte Faszien lösen wir gezielt mit professionellen Werkzeugen aus Edelstahl, für mehr Beweglichkeit und weniger Schmerz.",
    body: [
      "Faszien sind das bindegewebige Netz, das Muskeln, Gelenke und Organe umhüllt. Verkleben oder verhärten sie, entstehen Bewegungseinschränkungen und Schmerzen. Mit der instrumentengestützten Faszienbehandlung lösen wir diese Verklebungen gezielt.",
      "Unsere FASCIQ Werkzeuge aus chirurgischem Edelstahl übertragen feine Rückmeldungen aus dem Gewebe direkt in unsere Hand. So spüren wir verhärtete Stellen genau und behandeln sie kontrolliert, von sanftem Gleiten bis zur gezielten Mobilisation.",
    ],
    benefits: [
      "Löst verklebte und verhärtete Faszien",
      "Bei Verspannungen und Bewegungseinschränkungen",
      "Regt Durchblutung und Regeneration an",
      "Profi-Werkzeuge aus chirurgischem Edelstahl",
    ],
    device: "FASCIQ Faszientools aus chirurgischem Edelstahl.",
    related: ["massage", "manualtherapie", "physiotherapie"],
    metaTitle: "Faszienbehandlung in Hannover | Physiotherapie Zentrum Nord",
    metaDescription:
      "Instrumentengestützte Faszienbehandlung in Hannover mit professionellen Edelstahl-Werkzeugen. Löst verklebte Faszien bei Verspannungen und Bewegungseinschränkungen.",
  },
  {
    slug: "waermetherapie",
    name: "Wärmetherapie",
    cat: "Selbstzahler",
    img: IMG + "tdp-lampe-cq32.png",
    focus: "center",
    fit: "contain",
    card: "Wohltuende Tiefenwärme mit der TDP-Mineralwärmelampe, lockert Muskeln und fördert die Durchblutung.",
    lead: "Wohltuende Tiefenwärme, die Muskeln lockert und die Durchblutung anregt, gern auch als Vorbereitung oder Ergänzung zu anderen Behandlungen.",
    body: [
      "Bei der Wärmetherapie arbeiten wir mit einer TDP-Lampe, einer Ferninfrarot-Mineralwärmelampe. Ihre Strahlungsplatte ist mit einer Mischung aus 33 Mineralien beschichtet, die beim Erwärmen eine sanfte, tief wirkende Wärme abgibt.",
      "Die Wärme erreicht tiefere Gewebeschichten, regt die Durchblutung an und löst Verspannungen. Wir setzen sie gern begleitend ein, zum Beispiel vor einer Massage oder Manualtherapie, und in der Tradition der chinesischen Medizin als moderne Form der Wärmeanwendung.",
    ],
    benefits: [
      "Wohltuende, tief wirkende Wärme",
      "Lockert Muskeln und löst Verspannungen",
      "Regt die lokale Durchblutung an",
      "Angenehm als Vorbereitung oder Ergänzung",
    ],
    device: null,
    related: ["massage", "schroepftherapie", "manualtherapie"],
    metaTitle: "Wärmetherapie in Hannover | Physiotherapie Zentrum Nord",
    metaDescription:
      "Wärmetherapie in Hannover mit TDP-Mineralwärmelampe. Wohltuende Tiefenwärme, lockert Muskeln und fördert die Durchblutung.",
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

// Spezialgeraete-Spotlight auf der Startseite. Bilder werden einheitlich
// (gleiche Box, object-contain auf Weiss) dargestellt, damit alle Karten
// gleich hoch sind und Ueberschriften auf einer Linie liegen.
export interface Device {
  slug: string; // eigener Geraete-Slug, Seite liegt unter /geraete/<slug>
  name: string;
  tag: string;
  img: string;
  focus: Focus;
  fit: Fit; // "contain" fuer freigestellte Herstellerfotos, "cover" fuer Praxisaufnahmen
  ownPage: boolean; // eigene Detailseite unter /geraete/<slug>?
  desc: string; // Kurztext auf der Karte
  lead: string; // Einleitung auf der Geraeteseite
  body: string[];
  benefits: string[];
  serviceSlug: string; // Leistung, zu der das Geraet gehoert
  metaTitle: string;
  metaDescription: string;
}

// Neuere/Flaggschiff-Geraete zuerst, bewaehrte danach (bleiben erhalten).
export const devices: Device[] = [
  {
    slug: "manuthera-242",
    name: "Manuthera 242",
    tag: "Behandlungsliege von Lojer",
    img: IMG + "manuthera-242.jpg",
    focus: "center",
    fit: "contain",
    ownPage: true,
    desc: "Die weltweit erste Liege mit zwei synchronisierten Motoren. Für dreidimensionale Mobilisation, Traktion und sanfte Dekompression.",
    lead: "Die Manuthera 242 von Lojer ist eine Behandlungsliege, die sich in drei Ebenen bewegt und dadurch Techniken erlaubt, die auf einer starren Liege nicht möglich sind.",
    body: [
      "Zwei synchronisierte Motoren bewegen Kopf und Rumpfteil unabhängig voneinander. Dadurch können wir Ihre Wirbelsäule gezielt in Rotation, Seitneigung und Traktion bringen, während Sie entspannt liegen bleiben.",
      "Für Sie bedeutet das vor allem eines: Sie müssen sich während der Behandlung nicht aktiv halten oder umlagern. Wir arbeiten mit der Liege statt gegen Ihr Körpergewicht und können so auch bei akuten Beschwerden sehr sanft vorgehen.",
      "Wir setzen die Manuthera vor allem in der Manualtherapie ein, bei Nacken und Rückenbeschwerden sowie zur Entlastung der Bandscheiben.",
    ],
    benefits: [
      "Dreidimensionale Mobilisation der Wirbelsäule",
      "Sanfte Traktion und Entlastung",
      "Entlastet Bandscheiben und Facettengelenke",
      "Auch bei akuten Beschwerden einsetzbar",
    ],
    serviceSlug: "manualtherapie",
    metaTitle: "Manuthera 242 in Hannover | Physiotherapie Zentrum Nord",
    metaDescription:
      "Behandlung auf der Manuthera 242 von Lojer in Hannover List. Dreidimensionale Mobilisation, Traktion und sanfte Entlastung der Wirbelsäule.",
  },
  {
    slug: "hydrojet",
    name: "HydroJet",
    tag: "Wasser-Massagebett",
    img: IMG + "hydrojet.jpg",
    focus: "center",
    fit: "cover",
    ownPage: true,
    desc: "Wärme und Wasserdruck-Massage für tiefe Entspannung, ganz ohne sich auskleiden zu müssen.",
    lead: "Auf dem HydroJet massieren warme Wasserstrahlen Ihren Rücken, ohne dass Sie mit dem Wasser in Berührung kommen. Sie bleiben dabei vollständig bekleidet.",
    body: [
      "Sie legen sich auf eine wasserdichte Liegefläche. Darunter bewegen sich Düsen, die warmes Wasser mit einstellbarem Druck gegen die Folie strahlen. Die Massage erreicht so den ganzen Rücken, vom Nacken bis zu den Beinen.",
      "Druck, Tempo und Zonen lassen sich einstellen. Wer empfindlich ist, bekommt eine sanfte Wellenmassage, wer tiefere Verspannungen hat, eine kräftigere Anwendung. Die Wärme entspannt die Muskulatur zusätzlich.",
      "Der HydroJet eignet sich gut als Vorbereitung auf eine manuelle Behandlung, weil die Muskulatur danach deutlich besser löslich ist. Viele nutzen ihn auch einfach zum Abschalten.",
    ],
    benefits: [
      "Vollständig bekleidet, kein Umziehen nötig",
      "Wärme und Wasserdruck in einer Anwendung",
      "Druck und Intensität individuell einstellbar",
      "Gute Vorbereitung auf manuelle Behandlungen",
    ],
    serviceSlug: "massage",
    metaTitle: "HydroJet Wassermassage in Hannover | Physiotherapie Zentrum Nord",
    metaDescription:
      "HydroJet Wasser-Massagebett in Hannover List. Warme Wasserstrahl-Massage für den Rücken, ganz ohne sich auskleiden zu müssen.",
  },
  {
    slug: "galileo-fit",
    name: "Galileo Fit",
    tag: "Seitenwechselndes Vibrationstraining",
    img: IMG + "galileo-fit.jpg",
    focus: "center",
    fit: "cover",
    ownPage: true,
    desc: "Seitenwechselnde Vibration löst reflexartige Muskelkontraktionen aus. Mit Personal-Trainer-Display.",
    lead: "Beim Galileo Fit kippt die Trainingsplatte seitenwechselnd um eine Mittelachse, ähnlich dem Bewegungsmuster beim Gehen. Der Körper antwortet darauf mit reflexartigen Muskelkontraktionen.",
    body: [
      "Anders als bei rein auf und ab schwingenden Platten arbeitet der Galileo mit einer Wippbewegung. Das Becken wird abwechselnd angehoben und gesenkt, wodurch die Muskulatur reflektorisch gegenarbeitet, viele hundert Mal pro Minute.",
      "Über das Display stellen wir Frequenz und Dauer passend zu Ihrem Ziel ein. Niedrige Frequenzen nutzen wir für Koordination und Beweglichkeit, höhere für Kraft.",
      "Eine Einheit dauert nur wenige Minuten. Das Training ist gelenkschonend und eignet sich damit auch für Menschen, denen klassisches Gerätetraining zu belastend ist.",
    ],
    benefits: [
      "Seitenwechselnde Bewegung ähnlich dem Gehen",
      "Reflexartige Muskelaktivierung",
      "Frequenz und Dauer individuell einstellbar",
      "Kurze, gelenkschonende Einheiten",
    ],
    serviceSlug: "vibrationsplatten-training",
    metaTitle: "Galileo Vibrationstraining in Hannover | Physiotherapie Zentrum Nord",
    metaDescription:
      "Galileo Fit Vibrationstraining in Hannover List. Seitenwechselnde Vibration für reflexartige Muskelaktivierung, kurz und gelenkschonend.",
  },
  {
    slug: "swiss-dolorclast",
    name: "Swiss DolorClast",
    tag: "Radiale Stoßwellentherapie von EMS",
    img: IMG + "EMS_Swiss_DolorClast_Master_Deivice_Cart_side-1920w.jpg",
    focus: "center",
    fit: "contain",
    ownPage: true,
    desc: "Radiale Druckwellen regen die Durchblutung an und wecken die Selbstheilungskräfte im Gewebe.",
    lead: "Der Swiss DolorClast von EMS erzeugt radiale Druckwellen, die wir über ein Handstück durch die Haut ins Gewebe leiten.",
    body: [
      "Ein Projektil wird im Handstück beschleunigt und trifft auf einen Applikator. Die dabei entstehende Druckwelle breitet sich im Gewebe aus und erreicht so auch tiefer liegende Strukturen wie Sehnenansätze.",
      "Die stärkere Durchblutung verbessert den Stoffwechsel in der behandelten Region und aktiviert die Selbstheilungskräfte. Typische Einsatzgebiete sind Fersensporn, Tennis und Golferellenbogen sowie hartnäckige Triggerpunkte.",
      "Eine Sitzung dauert nur wenige Minuten. Meist sind ein bis sechs Anwendungen in kurzen Abständen nötig, ohne Operation und ohne Medikamente.",
    ],
    benefits: [
      "Bei Fersensporn und Achillesbeschwerden",
      "Bei Tennis und Golferellenbogen",
      "Löst hartnäckige Triggerpunkte",
      "Nur wenige Minuten pro Sitzung",
    ],
    serviceSlug: "stosswellentherapie-hannover",
    metaTitle: "Swiss DolorClast Stoßwelle in Hannover | Physiotherapie Zentrum Nord",
    metaDescription:
      "Radiale Stoßwellentherapie mit dem Swiss DolorClast von EMS in Hannover List. Bei Fersensporn, Tennisellenbogen und Triggerpunkten.",
  },
  {
    slug: "k-laser-cube",
    name: "K-Laser Cube",
    tag: "Hochleistungslaser",
    img: IMG + "Laser_1-1920w.JPG",
    focus: "center",
    fit: "contain",
    ownPage: true,
    desc: "Laserlicht dringt tief ins Gewebe ein und unterstützt Heilung und Schmerzlinderung.",
    lead: "Der K-Laser Cube arbeitet mit mehreren Wellenlängen gleichzeitig und erreicht dadurch unterschiedlich tief liegende Gewebeschichten.",
    body: [
      "Laserlicht wird im Gewebe von den Zellen aufgenommen und regt dort den Stoffwechsel an. Die Durchblutung steigt, der Abtransport von Entzündungsstoffen verbessert sich.",
      "Die Anwendung ist schmerzfrei. Sie spüren an der behandelten Stelle meist nur eine angenehme Wärme. Dauer und Leistung stellen wir je nach Region und Beschwerdebild ein.",
      "Wir setzen den Laser bei Sehnen und Gelenkbeschwerden ein, bei Verletzungen der Muskulatur und begleitend nach Operationen.",
    ],
    benefits: [
      "Schmerzfreie Anwendung",
      "Mehrere Wellenlängen für verschiedene Gewebetiefen",
      "Bei Sehnen und Gelenkbeschwerden",
      "Begleitend nach Verletzung und Operation",
    ],
    serviceSlug: "lasertherapie-hannover",
    metaTitle: "K-Laser Cube Lasertherapie in Hannover | Physiotherapie Zentrum Nord",
    metaDescription:
      "Hochleistungs-Lasertherapie mit dem K-Laser Cube in Hannover List. Schmerzfrei, bei Sehnen und Gelenkbeschwerden sowie nach Verletzungen.",
  },
  {
    slug: "chattanooga-lightforce-xli",
    name: "Chattanooga LightForce XLi",
    tag: "Hochleistungslaser",
    img: IMG + "chattanooga-lightforce-xli.jpg",
    focus: "center",
    fit: "contain",
    ownPage: true,
    desc: "Leistungsstarke Lasertherapie für tiefer liegende Strukturen und größere Behandlungsflächen.",
    lead: "Der LightForce XLi von Chattanooga ist ein Hochleistungslaser, mit dem sich auch größere Areale und tiefer liegende Strukturen in kurzer Zeit behandeln lassen.",
    body: [
      "Durch die höhere Leistung bringen wir in derselben Zeit mehr Lichtenergie ins Gewebe als mit schwächeren Geräten. Das verkürzt die Behandlungsdauer spürbar, gerade bei großen Regionen wie dem unteren Rücken.",
      "Das Handstück wird während der Anwendung über die Haut geführt. Sie spüren dabei eine deutliche, angenehme Wärme. Die Behandlung bleibt schmerzfrei.",
      "Zusammen mit dem K-Laser Cube deckt der XLi ein breites Spektrum ab, von kleinen punktuellen Beschwerden bis zu großflächigen Behandlungen.",
    ],
    benefits: [
      "Hohe Leistung für tiefer liegende Strukturen",
      "Kurze Behandlungszeiten auch bei großen Arealen",
      "Schmerzfreie Anwendung",
      "Ergänzt den K-Laser Cube",
    ],
    serviceSlug: "lasertherapie-hannover",
    metaTitle: "Chattanooga LightForce XLi in Hannover | Physiotherapie Zentrum Nord",
    metaDescription:
      "Lasertherapie mit dem Chattanooga LightForce XLi in Hannover List. Hohe Leistung für tiefe Strukturen und große Behandlungsflächen.",
  },
  {
    slug: "bodyvibe-gravity-17",
    name: "BodyVibe Gravity 17",
    tag: "Vibrationsplatten Training",
    img: IMG + "bodyvibe-gravity17.jpg",
    focus: "center",
    fit: "cover",
    // Keine eigene Seite: der BodyVibe wird auf der Leistungsseite
    // Vibrationsplatten Training mitbehandelt, die Karte verlinkt dorthin.
    ownPage: false,
    desc: "Ganzkörper-Vibrationstraining für Tiefenmuskulatur, Stabilität und Durchblutung.",
    lead: "Auf dem BodyVibe Gravity 17 trainieren Sie den ganzen Körper über Vibration.",
    body: [],
    benefits: [],
    serviceSlug: "vibrationsplatten-training",
    metaTitle: "",
    metaDescription: "",
  },
];

export const deviceBySlug = (slug: string) =>
  devices.find((d) => d.slug === slug);

/** Geraete mit eigener Detailseite unter /geraete/<slug>. */
export const devicesWithPage = devices.filter((d) => d.ownPage);

/** Ziel der Geraetekarte: eigene Seite, sonst die zugehoerige Leistung. */
export const deviceHref = (d: Device) =>
  d.ownPage ? `/geraete/${d.slug}` : `/${d.serviceSlug}`;

export interface GalleryItem {
  img: string;
  alt: string;
}

export const gallery: GalleryItem[] = [
  { img: IMG + "empfang-hero.jpg", alt: "Empfang und Wartebereich" },
  { img: IMG + "behandlungsraum.jpg", alt: "Behandlungsraum für Physiotherapie und Massage" },
  { img: IMG + "behandlungsraum-fenster.jpg", alt: "Heller Behandlungsraum am Fenster" },
  { img: IMG + "cardioraum.jpg", alt: "Cardio- und Vibrationstraining" },
  { img: IMG + "trainingsraum.jpg", alt: "Trainingsraum mit Seilzuggeräten" },
  { img: IMG + "sprossenwand.jpg", alt: "Sprossenwand und Pinofit Seilzüge" },
  { img: IMG + "kletterwand.jpg", alt: "Kletterwand für Koordination und Kraft" },
  { img: IMG + "beinpresse.jpg", alt: "Beinpresse im Trainingsbereich" },
  { img: IMG + "kraftraum.jpg", alt: "Kraftraum mit Hanteln und Kettlebells" },
];

export const heroImage = {
  img: IMG + "empfang-hero.jpg",
  alt: "Empfang und Wartebereich im Physiotherapie Zentrum Nord in Hannover",
};

export const steps = [
  { n: "1", t: "Kontakt aufnehmen", d: "Rufen Sie uns an oder senden Sie eine Terminanfrage" },
  { n: "2", t: "Termin und Rezept", d: "Wir vereinbaren passende Zeiten. Bringen Sie bei Bedarf Ihr Rezept und ein Handtuch mit." },
  { n: "3", t: "Behandlung starten", d: "Nach Erstgespräch und Untersuchung beginnen wir mit Ihrem persönlichen Plan." },
];

export const patient = [
  {
    t: "Terminpraxis",
    d: "Wir bestellen Sie zu festen Zeiten ein, so vermeiden Sie lange Wartezeiten. Bitte kommen Sie pünktlich, das Zeitfenster ist exklusiv für Sie reserviert. Am besten vereinbaren Sie gleich die ersten drei Termine.",
  },
  {
    t: "Terminabsagen",
    d: "Bitte sagen Sie vereinbarte Termine mindestens 24 Stunden vorher ab. Andernfalls müssen wir die Leistung nach § 615 BGB unter Umständen privat in Rechnung stellen.",
  },
  {
    t: "Handtuch",
    d: "Bitte bringen Sie zu jedem Termin ein großes Handtuch mit. Andernfalls berechnen wir eine kleine Gebühr für ein Leihhandtuch.",
  },
  {
    t: "Rezept",
    d: "Die Behandlung muss innerhalb von 14 Tagen ab Ausstellungsdatum beginnen. Bei BG-Rezepten und nach einer Klinikentlassung innerhalb von 7 Tagen. Rezepte sind nicht an das Quartal gebunden.",
  },
  {
    t: "Zuzahlung",
    d: "Gesetzlich Versicherte leisten nach § 32 SGB V eine Zuzahlung von 10 Euro pro Rezept plus 10 Prozent des Rezeptwertes. Ausgenommen sind unter anderem Kinder und Jugendliche unter 18 Jahren, Befreite und BG-Patienten.",
  },
];

export interface Job {
  type: string;
  title: string;
  desc: string;
  points: string[];
}

// Nur noch Physiotherapeuten, in Vollzeit oder als Minijob.
export const jobs: Job[] = [
  {
    type: "Vollzeit, Teilzeit oder Minijob",
    title: "Physiotherapeut:in (m/w/d)",
    desc: "Sie arbeiten gern eigenverantwortlich in einem kleinen, herzlichen Team? Bei uns erwartet Sie eine gründliche Einarbeitung, echte Weiterbildung und eine sehr gute, verhandelbare Bezahlung. Ganz gleich, ob Sie schon Erfahrung mitbringen, idealerweise mit Manueller Therapie, oder gerade in den Beruf starten.",
    points: [
      "Moderne Ausstattung mit Laser, Stoßwelle, HydroJet und Vibrationstraining",
      "Breites Leistungsspektrum und abwechslungsreiche Behandlungen",
      "Faire, verhandelbare Bezahlung und geregelte Zeiten",
      "Vollzeit, Teilzeit oder Minijob, ganz nach Ihrer Lebenssituation",
    ],
  },
];
