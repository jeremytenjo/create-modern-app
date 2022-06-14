const story = require('./story.cjs')

const template = {
  type: 'Component Story',
  files: story.componentStoryFiles,
}

module.exports = {
  files: story.componentStoryFiles,
  template,
}
