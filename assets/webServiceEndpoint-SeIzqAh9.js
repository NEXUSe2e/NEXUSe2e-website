import{Ct as e,Et as t,a as n,bt as r,ht as i,jt as a,mt as o,o as s,yt as c}from"./index-XsyDZOvb.js";import{t as l}from"./marked.esm-DT5b__v5.js";var u=[`innerHTML`],d=r({__name:`index`,setup(r){let d=l(`
# Configure a secure web service endpoint

---

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
`);return(r,l)=>(e(),i(n,null,{default:t(()=>[c(s,{cols:`12`},{default:t(()=>[o(`div`,{innerHTML:a(d)},null,8,u)]),_:1})]),_:1}))}});export{d as default};