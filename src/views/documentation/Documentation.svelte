<h1>Documentation</h1>
<hr>
<SubrouteNavigation subroutes={subroutes} />

<script>
  import SubrouteNavigation from "@/components/SubrouteNavigation.svelte"

  const subroutes = [
    {
      text: 'Installation',
      link: '/documentation/installation'
    },
    {
      text: 'Upgrade',
      link: '/documentation/upgrade'
    },    
    {
      text: 'Configuration',
      link: '/documentation/configuration'
    },
    {
      text: 'Security',
      link: '/documentation/securtiy'
    },
    {
      text: 'Messaging',
      link: '/documentation/messaging'
    }
  ]
</script>