import{m as t}from"./marked.esm-8ZxQ78w7.js";import{d as a,c as i,w as e,V as n,o,a as r,b as s,u as d,e as l}from"./index-CnATzIar.js";const c=t(`

# Changelog


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
`),p=["innerHTML"],v=a({__name:"index",setup(h){return(u,f)=>(o(),i(n,null,{default:e(()=>[r(l,{cols:"12"},{default:e(()=>[s("div",{innerHTML:d(c)},null,8,p)]),_:1})]),_:1}))}});export{v as default};
