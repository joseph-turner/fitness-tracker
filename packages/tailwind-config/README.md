# @fitness/tailwind-config

Shared Tailwind CSS configuration for the fitness tracker monorepo.

## Usage

### For Next.js Web App

```js
import webConfig from '@fitness/tailwind-config/web';

export default webConfig;
```

### For React Native Mobile App

```js
import mobileConfig from '@fitness/tailwind-config/mobile';

export default mobileConfig;
```

### Custom Configuration

You can extend the base configuration:

```js
import baseConfig from '@fitness/tailwind-config/base';

export default {
  ...baseConfig,
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme.extend,
      // Your custom theme extensions
    },
  },
};
```
