## hide-youtube-shorts

Firefox extension to hide shorts on the YouTube subscriptions page.

### Motivation

I don't watch shorts and they took up a lot of space on the subscriptions page. So I got rid of them.

### How does it work?

When you scroll the page and stop, after a delay all the shorts on the subscriptions page will be hidden.

### How to use it?

Currently the extension is a temporary extension. In order to use it at it's current state, you can clone the repo and follow these steps:

1. Open Firefox and goto `about:debugging`
2. Select the `This Firefox` tab
3. Add the extension by clicking on `Load Temporary Add-on`
4. Find the location you cloned the repo and select the `main.js` file

### Customization

There isn't really much to customize other than the delay if you like. You can do that by going to `main.js` and changing the `DELAY` variable at the top of file.
