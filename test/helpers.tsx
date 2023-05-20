import { RemixBrowser } from '@remix-run/react'
import { RenderOptions, render as rtlRender } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

export { axe } from 'jest-axe'
export * from '@testing-library/react'
export { userEvent }

export function render(ui: React.ReactElement, options?: RenderOptions) {
  function RootComponent() {
    return ui
  }

  window.__remixManifest = {
    routes: {
      root: {
        hasAction: false,
        hasCatchBoundary: false,
        hasErrorBoundary: false,
        hasLoader: false,
        id: 'root',
        imports: [],
        module: '',
        path: '',
      },
    },
    entry: { imports: [], module: '' },
    url: '',
    version: '',
  }
  window.__remixRouteModules = { root: { default: RootComponent } }
  window.__remixContext = {
    state: {
      loaderData: undefined,
      actionData: null,
      errors: null,
    },
    future: {
      unstable_cssModules: false,
      unstable_cssSideEffectImports: false,
      unstable_dev: false,
      unstable_postcss: false,
      unstable_tailwind: false,
      unstable_vanillaExtract: false,
      v2_errorBoundary: true,
      v2_meta: true,
      v2_routeConvention: true,
      v2_normalizeFormMethod: true,
    },
  }

  function Wrapper({ children }: { children: React.ReactNode }) {
    return <RemixBrowser>{children}</RemixBrowser>
  }

  const { rerender, ...rest } = rtlRender(ui, { wrapper: Wrapper, ...options })

  return {
    rerender: (ui: React.ReactElement) => {
      const RootComponent = () => ui
      window.__remixRouteModules.root.default = RootComponent
      rerender(ui)
    },
    ...rest,
  }
}
