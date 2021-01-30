'use strict'

//1.1

function Product(name,price) {
    this.name = name;
    this.price = price;
}
Product.prototype.make25PercentDiscount = function() {
    this.price *= 0.75; // уменьшаем на 25% 
}

let product1 = new Product('петрушка',100);
product1.make25PercentDiscount();

class ProductES6 {
    constructor(name,price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price *= 0.75;
    }
}

let product2 = new ProductES6('укроп',99);
product2.make25PercentDiscount();

//1.2

function Post(author,text,date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function(txt) {
    this.text = txt;
}

function AttachedPost(author,text,date) {
    Post.call(this,author,text,date);
    this.highlighted = false;
}
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

let post1 = new AttachedPost('K.Marks','sometext','2021-01-30T10:00:00.000Z');
console.log(post1);
post1.edit('changed');

class PostES6 {
    constructor(author,text,date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(txt) {
        this.text = txt;
    }
}
class AttachedPostES6 extends PostES6 {
    constructor(author,text,date) {
        super(author,text,date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let post2 = new AttachedPostES6('K.Marks','sometext','2021-01-30T10:00:00.000Z');
console.log(post2);
post2.edit('changedES6');