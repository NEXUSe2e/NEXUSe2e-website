<div>{@html marked.parse(markdown)}</div>

<script>
  import { marked } from 'marked'
  
  const markdown = `
  # Legal Notices / Impressum

  ---

  **Skaylink GmbH**
  <br>
  Zielstattstraße 42
  <br>
  81379 München

  **Amtsgericht München**
  <br>
  HRB 253086

  **USt-IdNr.:**
  <br>
  DE330020107

  Tel.: <a href="tel:+49 40 88155-0" class="phone">+49 40 88155 – 0</a>
  <br>
  E-Mail: <a href="mailto:info@skaylink.com" class="email">info@skaylink.com</a>

  **Vertretungsberechtigte Geschäftsführer**
  <br>
  Dr. Ulrich Bannmüller

  **Haftungsausschluss**
  <br>
  Die Inhalte dieser Webseiten wurden sorgfältig erstellt. Gleichwohl übernimmt die Skaylink GmbH keine Haftung dafür, dass die auf diesen Webseiten bereitgestellten Informationen jeweils vollständig, richtig und aktuell sind.
  Insbesondere übernimmt die Skaylink GmbH keine Haftung für solche Inhalte, die ausdrücklich als fremde Inhalte gekennzeichnet sind, oder für die sich dies aus den Umständen ergibt.
  Die Skaylink GmbH ist nicht dafür verantwortlich, dass solche Inhalte Dritter vollständig, richtig, aktuell und rechtmäßig sind und nicht in unzulässiger Weise in Rechtsgüter Dritter eingreifen.
  Dies gilt auch, soweit auf fremde Inhalte durch einen Link verwiesen wird.

  Die Skaylink GmbH behält sich das Recht vor, ohne vorherige Ankündigung Änderungen oder Ergänzungen der bereitgestellten Informationen vorzunehmen oder diese zu entfernen.

  Auf keinen Fall haftet die Skaylink GmbH für Schäden, die durch fehlende Nutzungsmöglichkeiten oder Datenverluste im Zusammenhang mit der Nutzung von Dokumenten oder Informationen bzw. der Erbringung von Dienstleistungen entstehen, die auf dieser Website zugänglich sind.
`
</script>