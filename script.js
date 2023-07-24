'use strict';
console.log('ほろっほぅ')

const changeTable = () => {
    const button = {};
    const topnav = document.getElementById("topnav");
    const links = document.getElementsByClassName('link-container');
//     const len = links.length;
    for (let i = 0; i < links.length; i++){
        const title = links.item(i).title;
        const chrToRemove = "限";
        const removedTitle = title.split(chrToRemove).join("");

        const classifier = jpn2eng(removedTitle.substr(-3).substr(0, 2));

        const tag = "<a href=" + links.item(i).href + ">" + "<span>" + title + "</span>" + "</a>"
        button[classifier] = tag;
    }
    console.log(button)
    topnav.innerHTML = makeTable(button);
    console.log(button)
}
const makeTable = (button) => {
    const headTable = "<table><tr><th>月曜日</th><th>火曜日</th><th>水曜日</th><th>木曜日</th><th>金曜日</th></tr>";
    const firstTable = "<tr><td>" + button.mon_1 + "</td><td>" + button.tue_1 + "</td><td>" + button.wed_1 + "</td><td>" + button.thu_1 + "</td><td>" + button.fri_1 + "</td></tr>";
    const secondTable = "<tr><td>" + button.mon_2 + "</td><td>" + button.tue_2 + "</td><td>" + button.wed_2 + "</td><td>" + button.thu_2 + "</td><td>" + button.fri_2 + "</td></tr>";
    const thirdTable = "<tr><td>" + button.mon_3 + "</td><td>" + button.tue_3 + "</td><td>" + button.wed_3 + "</td><td>" + button.thu_3 + "</td><td>" + button.fri_3 + "</td></tr>";
    const fourthTable = "<tr><td>" + button.mon_4 + "</td><td>" + button.tue_4 + "</td><td>" + button.wed_4 + "</td><td>" + button.thu_4 + "</td><td>" + button.fri_4 + "</td></tr>";
    const fifthTable = "<tr><td>" + button.mon_5 + "</td><td>" + button.tue_5 + "</td><td>" + button.wed_5 + "</td><td>" + button.thu_5 + "</td><td>" + button.fri_5 + "</td></tr>";

    return headTable + firstTable + secondTable + thirdTable + fourthTable + fifthTable
}

const jpn2eng = (str) => {
    const jpnMap = {
        "１": "1", 
        "２": "2", 
        "３": "3", 
        "４": "4", 
        "５": "5", 
        "月": "mon_", 
        "火": "tue_", 
        "水": "wed_", 
        "木": "thu_", 
        "金": "fri_", 
        "土": "sat_", 
    }
    const reg = new RegExp('(' + Object.keys(jpnMap).join('|') + ')', 'g');
    return str
            .replace(reg, function (match) {
                return jpnMap[match];
            })
};


changeTable();