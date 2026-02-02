import{m as i}from"./marked.esm-8ZxQ78w7.js";import{d as n,c as t,w as e,V as a,o as l,a as r,b as s,u as g,e as d}from"./index-DIN51Eex.js";const c=["innerHTML"],u=n({__name:"index",setup(f){const o=i(`
 # Logging with Log4j 2

<hr>


Logging in NEXUSe2e is implemented using Log4j 2 (starting with NEXUSe2e version 5.11.1).

All logging is configured via the log4j2.xml file located in the \\WEB-INF\\classes\\ folder, including database and email logging that was configured through the Notifiers section in the ui of previous NEXUSe2e verions.

Other than the database logging appender, all logging uses out-of-the-box log4j2 appenders and any Log4j 2 appender can be added. For more configuration options visit the [Apache Log4j 2 website](https://logging.apache.org/log4j/2.x/manual/configuration.html#Appenders). 

### Transaction Reporting and Engine Log

A custom database logging appender is responsible for logging information to the the NEXUSe2e database for the Transaction Reporting and Engine Log sections of the ui. Locate the <DatabaseLogger name="DatabaseLogger_default"> section in log4j2.xml to set the log level (Default: 'info'). Standard Log4j 2 log levels can be applied. With log4j 2 the log level ids were changed from log4j 1. Therefore log levels from logging entries from previous NEXUSe2e version (5.9.x and earlier) cannot be properly identified for display or filtering. To fix older log entries, the following sql commands can be executed against the NEXUSe2e database:

    UPDATE [nx_log] SET [severity] = 100 WHERE [severity] = 50000
    UPDATE [nx_log] SET [severity] = 200 WHERE [severity] = 40000
    UPDATE [nx_log] SET [severity] = 300 WHERE [severity] = 30000
    UPDATE [nx_log] SET [severity] = 400 WHERE [severity] = 20000
    UPDATE [nx_log] SET [severity] = 500 WHERE [severity] = 10000
    UPDATE [nx_log] SET [severity] = 600 WHERE [severity] = 5000

### File Logging

By default the RollingFileAppender is configured and enabled to create log files with mostly info level log information. A maximum of 10 log files are kept for up to 30 days.

### E-Mail Notifications

To receive E-Mail Notifications complete SMTP appender configuration and enable it by commenting in the <AppenderRef ref="Mail"/> line in the Root logger section.
`);return(p,h)=>(l(),t(a,null,{default:e(()=>[r(d,{cols:"12"},{default:e(()=>[s("div",{innerHTML:g(o)},null,8,c)]),_:1})]),_:1}))}});export{u as default};
