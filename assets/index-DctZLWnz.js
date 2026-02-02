import{m as e}from"./marked.esm-8ZxQ78w7.js";import{d as r,c as h,w as t,V as l,o as c,a as s,b as o,u as n,Q as u,e as d}from"./index-R_OBdHHJ.js";const m="/assets/test1-D3w9Ro9u.png",p=["innerHTML"],g=["innerHTML"],k=r({__name:"index",setup(w){const i=e(`
# Testing Connectivity

<hr>


Based on the requirements for secure inbound and outbound connections its sometimes not that easy to pinpoint the issues directly. From top level point of view there are six components involved in the communcation process.

- the senders backend system (maybe something like SAP)
- the sending communication server (NEXUSe2e)
- the outgoing firewall
- the incoming firewall on the receiver side
- the receiving communication server (NEXUSe2e to keep documentation simple)
- the receiving backend system

Before testing any conectivity with your partners you should ensure your NEXUSe2e server is able to exchange data with your backend. There are a lot of possible ways to connect a backend to NEXUSe2e, we will select the most simple one, the file system. The network administrator should make sure the directories you have configured are accessable by the user the web application server is started with.

Now its time to ensure the network connection is working as expected. Important here, this us only useful for incomming connections to NEXUSe2e. Because of the http tansport layer you can use a standard web browser to test the connection to your partners NEXUSe2e installation. Start a web browser on the same server nexus is installed on and try the following URL: 

    http://<partners_hostname>:<port>/NEXUSe2e/handler/ebxml20

Your browser should now bring up something like this:

    <SOAP-ENV:Envelope xsi:schemaLocation="http://schemas.xmlsoap.org/soap/envelope/ 
    http://www.oasis-open.org/committees/ebxml-msg/schema/envelope.xsd">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
    <SOAP-ENV:Fault>
    <faultcode>SOAP-ENV:Server</faultcode>
    <faultstring>No payload in HTTP request!</faultstring>
    </SOAP-ENV:Fault>
    </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>

This error means the HTTP request was invalid because there was no payload (business message) in this request. But the error message is created by your partners NEXUSe2e server. That means the http connection is working as expected. This test will create a log entry on your partners system as well. This will ensure you are hiting the right server which is important on more complex installation with test, qa, dr and prod installation.

This test can be repeated for the https connection as well. To simplify the first test you should disable the client authentication. (see FAQ for details) Otherwise the Browser will ask you for a matching client certificate before the connection is created completly. But if required you can install the client certificate in your web browser. Now you should be able to bring up the same error message.

Troubleshooting: Most things are going wrong in this step because this involves the whole IT staff to get this working. The server must be configured correctly, the network routing must match the requirements and the firewall needs to configured as well.

If the test above fails you should try to ensure the web app server and NEXUSe2e is up and running correctly. To do so, just connect to the pointed URL directly on the machine the web app server is installed on. If you are not getting this message described above you had to check the logs to see why something is going wrong. Maybe its a database issue and the web app is not started correctly. 

If you get the saop fault talk to your network staff about the a connection issue. They should be able to trace down the connection to see if its an firewall or routing issue on your or even on your partners side. After fixing this issue we can process trying to send a business message to your partner.
`),a=e(`
Now its time to check the communication between the two messaging servers. If both sides are using NEXUSe2e they already have a simple choreography configured you might want to use for connectivity test. By default the NEXUSe2e installation contains the GenericFile choreography which is only for basic connection tests. After adding the participants on both sides its helpful to use the Tools-> Send Message screen to send a test message to a selected partner using this GenericFile choreography.

You can send what ever want as a message but its usefill to test with some simple and small text file. An small XML file would be perfect. After sending this message you should check the logs on both sides. If everything worked, the message should be completed after at least a few seconds. This depends on the servers, network load and database performance but should normally not take more than a minute.

Please keep in mind this message send process is a bidirectional communication. The business message is send over to your partner. After receiving this, your partner will send you a matching acknowledgement. And only if you receive this acknowledgement, the message will be marked as completed.
`);return(y,f)=>(c(),h(l,null,{default:t(()=>[s(d,{cols:"12"},{default:t(()=>[o("div",{innerHTML:n(i)},null,8,p),s(u,{"max-height":"550px",src:m}),o("div",{innerHTML:n(a)},null,8,g)]),_:1})]),_:1}))}});export{k as default};
