<div>
  {@html marked.parse(markdown)}
  <ImgContainer img={ProductImage} alt="NEXUSe2e solution" height="400px"/>
</div>

<script>
  import ImgContainer from '@/components/ImgContainer.svelte'
  import { marked } from 'marked'
  import ProductImage from './solution.jpg'
  
  const markdown = `
  # The Solution

  ---
  

  NEXUSe2e server provides reliable business messaging using standard protocols (e.g. ebXML, SOAP, HTTPS, SMTP, SFTP, etc.) to integrate business processes that span multiple companies.

  Because of its component-based architecture, it can be easily extended to support virtually any other protocol--be it standardized or proprietary.

  The main use of NEXUSe2e is for supply chain integration e.g., for exchanging orders and other business documents in electronic form.

  <br>
  `
   
</script>