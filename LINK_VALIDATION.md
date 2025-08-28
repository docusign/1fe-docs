# Link Validation Setup

This repository includes automated link validation to ensure all documentation links remain functional.

## 🔍 Features

- **TypeScript checking** - Validates TypeScript types in the codebase
- **Internal link validation** - Checks all internal documentation links
- **External link monitoring** - Optionally checks external links
- **Pre-push hooks** - Validates links before pushing to remote
- **CI/CD integration** - Automated checks on pull requests and scheduled runs

## 📋 Available Commands

### Check TypeScript
```bash
npm run check
```
Runs TypeScript type checking using Astro's built-in checker.

### Check Links
```bash
npm run check:links
```
Builds the site and validates all internal links. Skips certain external sites that may have rate limiting.

### Check All Links (Including External)
```bash
npm run check:links:external
```
Checks all links including external ones. Use sparingly as external sites may rate-limit or block automated checks.

### Run All Validations
```bash
npm run validate
```
Runs both TypeScript checking and link validation.

## 🪝 Git Hooks

### Pre-push Hook
Automatically runs before `git push` to:
1. Check TypeScript types
2. Validate all internal links
3. Warn about any broken links

If critical issues are found, the push will be blocked until fixed.

## 🤖 CI/CD Integration

### GitHub Actions Workflow
The `.github/workflows/check-links.yml` workflow:

- **On Pull Requests**: Checks TypeScript and internal links
- **On Push to Main**: Validates all internal links
- **Weekly Schedule**: Full check including external links (Mondays at 9am UTC)
- **Manual Trigger**: Can be run manually from GitHub Actions tab

## 🛠️ Configuration

### Skipped Domains
The following domains are skipped by default to avoid rate limiting:
- `linkedin.com`
- `twitter.com`
- GitHub pull request creation URLs
- `localhost` and `127.0.0.1`

### Adding More Exclusions
Edit the skip patterns in:
1. `scripts/check-links.js` - For local checks
2. `.github/workflows/check-links.yml` - For CI/CD checks

## 🚀 Quick Start

1. **Install dependencies** (already done if you ran `npm install`):
   ```bash
   npm install
   ```

2. **Run a link check**:
   ```bash
   npm run check:links
   ```

3. **Before pushing code**:
   The pre-push hook will automatically validate links. To bypass (not recommended):
   ```bash
   git push --no-verify
   ```

## 📝 Best Practices

1. **Use relative paths** for internal documentation links
2. **Avoid hardcoding localhost** URLs in documentation
3. **Test locally** before pushing: `npm run validate`
4. **Fix broken internal links immediately** - they break user experience
5. **Monitor external links** but don't block on temporary outages

## 🔧 Troubleshooting

### Build Required
If you see "Build directory not found", the tool will automatically build the site first.

### False Positives
Some external sites may block automated checks. These can be added to the skip list.

### Slow Checks
Link checking requires building the site first. This is normal and ensures we check the actual deployed content.

## 📚 Dependencies

- **linkinator** - Core link checking functionality
- **husky** - Git hooks management
- **@astrojs/check** - TypeScript checking for Astro