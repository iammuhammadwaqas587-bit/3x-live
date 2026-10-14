import { ServiceItem, IndustryItem, CaseStudyItem, InsightArticle, LeadershipMember } from '../types';

export const COMPANY_INFO = {
  name: '3XTech Ltd',
  tradingName: '3XTECH Solution Services',
  tagline: 'Expert Project Management • Responsive Technical Support • Managed Network Services • Consulting Service',
  phone: '0207 101 3630',
  phoneFormatted: '0207 101 3630',
  phoneHref: 'tel:02071013630',
  supportPhone: '07756 910 999',
  supportPhoneHref: 'tel:07756910999',
  whatsapp: '+44 7999 500254',
  whatsappHref: 'https://wa.me/447999500254?text=Hello%203XTECH,%20I%20would%20like%20to%20learn%20more%20about%20your%20services.',
  email: 'info@3xtech.co.uk',
  address: 'Potters Bar, Hertfordshire, United Kingdom',
  operatingHours: 'Mon - Fri: 08:30 - 18:00 GMT (24/7 Managed Operations)',
  registration: 'Registered in England & Wales | 3XTech Ltd',
};

export const BUSINESS_SERVICES_DOMAINS = [
  'Managed IT',
  'Data Governance',
  'Enterprise Architecture',
  'Cloud Data Architecture',
  'Virtualization',
  'Visualization',
  'Modernisation',
  'Application Development',
  'Cybersecurity',
] as const;

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'project-management',
    category: 'project-management',
    categoryLabel: 'Project Management',
    title: 'Expert Project Management',
    subtitle: 'Seamless IT Project Delivery',
    tagline: 'From planning to implementation, our experienced team ensures your technology projects are delivered efficiently, on time, and with minimal disruption.',
    description: 'From planning to implementation, our experienced project team ensures your technology projects are delivered efficiently, on time, and with minimal disruption to your business. We provide clear communication, structured planning, and effective coordination throughout every stage.',
    deliverablesTitle: 'What We Deliver:',
    deliverables: [
      'Project planning and strategy',
      'Resource and timeline management',
      'Risk identification and mitigation',
      'Stakeholder communication and reporting',
      'Smooth implementation and delivery',
    ],
    keyFeatures: [
      'Project planning and strategy',
      'Resource and timeline management',
      'Risk identification and mitigation',
      'Stakeholder communication and reporting',
      'Smooth implementation and delivery',
    ],
    serviceMatrix: ['Managed IT', 'Enterprise Architecture', 'Modernisation', 'Data Governance'],
    processSteps: [
      { title: 'Discovery & Scoping', desc: 'Detailed requirement gathering, dependency mapping, and realistic milestone roadmaps.' },
      { title: 'Sprint & Timeline Execution', desc: 'Transparent sprint governance, resource orchestration, and daily impediment resolution.' },
      { title: 'Quality Assurance & Handover', desc: 'Rigorous validation, operational handover, user enablement, and post-launch stability.' },
    ],
    metrics: {
      stat: '99.4%',
      label: 'Projects delivered within scheduled milestones and agreed budget',
    },
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'technical-support',
    category: 'technical-support',
    categoryLabel: 'Technical Support',
    title: 'Responsive Technical Support',
    subtitle: 'Reliable Support When You Need It',
    tagline: 'Fast response and issue resolution to keep systems, networks, and cloud environments running smoothly.',
    description: 'Our technical support team is here to help resolve IT issues quickly and efficiently. Whether you need assistance with systems, networks, cloud environments, or day-to-day technical challenges, we provide responsive support to keep your business running smoothly.',
    deliverablesTitle: 'Why Choose Our Support:',
    deliverables: [
      'Fast response and issue resolution',
      'Experienced technical professionals',
      'Proactive troubleshooting',
      'Remote and ongoing support',
      'Clear communication and reliable service',
    ],
    keyFeatures: [
      'Fast response and issue resolution',
      'Experienced technical professionals',
      'Proactive troubleshooting',
      'Remote and ongoing support',
      'Clear communication and reliable service',
    ],
    serviceMatrix: ['Managed IT', 'Virtualization', 'Cybersecurity', 'Cloud Data Architecture'],
    processSteps: [
      { title: 'Immediate Triage & Response', desc: 'Rapid ticket intake, priority classification, and engineer assignment within minutes.' },
      { title: 'Root Cause Resolution', desc: 'Systematic troubleshooting across hardware, cloud services, software, and endpoints.' },
      { title: 'Preventative Hardening', desc: 'Applying system patches, telemetry logs, and safeguards to prevent recurring downtime.' },
    ],
    metrics: {
      stat: '< 12 min',
      label: 'Average resolution time for critical priority technical support tickets',
    },
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'managed-network',
    category: 'managed-network',
    categoryLabel: 'Managed Network',
    title: 'Managed Network Services',
    subtitle: 'Proactive Management for Reliable IT Performance',
    tagline: 'Continuous monitoring, maintenance, security, and performance optimisation for network infrastructure.',
    description: 'We take care of your network infrastructure so your team can focus on growing the business. Our managed services provide continuous monitoring, maintenance, security, and performance optimisation to help keep your systems reliable and secure.',
    deliverablesTitle: 'What We Offer:',
    deliverables: [
      'Network monitoring and management',
      'Proactive maintenance and support',
      'Performance optimisation',
      'Security updates and patch management',
      'Regular reporting and recommendations',
    ],
    keyFeatures: [
      'Network monitoring and management',
      'Proactive maintenance and support',
      'Performance optimisation',
      'Security updates and patch management',
      'Regular reporting and recommendations',
    ],
    serviceMatrix: ['Managed IT', 'Enterprise Architecture', 'Virtualization', 'Cybersecurity'],
    processSteps: [
      { title: 'Network Topology Assessment', desc: 'Auditing switches, routers, firewalls, and SD-WAN links to eliminate single points of failure.' },
      { title: 'Continuous 24/7 Monitoring', desc: 'Real-time telemetry, automated threat detection, and proactive bandwidth optimization.' },
      { title: 'Maintenance & Optimization', desc: 'Scheduled firmware patching, security policy reviews, and strategic infrastructure scaling.' },
    ],
    metrics: {
      stat: '99.99%',
      label: 'Network uptime maintained across all monitored client environments',
    },
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'consulting',
    category: 'consulting',
    categoryLabel: 'Consulting',
    title: 'Strategic Technology Solutions',
    subtitle: 'Strategic Technology Solutions for Your Business',
    tagline: 'Informed technology decisions that support your current needs and future growth through practical IT strategies.',
    description: 'Our consulting services help you make informed technology decisions that support your current needs and future growth. We work closely with your team to assess your environment, identify opportunities, and develop practical IT strategies.',
    deliverablesTitle: 'Our Consulting Services:',
    deliverables: [
      'IT infrastructure assessment',
      'Technology strategy and planning',
      'Cloud and architecture consulting',
      'System modernisation recommendations',
      'Cybersecurity and risk assessment',
      'Technology implementation guidance',
    ],
    keyFeatures: [
      'IT infrastructure assessment',
      'Technology strategy and planning',
      'Cloud and architecture consulting',
      'System modernisation recommendations',
      'Cybersecurity and risk assessment',
      'Technology implementation guidance',
    ],
    serviceMatrix: ['Enterprise Architecture', 'Cloud Data Architecture', 'Data Governance', 'Modernisation', 'Cybersecurity', 'Visualization', 'Application Development'],
    processSteps: [
      { title: 'Comprehensive Environment Audit', desc: 'In-depth assessment of architecture, applications, licensing, data pipelines, and security posture.' },
      { title: 'Strategic IT Blueprint', desc: 'Prioritised roadmap balancing business ROI, technology modernisation, and operational risk.' },
      { title: 'Implementation Stewardship', desc: 'Hands-on technical guidance, vendor evaluation, and governance from initiation through to execution.' },
    ],
    metrics: {
      stat: '£45M+',
      label: 'Identified efficiency and technology cost savings for client organizations',
    },
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80',
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'financial-services',
    title: 'Financial Services & Banking',
    subtitle: 'Security, compliance, and frictionless digital financial experiences',
    description: 'Helping tier-1 banks, insurance providers, and fintechs accelerate digital adoption, secure customer assets, streamline loan originations, and satisfy FCA regulatory guidelines.',
    challengesSolved: [
      'KYC/AML identity verification & automated onboarding',
      'Legacy core banking modernization without service outage',
      'Fraud detection engines using predictive anomaly models',
      'PCI-DSS and Open Banking API compliance standards',
    ],
    overview: [
      'Financial institutions face strict scrutiny to enhance operational resilience while accelerating digital services. Balancing speed with rigorous governance requires robust technical foundations.',
      '3XTech works alongside financial risk officers, enterprise architects, and operations leads to architect resilient cloud migration patterns, harden transactional networks, and establish 24/7 technical assurance.',
      'Our solutions ensure banking systems comply with FCA regulations, Open Banking requirements, and the Digital Operational Resilience Act (DORA).'
    ],
    strategicFocus: [
      {
        title: 'Core Infrastructure Modernisation',
        desc: 'De-coupling legacy mainframes into high-availability containerised microservices without downtime.'
      },
      {
        title: 'Cybersecurity & Zero-Trust Governance',
        desc: 'Defence-in-depth architecture, endpoint encryption, and automated compliance auditing for PCI-DSS v4.0.'
      },
      {
        title: 'Operational Resilience & Business Continuity',
        desc: 'Multi-region failover configurations and real-time telemetry ensuring uninterrupted banking transactions.'
      },
      {
        title: 'Automated Regulatory Reporting',
        desc: 'Data pipeline engineering that streamlines risk modeling, stress-testing, and compliance submissions.'
      }
    ],
    complianceFramework: ['FCA Regulated', 'PCI-DSS v4.0', 'Open Banking Standards', 'ISO 27001', 'DORA Framework'],
    solutionsApplied: [
      {
        serviceTitle: 'Expert Project Management',
        role: 'Agile governance for complex regulatory cutovers, managing vendor dependencies and risk mitigations.',
        outcomes: ['Zero unexpected service interruptions', 'Structured stakeholder reporting', 'Audited governance compliance']
      },
      {
        serviceTitle: 'Managed Network Services',
        role: 'Ultra-low latency, multi-site connectivity with SD-WAN and automated disaster recovery failover.',
        outcomes: ['Continuous network availability', 'Encrypted WAN transport', 'Proactive anomaly detection']
      },
      {
        serviceTitle: 'Responsive Technical Support',
        role: 'Dedicated UK engineering desk for trading floors, critical workstations, and banking operations.',
        outcomes: ['Guaranteed rapid SLA response', '24/7 proactive telemetry monitoring', 'Comprehensive issue resolution']
      },
      {
        serviceTitle: 'Strategic IT Consulting',
        role: 'Cloud architecture design, cost optimization (FinOps), and enterprise security audits.',
        outcomes: ['Actionable modernisation roadmap', 'Licensing efficiency', 'Risk reduction']
      }
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'public-sector',
    title: 'Government & Public Sector',
    subtitle: 'Citizen-centric digital public services with strict data sovereignty',
    description: 'Empowering central government bodies and local authorities to modernize citizen public services, optimize tax/rates administration, and deliver accessible, reliable digital portals.',
    challengesSolved: [
      'Citizen self-service portal development with WCAG 2.2 AA accessibility',
      'Secure government cloud infrastructure with Crown Commercial Service alignment',
      'Casework management automation for local councils and agencies',
      'Public record digitisation and secure archiving',
    ],
    overview: [
      'Public sector departments are tasked with delivering more efficient citizen services within constrained budgets. Modernizing legacy systems is critical for accessibility, security, and productivity.',
      'Following models championed by leading public sector innovators, 3XTech designs and implements secure digital platforms that reduce administrative overhead while safeguarding public trust.',
      'We deliver strict data residency compliance, WCAG accessibility alignment, and interoperability across central and local government frameworks.'
    ],
    strategicFocus: [
      {
        title: 'Citizen-Centric Digital Portals',
        desc: 'Accessible, responsive public portals built to GDS Service Standards and WCAG 2.2 AA accessibility.'
      },
      {
        title: 'Casework & Workflow Automation',
        desc: 'Intelligent routing and verification systems that accelerate service delivery for local authorities.'
      },
      {
        title: 'Secure Cloud Migration & Data Sovereignty',
        desc: 'UK-sovereign cloud environments adhering to National Cyber Security Centre (NCSC) cloud principles.'
      },
      {
        title: 'Legacy System Modernisation',
        desc: 'Refactoring monolithic databases into modular, API-first public administration platforms.'
      }
    ],
    complianceFramework: ['Crown Commercial Aligned', 'WCAG 2.2 AA Accessibility', 'Cyber Essentials Plus', 'UK GDPR / Data Protection Act', 'ISO 27001'],
    solutionsApplied: [
      {
        serviceTitle: 'Expert Project Management',
        role: 'Public sector procurement and programme management ensuring adherence to HM Treasury Five Case Model.',
        outcomes: ['Structured milestone delivery', 'Transparent public audit trails', 'Inter-departmental alignment']
      },
      {
        serviceTitle: 'Managed Network Services',
        role: 'Secure PSN-compliant network routing, SD-WAN interconnectivity, and perimeter security.',
        outcomes: ['Resilient council connectivity', 'Zero single-points of failure', 'Continuous threat visibility']
      },
      {
        serviceTitle: 'Responsive Technical Support',
        role: 'Frontline technical support keeping civic offices, service desks, and field workers connected.',
        outcomes: ['Rapid incident triage', 'High first-contact resolution', 'Reliable user device management']
      },
      {
        serviceTitle: 'Strategic IT Consulting',
        role: 'Digital strategy formulation, business case development, and technology vendor evaluation.',
        outcomes: ['Value-for-money validation', 'Clear modernization roadmaps', 'Measurable civic productivity']
      }
    ],
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'telecoms-media',
    title: 'Telecoms & Media',
    subtitle: 'Scalable billing, 5G services support, and high-volume customer care',
    description: 'Enabling major telecommunications and media operators to manage high-volume customer requests, optimize billing and subscription operations, and reduce churn.',
    challengesSolved: [
      'Automated service provisioning & broadband billing support',
      'Omnichannel tier-1/tier-2 technical care contact centers',
      'Predictive customer churn mitigation and retention workflows',
      'Field engineer dispatch & appointment scheduling engines',
    ],
    overview: [
      'Telecommunications operators and digital media broadcasters operate in hyper-competitive markets requiring high availability and low latency.',
      '3XTech engineers dynamic network architectures and high-throughput support workflows that ensure seamless connectivity and reliable subscriber experiences.',
      'From 24/7 network operations center (NOC) monitoring to automated provisioning, we help operators scale without compromising reliability.'
    ],
    strategicFocus: [
      {
        title: 'Network Operations & Automated Failover',
        desc: 'Real-time telemetry, automated capacity scaling, and SD-WAN routing that maintain uninterrupted transmission.'
      },
      {
        title: 'Subscriber Care & Incident Resolution',
        desc: 'Tiered technical desk operations that resolve broadband and connectivity issues quickly.'
      },
      {
        title: 'Billing & Provisioning Automation',
        desc: 'Integration between CRM, OSS/BSS platforms, and field engineer scheduling engines.'
      },
      {
        title: 'Infrastructure Modernisation',
        desc: 'Transitioning legacy switching centers to virtualized, software-defined network (SDN) functions.'
      }
    ],
    complianceFramework: ['Ofcom Regulatory Alignment', 'ISO 27001 Data Security', 'GDPR Telephony Standards', 'High-Availability Service Level Agreements'],
    solutionsApplied: [
      {
        serviceTitle: 'Managed Network Services',
        role: 'Proactive backbone monitoring, packet analysis, and bandwidth load balancing.',
        outcomes: ['Continuous network reliability', 'Mitigation of latency spikes', 'Automated failover links']
      },
      {
        serviceTitle: 'Responsive Technical Support',
        role: 'Engineering support for subscriber management platforms and field technician devices.',
        outcomes: ['Quick dispatch coordination', 'Sustained customer satisfaction', 'Minimal downtime']
      },
      {
        serviceTitle: 'Expert Project Management',
        role: 'Cross-functional rollout management for fiber deployments, 5G upgrades, and system overhauls.',
        outcomes: ['Coordinated field sprints', 'Clear risk registers', 'Milestone accountability']
      },
      {
        serviceTitle: 'Strategic IT Consulting',
        role: 'Evaluation of network virtualisation technologies, OSS/BSS modernisation, and cloud strategy.',
        outcomes: ['Optimized infrastructure spend', 'Vendor-neutral technology choices', 'Future-proof scaling']
      }
    ],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'retail-logistics',
    title: 'Retail, Consumer & Supply Chain',
    subtitle: 'Responsive supply chains and unified commerce customer journeys',
    description: 'Empowering leading retail brands and logistics providers with real-time supply chain visibility, inventory optimization, and 24/7 unified order management.',
    challengesSolved: [
      'Warehouse and logistics order tracking synchronization',
      'Peak season (Black Friday / holiday) support scaling',
      'Returns management and customer refund automation',
      'Inventory replenishment forecasting using predictive demand models',
    ],
    overview: [
      'Modern retail success depends on end-to-end operational fluidity, from warehouse inventory management to checkout and post-purchase support.',
      '3XTech provides the resilient network infrastructure, technical support desks, and consulting needed to handle seasonal peaks without disruption.',
      'Our solutions bridge enterprise ERPs, warehouse management systems (WMS), and omnichannel retail touchpoints.'
    ],
    strategicFocus: [
      {
        title: 'High-Volume Seasonal Scalability',
        desc: 'Dynamic cloud and network infrastructure capable of scaling smoothly during peak sales events.'
      },
      {
        title: 'Supply Chain Telemetry & Tracking',
        desc: 'Real-time integration between dispatch systems, carrier APIs, and retail distribution centers.'
      },
      {
        title: 'Point-of-Sale (POS) & Store Systems',
        desc: 'Reliable network connectivity and remote device support for distributed store estates.'
      },
      {
        title: 'Unified Customer Operations',
        desc: 'Rapid order resolution, returns processing, and tier-1/tier-2 customer service coordination.'
      }
    ],
    complianceFramework: ['PCI-DSS Validated', 'EDI / GS1 Supply Chain Standards', 'UK GDPR Consumer Privacy', 'ISO 27001'],
    solutionsApplied: [
      {
        serviceTitle: 'Managed Network Services',
        role: 'Secure, resilient multi-store and warehouse networking with redundant 4G/5G backup links.',
        outcomes: ['Uninterrupted POS transactions', 'Secure branch connectivity', 'Continuous inventory synchronization']
      },
      {
        serviceTitle: 'Responsive Technical Support',
        role: 'Rapid hardware and software support for retail terminals, barcode scanners, and warehouse systems.',
        outcomes: ['Prompt issue resolution', 'Reduced checkout delays', 'Dedicated escalation pathways']
      },
      {
        serviceTitle: 'Expert Project Management',
        role: 'End-to-end management of warehouse automation, ERP upgrades, and retail store rollouts.',
        outcomes: ['Coordinated multi-site execution', 'Predictable delivery timelines', 'Minimized operational friction']
      },
      {
        serviceTitle: 'Strategic IT Consulting',
        role: 'Omnichannel architecture design, supply chain system reviews, and cloud cost management.',
        outcomes: ['Clear integration blueprints', 'Pragmatic tech investments', 'Enhanced operational agility']
      }
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'health-care',
    title: 'Healthcare & Life Sciences',
    subtitle: 'Secure patient management and clinical operational workflows',
    description: 'Supporting healthcare trusts, private clinics, and pharmaceutical partners with HIPAA/GDPR-compliant communication, patient appointment booking, and diagnostic workflow efficiency.',
    challengesSolved: [
      'Patient appointment booking & outpatient reminder systems',
      'Secure medical records handling & automated clinical triage',
      'Healthcare staff rostering and supply procurement',
      'Information Governance and NHS Data Security and Protection Toolkit compliance',
    ],
    overview: [
      'Healthcare organizations require technology that ensures reliable patient care, protects sensitive health data, and operates with zero margin for failure.',
      '3XTech supports clinical workflows by maintaining high-availability networks, secure information systems, and dependable technical support for healthcare staff.',
      'Our team ensures full adherence to NHS Data Security and Protection Toolkit (DSPT) standards and information governance requirements.'
    ],
    strategicFocus: [
      {
        title: 'Clinical Workflow Reliability',
        desc: 'Zero-interruption network connectivity for diagnostic imaging, electronic patient records (EPR), and consultation tools.'
      },
      {
        title: 'Information Governance & Data Protection',
        desc: 'End-to-end encryption and role-based access control protecting confidential patient health data.'
      },
      {
        title: 'Outpatient Communication Systems',
        desc: 'Automated appointment reminders, digital triage channels, and patient intake coordination.'
      },
      {
        title: 'Healthcare IT Device Management',
        desc: 'Support for mobile workstations, ward tablets, and secure clinical printing environments.'
      }
    ],
    complianceFramework: ['NHS DSPT Compliant', 'Caldicott Principles', 'ISO 27701 Privacy Information', 'Cyber Essentials Plus', 'UK GDPR'],
    solutionsApplied: [
      {
        serviceTitle: 'Responsive Technical Support',
        role: 'Priority technical support for clinicians, ward staff, and administrative teams.',
        outcomes: ['Rapid resolution of critical tickets', 'High clinician satisfaction', 'Maintained medical continuity']
      },
      {
        serviceTitle: 'Managed Network Services',
        role: 'Dedicated medical VLANs, secure clinical Wi-Fi, and resilient interconnects between clinics and data centers.',
        outcomes: ['Robust patient record access', 'High-throughput imaging transfers', 'Automated failover']
      },
      {
        serviceTitle: 'Expert Project Management',
        role: 'Structured project management for EPR rollouts, system integrations, and compliance upgrades.',
        outcomes: ['Stakeholder alignment across clinical leads', 'Audit-ready documentation', 'On-time milestone delivery']
      },
      {
        serviceTitle: 'Strategic IT Consulting',
        role: 'Assessment of digital health infrastructure, cloud readiness, and information governance audits.',
        outcomes: ['Pragmatic technology recommendations', 'Risk mitigation', 'Enhanced operational efficiency']
      }
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'transport-utilities',
    title: 'Transport & Infrastructure',
    subtitle: 'Passenger communication, smart ticketing, and utility billing operations',
    description: 'Providing transport authorities and critical utility providers with resilient passenger information channels, smart billing, and rapid emergency incident communications.',
    challengesSolved: [
      'Real-time passenger disruption alert notifications',
      'Smart card & digital ticketing customer service management',
      'Smart meter data processing and tariff billing reconciliation',
      'Infrastructure outage dispatch coordination',
    ],
    overview: [
      'Transport networks and utilities are national assets that demand resilient, uninterrupted technology operations around the clock.',
      '3XTech provides mission-critical network monitoring, technical support, and project governance for transport authorities, logistics hubs, and utility operators.',
      'We help operators integrate legacy SCADA and operational technologies (OT) with modern enterprise clouds and passenger communication platforms.'
    ],
    strategicFocus: [
      {
        title: 'Real-Time Telemetry & Passenger Information',
        desc: 'High-availability data pipelines distributing real-time transit schedules and delay notifications.'
      },
      {
        title: 'Smart Metering & Billing Infrastructure',
        desc: 'Secure ingestion, validation, and tariff calculation for utility grid endpoints.'
      },
      {
        title: 'Operational Resilience & Incident Coordination',
        desc: 'Rapid communication systems and dispatch management for field maintenance and emergency repair crews.'
      },
      {
        title: 'Edge Networking for Distributed Hubs',
        desc: 'Ruggedized network appliances and secure cellular connectivity for remote transport stations and substations.'
      }
    ],
    complianceFramework: ['National Infrastructure Security Standards', 'Cyber Essentials Plus', 'ISO 27001', 'High-Availability Service Level Agreements'],
    solutionsApplied: [
      {
        serviceTitle: 'Managed Network Services',
        role: 'Continuous 24/7 monitoring of remote operational links, control centers, and station networks.',
        outcomes: ['Continuous telemetry uptime', 'Proactive link failure remediation', 'Encrypted data transit']
      },
      {
        serviceTitle: 'Responsive Technical Support',
        role: 'Engineering support for control rooms, depot offices, and frontline transport management systems.',
        outcomes: ['Rapid fault isolation', 'Minimal operational delays', 'Reliable endpoint availability']
      },
      {
        serviceTitle: 'Expert Project Management',
        role: 'Managing hardware rollouts, ticketing upgrades, and infrastructure modernisations.',
        outcomes: ['Precise coordination across shifts', 'Minimal passenger disruption', 'Clear audit compliance']
      },
      {
        serviceTitle: 'Strategic IT Consulting',
        role: 'Network architecture reviews, cloud modernization, and OT/IT integration strategies.',
        outcomes: ['Actionable modernization blueprint', 'Enhanced system security', 'Reliable long-term performance']
      }
    ],
    image: 'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&w=900&q=80',
  },
];

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: 'case-project-management',
    clientName: 'Leading UK Financial Group',
    sector: 'Financial Services',
    title: 'Expert Project Management: Multi-Site Core Banking Infrastructure Rollout',
    summary: 'How 3XTech guided an enterprise infrastructure overhaul from sprint planning through deployment, delivering 100% of milestones on time and £340k under budget.',
    challenge: 'The client faced escalating delivery delays, uncoordinated multi-vendor dependencies, and high regulatory compliance risks across a 12-month nationwide rollout.',
    solution: '3XTech assigned certified senior project managers who implemented structured Scrum sprint governance, transparent dependency tracking, proactive risk mitigation, and weekly executive steering dashboards.',
    outcomes: [
      '100% milestone delivery compliance achieved across all quarters',
      '£340k budget variance delivered back to organizational reserves',
      'Zero unscheduled business disruption during production cutovers',
      'Seamless stakeholder alignment across 6 internal business units',
    ],
    impactMetric: '100%',
    impactLabel: 'Milestones delivered on schedule',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80',
    testimonial: {
      quote: '3XTech brought disciplined governance and unmatched precision. Their project management methodology gave our leadership complete confidence at every stage.',
      author: 'Alistair Campbell',
      role: 'Chief Operating Officer, Enterprise Banking Group',
    },
  },
  {
    id: 'case-technical-support',
    clientName: 'National Multi-Site Professional Services Firm',
    sector: 'Telecoms & Media',
    title: 'Responsive Technical Support: Slashing Resolution Times to Under 12 Minutes',
    summary: 'Deploying dedicated Tier 1–3 rapid-response technical support with 24/7 proactive monitoring across 1,400 distributed workstations.',
    challenge: 'Legacy outsourced support left employees stranded in telephone queues exceeding 35 minutes, resulting in lost productivity and recurring recurring server downtime.',
    solution: '3XTech instituted guaranteed 15-minute critical SLAs, automated remote diagnostics, proactive endpoint health monitoring, and a dedicated team of UK technical support engineers.',
    outcomes: [
      'Average critical ticket resolution reduced to under 12 minutes',
      '98.4% First Contact Resolution (FCR) across desktop and network incidents',
      'Employee satisfaction with IT support climbed from 64% to 97%',
      'Proactive monitoring prevented 42 potential system outages before impact',
    ],
    impactMetric: '< 12 min',
    impactLabel: 'Average critical issue resolution',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
    testimonial: {
      quote: 'The responsiveness of the 3XTech support desk is exceptional. When an issue occurs, their engineers resolve it immediately, keeping our teams working without pause.',
      author: 'Marcus Davies',
      role: 'VP of Customer Operations',
    },
  },
  {
    id: 'case-managed-network',
    clientName: 'UK Logistics & Retail Network',
    sector: 'Retail & Logistics',
    title: 'Managed Network Services: Zero-Downtime SD-WAN Across 42 Regional Hubs',
    summary: 'Architecting and managing a high-availability SD-WAN network with next-gen firewall perimeter defense delivering 99.99% uptime.',
    challenge: 'Frequent regional fiber drops, jitter on VoIP communications, and fragmented network hardware were disrupting warehouse dispatch operations.',
    solution: '3XTech deployed centralized SD-WAN with dual-carrier automated failover, unified next-gen firewalls, prioritized voice QoS, and 24/7 Network Operations Center (NOC) monitoring.',
    outcomes: [
      '99.99% network uptime achieved across 42 UK distribution locations',
      'Automated carrier failover executed with zero voice drop or packet loss',
      '35% reduction in multi-carrier telecommunications expenditure',
      'Unified single-pane-of-glass network security and bandwidth visibility',
    ],
    impactMetric: '99.99%',
    impactLabel: 'Network uptime maintained',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
    testimonial: {
      quote: '3XTech transformed our network reliability overnight. In our distribution business, continuous network connectivity is non-negotiable, and 3XTech delivers it flawlessly.',
      author: 'Eleanor Vance',
      role: 'Chief Technology Officer',
    },
  },
  {
    id: 'case-consulting-service',
    clientName: 'Public Sector Trust & Local Authority',
    sector: 'Government & Public Sector',
    title: 'Consulting Service: Strategic IT Modernization & Cost Optimization Blueprint',
    summary: 'A vendor-neutral infrastructure audit and strategic roadmap generating £1.8M in reallocated efficiency savings for public services.',
    challenge: 'Aging legacy server sprawl, duplicate software licensing, and lack of cloud migration strategy were straining public sector budgets.',
    solution: '3XTech conducted an exhaustive technology audit, performed gap analyses, optimized software licensing contracts, and designed a 3-year modernization roadmap.',
    outcomes: [
      'Identified £1.8M in redundant licensing and infrastructure costs',
      'Designed future-proof hybrid cloud and cyber resilience roadmap',
      'Structured vendor RFP selection ensuring maximum value and compliance',
      'Executive steering framework implemented for long-term IT governance',
    ],
    impactMetric: '£1.8M',
    impactLabel: 'Technology savings identified',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80',
    testimonial: {
      quote: 'The independent perspective and deep expertise of 3XTech consulting gave our leadership clarity, delivering substantial savings without compromising service quality.',
      author: 'Helena Wright',
      role: 'Director of Digital Services',
    },
  },
];

export const INSIGHTS_DATA: InsightArticle[] = [
  {
    id: 'report-expert-project-management',
    category: 'Project Management',
    title: 'Expert Project Management: Why 70% of IT Initiatives Fail Without Agile Governance',
    subtitle: 'Bridging executive strategy and technical execution with transparent milestone tracking, sprint discipline, and risk governance.',
    date: 'September 2026',
    readTime: '6 min read',
    summary: 'A breakdown of key failure factors in complex IT deployments, and how structured sprint governance, milestone tracking, and stakeholder management guarantee delivery success.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Robert Thornton',
      role: 'Head of Project Delivery',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      bio: 'Robert has over two decades of experience overseeing multi-million pound digital programmes across UK central government and tier-1 banking institutions.',
    },
    keyTakeaways: [
      'Scope creep accounts for 42% of enterprise project delivery overruns when change-control gates are informal.',
      'Integrating certified Scrum masters with executive risk steering councils cuts timeline variance by up to 68%.',
      'Continuous dependency mapping between in-house engineers and third-party SaaS vendors eliminates cutover delays.',
      'Transparent milestone heatmaps give leadership actionable early warnings 4-6 weeks before delivery deadlines.',
    ],
    contentSections: [
      {
        heading: 'The Anatomy of Enterprise Project Delays',
        paragraphs: [
          'According to industry benchmarks, over 70% of digital transformation initiatives fail to meet their original time, budget, or scope parameters. In enterprise IT, the primary breakdown rarely stems from technical incompetence; rather, it occurs at the intersection of conflicting stakeholder priorities, unmanaged vendor dependencies, and opaque sprint tracking.',
          'When multi-team projects rely on scattered spreadsheet trackers and fragmented communication channels, risk indicators remain hidden until production deployment windows. By then, mitigating a single architecture mismatch costs up to 10 times more than discovering it during sprint grooming.',
        ],
        callout: 'True project governance is not bureaucratic red tape; it is the predictable engine that enables development velocity with zero downtime.',
      },
      {
        heading: 'The 3XTECH Delivery Governance Framework',
        paragraphs: [
          'At 3XTECH Solution Services, our project delivery leaders implement an adaptive governance model tailored to regulated UK business environments. We combine agile Scrum execution with structured Stage-Gate financial approvals, ensuring both developer speed and executive compliance.',
          'Weekly steering reviews monitor real-time delivery telemetry: burndown velocity, blocked dependency matrices, risk probability scores, and budget drawdown rates. Crucially, our senior project managers actively de-escalate cross-departmental bottlenecks before they impact scheduled release dates.',
        ],
      },
      {
        heading: 'Achieving Zero-Downtime Migration & Rollouts',
        paragraphs: [
          'For core banking systems, NHS patient record portals, and national telecom infrastructure, deployment maintenance windows cannot overrun. Our project governance encompasses detailed mock dress rehearsals, automated rollback safeguards, and dual-run parallel testing to ensure every cutover operates seamlessly.',
          'By partnering with 3XTECH Project Management, organizations guarantee that their digital investments achieve tangible operational returns on time and strictly within authorized allocations.',
        ],
      },
    ],
    tags: ['Agile Governance', 'Scrum Leadership', 'Risk Management', 'Milestone Precision', 'FinTech Delivery'],
    relatedServiceId: 'project-management',
    relatedIndustryId: 'financial-services',
  },
  {
    id: 'report-responsive-technical-support',
    category: 'Technical Support',
    title: 'Responsive Technical Support: Transforming Helpdesks from Cost Centers to Productivity Drivers',
    subtitle: 'How sub-12-minute SLA resolution, proactive telemetry, and Tier 3 engineering desks safeguard enterprise revenue.',
    date: 'August 2026',
    readTime: '5 min read',
    summary: 'How rapid first-contact resolution, proactive endpoint diagnostics, and Tier 3 engineering escalation keep modern enterprise teams focused and productive.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Sarah Montgomery',
      role: 'Lead Support Operations Specialist',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      bio: 'Sarah leads enterprise technical helpdesk architectures and workforce response management, maintaining 98.4% first contact resolution across 15,000+ endpoints.',
    },
    keyTakeaways: [
      'Unresolved IT incidents cost UK mid-market firms an average of £14,000 in lost billable productivity per employee annually.',
      'Proactive endpoint monitoring catches 60% of disk degradation, memory leaks, and SSL expirations before users notice.',
      'Guaranteed sub-15-minute response SLAs with Tier 3 direct escalation paths reduces ticket round-trips from days to minutes.',
      'Omnichannel support ticketing integrated with Slack and Teams accelerates remote worker resolution rates by 3.4x.',
    ],
    contentSections: [
      {
        heading: 'The Hidden Toll of Ineffective IT Helpdesks',
        paragraphs: [
          'In many organizations, IT support has traditionally been treated as an overhead expense—outsourced to rigid call centers where employees wait indefinitely on hold, only to receive scripted responses that fail to diagnose underlying hardware or network flaws.',
          'When critical staff—such as hospital clinicians, trading floor analysts, or logistics dispatchers—lose access to systems, each minute of idling translates into severe commercial and operational fallout. An effective helpdesk is not a passive ticket taker; it is an active business continuity safeguard.',
        ],
        callout: 'When IT issues are resolved in under 12 minutes rather than 4 hours, employee satisfaction surges and systemic downtime collapses.',
      },
      {
        heading: 'Proactive Telemetry vs. Reactive Ticket Submission',
        paragraphs: [
          '3XTECH Responsive Technical Support replaces reactive support tickets with intelligent real-time device telemetry. Our centralized agents monitor workstation CPU thresholds, security patch compliances, network latency anomalies, and application crash dumps around the clock.',
          'In over 55% of incidents, our UK-based engineers diagnose and resolve underlying glitches before the end user is even aware of an issue. When an employee does reach out via phone, email, or chat, they are connected directly with certified technicians empowered to take immediate corrective action.',
        ],
      },
      {
        heading: 'Enterprise Escalation Architecture That Delivers',
        paragraphs: [
          'Complex problems—such as corrupt database indexes, enterprise VPN authentication faults, or cloud credential lockouts—are rapidly routed to dedicated Tier 3 systems specialists, bypassing sluggish tiered triage queues. This guarantees rapid mean-time-to-resolution (MTTR) and protects your organizational velocity.',
        ],
      },
    ],
    tags: ['IT Support SLAs', 'Proactive Monitoring', 'Helpdesk Automation', 'Tier 3 Engineering', 'Workforce Productivity'],
    relatedServiceId: 'technical-support',
    relatedIndustryId: 'telecoms-media',
  },
  {
    id: 'report-managed-network-services',
    category: 'Network Services',
    title: 'Managed Network Services: Designing Resilient Multi-Site Connectivity with SD-WAN & Zero-Trust',
    subtitle: 'Migrating from costly legacy MPLS circuits to cloud-native software-defined wide area networks with sub-second failover.',
    date: 'July 2026',
    readTime: '7 min read',
    summary: 'A practical guide for organizations moving from traditional MPLS to intelligent SD-WAN with automated failover, QoS optimization, and next-generation perimeter defense.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Julian Thorne',
      role: 'Principal Network Architect',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      bio: 'Julian is a CCIE-certified infrastructure architect who has designed resilient SD-WAN backbones and Zero-Trust perimeters for retail chains, utility providers, and transport hubs.',
    },
    keyTakeaways: [
      'Dual-carrier SD-WAN architectures with automated BGP failover provide 99.99% uptime without costly dark fiber commitments.',
      'Dynamic QoS traffic steering prioritizes mission-critical VoIP and ERP database queries over non-essential traffic during network congestion.',
      'Centralized Zero-Trust Network Access (ZTNA) replaces outdated corporate VPNs, restricting lateral hacker movement within internal networks.',
      'Unified cloud firewall management enforces uniform compliance across all distributed corporate branch offices.',
    ],
    contentSections: [
      {
        heading: 'The Obsolescence of Traditional MPLS Circuits',
        paragraphs: [
          'For decades, multi-site enterprises relied on expensive, rigid MPLS links to connect regional offices with central data centers. However, as cloud SaaS applications (such as Microsoft 365, Salesforce, and AWS) become the primary center of enterprise computing, backhauling internet-bound traffic through central gateways creates latency bottlenecks and unnecessary bandwidth fees.',
          'Modern businesses require flexible, agile connectivity that dynamically evaluates path health, packet jitter, and packet loss in milliseconds, routing packets across the optimal available broadband, 5G, or fiber link.',
        ],
        callout: 'By migrating to managed SD-WAN, distributed enterprises typically save 35% to 50% on recurring carrier line fees while doubling overall bandwidth.',
      },
      {
        heading: 'High-Availability Architecture and Sub-Second Failover',
        paragraphs: [
          '3XTECH Managed Network Services deploys dual-carrier connections at every regional hub. If a terrestrial fiber line is severed by roadworks or provider outages, our intelligent SD-WAN edge devices shift active sessions—including live audio phone calls and payment terminals—onto backup 5G or secondary lines with zero dropped packets.',
          'Coupled with automated Quality of Service (QoS) prioritisation, critical transaction traffic always receives guaranteed bandwidth, even during peak branch loads.',
        ],
      },
      {
        heading: 'Integrated Zero-Trust Perimeter Defense',
        paragraphs: [
          'Connectivity cannot come at the expense of security. Our managed network fabric integrates next-generation firewalls (NGFW), deep packet inspection, TLS decryption, and continuous identity verification into every edge device. With 3XTECH 24/7 Network Operations Center (NOC) oversight, your connectivity is continuously secured, monitored, and optimized.',
        ],
      },
    ],
    tags: ['SD-WAN Migration', 'Zero-Trust Architecture', 'Network Uptime', 'High Availability', 'Next-Gen Firewall'],
    relatedServiceId: 'managed-network',
    relatedIndustryId: 'retail-logistics',
  },
  {
    id: 'report-consulting-service',
    category: 'Consulting',
    title: 'Strategic IT Consulting: Maximizing Organizational Value and Eliminating Technical Debt',
    subtitle: 'A vendor-neutral architectural roadmap for enterprise CIOs targeting cloud cost optimization and infrastructure modernization.',
    date: 'June 2026',
    readTime: '6 min read',
    summary: 'Why vendor-neutral technology audits, cloud readiness assessments, and structured roadmaps deliver measurable ROI before investing in new systems.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Dr. Evelyn Sterling',
      role: 'Director of Technology Advisory',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      bio: 'Dr. Sterling advises boards on digital strategy, cloud economics, and IT governance, having identified over £40M in architectural cost savings for public and private institutions.',
    },
    keyTakeaways: [
      'Unvetted cloud migrations often result in 20-30% higher operational bills due to unoptimized VM sizing and idle database instances.',
      'Independent technology audits eliminate vendor lock-in and uncover duplicate software licenses across disparate departments.',
      'Aligning IT roadmaps with business capability heatmaps ensures capital expenditure directly drives measurable customer outcomes.',
      'Structured technical debt audits identify brittle legacy codebases before they compromise cybersecurity or regulatory audits.',
    ],
    contentSections: [
      {
        heading: 'The Danger of Vendor-Biased Technology Roadmaps',
        paragraphs: [
          'Many technology consultancy firms operate on lucrative reseller commissions from specific cloud or hardware vendors. Consequently, their architectural recommendations frequently prioritize high-margin vendor products rather than the genuine, cost-efficient needs of the client.',
          '3XTECH operates on a strictly vendor-neutral advisory basis. We evaluate your current systems, licensing obligations, and technical debt through an objective financial and operational lens, recommending the most reliable and cost-effective stack for your 3-to-5-year vision.',
        ],
        callout: 'A strategic IT audit typically uncovers enough duplicate software licenses and over-provisioned cloud compute to self-fund the entire modernization initiative.',
      },
      {
        heading: 'Quantifying Cloud FinOps and Legacy Decommissioning',
        paragraphs: [
          'Transitioning to the cloud without disciplined financial operations (FinOps) leads to runaway cloud invoices. Our consulting experts implement automated resource scaling, reserved instance reservations, storage tier lifecycle policies, and serverless compute optimizations.',
          'Simultaneously, we design phased decommissioning plans for legacy on-premise hardware, ensuring business-critical historical data is securely archived without maintaining expensive support contracts.',
        ],
      },
      {
        heading: 'Creating Board-Level Certainty and Stakeholder Buy-In',
        paragraphs: [
          'We bridge the communication divide between technical engineering squads and executive board members. Our comprehensive blueprints include clear total cost of ownership (TCO) models, risk matrices, and measurable return-on-investment (ROI) milestones that empower leadership to invest with certainty.',
        ],
      },
    ],
    tags: ['IT Advisory', 'Cloud FinOps', 'Vendor Neutrality', 'Cost Optimization', 'Strategic Roadmap'],
    relatedServiceId: 'consulting',
    relatedIndustryId: 'public-sector',
  },
];

export const LEADERSHIP_DATA: LeadershipMember[] = [
  {
    name: 'Robert Thornton',
    role: 'Chief Executive Officer',
    bio: 'Over 22 years of enterprise leadership spearheading global technology operations and digital transformation across the UK and international markets.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Dr. Evelyn Sterling',
    role: 'Chief Strategy & AI Officer',
    bio: 'Former technical advisor to leading public institutions and FTSE-100 enterprises, specializing in enterprise machine intelligence, governance, and operating model redesign.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Julian Thorne',
    role: 'Chief Information & Security Officer',
    bio: 'Renowned cybersecurity strategist holding CISSP and CISM certifications, with deep background in defense-grade networks, Zero-Trust, and ISO 27001 implementation.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Sarah Montgomery',
    role: 'Managing Director, Customer Operations',
    bio: 'Pioneer of blended omnichannel contact centers and workforce engagement management for Fortune 500 and UK public bodies.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
  },
];

export const CORPORATE_STANDARDS = [
  { value: '24/7/365', label: 'Continuous Network Monitoring', detail: 'UK-based Network Operations Center' },
  { value: 'ISO 27001', label: 'Security & Data Governance', detail: 'UK GDPR and Cyber Essentials Aligned' },
  { value: 'End-to-End', label: 'Lifecycle Accountability', detail: 'From architecture design to live support' },
  { value: '100% UK', label: 'Data Residency & Delivery', detail: 'Sovereign cloud & operational compliance' },
];
