import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { remark } from 'remark'
import html from 'remark-html'
import matter from 'gray-matter'

export function cn(...input: ClassValue[]) {
  return twMerge(clsx(input))
}

export const rotate = (EL: HTMLElement) => {
  let ang = 0 // All angles are expressed in radians
  let angStart = 0
  let isStart = true

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const angXY = (ev: any) => {
    const bcr = EL.getBoundingClientRect()
    const radius = bcr.width / 2
    const { clientX, clientY } = ev.touches ? ev.touches[0] : ev
    const y = clientY - bcr.top - radius // y from center
    const x = clientX - bcr.left - radius // x from center
    return Math.atan2(y, x)
  }
  const mousedown = (ev: MouseEvent) => {
    isStart = true
    angStart = angXY(ev) - ang
  }

  const mousemove = (ev: MouseEvent) => {
    if (!isStart) return
    ev.preventDefault()
    ang = angXY(ev) - angStart
    EL.style.transform = `rotateZ(${ang}rad)`
  }

  const mouseup = () => {
    isStart = false
  }

  EL.addEventListener('mousedown', mousedown)
  document.addEventListener('mousemove', mousemove)
  // document.addEventListener('mouseup', mouseup)
}

export const renderMDFile = async (fileContents: string) => {
  const matterResult = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return { content: contentHtml, metadata: matterResult.data }
}

export const getPostColorFromCategory = (category: string) => {
  switch (category) {
    case 'Innovation':
      return 'cyan'
    case 'Sustainability':
      return 'lime'
    case 'Security':
      return 'violet'
    default:
      return 'fuchsia'
  }
}
