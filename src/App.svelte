<script>
import TheAppbar from "./components/TheAppbar.svelte"
import TheContentArea from './components/TheContentArea.svelte'
import TheNavigationDrawer from "./components/TheNavigationDrawer.svelte"

</script>

<main>
  <TheNavigationDrawer/>
  <div id="content">
    <TheAppbar />
    <TheContentArea />
  </div>
</main>

<style>
  main {
    position: relative;
  }

  #content {
    flex-grow: 1;
  }
</style>