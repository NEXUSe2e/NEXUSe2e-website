<ul>
  {#each subroutes as subroute}
    <li on:click={() => routeToPage(subroute.link)} on:keypress>{subroute.text}</li>
  {/each}
</ul>

<script>
  import { push } from 'svelte-spa-router'

  export let subroutes = []

  function routeToPage(link) {
    push(link)
  }
</script>