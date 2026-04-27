# CI/CD Static Site Demo

This is a simple static website for practicing GitHub Actions deployments to an EC2 instance.

## Files

- `index.html` - page structure
- `styles.css` - visual styling and responsive layout
- `script.js` - small browser-side enhancement

## Preview Locally

Open `index.html` in a browser, or run a simple local server:

```bash
python3 -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

## Deployment Idea

A GitHub Actions workflow can copy these files to your EC2 web directory, for example:

```text
/var/www/html
```

Update the release text in `index.html` after each test change to confirm the latest deployment reached your server.
