<template>
  <v-row>
    <v-col cols="12">
      <div v-html="markdown1" />
      <v-img
        src="@/assets/components_list.png"
      />
      <div v-html="markdown2" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { marked } from 'marked'

const markdown1 = marked(`
  # Components
  ---

All components are automatically scanned and available after startup. Manuall registration is no longer required. The components list shows all available components and their types. The components list is used to reference components in services or pipelets.

`)

const markdown2 = marked(`
## 1 Name
Shows the name of the component. The name is unique and used to reference the component in service or pipelet configurations.

## 2 Type
Type shows the type of the component. This is either
- Pipelet, used in pipelines
- Inflow Service, see [Inflow and Outflow](#/new/docs/concepts/flows)
- Outflow Service, see [Inflow and Outflow](#/new/docs/concepts/flows)
- Support Service, a special service that is used to configure and implement reusable functionality. May be used in other services or pipelets.

## 3 Class
The fully qualified class name of the component.

## 4 Description
The description shows a short description what the component does.

## 5 Filter
The filter can be used to filter the list of components. The filter is applied to the name or type of the component.
`)

</script>
