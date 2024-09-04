import{m as a}from"./marked.esm-8ZxQ78w7.js";import{d as o,c as r,w as e,V as n,o as s,a as i,b as l,u as d,e as h}from"./index-B4nLAmZD.js";const c=["innerHTML"],w=o({__name:"index",setup(p){const t=a(`
# Setting up NEXUSe2e

<hr>

## Installation



### Requirements

The current version 5.x of NEXUSe2e requires:
- Java 11 (we suggest AWS Corretto 11) <a href="https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/downloads-list.html" target="_blank">Link</a>
- Tomcat 9  <a href="https://tomcat.apache.org/download-90.cgi" target="_blank">Link</a>

NEXUSe2e server comes with an embedded <a href="https://db.apache.org/derby/" target="_blank" class="standard-link">Apache Derby</a> database, for evaluation and development use. We disadvise you from using the embedded database in a production environment. If you want to run NEXUSe2e server in a production environment, you also need:
- An SQL database that can be accessed through JDBC (e.g. MS SQL Server, Oracle, DB2, MySQL, PostgreSQL)

### Installing Your Server
- Download the WAR file from the Download section or directly from github <a href="https://github.com/NEXUSe2e/NEXUSe2e/releases" target="_blank">Releases</a>.
- Deploy the WAR file in your servlet container.

>To deploy the WAR file please follow the instructions of your Servlet container/Web application server. For Tomcat the deployment is as easy as copying the WAR file into the *\\<Tomcat root>\\webapps* directory and starting Tomcat. This will expand the WAR and start the Web application.

>The shipped configuration inside the WAR file will create a Derby database and pre-populate it with a basic sample configuration on first startup. The database will be created in the directory *\\<Tomcat root>\\NEXUSe2eDB*. This database is for testing purposes only.

- Log in to the admin interface and configure the server.

>Start your web browser and point it to http://\\<server>:\\<port>/\\<deployment_name>. For Tomcat running the default configuration on the local machine, the deployment path is the same as the war file name. Therefore its recommended the rename the downloaded war file to NEXUSe2e.war which leads to the following url: <a href="http://localhost:8080/NEXUSe2e" target="_blank">http://localhost:8080/NEXUSe2e</a>.

>The default administration account is admin with password admin. The first step should be changing the password in the user management in the Web UI.

Now you can configure the server for messaging. You may want to follow our First steps in the messaging section.
`);return(m,u)=>(s(),r(n,null,{default:e(()=>[i(h,{cols:"12"},{default:e(()=>[l("div",{innerHTML:d(t)},null,8,c)]),_:1})]),_:1}))}});export{w as default};
