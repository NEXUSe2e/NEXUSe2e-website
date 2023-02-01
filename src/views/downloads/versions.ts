interface Version {
  version: string
  md5: string
  sha256: string
  download?: string
  changes: string[]
  knownIssues?: string[]
}

const versions: Version[] = [
  {
    version: 'NEXUSe2e 5.11.5',
    md5: 'BB37D202B5F4B6F52E02AE73489BE78A',
    sha256: '358896BD9A92129EBABE5B5CC10802935930C23DA5828B55B28B7C5156EDC2C2',
    download: 'v5.11.5/nexuse2e-webapp-5.11.5.war',
    changes: [
      'Added basic auth option for http receiver.',
      'Fixed Smtp Sender for non ebxml messages. Added optional subject and body config fields that can include system properties.',
      'Improved token replacement.'
    ]
  },
  {
    version: 'NEXUSe2e 5.11.1',
    md5: '5366B9E97F13A489B0540DC7299698CD',
    sha256: '2FD7F162692C3A27D6815F931AEF962AC6A87B42349F661337B93589C1A3BFB9',
    download: 'v5.11.1/nexuse2e-webapp-5.11.1.war',
    changes: [
      'Upgraded Log4j 1 to Log4j 2 (version 2.17.1)<br><br>**Important**: The log4j.properties from previous NEXUSe2e releases cannot be used anymore. The file needs to converted to the Log4j 2 xml format for this and upcoming NEXUSe2e releases. A log4j2.xml is included with custom NEXUSe2e database logging and a RollingFileAppender enabled by default. For more information see Log4j 2 configuration section of this website.',
      'Removed Notifiers section from UI as part of the Log4j 2 upgrade. Database and Email logging can be configured through Log4j 2 config file now.',
      'Bumped Postgres version to version 42.2.25',
      'Added new responsive ui (additive as an alternative to the existing ui). The new ui can be opended in the browser by adding /ui/ to the NEXUSe2e root url (e.g. https://localhost:8080/NEXUSe2e/ui/). Only the "new" dashboard (introduced in version 5.9.8), Transaction Reporting and the Engine Log are included in the ui at this point.'
    ]
  },
  {
    version: 'NEXUSe2e 5.9.15',
    md5: '2D3869567E10047C90CD7729A4B48864',
    sha256: 'C199A51FEA4FC662B682751D2ACA2990DF1E65413BBE24FD85A8AEC208CE6F39',
    download: 'v5.9.15/nexuse2e-webapp-5.9.15.war',
    changes: [
      'Added http header folding option to prevent content type from being folded into a new line.'
    ]
  },
  {
    version: 'NEXUSe2e 5.9.11',
    md5: '8E547BF1B85D871A283C73FCEB67BC86',
    sha256: 'EAB34A337ECD3E300AA2EBDC3657674D5CF2E9E4ED176C4D2340DFAE56FB2C0B',
    changes: [
      'Implemented HttpResponses for synchronous messaging',
      'Fixed deadlock when synchronously receiving messages',
      'Fixed backend status'
    ],
    knownIssues: [
      '"Synchronous" for incoming messages still does not work properly in combination with "Reliable"'
    ]
  }
]

export default versions
