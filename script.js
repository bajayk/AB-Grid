import ABGrid from './ab-grid/ab-grid.js';

let columnDefs = [
    {label:'City', field:'city'},
    {label:'Population', field:'population'},
    {label:'Country', field:'country'},
    {label:'Zip Code', field:'zipcode'}
];

let rows = [
    {city:'Delhi', population:'2,00,00,000', country:'India', zipcode:'110001'},
    {city:'Mumbai', population:'1,80,00,000', country:'India', zipcode:'400004'},
    {city:'New York', population:'85,00,000', country:'United States', zipcode:'10001'},
    {city:'Dubai', population:'33,00,000', country:'UAE', zipcode:'00000'},
    {city:'Shanghai', population:'2,43,00,000', country:'China', zipcode:'200000'},
    {city:'Sydney', population:'52,00,000', country:'Australia', zipcode:'2000'}
];

let data = {
    columnDefs:columnDefs,
    rowData:rows
}


document.querySelector('ab-grid').data = data;
