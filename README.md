# Frequently Bought Together module for Magento PWA Studio

This module acts as an add-on for [Mageplaza's Frequently Bought Together extension](https://www.mageplaza.com/magento-2-frequently-bought-together/) to make it work with Magento PWA Studio.

End result: https://fbt.pwa-commerce.com/monitor.html

## Requirements

- Magento version 2.4.* or >= 2.3.5
- Got [Mageplaza Frequently Bought Together extension](https://www.mageplaza.com/magento-2-frequently-bought-together/) and [Frequently Bought Together GraphQL](https://github.com/mageplaza/magento-2-frequently-bought-together-graphql) installed

## Installation

### 1. Init project
```
  git clone https://github.com/Simicart/simi-studio --branch release/4.0.0
  cd simi-studio
```

### 2. Start the project

From the root directory of the project you created above, clone the repository:

```
  git clone https://github.com/Simicart/fbt-module-pwa-studio ./@simicart/fbt
```

### 3. Modify .env

Change the .env MAGENTO_BACKEND_URL with your Magento site URL, or use our demo URL:

```
  MAGENTO_BACKEND_URL=https://mpmed.pwa-commerce.com/
```
### 4. Modify package.json

Modify the dependencies of your project to add extension.

```
  "dependencies": {
    ...
    "react-icons": "^4.2.0",
    "@simicart/fbt": "link:./@simicart/fbt"
  },
```

### 5. Install and Start Project

```
  yarn install && yarn watch
```

## Contribution

[SimiCart Team](https://www.simicart.com/pwa.html/) & [Mageplaza Team](https://www.mageplaza.com/)
