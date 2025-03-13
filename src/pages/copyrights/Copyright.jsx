import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Copyright.module.css";

const Copyright = () => {
  return (
    <Container className={`py-5 ${styles.copyright}`}>
      <h1>Rechtliche Hinweise</h1>

      <h2>1. Privater Zweck</h2>
      <p>
        Diese Webseite (CV/Portfolio) wird ausschließlich zu privaten und nicht-kommerziellen Zwecken betrieben. Sie
        dient lediglich als Demoprojekt zur Bewerbung als Junior Frontend Developer.
      </p>

      <h2>2. Inhalte</h2>
      <p>
        Die Inhalte dieser Webseite wurden mit größter Sorgfalt erstellt. Dennoch kann keine Gewähr für die Richtigkeit,
        Vollständigkeit und Aktualität der bereitgestellten Informationen übernommen werden.
      </p>

      <h2>3. Haftungsausschluss</h2>
      <p>
        Jegliche Haftung für Schäden, die direkt oder indirekt aus der Nutzung dieser Webseite entstehen, wird
        ausgeschlossen, sofern diese nicht auf Vorsatz oder grober Fahrlässigkeit beruhen.
      </p>

      <h2>4. Urheberrecht</h2>
      <p>
        Alle auf dieser Webseite veröffentlichten Texte, Bilder und sonstigen Inhalte sind – soweit nicht anders
        gekennzeichnet – mein Eigentum oder wurden von mir lizenziert. Eine Vervielfältigung oder Verwendung dieser
        Inhalte in anderen Publikationen ist ohne meine ausdrückliche Zustimmung nicht gestattet.
      </p>

      <h2>5. Datenschutz</h2>
      <p>
        Diese Webseite erhebt keine personenbezogenen Daten (z.&nbsp;B. über Kontaktformulare oder Tracking), außer wenn
        du mir aktiv eine E-Mail sendest. In diesem Fall werden deine Daten nur zur Bearbeitung deiner Anfrage verwendet
        und nicht an Dritte weitergegeben.
      </p>

      <h2>6. Externe Links</h2>
      <p>
        Diese Webseite kann Links zu externen Webseiten Dritter enthalten. Auf deren Inhalte habe ich keinen Einfluss.
        Daher kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
        stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
      </p>

      <p className={styles.signature}>&copy; {new Date().getFullYear()} Bea Pitzschke – Alle Rechte vorbehalten.</p>
    </Container>
  );
};

export default Copyright;
