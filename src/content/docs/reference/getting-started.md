---
title: Getting Started
description: A guide to quick-start 1fe consumption.
---

```typescript
// consumer-server.ts
import create1feServer from "@1fe/ecosystem/server";

const options = {
  mode: 'preproduction',
  environment: 'integration',
  orgName: 'MagicBox',
  configManagement: {
    url: `https://cdn.jsdelivr.net/gh/myorg/cdn/common-configs/integration.json`,
    refreshMs: 30 * 1000
  },
  shellBundleUrl: 'localhost:3000/bundle.js',
  server: {
    playground: true,
    importMapOverrides: {
      enableUI: true,
      cdnURL: ''
    },
    knownRoutes: ['/api', '/sw.js'],
  },
};

const oneFEServer = create1feServer(options);

oneFEServer.listen(3001, () => {
    console.log(`Server listening at http://localhost:3001`);
})
```

```typescript
import renderMagicBoxShell, { baselineUtils } from '@1fe/ecosystem/shell';

const setup = () => {
    const options = {
        utils: {
            ...baselineUtils,
            logger: {
                log: (data) => console.log(data),
                warn: (data) => console.warn(data),
                error: (data) => console.error(data)
            }
        },
        auth: {
            isAuthedCallback: () => {
                return !!Cookies.get('is_authenticated');
            },
            onUnauthedCallback: () => {
                window.location.href = 'http://localhost:3001/logout';
            }
        }
    }

    renderMagicBoxShell(options);
}();

```