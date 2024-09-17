import{N as a}from"./NEXUSe2eImage-BCOALAyW.js";import{m as o}from"./marked.esm-8ZxQ78w7.js";import{d as s,c as n,w as e,V as l,o as r,a as t,b as d,u as p,e as m}from"./index-D_gWfwc9.js";const u="/assets/max_file_size-B7w0eWi5.png",c=["innerHTML"],x=s({__name:"index",setup(f){const i=o(`
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
`);return(h,g)=>(r(),n(l,null,{default:e(()=>[t(m,{cols:"12"},{default:e(()=>[d("div",{innerHTML:p(i)},null,8,c),t(a,{src:u,"max-width":"306px"})]),_:1})]),_:1}))}});export{x as default};
