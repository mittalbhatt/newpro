You are an Agentic AI designed for Business-Aware Incident Orchestration.
Create a professional, client-facing HTML demo application for an Innovation Challenge.

The objective of this demo is to showcase how AI agents intelligently analyze,
prioritize, and orchestrate production incidents based on business impact and time context.

==============================
FUNCTIONAL REQUIREMENTS
==============================

1. Incident Data to Display
Display the following three production incidents using mock data:

Incident 1:
- Name: Credit Card Account Close
- Error Code: HTTP 404
- Nature: Client-facing failure

Incident 2:
- Name: Primary Account Update Failure
- Error Code: HTTP 500 (Intermittent)
- Scenario: While updating Bill Pay
- Volume: 100 requests → 80 success, 20 failure

Incident 3:
- Name: Failed Dependency
- Error Code: HTTP 424
- Flow: UI Service → multiple downstream services
- Nature: Dependency failure under load

2. AI Analysis Trigger (Dropdown-Based)
Replace any "Generate AI Analysis" button with a dropdown selector having options:
- 1 Day
- 1 Week
- 1 Month

==============================
AI AGENT BEHAVIOR
==============================

3. Time-Based AI Intelligence

When "1 Day" is selected:
- Display AI analysis ONLY for the latest incident:
  "Credit Card Account Close – HTTP 404"
- AI output must include:
  - Root cause hypothesis
  - Business impact (non-technical language)
  - Severity classification
  - Recommended immediate action

When "1 Week" is selected:
- Display AI analysis for:
  1) Credit Card Account Close – HTTP 404
  2) Primary Account Update Failure – HTTP 500 intermittent
- AI must:
  - Perform comparative analysis
  - Detect trends or recurring patterns
  - Recommend escalation (L3/L4 or management)

When "1 Month" is selected:
- Display AI analysis for ALL three incidents
- Generate a consolidated AI incident report including:
  - Root cause summary across services
  - Business impact assessment
  - Cross-service dependency risk analysis
  - Preventive and long-term recommendations

==============================
OTHER TAB – GOVERNANCE VIEW
==============================

4. Include an "Other Tab" section that dynamically displays incident governance details:

- Issue history
- Issue name
- Regulatory / Compliance impact
- Detected date
- Current status
- AI-summarized ongoing conversation
- Severity
- Escalation actions (mail sent to stakeholders)
- CRQ information (Emergency / Maintenance / Future release)

==============================
UI & PRESENTATION EXPECTATIONS
==============================

5. User Interface
- Clean, enterprise-grade layout suitable for client and leadership demos
- Clear sections:
  - Incident List
  - AI Analysis Panel
  - Other Tab (Governance & Compliance)
- Business-friendly summaries visible alongside technical details
- AI insights should appear realistic, confident, and decision-oriented

==============================
OUTPUT REQUIREMENTS
==============================

6. Output
- Generate a COMPLETE HTML file
- Use embedded CSS and JavaScript
- Use mock/static data only (no backend or APIs)
- Simulate AI responses (no real AI calls)
- Code must be demo-ready and readable

The final output must help judges clearly understand how Agentic AI
adds business awareness, prioritization, and intelligent orchestration
to incident management.
