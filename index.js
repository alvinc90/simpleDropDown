const attachListenerToList = () => {
   const $lists = $("li");
   for (let i = 0; i < $lists.length; i++) {
       const list = $lists[i];
       const $list = $(list);
       $list.on("click", () => handleDisplayTotal($list));
   };
};

const handleDisplayTotal = ($list) => {
    const result = getTotalInString($list);
    const $span = $("#res");
    $span.text(result);
};

const getTotalInString = ($list) => {
    const set = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"])
    const resultArr = [];
    const string = $list.text();

    for (let i = 1; i < string.length; i++) {
        const ele = string[i];
        if (set.has(ele)) resultArr.push(ele);
        if (ele === " ") break;
    };

    return resultArr.join("");
};

const handleReset = () => {
    const $button = $("button");
    const $span = $("#res");
    $button.on("click", () => $span.text("0"));
};

let displayMenu = false;
const handleMenu = () => {
    const $menu = $("h2.menu");
    const $ul = $(".lists")
    $menu.on("click", () => {
        if (displayMenu === false) {
            $ul.show();
            displayMenu = true;
        } else {
            $ul.hide();
            displayMenu = false;
        }
    });
};

const handleCloseMenu = () => {
    const $ul = $(".lists")
    const $menu = $("h2.menu");
    $(document).click(() => {
        $ul.hide();
        displayMenu = false;
    })
    $(".dropdown-trigger").click((e) => e.stopPropagation());
};

handleCloseMenu();
handleMenu();
attachListenerToList();
handleReset();
