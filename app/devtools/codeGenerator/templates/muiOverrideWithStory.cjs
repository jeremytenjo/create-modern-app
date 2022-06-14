const muiOverride = require('./muiOverride.cjs')
const story = require('./story.cjs')

const template = {
  type: 'Mui Override with story',
  files: [...muiOverride.files, ...story.componentStoryFiles],
}

module.exports = {
  template,
}
