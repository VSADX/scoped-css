export function generate_scoped_styles(doc = document, use_class_name = false) {
    doc.querySelectorAll("style.scoped").forEach(style => {
        const parent_el = style.parentElement
        const rand = (Math.random() * 1e9 | 0).toString(16)

        if(use_class_name) {
            var id = `c${rand}`
            parent_el.classList.add(id)
            id = `.${id}`
        }
        else {        
            parent_el.id = parent_el.id || `i${rand}`
            var id = `#${parent_el.id}`
        }

        style.innerHTML = style.innerHTML.split("\\\&").join(id)
    })
}
generate_scoped_styles()
