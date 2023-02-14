<h1>Installation</h1>
<hr />
<SubrouteNavigation subroutes={subroutes} />

<script>
import SubrouteNavigation from "@/components/SubrouteNavigation.svelte"

const subroutes = [
  {
    text: 'System Requirements',
    link: '/documentation/installation/system-requirements'
  },
  {
    text: 'Setting up NEXUSe2e',
    link: '/documentation/installation/setting-up'
  },    
  {
    text: 'External Configuration',
    link: '/documentation/installation/external-config'
  }
]
</script>