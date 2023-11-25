'use strict';
console.log('ほろっほぅ')

const changeTable = () => {
    // ボタンの辞書
    const button = {};
    for (let i = 0; i < 5; i++) {

        let week = "";
        switch (i) {
            case 0:
                week = "mon_";
                break
            case 1:
                week = "tue_";
                break
            case 2:
                week = "wed_";
                break
            case 3:
                week = "thu_";
                break
            case 4:
                week = "fri_";
                break
        }
        for (let j = 0; j < 5; j++) {
            const period = (j + 1).toString();
            button[week + period] = "■■■■■■■■■■■■■■■■■■■■";// "nullnullうなぎ";
        }
    }
    // ボタンの集合が入っているidを指定
    const topnav = document.getElementById("topnav");
    // ボタンの集合を取る．
    const links = topnav.getElementsByClassName('link-container');
    // ボタン集合を精査する．
    for (let i = 0; i < links.length; i++) {
        const title = links.item(i).title;
        const chrToRemove = "限";
        const removedTitle = title.split(chrToRemove).join("");
        let classifier = jpn2eng(removedTitle.substr(-3).substr(0, 2));
        // console.log(classifier)
        // if () {
        //     console.log(title)
        //     classifier = jpn2eng(removedTitle.substr(-5).substr(0, 2));
        // }
        const tagBtnName = title.replace(/\(.+$/, "")
        const tag = "<a href=" + links.item(i).href + ">" + "<span>" + tagBtnName + "</span>" + "</a>"
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