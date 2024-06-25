import { readonly, ref } from 'vue'

const drawerOpen = ref(true)

export default function useOldNavigationDrawer() {
  const toggleDrawer = (value: boolean = !drawerOpen.value) => {
    drawerOpen.value = value
  }

  return { drawerOpen: readonly(drawerOpen), toggleDrawer }
}
