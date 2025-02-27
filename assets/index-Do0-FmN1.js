import{N as f}from"./NEXUSe2eImage-B8pW8G4k.js";import{m as d}from"./marked.esm-8ZxQ78w7.js";import{p,m as g,g as v,n as _,q as b,s as w,x as E,z as y,O as T,a as n,P as I,d as S,c as N,w as a,V as A,o as P,b as e,u as c,e as R}from"./index-BKLLKDZY.js";const x="/assets/message_flow_simple-CcqcHZLU.svg",C=p({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...g(),...v(),..._(),...b()},"VTable"),D=w()({name:"VTable",props:C(),setup(l,s){let{slots:t,emit:h}=s;const{themeClasses:i}=E(l),{densityClasses:m}=y(l);return T(()=>n(l.tag,{class:["v-table",{"v-table--fixed-height":!!l.height,"v-table--fixed-header":l.fixedHeader,"v-table--fixed-footer":l.fixedFooter,"v-table--has-top":!!t.top,"v-table--has-bottom":!!t.bottom,"v-table--hover":l.hover},i.value,m.value,l.class],style:l.style},{default:()=>{var r,o,u;return[(r=t.top)==null?void 0:r.call(t),t.default?n("div",{class:"v-table__wrapper",style:{height:I(l.height)}},[n("table",null,[t.default()])]):(o=t.wrapper)==null?void 0:o.call(t),(u=t.bottom)==null?void 0:u.call(t)]}})),{}}}),k=["innerHTML"],L=["innerHTML"],O=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Database value"),e("th",null,"Description")])],-1),F=e("tbody",null,[e("tr",null,[e("td",null,"Resolved"),e("td",null,"RESOLVED"),e("td",null," After the message is successfully processed through the Inflow Service Resolver Pipeline and the Route Inflow Pipelet. It´s the first status a message receives. ")]),e("tr",null,[e("td",null,"Action Pipeline Successful"),e("td",null,"ACTION_SUCCESSFUL"),e("td",null," Action pipeline was successfully executed and the message waits for further processing in the Outflow Service Resolver Pipeline. ")]),e("tr",null,[e("td",null,"Queued for Action"),e("td",null,"QUEUE_ACTION"),e("td",null," If the message failed in the action pipeline and the retry limit is not reached. The message will be automatically requeued at the action pipeline. ")]),e("tr",null,[e("td",null,"Queued for Sending"),e("td",null,"QUEUE_SENDER"),e("td",null," If the message failed in the Outflow Service Resolver Pipeline and the retry limit is not reached. The message will be automatically requeued at the Outflow Service Resolver Pipeline. ")]),e("tr",null,[e("td",null,"Waiting for Acknowledgment"),e("td",null,"WAITING_FOR_ACKNOWLEDGMENT"),e("td",null," If the message was successfully sent, but an acknowledgment has not yet be received. If the message reaches the next requeue time it will be sent again. ")]),e("tr",null,[e("td",null,"Stopped"),e("td",null,"STOPPED"),e("td",null,"Message is stopped from further processing.")]),e("tr",null,[e("td",null,"Transferred"),e("td",null,"TRANSFERRED"),e("td",null," After the message is successfully processed through the Outflow Service Resolver Pipeline and sent to the target system. ")]),e("tr",null,[e("td",null,"Received"),e("td",null,"RECEIVED"),e("td",null,"Only for an incoming acknowledgment, after it has successfully been received.")]),e("tr",null,[e("td",null,"Failed"),e("td",null,"FAILED"),e("td",null,"Message processing failed unexpectedly.")]),e("tr",null,[e("td",null,"Failed in Action Pipeline"),e("td",null,"FAILED_IN_ACTION_PIPELINE"),e("td",null,"Message processing failed in Action Pipeline and retry limit has been reached.")]),e("tr",null,[e("td",null,"Failed in Sender Service"),e("td",null,"FAILED_WHILE_SENDING"),e("td",null,"Message processing failed in Outflow Service Resolver Pipeline and retry limit has been reached.")]),e("tr",null,[e("td",null,"Missing Acknowledgment"),e("td",null,"FAILED_MISSING_ACKNOWLEDGMENT"),e("td",null," Message was successfully sent, but never received an acknowledgment and retry limit has been reached. ")])],-1),H=S({__name:"index",setup(l){const s=d(`
# Message Flow
---
This is a simple representation of the message flow in the system to give on overview of when different pipelines are executed and statuses are set.
The execution of each pipeline is optional but is displayed in the diagram for simplification.
`),t=d(`
There are multiple statuses a message can have. The following table lists the status names in the ui, their value in the database and a brief description.
`);return(h,i)=>(P(),N(A,null,{default:a(()=>[n(R,{cols:"12"},{default:a(()=>[e("div",{innerHTML:c(s)},null,8,k),n(f,{src:x}),e("div",{innerHTML:c(t)},null,8,L),n(D,null,{default:a(()=>[O,F]),_:1})]),_:1})]),_:1}))}});export{H as default};
