# Auth.md — Authentication & Agent Access for CTG Code

CTG Code (https://ctgcode.com) is a public, static website. **No authentication is required, and there is no agent registration**, because the site exposes no protected resources.

## Authentication & registration status (for AI agents)

- **Authentication:** none. No API keys, OAuth tokens, bearer credentials, cookies, sessions, or logins are needed to read any page, asset, or sitemap.
- **Agent registration:** none, and none is possible. There is no client registration endpoint and no `register_uri`; Dynamic Client Registration (RFC 7591) does not apply because there is nothing to register for.
- **Protected resources:** none. The site has no gated API, account area, or private content. Every URL is a public `GET` over HTTPS.
- **OAuth / authorization server:** none. CTG Code does not operate an OAuth 2.0 authorization server. There is intentionally no `/.well-known/oauth-authorization-server` (RFC 8414) and no `/.well-known/oauth-protected-resource` (RFC 9728) to discover — and therefore no supported identity types, credential types, or claim/revocation URLs.

In short: **open access, zero credentials.** Treat every resource as anonymously readable.

## How an agent should access this site

Fetch URLs directly over HTTPS. Useful entry points:

- Sitemap: https://ctgcode.com/sitemap-index.xml
- Site summary for LLMs: https://ctgcode.com/llms.txt
- Published agent skills: https://ctgcode.com/.well-known/agent-skills/index.json

## Taking action

The only action the site accepts is submitting a contact lead through its public form — also without authentication. See the `submit-lead` skill:
https://ctgcode.com/.well-known/agent-skills/submit-lead/SKILL.md

Direct channels: contacto@ctgcode.com · WhatsApp +57 305 253 2602
