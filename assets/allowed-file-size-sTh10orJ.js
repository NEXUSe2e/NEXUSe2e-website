import{Ct as e,Et as t,a as n,bt as r,ht as i,jt as a,mt as o,o as s,yt as c}from"./index-XsyDZOvb.js";import{t as l}from"./marked.esm-DT5b__v5.js";var u=[`innerHTML`],d=[`innerHTML`],f=r({__name:`index`,setup(r){let f=l(`
# Allowed File Size
---

By default NEXUSe2e only allows a limited file size when uploading files in the UI (e.g. selecting a file to send using 'Manual Message" function).\\
This might also effect the allowed size of payloads send by external partners or internal backend systems depending on kind of payload and the way the payload is send.\\
The purpose of the limit is to protect against uploading files too large for the system to handle.

When trying to upload a file is larger then the allowed limit, a "Couldn't upload file" error will be displayed.

It is possible to configure this limit to allow uploading larger files, but should be done with care and might require more resources (memory).\\
If not explicitly configured the default limit is currently 5 MB.

The configuration is done in the NEXUSe2e application properties.\\
For NEXUSe2e running in Tomcat the application properties are usually located in the application-nexuse2e.yml in the Tomcat /conf directory.

Locate the spring.servlet.multipart.max-file-size and spring.servlet.multipart.max-request-size properties or add them if missing and set them to the desired value, e.g. to 20 MB:
`),p=l(`
    spring:
      servlet:
        multipart:
          max-file-size: 20MB
          max-request-size: 20MB
`);return(r,l)=>(e(),i(n,null,{default:t(()=>[c(s,{cols:`12`},{default:t(()=>[o(`div`,{innerHTML:a(f)},null,8,u),o(`div`,{innerHTML:a(p)},null,8,d)]),_:1})]),_:1}))}});export{f as default};