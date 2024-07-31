<template>
  <v-row>
    <v-col cols="12">
      <div v-html="markdown1" />
      <v-img
        src="@/assets/message_flow_simple.svg"
      />
      <div v-html="markdown2" />
      <v-table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Database value</th>
          <th>Description</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Resolved</td>
          <td>RESOLVED</td>
          <td>After the message is successfully processed through the Inflow Service Resolver Pipeline and the Route Inflow Pipelet. It´s the first status a message receives.</td>
        </tr>
        <tr>
          <td>Action Pipeline Successful</td>
          <td>ACTION_SUCCESSFUL</td>
          <td>Action pipeline was successfully executed and the message waits for further processing in the Outflow Service Resolver Pipeline.</td>
        </tr>

        <tr>
          <td>Queued for Action</td>
          <td>QUEUE_ACTION</td>
          <td>If the message failed in the action pipeline and the retry limit is not reached. The message will be automatically requeued at the action pipeline.</td>
        </tr>
        <tr>
          <td>Queued for Sending</td>
          <td>QUEUE_SENDER</td>
          <td>If the message failed in the Outflow Service Resolver Pipeline and the retry limit is not reached. The message will be automatically requeued at the Outflow Service Resolver Pipeline.</td>
        </tr>
        <tr>
          <td>Waiting for Acknowledgment</td>
          <td>WAITING_FOR_ACKNOWLEDGMENT</td>
          <td>If the message was successfully sent, but an acknowledgment has not yet be received. If the message reaches the next requeue time it will be sent again.</td>
        </tr>
        <tr>
          <td>Stopped</td>
          <td>STOPPED</td>
          <td>Message is stopped from further processing.</td>
        </tr>

        <tr>
          <td>Transferred</td>
          <td>TRANSFERRED</td>
          <td>After the message is successfully processed through the Outflow Service Resolver Pipeline and sent to the target system.</td>
        </tr>
        <tr>
          <td>Received</td>
          <td>RECEIVED</td>
          <td>Only for an incoming acknowledgment, after it has successfully been received.</td>
        </tr>

        <tr>
          <td>Failed</td>
          <td>FAILED</td>
          <td>Message processing failed unexpectedly.</td>
        </tr>
        <tr>
          <td>Failed in Action Pipeline</td>
          <td>FAILED_IN_ACTION_PIPELINE</td>
          <td>Message processing failed in Action Pipeline and retry limit has been reached.</td>
        </tr>
        <tr>
          <td>Failed in Sender Service</td>
          <td>FAILED_WHILE_SENDING</td>
          <td>Message processing failed in Outflow Service Resolver Pipeline and retry limit has been reached.</td>
        </tr>
        <tr>
          <td>Missing Acknowledgment</td>
          <td>FAILED_MISSING_ACKNOWLEDGMENT</td>
          <td>Message was successfully sent, but never received an acknowledgment and retry limit has been reached.</td>
        </tr>
        </tbody>
      </v-table>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { marked } from 'marked'

const markdown1 = marked(`
  # Message Flow
  ---
  This is a simple representation of the message flow in the system to give on overview when different pipelines are executed and statuses are set.
  The execution of each pipeline is optional but is displayed in the diagram for simplification.
`)

const markdown2 = marked(`
  There are multiple statuses a message can have. The following table lists the status names in the ui, their value in the database and a brief description.
`)
</script>
