import{N as a}from"./NEXUSe2eImage-lrhM6WFg.js";import{m as e}from"./marked.esm-8ZxQ78w7.js";import{d as c,c as l,w as t,V as h,o as d,a as r,b as n,u as s,e as u}from"./index-B4nLAmZD.js";const p="/assets/directory_scanner1-hLVyEMWj.png",f=["innerHTML"],m=["innerHTML"],_=c({__name:"index",setup(y){const i=e(`
# Directory Scanner
---
The Directory Scanner is a standard inflow service often used to pick up local files from the server file system and let NEXUSe2e process the messages and send them to your configured target system for the process.
`),o=e(`
### #1 Directory
The directory is the path into the local filesystem of the server. Like most parameters, the field allows string replacements by the service like key value properties or key vault.

### #2 Filename Pattern
This regular expression pattern is used to filter your directory for specific files to process. All non matching files are left untouched.

### #3 Delete File
Decide whether the files are deleted after they are safely stored in NEXUSe2e. If the files are not deleted by NEXUSe2e, they need to be manually removed, otherwise the service will pick up the file as a new message with the next scheduled run.

### #4 Enable Archiving
You can optionally archive the processed files before deleting them.

### #5 Archive Directory
A local filesystem directory to store the archive files into.

### #6 Recursive Scan
By default the directory scanner will only scan in the given directory and ignoring any sub directories. By enabling the recursive scan, you can process the files in the sub directories as well.

### #7 Files per run
To prevent excessive resource consumption, the number of files per scanner run can be limited. By default it's configured to 20 files per scheduled run.

### #8 Scheduling configuration
The scanner can be schedule in few different ways. The most versatile option is using cron pattern. NEXUSe2e uses a common library called quartz to handle this pattern. It's quite close to standard unix cron pattern used in crontab. However, quartz added seconds and optional years into the pattern ([external pattern planer](https://www.freeformatter.com/cron-expression-generator-quartz.html)). The second option is a simple clock pattern to fire the job every day at a given time (eg. 22:15 for 15 past 10 in the evening).
Last but not least the scheduler supports an interval defined by hour, minute and second. The Service supports only one method at a time.

### #9 Misfire instruction
The service might miss a scheduled time for different reasons. This settings provides options to handle this misfire cases. Normally, next schedule is fine, but sometimes with very infrequent jobs you might want to run the service at least once to make sure you get the files processes. For examples, the schedule is configured for once a week on Saturday, but the service was not available till Monday. It might be helpful to run the service once on monday before getting back to the normal schedule.

### #10 Target Partner
Depending on the use-case its preferred to bind one directory scanner to one partner. In this case, you can define the target partner in the directory scanner to save time on configuring a resolver pipeline for every scanner. However, extracting the partner from the documents in the resolver pipeline might save some time on creating multiple scanners.

### #11 Target Choreography & Action
Like the partner, the routing information for choreography and action can be defined here, or with some logic in the resolver pipeline. One or the other must happen before the resolver pipeline is completed, because the validation will check on these three parameters after running the pipelets in the resolver pipeline.
`);return(g,v)=>(d(),l(h,null,{default:t(()=>[r(u,{cols:"12"},{default:t(()=>[n("div",{innerHTML:s(i)},null,8,f),r(a,{src:p}),n("div",{innerHTML:s(o)},null,8,m)]),_:1})]),_:1}))}});export{_ as default};
