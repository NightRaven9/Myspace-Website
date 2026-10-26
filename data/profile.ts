// All site content lives here. Edit this file to update the website — no component changes needed.

export type DiagramKey = 'event-driven' | 'api-led' | 'b2b-edi' | 'error-handling' | 'migration';

export const profile = {
  name: 'Sauryadeep Deb',
  role: 'SAP BTP Integration Consultant',
  tagline:
    'I design and deliver secure, scalable integrations on SAP Integration Suite — connecting S/4HANA, ECC and cloud platforms with the third-party systems your business runs on.',
  location: 'India · Available for remote engagements',
  email: 'debsauryadeep@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sauryadeep-deb-b042a71a0',
  resumePath: '/Sauryadeep-Deb-SAP-BTP-Integration-Resume.pdf',
  summary:
    'Highly skilled SAP Integration Developer with around six years of professional experience designing and implementing robust integration solutions. I analyse business requirements and work closely with clients, cross-functional teams and stakeholders to deliver scalable, efficient solutions that consistently meet project objectives.',
};

export const stats = [
  { value: '6', suffix: 'yrs', label: 'SAP integration experience' },
  { value: '70', suffix: '+', label: 'Interfaces delivered independently on one programme' },
  { value: '14', suffix: '', label: 'SAP Cloud Integration adapter types used in production' },
  { value: '5', suffix: '', label: 'Junior consultants mentored' },
];

export const experience = [
  {
    company: 'Deloitte USI',
    title: 'Consultant',
    period: 'May 2024 – Present',
    highlights: [
      'Contributed to a Greenfield SAP S/4HANA implementation for a Healthcare client across three waves, independently delivering 70+ interface objects integrating with multiple third-party systems.',
      'Led development of integration objects for the LOG, LOG-TM, RTR and MDG S/4HANA squads.',
      'Worked on Greenfield SAP S/4HANA implementation programmes for two Utility clients.',
    ],
  },
  {
    company: 'Capgemini',
    title: 'Associate Consultant',
    period: 'Feb 2021 – May 2024',
    highlights: [
      'Delivered end-to-end integrations across SAP S/4HANA, ECC, C4C, FMS, Salesforce, SharePoint, Azure Blob Storage, Snowflake and 3PL providers.',
      'Migrated SAP Cloud Integration flows from Neo to Cloud Foundry using Postman collections.',
      'Rapidly built a client-requested Error Monitoring Dashboard during Go-Live and Hypercare.',
      'Mentored five young professionals and supported colleagues to hit sprint deliveries.',
    ],
  },
];

export const skillGroups = [
  {
    title: 'SAP Integration Suite',
    items: [
      'SAP Cloud Integration (CPI)',
      'SAP API Management',
      'Integration Advisor (EDI / MIG / MAG)',
      'Event Mesh',
      'Advanced Event Mesh (Solace)',
      'Open Connectors',
    ],
  },
  {
    title: 'SAP BTP & Connectivity',
    items: [
      'BTP Cockpit — sub-accounts, entitlements, service instances',
      'Cloud Connector',
      'Communication Systems & Arrangements',
      'RFC destinations',
      'Certificates & key stores',
      'Neo → Cloud Foundry migration',
    ],
  },
  {
    title: 'Mapping & Transformation',
    items: ['Groovy scripts', 'XSLT', 'Graphical message mapping', 'User Defined Functions', 'Value mapping', 'Standard converters'],
  },
  {
    title: 'Adapters',
    items: ['HTTP / REST', 'OData', 'SOAP', 'IDoc', 'XI', 'ProcessDirect', 'SFTP', 'Mail', 'AMQP', 'JMS', 'JDBC', 'AS2', 'Azure', 'Open Connectors'],
  },
  {
    title: 'Security & Operations',
    items: [
      'OAuth / certificate-based auth',
      'Encryption & signing',
      'Exception sub-processes & retries',
      'Custom alerting',
      'Root-cause analysis',
      'Go-Live & Hypercare',
    ],
  },
  {
    title: 'Testing & Tooling',
    items: ['Postman', 'SoapUI', 'Mendelson AS2', 'Technical specs & unit test cases', 'Code reviews', 'Gen-AI assisted development'],
  },
];

export const systems = [
  'SAP S/4HANA',
  'SAP ECC',
  'SAP C4C',
  'SAP FMS',
  'SAP Workflow',
  'Salesforce',
  'Microsoft SharePoint',
  'Azure Blob Storage',
  'Snowflake',
  '3PL providers',
  'EDI trading partners',
  'Custom REST / SOAP apps',
];

export const certifications = [
  {
    name: 'SAP Certified — Integration with SAP Integration Suite',
    issuer: 'SAP',
    // TODO: add a Credly / SAP verification link
    url: '',
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    // TODO: add a Microsoft Learn verification link
    url: '',
  },
];

export const publications = [
  {
    title: 'Converting simple date format to JSON date format with a user-defined function',
    venue: 'SAP Community — Technology Blog',
    url: 'https://community.sap.com/t5/technology-blog-posts-by-members/converting-simple-date-format-to-json-date-format-with-user-defined/ba-p/13572397',
  },
];

export const education = {
  degree: 'B.Tech, Electronics and Communication Engineering',
  school: 'SRM University, Chennai',
  year: '2020',
  note: 'First Class',
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  context: string;
  challenge: string[];
  approach: string[];
  outcomes: string[];
  stack: string[];
  diagram: DiagramKey;
};

// Drafted from the resume. Client names are intentionally anonymised.
// Refine each one with real numbers (volumes, error-rate reductions, timelines) where you are able to share them.
export const caseStudies: CaseStudy[] = [
  {
    slug: 'healthcare-s4hana-greenfield',
    title: '70+ interfaces for a Greenfield S/4HANA rollout',
    client: 'Healthcare provider',
    summary:
      'Independently delivered more than 70 interface objects across three implementation waves, connecting a new S/4HANA core to the client’s third-party landscape.',
    context:
      'A healthcare organisation was replacing its legacy ERP with a Greenfield SAP S/4HANA implementation, rolled out in three waves. Every wave brought a new set of business processes that had to exchange data with external systems from day one.',
    challenge: [
      'A large interface inventory delivered against fixed wave go-live dates.',
      'Many different third-party systems, each with its own protocol, format and security model.',
      'Interfaces had to be supportable by an operations team after Hypercare.',
    ],
    approach: [
      'Owned the design, build and unit testing of 70+ integration objects end to end.',
      'Standardised iFlow patterns — reusable exception sub-processes, logging and alerting — so each new interface started from a proven template.',
      'Chose the right adapter per partner (OData, SOAP, SFTP, IDoc, REST) and secured connectivity via BTP Cloud Connector, certificates and OAuth.',
      'Produced technical specifications, unit test cases and test evidence for every object ahead of FUT.',
    ],
    outcomes: [
      '70+ interfaces delivered independently across three waves.',
      'Consistent, template-driven iFlows that were easier for the support team to monitor and troubleshoot.',
    ],
    stack: ['SAP Cloud Integration', 'S/4HANA', 'Cloud Connector', 'OData', 'IDoc', 'SFTP', 'Groovy'],
    diagram: 'api-led',
  },
  {
    slug: 'utilities-integration-lead',
    title: 'Leading integration for four S/4HANA workstreams',
    client: 'Two utility companies',
    summary:
      'Led integration object development for the Logistics, Transportation Management, Record-to-Report and Master Data Governance squads on Greenfield S/4HANA programmes.',
    context:
      'Two utility clients were implementing SAP S/4HANA from scratch. Integration requirements came from several functional squads at once, each with its own priorities and timelines.',
    challenge: [
      'Coordinating integration demand across four functional squads (LOG, LOG-TM, RTR, MDG).',
      'Master data and financial postings that had to stay consistent across systems.',
      'Balancing delivery speed with SAP integration best practices.',
    ],
    approach: [
      'Acted as the integration point of contact for the squads, translating functional requirements into integration designs.',
      'Designed iFlows and API policies with scalability, maintainability and security in mind.',
      'Performed code reviews and guided teammates on mapping, error handling and adapter configuration.',
    ],
    outcomes: [
      'Integration objects delivered for LOG, LOG-TM, RTR and MDG squads.',
      'A shared set of design conventions that kept multi-squad delivery consistent.',
    ],
    stack: ['SAP Integration Suite', 'API Management', 'S/4HANA', 'MDG', 'TM', 'XSLT', 'Message mapping'],
    diagram: 'api-led',
  },
  {
    slug: 'event-driven-architecture',
    title: 'Event-driven integration with Advanced Event Mesh',
    client: 'Enterprise SAP landscape',
    summary:
      'Implemented event-driven architecture on SAP Event Mesh and Advanced Event Mesh (Solace) — topics, queues, subscriptions and webhooks — to decouple S/4HANA from downstream consumers.',
    context:
      'Point-to-point synchronous calls between S/4HANA and multiple consumers were creating tight coupling: every new consumer meant another change in the core system.',
    challenge: [
      'Multiple consumers needed the same business events in near real time.',
      'Downstream outages must not block or lose events from the source system.',
    ],
    approach: [
      'Published business events from S/4HANA to topics in Event Mesh / Advanced Event Mesh.',
      'Configured queues and topic subscriptions per consumer for guaranteed delivery.',
      'Consumed events in SAP Cloud Integration via the AMQP adapter, enriching and routing them to target systems.',
      'Set up webhook subscriptions for consumers that preferred push delivery.',
    ],
    outcomes: [
      'Producers and consumers decoupled — new consumers can subscribe without changes to S/4HANA.',
      'Queued, durable delivery that tolerates downstream downtime.',
    ],
    stack: ['Advanced Event Mesh (Solace)', 'SAP Event Mesh', 'AMQP', 'SAP Cloud Integration', 'Webhooks'],
    diagram: 'event-driven',
  },
  {
    slug: 'neo-to-cloud-foundry-migration',
    title: 'Neo to Cloud Foundry migration',
    client: 'SAP BTP customer',
    summary:
      'Migrated SAP Cloud Integration content from the Neo environment to Cloud Foundry, using Postman collections to automate the move and comprehensive testing to prove it.',
    context:
      'With SAP’s Neo environment being retired, the client needed to move its live integration content to a Cloud Foundry tenant without disrupting business operations.',
    challenge: [
      'Moving many live iFlows plus their security material, value mappings and configurations.',
      'Re-pointing connectivity (Cloud Connector, destinations, certificates) to the new tenant.',
      'Proving functional parity before cut-over.',
    ],
    approach: [
      'Used Postman collections against the Cloud Integration APIs to migrate packages and artefacts in a repeatable way.',
      'Recreated sub-account services, roles, credentials and Cloud Connector configuration in Cloud Foundry.',
      'Regression-tested every interface with Postman, SoapUI and Mendelson AS2 before FUT and cut-over.',
    ],
    outcomes: [
      'Integration content running on Cloud Foundry ahead of the Neo retirement.',
      'A repeatable, scripted migration approach rather than manual re-creation.',
    ],
    stack: ['SAP BTP Neo', 'SAP BTP Cloud Foundry', 'Postman', 'SoapUI', 'Mendelson AS2', 'Cloud Connector'],
    diagram: 'migration',
  },
  {
    slug: 'error-monitoring-dashboard',
    title: 'Hypercare error-monitoring dashboard',
    client: 'Post-go-live support',
    summary:
      'Rapidly built a client-requested Error Monitoring Dashboard during Hypercare, giving the business clear visibility of integration failures.',
    context:
      'After go-live, business users had little visibility of failed messages — they relied on the integration team to spot and explain failures.',
    challenge: [
      'Failures were only visible inside the SAP Cloud Integration monitor.',
      'The client needed something quickly, during the high-pressure Hypercare window.',
    ],
    approach: [
      'Added standardised exception sub-processes and custom alerts across iFlows.',
      'Captured failure details (interface, partner, error reason, payload reference) centrally.',
      'Built a dashboard on top of the captured data, with failure-monitoring flows that notify the right team.',
    ],
    outcomes: [
      'Business and support teams can see integration failures without asking the integration team.',
      'Faster triage and root-cause analysis during and after Hypercare.',
    ],
    stack: ['SAP Cloud Integration', 'Exception sub-processes', 'JMS / Data Store', 'Mail adapter', 'OData APIs'],
    diagram: 'error-handling',
  },
];

export const architecturePatterns: { key: DiagramKey; title: string; description: string }[] = [
  {
    key: 'api-led',
    title: 'API-led connectivity',
    description:
      'Consumers call governed APIs in SAP API Management (OAuth, quotas, spike arrest). Cloud Integration orchestrates and transforms, and reaches on-premise SAP securely through Cloud Connector.',
  },
  {
    key: 'event-driven',
    title: 'Event-driven architecture',
    description:
      'S/4HANA publishes business events to Advanced Event Mesh topics. Durable queues fan out to each consumer, so systems are decoupled and downstream outages never lose events.',
  },
  {
    key: 'b2b-edi',
    title: 'B2B / EDI with trading partners',
    description:
      'Partners exchange EDI over AS2. Integration Advisor generates MIG/MAG mappings, and Cloud Integration converts and posts IDocs to S/4HANA — with MDNs and acknowledgements back to the partner.',
  },
  {
    key: 'error-handling',
    title: 'Error handling & monitoring',
    description:
      'Every iFlow shares a standard exception sub-process: transient errors retry via JMS and alert support once retries are exhausted; functional errors are persisted and surfaced on a monitoring dashboard for business visibility.',
  },
];
