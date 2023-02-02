<div>{@html marked.parse(markdown1)}</div>
<ImgContainer img={img_1} alt="service" height="200px"/>
<div>{@html marked.parse(markdown2)}</div>
<ImgContainer img={img_2} alt="service" height="500px"/>
<div>{@html marked.parse(markdown3)}</div>
<ImgContainer img={img_3} alt="service" height="500px"/>
<div>{@html marked.parse(markdown4)}</div>
<ImgContainer img={img_4} alt="service" height="500px"/>
<div>{@html marked.parse(markdown5)}</div>
<ImgContainer img={img_5} alt="service" height="500px"/>
<div>{@html marked.parse(markdown6)}</div>

<script>
  import ImgContainer from '@/components/ImgContainer.svelte'
  import { marked } from 'marked'
  import img_1 from './service1.png'
  import img_2 from './service2.png'
  import img_3 from './service3.png'
  import img_4 from './service4.png'
  import img_5 from './service5.png'

  const markdown1 = `
  # Windows Service

  <hr>
  

In this article we will show you briefly how to setup and deactivate a Windows Service for NEXUSe2e.

Make sure you have set a JAVA_HOME in your Windows environmental variables.

## How to Install the Service

- Open your tomcat\\bin folder in a Command Prompt window.
- Install the Service named NEXUSe2eFAQ:  

      C:\\apache-tomcat\\bin> service.bat install NEXUSe2eFAQ
      (Insert your preferred name instead of NEXUSe2eFAQ)

- If the cmd is not started as administrator you will be asked for permission to execute this process with administration rights.
- After that you should see something similar in your cmd:



  `
  const markdown2 = `

- Next, switch in the bin directory of your Tomcat and rename the "Tomcatw.exe" to wahtever you named your service. Make sure you include the "w.exe".
- Execute your "NEXUSe2eFAQw.exe".
     

The Service is now fully functional and can be edited further if needed.

## Configure Services


### General

You can change the display name to your desire and set the Startup type to automatically.


  `
  const markdown3 = `
### Log On

Set which user Windows should use to start the Service.

  `
  const markdown4 = `
### Logging

Set the log level, log path and log prefix for the tomcat instance.

NEXUSe2e log settings are not influenced by these options.

  `
  const markdown5 = `
### Java

You can add Java specific parameters into the Java Options, like SSL Debugging.

Set the minmun and maximun amout of memory this Service can use. For NEXUSe2e it is recommended to use 4096 MB as maximun memory. This might depending on your workload.

  `
  const markdown6 = `
  

### Remove Windows Services

To remove the service, open a Command Prompt window and switch into your tomcat\\bin folder.

Execute following command:

    C:\\apache-tomcat\\bin> tomcat7.exe //DS//NEXUSe2eFAQ
    (Switch NEXUSe2eFAQ to whatever you named your service)

This should be it, you can check your Windows Services to make sure it is removed.

  `

</script>