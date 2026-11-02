import{m as e}from"./marked.esm-8ZxQ78w7.js";import{d as h,c as l,w as n,V as u,o as d,a as c,b as t,u as i,e as m}from"./index-D1_mo7Ip.js";const f=["innerHTML"],g=["innerHTML"],p=["innerHTML"],b=["innerHTML"],T=h({__name:"index",setup(w){const o=e(`
# Scheduling
---

For scheduling any recurring jobs, NEXUSe2e uses a library called Quartz.\\
It is used to regulate how many jobs are executed at the same time, how often different jobs run and what happens, if a job fails to run (misfires).

Jobs include creating and sending messages, saving incoming messages, logging, etc.\\
Most job scheduling in NEXUSe2e is done with preconfigured values that do not require any explicit configuration to run.\\
Some user configured services like the [DirectoryScannerService](#/new/docs/components/services/directoryScanner) require explicit scheduling configuration however.

## Number of parallel jobs

By default, NEXUSe2e allows 5 jobs to be executed at the same time (5 quartz threads - default number of threads is subject to change), but this can configured in the NEXUSe2e application properties.\\
For NEXUSe2e running in Tomcat the application properties are usually located in the application-nexuse2e.yml in the Tomcat /conf directory.
It is important to keep in mind that more threads/parallel jobs might require more system resources (memory).

Example configuration (to allow 10 parallel jobs):
`),s=e(`
    spring:
      quartz:
        properties:
          org.quartz.threadPool.threadCount: 10
`),r=e(`
## Intervals and the Misfire Threshold

The misfire threshold determines how much time is allowed until NEXUSe2e consideres a job to have misfired.\\
If, for example, a job is scheduled to run once at 12:00am and the misfire threshold is set to 5 minutes, NEXUSe2e will consider a job to have run on time, if it is executed before 12:05am.\\
If the job is not executed before 12:05am, it is treated as a misfire.\\
How misfires are treated depends on the misfire instruction (usually "next schedule", meaning the execution of the job is skipped until the next scheduled time).

There can be several reason a job may not executed on time (misfires):
- The application (NEXUSe2e) was not running at the time.
- The service was not running at the time.
- Too many jobs where queued for execution and alle threads were busy.

A single misfire is usually no issue, especially with low intervals (e.g. 5 minutes).\\
With the "next schedule" misfire instruction the job execution would just be skipped and the job would just be executed 5 minutes later.\\
If jobs are not getting executed in the desired amount of time though, adjustments might have to be made to the scheduling settings.

For longer intervals (e.g. daily) in combination with the "next schedule" misfire instruction a single misfire would result in the job not running that day at all though.\\
In that case an alternative misfire Instruction (e.g. "run once") might be better.\\
What misfire instruction options are available depends on the service.

When setting intervals for user configured services, the interval should usually not be lower than the configured misfire threshold.\\
Setting an interval lower than the misfire threshold might result in multiple unwanted executions at the same time which in turn might cause conflicts.

It is important to note that there is no guarantee that jobs in NEXUSe2e are executed at the precise time they are scheduled.\\
It is only guaranteed that they run within the misfire threshold after the scheduled time (or misfire).\\
Meaning depending on the misfire threshold a job might run seconds (or even minutes, hours, ...) after the scheduled time.\\
Therefore it makes sense to keep the misfire threshold low to avoid too much variance.\\
But if the threshold is chosen too low, it might not allow the system enough time to actually execute all jobs on time resulting in constant misfires.

The default misfire threshold in NEXUSe2e is 15 seconds (subject to change).\\
It is a global Quartz setting, meaning it cannot be set to different values for different kinds of jobs.

Example configuration (to set the misfire threshold to 30 seconds):
`),a=e(`
    spring:
      quartz:
        properties:
          org.quartz.jobStore.misfireThreshold: 30000
`);return(j,v)=>(d(),l(u,null,{default:n(()=>[c(m,{cols:"12"},{default:n(()=>[t("div",{innerHTML:i(o)},null,8,f),t("div",{style:{"margin-bottom":"1rem"},innerHTML:i(s)},null,8,g),t("div",{innerHTML:i(r)},null,8,p),t("div",{style:{"margin-bottom":"1rem"},innerHTML:i(a)},null,8,b)]),_:1})]),_:1}))}});export{T as default};
