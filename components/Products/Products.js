class Products {
    
    constructor() {
        this.classNameActive = 'products_element__btn_active'
        this.labelAdd = 'Добавить в корзину'
        this.labelRemove = 'Удалить из корзины'
    }

    handleSetLocationStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id)

        if (pushProduct) {
            element.classList.add(`${this.classNameActive}`);
            element.innerHTML = this.labelRemove
        } else {
            element.classList.remove(`${this.classNameActive}`);
            element.innerHTML = this.labelAdd
        }

        headerPage.render(products.length)
    }


    render() {
        const productsStore = localStorageUtil.getProducts()
        let htmlCatalog = ''

        CATALOG.forEach(({id, name, price, src}) => {
            let activeClass = ''
            let activeText = ''

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd
            } else {
                activeText = this.labelRemove
                activeClass = ' ' + this.classNameActive
            }

            htmlCatalog += `
                <li class="products_element">
                    <span class="products_element__name">${name}</span>
                    <img src="${src}" class="products_element__img">
                    <span class="products_element__price">⚡️ ${price.toLocaleString()} UAH</span>
                    <button class="products_element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">
                        ${activeText}
                    </button>
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