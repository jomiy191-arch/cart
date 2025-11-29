const product1 = {
    img: "images/product1.jpg.webp",
    title: "Super Smartfon",
    text: "Uzoq muddat xizmat qiladi, ishlab chiqarilishi juda puxta.",
    category: "Smartfonlar",
    narx: "1200 000 so'm"
};

const product2 = {
    img: "images/rasm1.jpg",
    title: "Ultra Pro Max",
    text: "Kuchli protsessor va zo'r kamera — hammasi bitta qurilmada.",
    category: "Telefonlar",
    narx: "1350 000 so'm"
};

const product3 = {
    img: "images/rasm2.jpg",
    title: "Premium Phone X",
    text: "Batareya uzoq vaqtga yetadi, ishlatish oson va qulay.",
    category: "Elektronika",
    narx: "1500 000 so'm"
};

const product4 = {
    img: "images/rasm3.jpg",
    title: "Mega Kamera Phone",
    text: "Yuqori sifatli displey, ranglar juda tiniq va yorqin.",
    category: "Gadget",
    narx: "1400 000 so'm"
};

const product5 = {
    img: "images/rasm4.jpg",
    title: "Biznes Class Smartfon",
    text: "O'yinlar uchun super tezkor smartfon.",
    category: "Premium",
    narx: "1600 000 so'm"
};

const product6 = {
    img: "images/rasm5.jpg",
    title: "Turbo Edition",
    text: "Narxiga nisbatan sifati juda yuqori — zo'r tanlov.",
    category: "Telefonlar",
    narx: "1250 000 so'm"
};

const product7 = {
    img: "images/rasm6.jpg",
    title: "Lightning Speed Phone",
    text: "Metal korpus, premium dizayn.",
    category: "Smartfonlar",
    narx: "1550 000 so'm"
};

const product8 = {
    img: "images/rasm7.jpg",
    title: "Crystal Display",
    text: "Zamonaviy funksiyalar bilan qurollangan.",
    category: "Elektronika",
    narx: "1450 000 so'm"
};

const product9 = {
    img: "images/rasm8.jpg",
    title: "Pro Gamer Edition",
    text: "Tez zaryad, kuchli audio tizim.",
    category: "Gadget",
    narx: "1650 000 so'm"
};

const product10 = {
    img: "images/rasm9.jpg",
    title: "Smart Vision 12",
    text: "Ergonomik va juda qulay.",
    category: "Premium",
    narx: "1700 000 so'm"
};

const product11 = {
    img: "images/rasm11.jpg",
    title: "Future Phone",
    text: "Uzoq muddat xizmat qiladi, ishlab chiqarilishi juda puxta.",
    category: "Smartfonlar",
    narx: "1200 000 so'm"
};

const product12 = {
    img: "images/rasm17.jpg",
    title: "Spark Ultra",
    text: "Kuchli protsessor va zo'r kamera — hammasi bitta qurilmada.",
    category: "Telefonlar",
    narx: "1350 000 so'm"
};

const product13 = {
    img: "images/rasm12.jpg",
    title: "Galaxy Prime",
    text: "Batareya uzoq vaqtga yetadi, ishlatish oson va qulay.",
    category: "Elektronika",
    narx: "1500 000 so'm"
};

const product14 = {
    img: "images/rasm13.jpg",
    title: "Nova Turbo",
    text: "Yuqori sifatli displey, ranglar juda tiniq va yorqin.",
    category: "Gadget",
    narx: "1400 000 so'm"
};

const product15 = {
    img: "images/rasm14.jpg",
    title: "Power Phone",
    text: "O'yinlar uchun super tezkor smartfon.",
    category: "Premium",
    narx: "1600 000 so'm"
};

const product16 = {
    img: "images/rasm15.jpg",
    title: "Elite Max",
    text: "Narxiga nisbatan sifati juda yuqori — zo'r tanlov.",
    category: "Telefonlar",
    narx: "1250 000 so'm"
};

const product17 = {
    img: "images/rasm16.jpg",
    title: "Air Light",
    text: "Metal korpus, premium dizayn.",
    category: "Smartfonlar",
    narx: "1550 000 so'm"
};

const product18 = {
    img: "images/rasm17.jpg",
    title: "Hyper Mini",
    text: "Zamonaviy funksiyalar bilan qurollangan.",
    category: "Elektronika",
    narx: "1450 000 so'm"
};

const product19 = {
    img: "images/rasm1.jpg",
    title: "Titan Phone",
    text: "Tez zaryad, kuchli audio tizim.",
    category: "Gadget",
    narx: "1650 000 so'm"
};

const product20 = {
    img: "images/rasm20.jpg",
    title: "Infinity Pro",
    text: "Ergonomik va juda qulay.",
    category: "Premium",
    narx: "1700 000 so'm"
};

const products = [
    product1, product2, product3, product4, product5,
    product6, product7, product8, product9, product10,
    product11, product12, product13, product14, product15,
    product16, product17, product18, product19, product20
];

function renderProducts() {
    let result = "";
    products.forEach(item => {
        result += `
            <div class="card">
                <img src="${item.img}" alt="${item.title}">
                <h2>${item.title}</h2>
                <p>${item.text}</p>
                <p class="category">${item.category}</p>
                <p class="price">${item.narx}</p>
            </div>
        `;
    });

    document.getElementById("userlist").innerHTML = result;
}

renderProducts();

window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    setTimeout(function() {
        preloader.style.display = 'none';
        content.style.display = 'block';
    }, 3000); 
});
