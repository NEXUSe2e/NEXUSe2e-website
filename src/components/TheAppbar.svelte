<div id="the-app-bar">
  <img src={NexusHeader} alt="nexus header" class="the-app-bar__img">
  <button aria-label="menu-button" class="the-app-bar__menu-button" on:click={toggleDrawer}>
    <svg class="the-app-bar__menu-button-icon" viewBox="0 0 24 24" stroke-width="1.5">
      <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  </button>
  <div class="the-app-bar__heading">
    <div class="the-app-bar__heading-header">The proven open source</div>
    <div class="the-app-bar__heading-sub-header">B2B solution</div>
  </div>
</div>

<script>
  import NexusHeader from '@/assets/imgs/nexus_header.png'
  import { drawerActive } from '@/stores/drawer'


  function toggleDrawer() {
    drawerActive.set($drawerActive ? false: true)
  }
</script>

<style>
  #the-app-bar {
    width: 100%;
    height: 7rem;

    position: relative;
    border-bottom: 1px solid lightgray;
  }

  .the-app-bar__img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .the-app-bar__menu-button {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
    background-color: transparent;
    border: none;
    padding: 0;
  }

  .the-app-bar__menu-button:hover {
    background-color: var(--color-brand-light);
  }

  .the-app-bar__menu-button-icon {
    fill: none;
    stroke: var(--color-brand);
    height: 100%;
    width: 100%;
    font-size: 2.5rem;
    cursor: pointer;
  }

  .the-app-bar__heading {
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 1rem;
    color: white;
  }

  .the-app-bar__heading-header {
    background-color: var(--color-brand);
    padding: 0.25rem 2rem;
    margin-bottom: 0.25rem;
  }

  .the-app-bar__heading-sub-header {
    background-color: var(--color-brand-secondary);
    padding: 0.25rem 2rem;
    width: 75%;
    margin-left: auto;
  }

  @media screen and (min-width: 640px) {
    .the-app-bar__heading {
      font-size: 1.5rem;
    }
  }
</style>