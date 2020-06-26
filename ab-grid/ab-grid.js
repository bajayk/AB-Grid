import CGrid from './grid.js';
import CPagination from './pagination.js';
export default class ABGrid extends HTMLElement{

    constructor(){
        super();
        this.shadow = this.attachShadow({mode:'open'});
        this.render();
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
                    Search: <input type="text" />
                </div>
            </div>
            <c-grid></c-grid>
            <c-pagination></c-pagination>
        </div>
        `;           
    }

    updateGrid(){
        let grid = this.shadow.querySelector('c-grid');
        grid.data = this.data;
    }

}

customElements.define('ab-grid', ABGrid);