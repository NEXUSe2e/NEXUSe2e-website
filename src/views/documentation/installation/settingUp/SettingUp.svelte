<div>{@html marked.parse(markdown)}</div>

<script>
  import { marked } from 'marked'
  
  const markdown = `
  # Setting up NEXUSe2e

  <hr>
  
  ## Out-of-the-box Installation for Windows
  If you are running a Windows system, you can download the Windows installer for NEXUSe2e server in the <a href="/downloads" class="standard-link">Download</a> section.

  The installer package includes everything you need to run NEXUSe2e server. It includes an Apache Tomcat server, a Java Runtime Environment (JRE) and an embedded database <a href="/documentation/installation/system-requirements" class="standard-link">you should switch to a different SQL database for production</a>.

  The installer registers the Tomcat server that runs NEXUSe2e as a Windows service. After the standard installation procedure you will find shortcuts in your start menu, that enable you to start/stop the service.

  When the server is started, you can log in to the admin interface by pointing your browser to <a href="http://localhost:8080/NEXUSe2e" target="_blank" class="standard-link">http://localhost:8080/NEXUSe2e</a>. The default administration account is admin with password admin. Now you can configure the server for messaging. You can find a step-by-step guide below.
  
  ## Manual Installation

  ## Requirements

  The current version 5.0.x of NEXUSe2e requires:
  - Java 7 (JDK or JRE 1.7.x) or higher
  - A Servlet container supporting the Servlet API version 2.4 or later (e.g. <a href="https://tomcat.apache.org/" target="_blank" class="standard-link">Apache Tomcat</a> 5.5)

  NEXUSe2e server comes with an embedded <a href="https://db.apache.org/derby/" target="_blank" class="standard-link">Apache Derby</a> database, for evaluation and development use. We disadvise you from using the embedded database in a production environment. If you want to run NEXUSe2e server in a production environment, you also need:
  - An SQL database that can be accessed through JDCB (e.g. MS SQL Server, Oracle, DB2, MySQL, PostgreSQL)
  
  ## Installing Your Server
  - Download the WAR file from the <a href="/downloads" class="standard-link">Download</a> section.
  - Deploy the WAR file in your servlet container.
  
  >To deploy the WAR file please follow the instructions of your Servlet container/Web application server. For Tomcat the deployment is as easy as copying the WAR file into the *\\<Tomcat root>/\\<webapps>* directory and starting Tomcat. This will expand the WAR and start the Web application.

  >The default WAR configuration will create a Derby database and pre-populate it with a basic sample configuration. The database will be created in the directory *\\<NEXUSe2e Web app root>/WEB-INF/config/database/derby* and be named *NEXUSe2eDB*.

  - Log in to the admin interface and configure the server.

  >Start your web browser and point it to http://\\<server>:\\<port>/\\<deployment_name>. For Tomcat running the default configuration on the local machine, the url is: <a href="http://localhost:8080/NEXUSe2e" target="_blank" class="standard-link">http://localhost:8080/NEXUSe2e</a>. If you have not chopped the version substring, e.g. *_4.5.1*, from the war file's name before deployment, you probably need to append it to the URL.

  >The default administration account is admin with password admin.

  Now you can configure the server for messaging. You may want to follow our <a href="/documentation/messaging/first-steps" class="standard-link">step-by-step guide</a>.
 `
</script>