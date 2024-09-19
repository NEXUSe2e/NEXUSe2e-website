<template>
  <v-row>
    <v-col cols="12">
      <div v-html="markdown1" />
      <div style="margin-bottom: 1rem" v-html="markdown2" />
      <div v-html="markdown3" />
      <NEXUSe2eImage src="@/assets/connection_certificate.png" style="padding-top: 0"/>
      <div v-html="markdown4" />
      <NEXUSe2eImage src="@/assets/partner_certificate.png" style="padding-top: 0"/>
      <div v-html="markdown5" />
      <NEXUSe2eImage src="@/assets/partner_certificate_container.png" style="padding-top: 0"/>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">

import { marked } from 'marked'
import NEXUSe2eImage from '@/components/nexus2eImage/NEXUSe2eImage.vue'

const markdown1 = marked(`
# Server Authentication
---

Server authentication ensures that the receiving party is actually the intended target (e.g. a partner receiving a message).\\
This is separate from [Client Authentication](#/new/docs/configuration/client-auth), which ensures the identity of the party sending a request (e.g. a partner sending a message).

## Inbound

To allow secure https connections from your partners server authentication needs to configured.

To enable server authentication when using Tomcat, it needs to be configured in the Tomcat server.xml file (located in the Tomcat \\conf directory).
A Certificate node needs to added to the SSLHostConfig node of any https connector configuration in the Tomcat server.xml file to configure client authentication for that specific port.
The Certificate node needs to configured with these three attributes:
- certificateKeystoreFile: Path to the key store file containing you own certificate (usually a p12 or pfx file)
- certificateKeystorePassword: Password of the key store
- type: Type of the key store (usually "RSA")

Example:
`)

const markdown2 = marked(`
    <Connector port="11443" protocol="org.apache.coyote.http11.Http11NioProtocol"
               maxThreads="150" SSLEnabled="true" secure="true" scheme="https">
        <UpgradeProtocol className="org.apache.coyote.http2.Http2Protocol" />
        <SSLHostConfig protocols="TLSv1.2, TLSv1.3" truststoreFile="conf/truststore.jks" truststorePassword="changeit" certificateVerification="optional">
            <Certificate certificateKeystoreFile="conf/certificate.p12"
                         certificateKeystorePassword="nexuse2e"
                         type="RSA" />
        </SSLHostConfig>
    </Connector>
`)

const markdown3 = marked(`
## Outbound

When sending a message to a partner using a secure https connection, a certificate for that partner needs to provided.
For that purpose a certificate container can be configured for a specific partner connection:
`)

const markdown4 = marked(`
The certificate containers are part of the partner configuration (along with the partner connections).
Each partner certificate container can contain multiple certificates and all active and still valid certificates are checked when sending a message to the partner.
This allows to have e.g. the still valid partner certificate and the new partner certificate configured simultaneously and no precisely timed certificate switch is required when the partner makes the change on their end.
`)

const markdown5 = marked(`
Example Partner Cert Container:
`)
</script>
