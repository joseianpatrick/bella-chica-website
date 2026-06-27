# Bella Chica Beauty Studio – Solano

A single-page website for Bella Chica Beauty Studio (Solano, Nueva Vizcaya).

## Structure

```
bella-chica-website/
├── index.html        # Markup
├── css/style.css     # All styles (pink theme)
├── js/main.js        # Service menu data + rendering
└── assets/           # Drop real images here (e.g. studio photo, logo)
```

## Publish to GitHub Pages

1. Create a new GitHub repository.
2. Upload the contents of this `bella-chica-website` folder (so `index.html` is at the repo root).
3. In **Settings → Pages**, set the source branch to `main` and folder to `/ (root)`.
4. Your site goes live at `https://<username>.github.io/<repo-name>/`.

## Edit later

- **Prices / services:** edit the `SERVICE_CATEGORIES` array in `js/main.js`.
- **Contact email / phone / Facebook link:** edit the contact section in `index.html`
  (placeholder email is `hello@bellachica.com`, Facebook link points to `facebook.com`).
- **Studio photo:** replace the placeholder SVG in `index.html` (`.about-media`) with
  `<img src="assets/your-photo.jpg" class="media-svg" alt="Bella Chica studio">`.
- **Colors:** edit the CSS variables in `:root` at the top of `css/style.css`.

Fonts (Cormorant Garamond, Jost) load from Google Fonts and require an internet connection.
