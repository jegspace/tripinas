# 🚀 Playwright Test Automation – 2025  

![Playwright](https://img.shields.io/badge/Tested%20With-Playwright-2ea44f?logo=microsoft-edge)  
![Lighthouse](https://img.shields.io/badge/Performance-Lighthouse-orange?logo=lighthouse)  
![GitHub Actions](https://img.shields.io/badge/CI-GitHub%20Actions-blue?logo=github-actions)  
![Node.js](https://img.shields.io/badge/Node.js->=18-green?logo=node.js)  
![License](https://img.shields.io/badge/License-ISC-lightgrey)  

A modern **Playwright test automation framework** integrating:  
✅ Functional Testing  
✅ Negative & Boundary Testing  
✅ Page Object Model (POM) + Fixtures  
✅ Screenshot & Report Attachments  
✅ Lighthouse Performance Audits  

---

## 📑 Table of Contents
- [Quick Start](#-quick-start)  
- [Project Structure](#-project-structure)  
- [Running Tests](#-running-tests)  
- [Environment Configuration](#-environment-configuration)  
- [Example Test Run](#-example-test-run)  
- [Test Suites Overview](#-test-suites-overview)  
- [Test Reporting](#-test-reporting)  
- [Lighthouse Integration](#-lighthouse-integration)  
- [Tags & Filtering](#-tags--filtering)  
- [Dependencies](#-dependencies)  
- [Contributing](#-contributing)  
- [License](#-license)  

---

## 💡 Quick Start  

### 1. Clone & Install
```bash
git clone https://github.com/regie2197/tripinas.git
cd tripinas

# Install root deps
npm install

# Frontend deps
cd frontend && npm install

# (Optional) Backend deps
cd ../backend && npm install
```

### 2. Run App
```bash
npm run dev
```

### 3. Launch Playwright
```bash
# Run all tests headless
npm run test

# Run in UI mode
npx playwright test --ui
```

---

## 📂 Project Structure
```
tripinas/
 ┣ 📂 pages/                # Page Object Models (POM)
 ┣ 📂 shared/               # Fixtures, helpers, utils
 ┣ 📂 tests/features/       # Functional test suites
 ┣ 📂 tests/playwright-with-lighthouse/   # Performance & Lighthouse tests
 ┣ 📂 test-data/            # Sample users.json
 ┣ 📂 ui-validation/        # Auth setup & e2e tests
 ┣ 📜 package.json
 ┣ 📜 playwright.config.ts
 ┣ 📜 tsconfig.json
 ┣ 📜 lighthouse.config.json
 ┣ 📜 lighthouse.config.yml
```

---

## ▶️ Running Tests
Each test suite has **shortcuts** in `package.json`:  

```bash
# Login
npm run login-test
npm run login-test-ui

# Registration
npm run registration-test
npm run registration-test-ui

# Dashboard
npm run dashboard-test
npm run dashboard-test-ui

# Manage Account
npm run manageaccount-test
npm run manageaccount-test-ui

# Security
npm run security-test
npm run security-test-ui

# Boundary
npm run boundary-test
npm run boundary-test-ui

# Performance (Lighthouse)
npm run performance-test
npm run performance-test-ui
```

---

## 🌍 Environment Configuration
Add environment variables in **`frontend/.env.local`**:  

```bash
TEST_EMAIL=your_test_email@example.com
TEST_PASSWORD=your_password
```

---

## 🧪 Example Test Run
Login test with screenshots attached:  

```bash
npm run login-test
```

✅ Valid login + profile check  
❌ Negative login (invalid password, username, empty fields)  
📸 Screenshots stored in `test-screenshots/`  

---

## 📘 Test Suites Overview
- **Login** → happy path + invalid cases  
- **Registration** → valid, invalid, duplicates, special chars  
- **Dashboard** → profile check + logout  
- **Manage Account** → update profile, upload/remove photo  
- **Security** → update/reset password  
- **Boundary** → edge cases for username/email/password  
- **Performance** → Lighthouse metrics (Performance, Accessibility, SEO, Best Practices)  

---

## 📊 Test Reporting
- Screenshots auto-attached via `helpers.ts`  
- Supports **GitHub Actions Reporter** (`@estruyf/github-actions-reporter`)  
- Lighthouse HTML reports stored in:  
  ```
  /lighthouse-report/custom-lighthouse-report.html
  ```

---

## 🌐 Lighthouse Integration
Custom configs in:  
- `lighthouse.config.json`  
- `lighthouse.config.yml`  

Run:  
```bash
npm run performance-test
```

---

## 🔖 Tags & Filtering
Use tags for focused runs:  

```bash
# Run only Login tests
npx playwright test --grep "@Login"

# Run Negative tests
npx playwright test --grep "@NegativeTesting"
```

Tags used:  
`@Login`, `@Registration`, `@SmokeTesting`, `@NegativeTesting`, `@BoundaryTesting`, `@Performance`, `@Regression`, `@HappyPath`  

---

## ⚙️ Dependencies
Core stack:  
- [Playwright](https://playwright.dev/) – browser automation  
- [Faker.js](https://fakerjs.dev/) – random test data  
- [dotenv](https://www.npmjs.com/package/dotenv) – env variables  
- [Lighthouse](https://developer.chrome.com/docs/lighthouse) – performance audits  
- [chrome-launcher](https://www.npmjs.com/package/chrome-launcher)  
- [js-yaml](https://www.npmjs.com/package/js-yaml)  

---

## 🤝 Contributing
Contributions are welcome!  
- Fork this repo  
- Create a feature branch  
- Submit a PR with detailed notes  

Report issues here: [Tripinas Issues](https://github.com/jegspace/tripinas/issues)  

---

## 📜 License
This project is licensed under the **ISC License**.  
