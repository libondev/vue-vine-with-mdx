import { MDXProvider } from '@mdx-js/vue'
import Example from './components/Example.mdx'

const components = {}

export default function App() {
  return vine`
    <MDXProvider :components="components">
      <Example />
    </MDXProvider>
  `
}
