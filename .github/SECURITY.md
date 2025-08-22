# Security Policy for Monit's AI Portfolio

## Our Commitment

The security of my AI-Native Portfolio is a top priority. I am committed to ensuring the application remains secure and appreciate the vital role the security community plays in helping achieve that goal. This document outlines the procedures for reporting a vulnerability responsibly.

---

## Supported Versions

Security updates are provided for the latest stable version of the application. Please ensure you are running the most recent release before reporting an issue.

| Version | Supported          |
| ------- | ------------------ |
| `1.x.x` | :white_check_mark: |
| `< 1.0` | :x:                |

---

## 🛡️ Reporting a Security Vulnerability

I take all security reports very seriously. If you discover a vulnerability, I ask that you report it **privately** to give me the opportunity to address it before it is publicly disclosed.

**🚫 Do NOT open a public GitHub issue for security vulnerabilities.**

Instead, please send a detailed email to:

### 📧 **monit.j@outlook.com**

---

### What to Include in Your Report

To help me validate and fix the issue as quickly as possible, please include the following in your report:

-   **A clear and descriptive title:** e.g., `[SECURITY] Cross-Site Scripting (XSS) in Chat Input`
-   **A detailed description** of the vulnerability and its potential impact.
-   **Clear, step-by-step instructions** to reproduce the vulnerability.
-   **A Proof of Concept (PoC):** This could be code snippets, screenshots, a video, or a live demo.
-   **Any relevant environment details:** e.g., Browser, OS, and project version.

You will receive an acknowledgment of your report within **48 hours**, and I will keep you updated on the progress toward a resolution.

---

## 🔒 Security Best Practices in this Project

This portfolio is designed with security-first principles:

-   **🔑 Secret Management:** All API keys and secrets are managed via `.env.local` (which is git-ignored) for local development and through **Vercel Environment Variables** in production. There are no hardcoded secrets in the source code.
-   **🛡️ Secure API Routes:** All sensitive operations and calls to external APIs (like Mistral AI) are handled exclusively through **server-side Next.js API routes**, preventing any exposure of secrets to the client.
-   **📦 Dependency Scanning:** **GitHub's Dependabot** is enabled to automatically scan for and report vulnerabilities in project dependencies.
-   ** scan:** The repository has **GitHub's secret scanning** enabled to prevent accidental exposure of credentials.

---

## 🙏 Acknowledgments

I sincerely thank the security research community for their dedication to making open-source software safer for everyone. Your efforts are greatly appreciated.