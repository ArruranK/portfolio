exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
                test: /static-entry.js/,
                use: loaders.null(),
            },
          ],
        },
      })
    }
  }