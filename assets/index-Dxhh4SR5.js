import{m as e}from"./marked.esm-8ZxQ78w7.js";import{N as o}from"./NEXUSe2eImage-CDp8htuv.js";import{d,c as f,w as r,V as h,o as p,a as n,b as t,u as i,e as m}from"./index-DIN51Eex.js";const g="/assets/force_client_cert-BXy6ShEa.png",w="/assets/route_client_certificate-wYigrCD_.png",_="/assets/client_certificate_container-DqidB7Yl.png",b=["innerHTML"],y=["innerHTML"],T=["innerHTML"],q=["innerHTML"],v=["innerHTML"],k=d({__name:"index",setup(C){const a=e(`
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
`),c=e(`
    <Connector port="11443" protocol="org.apache.coyote.http11.Http11NioProtocol"
               maxThreads="150" SSLEnabled="true" secure="true" scheme="https">
        <UpgradeProtocol className="org.apache.coyote.http2.Http2Protocol" />
        <SSLHostConfig truststoreFile="conf/truststore.jks" truststorePassword="changeit" certificateVerification="optional">
            <Certificate certificateKeystoreFile="conf/certificate.p12"
                         certificateKeystorePassword="nexuse2e"
                         type="RSA" />
        </SSLHostConfig>
    </Connector>
`),s=e(`
### NEXUSe2e configuration

If client authentication is enabled in Tomcat ("required" or "optional"), it can be enforced for a specific [Route](#/new/docs/concepts/routes) by specifying an Inflow Pipeline that includes the ClientCertRulePipelet for the external partner on the route.
For incoming requests from that partner that use this route a client certificate will then be required and validated against the certificates configured for that partner.

Example route configuration:
`),l=e(`
## Outbound

To configure NEXUSe2e to send a client certificate to the partner with an outbound messages, a client certificate container can be configured for the internal partner of a specific [Route](#/new/docs/concepts/routes).
The client certificate container should contain your own current certificate that is known to the partner.
While multiple certificates can be added to every certificate container, only one certificate can be active at any time within a client certificate container because only one client certificate can be used for any single connection.

Example route configuration:
`),u=e(`
Example Client Cert Container:
`);return(S,H)=>(p(),f(h,null,{default:r(()=>[n(m,{cols:"12"},{default:r(()=>[t("div",{innerHTML:i(a)},null,8,b),t("div",{style:{"margin-bottom":"1rem"},innerHTML:i(c)},null,8,y),t("div",{innerHTML:i(s)},null,8,T),n(o,{src:g,style:{"padding-top":"0"}}),t("div",{innerHTML:i(l)},null,8,q),n(o,{src:w,style:{"padding-top":"0"}}),t("div",{innerHTML:i(u)},null,8,v),n(o,{src:_,style:{"padding-top":"0"}})]),_:1})]),_:1}))}});export{k as default};
