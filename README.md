# Scoped CSS
So what does "scoped CSS" mean?
```html
<body>
    <section>
      <h1> 
        <small> Is there a <em> good </em> alternative to CSS frameworks? </small> 
        Examining Scoped CSS
      </h1>
      <style class="scoped">
        /* this targets the <small> inside the <section> */
        \& small { 
          display: block;
          font-size: .5em;
          opacity: .5;
        }
        /* this targets the <h1> inside the <section> */
        \& h1 { font-size: 6em; }
      </style>
    </section>
```
It means easier to create + maintain CSS.
```html
    <!-- ... here is another <section> in the document. this one *won't* be affected 
         by the style element we saw earlier. `<style class="scoped">` can only see 
         its exact parent + all its parent's children. --> 
    <section>
      <h2>
        <small> Did you know? </small> 
        Nearly <em> all </em> web frameworks have a version of scoped CSS.
      </h2>
    </section>
</body>
```
  
## Tell me in plain english.
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
  
<br>  
  
## Live CDN link  
```html
<script src="https://cdn.jsdelivr.net/gh/VSADX/scoped-css@main/scoped-css.js" type="module"></script>
```
  
<br>  
  
## Examples
See how Scoped CSS works in practice, how we use it, how you may want to use it!
  
### How to use it.
1. Here's how you use scoped CSS. Add `class="scoped"` to your `<style>` element.
2. Then use `\&` for all the CSS rules that you want to be scoped.
```html
  <header>
    <style class="scoped">
      \& p a { 
        color: blue; 
      }
      \& nav a { 
        color: green; 
      }
    </style>
    <p><a> Drawing Straws Art Studio </a></p>
    <nav>
      <a> Home </a> <a> About </a> <a> Contact </a> <a> Get Hired </a>
    </nav>
  </header>
  <aside>
    <h2> Our Socials </h2>
    <!-- these "nav a" won't be green, since we used Scoped CSS earlier. -->
    <nav>
      <a> Instagram </a> <a> Facebook </a> <a> Twitter </a> <a> YouTube </a>
    </nav> 
  </aside>
```

