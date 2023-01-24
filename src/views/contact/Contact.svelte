<div>{@html marked.parse(markdown)}</div>

<script>
  import { marked } from 'marked'

  const markdown = `
  # Contact

  ---

  <br>

  **How to get in touch**

  Do you have a question or suggestion relating to this web site? Would you like more information? Below you will find different ways to get in touch with us.

  We are available by phone 8 am through 6 pm Central European Time:

  Tel.: <a href="tel:+49 40 88155-0" class="phone">+49 40 88155 – 0</a>
  <br>
  E-Mail: <a href="mailto:nexuse2e@evolvsys.com" class="email">nexuse2e@evolvsys.com</a>

  ---

  ## HAMBURG

  Griegstraße 75, H. 26
  
  22763 Hamburg

  ---

  ## KÖLN

  Im Mediapark 6b
  
  50670 Köln

  ---

  ## MÜNCHEN

  Zielstattstr. 42
  
  81379 München

  ---

  ## GARCHING

  Parkring 29
  
  85748 Garching bei München

  ---

  ## PADERBORN

  Technologiepark 9
  
  33100 Paderborn

  ---

  ## ESSEN

  Natorpstraße 36-38
  
  45139 Essen

  ---

  ## REGENSBURG

  Dr.-Leo-Ritter-Straße 4
  
  93049 Regensburg

  ---

  ## BRASIL

  Rua Manoel de Oliveira Ramos 205
  
  Edifício André Maykot, Sala 201
  
  88075-120 Florianópolis SC Brasilien

  ---

  ## ROMANIA

  Hexagon Office
  
  Calea Turzii nr. 178K, Et. 7
  
  400495, Cluj-Napoca Rumänien

`
</script>