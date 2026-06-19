import{Ct as e,Et as t,W as n,a as r,bt as i,ht as a,jt as o,mt as s,o as c,yt as l}from"./index-B21uHxR9.js";import{t as u}from"./marked.esm-DT5b__v5.js";var d=`/assets/mssqlAuth1-9GEg4vH3.png`,f=`/assets/mssqlAuth2-D0wUdQUR.png`,p=`/assets/mssqlAuth3-jq7vo_Vu.png`,m=[`innerHTML`],h=[`innerHTML`],g=[`innerHTML`],_=i({__name:`index`,setup(i){let _=u(`
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
`);return(i,u)=>(e(),a(r,null,{default:t(()=>[l(c,{cols:`12`},{default:t(()=>[s(`div`,{innerHTML:o(_)},null,8,m),l(n,{"max-height":`550px`,src:d}),s(`div`,{innerHTML:o(v)},null,8,h),l(n,{"max-height":`550px`,src:f}),s(`div`,{innerHTML:o(y)},null,8,g),l(n,{"max-height":`550px`,src:p})]),_:1})]),_:1}))}});export{_ as default};