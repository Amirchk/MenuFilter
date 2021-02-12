const menu = [
    {
        id: 1,
        title: "a",
        category: "a",
        det: "THis is book"
    },

    {
        id: 2,
        title: "b",
        category: "b",
        det: "THis is book"
    },

    {
        id: 3,
        title: "c",
        category: "c",
        det: "THis is book"
    },

    {
        id: 4,
        title: "d",
        category: "d",
        det: "THis is book"
    },
    {
        id: 4,
        title: "d",
        category: "d",
        det: "THis is book"
    }
];
const section1 = document.querySelector(".container");
const bton = document.querySelectorAll(".filbtn");

window.addEventListener('DOMContentLoaded', function () {
    displaymenuItem(menu);
});
bton.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const category = e.currentTarget.dataset.id;
        //        console.log(category);
        const menucategory = menu.filter(function (menuItem) {
//            console.log(menuItem);
            if (menuItem.category === category) {
                return menuItem;
                console.log(menuItem);
            }
        });
        if (category === 'all') {
            displaymenuItem(menu);
        } else {
            displaymenuItem(menucategory);
        }
    });
});

function displaymenuItem(menuitem) {
    let displayItem = menuitem.map(function (item) {
        return `<div class="menu" >
                <h1>${item.title}</h1>
                <h3>${item.category}</h3>
                <p>${item.det}</p>
            </div>`;
    });
    displayItem = displayItem.join("");
    section1.innerHTML = displayItem;
}