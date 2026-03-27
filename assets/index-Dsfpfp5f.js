import{m as e}from"./marked.esm-8ZxQ78w7.js";import{d as l,c as s,w as t,V as r,o as d,a as p,b as i,u as a,e as u}from"./index-BII6WmDy.js";const c=["innerHTML"],m=["innerHTML"],_=l({__name:"index",setup(f){const o=e(`
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
`),n=e(`
    spring:
      servlet:
        multipart:
          max-file-size: 20MB
          max-request-size: 20MB
`);return(h,g)=>(d(),s(r,null,{default:t(()=>[p(u,{cols:"12"},{default:t(()=>[i("div",{innerHTML:a(o)},null,8,c),i("div",{innerHTML:a(n)},null,8,m)]),_:1})]),_:1}))}});export{_ as default};
