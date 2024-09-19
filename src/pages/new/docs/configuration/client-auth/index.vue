<template>
  <v-row>
    <v-col cols="12">
      <div v-html="markdown1" />
      <div style="margin-bottom: 1rem" v-html="markdown2" />
      <div v-html="markdown3" />
      <NEXUSe2eImage src="@/assets/force_client_cert.png" style="padding-top: 0"/>
      <div v-html="markdown4" />
      <NEXUSe2eImage src="@/assets/route_client_certificate.png" style="padding-top: 0"/>
      <div v-html="markdown5" />
      <NEXUSe2eImage src="@/assets/client_certificate_container.png" style="padding-top: 0"/>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">

import { marked } from 'marked'
import NEXUSe2eImage from '@/components/nexus2eImage/NEXUSe2eImage.vue'

const markdown1 = marked(`
# Client Authentication
---

Client authentication ensures the identity of the party sending a request (e.g. a partner sending a message).\\
This is separate from [Server Authentication](#/new/docs/configuration/server-auth), which ensures that the receiving party is actually the intended target (e.g. a partner receiving a message).

## Inbound

To ensure that a partner message is actually send from that partner, client authentication can be enabled for incoming requests.

To enable client authentication when using Tomcat, it needs to be configured in the Tomcat server.xml file and can optional be configured for each partner/route in NEXUSe2e.

### Tomcat configuration

Three attributes need to be added to the SSLHostConfig node of any https connector configuration in the Tomcat server.xml file (located in the Tomcat \\conf directory) to configure client authentication for that specific port:

- truststoreFile: Path to the trust store file containing all CA certificates used by the partners
- truststorePassword: Password of the trust store file
- certificateVerification: "required", "optional" or "none" (default) to enforce, allow or disable client authentication respectively

If certificateVerification is set to "required" or "optional" a client certificate will be requested from the incoming request and validated against the CA certificates in the truststore.
The leaf certificates (the actual partner certificates) are not required to added to the truststore.

To enforce client authentication for all incoming requests set certificateVerification to "required".
Be aware that this will require anyone sending a request to NEXUSe2e using the port to send a client certificate. This includes requests to the UI in the browser that are made using that port.
It is the most secure setting and recommended, if it can be ensured that all requests will include a client certificate.

If certificateVerification is set to "optional", a client certificate will still be requested and validated against the truststore, but not providing a certificate will also be accepted.
This setting is recommended in most cases because it allows enforcing client authentication for specific partners without enforcing it for all requests.

Example server.xml https connector configuration:
`)

const markdown2 = marked(`
    <Connector port="11443" protocol="org.apache.coyote.http11.Http11NioProtocol"
               maxThreads="150" SSLEnabled="true" secure="true" scheme="https">
        <UpgradeProtocol className="org.apache.coyote.http2.Http2Protocol" />
        <SSLHostConfig truststoreFile="conf/truststore.jks" truststorePassword="changeit" certificateVerification="optional">
            <Certificate certificateKeystoreFile="conf/certificate.p12"
                         certificateKeystorePassword="nexuse2e"
                         type="RSA" />
        </SSLHostConfig>
    </Connector>
`)

const markdown3 = marked(`
### NEXUSe2e configuration

If client authentication is enabled in Tomcat ("required" or "optional"), it can be enforced for a specific [Route](#/new/docs/concepts/routes) by specifying an Inflow Pipeline that includes the ClientCertRulePipelet for the external partner on the route.
For incoming requests from that partner that use this route a client certificate will then be required an validated against the certificates configured for that partner.

Example route configuration:
`)

const markdown4 = marked(`
## Outbound

To configure NEXUSe2e to send a client certificate to the partner with an outbound messages, a client certificate container can be configured for the internal partner of a specific [Route](#/new/docs/concepts/routes).
The client certificate container should contain your own current certificate that is known to the partner.
While multiple certificates can be added to every certificate container, only one certificate should be active at any time within the container.

Example route configuration:
`)

const markdown5 = marked(`
Example Client Cert Container:
`)
</script>
