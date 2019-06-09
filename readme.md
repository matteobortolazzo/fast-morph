# Fast Morph

**A Morphing UI web component built with StencilJS**

Inspired by brunnolou's [react-morph](https://github.com/brunnolou/react-morph)

![Sign-In example](https://raw.githubusercontent.com/matteobortolazzo/fast-morph/master/gifs/motion-ui-sign-in.gif)


## Install
```
npm i @matteobortolazzo/fast-morph --save
```

## Usage

**Pure HTML**
```
<script src="https://unpkg.com/@matteobortolazzo/fast-morph@1.1.0/dist/fast-morph.js"></script> 
```

**Frameworks**

Please visit [https://stenciljs.com/docs/overview](https://stenciljs.com/docs/overview)


## Example

1. Create two states (HTML)
2. Wrap both in one fast-morph component (using slot="state-0" and slot="state-1")
3. Label the elements you want to morph with itemprop="fm-\<something\>"
4. Label the elements you want to use to change state with itemprop="fm-activator"

```html
<fast-morph>
    <div slot="state-0">
      <div itemprop="fm-activator" class="state-0-div">
        <div itemprop="fm-sign-in-back" class="sign-in-back"></div>
        <div itemprop="fm-sign-in">Sign In</div>
      </div>
    </div>
    <div slot="state-1">
      <div class="form-container">
        <div class="form-back" itemprop="fm-sign-in-back"></div>
        <form>
          <div class="label">Email</div>
          <input />
          <div class="label password">Password</div>
          <input />
          <br />
          <div itemprop="fm-sign-in" class="sign-in">Sign In</div>
          <div class="cancel" itemprop="fm-activator">Cancel</div>
        </form>
      </div>
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
