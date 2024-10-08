
export const rawDictionary = [
  {
    key: 'Pipeline',
    value:
      'A Pipeline bundles up a list of code snippets called Pipelets. This snippets are executed one by one in sequence.'
  },
  {
    key: 'Forward Pipeline',
    value:
      'The forward pipeline is used for all the common processes you want to configure. However sometimes you want to have synchronous or more complex process which might require more flexibility in configuration.'
  },
  {
    key: 'Return Pipeline',
    value: 'The return pipeline is used to process the synchronous response for a message.'
  },
  {
    key: 'Error Pipeline',
    value:
      'In some cases you want to have different behavior depending on the outcome of the triggered process. In this cases, the error pipeline give you an option to configure extended behavior in case messages are failing.'
  },
  {
    key: 'Resolver Pipeline',
    value:
      'A special pipeline used by services to process messages before sending them on the wire to external systems or forwarding them into further processing inside of NEXUSe2e. e.g. A HTTPSenderService as a generic component can be configured with a ebxml resovler pipeline to behave as a EbxmlSenderService.'
  },
  {
    key: 'Pipelet',
    value:
      'A single discrete piece of code that can be chained with other pieces to achieve the functionality you want to configure for your business process.'
  },
  {
    key: 'Route',
    value:
      'One route describes the connection between two partners. A route always requires the two partners and the connection, additionally you can provide an optional client certificate. For more details about routes, check the [Routing Concepts](#/new/docs/concepts/routes)'
  },
  {
    key: 'SSO',
    value:
      'The user settings provide now a selection for authentication type. While the old version of NEXUSe2e only provided local accounts, the new version provides also SSO via OAuth2 providers.'
  },
  {
    key: 'Service',
    value:
      'A service in general is a component that normally used as a connection point to the outside world beyond NEXUSe2e. It might send Data out, or just receive data no matter whether its scheduled or triggered by an incoming http request.'
  },
  {
    key: 'Outflow Service',
    value:
      'A Outflow Service is the implementation of service that actually sends data to the outside. This can be integrations with your backend or standard messages to your trading partners. Examples are `HttpSenderService` or `FileSaveSenderService`.'
  },
  {
    key: 'Inflow Service',
    value:
      'Inflow Services are the components for getting data inside NEXUSe2e. This services are supposed to fetch or receive data from outside systems. The most prominent Inflow Services are DirectoryScanner and HttpReceiverService.'
  },
  {
    key: 'Support Service',
    value:
      'A new concept are Support Services. This services are referenced directly or under the hoods to provide functionality to other components. As soon as you use Key Value Properties, you use a support service that provides the framework for replacing this values for you. Same for the auth services.'
  },
  {
    key: 'Certificate Containers',
    value:
      'Certificates are always somewhat complicated but we tried to make it a bit more transparent. Therefore we added the concept of a Container of certificates. This containers bundle certificates for you and they can be referenced in the configuration. This way, you only reference the container once and change the content of the container at any time without needing to keep track of all the references to it. This works for partner certificates and for your client certificates used for your local identity.'
  },
  {
    key: 'Choreographies',
    value:
      'Choreographies describe a business process with one or more actions. The Choreography orchestrates the different actions and how they are supposed to be chained together.'
  },
  {
    key: 'Conversation',
    value:
      'A conversation describes one run of a choreography. This conversation refers to you messages, keeps the current state and it is always validated against the references choreography.'
  },
  {
    key: 'Action',
    value:
      'The action is a single step with choreography. You can define a action as starting, terminated or just a intermediate step within a multi step choreography. Actions can also be looped to have multiple messages using the same action within one choreography.'
  },
  {
    key: 'Components',
    value:
      'Components are all the building blocks NEXUSe2e used to provide its toolbox like functionality. While this were manually manged in the old version the next generation version uses automated scanning processes to gather all the available features. Therefore the component screen is mostly used to look for a specific feature or some description details and configuration settings. See [Components](#/new/docs/concepts/components) for more details.'
  }
]
