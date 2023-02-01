
<div class="the-navigation-drawer__overlay" class:active={$drawerActive} on:click={closeDrawer} on:keypress>
  <aside id="the-navigation-drawer" on:click={event => event.stopPropagation()} on:keypress>
    <img
      src={NexusLogo}
      alt="nexus logo"
      class="the-navigation-drawer__logo"
      on:click={backToHome}
      on:keypress
    >
    <div class="the-navigation-drawer__content">
      <TheNavigation />
    </div>
  </aside>
</div>

<script>
  import NexusLogo from '@/assets/imgs/logo.png'
  import { navigate } from "svelte-routing"
  import { drawerActive } from "../stores/drawer"

  import TheNavigation from "./TheNavigation.svelte"

  function closeDrawer() {
    drawerActive.set(false)
  }

  function backToHome() {
    navigate('/NEXUSe2e-website')
  }
</script>

<style>
  .the-navigation-drawer__overlay {
    height: 100%;
    width: 100%;

    position: absolute;
    left: -100%;
    z-index: 2;

    transition: all 0.5s;
  }

  .the-navigation-drawer__overlay.active {
    left: 0;
    background-color: rgba(51, 51, 51, 0.8);
  }

  .the-navigation-drawer__logo {
    cursor: pointer;
    max-height: 15rem;
    max-width: 15rem;
    margin-inline: auto;
  }

  aside#the-navigation-drawer {
    height: 100%;
    width: 80%;

    background-color: #ffffff;

    display: flex;
    flex-direction: column;
  }

  .the-navigation-drawer__content {
    height: 100%;
    border-right: 1px solid lightgray;
  }

  @media screen and (min-width: 640px) {
    aside#the-navigation-drawer {
      width: 16rem;
    }

    .the-navigation-drawer__overlay {
      position: static;
      width: 16rem;
      margin-left: -16rem;
    }

    .the-navigation-drawer__overlay.active {
      margin-left: 0;
    }

    .the-navigation-drawer__logo {
      max-width: 100%;

      object-fit: cover;

      margin-inline: 0;
    }
  }
</style>