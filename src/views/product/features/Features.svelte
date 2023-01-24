<div>
  {@html marked.parse(markdown)}
</div>

<script>
  import { marked } from 'marked'
  
  const markdown = `
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
  - Data encryption on the transport level (e.g. SSL, S/MIME)
  - Validation of partner/client certificates
  - Built-in certificate and key management
  
  ## Reporting
  - Standard reports for message volume
  - Reports for identifying failed transmissions
  - Transaction and application log with flexible filtering
  - Customizable report look and feel
  
  ## User Interface
  - Web interface compatible with standard web browsers (IE, Firefox, Safari, Opera)
  - Fine grained role model and user authentication
  
  ## Configuration
  - Transaction oriented change management: multiple changes can be entered sequentially and commited at once or discarded
  - Export/import of system configuration in XML format for backup and replication
  
  ## Deployment and Operation
  - JEE web application (distributed as a WAR file)
  - Bundled in-process database for testing
  - Compatible with most SQL compliant database systems (MS SQL Server, Oracle, DB2, MySQL, PostgreSQL, Derby etc.)
  
  ## Maintenance
  - Easy extensibility through component oriented design
  - Online update mechanism (desktop version)
  
  ## Monitoring
  - System availability check through HTTP and Web service interfaces (e.g. for load balancer integration)
  - Automatic system shut-down on database unavailability and restart on database recovery
  - Customizable error notification mechanism through email
  - Extensible error notification sub system for adding additional protocols (e.g. SMS)
  
  ## Available Communication/Messaging Protocols
  - ebXML 1.0
  - ebXML 2.0
  - agGateway Web services
  - Email (SMTP, POP3, IMAP)
  - FTP/FTPS
  - SFTP
  - Web services
  
  ## Back-End/Lagacy Systems Integration
  - HTTP connector
  - Web services connector
  - JDBC connector
  - File system connector
  
  ## Out-of-the-box Data Validation and Conversion
  - XML/XSLT/XSD/DTD
  - CSV
  - Plain Text
  - Compression/decompression (ZIP)
  `

</script>