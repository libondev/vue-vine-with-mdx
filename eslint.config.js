import antfu from '@antfu/eslint-config'
import VueVine from '@vue-vine/eslint-config'

export default antfu(
  {
    ignores: ['*.d.ts', '.DS_Store'],
    rules: {
    },
  },
  VueVine(),
)
