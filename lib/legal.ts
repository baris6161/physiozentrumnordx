// Rechtstexte.
//
// Die Datenschutzerklaerung beschreibt den tatsaechlichen Stand der Seite:
// Hosting bei Vercel, cookielose Reichweitenmessung, Formularversand per SMTP,
// Google Maps erst nach ausdruecklicher Einwilligung (Zwei-Klick), Videos und
// Schriften vom eigenen Server. Der alte Duda-Text nannte Cookies, Google
// Analytics und extern geladene Google Fonts, von denen nichts mehr zutrifft.
//
// WICHTIG: Entwurf. Vor dem Livegang von der Praxis bzw. deren
// Datenschutzbeauftragten pruefen und freigeben lassen. Dies ist keine
// Rechtsberatung.

export type LegalBlock =
  | { type: "h"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] };

export const datenschutz: LegalBlock[] = [
  {
    type: "p",
    text: "Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Erklärung beschreibt, welche Daten beim Besuch dieser Website erhoben werden, wozu wir sie verwenden und welche Rechte Sie haben.",
  },

  { type: "h", text: "Verantwortlicher" },
  {
    type: "p",
    text: "Physiotherapie Zentrum Nord, Inhaber Tareck Fares, Voßstr. 1, 30161 Hannover. Telefon 0511 713 03 044, E-Mail info@krankengymnastik-in-hannover.de.",
  },

  { type: "h", text: "Unsere Grundsätze" },
  {
    type: "p",
    text: "Wir erheben nur Daten, die wir tatsächlich brauchen. Wir verkaufen keine Daten, betreiben keine Werbenetzwerke und erstellen keine Nutzerprofile. Die Website setzt von sich aus keine Cookies.",
  },

  { type: "h", text: "Hosting" },
  {
    type: "p",
    text: "Diese Website wird von der Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA betrieben. Vercel verarbeitet die Daten als Auftragsverarbeiter auf Grundlage eines Vertrags nach Artikel 28 DSGVO. Die Auslieferung erfolgt über europäische Serverstandorte. Für Übermittlungen in die USA stützt sich Vercel auf das EU-US Data Privacy Framework sowie auf Standardvertragsklauseln.",
  },

  { type: "h", text: "Server-Logfiles" },
  {
    type: "p",
    text: "Beim Aufruf der Seite werden automatisch technische Daten verarbeitet, die Ihr Browser übermittelt: IP-Adresse, Zeitpunkt der Anfrage, aufgerufene Adresse, übertragene Datenmenge, Browsertyp und Betriebssystem. Diese Daten sind technisch nötig, um die Seite auszuliefern, und dienen der Sicherheit und Fehlersuche. Rechtsgrundlage ist unser berechtigtes Interesse an einem stabilen und sicheren Betrieb, Artikel 6 Absatz 1 Buchstabe f DSGVO. Eine Zusammenführung mit anderen Daten findet nicht statt.",
  },

  { type: "h", text: "Kontakt- und Bewerbungsformular" },
  {
    type: "p",
    text: "Wenn Sie uns über ein Formular schreiben, verarbeiten wir die Angaben, die Sie dort machen:",
  },
  {
    type: "list",
    items: [
      "Kontaktformular: Name, E-Mail-Adresse, optional Telefonnummer, Ihre Nachricht",
      "Bewerbungsformular: Name, E-Mail-Adresse, optional Telefonnummer, Ihre Nachricht und Angaben zur gewünschten Stelle",
    ],
  },
  {
    type: "p",
    text: "Die Angaben werden als E-Mail an unser Postfach info@krankengymnastik-in-hannover.de gesendet und dort gespeichert. Der Versand läuft über den Mailserver unseres Anbieters IONOS SE, Elgendorfer Straße 57, 56410 Montabaur. Rechtsgrundlage ist Artikel 6 Absatz 1 Buchstabe b DSGVO bei Anfragen zu einer Behandlung oder Bewerbung sowie Artikel 6 Absatz 1 Buchstabe f DSGVO bei sonstigen Anliegen. Für Bewerbungen gilt zusätzlich § 26 BDSG.",
  },
  {
    type: "p",
    text: "Bitte senden Sie uns über das Formular keine Angaben zu Ihrer Gesundheit. Solche Daten sind nach Artikel 9 DSGVO besonders geschützt und ein Formular im Internet ist dafür nicht der richtige Weg. Für die Terminvereinbarung genügen Name und Erreichbarkeit, alles Weitere besprechen wir persönlich oder am Telefon.",
  },
  {
    type: "p",
    text: "Wir löschen Ihre Anfrage, sobald sie erledigt ist und keine gesetzlichen Aufbewahrungsfristen entgegenstehen. Bewerbungsunterlagen löschen wir spätestens sechs Monate nach Abschluss des Verfahrens, sofern Sie einer längeren Aufbewahrung nicht zugestimmt haben.",
  },

  { type: "h", text: "Schutz vor Formular-Missbrauch" },
  {
    type: "p",
    text: "Um automatisierte Massenzusendungen abzuwehren, begrenzen wir die Zahl der Übermittlungen je IP-Adresse innerhalb eines kurzen Zeitfensters. Die IP-Adresse wird dabei nur flüchtig im Arbeitsspeicher verarbeitet und nicht dauerhaft gespeichert. Rechtsgrundlage ist unser berechtigtes Interesse an der Abwehr von Missbrauch, Artikel 6 Absatz 1 Buchstabe f DSGVO.",
  },

  { type: "h", text: "Reichweiten- und Leistungsmessung" },
  {
    type: "p",
    text: "Wir nutzen Vercel Web Analytics und Vercel Speed Insights, um zu sehen, wie oft Seiten aufgerufen werden und wie schnell sie laden. Beide Dienste arbeiten ohne Cookies und ohne Wiedererkennung über Websites hinweg. Es werden keine Profile gebildet und keine Daten an Dritte zu Werbezwecken weitergegeben. Die Auswertung erfolgt zusammengefasst und ohne Personenbezug. Rechtsgrundlage ist unser berechtigtes Interesse an einer bedarfsgerechten Gestaltung der Website, Artikel 6 Absatz 1 Buchstabe f DSGVO.",
  },

  { type: "h", text: "Kartendarstellung" },
  {
    type: "p",
    text: "Im Kontaktbereich bieten wir eine Karte von Google Maps an. Diese wird nicht automatisch geladen. Sie sehen zunächst nur einen Hinweis mit einer Schaltfläche. Erst wenn Sie darauf klicken, wird eine Verbindung zu Google aufgebaut. Dabei werden Ihre IP-Adresse und Angaben zu Ihrem Gerät an Google übertragen und Cookies gesetzt. Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Eine Übermittlung in die USA ist möglich.",
  },
  {
    type: "p",
    text: "Rechtsgrundlage ist Ihre Einwilligung nach Artikel 6 Absatz 1 Buchstabe a DSGVO in Verbindung mit § 25 Absatz 1 TDDDG. Damit Sie nicht bei jedem Besuch erneut klicken müssen, speichert Ihr Browser Ihre Zustimmung lokal auf Ihrem Gerät. Sie können die Einwilligung jederzeit widerrufen, indem Sie die Websitedaten in Ihren Browsereinstellungen löschen. Für die Zukunft bleibt der Widerruf dann wirksam, die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung bleibt unberührt.",
  },

  { type: "h", text: "Videos" },
  {
    type: "p",
    text: "Die Videos auf den Geräteseiten liegen auf unserem eigenen Server und werden direkt von dort ausgeliefert. Es ist kein Videoportal eingebunden, es werden dabei keine Daten an Dritte übertragen und keine Cookies gesetzt.",
  },

  { type: "h", text: "Schriftarten" },
  {
    type: "p",
    text: "Die verwendeten Schriften werden von unserem eigenen Server geladen. Beim Aufruf der Seite wird keine Verbindung zu Google Fonts oder einem anderen Schriftenanbieter hergestellt.",
  },

  { type: "h", text: "Links zu sozialen Netzwerken" },
  {
    type: "p",
    text: "Im Fußbereich finden Sie Verweise auf unsere Profile bei Facebook und Instagram. Dabei handelt es sich um einfache Links, nicht um eingebundene Schaltflächen oder Zählpixel. Es werden erst dann Daten an den jeweiligen Anbieter übertragen, wenn Sie den Link anklicken und die Seite des Anbieters aufrufen.",
  },

  { type: "h", text: "Speicherung im Browser" },
  {
    type: "p",
    text: "Diese Website setzt keine Cookies. Gespeichert wird lediglich ein einzelner Eintrag im lokalen Speicher Ihres Browsers, falls Sie dem Laden der Karte zugestimmt haben. Dieser Eintrag enthält keine personenbezogenen Daten, verlässt Ihr Gerät nicht und kann von Ihnen jederzeit über die Browsereinstellungen gelöscht werden.",
  },

  { type: "h", text: "Verschlüsselung" },
  {
    type: "p",
    text: "Die Website wird ausschließlich verschlüsselt über HTTPS ausgeliefert. Sie erkennen das am Schlosssymbol in der Adresszeile Ihres Browsers. Damit können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.",
  },

  { type: "h", text: "Ihre Rechte" },
  { type: "p", text: "Ihnen stehen folgende Rechte zu:" },
  {
    type: "list",
    items: [
      "Auskunft darüber, welche Daten wir über Sie verarbeiten (Artikel 15 DSGVO)",
      "Berichtigung unrichtiger Daten (Artikel 16 DSGVO)",
      "Löschung Ihrer Daten (Artikel 17 DSGVO)",
      "Einschränkung der Verarbeitung (Artikel 18 DSGVO)",
      "Herausgabe Ihrer Daten in einem gängigen Format (Artikel 20 DSGVO)",
      "Widerspruch gegen Verarbeitungen, die wir auf ein berechtigtes Interesse stützen (Artikel 21 DSGVO)",
      "Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Artikel 7 Absatz 3 DSGVO)",
    ],
  },
  {
    type: "p",
    text: "Für die Ausübung genügt eine formlose Nachricht an info@krankengymnastik-in-hannover.de oder ein Anruf unter 0511 713 03 044.",
  },

  { type: "h", text: "Beschwerderecht" },
  {
    type: "p",
    text: "Wenn Sie der Ansicht sind, dass wir Ihre Daten nicht rechtmäßig verarbeiten, können Sie sich bei einer Aufsichtsbehörde beschweren. Für uns zuständig ist die Landesbeauftragte für den Datenschutz Niedersachsen, Prinzenstraße 5, 30159 Hannover.",
  },

  { type: "h", text: "Keine automatisierte Entscheidungsfindung" },
  {
    type: "p",
    text: "Eine automatisierte Entscheidungsfindung einschließlich Profilbildung findet nicht statt.",
  },

  { type: "h", text: "Änderungen dieser Erklärung" },
  {
    type: "p",
    text: "Wir passen diese Erklärung an, wenn sich die Website oder die Rechtslage ändert. Es gilt jeweils die hier veröffentlichte Fassung.",
  },
];

export const impressum = {
  intro: "Angaben nach §5 TMG",
  responsible: "Physiotherapeut Tareck Fares",
  contactLines: [
    "Voßstr. 1",
    "30161 Hannover",
  ],
  taxId: "26/112/10076",
  liability: [
    {
      h: "Haftung für Inhalte",
      p: "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach den §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
    },
    {
      h: "Haftung für Links",
      p: "Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
    },
    {
      h: "Urheberrecht",
      p: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
    },
  ],
};
