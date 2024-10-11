<template>
  <v-row>
    <v-col cols="12">
      <div v-html="markdown1" />
      <div style="margin-bottom: 1rem" v-html="markdown2" />
      <div v-html="markdown3" />
      <div style="margin-bottom: 1rem" v-html="markdown4" />
      <div v-html="markdown5" />
      <NEXUSe2eImage src="@/assets/force_client_cert.png" style="padding-top: 0"/>
      <div v-html="markdown6" />
      <NEXUSe2eImage src="@/assets/route_client_certificate.png" style="padding-top: 0"/>
      <div v-html="markdown7" />
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
### Client Authentication handling in Browsers

As mentioned above, if client authentication is enforced in Tomcat ("required"), all requests to NEXUSe2e using that SSL port require a client certificate.
That includes requests made by using the UI in the Browser.

If client authentication is set to "optional", it is not necessary to supply a client certificate, but browsers might still prompt you to select one, if at least one fitting certificate is found in the certificates available to the browser.

#### Firefox
In Firefox the selected choice can be saved (Check "Remember this decision") and by using the "Don't send a certificate button" you can choose to not send any certificate (not viable if client authentication is set to "required").\\

#### Chromium based browsers (e.g. Google Chrome or Microsoft Edge)
Unfortunately the options available in Firefox are not easily available in all browsers (e.g. Google Chrome and Microsoft Edge).\\
One option for Chromium based browsers might be to configure AutoSelectCertificateForUrls.\\
(see [Google Chrome Enterprise Certificates documentation](https://cloud.google.com/access-context-manager/docs/enterprise-certificates) or [Microsoft Edge Policies documentation](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies#autoselectcertificateforurls) for some examples on how AutoSelectCertificateForUrls can be configured using Group Policies.

#### Alternative: Second connector for UI

To avoid having to deal with client authentication when using the UI without having to disable client authentication for partner connections (not recommended), a second https connector could be configured solely for the use of the UI.\\
The "internal" https connector can then be configured without client authentication without impacting the security of partner connections.\\
Keep in mind that multiple connectors cannot share the same port because the port is used by Tomcat to determine which connector to use for incoming requests.\\
Therefore the second connector has to configured using a different port.

Technically the second connector/port could be used by the external partners as well (avoiding the client authentication).\\
To restrict the use of the second connector the port access can be limited using an IP filter on a firewall.

Example server.xml https connector configuration with one connector for external partner connection (port 11443) and a second connector for the UI (port 12443):
`)

const markdown4 = marked(`
    <Connector port="11443" protocol="org.apache.coyote.http11.Http11NioProtocol"
               maxThreads="150" SSLEnabled="true" secure="true" scheme="https">
        <UpgradeProtocol className="org.apache.coyote.http2.Http2Protocol" />
        <SSLHostConfig truststoreFile="conf/truststore.jks" truststorePassword="changeit" certificateVerification="optional">
            <Certificate certificateKeystoreFile="conf/certificate.p12"
                         certificateKeystorePassword="nexuse2e"
                         type="RSA" />
        </SSLHostConfig>
    </Connector>
    <Connector port="12443" protocol="org.apache.coyote.http11.Http11NioProtocol"
               maxThreads="150" SSLEnabled="true" secure="true" scheme="https">
        <UpgradeProtocol className="org.apache.coyote.http2.Http2Protocol" />
        <SSLHostConfig>
            <Certificate certificateKeystoreFile="conf/certificate.p12"
                         certificateKeystorePassword="nexuse2e"
                         type="RSA" />
        </SSLHostConfig>
    </Connector>
`)

const markdown5 = marked(`
### NEXUSe2e configuration

If client authentication is enabled in Tomcat ("required" or "optional"), it can be enforced for a specific [Route](#/new/docs/concepts/routes) by specifying an Inflow Pipeline that includes the ClientCertRulePipelet for the external partner on the route.
For incoming requests from that partner that use this route a client certificate will then be required and validated against the certificates configured for that partner.

Example route configuration:
`)

const markdown6 = marked(`
## Outbound

To configure NEXUSe2e to send a client certificate to the partner with an outbound messages, a client certificate container can be configured for the internal partner of a specific [Route](#/new/docs/concepts/routes).
The client certificate container should contain your own current certificate that is known to the partner.
While multiple certificates can be added to every certificate container, only one certificate can be active at any time within a client certificate container because only one client certificate can be used for any single connection.

Example route configuration:
`)

const markdown7 = marked(`
Example Client Cert Container:
`)
</script>
