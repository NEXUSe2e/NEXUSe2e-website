<div>
  {@html marked.parse(text_1)}
  <img src={img_1} alt="nexus on java 11" class="img" />
  {@html marked.parse(text_2)}
</div>

<script>
  import { marked } from 'marked'
  import img_1 from './nexus_on_java_11.jpg'
  
  const text_1 = `
  <h1>Home</h1>
  <hr>
  <h2 style="color: var(--color-brand)">NEXUSe2e is now running on Java 11</h2>
`

const text_2 = `
  ## NEXUSe2e 5.9 and Java 11
  
  All the newly released NEXUSe2e versions will support Java 11. This is especially important for the TLS related security settings. With upcoming TLS 1.3 requirements an up to date java JVM is required. Regarding Oracle licensing, NEXUSe2e is not tested with Oracle JDK any more. All local test and development instances are running on OpenJDK as production instances would now require an oracle JDK license to run. 
  `

</script>