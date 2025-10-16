import{m as t}from"./marked.esm-8ZxQ78w7.js";import{d,c as l,w as n,V as u,o as h,a as e,b as a,u as o,Q as s,e as m}from"./index-r7MUJSo1.js";const p="/assets/mssqlAuth1-9GEg4vH3.png",b="/assets/mssqlAuth2-D0wUdQUR.png",f="/assets/mssqlAuth3-jq7vo_Vu.png",_=["innerHTML"],g=["innerHTML"],w=["innerHTML"],L=d({__name:"index",setup(y){const r=t(`
# Integrated Authentication with MSSQL

<hr>

To make use of the AD account you need to make the following changes:

- Open your NEXUSe2e database.properties file, usually located in the /WEB-INF/config/ folder in your Webapp directory.


      database.dialect=org.hibernate.dialect.SQLServerDialect
      database.url=jdbc:sqlserver://YourHost:1433;instanceName=SQLInstance;databaseName=NEXUSe2eDatabase;integratedSecurity=true;
      database.driverClassName=com.microsoft.sqlserver.jdbc.SQLServerDriver
      database.user=
      database.password=

- Alter your database connection configuration to look like this and make sure database.user and database.password are blank but not comment them out.
- Download the MSSQL JDBC driver package from the corresponding website.
- If you set up a new NEXUSe2e installation you will need to copy the fitting sqljdbc.jar and the sqljdbc_auth.dll, either from /auth/x64/ or /auth/x86/,
into your /NEXUSe2e/WEB-INF/lib/ folder.
In case you switch to integrated Authentication only, copy the sqljdbc_auth.dll file into your lib folder.
`),i=t(`
- Next you need to enable your Tomcat to load DLL files. Open your Tomcat service via /YourTomcat/bin/NEXUSe2ew.exe.

- Switch to Java.
      
- Add the following line to the Java Options:

      -Djava.library.path=C:\\YourTomcat\\webapps\\NEXUSe2e\\WEB-INF\\lib
`),c=t(`
- Configure the NEXUSe2e Windows Service to be started with the AD account you granted privileges to access your MSSQL database. 
`);return(S,v)=>(h(),l(u,null,{default:n(()=>[e(m,{cols:"12"},{default:n(()=>[a("div",{innerHTML:o(r)},null,8,_),e(s,{"max-height":"550px",src:p}),a("div",{innerHTML:o(i)},null,8,g),e(s,{"max-height":"550px",src:b}),a("div",{innerHTML:o(c)},null,8,w),e(s,{"max-height":"550px",src:f})]),_:1})]),_:1}))}});export{L as default};
