import{m as t}from"./marked.esm-8ZxQ78w7.js";import{d as a,c as n,w as e,V as i,o as r,a as s,b as l,u as d,e as c}from"./index-D_gWfwc9.js";const u=["innerHTML"],g=a({__name:"index",setup(h){const o=t(`
# External Configuration Folder

<hr>


As of NEXUSe2e 5.2.0, you can provide an external set of configuration files for your NEXUSe2e instance, allowing you to upgrade or reinstall without having to re-configure everything.

To get started with this, make a copy of the config-folder under <tomcat-location>/webapps/NEXUSe2e/WEB-INF/ . Place this copy somewhere convenient, you can remove all files except database.properties, bean.properties and machine_name.txt from it if you want to (there is also support for the logger-configuration, see below).

If you have just freshly installed NEXUSe2e, you will now want to make your configuration changes, specifically your database configuration in database.properties and editing the name of the instance in machine_name.txt, in this folder.

Then to get NEXUSe2e to use your external configuration, provide a JVM option named externalconfig which points to the folder holding your external configuration files.
How you do this varies a bit depending on how you installed your instance and what operating system you are using:

- If you have NEXUSe2e installed as a windows service, you need to go into the configuration program (located under \\bin\\ in your tomcat-folder, called <servicename>w.exe .e.g. tomcatw.exe if you did not change the service name while installing tomcat), navigate to the tab 'Java', and under 'Java Options' add an entry for the parameter.
- If you start your instance from the command line (e.g. via a script) or running linux you need to provide or edit your setenv.bat or setenv.sh file (located under \\bin\\ in your tomcat-folder). Windows uses the .bat file. Add the parameter here.

**Example:**  

1. Files placed in C:\\Example\\NEXUSe2e\\  
2. Navigate to C:\\Program Files\\NEXUSe2e\\tomcat\\bin\\, launch tomcatw.exe .  
3. Add '-Dexternalconfig=C:\\Example\\NEXUSe2e' under Java Options.  
4. (Optional, depending on your setup) Now take your database-driver (if you need a specific one) and put it into the C:\\Program Files\\tomcat\\lib\\ folder (the specific path might vary depending on where and how you installed Tomcat - In general, you need this file to be available on the classpath, usually via the lib-folder of your webserver of choice. This way it is not part of the actual deployed NEXUSe2e, but of the webserver, and hence will not be deleted when you upgrade your NEXUSe2e installation. Specifically for this example, check that it in the tomcat-lib-folder as given above, not in \\tomcat\\webapps\\NEXUSe2e\\WEB-INF\\lib\\ .
`);return(f,p)=>(r(),n(i,null,{default:e(()=>[s(c,{cols:"12"},{default:e(()=>[l("div",{innerHTML:d(o)},null,8,u)]),_:1})]),_:1}))}});export{g as default};
