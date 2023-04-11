import { inline } from './inline.js' // Import do Export Nomeado Inline
import defaultInline from './inline.js' // Import do Export Default Inline
import { group } from './nonInline.js' // Não Inline
import exportDefault from './inline.js' // Não Inline Export Default

inline()
defaultInline()

group()
exportDefault()