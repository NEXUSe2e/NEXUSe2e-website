<div>{@html marked.parse(markdown)}</div>

<script>
  import { marked } from 'marked'
  
  const markdown = `
  # Setting up NEXUSe2e

  <hr>
  
  ## Installation



  ## Requirements

  The current version 5.x of NEXUSe2e requires:
  - Java 11 or higher <a href="https://jdk.java.net/archive/" target="_blank" class="standard-link">Link</a>
  - Tomcat 9  <a href="https://tomcat.apache.org/" target="_blank" class="standard-link">Link</a>
 
  NEXUSe2e server comes with an embedded <a href="https://db.apache.org/derby/" target="_blank" class="standard-link">Apache Derby</a> database, for evaluation and development use. We disadvise you from using the embedded database in a production environment. If you want to run NEXUSe2e server in a production environment, you also need:
  - An SQL database that can be accessed through JDBC (e.g. MS SQL Server, Oracle, DB2, MySQL, PostgreSQL)
  
  ## Installing Your Server
  - Download the WAR file from the Download section or directly from github <a href="https://github.com/NEXUSe2e/NEXUSe2e/releases" target="_blank" class="standard-link">Releases</a>.
  - Deploy the WAR file in your servlet container.
  
  >To deploy the WAR file please follow the instructions of your Servlet container/Web application server. For Tomcat the deployment is as easy as copying the WAR file into the *\\<Tomcat root>\\webapps* directory and starting Tomcat. This will expand the WAR and start the Web application.

  >The shipped configuration inside the WAR file will create a Derby database and pre-populate it with a basic sample configuration on first startup. The database will be created in the directory *\\<Tomcat root>\\NEXUSe2eDB*. This database is for testing purposes only.

  - Log in to the admin interface and configure the server.

  >Start your web browser and point it to http://\\<server>:\\<port>/\\<deployment_name>. For Tomcat running the default configuration on the local machine, the deployment path is the same as the war file name. Therefore its recommended the rename the downloaded war file to NEXUSe2e.war which leads to the following url: <a href="http://localhost:8080/NEXUSe2e" target="_blank" class="standard-link">http://localhost:8080/NEXUSe2e</a>.

  >The default administration account is admin with password admin. The first step should be changing the password in the user management in the Web UI.

  Now you can configure the server for messaging. You may want to follow our First steps in the messaging section.
 `
</script>