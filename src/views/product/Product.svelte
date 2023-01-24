<div>
  {@html marked.parse(markdown)}
  <img src={ProductImage} alt="nexus product" class="img">
</div>

<script>
  import { marked } from 'marked'
  import ProductImage from './product.jpg'
  
  const markdown = `
  # Product

  ---

  NEXUSe2e server provides reliable business messaging using standard protocols (e.g. ebXML, SOAP, HTTP, SMTP, FTP, etc.) to integrate business processes that span multiple companies.

  Because of its component-based architecture, it can be easily extended to support virtually any other protocol--be it standardized or proprietary.

  The main use of NEXUSe2e is for supply chain integration e.g., for exchanging orders and other business documents in electronic form.

  <br>
  `
</script>