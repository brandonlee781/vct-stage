import React from 'react'

export const TanStackRouterDevtools = import.meta.env.PROD
  ? (): null => null // Render nothing in production
  : React.lazy(() =>
      // Lazy load in development
      import('@tanstack/router-devtools').then(response => ({
        default: response.TanStackRouterDevtools,
        // For Embedded Mode
        // default: res.TanStackRouterDevtoolsPanel
      }))
    )
