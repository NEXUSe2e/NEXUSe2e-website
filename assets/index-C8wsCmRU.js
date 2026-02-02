import{m as e}from"./marked.esm-8ZxQ78w7.js";import{N as r}from"./NEXUSe2eImage-C8hujCj8.js";import{d as p,c as h,w as a,V as f,o as u,a as o,b as t,u as n,e as m}from"./index-DGpyCozx.js";const g="/assets/connection_certificate-DDSxdGR_.png",_="/assets/partner_certificate-Dhd4lTfD.png",y="/assets/partner_certificate_container-CQIKkaPP.png",T=["innerHTML"],w=["innerHTML"],v=["innerHTML"],L=["innerHTML"],S=["innerHTML"],b=p({__name:"index",setup(C){const i=e(`
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
`),c=e(`
    <Connector port="11443" protocol="org.apache.coyote.http11.Http11NioProtocol"
               maxThreads="150" SSLEnabled="true" secure="true" scheme="https">
        <UpgradeProtocol className="org.apache.coyote.http2.Http2Protocol" />
        <SSLHostConfig protocols="TLSv1.2, TLSv1.3">
            <Certificate certificateKeystoreFile="conf/certificate.p12"
                         certificateKeystorePassword="nexuse2e"
                         type="RSA" />
        </SSLHostConfig>
    </Connector>
`),s=e(`
## Outbound

When sending a message to a partner using a secure https connection, a certificate for that partner needs to provided.
For that purpose a certificate container can be configured for a specific partner connection:
`),d=e(`
The certificate containers are part of the partner configuration (along with the partner connections).
Each partner certificate container can contain multiple certificates and all active and still valid certificates are checked when sending a message to the partner.
This allows to have e.g. the still valid partner certificate and the new partner certificate configured simultaneously and no precisely timed certificate switch is required when the partner makes the change on their end.
`),l=e(`
Example Partner Cert Container:
`);return(H,k)=>(u(),h(f,null,{default:a(()=>[o(m,{cols:"12"},{default:a(()=>[t("div",{innerHTML:n(i)},null,8,T),t("div",{style:{"margin-bottom":"1rem"},innerHTML:n(c)},null,8,w),t("div",{innerHTML:n(s)},null,8,v),o(r,{src:g,style:{"padding-top":"0"}}),t("div",{innerHTML:n(d)},null,8,L),o(r,{src:_,style:{"padding-top":"0"}}),t("div",{innerHTML:n(l)},null,8,S),o(r,{src:y,style:{"padding-top":"0"}})]),_:1})]),_:1}))}});export{b as default};
