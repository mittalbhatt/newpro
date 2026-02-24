As an ADA compliance expert, analyze the Angular component's minified element file using the comprehensive master ADA guidelines below. Generate single-line accessibility test cases only, each starting with the word "Verify".

**MASTER ADA GUIDELINES (WCAG 2.1 Level AA):**

PERCEIVABLE - Text Alternatives:
- 1.1.1a: Images must have descriptive alt text (Highest)
- 1.1.1b: Decorative images must have empty alt (alt="") (Medium)
- 1.1.1c: Icon buttons must have accessible names via aria-label (Highest)
- 1.1.1d: Complex images (charts/graphs) need extended descriptions (High)
- 1.1.1e: CAPTCHA must have text alternatives identifying purpose (Highest)

PERCEIVABLE - Time-based Media:
- 1.2.1: Audio-only content requires transcript (Highest)
- 1.2.2: Prerecorded videos must have captions (Highest)
- 1.2.3: Video-only content needs audio description or transcript (Highest)
- 1.2.4: Live videos must have real-time captions (Medium)
- 1.2.5: Videos need audio description for visual content (Medium)

PERCEIVABLE - Adaptable:
- 1.3.1a: Headings must follow proper hierarchy (no skipping) (High)
- 1.3.1b: Lists must use proper ul/ol/li elements (Low)
- 1.3.1c: Tables must have proper headers and captions (Highest)
- 1.3.1d: Form labels must be programmatically associated (Highest)
- 1.3.1e: Landmark elements (header, nav, main, footer) must be present (High)
- 1.3.2: Reading order must be logical when linearized (High)
- 1.3.3: Instructions cannot rely solely on sensory characteristics (Medium)
- 1.3.4: Content must work in both portrait and landscape (Low)
- 1.3.5: Form fields need autocomplete attributes (Medium)

PERCEIVABLE - Distinguishable:
- 1.4.1: Color cannot be sole means of conveying information (Highest)
- 1.4.2: Auto-playing audio must have pause control (Low)
- 1.4.3a: Normal text contrast must be at least 4.5:1 (High)
- 1.4.3b: Large text contrast must be 3:1 (High)
- 1.4.4: Text must resize to 200% without loss (High)
- 1.4.5: Images of text should not be used (Medium)
- 1.4.10: Content must reflow at 400% zoom (Medium)
- 1.4.11a: UI components must have 3:1 contrast (Medium)
- 1.4.11b: Focus indicators must have 3:1 contrast (Medium)
- 1.4.11c: Graphical objects must have 3:1 contrast (Medium)
- 1.4.12: Content works with increased text spacing (Low)
- 1.4.13a: Hover/focus content must be dismissible (Escape key) (Medium)
- 1.4.13b: Hover content must be hoverable (Low)

OPERABLE - Keyboard Accessible:
- 2.1.1: All functionality must be keyboard operable (Highest)
- 2.1.2: No keyboard traps - focus must move away (Highest)
- 2.1.4: Character key shortcuts can be turned off (Medium)

OPERABLE - Enough Time:
- 2.2.1: Time limits can be adjusted or extended (Medium)
- 2.2.2: Moving/blinking content can be paused (Low)

OPERABLE - Seizures:
- 2.3.1: No content flashes more than 3 times per second (Low)

OPERABLE - Navigable:
- 2.4.1: Skip link must exist to bypass navigation (Medium)
- 2.4.2: Pages must have descriptive titles (Medium)
- 2.4.3: Focus order must be logical and preserve meaning (Highest)
- 2.4.4: Link purpose must be clear from text or context (Medium)
- 2.4.5: Multiple ways to locate pages (Medium)
- 2.4.6: Headings and labels must describe topic or purpose (Medium)
- 2.4.7: Keyboard focus must be visually evident (Highest)

OPERABLE - Input Modalities:
- 2.5.1: Pointer gestures alternatives for complex gestures (Medium)
- 2.5.2: Pointer cancellation (no down-event execution) (Medium)
- 2.5.3: Label in name - visible text must match accessible name (Medium)
- 2.5.5: Touch targets minimum 44x44px (Medium)

UNDERSTANDABLE - Readable:
- 3.1.1: Page language must be specified in HTML (Medium)
- 3.1.2: Language changes must be identified (Low)

UNDERSTANDABLE - Predictable:
- 3.2.1: No context change on focus (Medium)
- 3.2.2: No unexpected context change on input (Medium)
- 3.2.3: Consistent navigation across pages (Medium)
- 3.2.4: Consistent identification (Medium)

UNDERSTANDABLE - Input Assistance:
- 3.3.1: Error identification - errors clearly identified (Highest)
- 3.3.2: Labels or instructions provided (High)
- 3.3.3: Error suggestions provided (Medium)
- 3.3.4: Error prevention for legal/financial data (Medium)

ROBUST - Compatible:
- 4.1.1: Elements have complete start/end tags, unique IDs (Medium)
- 4.1.2: Name, role, value available to assistive tech (Highest)
- 4.1.3: Status messages announced without focus (Medium)

UI Library & Component Specific:
- LIB-01: Modal dialogs must trap focus and return on close (Highest)
- LIB-02: Dropdown menus must be keyboard navigable with arrows (Highest)
- LIB-03: Accordions must announce expanded/collapsed state (High)
- LIB-04: Tab panels must manage focus and announce selection (High)
- LIB-05: Toast notifications must be announced (aria-live) (Medium)
- LIB-06: Custom form controls must expose proper role/state (Highest)
- LIB-07: Loading states must be announced (Medium)
- LIB-08: ARIA landmarks must identify regions (High)

**Source to Analyze:**
- Angular element minified file (*.js or *.min.js) containing:
  - Embedded HTML templates
  - Inline CSS/styles
  - UI library component code
  - Component logic and bindings
  - ARIA attributes and labels

**Generate single-line test cases starting with "Verify" based on the master guidelines above and elements detected in the minified source:**

1. Verify [detected image] has descriptive alt text matching guideline 1.1.1a
2. Verify [detected decorative image] has empty alt attribute per guideline 1.1.1b
3. Verify [detected icon button] has aria-label for screen reader per guideline 1.1.1c
4. Verify [detected form input] has programmatically associated label per guideline 1.3.1d
5. Verify [detected modal dialog] traps keyboard focus per guideline LIB-01
6. Verify [detected close button] has visible focus state per guideline 2.4.7
7. Verify JAWS announces correct aria-label for [detected close button] per guideline 4.1.2
8. Verify [detected modal] returns focus to trigger element after closing per guideline LIB-01
9. Verify [detected heading structure] follows proper hierarchy (no skipping) per guideline 1.3.1a
10. Verify [detected dropdown menu] is keyboard navigable with arrow keys per guideline LIB-02
11. Verify [detected form] error messages are clearly identified per guideline 3.3.1
12. Verify focus moves to first error message after [detected form] validation fails per guideline 3.3.1
13. Verify [detected link] purpose is clear from text context per guideline 2.4.4
14. Verify [detected list] uses proper ul/ol/li elements per guideline 1.3.1b
15. Verify [detected table] has proper headers and caption per guideline 1.3.1c
16. Verify [detected color-coded information] has text alternative per guideline 1.4.1
17. Verify [detected text] contrast meets 4.5:1 minimum per guideline 1.4.3a
18. Verify [detected large text] contrast meets 3:1 minimum per guideline 1.4.3b
19. Verify [detected component] works at 200% zoom without loss per guideline 1.4.4
20. Verify [detected accordion] announces expanded/collapsed state per guideline LIB-03
21. Verify [detected tab panel] manages focus and announces selection per guideline LIB-04
22. Verify [detected toast notification] is announced via aria-live per guideline LIB-05
23. Verify [detected custom checkbox] exposes proper role and state per guideline LIB-06
24. Verify [detected loading state] is announced to screen readers per guideline LIB-07
25. Verify [detected landmark] (header/nav/main/footer) is present per guideline 1.3.1e
26. Verify [detected skip link] appears on focus and bypasses navigation per guideline 2.4.1
27. Verify [detected focus order] follows logical visual layout per guideline 2.4.3
28. Verify [detected touch target] is minimum 44x44px per guideline 2.5.5
29. Verify [detected dynamic content] updates are announced via live regions per guideline 4.1.3
30. Verify [detected video] has captions per guideline 1.2.2
31. Verify [detected audio] has transcript per guideline 1.2.1
32. Verify [detected auto-playing audio] has pause control per guideline 1.4.2
33. Verify [detected tooltip] can be dismissed with Escape key per guideline 1.4.13a
34. Verify [detected language] is specified in HTML lang attribute per guideline 3.1.1
35. Verify [detected form] has no unexpected context change on input per guideline 3.2.2
36. Verify [detected error message] provides suggestions for fixing per guideline 3.3.3
37. Verify [detected ARIA attribute] correctly exposes name, role, value per guideline 4.1.2
38. Verify [detected shortcut key] can be turned off or remapped per guideline 2.1.4
39. Verify [detected CAPTCHA] has text alternative identifying purpose per guideline 1.1.1e
40. Verify [detected complex image] has extended description per guideline 1.1.1d

---

**INSTRUCTIONS:**
1. Replace [detected ...] with actual elements found in my minified source file
2. Generate additional test cases based on specific UI library components detected
3. Prioritize Highest/High severity guidelines first
4. Ensure each test case starts with "Verify"

**Source File Content:**
[PASTE YOUR MINIFIED ANGULAR ELEMENT FILE CONTENT HERE]
