# HydRoMo Website

Static root website for `https://hydromo.dev`.

## Purpose

This site is the official public home for HydRoMo and links to product-specific pages for RockSpin and CleanClip. It is intended to be suitable for Apple Developer organization website verification.

## Files

- `index.html`: HydRoMo landing page
- `support/index.html`: product support index
- `privacy/index.html`: product privacy index
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

