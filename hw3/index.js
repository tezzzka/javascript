"use strict"

//01.

const numbers = [
    0,9,5,2,7,6,5,3,2,1
]
let suffix;
for (let num of numbers) {
    suffix = num == 0 ? "это ноль."
        :num % 2 == 1 ? "это нечетное число."
            :"это четное число.";
    console.log(`${num}-${suffix}`);
}

//02.

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
    {
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
            likes: 10,
            dislikes: 2 //вывести это число
        }
    },
    {
        userId: 5, //вывести это число
        userName: "Jane",
        text: "lorem ipsum 2", //вывести этот текст
        rating: {
            likes: 3,
            dislikes: 1
        }
    },
    ]
    };

console.log(
    post.author,
    post.comments[0].rating.dislikes,
    post.comments[1].userId,
    post.comments[1].text
    );

//03.

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function(obj) {
    return obj.price*=1.15;
});
console.log(products);

//04.

const products2 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
let activeProducts=[];

activeProducts = products2.filter(purchase => {
    return purchase.photos && purchase.photos.length > 0 ? true: false;
}).sort((x,y)=> {
    return x.price < y.price ? -1: 0
});

console.log(activeProducts);

//06.

let x = 'x';
for (let key=0;key<20;key++) {
    console.log(`${x}\n`);
    x+='x';
}