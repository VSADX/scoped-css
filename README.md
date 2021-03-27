# Scoped CSS
🌌 **What is scoped CSS?**  
It's a `<style>` element, inside your HTML file.  
  
🌄 **What does it do?**  
Scoped CSS let's you add CSS to a specific group of elements.  
You can copy, paste, or modify that group of elements - it won't ever 
clash style rules or break! Scoped CSS is safe, but also super fast 
to write or edit in the future.
  
🌆 **How does it work?**  
The JavaScript library will replace `\&` in your CSS using a unique id for the 
parent HTML element of the `<style>` element. The id prevents your CSS rules 
from "bleeding" to other elements on your page.  
You can reuse your elements just by copying the scoped style element (including 
parent element), then pasting it where you want.  
  
## Examples
See how Scoped CSS works in practice, how we use it, how you may want to use it!
  
1. Here's how you use scoped CSS. Add `class="scoped"` to your `<style>` element.
2. Then use `\&` for all the CSS rules that you want to be scoped.
```html
<div>
  <style class="scoped">
    \& {
      background: lightblue;
    }
    \& p {
      color: navy;
    }
  </style>
  <h2> Hello all! </h2>
  <p> Scoped CSS fits some situations really well. </p>
</div>
```
