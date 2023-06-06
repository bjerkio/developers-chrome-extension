![image](https://github.com/bjerkio/chrome-extension/assets/3726815/ebc97ca6-550a-4b9e-a871-af2c8b60d19a)

[Bjerk] believes we can improve our lives by changing how we think, learn,
communicate and work, and currently, we do that by creating digital products. A
critical factor in this is user experience, which is hard. To improve the
experience, we sometimes need to experiment and show a subset of features and
communicate with our users, stakeholders, and our team.

Using a [Chrome Extension][chrome-ext] – we can show features for a selection of
users, communicate about changes, and, most of all, create a better experience
for everyone.

[chrome-ext]: https://developer.chrome.com/docs/extensions/
[bjerk]: https://bjerk.io

## How to use it

Right now, we are [dogfooding] the application internally at Bjerk, and we only
support showing features. We hope to release it to a larger group soon! If you
still want to try it out, you can download the ZIP for our latest release and
run it using development mode in Chrome.

[🚀 Install the extension](https://chrome.google.com/webstore/detail/pdnphclnmjimapfnmpliiilihgkmnmkc)

**Note**: Currently, only Bjerk employees can use the link above.

[dogfooding]: https://www.nytimes.com/2022/11/14/business/dogfooding.html

## Contributing

We are happy to receive any contributions to this project. If you want to
contribute, please read our [contributing guidelines](CONTRIBUTING.md).

## Development

This project is built using [React](https://reactjs.org/) and
[TypeScript](https://www.typescriptlang.org/). We use
[PNPM](https://pnpm.js.org/) as our package manager.

### Getting started

1. Clone the repository
2. Run `pnpm install`
3. Run `pnpm dev`
4. Go to [`chrome://extensions/`](chrome://extensions/) in Chrome
5. Enable developer mode
6. Click `Load unpacked` and select the `dist` folder in this repository

The extension should now be installed and you should be able to see it in your
extensions list. The application also hot reloads when you make changes to the
code.

## License

This project is licensed under the [Apache 2.0 License](LICENSE).
