# Development Environment Setup

Your Strapi application is configured to run in **development mode** on `strapi.dmazing.studio`. This allows you to:

✅ **Add and modify collections** through the Content-Type Builder  
✅ **Hot reloading** when you make changes  
✅ **Debug logging** for development  
✅ **Full admin panel access**  

## How to Deploy

1. **Push to main branch** to trigger the development deployment:
   ```bash
   git add .
   git commit -m "Add new feature"
   git push origin main
   ```

2. **Manual deployment** via GitHub Actions:
   - Go to your repository on GitHub
   - Click "Actions" tab
   - Click "🔧 Deploy Strapi in Development Mode"
   - Click "Run workflow"

## Adding Collections

1. Go to `https://strapi.dmazing.studio/admin`
2. Login to your admin panel
3. Navigate to "Content-Type Builder" in the sidebar
4. Click "Create new collection type"
5. Add your fields and save
6. Your new collection will be immediately available!

## Environment

- **Environment**: Development (`NODE_ENV=development`)
- **URL**: https://strapi.dmazing.studio
- **Admin Panel**: https://strapi.dmazing.studio/admin
- **Content-Type Builder**: ✅ Enabled
- **Hot Reloading**: ✅ Enabled

## Important Notes

- This is a **development environment** - collections can be added/modified
- Changes to collections are automatically saved to your codebase
- File uploads are stored locally on the server
- Database is SQLite (stored in `.tmp/data.db`)

## Troubleshooting

If you can't access the Content-Type Builder:
1. Check that `NODE_ENV=development` in your server's `.env` file
2. Restart the application: the deployment will handle this automatically
3. Check the GitHub Actions logs for any errors 