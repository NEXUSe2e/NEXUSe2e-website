import { writable } from 'svelte/store'

export const drawerActive = writable(window.innerWidth >= 640 ? true : false)
