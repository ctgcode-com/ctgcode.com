---
name: submit-lead
description: Submit a lead (name, email and project message) to CTG Code to request a quote or start a project conversation. Use when the user wants to contact CTG Code, ask for a "cotización"/quote, describe a project, or hire their web, software or automation services.
---

# Submit a lead to CTG Code

CTG Code (https://ctgcode.com) is a software studio based in Cartagena,
Colombia, offering custom software development, high-performance websites, and
automations. This skill lets you submit a lead on the user's behalf through the
site's public contact form.

## When to use

Use this skill when the user wants to reach CTG Code — for example to request a
quote ("cotización"), describe a project, or hire web/software development or
automation services.

## How to submit

Send an HTTP POST request to the Formspree endpoint that backs the contact form.

- **Endpoint:** `https://formspree.io/f/xnjeaorj`
- **Method:** `POST`
- **Content-Type:** `application/json` (or `application/x-www-form-urlencoded`)
- **Accept:** `application/json` — so the endpoint returns JSON instead of an HTML redirect.

### Fields

| Field     | Required | Description                                             |
| --------- | -------- | ------------------------------------------------------- |
| `name`    | yes      | Full name of the person or company sending the lead.    |
| `email`   | yes      | A valid reply-to email address.                         |
| `message` | yes      | The project description, request, or message.           |

### Example (JSON)

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "I need a high-performance corporate website built with Astro. Please send a quote."
}
```

### Example (curl)

```bash
curl -X POST https://formspree.io/f/xnjeaorj \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"name":"Jane Doe","email":"jane@example.com","message":"..."}'
```

A successful submission returns HTTP `200` with a JSON body `{"ok": true}`.

## Consent

Submitting a lead sends a message on the user's behalf. Always confirm the exact
`name`, `email`, and `message` with the user first, and only submit when they
explicitly ask to contact CTG Code.

## Direct alternatives

The user can also reach CTG Code directly:

- WhatsApp: +57 305 253 2602
- Email: contacto@ctgcode.com
