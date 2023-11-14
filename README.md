# React `onMouseLeave` Bug Reproduction

This is to demonstrate a weird bug in React. The `onMouseLeave` events don't seem to behave correctly (or at least not as expected).

# Expected Behavior

This app shows two lists (all options & active options).

When you mouse over an option in the _"All Options"_ list, it should highlight **same** option in the _"Active Options"_ list.

When you mouse out of the option, it should remove the highlight from **all** active options.

These events are hooked up as "low" in the DOM as possible, on the `<li>` tags in the list.

> Note: A Preact example with almost the same code behaves as expected & is included at `./preact-hover-test.html`. Here's what it looks like:
> ![preact_version.gif](https://github.com/toastdriven/react-hover-test/blob/main/preact_version.gif?raw=true)

# Actual Behavior

`onMouseEnter` seems to behave correctly, and correctly adds the option to the active options. The highlight then takes effect.

However, when the mouse **leaves** the `<li>`, the `onMouseLeave` doesn't seem to trigger, leaving the highlight in place.

It's only upon the mouse leaving the _parent_ tag that the `onMouseLeave` seems to trigger. In this case, it's the `<ul>` tag, but I experienced the same bug when I just used `<div>` tags for everything.

Here's a gif of it in action:

![react_version.gif](https://github.com/toastdriven/react-hover-test/blob/main/react_version.gif?raw=true)
