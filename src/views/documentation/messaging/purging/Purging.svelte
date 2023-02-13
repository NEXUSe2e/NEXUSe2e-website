<div>{@html marked.parse(markdown1)}</div>
<ImgContainer img={img_1} alt="plain" height="200px"/>

<script>
  import ImgContainer from '@/components/ImgContainer.svelte'
  import { marked } from 'marked'
  import img_1 from './purge1.jpg'

  const markdown1 = `
  # Conversation / Message Purging

  <hr>
  

  1. Set desired filter options.
  2. Review conversations or messages shown. Please be aware that all elements shown in the filtered view will be purged.
  3. Click on "Purge All" to delete the entries permanently.


  `
</script>