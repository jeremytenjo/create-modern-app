const component = require('./component.cjs')
const story = require('./story.cjs')

const template = {
  type: 'Component with story',
  files: [...component.files, ...story.componentStoryFiles],
}

module.exports = {
  template,
}
