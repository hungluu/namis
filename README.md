# Namis

A clean, responsive documentation template theme for JSDoc 3, based on [Minami](https://github.com/Nijikokun/minami)

![Namis Screenshot](http://s7.postimg.org/658hspbzd/image.png)

## Uses

- [the Taffy Database library](http://taffydb.com/)
- [Underscore Template library](http://documentcloud.github.com/underscore/#template)
- [Montserrat](http://www.google.com/fonts/specimen/Monsterrat) & Helvetica Neue

## Live examples

- [Honeyjs Document](https://zudd.github.io/honeyjs)

## What's new

- Implements a search engine
- Makes a more themeable template based on Minami, all you need to do is edit the custom.css file
- Uses more attractive jQuery scroll plugin named [NiceScroll](https://github.com/inuyaksa/jquery.nicescroll)
- Improves color scheme and UI

## Install

```bash
$ npm install --save-dev namis
```

## Usage

Clone repository to your designated `jsdoc` template directory, then:

```bash
$ jsdoc entry-file.js -t path/to/namis
```

### Node.js Dependency

In your projects `package.json` file add a generate script:

```json
"script": {
  "generate-docs": "node_modules/.bin/jsdoc --configure .jsdoc.json --verbose"
}
```

In your `.jsdoc.json` file, add a template option.

```json
"opts": {
  "template": "node_modules/mamis"
}
```

### Example JSDoc Config

Example can be found on root folder of this package named jsdoc.json:

```json
{
    "tags": {
        "allowUnknownTags": true,
        "dictionaries": ["jsdoc", "closure"]
    },
    "source": {
        "include": [".", "README.md", "package.json"],
        "includePattern": "test.js$",
        "excludePattern": "docs"
    },
    "plugins": [
        "plugins/markdown"
    ],
    "templates": {
        "cleverLinks": true,
        "monospaceLinks": true,
        "systemName": "remoteFileExplorer",
        "copyright": "2015",
        "linenums": true,
        "collapseSymbols": true
    },
    "opts": {
        "destination": "./docs/",
        "encoding": "utf8",
        "private": false,
        "recurse": true,
        "template": "./node_modules/namis"
    }
}
```

## License

Licensed under the Apache2 license.

## Contribution

Here is some simple steps

1. Fork, then clone the repo at git@github.com:your-username/namis.git

2. Push to your fork and submit a [pull request](https://github.com/zudd/namis/compare/)

3. Write a good commit message


Enjoy.