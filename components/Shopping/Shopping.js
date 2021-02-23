class Shopping {

    handleClear() {
        ROOT_SHOPPING.innerHTML = ''
    }

    render() {
        const productsStore = localStorageUtil.getProducts()
        let htmlCatalog = ''
        let sumCatalog = 0

        CATALOG.forEach(({id, name, price}) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping_element__name">⚡️ ${name}</td>
                        <td class="shopping_element__price">${price.toLocaleString()} UAH</td>
                    </tr>
                `
                sumCatalog += price
            }
        });


        const html = `
            <div class="shopping_container">
                <div class="shopping__close" onclick="shoppingPage.handleClear();"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping_element__name">💥 Сумма:</td>
                        <td class="shopping_element__price">${sumCatalog.toLocaleString()} UAH</td>
                    </tr>
                </table>

            </div>
        `
        ROOT_SHOPPING.innerHTML = html
    }
}

const shoppingPage = new Shopping()