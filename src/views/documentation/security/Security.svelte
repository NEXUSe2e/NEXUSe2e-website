<h1>Security</h1>
<hr />

<div>{@html marked.parse(clientAuthenticationMD)}</div>

<div>{@html marked.parse(secureEndpointConfigMD)}</div>

<script>
  import { marked } from 'marked'

  const clientAuthenticationMD = `
  ## Client Authentication
  
  The client authentication is something you should keep in mind when requesting an certificate and establishing connections with new partners. Even if NEXUSe2e is a server application compareable to a website it acts as a client as well which is the major different to standard website certificates. When receiving a business message from your partner, the webapplication server handles this incomming request.

  The SSL Handshake is done before any data is forward into the NEXUSe2e web app. Therefore its important to keep your web app servers security configuration in mind when changing your certificates. Most web app servers can be configured to enable clientAuth. Normally the client (sending NEXUSe2e instance) connect to the server(receiving NEXUSe2e instance) and asked for a valid server certificate.

  The server provides the server certificate and the client validates this against the configured partner certifcate, the ca certificates and the expiration time. without clientauth the handshake process is done and the user data is transfered. But with enabled client auth, the client is asked for a certificate as well. This client certificate is send over to the server and validated inside the web app server. Therefore it is required to apply the changes on ca certificates in your web app server configuration as well. Even if the clients CA cert is installed in NEXUSe2e, the ssl handshake fails if the required CA certificate is not found in the web app server key store.

  The most common issue here is the installed certificate on the client has no client auth flag enabled. Even if the certificate is valid the server will deny the handshake process. This flag can only be enabled by your CA when requesting a new certificate. Without this flag enabled you must ensure your partners have disabled the client auth setting in there web app server configurations.
  
  <hr />
  `

  const secureEndpointConfigMD = `
  ## Configure a secure web service endpoint
  
  As of release 5.3.0, you can easily start a WS-security protected webservices endpoint for sending messages through NEXUSe2e. Read on for information on how to set up this service.

  ### Adding the component
  Under Server Configuration > Components, add a new component.

  Fill in the name and description however you want it, for the class name put in org.nexuse2e.integration.secure.WSDispatcherService. Save, then apply the changes to your system, and you should have the new component showing up in the overview.
  
  ### Registering the service
  Go to Server Configuration > Services, add a new Service.

  Select the newly registered component (if it's not showing up, make sure you applied your changes to the components via the Apply-button at the top of the Admin UI), enter any name you want, and whether you want the component to autostart.

  The URL you can input here is relative to your NEXUSe2e-instance. If your instance is found at https://<servername>/NEXUSe2e/, then putting in /secureWS would result in having the endpoint show up at https://<servername>/NEXUSe2e/wshandler/secureWS.

  For username and password, input the credentials you want to use, they'll later be needed to communicate with the endpoint. Then click save, and again apply the changes to your system.
  
  ### Final steps
  Lastly, start the new service unless it was already set to autostart. We advice you to briefly test your new endpoint by making the above configuration in a test environment and using a specialized tool or a test instance sending data to your NEXUSe2e instance to check whether everything is configured as desired.
  `
</script>