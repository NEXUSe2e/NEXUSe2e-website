import{m as n}from"./marked.esm-8ZxQ78w7.js";import{d as o,c as a,w as e,V as s,o as i,a as r,b as u,u as c,e as d}from"./index-R_OBdHHJ.js";const h=["innerHTML"],g=o({__name:"index",setup(p){const t=n(`
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
`);return(l,m)=>(i(),a(s,null,{default:e(()=>[r(d,{cols:"12"},{default:e(()=>[u("div",{innerHTML:c(t)},null,8,h)]),_:1})]),_:1}))}});export{g as default};
