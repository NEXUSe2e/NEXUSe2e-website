<div>{@html marked.parse(markdown)}</div>

<script>
  import { marked } from 'marked'

  const markdown = `
  # System Requirements

  <hr>
  
  NEXUSe2e runs on a variety of system configurations. These brief requirements only illustrate the recommended settings, NEXUSe2e will probably run with lower specifcations.

  ## Hardware & Operating System
  - Linux or Windows
  - Dual core CPU
  - 4GB RAM
  - About 10GB of free HDD space

  ## Software
  - Java JDK 11
  - Apache Tomcat 9
  - Java Cryptography Extension (JCE) Unlimited
  - Hibernate supported database

  `
</script>