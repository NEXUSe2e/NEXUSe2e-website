<div>{@html marked.parse(markdown1)}</div>
<ImgContainer img={img_1} alt="nexus on java 11" height="200px"/>
<div>{@html marked.parse(markdown2)}</div>
<ImgContainer img={img_2} alt="nexus on java 11" height="200px"/>
<div>{@html marked.parse(markdown3)}</div>

<script>
  import ImgContainer from '@/components/ImgContainer.svelte'
  import { marked } from 'marked'
  import img_1 from './alterURL1.jpg'
  import img_2 from './alterURL2.jpg'
  const markdown1 = `
  # How to Alter the NEXUSe2e URL

  <hr>
  
## Change Application Name

The application name in the URL ("/NEXUSe2e) is determined by the directory name of your NEXUSe2e instance inside your Tomcat's webapp folder.

To change this part of the URL please follow these steps:

    Stop your NEXUSe2e Service. *
    Rename your application folder and the war-file accordingly.
    Start your NEXUSe2e Service. **

* Else Tomcat's autoDeploy feature will delete every folder without a fitting *.war file and will also deploy *.war-files without the corresponding application directory.

** Make sure these two match, otherwise the directory is deleted and a new clean directory is created with the war file content. This might lead to a configuration loss.

  `
  const markdown2 = `
  

As displayed in the screenshot, your URL would now be something like HTTP://192.168.2.1/NEXUSe2e_FAQ/. Remember to share it with your partners, administrators and change it in the monitoring, as well.

When later updating NEXUSe2e, you also have to mind that the new war-file must match the name of the changed file.

## Change Endpoint path for a NEXUSe2e Service  

The next option is to change the NEXUSe2e internal service name. Go to your NEXUSe2e Admin-GUI and switch to:

    Server Configuration > Services > HttpReceiverService

Edit the Logical Name to your needs, save and apply the changes.

  `

  const markdown3 = `
  After the changes are applied, the URL for ebxml20 connections is /NEXUSe2e/handler/<newlogicalname>. This time, the change is stored in the database, and will be consistent for future upgrades.
  `
</script>