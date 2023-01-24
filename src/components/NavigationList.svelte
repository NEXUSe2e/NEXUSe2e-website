<ul class="the-navigation__list">
  {#each navItems as navItem}
    <NavigationListItem navItem={navItem} activeRoute={activeItem} on:setActive={setActive} />
  {/each}
</ul>

<script>
import { createEventDispatcher } from 'svelte'
import NavigationListItem from './NavigationListItem.svelte'
const dispatch = createEventDispatcher();

export let navItems

export let activeItem

function setActive({ detail }) {
  dispatch('setActive', detail)
}
</script>

<style>
.the-navigation__list {
  list-style: none;
  padding-left: 0;
}
</style>