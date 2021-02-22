class Products {
    
    render() {
        let htmlCatalog = ''

        CATALOG.forEach(({id, name, price, src}) => {
            htmlCatalog += `
                <li>
                    <span>${name}</span>
                    <img src="${src}">
                    <span>${price}</span>
                    <button>Добавить в корзину</button>
                </li>            
            `
        })

        const html = `
            <ul>
                ${htmlCatalog}
            </ul>
        `

        ROOT_PRODUCTS.innerHTML = html
    }
}

const productsPage = new Products();
productsPage.render()