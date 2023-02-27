// TODO: Insert stylelint:report when it's working with emotion

module.exports = {
  hooks: {
    'pre-push': 'npm-run-all eslint:report prettier:report typescript:report'
  }
};
