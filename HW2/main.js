class Shop {
    /**
     * 
     * @param {string} name 
     * @param {Imtem[]} products 
     * @param {Vendor} vendors 
     * @param {string} address 
     */
    constructor(name, products, vendors, address) {
        this.name = name;
        this.products = [];
        this.vendors = [];
        this.address = address;
    }
    addVendor(vendor) {
        let findVendor = this.vendors.find((value) => value.name === vendor.name);
        if (!findVendor) {
            this.vendors.push(vendor);
        } else {
            throw new Error(`${vendor.name} is already in the Shop`);
        }
    }
    addProduct(product) {
        this.products.push(product);
    }
    getProducts() {
        return this.products;
    }
}


class Item {
    /**
     * 
     * @param {string} name 
     * @param {number} quantity 
     * @param {number} price 
     * @param {string} vendorName 
     * @param {string} description 
     * @param {string} imgURL 
     */
    constructor(name, quantity, price, vendorName, description, imgURL) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.vendorName = vendorName;
        this.description = description;
        this.imgURL = imgURL;
    }
}
class Vendor {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

let hcmVendor = new Vendor("Nhà phân phối tp. HCM", "Số 8 Nguyễn Văn Tráng");

let listItems = [
    new Item(
        "Trouser",
        10,
        2000,
        "Nhà phân phối tp. HCM",
        "The fabric is cool and feels soft",
        "jean2.jpg"
    ),
    new Item(
        "Jogger",
        10,
        1000,
        "Nhà phân phối tp. HCM",
        "The fabric is cool and feels soft",
        "quanJogger.jpg"
    ),
    new Item(
        "Trouser",
        10,
        900,
        "Nhà phân phối tp. HCM",
        "The fabric is cool and feels soft",
        "quandai.jpg"
    ),
    new Item(
        "khaki",
        10,
        800,
        "Nhà phân phối tp. HCM",
        "The fabric is cool and feels soft",
        "quankhaki.jpg"
    ),
    new Item(
        "khaki",
        10,
        700,
        "Nhà phân phối tp. HCM",
        "The fabric is cool and feels soft",
        "quankhaki2.jpg"
    ),

];
let Shop1 = new Shop("Shop 1", "Số 8 Nguyễn Văn Tráng");
Shop1.addVendor(hcmVendor);
for (let item of listItems) {
    Shop1.addProduct(item);
}
console.log(Shop1.getProducts());

//************************ */
/**
 *
 * @param {Item} item
 * @returns
 */
function createItemElm(item) {
    let itemElm = document.createElement("div");
    itemElm.className = "card";
    itemElm.innerHTML = ` <img src="./images/${item.imgURL}" >
    <h1>${item.name}</h1>
    <p class="price">$${item.price}</p>
    <p>${item.description}</p>
    <p><button>Add to Cart</button></p>`;
    return itemElm;
}
let parent = document.getElementsByClassName("parent")[0];

for (let i = 0; i < listItems.length; i++) {
    let newItem = createItemElm(listItems[i]);
    parent.appendChild(newItem);
}