import{$t as e,Dn as t,Lt as n,Mt as r,Rt as i,dn as a,jt as o,n as s,t as c}from"./VRow-Y9OI8PVy.js";import{t as l}from"./marked.esm-rWN5bayK.js";import{t as u}from"./VImg-jJ52b13S.js";var d=`/assets/mssqlAuth1-9GEg4vH3.png`,f=`/assets/mssqlAuth2-D0wUdQUR.png`,p=`/assets/mssqlAuth3-jq7vo_Vu.png`,m=[`innerHTML`],h=[`innerHTML`],g=[`innerHTML`],_=i({__name:`index`,setup(i){let _=l(`
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
`),v=l(`
- Next you need to enable your Tomcat to load DLL files. Open your Tomcat service via /YourTomcat/bin/NEXUSe2ew.exe.

- Switch to Java.
      
- Add the following line to the Java Options:

      -Djava.library.path=C:\\YourTomcat\\webapps\\NEXUSe2e\\WEB-INF\\lib
`),y=l(`
- Configure the NEXUSe2e Windows Service to be started with the AD account you granted privileges to access your MSSQL database. 
`);return(i,l)=>(e(),r(c,null,{default:a(()=>[n(s,{cols:`12`},{default:a(()=>[o(`div`,{innerHTML:t(_)},null,8,m),n(u,{"max-height":`550px`,src:d}),o(`div`,{innerHTML:t(v)},null,8,h),n(u,{"max-height":`550px`,src:f}),o(`div`,{innerHTML:t(y)},null,8,g),n(u,{"max-height":`550px`,src:p})]),_:1})]),_:1}))}});export{_ as default};