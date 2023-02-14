<h1>Upgrade</h1>
<hr />
<div>{@html marked.parse(markdown)}</div>

<script>
  import { marked } from 'marked'

  const markdown = `

  This page provides a brief checklist of the NEXUSe2e upgrade process. Please keep in mind that this is not meant to replace a full upgrade guide.

  ## Preparation

  - **Get the .war-file used for the update.**  
    Depending on your specific case you either want to download the official release from the <a href="https://github.com/NEXUSe2e/NEXUSe2e/releases" target="_blank" class="standard-link">NEXUSe2e Github Project</a>, you will have a .war-file which the NEXUSe2e support team provided, or your department or team has built a .war-file to use for the update.

  - **Get patches.jar if needed (see below).**  
    Under certain conditions you need to apply some patches to your installation. For this you will need a special .jar-file which can be obtained from the download page.

  - **Get a newer version of the database driver used to connect to your database, if required.**  
    Depending on the database used for your installation, a newer NEXUSe2e version may require a newer version of the database driver. Some (e.g. for MS SQL) aren't bundled with NEXUSe2e for licensing reasons. If you need such a driver, make sure you got the appropriate version at hand to supply it after the upgrade.

  - **Backup the database.**  
  While an upgrade should not cause any data loss, we advice you to do a full backup of the database before backup.

  - **Backup the existing NEXUSe2e.**  
    You will need some of the configuration settings later.



  ## Deployment

  - **Shut down the server**  
    Usually this is done via the shutdown.sh or shutdown.bat script files. They can be found in the /bin/-Folder of your Tomcat-Installation. However, be advised that this can and will vary depending on your specific installation. For example on Windows, Tomcat might have been set up as a system service, in which case you will need to look for an Apache Tomcat or NEXUSe2e service under Control Panel --> Administrative Tools --> Services, and stop it there.

  - **Replace the .war file**  
   Replace the exisitng war file with the new one and make sure the name is the same as the tomcat will use this as context path in the URL.  

  - **Install the database driver**
  Some databases and special features might require additional components for the database which are not shipped with NEXUSe2e for legal reasons. 

  - **Start the server.**
  On tomcat startup, the .war file is extracted in a directory with the same name. The old files will be overwritten.

  - **Shutdown the server.**

  - **Modify the default configuration**
  The main configuration files need to be updated to reflect your proper configuration again. Therefore you can pickup the old files from the backup and replace the parts for logging, database and the machine name.

  - Start the server.

  `
</script>