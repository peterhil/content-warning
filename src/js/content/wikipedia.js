import { sortElementChildren } from '@js/lib/sorting'

export function main () {
    console.log('[CW] wikipedia.js on', document.location.href)

    const id = 'mw-panel-toc-list'
    const container = document.getElementById(id)

    sortElementChildren(container)
}
