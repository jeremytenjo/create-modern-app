import figlet from 'figlet'
import gradient from 'gradient-string'

// colors brought in from vscode poimandres theme
const poimandresTheme = {
  blue: '#add7ff',
  cyan: '#89ddff',
  green: '#5de4c7',
  magenta: '#fae4fc',
  red: '#d0679d',
  yellow: '#fffac2',
}

export default function renderTitle({ title }) {
  const text = figlet.textSync(title, { font: 'Small' })
  const t3Gradient = gradient(Object.values(poimandresTheme))
  console.log(t3Gradient.multiline(text))
}
