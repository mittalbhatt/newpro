You are an Agentic AI designed for Business-Aware Incident Orchestration.
Create a professional, client-facing HTML-based demo application for an Innovation Challenge.

The demo must visually resemble a Splunk-style incident/log monitoring UI
(log table view, timestamped incidents, severity indicators),
while showcasing AI-driven, business-aware incident analysis.

=====================================
UI & VISUAL EXPECTATIONS (IMPORTANT)
=====================================

- UI should look similar to Splunk / enterprise log monitoring tools:
  - Incident list in table or log-style format
  - Columns like: Time, Incident Name, Error Code, Severity, Status
  - Clean, dark/light enterprise theme
- DO NOT include any "Generate AI Analysis" button
- Instead, include a dropdown selector for time-based AI analysis

=====================================
FUNCTIONAL REQUIREMENTS
=====================================

1. Display the following three production incidents using mock data:

Incident 1:
- Credit Card Account Close
- Error Code: HTTP 404
- Type: Client-facing
- Severity: High

Incident 2:
- Primary Account Update Failure
- Error Code: HTTP 500 (Intermittent)
- Scenario: Bill Pay update
- Volume: 100 requests → 80 success, 20 failure
- Severity: Medium

Incident 3:
- Failed Dependency
- Error Code: HTTP 424
- Flow: UI Service → downstream services
- Severity: High

=====================================
AI ANALYSIS TRIGGER
=====================================

2. Replace the "Generate AI Analysis" button with a dropdown having options:
- 1 Day
- 1 Week
- 1 Month

Selecting a value must dynamically update the AI Analysis Panel.

=====================================
AGENTIC AI BEHAVIOR
=====================================

3. Time-based AI analysis logic:

When "1 Day" is selected:
- Show AI analysis ONLY for the latest incident:
  "Credit Card Account Close – HTTP 404"
- Include:
  - Root cause hypothesis
  - Business impact (non-technical summary)
  - Severity classification
  - Recommended immediate action

When "1 Week" is selected:
- Show AI analysis for:
  1) Credit Card Account Close – HTTP 404
  2) Primary Account Update Failure – HTTP 500 (intermittent)
- AI must:
  - Compare incidents
  - Detect recurring or related patterns
  - Highlight risk escalation
  - Recommend escalation to L3/L4 teams

When "1 Month" is selected:
- Show AI analysis for ALL three incidents
- Generate a consolidated AI incident report including:
  - Root cause summary across services
  - Business impact assessment
  - Cross-service dependency risk
  - Preventive and long-term recommendations

=====================================
OTHER TAB – GOVERNANCE & AUDIT VIEW
=====================================

4. Include an "Other Tab" section (similar to enterprise tools) that dynamically displays:

- Issue history
- Issue name
- Regulatory / Compliance impact
- Detected date
- Current status
- AI summarized ongoing conversation
- Severity
- Escalation actions (mail sent to stakeholders)
- CRQ recommendation:
  - Emergency
  - Maintenance
  - Future release

=====================================
LAYOUT SECTIONS
=====================================

5. The UI must clearly show these sections:
- Incident Log / Splunk-style List
- AI Analysis Panel
- Other Tab (Governance & Compliance)

Business-friendly summaries must be visible alongside technical details.

=====================================
OUTPUT REQUIREMENTS
=====================================

6. Output expectations:
- Generate a COMPLETE HTML file
- Include embedded CSS and JavaScript
- Use mock/static data only (no backend)
- Simulate AI-generated insights (no real AI calls)
- Code must be demo-ready and professional

The final demo should clearly demonstrate how Agentic AI
adds time-based intelligence, business awareness,
and automated orchestration to incident management,
beyond traditional monitoring tools like Splunk.
