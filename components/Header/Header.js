class Header {

    handlerOpenShoppingPage() {
        shoppingPage.render()
    }

    render(count) {
        const html = `
            <div class="header_container">
                <div class="header_counter" onclick="headerPage.handlerOpenShoppingPage();">
                    🔥 ${count}
                </div>
            </div>
        `

        ROOT_HEADER.innerHTML = html
    }
}

const headerPage = new Header()

const productsStore = localStorageUtil.getProducts()
headerPage.render(productsStore.length)