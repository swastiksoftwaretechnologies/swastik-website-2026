export const projects = [
  {
    id: 'healthcare-crm',
    title: 'Healthcare CRM',
    shortDescription: 'AI chatbot with 11 automated flows for shift management, patient records, and reporting.',
    accentColor: 'green',
    accentClass: 'bg-green-100 text-green-700',
    accentBorder: 'border-green-200',
    accentBg: 'bg-green-50',
    tags: ['AI Chatbot', 'CRM', 'Healthcare'],
    metrics: [
      { value: 11, label: 'AI Flows', suffix: '' },
      { value: 99, label: 'Uptime', suffix: '%' },
      { value: 60, label: 'Time Saved', suffix: '%' },
    ],
    hasDemo: true,
    overview:
      'A fully integrated healthcare CRM platform with an AI assistant named "Aria" that handles shift scheduling, patient record management, automated reporting, and inter-department communication — all through natural language.',
    problem:
      'The client, a mid-sized healthcare network, was drowning in manual coordination: nurses calling managers to swap shifts, staff printing paper reports, and no central system for patient handoffs.',
    solution:
      'We built a custom LLM-powered chatbot integrated with their existing HRMS and patient database. Aria handles 11 distinct conversation flows, from "Create Shift" to "Emergency Alert", eliminating manual coordination overhead entirely.',
    techUsed: ['LangChain', 'OpenAI GPT-4', 'React', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'analytics-platform',
    title: 'Analytics Platform',
    shortDescription: 'Real-time data pipeline with predictive dashboards for e-commerce intelligence.',
    accentColor: 'blue',
    accentClass: 'bg-blue-100 text-blue-700',
    accentBorder: 'border-blue-200',
    accentBg: 'bg-blue-50',
    tags: ['Analytics', 'AI/ML', 'E-commerce'],
    metrics: [
      { value: 5, label: 'Data Sources', suffix: 'M+' },
      { value: 98, label: 'Accuracy', suffix: '%' },
      { value: 3, label: 'Faster Decisions', suffix: 'x' },
    ],
    hasDemo: false,
    overview: 'A real-time analytics platform aggregating data from multiple e-commerce channels into predictive dashboards.',
    problem: 'Placeholder — documentation and demo video coming soon.',
    solution: 'Placeholder — to be populated when project documentation is finalized.',
    techUsed: ['Python', 'Apache Kafka', 'React', 'TensorFlow', 'BigQuery'],
  },
  {
    id: 'smart-logistics',
    title: 'Smart Logistics App',
    shortDescription: 'AI-powered route optimization and fleet management mobile application.',
    accentColor: 'amber',
    accentClass: 'bg-amber-100 text-amber-700',
    accentBorder: 'border-amber-200',
    accentBg: 'bg-amber-50',
    tags: ['Mobile', 'AI', 'Logistics'],
    metrics: [
      { value: 40, label: 'Fuel Savings', suffix: '%' },
      { value: 200, label: 'Vehicles Managed', suffix: '+' },
      { value: 28, label: 'Faster Delivery', suffix: '%' },
    ],
    hasDemo: false,
    overview: 'An AI-powered mobile application for real-time route optimization and fleet management.',
    problem: 'Placeholder — documentation and demo video coming soon.',
    solution: 'Placeholder — to be populated when project documentation is finalized.',
    techUsed: ['React Native', 'Python', 'Google Maps API', 'PyTorch', 'PostgreSQL'],
  },
]

// Chatbot flows for the Healthcare CRM demo
export const chatbotFlows = [
  {
    id: 'create-shift',
    label: 'Create Shift',
    conversation: [
      { role: 'user', text: 'I need to create a new shift for Saturday morning.' },
      { role: 'bot', text: 'Sure! What department is this shift for?' },
      { role: 'user', text: 'ICU, 6 AM to 2 PM.' },
      { role: 'bot', text: 'Got it. How many staff members do you need for this shift?' },
      { role: 'user', text: '3 nurses and 1 supervisor.' },
      { role: 'bot', text: 'Shift created for Saturday, 6:00 AM – 2:00 PM in ICU. I\'ve notified 4 available staff members. Awaiting their confirmations.' },
    ],
  },
  {
    id: 'add-patient',
    label: 'Add Patient',
    conversation: [
      { role: 'user', text: 'Add a new patient — John Doe, DOB 1985-03-12.' },
      { role: 'bot', text: 'Creating patient record. What ward should John Doe be admitted to?' },
      { role: 'user', text: 'General Ward B.' },
      { role: 'bot', text: 'Patient John Doe (DOB: Mar 12, 1985) added to General Ward B. Record ID: PT-2026-0482. Would you like to assign a primary nurse?' },
    ],
  },
  {
    id: 'generate-report',
    label: 'Generate Report',
    conversation: [
      { role: 'user', text: 'Generate the weekly staffing report for ICU.' },
      { role: 'bot', text: 'Generating ICU staffing report for the week of June 2–8, 2026...' },
      { role: 'bot', text: 'Report ready. Summary: 94% shift coverage, 2 open slots on Sunday night. 3 overtime instances flagged. Sending to your email now.' },
    ],
  },
  {
    id: 'swap-shifts',
    label: 'Swap Shifts',
    conversation: [
      { role: 'user', text: 'I need to swap my Friday shift with someone.' },
      { role: 'bot', text: 'I found 3 staff members available to swap. Sarah (Nurse, qualified for your role) is the best match. Shall I send her a swap request?' },
      { role: 'user', text: 'Yes, send it.' },
      { role: 'bot', text: 'Swap request sent to Sarah. You\'ll be notified once she confirms. The shift swap will auto-apply upon her approval.' },
    ],
  },
  {
    id: 'set-reminder',
    label: 'Set Reminder',
    conversation: [
      { role: 'user', text: 'Remind me about the team briefing tomorrow at 8 AM.' },
      { role: 'bot', text: 'Reminder set for tomorrow, June 11 at 8:00 AM: "Team Briefing". I\'ll also send a notification to all ICU staff. Anything else?' },
    ],
  },
  {
    id: 'check-availability',
    label: 'Check Availability',
    conversation: [
      { role: 'user', text: 'Who is available for the pediatric night shift tomorrow?' },
      { role: 'bot', text: 'Checking qualified staff availability for Pediatrics, tomorrow night...' },
      { role: 'bot', text: 'I found 5 available staff members. Emily, Jordan, and Priya are fully compliant with rest-period rules. Want me to rank them by overtime history or seniority?' },
    ],
  },
  {
    id: 'cancel-shift',
    label: 'Cancel Shift',
    conversation: [
      { role: 'user', text: 'Cancel the dialysis support shift on Friday evening.' },
      { role: 'bot', text: 'I found the shift scheduled for Friday, June 12 from 5 PM to 11 PM. This will notify 2 assigned nurses and 1 supervisor. Should I proceed?' },
      { role: 'user', text: 'Yes, cancel it and notify the department head.' },
      { role: 'bot', text: 'Done. The shift has been canceled, all assigned staff were notified, and a cancellation summary has been sent to the department head.' },
    ],
  },
  {
    id: 'transfer-patient',
    label: 'Transfer Patient',
    conversation: [
      { role: 'user', text: 'Transfer patient Maria Lewis from Ward C to ICU.' },
      { role: 'bot', text: 'Preparing transfer for Maria Lewis. ICU Bed 14 is available and staffed. Should I move her chart, assign the ICU nurse, and alert transport?' },
      { role: 'user', text: 'Yes, do all of that now.' },
      { role: 'bot', text: 'Transfer initiated. Chart moved, Nurse Elena assigned, and patient transport alerted. Estimated transfer completion: 12 minutes.' },
    ],
  },
  {
    id: 'view-schedule',
    label: 'View Schedule',
    conversation: [
      { role: 'user', text: 'Show me Dr. Patel’s schedule for next Monday.' },
      { role: 'bot', text: 'Next Monday Dr. Patel is booked from 8 AM–1 PM in Cardiology, on rounds from 2 PM–4 PM, and on-call after 6 PM. I can export this or check for conflicts if needed.' },
    ],
  },
  {
    id: 'update-records',
    label: 'Update Records',
    conversation: [
      { role: 'user', text: 'Update patient record for Lisa Wong — allergy to penicillin.' },
      { role: 'bot', text: 'Updating Lisa Wong’s allergy profile with penicillin sensitivity. This change will sync to prescribing alerts and nursing handoff notes. Confirm update?' },
      { role: 'user', text: 'Confirm.' },
      { role: 'bot', text: 'Record updated successfully. Prescribing alerts are now active and the next care-team handoff has been flagged with the allergy notice.' },
    ],
  },
  {
    id: 'emergency-alert',
    label: 'Emergency Alert',
    conversation: [
      { role: 'user', text: 'Send emergency alert — Code Blue, Room 412.' },
      { role: 'bot', text: '🚨 EMERGENCY ALERT SENT: Code Blue, Room 412. Notifying on-call physician Dr. Patel, crash cart team, and charge nurse. ETA: 90 seconds. Do you need me to page additional specialists?' },
    ],
  },
]
