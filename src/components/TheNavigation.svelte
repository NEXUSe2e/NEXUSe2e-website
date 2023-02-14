
<nav id="the-navigation">
  <NavigationList
    navItems={navItems}
    activeItem={activeItem}
    on:setActive={setActive}
  />

  <NavigationList
    navItems={legalPoints}
    activeItem={activeItem}
    on:setActive={setActive}
  />
</nav>

<script>
import { legalPoints, navItems } from '@/stores/routes'
import { location, push } from 'svelte-spa-router'
import NavigationList from "./NavigationList.svelte"


let activeItem = $location

function setActive({ detail }) {
  activeItem = detail
  push(detail)
}
</script>

<style>
#the-navigation {
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>