<template>
  <v-row>
    <v-col cols="12">
      <div v-html="markdown1" />
      <v-img
        max-height="550px"
        src="./mssqlAuth1.png"
      />

      <div v-html="markdown2" />
      <v-img
        max-height="550px"
        src="./mssqlAuth2.png"
      />

      <div v-html="markdown3" />
      <v-img
        max-height="550px"
        src="./mssqlAuth3.png"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { marked } from 'marked'

const markdown1 = marked(`
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
`)

const markdown2 = marked(`
- Next you need to enable your Tomcat to load DLL files. Open your Tomcat service via /YourTomcat/bin/NEXUSe2ew.exe.

- Switch to Java.
      
- Add the following line to the Java Options:

      -Djava.library.path=C:\\YourTomcat\\webapps\\NEXUSe2e\\WEB-INF\\lib
`)

const markdown3 = marked(`
- Configure the NEXUSe2e Windows Service to be started with the AD account you granted privileges to access your MSSQL database. 
`)
</script>
