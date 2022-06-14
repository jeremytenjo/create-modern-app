const story = require('./story.cjs')

const template = {
  type: 'Function Story',
  files: story.functionStoryFiles,
}

module.exports = {
  files: story.functionStoryFiles,
  template,
}
