export function generate_scoped_styles() {
    document.querySelectorAll("style.scoped").forEach(style => {
        const parent_el = style.parentElement
        parent_el.id = parent_el.id || "i"+(Math.random() * 1e9 | 0).toString(16)

        style.innerHTML = style.innerHTML.split("\\\&").join("#"+parent_el.id)
    })
}
generate_scoped_styles()
