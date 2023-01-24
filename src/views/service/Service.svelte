<div>{@html marked.parse(markdown)}</div>

<script>
  import { marked } from 'marked'
  
  const markdown = `
  # Service

  ---

  ## Professional Services provided by evolving systems consulting

  The developers of NEXUSe2e are part of the Skaylink GmbH, a German IT and business consultancy, which specializes in:
  - IT strategy consulting and organizational consulting
  - IT architecture and projects
  - Collaboration, eBusiness and process integration

  **We are all ease for your requirements. Please contact us with your individual request.**

  ## Installation & Update
  - We install NEXUSe2e on your machines.
  - We install software updates for you, and upgrade your machines to the latest version of NEXUSe2e.
  - We offer remote or on site service.

  ## Integration & Consulting
  - We design an realize integration with your business partners based on your individual requirements.
  - We develop the connection to the interfaces of your backend systems, whether those are standardized or proprietary.
  - We realize the connection to your business partners, whether they make use of standardized or proprietary frontend protocols.

  ## Custom Development
  - Do you need a special functionality that NEXUSe2e does not provide, yet? We offer to develop individual features for you, that meet either open source or closed source criteria.

  ## Support

  **Standard**
  - We monitor the operation of your NEXUSe2e instances remotely.
  - We answer your questions and give you a hand on operational problems.
  - We assist you in using and configuring NEXUSe2e.
  - We help you to develop your own NEXUSe2e components.

  **Enterprise**
  - In addition to the standard support service you gain access to the clustering code of NEXUSe2e, which enables you to set up a scalable network of NEXUSe2e nodes.
  - With the clustering code you    
    - distribute the load of your transactions to several machines, and in addition to that
    - ensure availability in case of failure
`
</script>