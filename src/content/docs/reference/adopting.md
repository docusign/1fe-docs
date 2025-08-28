---
title: Adopting 1fe
description: A step-by-step document on how to kickstart your own 1fe setup
sidebar:
  order: 1
---

The typical setup for hosting your own instance of 1fe requires the hosting and configuration of an isomoprhic NodeJS web application. Here is a sample consumer application that runs the 1fe Demo App, feel free to copy/clone/fork.

### Requirements

1. A Hosted isomorphic NodeJS App. 1fe App demo source is available [here](https://github.com/docusign/1fe-starter-app).
2. A CDN provider (optional, but **highly** recommended).
3. CICD Pipelines that run the [CLI Build command](/reference/1fe-config-reference/#-cli-usage) and Deploy assets to a publicly available read-only storage (S3 or Netstorage or Blob). Samples [here](https://github.com/docusign/1fe-ci-cd).
4. A Source Control platform used across your company. Eg. [GitHub](https://github.com), [GitLab](https://gitlab.com), [BitBucket](https://bitbucket.org), [Bazaar](https://bazaar-vcs.org), etc.

### Coming Soon

We're working hard to bring you comprehensive guidance on adopting 1fe - stay tuned!
