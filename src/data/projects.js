export const projects = [
  {
    id: 'happierwork',
    title: 'HappierWork',
    hook: 'AI interviews that adapt in real time - and return recruiter-ready evidence.',
    shortDescription:
      'An AI video interview system built for Searce that converts a job description into structured screening, runs live multimodal interviews with adaptive follow-ups, and produces evidence-backed evaluation for recruiters.',
    accentColor: 'green',
    accentClass: 'bg-green-100 text-green-700',
    accentBorder: 'border-green-200',
    accentBg: 'bg-green-50',
    tags: ['AI Hiring', 'Multimodal AI', 'Adaptive Interviewing', 'Evaluation Engine'],
    problem:
      'High-volume screening consumes senior interviewer time and varies by interviewer. The goal was to automate repetitive screening without losing structured evaluation or auditability.',
    solution:
      'The system generates separate logical/problem-solving and technical screening plans from a job description; creates candidate interview links; runs an interruptible video interview; asks follow-up questions based on candidate answers; verifies video and microphone presence; flags potential malpractice; records and transcribes the session; and generates rubric-based scores, rationale and assessment summaries.',
    whatItDoes: [
      'Generates separate logical and technical screening plans from a job description',
      'Runs a live video interview with an AI interviewer that asks follow-up questions based on what the candidate actually says',
      'Produces a running transcript during the session',
      'Verifies camera and microphone presence and flags potential malpractice',
      'Scores each answer against a rubric - problem solving, analytical thinking, logical reasoning, estimation - with a confidence level per question',
      'Returns a recruiter view with an overall score, a hire/no-hire recommendation, green and red flags, and written rationale',
    ],
    capability:
      'Multimodal interviewing and evaluation - real-time audio and video handling, adaptive question generation, proctoring signals and rubric scoring in one pipeline. The output is not a recording for a human to review; it is structured evidence a recruiter can act on.',
    context:
      'Delivered to Searce. The signed scope defines an AI video interview MVP designed to integrate with the happierWork HRMS.',
    techUsed: ['Multimodal LLMs', 'Speech-to-Text', 'Python', 'FastAPI', 'React', 'Cloud Deployment'],
    proof: {
      eyebrow: 'Workflow design',
      headline: '2 screening plans',
      note: 'Logical/problem-solving and technical plans built around interview evidence.',
    },
    resourceLinks: [
      { label: 'View interview workflow', url: 'https://drive.google.com/file/d/1RLFztozzmz4pxi8WZHlBr-FkyTWcKYwn/view?usp=drivesdk' },
      { label: 'View evaluation summary', url: 'https://drive.google.com/file/d/1z6OrrymsHL_siONr62Q7BMOLLYq8-E1C/view?usp=drivesdk' },
    ],
    hasDemo: false,
    cta: 'Building an AI workflow around hiring, assessment or expert evaluation? Schedule 15 minutes with Rushil.',
    disclosure:
      'Public copy stays at capability and product-outcome level. It does not include contract fees, confidential implementation detail or candidate data.',
  },
  {
    id: 'quanfia',
    title: 'Quanfia',
    hook: 'Turn a financial research corpus into an analyst you can question.',
    shortDescription:
      'A financial RAG and research platform developed for Torch Wealth Management, designed to generate structured company analysis and continue into source-grounded Q&A over a controlled knowledge base.',
    accentColor: 'blue',
    accentClass: 'bg-blue-100 text-blue-700',
    accentBorder: 'border-blue-200',
    accentBg: 'bg-blue-50',
    tags: ['Financial RAG', 'Research Automation', 'Knowledge Systems', 'Report Generation'],
    problem:
      'Investment research is document-heavy. Analysts move across reports, filings and company information before they can form a view, and every follow-up question restarts part of that search process.',
    solution:
      'Quanfia lets users select a company, choose or create a knowledge base, apply an analysis prompt or persona, generate a structured report and continue with source-grounded questions against the same research context.',
    whatItDoes: [
      'Select the company you are researching',
      'Reuse an existing knowledge base or build a new one for that company',
      'Choose an analysis persona - for example a business analyst view - so the same corpus can be read different ways',
      'Generate a structured report from that corpus',
      'Continue asking follow-up questions against the same research context, with answers grounded in the source material rather than general knowledge',
    ],
    capability:
      'RAG beyond "chat with PDF" - corpus control, reusable knowledge context, persona-driven analysis, structured report generation and follow-up reasoning in one workflow. The knowledge base persists, so the second question is as cheap as the first.',
    context: 'Developed for Torch Wealth Management.',
    techUsed: ['RAG Architecture', 'Vector Retrieval', 'LLM Integration', 'Python', 'FastAPI', 'React'],
    proof: {
      eyebrow: 'Client context',
      headline: '~$700M+ AUM',
      note: 'Torch Wealth Management scale; this is client context, not a Samvat delivery metric.',
    },
    resourceLinks: [
      { label: 'View Quanfia walkthrough', url: 'https://drive.google.com/file/d/10U2TO0nRHHldJCKyQb2g04_yApFPZSvY/view?usp=drivesdk' },
    ],
    hasDemo: false,
    cta: 'Want proprietary knowledge to behave like an expert teammate? Schedule 15 minutes with Rushil.',
  },
  {
    id: 'sensible-health',
    title: 'Sensible Health',
    hook: 'Run care operations by asking - not by hunting through screens.',
    shortDescription:
      'A care-provider CRM with an embedded AI assistant for roster management, shift creation, shift notes, vital logs and operational workflows.',
    accentColor: 'green',
    accentClass: 'bg-green-100 text-green-700',
    accentBorder: 'border-green-200',
    accentBg: 'bg-green-50',
    tags: ['Care CRM', 'AI Assistant', 'Workflow Automation', 'Operational SaaS'],
    problem:
      'Care teams work across rosters, client records and shift documentation. The cost comes from hundreds of repetitive coordination and documentation actions, not one isolated task.',
    solution:
      'The CRM consolidates care operations while the AI layer lets staff perform key actions in natural language - creating shifts, recording and summarising shift notes, capturing client vital logs and retrieving operational information without leaving the workflow.',
    whatItDoes: [
      'Create and cancel shifts in natural language, with the right staff notified automatically',
      'Check who is available and qualified for a shift before assigning it',
      'Record and summarise shift notes without opening a form',
      'Capture client vital logs at the point of care',
      'Retrieve rosters, records and operational information by asking for them',
    ],
    capability:
      "The clearest example of the Samvat approach: the AI is not a separate chatbot. It is connected to the product's actions and data, so a conversation can actually move work forward.",
    context: 'An operational SaaS product for disability and care providers.',
    techUsed: ['LLM Integration', 'Workflow Automation', 'React', 'FastAPI', 'PostgreSQL'],
    proof: {
      eyebrow: 'Operational scope',
      headline: '5 core AI actions',
      note: 'Shift coordination, availability, care notes, vital logs and operational retrieval inside one CRM.',
    },
    resourceLinks: [
      { label: 'View CRM walkthrough', url: 'https://drive.google.com/file/d/1ycAx5NZOdffO6YbGJXun5QVO8JKE1GEW/view?usp=drivesdk' },
    ],
    hasDemo: true,
    cta: 'If your team lives inside a repetitive operational workflow, schedule 15 minutes with Rushil.',
  },
  {
    id: 'novavistaai',
    title: 'NovaVistaAI',
    hook: 'Make messy multi-supplier hotel inventory usable.',
    shortDescription:
      'An AI-native hotel and room mapping platform that de-duplicates supplier inventory, standardises room-level information and produces cleaner data and content for travel platforms.',
    accentColor: 'amber',
    accentClass: 'bg-amber-100 text-amber-700',
    accentBorder: 'border-amber-200',
    accentBg: 'bg-amber-50',
    tags: ['TravelTech', 'Entity Resolution', 'Room Mapping', 'AI Data Infrastructure'],
    problem:
      'Travel platforms ingest overlapping hotel inventory from multiple suppliers. The same hotel or room arrives with inconsistent names, attributes and content, creating duplicates, poor search quality and costly reconciliation.',
    solution:
      'NovaVistaAI applies AI-driven hotel matching, room normalisation, attribute standardisation and content enrichment so downstream booking platforms work with cleaner, more consistent inventory.',
    whatItDoes: [
      'Match the same hotel arriving from multiple suppliers under different names and identifiers',
      'Normalise room-level information so equivalent rooms resolve to one record',
      'Standardise attributes across inconsistent supplier feeds',
      'Enrich listing content so downstream search and booking surfaces work with cleaner data',
    ],
    capability:
      'AI applied to hard data-infrastructure problems - entity resolution, normalisation and enrichment, not only conversational interfaces.',
    context:
      'Used by EaseMyTrip, ixigo and TBO. The solution was presented at Arabian Travel Market in Dubai.',
    techUsed: ['Entity Resolution', 'ML Matching', 'Python', 'Data Pipelines', 'Cloud Infrastructure'],
    proof: {
      eyebrow: 'Data infrastructure',
      headline: '4 data-quality operations',
      note: 'Matching, normalisation, standardisation and enrichment across supplier feeds.',
    },
    hasDemo: false,
    cta: 'Have fragmented data that needs matching, enrichment or normalisation? Schedule 15 minutes with Rushil.',
  },
]

// Illustrative conversations only. No real client or patient records are shown.
export const chatbotFlows = [
  {
    id: 'create-shift',
    label: 'Create Shift',
    conversation: [
      { role: 'user', text: 'Create a Saturday morning shift for the demo care team.' },
      { role: 'bot', text: 'Sure. Which service area should I use for this illustrative shift?' },
      { role: 'user', text: 'Community support, 6 AM to 2 PM.' },
      { role: 'bot', text: 'Illustrative shift created for Saturday, 6:00 AM - 2:00 PM. I have queued notifications for available demo staff.' },
    ],
  },
  {
    id: 'check-availability',
    label: 'Check Availability',
    conversation: [
      { role: 'user', text: 'Who is available for the demo overnight shift tomorrow?' },
      { role: 'bot', text: 'Checking illustrative staff availability and qualifications for the demo roster.' },
      { role: 'bot', text: 'Three sample staff profiles are available and meet the configured rest-period rules. Would you like me to prepare an assignment?' },
    ],
  },
  {
    id: 'add-shift-note',
    label: 'Add Shift Note',
    conversation: [
      { role: 'user', text: 'Add a shift note for the sample afternoon handover.' },
      { role: 'bot', text: 'I can save an illustrative handover note. What summary should the team see?' },
      { role: 'user', text: 'Routine support completed; follow-up task is scheduled for tomorrow.' },
      { role: 'bot', text: 'Sample shift note saved and summarised for the demo handover view.' },
    ],
  },
  {
    id: 'log-vitals',
    label: 'Log Vitals',
    conversation: [
      { role: 'user', text: 'Record an illustrative vital log for the demo client.' },
      { role: 'bot', text: 'This demo contains no real records. Which sample reading should I capture?' },
      { role: 'user', text: 'Routine reading recorded as stable.' },
      { role: 'bot', text: 'Illustrative vital log saved to the demo timeline. No real client data was used.' },
    ],
  },
  {
    id: 'view-roster',
    label: 'View Roster',
    conversation: [
      { role: 'user', text: 'Show the demo roster for next Monday.' },
      { role: 'bot', text: 'The illustrative roster has morning, afternoon and overnight coverage. I can also check sample conflicts or open shifts.' },
    ],
  },
  {
    id: 'cancel-shift',
    label: 'Cancel Shift',
    conversation: [
      { role: 'user', text: 'Cancel the illustrative Friday evening support shift.' },
      { role: 'bot', text: 'I found the sample shift. This demonstration will notify only sample staff profiles. Should I proceed?' },
      { role: 'user', text: 'Yes, cancel it.' },
      { role: 'bot', text: 'Done. The illustrative shift was cancelled and a sample notification summary was created.' },
    ],
  },
]
