#!/usr/bin/env node

import { exec } from 'child_process';
import { promisify } from 'util';
import { existsSync } from 'fs';
import { resolve } from 'path';

const execAsync = promisify(exec);

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

async function checkLinks() {
  console.log(`${colors.cyan}🔍 Starting link validation...${colors.reset}\n`);

  // Check if dist directory exists
  const distPath = resolve(process.cwd(), 'dist');
  if (!existsSync(distPath)) {
    console.log(`${colors.yellow}⚠️  Build directory not found. Building site first...${colors.reset}`);
    try {
      await execAsync('npm run build');
      console.log(`${colors.green}✅ Build completed successfully${colors.reset}\n`);
    } catch (error) {
      console.error(`${colors.red}❌ Build failed:${colors.reset}`, error.message);
      process.exit(1);
    }
  }

  console.log(`${colors.blue}🔗 Checking links in the built site...${colors.reset}`);
  console.log(`${colors.yellow}Note: This may take a few minutes...${colors.reset}\n`);

  const skipPatterns = [
    'github.com/docusign/1fe-docs/pull/new',
    'github.com/docusign/1fe/discussions',
    'github.com/docusign/1fe/issues',
    'linkedin.com',
    'twitter.com',
    'localhost',
    '127.0.0.1'
  ];

  const skipArgs = skipPatterns.map(pattern => `--skip "${pattern}"`).join(' ');

  try {
    const { stdout, stderr } = await execAsync(
      `npx linkinator ./dist --recurse --silent ${skipArgs}`,
      { maxBuffer: 1024 * 1024 * 10 } // 10MB buffer
    );

    if (stdout) {
      console.log(stdout);
    }
    if (stderr) {
      console.error(stderr);
    }

    console.log(`\n${colors.green}✅ All links are valid!${colors.reset}`);
  } catch (error) {
    console.error(`\n${colors.red}❌ Broken links found:${colors.reset}\n`);
    
    if (error.stdout) {
      // Parse and display broken links in a more readable format
      const lines = error.stdout.split('\n');
      const brokenLinks = [];
      
      lines.forEach(line => {
        if (line.includes('[') && line.includes(']') && line.includes('Status:')) {
          brokenLinks.push(line);
        }
      });

      if (brokenLinks.length > 0) {
        console.log(`${colors.red}Found ${brokenLinks.length} broken link(s):${colors.reset}\n`);
        brokenLinks.forEach(link => {
          console.log(`  ${colors.yellow}•${colors.reset} ${link.trim()}`);
        });
      } else {
        console.log(error.stdout);
      }
    }

    console.log(`\n${colors.yellow}💡 Tips:${colors.reset}`);
    console.log('  • Fix broken internal links before committing');
    console.log('  • External links may be temporarily down');
    console.log('  • Use relative paths for internal documentation links');
    console.log('  • Test links locally with: npm run check:links\n');

    process.exit(1);
  }
}

// Run the link checker
checkLinks().catch(error => {
  console.error(`${colors.red}Unexpected error:${colors.reset}`, error);
  process.exit(1);
});