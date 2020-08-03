import CGrid from './grid.js';
import CPagination from './pagination.js';
export default class ABGrid extends HTMLElement{

    constructor(){
        super();
        this.shadow = this.attachShadow({mode:'open'});
        this._data = [];
        this.init();
    }

    init(){
        this.render();
        this.cGrid = this.shadow.querySelector('c-grid');
        this.addEventListeners();
    }
    
    set data(data){
        this._data = data;        
        this.updateGrid();  
    }

    get data(){
        return this._data;        
    }

    render(){
        this.shadow.innerHTML = `
        <style>
        :host{
            border:solid 0px white;
            padding:25px;
            border-radius:5px;
            box-shadow:0px 0px 10px gray;
        }
        .grid-header{
            display:flex;
            justify-content:space-between;
            margin-bottom:20px;
        }

        c-grid{
            display:block;
            margin-bottom:20px;
        }
        </style>
        <div class="ab-grid">
            <div class="grid-header">
                <div class="entries">
                    <span>Show</span> 
                    <select class="cmb-entries">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <span>entries</span>
                </div>
                <div class="search">
                    Search: <input class="input-search" type="text" />
                </div>
            </div>
            <c-grid></c-grid>
            <c-pagination></c-pagination>
        </div>
        `;           
    }

    updateGrid(){       
        this.cGrid.data = this.data;
    }

    addEventListeners(){
        this.shadow.querySelector('.cmb-entries').addEventListener('change', (e)=>this.onEntriesChange(e));
        this.shadow.querySelector('.input-search').addEventListener('input', (e)=>this.onInputSearch(e));
        this.cGrid.addEventListener('update', (e)=>this.onGridUpdate(e));
    }

    onEntriesChange(e){
        let entries = e.target.value;
        this.cGrid.entriesPerPage(parseInt(entries));
    }

    onInputSearch(e){
        let query = e.target.value.toLowerCase();
        
        this.cGrid.filter(query);
        
    }

    onGridUpdate(e){
        console.log(e.detail.data);
    }

}

customElements.define('ab-grid', ABGrid);