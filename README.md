# HydRoMo Website

Static root website for `https://hydromo.dev`.

## Purpose

This site is the official public home for HydRoMo and links to product-specific pages for Markdown Ready, RockSpin, and CleanClip. It is intended to be suitable for Apple Developer organization website verification.

## Files

- `index.html`: HydRoMo landing page
- `support/index.html`: product support index
- `privacy/index.html`: product privacy index
- `markdown-ready/`: Markdown Ready product, support, and privacy pages for App Store Connect
- `assets/hydromo-logo.svg`: HydRoMo logo asset
- `CNAME`: GitHub Pages custom domain (`hydromo.dev`)

## GitHub Pages DNS

Keep the existing CleanClip record unchanged:

```text
CNAME cleanclip hydrojwh.github.io
```

Add apex records for `hydromo.dev`:

```text
A @ 185.199.108.153
A @ 185.199.109.153
A @ 185.199.110.153
A @ 185.199.111.153
```

Optional:

```text
CNAME www hydrojwh.github.io
```

Do not add wildcard DNS records such as `*.hydromo.dev`.

## Verification

```bash
dig +short hydromo.dev A
dig +short cleanclip.hydromo.dev CNAME
curl -I https://hydromo.dev
curl -I https://cleanclip.hydromo.dev
```

Expected production state:

- `https://hydromo.dev/` returns `HTTP/2 200`
- `https://www.hydromo.dev/` redirects to `https://hydromo.dev/`
- `https://cleanclip.hydromo.dev/` remains available and independent
- GitHub Pages reports `cname: hydromo.dev`, `status: built`, and `https_enforced: true`

## Deployment Notes

### 2026-06-10: Initial HydRoMo root site

Created this static GitHub Pages site as the public HydRoMo organization website for Apple Developer organization website verification.

Final public URL:

```text
https://hydromo.dev
```

The DNS setup uses the GitHub Pages apex A records for `hydromo.dev` and keeps the existing CleanClip subdomain unchanged:

```text
A @ 185.199.108.153
A @ 185.199.109.153
A @ 185.199.110.153
A @ 185.199.111.153
CNAME www hydrojwh.github.io
CNAME cleanclip hydrojwh.github.io
```

GitHub Pages HTTPS provisioning initially stalled: DNS and HTTP serving were correct, but HTTPS served GitHub's fallback `*.github.io` certificate and the Pages API returned `The certificate does not exist yet`. The fix was to remove the `hydromo.dev` custom domain from the HydRoMoSite Pages settings, re-add `hydromo.dev`, trigger a Pages build, and then enable HTTPS enforcement after the certificate was issued.

Final TLS verification showed a Let's Encrypt certificate with both names:

```text
DNS:hydromo.dev
DNS:www.hydromo.dev
```

CleanClip was checked before and after this change and continued to return `HTTP 200` at `https://cleanclip.hydromo.dev/`.
