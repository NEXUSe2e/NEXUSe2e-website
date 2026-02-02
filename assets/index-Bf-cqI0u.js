import{m as a}from"./marked.esm-8ZxQ78w7.js";import{d as n,c as o,w as e,V as i,o as s,a as r,b as l,u as p,e as c}from"./index-Ca7GPTek.js";const h=["innerHTML"],x=n({__name:"index",setup(d){const t=a(`
# Unconfigured Content Type

<hr>
  
### Scenario

Content header of a received message contains unknown Content-Type like:

Content-Type: text/xml; charset="UTF-8"

### Edit MIME Config

The error indicates that due to lack of an applicable MIME-type mapping, NEXUSe2e cannot interpret the xml-message as xml. It will hence try to think of it as binary content, and this will usually lead to problems down the line.

The underlying cause is that the MimeConfig.xml file, which defines the mappings for NEXUSe2e, contains only bare types without any charset part. This is plausible for the mapping, but unfortunately in older versions of NEXUSe2e the lookup is based on the entire MIME-type and charset string.

Therefore we propose to extract only the bare MIME type before making the lookup.

There is a practical workaround, if you know the precise header value, you could simply add a proper MIMEHandler and FileMapping - to your /tomcat/NEXUSe2e/WEB-INF/config/MimeConfig.xml - like this:

    <Handler MimeType="text/xml; charset=utf-8">
        <Class>org.nexuse2e.messaging.mime.text_xml</Class>
    </Handler>

and

    <MimeMapping MimeType="text/xml; charset=utf-8">
        <FileType>xml</FileType>
        <FileType>XML</FileType>
    </MimeMapping>

Keep in mind that this is not a generic fix, and will only work for this one specific charset.

In addition to that, the way it works now does not take into account the Object type that the javax.mail API returns, but only looks at the Content-Type header and MimeConfig.xml do determine whether content is a byte[] or a String. This is error prone and will cause a ClassCastException in line 145 of HTTPMessageUnpackager.java (String gets cast to a byte[]). This exception is avoidable by an additional instanceof clause.

To replicate this issue post the content of the attached mulitpart MIME request towards a NEXUSe2e ebXML 2.0 handler. Use this command with cURL:

    {{curl http://nexuse2e.dev.arosa:5080/NEXUSe2e/handler/ebxml20 --data-binary @test_post_data_only.txt -H 'Content-Type: multipart/related'}}
`);return(m,u)=>(s(),o(i,null,{default:e(()=>[r(c,{cols:"12"},{default:e(()=>[l("div",{innerHTML:p(t)},null,8,h)]),_:1})]),_:1}))}});export{x as default};
