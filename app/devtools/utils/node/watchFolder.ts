import nodeWatch from 'node-watch'

/**
 * [Docs](https://github.com/yuanchuan/node-watch)
 * 
 * @example
 *  const folderToWatch = path.join(process.cwd(), 'src')
    watchFolder({
      folderToWatch,
      onChange: runPlaywrightTests,
    })
 */
export default function watchFolder({ folderToWatch, onChange }) {
  nodeWatch(folderToWatch, { recursive: true }, onChange)
}
