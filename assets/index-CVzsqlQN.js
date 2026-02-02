import{m as n}from"./marked.esm-8ZxQ78w7.js";import{d as t,c as o,w as e,V as i,o as s,a as r,b as c,u as l,e as d}from"./index-CnATzIar.js";const m=["innerHTML"],h=t({__name:"index",setup(u){const a=n(`
# Features

---

## Reliable Messaging
- Receipt of messages is confirmed through additional technical acknowledgement messages
- Mechanism independent of communication protocol
- Settings for maximum number of retries and interval between resends
- Transaction logs reflect message confirmation status

## Orchestration
- Message exchange follows defined message sequence (so called choreographies i.e., business process)
- State machine enforces message sequence/business transaction flow
- System maintains a partner and process directory and validates messages accordingly
- Communication with partners can follow different standards (transport, identifiers, security settings)

## Security
- Data encryption on the transport level (e.g. TLS, S/MIME)
- Validation of partner/client certificates
- Built-in certificate and key management

## Reporting
- Standard reports for message volume
- Reports for identifying failed transmissions
- Transaction and application log with flexible filtering
- Customizable report look and feel

## User Interface
- Web interface compatible with standard web browsers 
- Fine grained role model and user authentication

## Configuration
- Transaction oriented change management: multiple changes can be entered sequentially and commited at once or discarded
- Export/import of system configuration in XML format for backup and replication

## Deployment and Operation
- JEE web application (distributed as a WAR file)
- Bundled in-process database for testing
- Compatible with most SQL compliant database systems. For production purposes we suggest to use MS SQL Server,PostgreSQL or MySQL. For testing and evaluation the in-process Derby database is always an option.

## Maintenance
- Easy extensibility through component oriented design

## Monitoring
- System availability check through HTTP and Web service interfaces (e.g. for load balancer integration)
- Automatic system shut-down on database unavailability and restart on database recovery
- Customizable error notification mechanism through email
- Extensible error notification sub system for adding additional protocols (e.g. SMS)

## Available Communication/Messaging Protocols
- ebXML 1.0
- ebXML 2.0
- Email (SMTP, POP3, IMAP)
- SFTP
- SOAP 

## Back-End/Lagacy Systems Integration
- plain HTTP connector
- SOAP connector
- JDBC connector
- File system connector

## Out-of-the-box Data Validation and Conversion
- XML/XSLT/XSD/DTD
- CSV
- Plain Text
- Compression/decompression (ZIP)
`);return(p,f)=>(s(),o(i,null,{default:e(()=>[r(d,{cols:"12"},{default:e(()=>[c("div",{innerHTML:l(a)},null,8,m)]),_:1})]),_:1}))}});export{h as default};
