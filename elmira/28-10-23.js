function StoreItem(id, price, count, type) {
    this.id = id;
    this.price = price;
    this.count = count;
    this.type = type;
}

new StoreItem('asa3332', 1000, 100, 'book'); //this = {}

// calling without new
function StoreItem(id, price, count, type) {
    console.log('target', new.target);
    if(new.target) {
        this.id = id;
        this.price = price;
        this.count = count;
        this.type = type;
    } else {
        return new StoreItem(id, price, count, type);
    }
}

StoreItem('asa3332', 1000, 100, 'book');

//

function StoreItem(id, price, count, type) {
    console.log('target', new.target);
    if(new.target) {
        this.id = id;
        this.price = price;
        this.count = count;
        this.type = type;
    } else {
        return new StoreItem(id, price, count, type);
    }
}

StoreItem.prototype.getPrice = function() {
    return `${this.price} դրամ`;
}


function Book(author, title, pagesCount, year) {
    if(new.target) {
        this.author = author;
        this.title = title;
        this.pagesCount = pagesCount;
        this.year = year;
    } else {
        return new Book(id, price, count, type);
    }
}


Book.prototype.getCount = function() {
    return `${this.pagesCount} էջ`;
}