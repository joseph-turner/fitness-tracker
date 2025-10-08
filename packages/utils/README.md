# @fitness/utils

Shared utility functions for the fitness tracker application.

## Usage

Import utilities in your application:

```typescript
import { formatDate, formatDuration, validateEmail } from '@fitness/utils';
```

## Available Functions

- `formatDate(date: Date): string` - Format date to YYYY-MM-DD
- `formatDuration(minutes: number): string` - Format duration in minutes to human-readable format
- `validateEmail(email: string): boolean` - Validate email format
