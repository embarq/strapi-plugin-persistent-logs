# Strapi Plugin Logs

## Description

This is a plugin for Strapi, a headless CMS, that provides logging functionality. It allows you to keep track of various events and actions in your Strapi application, helping you monitor its performance and troubleshoot issues.

## Features

- Detailed logging: Get comprehensive details about each event, including the time it occurred
- Easy-to-read format: Logs are formatted in a way that's easy to read and understand.

## Installation

1. Navigate to your Strapi project directory.
2. Install the plugin using npm:

```bash
npm install strapi-plugin-persistent-logs
```

3. Include the plugin in your Strapi project:

```js
// config/plugins.js
module.exports = ({ env }) => ({
  "persistent-logs": {
    enabled: true,
  }
});
```
```
