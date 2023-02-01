<li class="navigation-list-item">
  <div
    class="navigation-list-item__text"
    class:active={navItem.route === activeRoute}
    on:click={setActive}
    on:keypress
  >
    <span>{navItem.text}</span>
    {#if navItem.subroutes}
      <svg fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="navigation-list-item__sub-icon" class:active>
        <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    {/if}
  </div>
  {#if navItem.subroutes}
    <ul class="navigation-list-item__sub-list" class:active>
      {#each navItem.subroutes as subroute }
        <NavigationListItem navItem={subroute} activeRoute={activeRoute} on:setActive={setSubItemActive} />
      {/each}
    </ul>
  {/if}
</li>

<script>
import { drawerActive } from '@/stores/drawer'
import { createEventDispatcher } from 'svelte'
import NavigationListItem from './NavigationListItem.svelte'

const dispatch = createEventDispatcher();

export let navItem

export let activeRoute

$: active = activeRoute.includes(navItem.route)

function setActive(event) {
  event.stopPropagation()
  closeDrawer()
  dispatch('setActive', navItem.route)
}

function setSubItemActive({ detail }) {
  closeDrawer()
  dispatch('setActive', detail)
}

function closeDrawer() {
  const noSubRoutes = navItem.subroutes === undefined
  const isMobileView = window.innerWidth < 640
  
  if (isMobileView && noSubRoutes) drawerActive.set(false)
}
</script>

<style>
ul {
  list-style: none;
  padding-left: 0;
}

.navigation-list-item__text {
  display: flex;
  justify-content: space-between;

  padding: 0.5rem;

  color: var(--color-gray);
}

.navigation-list-item__text:hover {
  cursor: pointer;
  color: var(--color-brand);
  background-color: rgba(230, 96, 9, 0.05);
  font-weight: bold;
}

.navigation-list-item__text.active {
  color: var(--color-brand);
  background-color: var(--color-brand-light);
  font-weight: bold;
}

.navigation-list-item__sub-icon {
  width: 1rem;
  height: 1rem;
  transition: all .5s;
  margin-right: 0.25rem
}

.navigation-list-item__sub-icon.active {
  transform: rotate(90deg);
}

.navigation-list-item__sub-list {
  transform: scaleY(0);
  opacity: 0;
  transform-origin:  top;
  margin-left: 1rem;

  transition: all 0.3s;
}

.navigation-list-item__sub-list:not(.active) {
  height: 0
}

.navigation-list-item__sub-list.active {
  transform: scaleY(1);
  opacity: 1;
}
</style>