import{Ct as e,Et as t,a as n,bt as r,ht as i,jt as a,mt as o,o as s,yt as c}from"./index-XsyDZOvb.js";import{t as l}from"./marked.esm-DT5b__v5.js";import{t as u}from"./NEXUSe2eImage-Cq3HFYnk.js";var d=`/assets/connection_certificate-DDSxdGR_.png`,f=`/assets/partner_certificate-Dhd4lTfD.png`,p=`/assets/partner_certificate_container-CQIKkaPP.png`,m=[`innerHTML`],h=[`innerHTML`],g=[`innerHTML`],_=[`innerHTML`],v=[`innerHTML`],y=r({__name:`index`,setup(r){let y=l(`
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
`),b=l(`
    <Connector port="11443" protocol="org.apache.coyote.http11.Http11NioProtocol"
               maxThreads="150" SSLEnabled="true" secure="true" scheme="https">
        <UpgradeProtocol className="org.apache.coyote.http2.Http2Protocol" />
        <SSLHostConfig protocols="TLSv1.2, TLSv1.3">
            <Certificate certificateKeystoreFile="conf/certificate.p12"
                         certificateKeystorePassword="nexuse2e"
                         type="RSA" />
        </SSLHostConfig>
    </Connector>
`),x=l(`
## Outbound

When sending a message to a partner using a secure https connection, a certificate for that partner needs to provided.
For that purpose a certificate container can be configured for a specific partner connection:
`),S=l(`
The certificate containers are part of the partner configuration (along with the partner connections).
Each partner certificate container can contain multiple certificates and all active and still valid certificates are checked when sending a message to the partner.
This allows to have e.g. the still valid partner certificate and the new partner certificate configured simultaneously and no precisely timed certificate switch is required when the partner makes the change on their end.
`),C=l(`
Example Partner Cert Container:
`);return(r,l)=>(e(),i(n,null,{default:t(()=>[c(s,{cols:`12`},{default:t(()=>[o(`div`,{innerHTML:a(y)},null,8,m),o(`div`,{style:{"margin-bottom":`1rem`},innerHTML:a(b)},null,8,h),o(`div`,{innerHTML:a(x)},null,8,g),c(u,{src:d,style:{"padding-top":`0`}}),o(`div`,{innerHTML:a(S)},null,8,_),c(u,{src:f,style:{"padding-top":`0`}}),o(`div`,{innerHTML:a(C)},null,8,v),c(u,{src:p,style:{"padding-top":`0`}})]),_:1})]),_:1}))}});export{y as default};