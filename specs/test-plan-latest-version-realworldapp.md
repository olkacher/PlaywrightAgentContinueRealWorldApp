# Cypress Real World App - Test Plan (Latest Version)

## Overview
This test plan is based on UI snapshot exploration and covers all pages, menus, tabs, and interactive elements. It includes executable test actions validating navigation, user account edits, bank accounts management, notifications handling, and edge case scenarios.

---

## Navigation and Functional Interaction Suite

### Home Page Navigation and Tab Interaction
- **Starting Assumptions:** User logged in.
- **Steps:**
  1. Click Home navigation button.
  2. Verify Home page loads with transactions list.
  3. Click transaction tabs: Everyone, Friends, Mine.
  4. Verify content updates dynamically for each tab.
  5. Click Date and Amount filter buttons and verify UI updates accordingly.
- **Expected Results:**
  - Home page and transactions load successfully.
  - Tabs update transaction list correctly.
  - Filters respond visually and functionally.
- **Success Criteria:** Page content updates with each interaction without errors.
- **Failure Criteria:** UI freezes or fails to react correctly.

### User Account Management and Edit
- **Starting Assumptions:** User logged in on My Account page.
- **Steps:**
  1. Edit First Name, Last Name, Email, Phone fields with valid data.
  2. Click Save and confirm success feedback.
  3. Enter invalid data formats (e.g., malformed email).
  4. Confirm validation errors appear and Save disabled.
  5. Correct invalid data and save successfully again.
- **Expected Results:** Valid changes save properly; invalid inputs block save with validation messages.
- **Success Criteria:** Form validation works fully and data saves correctly.
- **Failure Criteria:** Save accepts invalid data or no validation shown.

### Bank Accounts Page Operations
- **Starting Assumptions:** User logged in on Bank Accounts page.
- **Steps:**
  1. Verify accounts list including deleted and active accounts.
  2. Click Delete on one account and confirm removal after confirmation.
  3. Click Create and add a valid new bank account.
  4. Verify the new account appears in the list.
  5. Attempt creating account with invalid inputs and verify validation.
- **Expected Results:** CRUD operations for bank accounts work with proper validations.
- **Success Criteria:** All operations complete successfully without errors.
- **Failure Criteria:** Operations fail or validation missing.

### Notifications Management
- **Starting Assumptions:** User on Notifications page.
- **Steps:**
  1. Review list of notifications.
  2. Click Dismiss on various notifications and verify removal or status change.
  3. Confirm no UI errors appear.
- **Expected Results:** Notifications dismiss properly and UI reflects changes.
- **Success Criteria:** Dismiss works smoothly.
- **Failure Criteria:** Dismiss fails or UI breaks.

---

## Error Handling and Edge Cases Suite

### Handle Empty Bank Account List
- **Starting Assumptions:** User with no bank accounts.
- **Steps:**
  1. Open Bank Accounts page.
  2. Confirm empty state message displayed.
  3. Create new account and verify it is listed.
- **Expected Results:** Empty state handled gracefully and account creation works.
- **Success Criteria:** No crashes, proper UI feedback.
- **Failure Criteria:** Crashes or no proper empty state.

### Input Validation on User Profile
- **Starting Assumptions:** User on My Account page.
- **Steps:**
  1. Enter invalid input data (e.g., invalid email).
  2. Observe validation messages and disabled Save button.
  3. Correct inputs and save successfully.
- **Expected Results:** Input validation prevents invalid submissions.
- **Success Criteria:** Validation error messages are correct; save enabled only on valid data.
- **Failure Criteria:** Invalid data accepted or no error messages.

---
