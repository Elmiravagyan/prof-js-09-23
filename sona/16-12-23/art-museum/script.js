import { generateMarkup, loadMore, nextPage, btns, loadBtn, nextBtn} from "./index.js";


fetch("https://harvardartmuseums.org/browse?load_amount=30")
    .then(res => res.json())
    .then(res => {
        res = res.records;
        generateMarkup(res);
        document.body.append(btns);
    })


loadBtn.addEventListener('click', () => {
    loadMore();
})


nextBtn.addEventListener('click', () => {
    nextPage();
})