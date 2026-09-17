# Leaftaps Create Lead Test Plan

## Application Overview

Test the Leaftaps CRM/SFA login and create-lead workflow at https://leaftaps.com/opentaps/control/main. The authenticated user democsr2 opens CRM/SFA, navigates to Create Lead, supplies the required company, first-name, and last-name values, optionally supplies contact and lead details, submits the form, and verifies the resulting lead. Each test starts from a fresh browser context and must use unique lead data where creation occurs to avoid collisions.

## Test Scenarios

### 1. Authentication and Lead Creation

**Seed:** `tests/seed.spec.ts`

#### 1.1. Create a lead with required and valid optional details

**File:** `tests/createLeadPlan/create-lead-happy-path.spec.ts`

**Steps:**
  1. Start from a fresh browser context and navigate to https://leaftaps.com/opentaps/control/main.
    - expect: The Leaftaps Login page is displayed with Username, Password, and Login controls.
  2. Enter username democsr2 and password crmsfa, then click Login.
    - expect: The authenticated welcome page identifies the signed-in user as Demo B2C CSR or democsr2.
  3. Click CRM/SFA, then open the Create Lead shortcut or navigate to https://leaftaps.com/opentaps/control/createLeadForm.
    - expect: The Create Lead page displays the required fields, optional details, and final Create Lead control.
  4. Enter unique values for Company Name, First name, and Last name. Enter valid optional email, phone, city, description, and select a valid Source such as Website.
    - expect: The entered values remain visible in their corresponding fields and the selected Source is retained.
  5. Click the final Create Lead button.
    - expect: The request completes without validation errors.
    - expect: A lead detail or confirmation page is displayed with the submitted company and person names.

#### 1.2. Reject login with invalid credentials

**File:** `tests/createLeadPlan/invalid-login.spec.ts`

**Steps:**
  1. Start from a fresh browser context and navigate to https://leaftaps.com/opentaps/control/main.
    - expect: The Leaftaps Login page is displayed.
  2. Enter democsr2 and an incorrect password, then click Login.
    - expect: Authentication is rejected.
    - expect: The user cannot access CRM/SFA or Create Lead.
    - expect: A clear login error is shown or the login form remains available.

#### 1.3. Validate all required lead fields

**File:** `tests/createLeadPlan/required-lead-fields.spec.ts`

**Steps:**
  1. Start fresh, log in with democsr2 and crmsfa, open CRM/SFA, and open Create Lead.
    - expect: A blank Create Lead form is displayed.
  2. Leave Company Name, First name, and Last name empty and click Create Lead.
    - expect: No lead is created.
    - expect: Errors identify missing firstName, lastName, and companyName parameters.
  3. Individually omit Last name, First name, and Company Name while supplying the other two required fields, submitting each variation from a fresh form.
    - expect: Each submission is rejected.
    - expect: The error identifies the omitted required field.

#### 1.4. Create a lead with optional fields omitted and populated

**File:** `tests/createLeadPlan/optional-lead-fields.spec.ts`

**Steps:**
  1. Start fresh, log in, open CRM/SFA, and open Create Lead.
    - expect: A blank Create Lead form is displayed.
  2. Enter unique valid values for the three required fields only and leave optional fields empty.
    - expect: Optional fields can remain empty and default selections remain available.
  3. Submit the form.
    - expect: The lead is created successfully and the resulting record contains the required values.
  4. From a fresh state, repeat with a valid email, numeric phone, state, ZIP/postal code, and non-default Source option.
    - expect: Optional values are accepted and retained.
    - expect: The created record reflects the selected Source and contact details.
