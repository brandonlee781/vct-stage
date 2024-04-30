import '@/App.css'
import { FunctionComponent } from '@/lib/types'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

type AppProps = { router: ReturnType<typeof createRouter> }

const App = ({ router }: AppProps): FunctionComponent => {
  return (
    <>
      <RouterProvider router={router} basepath="/vct-stage" />
      <TanStackRouterDevtools
				router={router}
				initialIsOpen={false}
				position="bottom-right"
			/>
    </>
  )
}

export default App