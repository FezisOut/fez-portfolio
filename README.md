
# Fez — Software Developer (Website)

This is a minimal single-page portfolio site for Fez. It includes a theme toggle, animations, and a project gallery.

## To preview locally
- Open `index.html` in a browser (for quick preview).
- Or run a local static server: `python -m http.server 8000` then visit http://localhost:8000

## Replace assets
Put your project screenshots in the `assets/` folder and update `index.html` if needed.

## Deploy options (short)
- **GitHub Pages**: push repo to GitHub, enable Pages in repository Settings -> Pages -> Source: `main` branch. (Add a `.nojekyll` file if needed to avoid Jekyll processing.) See https://docs.github.com/en/pages/getting-started-with-github-pages/. 
- **Netlify**: Create a Netlify site and connect to the GitHub repository or drag-and-drop the site ZIP. See https://docs.netlify.com/deploy/create-deploys/.
- **Vercel**: Connect your GitHub repo to Vercel and import the project. Vercel will auto-deploy on each push. See https://vercel.com/docs/deployments.

