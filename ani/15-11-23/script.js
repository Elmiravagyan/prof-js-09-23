import { cars } from './cars.js';

const container = document.getElementById('container');
const filters = document.getElementById('filters');
function createItem(car) {
    const carItem = document.createElement('div');
    const price = document.createElement('div');
    const country = document.createElement('div');
    price.innerText = `Price: ${car.price}`;
    country.innerText = `Country: ${car.country}`;
    carItem.setAttribute('id', `${car._id}`)
    carItem.append(country, price);
    return carItem;
}

(function generateCarsMarkup(cars) {
    const htmlElements = cars.map(car => createItem(car));
    container.append(...htmlElements);
})(cars)

function extractSelectList(arr, key) {
    return arr.reduce((finalArr, item, index) => {
        if(!finalArr.includes(item[key])) {
            finalArr.push(item[key]);
        }
        return finalArr;
    }, []);
};

let countries = extractSelectList(cars, 'country');
let companies = extractSelectList(cars, 'company');

// <label htmlFor="cars">Choose a car:</label>
function createDropdown(items, id) {
    let select = document.createElement('select');
    select.setAttribute('id', id);

    let options = items.map(item => {
        let option = document.createElement('option');
        option.setAttribute('value', item);
        option.innerText = item;
        return option;
    })
    select.append(...options);
    return select;
};
let countryDropDown = createDropdown(countries, 'countries');
let companyDropDown = createDropdown(companies, 'companies');
filters.append(countryDropDown, companyDropDown);

countryDropDown.addEventListener('change', () => {
    let option = countryDropDown.value;
    let ids = cars.filter(item => item.country === option).map(element => element.id)
    let elements = [...container.children];
    const filtered = elements.map(element => {
         
        if(!ids.includes(element.id)){
            element.classList.add('hide')
         } else {
            element.classList.remove('hide')
         }
        
    })
          
})



