export default {

    Company: {
        fqdn: 'watershed.studio',
        tld: '.studio',
        name: 'watershed',
        title: 'watershed.studio',
        slogan: 'We make to help',
        Meta: {
            description: 'watershed.studio makes products and services for crypto and blockchain.',
        }
    },

    PRODUCTS: {

    },

    forPage(id) {
        return {
            Company: this.Company,
            Product: this.PRODUCTS[id],
        };
    }
}