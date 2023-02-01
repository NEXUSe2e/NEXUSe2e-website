<div class="version-card">
  <div class="version-card__header">
    <span class="version-card__header-text">{version.version}</span>
    {#if latest}
      <span class="version-card__header-badge">latest</span>
    {/if}
  </div>
  <hr>
  <h4>Changes</h4>
  <ul>
    {#each version.changes as change}
      <li class="version-card__change">{@html marked.parse(change)}</li>
    {/each}
  </ul>
  <hr>
  {#if version.knownIssues && version.knownIssues.length > 0}
    <h4>Known Issues</h4>
    <ul>
      {#each version.knownIssues as issue}
        <li class="version-card__change">{@html marked.parse(issue)}</li>
      {/each}
    </ul>
    <hr>
  {/if}
  <h4>Checksums</h4>
  <div class="version-card__checksum">
    <span class="version-card__checksum-type">MD5:</span>
    <div
      class="version-card__checksum-value"
      on:click={() => copyToClipboard(version.md5)}
      on:keypress
    >
      <span class="version-card__checksum-hash">{version.md5}</span>
      <Icon icon="copy" />
    </div>
  </div>
  <br/>
  <div class="version-card__checksum">
    <span class="version-card__checksum-type">SHA256:</span>
    <div
      class="version-card__checksum-value"
      on:click={() => copyToClipboard(version.sha256)}
      on:keypress
    >
      <span class="version-card__checksum-hash">{version.sha256}</span>
      <Icon icon="copy" />
    </div>
    
  </div>
  {#if version.download}
    <hr>
    <h4>Downloads</h4>
    <a href={`${BASE_URL}/${version.download}`} target="_blank" class="version-card__download" rel="noreferrer">.war via GitHub</a>
  {/if}
</div>

<script>
  import { marked } from 'marked'
  import Icon from '../components/Icon.svelte'

  export let version

  export let latest

  const BASE_URL = 'https://github.com/NEXUSe2e/NEXUSe2e/releases/download'

  const copyToClipboard = (hash) => {
    navigator.clipboard.writeText(hash).then(() => {
      alert('In die Zwischenablage kopiert')
    })
  }
</script>

<style>
  .version-card {
    border: 1px solid lightgray;
    padding: 1rem;
    width: 100%;
    max-width: 800px;
    background-color: #f3f4f6;
  }

  .version-card__header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .version-card__header-text {
    font-size: 2rem;
  }

  .version-card__header-badge {
    border: 2px solid #57AB5A;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    font-weight: bold;
    color: #57AB5A;
    border-radius: 0.75rem;;
  }

  .version-card__change {
    margin-bottom: 0.5rem;
  }

  .version-card__checksum {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .version-card__checksum-type {
    font-weight: bold;
  }

  .version-card__checksum-value {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }

  .version-card__checksum-hash {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .version-card__download {
    border: 1px solid lightgray;
    padding: 0.25rem 0.5rem;
    text-decoration: none;
    font-weight: bold;
    color: var(--color-brand)
  }

  .version-card__download:hover {
    background-color: lightgray;
  }
  
  @media screen and (min-width: 600px) {
    .version-card__checksum-hash {
      max-width: 400px;
    }
  }

  @media screen and (min-width: 800px) {
    .version-card__checksum-hash {
      max-width: 600px;
    }
  }

  @media screen and (min-width: 1000px) {
    .version-card__checksum-hash {
      max-width: 800px;
    }
  }
</style>