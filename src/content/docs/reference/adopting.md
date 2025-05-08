---
title: Adopting 1FE
description: A step-by-step document on how to kickstart your own 1FE setup
---

The typical setup for hosting your own instance of 1FE requires the hosting and configuration of an isomoprhic NodeJS web application. Here is a sample consumer application that runs the 1FE Demo App, feel free to copy/clone/fork.


### Requirements

1. A Hosted isomorphic NodeJS App. 1FE App demo source is available [here]().
2. A CDN provider (optional, but **highly** recommended).
3. CICD Pipelines that run the [CLI Build command]() and Deploy assets to a publicly available read-only storage (S3 or Netstorage or Blob). Samples [here]().
4. A Source Control platform used across your company. Eg. [GitHub](), [GitLab](), [BitBucket](), [Bazaar](), etc.



