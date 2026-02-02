import{m as i}from"./marked.esm-8ZxQ78w7.js";import{d as a,c as n,w as e,V as s,o as r,a as o,b as c,u as h,e as d}from"./index-BII6WmDy.js";const l=["innerHTML"],m=a({__name:"index",setup(u){const t=i(`
# Client Authentication

---

The client authentication is something you should keep in mind when requesting an certificate and establishing connections with new partners. Even though NEXUSe2e is a server application comparable to a website, it acts as a client as well, which is the major difference to standard website certificates. When receiving a business message from your partner, the web application server handles this incoming request.

The SSL Handshake is done before any data is forwarded into the NEXUSe2e web app. Therefore, it's important to keep your web app servers security configuration in mind when changing your certificates. Most web app servers can be configured to enable clientAuth. Normally the client (sending NEXUSe2e instance) connect to the server(receiving NEXUSe2e instance) and asked for a valid server certificate.

The server provides the server certificate and the client validates this against the configured partner certificate, the CA certificates and the expiration time. Without client auth the handshake process is done and the user data is transferred. But with enabled client auth, the client is asked for a certificate as well. This client certificate is send over to the server and validated inside the web app server. Therefore, it is required to apply the changes on CA certificates in your web app server configuration as well. Even if the clients CA certificate is installed in NEXUSe2e, the SSL handshake fails if the required CA certificate is not found in the web app server key store.

The most common issue here is the installed certificate on the client has no client auth flag enabled. Even if the certificate is valid the server will deny the handshake process. This flag can only be enabled by your CA when requesting a new certificate. Without this flag enabled you must ensure your partners have disabled the client auth setting in their web app server configurations.
`);return(f,p)=>(r(),n(s,null,{default:e(()=>[o(d,{cols:"12"},{default:e(()=>[c("div",{innerHTML:h(t)},null,8,l)]),_:1})]),_:1}))}});export{m as default};
