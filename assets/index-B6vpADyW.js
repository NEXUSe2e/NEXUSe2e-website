import{m as t}from"./marked.esm-8ZxQ78w7.js";import{d as o,c as a,w as e,V as r,o as n,a as i,b as s,u as d,e as c}from"./index-r7MUJSo1.js";const l=t(`
# Changelog


[10.3.6] - 2025-10-15
---------------------

### Added (4 changes)

- Added more e2e screenshot tests.
- Added \`AzureBlobStorageSenderService\` for sending files to Azure Blob Storage.
- Added more options to configure the \`MetaDataPipelet\`: add/set option for meta data and message/payload option for the meta data target
- The CsvToJsonSplitterTransformatorService now supports an optional \`Table of Contents\` feature that generates a summary payload for all the split message keys.

### Changed (1 change)

- Filter null values in \`MetaData\` methods \`addAll\` and \`set\`

### Security (1 change)

- Updated @openapitools/openapi-generator-cli to 2.25.0


[10.3.5] - 2025-09-17
---------------------

### Added (2 changes)

- Added the \`JsonToCsvTransformerService\` to transform payload's into csv files using a json field/csv column definition.
- Added an additional column separator parameter to the \`JsonToCsvTransformerService\`.

### Fixed (1 change)

- Fixed the payload size break point in payload cards in the frontend.

### Dependency updates (19 changes)

- com.evolvsys:esc-app-core-test from 4.3.1 to 4.3.3
- com.evolvsys:esc-app-core from 4.3.1 to 4.3.3
- com.evolvsys:esc-common-parent-pom from 6.2.3 to 6.2.8
- com.fasterxml.jackson.dataformat:jackson-dataformat-csv from 2.19.2 to 2.20.0
- com.networknt:json-schema-validator from 1.5.8 to 1.5.9
- dev.logchange:logchange-maven-plugin from 1.19.8 to 1.19.9
- jakarta.xml.bind:jakarta.xml.bind-api from 4.0.2 to 4.0.4
- org.apache.sshd:sshd-scp from 2.15.0 to 2.16.0
- org.apache.sshd:sshd-sftp from 2.15.0 to 2.16.0
- org.apache.tika:tika-core from 3.2.2 to 3.2.3
- org.codehaus.mojo:versions-maven-plugin from 2.18.0 to 2.19.0
- org.projectlombok:lombok from 1.18.38 to 1.18.40
- org.springframework.boot:spring-boot-configuration-processor from 3.5.4 to 3.5.5
- org.springframework.boot:spring-boot-maven-plugin from 3.5.4 to 3.5.5
- org.springframework.boot:spring-boot-starter-parent from 3.5.4 to 3.5.5
- org.xmlunit:xmlunit-assertj3 from 2.10.3 to 2.10.4
- org.xmlunit:xmlunit-core from 2.10.3 to 2.10.4
- org.xmlunit:xmlunit-matchers from 2.10.3 to 2.10.4
- Updated frontend packages.


[10.3.4] - 2025-09-05
---------------------

### Added (6 changes)

- Added clear button to datepicker input.
- message and conversation ids in the message or conversation table can be clicked with middle mouse or right click, to open in an external tab.
- Datepickers now have a now button to quickly set the current date and time.
- Added a \`Check for missing payload\` parameter to the \`JsonSchemaRulePipelet\`. If enabled, the pipelet will fail validation if there is not at least one payload. Default true.
- Added the \`JsonToMetaDataPipelet\` to allow copying json field values to the message metadata.
- Added the \`MetaDataDuplicationCheckPipelet\` to allow comparing metadata by it's keys and values.


[10.3.3] - 2025-08-27
---------------------

### Added (1 change)

- Added a \`Multipart detection\` parameter to the \`HttpReceiverService\`. This allows automatic detection of multipart content types if the client does not set the correct \`Content-Type\` header.

### Removed (1 change)

- Removed \`Use fixed content-type\` parameter from \`HttpReceiverService\`. The original functionality is now replaced with the new parameter \`Multipart detection\`.


[10.3.2] - 2025-08-22
---------------------

### Added (1 change)

- Added optional parameter to \`HttpReceiverService\` for overriding the content type from the request header with a fixed value


[10.3.1] - 2025-08-15
---------------------

### Added (3 changes)

- New Sftp Push Service for file transfers to SFTP servers added.
- Added \`RoutingMappingPipelet\` that uses multiple \`StringMapperSupportService\` to map routing information (choreographyId, actionId, sourcePartnerId and targetPartnerId) of a message.
- Added \`StringMapperSupportService\` that has a mapping table to convert string values to other string values.

### Changed (2 changes)

- Sftp Polling service now uses duration instead of long for interval. This requires a configuration change on existing installations.
- Prevent \`choreographyId\`, \`actionId\`, \`messageId\` and \`partnerIds\` from being updated after the message has been resolved. This only effects persisting of the message, a temporary change while sending the messages will still work.

### Fixed (2 changes)

- Fixed early message logs (before the message id is generated) being assigned to the wrong or no message at all.
- Fixed \`HttpReceiverService\` handling requests with \`Transfer-Encoding: chunked\` header. The service now correctly processes chunked transfer encoding, ensuring that the request body is fully read and processed without errors.

### Security (1 change)

- Update vue-i18n to 11.1.11

### Dependency updates (26 changes)

- com.azure.spring:spring-cloud-azure-dependencies from 5.20.0 to 5.23.0
- com.azure:azure-identity-broker from 1.1.12 to 1.1.16
- com.evolvsys:esc-app-core-test from 4.3.0 to 4.3.1
- com.evolvsys:esc-app-core from 4.3.0 to 4.3.1
- com.evolvsys:esc-common-parent-pom from 6.2.2 to 6.2.3
- com.fasterxml.jackson.dataformat:jackson-dataformat-csv from 2.18.3 to 2.19.2
- com.google.guava:guava from 33.4.0-jre to 33.4.8-jre
- com.microsoft.sqlserver:mssql-jdbc from 12.8.1.jre11 to 12.10.1.jre11
- com.networknt:json-schema-validator from 1.5.6 to 1.5.8
- com.sun.mail:jakarta.mail from 2.0.1 to 2.0.2
- commons-io:commons-io from 2.18.0 to 2.20.0
- dev.logchange:logchange-maven-plugin from 1.16.10 to 1.19.8
- io.github.classgraph:classgraph from 4.8.179 to 4.8.181
- net.javacrumbs.json-unit:json-unit-assertj from 4.1.0 to 4.1.1
- org.apache.commons:commons-collections4 from 4.4 to 4.5.0
- org.apache.httpcomponents.client5:httpclient5-fluent from 5.4.2 to 5.5
- org.apache.tika:tika-core from 3.1.0 to 3.2.2
- org.bouncycastle:bcpkix-jdk18on from 1.80 to 1.81
- org.bouncycastle:bcprov-jdk18on from 1.80 to 1.81
- org.codehaus.mojo:jaxb2-maven-plugin from 3.2.0 to 3.3.0
- org.eclipse.angus:angus-mail from 2.0.3 to 2.0.4
- org.projectlombok:lombok from 1.18.36 to 1.18.38
- org.springframework.boot:spring-boot-configuration-processor from 3.4.3 to 3.5.4
- org.springframework.boot:spring-boot-maven-plugin from 3.4.3 to 3.5.4
- org.springframework.boot:spring-boot-starter-parent from 3.4.3 to 3.5.4
- org.wiremock:wiremock-jetty12 from 3.12.1 to 3.13.1


[10.3.0] - 2025-08-06
---------------------

### Added (6 changes)

- Added created range filter as default for log list page.
- Temp files created by the application (with a "NEXUSe2e"-prefix) are deleted on a scheduled basis.
- Added return pipeline functionality to the \`HttpReceiverService\`. This allows the service to return a response to the client after processing the request.
- Added indexes to improve log query performance with default filters.
- Added multiple SOAP components to provide SOAP support (\`SoapPackagerPipelet\`, \`SoapUnpackagerPipelet\`, \`WsSecurityPipelet\`).
- Added the following routing properties to the \`XPathRoutingPipelet\`: \`choreographyId\`, \`actionId\`, \`sourcePartnerId\` and \`targetPartnerId\`.

### Changed (1 change)

- Changed log filter to use equals instead of like comparisons. Depends on case insensitive database collation.

### Dependency updates (2 changes)

- org.postgresql:postgresql from 42.7.5 to 42.7.7
- Updated frontend packages.


[10.2.6] - 2025-06-12
---------------------

### Added (1 change)

- Sftp Polling service now supports optionally the insecure DSS signature algorithm for backwards compatibility.


[10.2.5] - 2025-06-05
---------------------

### Added (1 change)

- Added multiple indexes for foreign keys to improve performance and prevent deadlocks

### Removed (1 change)

- Removed the external date picker npm package and used the vuetify component instead.

### Fixed (1 change)

- Fixed the translation key for manual action type filters in the frontend.


[10.2.4] - 2025-05-23
---------------------

### Dependency updates (1 change)

- com.evolvsys:esc-app-core from 4.1.3 to 4.1.5


[10.2.3] - 2025-05-21
---------------------

### Added (2 changes)

- The payload and meta data cards on the message detail page can be expanded and collapsed to reduce vertical space.
- Sftp polling service added.

### Changed (3 changes)

- Changed logic for the message status progress bar on the dashboard, so that small percentage values still show as a bar.
- CvsToJsonSplitter: handling of numbers modified for decimal separators and empty key objects are now removed.
- Show only messages from type normal in the failed messages table on the dashboard page

### Fixed (1 change)

- Fixed log caching unit test in devops pipeline

### Dependency updates (1 change)

- Updated frontend packages.


[10.2.2] - 2025-04-16
---------------------

### Added (4 changes)

- Added \`CopyPayloadMetaDataPipelet\` to copy payload metadata to the message.
- Added default key value replacements for \`\${NOW}\` as current datetime as ISO8601 string, \`\${NOW_MILLIS}\` as current datetime in milliseconds, and \`\${NOW_EPOCH}\` as current datetime in epoch time and \`\${NOW_DATE} as current date in ISO_DATE format.
- Added \`HttpHeaderPipelet\` to add custom HttpHeaders to message metadata to be later processed by HttpSenderServices.
- Added \`JsonAggregatorTransformatorService\` as a new transformator support service to aggregate JSON payloads.

### Changed (1 change)

- Changed maven compile plugin configuration to be more reliable for development

### Fixed (3 changes)

- Fixed \`BatchLoaderUtilsTest\` to be more reliable
- Optimized startup for the \`KeyValueService\` to prevent unnecessary errors
- Fixed internal MetaData add Method to correctly adding all values and not overwriting them.

### Dependency updates (1 change)

- Updated frontend packages.


[10.2.1] - 2025-03-20
---------------------

### Fixed (1 change)

- Fixed a bug in the route edit view, where it was not possible to save a route.

### Dependency updates (13 changes)

- com.azure.spring:spring-cloud-azure-dependencies from 5.19.0 to 5.20.0
- com.azure:azure-identity-broker from 1.1.9 to 1.1.12
- com.evolvsys:esc-app-core-test from 4.0.1 to 4.1.3
- com.evolvsys:esc-app-core from 4.0.1 to 4.1.3
- com.evolvsys:esc-common-parent-pom from 6.1.8 to 6.1.12
- com.fasterxml.jackson.dataformat:jackson-dataformat-csv from 2.18.2 to 2.18.3
- com.networknt:json-schema-validator from 1.5.5 to 1.5.6
- dev.logchange:logchange-maven-plugin from 1.16.8 to 1.16.10
- org.awaitility:awaitility from 4.2.2 to 4.3.0
- org.springframework.boot:spring-boot-configuration-processor from 3.4.2 to 3.4.3
- org.springframework.boot:spring-boot-maven-plugin from 3.4.2 to 3.4.3
- org.springframework.boot:spring-boot-starter-parent from 3.4.2 to 3.4.3
- org.wiremock:wiremock-jetty12 from 3.11.0 to 3.12.1


[10.2.0] - 2025-02-27
---------------------

### Important notes

- If your system has invalid configuration (e.g. choreographies or partners) with duplicated keys, you might need to fix them before upgrading.
- If your database has a lot of entries, the upgrade process might take a while to create all the required indexes.
- If your database has entries with more than 255 characters, you might need to adjust the value in the database of the affected rows before upgrading.

### Added (3 changes)

- Added inflow pipeline to route preview
- Added table row highlighting for preview mode
- Added multiple indexes and unique indexes for varchar columns

### Changed (4 changes)

- Changed accepted file types for certificate uploads
- Changed the look of the customize page in the frontend.
- Changed width of a key value list in frontend.
- Changed size for multiple varchar columns to 255. This includes nearly all identifiers like choreography_id, action_id, partner_id, connection_id, service_id and some others.

### Fixed (3 changes)

- Fixed a bug in the choreography preview, where the links to routes would misroute
- Added a missing gql property for the message detail page.
- Fixed a bug, where unsaved ui settings would not be resetted.


[10.1.11] - 2025-02-06
----------------------

### Added (3 changes)

- Added \`CsvToJsonSplitterTransformatorService\`. Converts CSV Files to one or more JSON files.
- The \`HttpReceiverService\` now supports a parameter for a post processing \`TransformatorService\`.
- Added \`UnzipTransformatorService\`.

### Changed (1 change)

- Changed button text from apply to save

### Dependency updates (11 changes)

- com.evolvsys:esc-common-parent-pom from 6.1.7 to 6.1.8
- com.fasterxml.jackson.dataformat:jackson-dataformat-csv from 2.17.3 to 2.18.2
- dev.logchange:logchange-maven-plugin from 1.16.7 to 1.16.8
- net.javacrumbs.json-unit:json-unit-assertj from 4.0.0 to 4.1.0
- org.apache.httpcomponents.client5:httpclient5-fluent from 5.4.1 to 5.4.2
- org.apache.tika:tika-core from 3.0.0 to 3.1.0
- org.springframework.boot:spring-boot-configuration-processor from 3.4.1 to 3.4.2
- org.springframework.boot:spring-boot-maven-plugin from 3.4.1 to 3.4.2
- org.springframework.boot:spring-boot-starter-parent from 3.4.1 to 3.4.2
- org.wiremock:wiremock-jetty12 from 3.10.0 to 3.11.0
- Updated frontend packages


[10.1.10] - 2025-01-28
----------------------

### Added (3 changes)

- Added frontend screenshot tests.
- Added new parameter 'content_pointer' to the 'JsonSplitterTransformatorService' to navigate to a specific json node used as the payload content after splitting the array.
- Added \`PayloadMetadataToMessagePipelet\` to copy metadata from the payload(s) based on configurable parameters

### Changed (1 change)

- Changed user config validation to require either username or email instead of always requiring username

### Dependency updates (18 changes)

- com.azure.spring:spring-cloud-azure-dependencies from 5.18.0 to 5.19.0
- com.azure:azure-identity-broker from 1.1.8 to 1.1.9
- com.evolvsys:esc-app-core-test from 4.0.0 to 4.0.1
- com.evolvsys:esc-app-core from 4.0.0 to 4.0.1
- com.evolvsys:esc-common-parent-pom from 6.1.3 to 6.1.6
- com.google.guava:guava from 33.3.1-jre to 33.4.0-jre
- com.networknt:json-schema-validator from 1.5.4 to 1.5.5
- dev.logchange:logchange-maven-plugin from 1.12.0 to 1.16.7
- org.bouncycastle:bcpkix-jdk18on from 1.79 to 1.80
- org.bouncycastle:bcprov-jdk18on from 1.79 to 1.80
- org.mozilla:rhino from 1.7.15 to 1.8.0
- org.postgresql:postgresql from 42.7.4 to 42.7.5
- org.springframework.boot:spring-boot-configuration-processor from 3.4.0 to 3.4.1
- org.springframework.boot:spring-boot-maven-plugin from 3.4.0 to 3.4.1
- org.springframework.boot:spring-boot-starter-parent from 3.4.0 to 3.4.1
- org.wiremock:wiremock-jetty12 from 3.9.2 to 3.10.0
- Updated frontend packages.
- Updated frontend date picker package.


[10.1.9] - 2024-12-03
---------------------

### Added (4 changes)

- Added a filter option for partnerIds in the route list.
- Added a swap button for target and source partner in manual messages.
- Added Json header information as metadata for each separate json payload in \`JsonSplitterTransformatorService\`
- Added Json pointer traversal (draft-ietf-appsawg-json-pointer-03) for array splitting at a deeper json node in \`JsonSplitterTransformatorService\`

### Changed (2 changes)

- Changed internal http client ssl usage to new version
- Changed \`HttpOauth2AuthenticationSupportService\` to use new spring implementation instead of custom one

### Dependency updates (9 changes)

- com.evolvsys:esc-app-core-test from 3.3.0 to 4.0.0
- com.evolvsys:esc-app-core from 3.3.0 to 4.0.0
- com.evolvsys:esc-common-parent-pom from 6.1.2 to 6.1.3
- com.networknt:json-schema-validator from 1.5.3 to 1.5.4
- commons-io:commons-io from 2.17.0 to 2.18.0
- dev.logchange:logchange-maven-plugin from 1.11.0 to 1.12.0
- org.springframework.boot:spring-boot-configuration-processor from 3.3.5 to 3.4.0
- org.springframework.boot:spring-boot-maven-plugin from 3.3.5 to 3.4.0
- org.springframework.boot:spring-boot-starter-parent from 3.3.5 to 3.4.0


[10.1.8] - 2024-11-26
---------------------

### Changed (1 change)

- Config import is now synchronized against the database, to prevent multiple concurrent imports


[10.1.7] - 2024-11-20
---------------------

### Important notes

- Please check if your default manual messages are still showing up. The changes are in general backwards compatible, but if you have customized the default manual messages, you might need to adjust them.

### Added (1 change)

- Added a parameter \`Valid audiences\` for the \`OAuth2AuthenticationRulePipelet\`.

### Fixed (1 change)

- Fixed default manual message files and changelog list handling if NEXUSe2e is used as a library.

### Dependency updates (8 changes)

- com.azure:azure-identity-broker from 1.1.7 to 1.1.8
- com.evolvsys:esc-app-core-test from 3.2.1 to 3.3.0
- com.evolvsys:esc-app-core from 3.2.1 to 3.3.0
- com.evolvsys:esc-common-parent-pom from 6.1.1 to 6.1.2
- io.github.classgraph:classgraph from 4.8.177 to 4.8.179
- org.codehaus.mojo:versions-maven-plugin from 2.17.1 to 2.18.0
- org.mapstruct:mapstruct-processor from 1.6.2 to 1.6.3
- org.projectlombok:lombok from 1.18.34 to 1.18.36


[10.1.6] - 2024-11-15
---------------------

### Important notes

- With the new \`Valid response statuses\` parameter for \`HttpSender\` Outflow Services the accepted status codes include all in the range 2xx. This is a change from the old behavior, where only status codes 200 and 204 were considered valid responses.

### Added (3 changes)

- Added \`PlainHttpAcknowledgmentReferencePipelet\` to allow reliable connections with plain http requests.
- Added a hover effect on a duration field for certificates.
- Added a \`Valid response statuses\` parameter to \`HttpSender\` Outflow Services. The default value is \`2xx\`.

### Changed (1 change)

- Removed choreography and action as required parameters for \`RoutingByRequestParameterPipelet\`. If neither is provided in any other way there will still be a an error.

### Fixed (2 changes)

- Fixed a bug in the message table row that routed instead of selected.
- Fixed default values for parameters of type \`List\` not showing up.


[10.1.5] - 2024-11-08
---------------------

### Changed (1 change)

- Changed text for the download options for private keys to clarify what is being downloaded

### Fixed (2 changes)

- Fixed an issue with private key download as a zip file when any of the certificates in the chain has characters that are invalid for Windows file system
- Fixed a bug where the zip files for private key und public key downloads were switched

### Dependency updates (1 change)

- Updated minor dependencies.


[10.1.4] - 2024-10-18
---------------------

### Important notes

- Database structure will be changed (new tables).
- XML Config Schema has been changed. The changes are backward compatible and contain only an additional user property.

### Added (7 changes)

- Added external eslint and prettier rulesets.
- Added fallback views for detail pages with invalid ids.
- Added and extended form validation on frontend.
- Added a card for idle conversations on the dashboard page.
- Added a list and detail view for manual actions in the frontend.
- Added a manual action object, that tracks various manual actions (requeueing and stopping messages, importing configuration, purging logs or conversations). Those actions show who performed them and when and some additional information.
- Added \`OAuth2AuthenticationRulePipelet\` to validate OAuth2 incoming authentication tokens.

### Changed (4 changes)

- The certificate chain of a ca certificate will not be loaded in the list view. It will be loaded separatly for the preview drawer
- Separated list filter for external and internal partners.
- Changed internal jcache configuration from \`ehcache.xml\` to \`ehcache-nexuse2e.xml\` to allow for better customization.
- Changed internal log configuration from \`logback-spring.xml\` to \`logback-nexuse2e.yml\` to allow for better customization.

### Fixed (6 changes)

- Fixed manual message logs showing up for the wrong message if the repeat option was greater than 1.
- Fixed status validation of the referenced message for acknowledgments
- Fixed potential endless running error in KeyValue services
- Fixed potential deadlock while logging messages on SqlServer when receiving multiple concurrent messages
- Fixed potential deadlock in mssql during config import
- Automatic registration and deregistration of scheduled services after configuration import has been fixed.

### Dependency updates (1 change)

- Updated minor dependencies.


[10.1.3] - 2024-07-30
---------------------

### Fixed (1 change)

- Fixed manual message ui.


[10.1.2] - 2024-07-29
---------------------

### Important notes

- Existing \`HttpSenderServices\` are automatically remapped to the new synchronous \`HttpSenderService\`. If you want to change it back to the old Variant you need to change the componentId in your Service to \`ReactiveHttpSenderService\`.

### Added (6 changes)

- Added the conversation id filter to the message list.
- Added url sorting for tables, that dont have pagination.
- Added a \`JsonSchemaRulePipelet\` that validates message payloads against a JSON schema.
- Added a messageId field to the manual message page. This allows to send a message with a user defined Id. Note that the Id must not be used by any other message.
- Added a source partner field to the manual message page. It defaults to the default local identity but can be changed to any other partner. This allows to send messages on behalf of external partners to your local identity.
- Added a new type of \`HttpSenderService\` which uses a dedicated synchronous HttpClient instead of the reactive HttpClient. The existing \`HttpSenderService\` is now renamed to \`ReactiveHttpSenderService\`. Both have the same parameters and functions, but the reactive version may have some issues with older HttpServers so the synchronous variant is generally preferred.

### Changed (3 changes)

- Changed the color of conversation status "STOPPED" from yellow to grey to match message status.
- The parameter \`max_in_memory_size\` for \`HttpPollingService\` has changed to accept \`-1\` as unlimited size. Also the default value has been changed to \`-1\`.
- The button for saving the imported configuration is not disabled if fatal errors where detected during the upload. The import still fails if the fatal errors have not been fixed via the config ui.

### Fixed (7 changes)

- Fixed the copy button function on the config page.
- Fixed missing key value properties in config import and merged view.
- The display for payloads has been fixed and will not overflow, when no file extension is provided.
- The function for displaying durations is now able to display milliseconds.
- Fixed oauth2 path in ui if context-path is not set to root
- Fixed the content streaming option in \`HttpSenderService\`.
- Fixed missing validation in the config xml for invalid \`routeIds\` in choreographies and actions.


[10.1.1] - 2024-07-11
---------------------

### Added (2 changes)

- Added a \`transformator_service\` parameter to the \`HttpPollingService\` to allow a supporting service transforming the payload before processing the resolver pipeline.
- Added \`JsonSplitterTransformatorService\`, a Support Service to split json payload arrays into multiple payloads.

### Fixed (2 changes)

- Fixed dependency error in \`KeyValueSupportServices\` if they depend on each other
- Added missing inflow pipeline properties to route config import


[10.1.0] - 2024-07-08
---------------------

### Important notes

- If any of the removed connection properties were used the configuration needs to be adapted to the new system.

### Added (12 changes)

- Added an optional inflow pipeline for routes. The pipeline will be executed after the default resolver pipeline but before the actual message is validated, persisted and dispatched.
- Added \`SecureInboundRulePipelet\` as a replacement for the old connection property \`forceSecureInbound\`. The pipelet should be used in a Route inbound pipeline.
- Added \`HttpIpAddressRulePipelet\` as a replacement for the old connection properties \`validIPv4Addresses\` and \`validIPv6Addresses\`. The pipelet should be used in a Route inbound pipeline.
- Added \`HttpProtocolRulePipelet\` as a replacement for the old connection property \`validSslProtocols\`. The pipelet should be used in a Route inbound pipeline.
- Added \`HttpCipherRulePipelet\` as a replacement for the old connection property \`validSslCiphers\`. The pipelet should be used in a Route inbound pipeline.
- Added \`ClientCertRulePipelet\` as a replacement for the old connection property \`validClientCertificate\`. The pipelet should be used in a Route inbound pipeline.
- Added \`MetaDataPipelet\` to add static meta data values to messages.
- Added a optional Regular Expression pattern to the directory scanner for filtering filenames.
- Optional FileSavePipelet added. Its only used for additional copies in the filesystem. The FileSaveSenderService is still the primary way to store files in filesystem.
- Added the component help text to the preview drawer of the component list page.
- Added the service stop button and validated its funcionality on the service detail page.
- Added a filter for choreographies in message and conversation lists.

### Changed (2 changes)

- Changed minor ui components in the app.
- Renamed \`SenderService\` to \`OutflowService\` and \`Service\` to \`InflowService\` for clarification. XML config schema changed due to this renaming.

### Removed (1 change)

- Removed the following connection properties: \`validClientCertificate\`, \`forceSecureInbound\`, \`validIPv4Addresses\`, \`validIPv6Addresses\`, \`validSslProtocols\` and \`validSslCiphers\`. All related features are now implemented as various Pipelets that can be used in an inbound pipeline for a Route.

### Fixed (1 change)

- Fixed an error while adding multiple routes at the same time to a choreography or action.


[10.0.10] - 2024-07-03
----------------------

### Added (4 changes)

- Added DatabaseConnectionSupportService to enable additional database connections to be used in services.
- Added DatabaseSenderService to save payloads into a provided table.
- Added PersistentTimestampPipelet to update a provided key value property with the current timestamp of the pipelet execution.
- Added DatabasePollingService to read data from a provided table.

### Dependency updates (1 change)

- Updated spring-boot to 3.3.0 and Graphql to 22.0


[10.0.9] - 2024-06-21
---------------------

### Added (4 changes)

- Added persistent properties that can be used to replace values in parameters.
- Persistent properties can be read or modified in pipelets or services.
- Added AzureKeyVaultKeyValueSupportService to replace values in parameters with key vault properties.
- Directory scanner got extend with configuration options for archiving processed messages independent of the delete flag.


[10.0.8] - 2024-06-18
---------------------

### Added (4 changes)

- Download for client certificates, that includes all public certificates and the private key, which is encoded with the password of the keystore.
- Download for public and client certificates, that combines the complete certificate chain in a .pem file.
- Download for public and client certificates, that includes each certificate of the chain as a single file in a zip.
- Support services, which can be used in other services

### Changed (1 change)

- Removed basic auth parameters in HttpSenderService. A new parameter was added that can use a HttpAuthentication support service.


[10.0.7] - 2024-06-06
---------------------

### Added (4 changes)

- Keyvault Integration for spring properties is now available. It can be used for database passwords, secrets, etc.
- Entra ID (Azure AD) integration is available for all users. Its used for authentication, permissions/roles are configured in the application.
- XML Schema validation added for payloads. Schemas can be provided in the UI or via the local file system.
- XPath routing and MetaData generation added. Xpath statements are applied to payloads and the results are stored in metadata or used to modify the routing information.


[10.0.6] - 2024-05-31
---------------------

### Added (1 change)

- Added a new parameter type 'Key-Value-Pair'.

### Changed (1 change)

- Restricted visibility of other users to admins

### Fixed (1 change)

- Added missing user roles to config import and export


[10.0.5] - 2024-05-24
---------------------

### Fixed (1 change)

- General bugfixes


[10.0.4] - 2024-05-03
---------------------

### Fixed (1 change)

- General bugfixes


[10.0.3] - 2024-04-25
---------------------

### Fixed (1 change)

- General bugfixes


[10.0.2] - 2024-04-24
---------------------

### Fixed (1 change)

- General bugfixes


[10.0.0] - 2024-04-10
---------------------

### Added (19 changes)

- The whole ui is now also usable on mobile devices.
- Routes are a replacement for the participant concept and define the actually valid routes between internal and external partners
- All message or log containing screens are updated automatically. No need to manually reload the log or reportings screens anymore
- Personal configurations can be customized in the profile in the top right and is only valid for the given browser and logged in user
- The server wide ui settings are done on the left in settings on the very bottom on the ui parameters tab. This settings are stored in the database and they are valid for all users
- All system information, libraries, jvm parameters and jar files can be exported for debugging purposes
- Manual messages provide a dropdown for predefined messages you can pick from instead of uploading them every single time. Configuration is done in application-nexuse2e.properties file
- Certificates are now managed in a structure called containers. Only containers are referenced. You can change the active certificate within the containers at any time
- Client certificate validation is now possible as an optional configuration in tomcat and therefore in NEXUSe2e. It can be defined per partner connection
- There are now firewall like configuration options within NEXUSe2e to help with security. Any partner can be limited to a specific ip address or range
- The UI can be limited to a specific IP range if not required to accessible from the outside
- Browser navigation is now possible.
- All messages, conversions or filtered lists are available as deep links. Just copy the URL from your browser.
- There is no default admin password anymore. It can be preconfigured or is randomly generated on first startup.
- Separation between Frontend and Backend is removed. All services and pipelets can be used in all contexts
- Services are key for communication routes. Services refer to pipelines which are responsible for heavy lifting
- Components are still visible but they are loaded automatically and you cant add them manually any more
- Actions can refer to context specific pipelines e.g. modifying a specific message type like orders only
- Partners are split into local and external partners. Local partners are referring to internal connections like storage systems or SAP systems

`),p=["innerHTML"],v=o({__name:"index",setup(m){return(h,g)=>(n(),a(r,null,{default:e(()=>[i(c,{cols:"12"},{default:e(()=>[s("div",{innerHTML:d(l)},null,8,p)]),_:1})]),_:1}))}});export{v as default};
