# Cypress Real World App - Test Plan

## Overview
This comprehensive test plan covers the Cypress Real World App, ensuring coverage of all navigation, user flows, error states, and UI elements discovered during exploration. It includes happy paths, edge cases, and error handling scenarios, with clear steps, expected results, assumptions, and success/failure criteria.

---

## Navigation Suite

### Home Navigation and Content Verification
- **Starting Assumptions:** User is logged in and can start from any page.
- **Steps:**  
  1. Verify visibility of navigation buttons: Home, My Account, Bank Accounts, Notifications, Logout.  
  2. Click the Home button.  
  3. Confirm landing on Home page.  
  4. Verify the Everyone tab is selected by default.  
  5. Confirm presence of transaction items under the Everyone tab.  
- **Expected Results:**  
  Home page loads correctly with Everyone tab active and transaction items visible.  
- **Success Criteria:** Navigation works, content updates correctly.  
- **Failure Criteria:** Navigation breaks, content missing or incorrect.

### My Account Page Accessibility and UI Elements
- **Starting Assumptions:** User logged in and authenticated.  
- **Steps:**  
  1. Click My Account navigation button.  
  2. Verify User Settings page loads.  
  3. Check presence of editable input fields: First Name, Last Name, Email, Phone Number.  
  4. Ensure Save button is visible; do NOT modify or submit.  
- **Expected Results:** User Settings page displays all input fields and Save button correctly.  
- **Success Criteria:** Inputs editable, Save button present.  
- **Failure Criteria:** Missing or non-editable fields, absent Save button.

### Bank Accounts Page Verification
- **Starting Assumptions:** User logged in.  
- **Steps:**  
  1. Navigate to Bank Accounts page.  
  2. Verify list of bank accounts shown, including deleted and active accounts.  
  3. Confirm Delete buttons visible but do NOT click.  
  4. Confirm presence of Create button; do NOT click.  
- **Expected Results:** List and buttons visible and responsive.  
- **Success Criteria:** Expected UI elements present and functional.  
- **Failure Criteria:** Missing accounts or buttons, errors.

### Notifications Page Load and UI Verification
- **Starting Assumptions:** Authenticated user session.  
- **Steps:**  
  1. Navigate to Notifications page.  
  2. Verify notification items list shown.  
  3. Confirm Dismiss buttons visible but do NOT click.  
- **Expected Results:** Notification list loads, buttons present.  
- **Success Criteria:** Notifications fully visible and accessible.  
- **Failure Criteria:** Missing notifications or buttons.

### Transaction Tabs Exploration on Home Page
- **Starting Assumptions:** User logged in on Home page.  
- **Steps:**  
  1. Click each tab sequentially: Everyone, Friends, Mine.  
  2. Verify content updates with each tab change.  
  3. Confirm Date and Amount filter buttons visible but do NOT interact.  
- **Expected Results:** Tabs switch content correctly; filter buttons visible.  
- **Success Criteria:** Tab switching works smoothly.  
- **Failure Criteria:** Tabs static or cause errors.

---

## User Account Suite

### View User Profile Information
- **Starting Assumptions:** User logged in at My Account page.  
- **Steps:**  
  1. Verify user profile fields populated and editable.  
  2. Do NOT save any changes.  
- **Expected Results:** Fields show correct info and accept edits.  
- **Success Criteria:** Inputs editable and accurate.  
- **Failure Criteria:** Missing/invalid or non-editable fields.

---

## Error and Edge Cases Suite

### Empty Bank Accounts Handling
- **Starting Assumptions:** User has no bank accounts.  
- **Steps:**  
  1. Navigate to Bank Accounts page with no accounts setup.  
  2. Verify empty state message or visible indication.  
  3. Confirm Create button present and functional.  
- **Expected Results:** Clear empty state shown; Create button accessible.  
- **Success Criteria:** No crashes; UI handles empty state gracefully.  
- **Failure Criteria:** Errors, crashes, missing feedback.

### Input Validation on Account Settings
- **Starting Assumptions:** Fresh My Account page state.  
- **Steps:**  
  1. Enter invalid input formats into user profile fields (invalid email, phone).  
  2. Verify validation messages are shown.  
  3. Do NOT save changes.  
- **Expected Results:** Validation errors displayed; Save disabled or inactive if errors present.  
- **Success Criteria:** Prevention of invalid submissions.  
- **Failure Criteria:** Invalid data accepted or no validation shown.

---

# End of Test Plan
