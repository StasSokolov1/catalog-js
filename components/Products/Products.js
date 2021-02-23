class Products {
    
    render() {
        let htmlCatalog = ''

        CATALOG.forEach(({id, name, price, src}) => {
            htmlCatalog += `
                <li class="products_element">
                    <span class="products_element__name">${name}</span>
                    <img src="${src}" class="products_element__img">
                    <span class="products_element__price">⚡️ ${price.toLocaleString()} UAH</span>
                    <button class="products_element__btn">Добавить в корзину</button>
                </li>            
            `
        })

        const html = `
            <ul class="products_container">
                ${htmlCatalog}
            </ul>
        `

        ROOT_PRODUCTS.innerHTML = html
    }
}

const productsPage = new Products();
productsPage.render()