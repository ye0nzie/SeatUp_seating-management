//template 

const ComponentLoader = {
    async load(selector, file) {
        try {
            const res = await fetch(file);
            const html = await res.text();
            document.getElementById(selector).innerHTML = html;
        } catch (err) {
            console.error(`Gagal load ${file}:`, err);
        }
    },

    init() {
        this.load("header", "header.html");
        this.load("footer", "footer.html");
    }
};

ComponentLoader.init();