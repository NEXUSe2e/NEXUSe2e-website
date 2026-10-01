import{Ct as e,Ot as t,St as n,Ut as r,en as i,hn as a,kt as o,n as s,t as c}from"./VRow-8QlEuB43.js";import{L as l}from"./index-DXlJAPBD.js";import{t as u}from"./marked.esm-Of0D6mTi.js";var d=`/assets/mssqlAuth1-9GEg4vH3.png`,f=`/assets/mssqlAuth2-D0wUdQUR.png`,p=`/assets/mssqlAuth3-jq7vo_Vu.png`,m=[`innerHTML`],h=[`innerHTML`],g=[`innerHTML`],_=o({__name:`index`,setup(o){let _=u(`
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
`),v=u(`
- Next you need to enable your Tomcat to load DLL files. Open your Tomcat service via /YourTomcat/bin/NEXUSe2ew.exe.

- Switch to Java.
      
- Add the following line to the Java Options:

      -Djava.library.path=C:\\YourTomcat\\webapps\\NEXUSe2e\\WEB-INF\\lib
`),y=u(`
- Configure the NEXUSe2e Windows Service to be started with the AD account you granted privileges to access your MSSQL database. 
`);return(o,u)=>(r(),e(c,null,{default:i(()=>[t(s,{cols:`12`},{default:i(()=>[n(`div`,{innerHTML:a(_)},null,8,m),t(l,{"max-height":`550px`,src:d}),n(`div`,{innerHTML:a(v)},null,8,h),t(l,{"max-height":`550px`,src:f}),n(`div`,{innerHTML:a(y)},null,8,g),t(l,{"max-height":`550px`,src:p})]),_:1})]),_:1}))}});export{_ as default};