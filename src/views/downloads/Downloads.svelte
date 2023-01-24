<h1>Downloads</h1>

<hr>
<br />

<div class="downloads__versions">
  {#each versions as version, index}
    <VersionCard version={version} latest={index === 0} />
  {/each}
</div>

<script>
  import VersionCard from '../../components/VersionCard.svelte'
  import versions from './versions'

</script>

<style>
  .downloads__versions {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>