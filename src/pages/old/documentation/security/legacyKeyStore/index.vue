<template>
  <v-row>
    <v-col cols="12">
      <div v-html="markdown" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { marked } from 'marked'

const markdown = marked(`
# How to create a p12 keystore file for NEXUSe2e

---

NEXUSe2e/Tomcat can make use of keystore files (.pfx or .p12) to secure connections to and from other partners.

Usually the keystore file is provided by the CA (Certificate Authority) you are working with and can be used as is.\\
Sometimes the CA only provides you with a certificate file and a private key file (or other combined formats), in which case you can create your own .p12 keystore file using the following instructions.\\
Another case when you might need to create your own keystore file is when you encounter the Hmac error described below.

## Hmac error
\`\`\`Caused by: java.security.NoSuchAlgorithmException: Algorithm HmacPBESHA256 not available\`\`\`

If you are using NEXUSe2e 5.x and encounter this Hmac error, it is likely that your keystore file (.p12 or .pfx) is using a newer algorithm that is not supported by the Java version you are using.\\
In that case, you need to create a new keystore file created using a legacy algorithm.

OpenSSL 1.1.1 introduced a new encryption algorithm (HmacPBESHA256), which is not supported by older Java versions.\\
While OpenSSL 1.1.1 does not allow using a legacy algorithm, OpenSSL 3.x does through the -legacy parameter.

See below for instructions on creating a .p12 keystore file using OpenSSL 3.x with the legacy library.

## Creating a keystore file
These instructions are for creating a keystore file using OpenSSL 3.x with the legacy library. There might alternatives using other tools than OpenSSL.

### Prerequisites
1. OpenSSL 3.x needs to be installed on your system (wherever you intend to create the keystore file, does not have to be server running NEXUSe2e). There are Windows installers available for OpenSSL.
2. private key file (usually a \`.key\` or \`.pem\` file) -> e.g. \`private.pem\`
  - If you have a pfx or p12 file, you can extract the private key certificate using [KeyStore Explorer](https://keystore-explorer.org). Use option: "OpenSSL - no encryption" while exporting the private key.
3. certificate file (usually a \`.crt\` or \`.pem\` file) -> e.g. \`cert.cer\`
  - If you have a pfx or p12 file, you can extract the certificate using KeyStore Explorer.
4. pem file with complete certificate chain including you certificate and all ca certificates (your certificate firs, root certificate last) -> e.g. \`clientcertchain.pem\`
  - If you have a pfx or p12 file, you can extract the ca certificates using KeyStore Explorer.
  - You can use Powershell to create the chain pem file, e.g.: \`\`\`Get-Content cert.cer, int.cer, root.cer | Out-File -Encoding UTF8 clientcertchain.pem\`\`\`

### OpenSSL command
\`\`\`openssl pkcs12 -export -out {NEW_KEYSTORE_FILE_NAME} -inkey {PRIVATE_KEY_FILE_NAME} -in {PUBLIC_CERTIFICATE_FILE_NAME} -certfile {COMPLETE_CERT_CHAIN_FILE_NAME} -legacy -provider-path {OPENSSL_BIN_DIRECTORY}\`\`\`

Example with file names:

\`\`\`openssl pkcs12 -export -out keystore_new.p12 -inkey private.pem -in cert.cer -certfile clientcertchain.pem -legacy -provider-path "C:\\Program Files\\OpenSSL-Win64\\bin"\`\`\`
`)
</script>
