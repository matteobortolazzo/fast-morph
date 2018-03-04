# Fast Morph

**A Morphing UI web component built with StencilJS**

Inspired by brunnolou's [react-morph](https://github.com/brunnolou/react-morph)

![Sign-In example](https://raw.githubusercontent.com/matteobortolazzo/fast-morph/master/gifs/motion-ui-sign-in.gif)


## Install
```
npm i @matteobortolazzo/fast-morph --save
```

**Stencil project**
```
// stencil.config.js
exports.config = {
  ...
  collections: [
    { name: '@matteobortolazzo/fast-morph' }
  ]
}
```

**Pure HTML**
```
<script src="https://unpkg.com/@matteobortolazzo/fast-morph@1.0.1/dist/fast-morph.js"></script> 
```

**Angular / React**

Please visit [https://stenciljs.com/docs/framework-integration](https://stenciljs.com/docs/framework-integration)


## Example

1. Create two states (HTML)
2. Wrap both in one fast-morph component (using slot="state-0" and slot="state-1")
3. Label the elements you want to morph with itemprop="fm-\<something\>"
4. Label the elements you want to use to change state with itemprop="fm-activator"

```html
<fast-morph elements={['title', 'description']}>
  <div slot="state-0">
    <a itemprop="fm-activator">
      <strong itemprop="fm-title">Fast Morph</strong>
      <br />
      <p itemprop="fm-description">Something to write!</p>
    </a>
  </div>
  <div slot="state-1">
    <h1 itemprop="fm-title">Fast Morph</h1>
    <br />
    <h2 itemprop="fm-description">Something to write!</h2>
    <a itemprop="fm-activator">Back</a>
  </div>
</fast-morph>
```

## Keep in mind
(this section is from [**brunnolou**'s react-morph](https://github.com/brunnolou/react-morph))

* You need to remove extra whitespace, to match the real element's width, the solution is display: inline-block or a wrapping element to the content.
* Margins are always tricky because they create extra white space. You can either wrap the content in another element and animate it or be sure to match both the margins in both states.
* Sometimes it's necessary to create a placeholder element for the transition to avoid child distortion.
* List items could be miscalculated; a simple solution is: list-style: none;.
* Sometimes you need extra layers instead of nested children.
* Avoid animating both the parent and children to avoid unpredicted results.

![Card example](https://raw.githubusercontent.com/matteobortolazzo/fast-morph/master/gifs/motion-ui-card.gif) 
