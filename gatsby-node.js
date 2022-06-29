exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /miniraf.es.js/,
              use: loaders.null(),
            },
            {
                test: /static-entry.js/,
                use: loaders.null(),
            },
            {
                test: /utils.js/,
                use: loaders.null(),
            },
          ],
        },
      })
    }
  }