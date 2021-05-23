// if you are supporting Opera 9 or lower, Internet Explorer 8 or lower, or older Safari version

function generate_scoped_styles(doc) {
    doc = doc || document
    /** @type {HTMLCollection} */
    var styles = doc.getElementsByTagName("style")
    for (var i = 0; i < styles.length; i++) {
        if (styles[i].className != "scoped") continue
        var style = styles[i]
        var parent_el = style.parentElement
        parent_el.id = parent_el.id || "i" + (Math.random() * 1e9 | 0) // .toString(16)
        style.innerHTML = style.innerHTML.split("\\\&").join("#" + parent_el.id)
    }
}
generate_scoped_styles()
