
export type Language = 'de' | 'en';

export const translations = {
  de: {
    nav: {
      home: 'Home',
      about: 'Vita',
      calendar: 'Kalender',
      media: 'Medien',
      lessons: 'Unterricht',
      contact: 'Kontakt'
    },
    hero: {
      subtitle: 'Mezzosopran'
    },
    about: {
      title: 'Vita',
      bio: "Die österreichische Mezzosopranistin Janine Gruber war in der Spielzeit 2025/26 am NEST – Neue Staatsoper Wien als Tisbe (Aschenputtel/ G. Rossini) sowie als Cover für die Rollen Kardinälin/ 1. Drillingsleutant/ 1. Drillingsskelett (Musketiere! / S. Schwab) zu erleben. Weitere Bühnenerfahrungen sammelte sie am Schlosstheater Schönbrunn, wo sie Partien wie Hänsel (Hänsel und Gretel/ E. Humperdinck), Ciesca (Gianni Schicchi/ G. Puccini) und La Suora Infermiera (Suor Angelica/ G. Puccini) gestaltete.\n\nAuf dem Konzertpodium arbeitete sie unter anderem mit Alfred Eschwé und der Beethoven Philharmonie Baden im Schlosstheater Schönbrunn sowie mit Tom Gröger und der Donau Philharmonie Stockerau zusammen. Wertvolle künstlerische Erfahrungen sammelt sie zudem als Stipendiatin der Yehudi Menuhin Stiftung Live Music Now, für die sie regelmäßig konzertiert.\n\nSeit 2018 studiert Janine Gruber an der Universität für Musik und darstellende Kunst Wien (MDW), wo sie ihr Bachelorstudium im Fach Gesang mit Auszeichnung abschloss und derzeit das Masterstudium Musikdramatische Darstellung bei Km.Sgr.in Edith Lienbacher, Roland Schwab und Hartmut Keil absolviert. Ihren ersten Unterricht nahm sie am Tiroler Landeskonservatorium; weitere prägende Impulse verdankt sie der Zusammenarbeit mit Künstlerpersönlichkeiten wie Jennifer Larmore, Edith Wiens und Karlheinz Hanser.\n\nJanine Gruber ist mehrfache Preisträgerin des Wettbewerbes Prima la musica. 2024 war sie zudem Finalistin bei der Osaka International Music Competition sowie beim Tiroler Klassik Sängerpreis.",
      education: 'Ausbildung',
      coaches: 'Coachings',
      competitions: 'Wettbewerbe',
      roles: 'Aufgeführte Rollen',
      studiedRoles: 'Studierte Rollen',
      repertoire: 'Repertoire',
      resumeData: {
        education: [
          { 
            years: "2024 - HEUTE", 
            title: "Master Musikdramatische Darstellung", 
            institution: "Universität für Musik und darstellende Kunst Wien", 
            details: "Klasse: Roland Schwab, Hartmut Keil, Km.Sgr.in Edith Lienbacher" 
          },
          { 
            years: "2018 - 2024", 
            title: "Bachelor of Arts mit Auszeichnung", 
            institution: "Universität für Musik und darstellende Kunst Wien", 
            details: "Klasse: Km.Sgr.in Edith Lienbacher" 
          },
          { 
            years: "2016 - 2018", 
            title: "Vorbereitungsstudium Gesang", 
            institution: "Tiroler Landeskonservatorium" 
          }
        ],
        coaches: ["Jennifer Larmore", "Prof. Dr. Edith Wiens", "Univ.-Prof. Karlheinz Hanser"],
        competitions: [
          "2024, Finalistin, Osaka International Music Competition",
          "2024, Finalistin, Tiroler Klassik Sängerpreis"
        ],
        roles: [
          "Hänsel (gekürzte Fassung), Hänsel und Gretel, E. Humperdinck",
          "Ciesca, Gianni Schicchi, G. Puccini",
          "La Suora Infermiera, Suor Angelica, G. Puccini",
          "Tisbe (Deutsch, gekürzte Fassung), Aschenputtel, G. Rossini"
        ],
        studied: [
          "Orfeo, Orfeo ed Euridice, C. W. Gluck",
          "Kardinälin/1. Drillingsleutant/1. Drillingsskelett, Musketiere, S. Schwab",
          "Annina, La Traviata, G. Verdi"
        ]
      }
    },
    teaching: {
      title: 'Gesangsunterricht Wien / Online',
      subtitle: 'Opernsängerin & Vocal Coach',
      intro: 'Du möchtest deine Stimme besser kennenlernen oder gezielt daran arbeiten? Du hast eine Aufnahmeprüfung, auf die du dich vorbereiten möchtest? Oder bist auf der Suche nach einem neuen Hobby?',
      offer: 'Ich biete individuellen Gesangsunterricht für Anfänger:innen und Fortgeschrittene an – egal ob du einfach gerne singst oder dich auf eine Aufnahmeprüfung vorbereitest.',
      focusTitle: 'Im Unterricht arbeiten wir an:',
      focusItems: [
        'Vorbereitung auf Aufnahmeprüfungen (wurde in Wien, München, Salzburg aufgenommen)',
        'gesunder Stimmtechnik',
        'Atem & Körperarbeit',
        'Klang & Ausdruck',
        'Freude am Singen!'
      ],
      footnote: 'Ich bin Opernsängerin und bilde mich laufend im Bereich Stimmtraining weiter (u.a. Estill Voice Training Level 1 & 2).',
      info: '📍 Wien / auch online möglich',
      price: '💰 50€ / 60 Minuten',
      trial: '✨ Probestunde möglich',
      cta: 'Freue mich von dir zu hören!',
      bookingTitle: 'Termin buchen',
      bookingSubtitle: 'Wählen Sie einfach einen Termin direkt im Kalender:',
      bookingButton: 'Termine öffnen'
    },
    calendar: {
      title: 'Kalender',
      upcoming: 'Kommende Termine',
      past: 'Vergangene Termine',
      detailsBtn: 'Details',
      resumeData: {
        upcoming: [
          {
            date: "11.05.2026",
            isoDate: "2026-05-11",
            time: "19:00",
            title: "Junge Stimmen im Ehrbar Saal – Studierende von Edith Lienbacher",
            description: "Lieder- und Arienabend",
            location: "Ehrbar Saal, Mühlgasse 30, 1040 Wien",
            details: "Am Klavier: Sayuri Hirano",
            link: "https://www.mdw.ac.at/veranstaltung/?v=59736&g=43106"
          },
          {
            date: "28.05.2026",
            isoDate: "2026-05-28",
            time: "19:00",
            title: "Szenenabend – Studierende von Roland Schwab",
            location: "Anny Felbermayer Probebühne, Penzingerstraße 7, 1140 Wien"
          },
          {
            date: "30.05.2026",
            isoDate: "2026-05-30",
            time: "18:00",
            title: "Finale, 2. Hedda Urbani Gesangswettbewerb",
            location: "Musikverein Wien",
            link: "https://musikverein.at/konzert/?id=0010eedb"
          }
        ],
        past: [
          {
            date: "25. – 27. Jan. 2026",
            isoDate: "2026-01-27",
            title: "G. Rossini: Oper, Animiert: Aschenputtel (Tisbe)",
            location: "NEST – Neue Staatsoper, Wien",
            details: "Musikalische Leitung: Stephen Hopkins | Regie: Christiane Lutz"
          },
          {
            date: "3. – 21. Dez. 2025",
            isoDate: "2025-12-21",
            title: "S. Schwab: Musketiere! (Kardinälin / 1. Drillingsleutant / 1. Drillingsskelett – Cover)",
            location: "NEST – Neue Staatsoper, Wien",
            details: "Musikalische Leitung: Dan Kurland | Regie: David Bösch",
            link: "https://www.wiener-staatsoper.at"
          },
          {
            date: "13. Nov. 2024",
            isoDate: "2024-11-13",
            title: "Konzert mit Beethoven Philharmonie Baden",
            location: "Schlosstheater Schönbrunn, Wien",
            details: "Musikalische Leitung: Alfred Eschwé"
          },
          {
            date: "09. Nov. 2024",
            isoDate: "2024-11-09",
            title: "Donau Philharmonie Stockerau Herbstkonzert",
            location: "Veranstaltungszentrum Stockerau / Großer Saal",
            details: "Musikalische Leitung: Tom Gröger"
          },
          {
            date: "21. – 25. März 2025",
            isoDate: "2025-03-25",
            title: "G. Puccini: Suor Angelica (La Suora Infermiera)",
            location: "Schlosstheater Schönbrunn, Wien",
            details: "Musikalische Leitung: Hartmut Keil | Regie: Nastasia Griese"
          },
          {
            date: "22. März 2025",
            isoDate: "2025-03-22",
            title: "G. Puccini: Gianni Schicchi (Ciesca)",
            location: "Schlosstheater Schönbrunn, Wien",
            details: "Musikalische Leitung: Hartmut Keil | Regie: Helen Malkowsky"
          },
          {
            date: "10. – 14. Dez. 2024",
            isoDate: "2024-12-14",
            title: "E. Humperdinck: Hänsel und Gretel (Hänsel)",
            location: "Schlosstheater Schönbrunn, Wien",
            details: "Musikalische Leitung: Daniel Linton-France | Regie: Robert Simma"
          }
        ]
      }
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Get in Touch',
      formName: 'Name',
      formEmail: 'E-Mail',
      formMessage: 'Nachricht',
      formSend: 'Senden'
    },
    media: {
      title: 'Medien',
      videos: 'Videos',
      stagePhotos: 'Bühnenfotos',
      portraits: 'Portraits',
      comingSoon: 'In Kürze verfügbar'
    },
    footer: {
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      allRightsReserved: 'Alle Rechte vorbehalten',
      role: 'Mezzosopran & Vocal Coach',
      legal: {
        tmg: 'Angaben gemäß § 5 TMG',
        address: 'Wien, Österreich',
        contact: 'Kontakt',
        email: 'E-Mail',
        disclaimer: 'Haftungsausschluss',
        disclaimerText: 'Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.',
        privacyTitle: 'Datenschutz',
        privacyText: 'Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis.',
        formTitle: 'Kontaktformular',
        formText: 'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.',
        imprintFull: `
Impressum

Angaben gemäß § 5 TMG
Janine Gruber
Märzstraße 144
1140 Wien
Österreich

E-Mail: gruber.janine@gmx.net

Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
Janine Gruber
Märzstraße 144
1140 Wien
Österreich

EU-Streitschlichtung
Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
https://ec.europa.eu/consumers/odr/

Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
`,
        privacyFull: `
Datenschutzerklärung
1. Datenschutz auf einen Blick
Allgemeine Hinweise
Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
Datenerfassung auf dieser Website
Wer ist verantwortlich für die Datenerfassung auf dieser Website?
Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
Wie erfassen wir Ihre Daten?
Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
Daten handeln, die Sie in ein Kontaktformular eingeben.
Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-
Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit
des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
Wofür nutzen wir Ihre Daten?
Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge
geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote,
Bestellungen oder sonstige Auftragsanfragen verarbeitet.
Welche Rechte haben Sie bezüglich Ihrer Daten?
Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
Analyse-Tools und Tools von Drittanbietern
Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor
allem mit sogenannten Analyseprogrammen.
Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden
Datenschutzerklärung.
2. Hosting
Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
Externes Hosting
Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden,
werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe
und sonstige Daten, die über eine Website generiert werden, handeln.
Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten
Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung
von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im
Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner
Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
Wir setzen folgende(n) Hoster ein:
Vercel Inc.
440 N Barranca Ave #4133
Covina, CA 91723
USA
Auftragsverarbeitung
Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes
geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der
gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren
Weisungen und unter Einhaltung der DSGVO verarbeitet.
3. Allgemeine Hinweise und Pflichtinformationen
Datenschutz
Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
dieser Datenschutzerklärung.
Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
und zu welchem Zweck das geschieht.
Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
möglich.
Hinweis zur verantwortlichen Stelle
Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
Janine Gruber
Märzstraße 144, 1140 Wien
E-Mail: gruber.janine@gmx.net
Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.)
entscheidet.
Speicherdauer
Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser
Website
Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf
Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung
personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art.
49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in
Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich
auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre
Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese
zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.
Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f
DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden
Absätzen dieser Datenschutzerklärung informiert.
Empfänger von personenbezogenen Daten
Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei
ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich.
Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer
Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten
an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe
haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen
Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über
gemeinsame Verarbeitung geschlossen.
Widerruf Ihrer Einwilligung zur Datenverarbeitung
Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
Datenverarbeitung bleibt vom Widerruf unberührt.
Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen
Direktwerbung (Art. 21 DSGVO)
WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO
ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN
SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN
WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES
PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT,
ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN,
WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES
SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE
VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON
RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN,
SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE
BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN
VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH
NACH ART. 21 ABS. 2 DSGVO).
Beschwerderecht bei der zuständigen Aufsichtsbehörde
Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger
verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
Recht auf Datenübertragbarkeit
Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
verlangen, erfolgt dies nur, soweit es technisch machbar ist.
Auskunft, Berichtigung und Löschung
Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie
zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
Recht auf Einschränkung der Verarbeitung
Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
folgenden Fällen:
Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir
in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie
statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung,
Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der
Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen
Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
zu verlangen.
Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von
ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder
Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder
juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder
eines Mitgliedstaats verarbeitet werden.
SSL- bzw. TLS-Verschlüsselung
Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-
Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
„http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht
von Dritten mitgelesen werden.
Widerspruch gegen Werbe-E-Mails
Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von
nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die
Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
Werbeinformationen, etwa durch Spam-E-Mails, vor.
4. Datenerfassung auf dieser Website
Cookies
Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und richten auf
Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung
(Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies
werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-
Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von
Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte
Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige
von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken
verwendet werden.
Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung
bestimmter, von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der
Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf
Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird.
Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur
technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur
Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die
Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
TDDDG); die Einwilligung ist jederzeit widerrufbar.
Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen
sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der
Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
Sofern weitere Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dies dieser
Datenschutzerklärung entnehmen.
Cookiebot 
Diese Website verwendet das Consent-Management-Tool Cookiebot der Cybot A/S, Havnegade 39, 1058 Kopenhagen, Dänemark, um Einwilligungen für den Einsatz von Cookies und vergleichbaren Technologien einzuholen und zu verwalten. Cookiebot verarbeitet und speichert eine Einwilligung in Ihrem Browser, um Ihnen bei zukünftigen Besuchen die erteilten oder widerrufenen Einwilligungen zuordnen zu können. Rechtsgrundlage ist Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der rechtskonformen Einholung und Dokumentation von Einwilligungen).
Server-Log-Dateien
Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-
Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
Browsertyp und Browserversion
verwendetes Betriebssystem
Referrer URL
Hostname des zugreifenden Rechners
Uhrzeit der Serveranfrage
IP-Adresse
Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat
ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website –
hierzu müssen die Server-Log-Files erfasst werden.
Kontaktformular
Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
Einwilligung weiter.
Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
widerrufbar.
Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
(z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
insbesondere Aufbewahrungsfristen – bleiben unberührt.
Formspree (Kontaktformular Verarbeitung)
Wir nutzen für die Verarbeitung von Kontaktanfragen den Dienst Formspree, betrieben von Formspree Inc., 251 Little Falls Drive, Wilmington, DE 19808, USA. Wenn Sie uns über das Kontaktformular kontaktieren, werden die von Ihnen eingegebenen Daten (z. B. Name, E-Mail-Adresse und Nachricht) an Formspree übermittelt und von dort an uns weitergeleitet. Die Verarbeitung erfolgt zum Zweck der Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vertragliche bzw. vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter Kommunikation).
Formspree kann Daten in den USA verarbeiten. Das Unternehmen ist nach dem EU-US Data Privacy Framework (DPF) zertifiziert, welches ein angemessenes Datenschutzniveau gewährleistet.

Anfrage per E-Mail, Telefon oder Telefax
Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
widerrufbar.
Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung
auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
(z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
5. Plugins und Tools
YouTube mit erweitertem Datenschutz
Diese Website bindet Videos der Website YouTube ein. Betreiber der Website ist die Google Ireland Limited
(„Google”), Gordon House, Barrow Street, Dublin 4, Irland.
Wenn Sie eine dieser Website besuchen, auf denen YouTube eingebunden ist, wird eine Verbindung zu den
Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie
besucht haben. Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr
Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus
Ihrem YouTube-Account ausloggen.
Wir nutzen YouTube im erweiterten Datenschutzmodus. Videos, die im erweiterten Datenschutzmodus
abgespielt werden, werden nach Aussage von YouTube nicht zur Personalisierung des Surfens auf YouTube
eingesetzt. Anzeigen, die im erweiterten Datenschutzmodus ausgespielt werden, sind ebenfalls nicht
personalisiert. Im erweiterten Datenschutzmodus werden keine Cookies gesetzt. Stattdessen werden
jedoch sogenannte Local Storage Elemente im Browser des Users gespeichert, die ähnlich wie Cookies
personenbezogene Daten beinhalten und zur Wiedererkennung eingesetzt werden können. Details zum
erweiterten Datenschutzmodus finden Sie hier:
https://support.google.com/youtube/answer/171780.
Gegebenenfalls können nach der Aktivierung eines YouTube-Videos weitere Datenverarbeitungsvorgänge
ausgelöst werden, auf die wir keinen Einfluss haben.
Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote.
Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende
Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf
Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die
Einwilligung ist jederzeit widerrufbar.
Weitere Informationen über Datenschutz bei YouTube finden Sie in deren Datenschutzerklärung unter:
https://policies.google.com/privacy?hl=de.
Cal.com 
Für die Terminbuchung nutzen wir den Dienst Cal.com. Anbieter ist Cal.com, Inc. Im Rahmen der Terminbuchung werden personenbezogene Daten wie Name, E-Mail-Adresse sowie Termin- und Kommunikationsdaten verarbeitet. Die Verarbeitung erfolgt zum Zweck der Organisation und Durchführung von Terminen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen).
Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der
DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung
europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach
dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere
Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:
https://www.dataprivacyframework.gov/participant/5780.
Quelle:
https://www.e-recht24.de
`,
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'Vita',
      calendar: 'Calendar',
      media: 'Media',
      lessons: 'Lessons',
      contact: 'Contact'
    },
    hero: {
      subtitle: 'Mezzo-Soprano'
    },
    about: {
      title: 'Biography',
      subtitle: 'Vita',
      intro: 'Janine Gruber graduated from the Vienna Conservatory. Her artistic journey took her from musical theatre to classical opera and vocal pedagogy.',
      bio: "Austrian mezzo-soprano Janine Gruber was featured at NEST – Neue Staatsoper Vienna during the 2025/26 season, performing the role of Tisbe (Aschenputtel/ G. Rossini) and covering the roles of Kardinälin/ 1. Drillingsleutant/ 1. Drillingsskelett in S. Schwab’s Musketiere!. Her stage experience also includes performing roles such as Hänsel (Hänsel und Gretel/ E. Humperdinck), Ciesca (Gianni Schicchi/ G. Puccini), and La Suora Infermiera (Suor Angelica/ G. Puccini) at Schlosstheater Schönbrunn.\n\nOn the concert stage, she has collaborated with conductors such as Alfred Eschwé and the Beethoven Philharmonie Baden at Schlosstheater Schönbrunn, and with Tom Gröger and the Donau Philharmonie Stockerau. She also gains extensive performance experience as a scholarship holder of the Yehudi Menuhin Live Music Now foundation.\n\nSince 2018, Janine has been studying at the University of Music and Performing Arts Vienna (MDW), where she graduated with honors with a Bachelor of Arts in Voice and is currently pursuing her Master's degree in Opera Performance under the guidance of Km.Sgr.in Edith Lienbacher, Roland Schwab, and Hartmut Keil. She received her early musical training at the Tyrolean State Conservatory and has gained further artistic inspiration through her work with Jennifer Larmore, Edith Wiens, and Karlheinz Hanser.\n\nJanine Gruber is a multiple laureate of the Prima la musica competition. In 2024, she was a finalist at the Osaka International Music Competition and the Tyrolean Classical Singers' Prize.",
      education: 'Education',
      coaches: 'Coaches',
      competitions: 'Competitions',
      roles: 'Performed Roles',
      studiedRoles: 'Studied Roles',
      repertoire: 'Repertoire',
      resumeData: {
        education: [
          { 
            years: "2024 - PRESENT", 
            title: "Master in Opera Performance", 
            institution: "University of Music and Performing Arts Vienna", 
            details: "Class: Roland Schwab, Hartmut Keil, Km.Sgr.in Edith Lienbacher" 
          },
          { 
            years: "2018 - 2024", 
            title: "Bachelor of Arts with Honors", 
            institution: "University of Music and Performing Arts Vienna", 
            details: "Class: Km.Sgr.in Edith Lienbacher" 
          },
          { 
            years: "2016 - 2018", 
            title: "Vocal Preparation Studies", 
            institution: "Tyrolean State Conservatory" 
          }
        ],
        coaches: ["Jennifer Larmore", "Prof. Dr. Edith Wiens", "Univ.-Prof. Karlheinz Hanser"],
        competitions: [
          "2024, Finalist, Osaka International Music Competition",
          "2024, Finalist, Tyrolean Classical Singers' Prize"
        ],
        roles: [
          "Hänsel (shortened version), Hänsel und Gretel, E. Humperdinck",
          "Ciesca, Gianni Schicchi, G. Puccini",
          "La Suora Infermiera, Suor Angelica, G. Puccini",
          "Tisbe (German, shortened version), Aschenputtel, G. Rossini"
        ],
        studied: [
          "Orfeo, Orfeo ed Euridice, C. W. Gluck",
          "Kardinälin/1. Drillingsleutant/1. Drillingsskelett, Musketiere, S. Schwab",
          "Annina, La Traviata, G. Verdi"
        ]
      }
    },
    teaching: {
      title: 'Vocal Lessons Vienna / Online',
      subtitle: 'Opera Singer & Vocal Coach',
      intro: 'Would you like to get to know your voice better or work on it specifically? Do you have an entrance exam you want to prepare for? Or are you looking for a new hobby?',
      offer: 'I offer individual singing lessons for beginners and advanced students – whether you just enjoy singing or are preparing for an entrance exam.',
      focusTitle: 'In class we work on:',
      focusItems: [
        'Preparation for entrance exams (accepted in Vienna, Munich, Salzburg)',
        'Healthy vocal technique',
        'Breath & body work',
        'Tone & expression',
        'Joy of singing!'
      ],
      footnote: 'I am an opera singer and continuously educate myself in the field of voice training (including Estill Voice Training Level 1 & 2).',
      info: '📍 Vienna / also possible online',
      price: '💰 50€ / 60 minutes',
      trial: '✨ Trial lesson possible',
      cta: 'Looking forward to hearing from you!',
      bookingTitle: 'Book a Lesson',
      bookingSubtitle: 'Simply choose a time directly in the calendar:',
      bookingButton: 'Open Dates'
    },
    calendar: {
      title: 'Calendar',
      upcoming: 'Upcoming Events',
      past: 'Past Events',
      detailsBtn: 'Details',
      resumeData: {
        upcoming: [
          {
            date: "11.05.2026",
            isoDate: "2026-05-11",
            time: "19:00",
            title: "Young Voices in the Ehrbar Saal – Students of Edith Lienbacher",
            description: "Song and Aria Evening",
            location: "Ehrbar Saal, Mühlgasse 30, 1040 Vienna",
            details: "On the piano: Sayuri Hirano",
            link: "https://www.mdw.ac.at/veranstaltung/?v=59736&g=43106"
          },
          {
            date: "28.05.2026",
            isoDate: "2026-05-28",
            time: "19:00",
            title: "Scene Evening – Students of Roland Schwab",
            location: "Anny Felbermayer Probebühne, Penzingerstraße 7, 1140 Vienna"
          },
          {
            date: "30.05.2026",
            isoDate: "2026-05-30",
            time: "18:00",
            title: "Finals, 2nd Hedda Urbani Singing Competition",
            location: "Musikverein Vienna",
            link: "https://musikverein.at/konzert/?id=0010eedb"
          }
        ],
        past: [
          {
            date: "25 – 27 Jan 2026",
            isoDate: "2026-01-27",
            title: "G. Rossini: Aschenputtel (Tisbe)",
            location: "NEST – Neue Staatsoper, Vienna",
            details: "Musical Direction: Stephen Hopkins | Director: Christiane Lutz"
          },
          {
            date: "3 – 21 Dec 2025",
            isoDate: "2025-12-21",
            title: "S. Schwab: Musketiere! (Kardinälin / 1. Drillingsleutant / 1. Drillingsskelett – Cover)",
            location: "NEST – Neue Staatsoper, Vienna",
            details: "Musical Direction: Dan Kurland | Director: David Bösch",
            link: "https://wiener-staatsoper.at"
          },
          {
            date: "13 Nov 2024",
            isoDate: "2024-11-13",
            title: "Concert with Beethoven Philharmonie Baden",
            location: "Schlosstheater Schönbrunn, Vienna",
            details: "Musical Direction: Alfred Eschwé"
          },
          {
            date: "09 Nov 2024",
            isoDate: "2024-11-09",
            title: "Donau Philharmonie Stockerau Autumn Concert",
            location: "Veranstaltungszentrum Stockerau / Grand Hall",
            details: "Musical Direction: Tom Gröger"
          },
          {
            date: "21 – 25 March 2025",
            isoDate: "2025-03-25",
            title: "G. Puccini: Suor Angelica (La Suora Infermiera)",
            location: "Schlosstheater Schönbrunn, Vienna",
            details: "Musical Direction: Hartmut Keil | Director: Nastasia Griese"
          },
          {
            date: "22 March 2025",
            isoDate: "2025-03-22",
            title: "G. Puccini: Gianni Schicchi (Ciesca)",
            location: "Schlosstheater Schönbrunn, Vienna",
            details: "Musical Direction: Hartmut Keil | Director: Helen Malkowsky"
          },
          {
            date: "10 – 14 Dec 2024",
            isoDate: "2024-12-14",
            title: "E. Humperdinck: Hänsel und Gretel (Hänsel)",
            location: "Schlosstheater Schönbrunn, Vienna",
            details: "Musical Direction: Daniel Linton-France | Director: Robert Simma"
          }
        ]
      }
    },
    contact: {
      title: 'Contact',
      subtitle: 'Get in Touch',
      formName: 'Name',
      formEmail: 'Email',
      formMessage: 'Message',
      formPlaceholder: 'Your message...',
      formSend: 'Send Message'
    },
    media: {
      title: 'Media',
      videos: 'Videos',
      stagePhotos: 'Stage Photos',
      portraits: 'Portraits',
      comingSoon: 'Coming Soon'
    },
    footer: {
      imprint: 'Imprint',
      privacy: 'Privacy Policy',
      allRightsReserved: 'All rights reserved',
      role: 'Mezzo-Soprano & Vocal Coach',
      legal: {
        tmg: 'Information according to § 5 TMG',
        address: 'Vienna, Austria',
        contact: 'Contact',
        email: 'Email',
        disclaimer: 'Disclaimer',
        disclaimerText: 'Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.',
        privacyTitle: 'Privacy',
        privacyText: 'The use of our website is generally possible without providing personal data. Insofar as personal data (for example name, address or email addresses) is collected on our pages, this is always done, as far as possible, on a voluntary basis.',
        formTitle: 'Contact Form',
        formText: 'If you send us inquiries via the contact form, your details from the inquiry form, including the contact details you provided there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions.',
        imprintFull: `
Imprint

Information according to § 5 TMG
Janine Gruber
Märzstraße 144
1140 Vienna
Austria

Email: gruber.janine@gmx.net

Responsible for content according to § 55 para. 2 RStV
Janine Gruber
Märzstraße 144
1140 Vienna
Austria

EU Dispute Resolution
The European Commission provides a platform for online dispute resolution (ODR):
https://ec.europa.eu/consumers/odr/

We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.
`,
        privacyFull: `
Privacy Policy
1. Data protection at a glance
General information
The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is all data with which you can be personally identified. Detailed information on data protection can be found in our privacy policy listed below.
 
Data collection on this website
Who is responsible for data collection on this website?
Data processing on this website is carried out by the website operator. You can find their contact details in the section “Information on the responsible party” in this privacy policy.
How do we collect your data?
On the one hand, your data is collected when you provide it to us. This may, for example, be data you enter in a contact form.
Other data is collected automatically or with your consent when you visit the website by our IT systems. This is primarily technical data (e.g. internet browser, operating system, or time of page access). This data is collected automatically as soon as you enter this website.
What do we use your data for?
Part of the data is collected to ensure the website is provided without errors. Other data may be used to analyse your user behaviour. If contracts can be concluded or initiated via the website, the transmitted data will also be processed for contract offers, orders, or other inquiries.
What rights do you have regarding your data?
You have the right at any time to obtain free information about the origin, recipient, and purpose of your stored personal data. You also have the right to request correction or deletion of this data. If you have given consent to data processing, you may revoke this consent at any time for the future. You also have the right, under certain circumstances, to request the restriction of processing of your personal data.
You also have the right to lodge a complaint with the competent supervisory authority.
For this purpose, as well as for further questions regarding data protection, you can contact us at any time.
 
Analysis tools and third-party tools
When visiting this website, your surfing behaviour may be statistically evaluated. This is mainly done using analysis programs.
Detailed information about these analysis programs can be found in the following privacy policy.
 
2. Hosting
We host the content of our website with the following provider:
External hosting
This website is externally hosted. The personal data collected on this website is stored on the servers of the host(s). This may include IP addresses, contact requests, meta and communication data, contract data, contact details, names, website access data, and other data generated via a website.
External hosting is carried out for the purpose of contract fulfilment with our potential and existing customers (Art. 6 (1) lit. b GDPR) and in the interest of a secure, fast, and efficient provision of our online services by a professional provider (Art. 6 (1) lit. f GDPR).
If consent has been requested, processing is carried out exclusively on the basis of Art. 6 (1) lit. a GDPR and Section 25 (1) TDDDG, insofar as consent includes the storage of cookies or access to information on the user’s device (e.g. device fingerprinting). Consent can be revoked at any time.
Our host(s) will only process your data to the extent necessary to fulfil their service obligations and will follow our instructions regarding this data.
We use the following host(s):
Vercel Inc.
440 N Barranca Ave #4133
Covina, CA 91723
USA
Data processing agreement
We have concluded a data processing agreement (DPA) for the use of the above-mentioned service. This is a contract required by data protection law, which ensures that the provider processes the personal data of our website visitors only in accordance with our instructions and in compliance with the GDPR.
 
3. General information and mandatory information
Data protection
The operators of this website take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy.
When you use this website, various personal data are collected. Personal data is data that can be used to personally identify you. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this is done.
We point out that data transmission over the Internet (e.g. communication by email) may have security gaps. Complete protection of data from third-party access is not possible.
 
Information about the responsible party
The responsible party for data processing on this website is:
Janine Gruber
Märzstraße 144, 1140 Vienna
Email: gruber.janine@gmx.net
The responsible party is the natural or legal person who alone or jointly with others determines the purposes and means of processing personal data (e.g. names, email addresses, etc.).
 
Storage duration
Unless a more specific storage period is stated within this privacy policy, your personal data will remain with us until the purpose for data processing no longer applies. If you request deletion or revoke consent, your data will be deleted unless we have other legally permissible reasons for storing your personal data (e.g. tax or commercial retention periods); in the latter case, deletion takes place after these reasons cease to apply.
 
General information on legal bases
If you have consented to data processing, we process your personal data on the basis of Art. 6 (1) lit. a GDPR and Art. 9 (2) lit. a GDPR if special categories of data are processed. If consent includes the transfer of data to third countries, processing is also based on Art. 49 (1) lit. a GDPR. If you have consented to cookies or access to your device, processing is additionally based on Section 25 (1) TDDDG. Consent can be revoked at any time.
If your data is required for contract fulfilment or pre-contractual measures, we process it on the basis of Art. 6 (1) lit. b GDPR. Furthermore, we process data if required for legal obligations (Art. 6 (1) lit. c GDPR) or on the basis of our legitimate interest (Art. 6 (1) lit. f GDPR). The relevant legal bases are explained in the following sections.
 
Recipients of personal data
As part of our business activities, we work with various external parties. In some cases, this also requires the transfer of personal data to these external parties.
We only transfer personal data if this is necessary for contract fulfilment, if we are legally obliged to do so, if we have a legitimate interest under Art. 6 (1) lit. f GDPR, or if another legal basis permits the transfer.
When using processors, we only pass on personal data on the basis of a valid data processing agreement. In the case of joint processing, a joint processing agreement is concluded.
 
Withdrawal of consent
Many data processing operations are only possible with your explicit consent. You may withdraw consent at any time. The legality of processing carried out before the withdrawal remains unaffected.
 
Right to object (Art. 21 GDPR)
If data processing is based on art. 6 (1) lit. E or F GDPR, you have the right to object at any time to processing of your personal data for reasons arising from your particular situation. This also applies to profiling.
If you object, we will no longer process your data unless we can demonstrate compelling legitimate grounds.
If your data is processed for direct marketing, you have the right to object at any time.
 
Right to lodge a complaint
You have the right to lodge a complaint with a supervisory authority.
 
Right to data portability
You have the right to receive your data in a structured, commonly used format and have it transferred to another controller.
 
Information, deletion and correction
You have the right to free information about your stored personal data, its origin, recipients, and purpose, as well as the right to correction or deletion.
 
Right to restriction of processing
You may request restriction of processing under certain conditions (e.g. disputed accuracy, unlawful processing, etc.).
 
SSL or TLS encryption
This site uses SSL or TLS encryption for security reasons. You can recognize this by “https://” and the lock symbol.
 
Objection to advertising emails
The use of contact data published in the legal notice for unsolicited advertising is hereby prohibited.
 
4. Data collection on this website
Cookies
This website uses cookies. Cookies are small data files stored on your device.
Cookies may be session cookies or permanent cookies. They serve different functions (technical, analytics, marketing).
Necessary cookies are stored on the basis of Art. 6 (1) lit. f GDPR. If consent is given, processing is based on Art. 6 (1) lit. a GDPR and Section 25 (1) TDDDG.
You can configure your browser to control cookies.
 
Cookiebot
This website uses the consent management tool Cookiebot by Cybot A/S, Havnegade 39, 1058 Copenhagen, Denmark, to obtain and manage consent for cookies and similar technologies. Cookiebot stores a consent in your browser in order to assign consent or revocation on future visits. The legal basis is Art. 6 (1) lit. c GDPR (legal obligation) and Art. 6 (1) lit. f GDPR (legitimate interest in compliant consent management).
 
Server log files
The provider automatically collects and stores information in server log files (browser type, OS, referrer URL, hostname, time, IP address). Legal basis is Art. 6 (1) lit. f GDPR.
 
Contact form
Data from contact forms is stored for processing inquiries. Legal basis may be Art. 6 (1) lit. b, f or a GDPR depending on context.
Formspree (Contact Form Processing)
We use the service Formspree, operated by Formspree Inc., 251 Little Falls Drive, Wilmington, DE 19808, USA, to process contact inquiries. If you contact us via the contact form, the data you enter (e.g. name, email address, and message) is transmitted to Formspree and forwarded to us. The processing is carried out for the purpose of handling your inquiry. The legal basis is Art. 6 (1) lit. b GDPR (contractual or pre-contractual measures) and Art. 6 (1) lit. f GDPR (legitimate interest in efficient communication).
Formspree may process data in the United States. The company is certified under the EU-US Data Privacy Framework (DPF), which ensures an adequate level of data protection.

 
Email / phone inquiries
Data from communication is stored for processing requests.
 
5. Plugins and tools
YouTube with extended data protection
This website integrates YouTube videos (Google Ireland Limited, Dublin, Ireland). When you visit pages with YouTube, a connection is established to YouTube servers. We use YouTube in extended privacy mode.
Legal basis: Art. 6 (1) lit. f GDPR or consent (Art. 6 (1) lit. a GDPR).
More information:
https://policies.google.com/privacy?hl=en
 
Cal.com
For appointment booking we use the service Cal.com. Provider is Cal.com, Inc. As part of the appointment booking process, personal data such as name, email address, and selected appointment times are processed. The processing is carried out for the purpose of organizing and conducting appointments. The legal basis is Art. 6 (1) lit. b GDPR (performance of a contract or pre-contractual measures).
The company is certified under the EU-US Data Privacy Framework (DPF):
https://www.dataprivacyframework.gov/participant/5780
Source:
https://www.e-recht24.de
`
      }
    }
  }
};
