<div>{@html marked.parse(markdown)}</div>

<script>
  import { marked } from 'marked'

  const markdown = `
  # Contact

  ---

  <br>

  **How to get in touch**

  Do you have a question or suggestion relating to this web site? Would you like more information? Below you will find different ways to get in touch with us.

  We are available by phone 9 am through 6 pm Central European Time:

  **Tel.:** <a href="tel:+49 40 377073-500" class="phone">+49 40 377073-500</a>  
  **E-Mail:** <a href="mailto:nexuse2e@evolvsys.com" class="email">nexuse2e@evolvsys.com</a>

  ---

  **Office** 

  Alter Wall 34-36  
  20457 Hamburg  
  Deutschland  

  ---

`
</script>