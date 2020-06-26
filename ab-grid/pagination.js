export default class CPagination extends HTMLElement{

    constructor(){
        super();
        this.shadow = this.attachShadow({mode:'open'});
        this.render();
    }

    render(){
        this.shadow.innerHTML = `
        <style>
        .pagination{
            display:flex;
            justify-content:space-between;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        }

        .buttons{
            display:flex;
        }

        .buttons .btn{
            padding:8px 15px;
            cursor:pointer;
            margin:2px;       
            box-sizing: border-box;           
            border-radius:3px;
            border:white solid 1px;
        }

        
        .buttons .btn:hover{
            background: linear-gradient(to bottom, #aaa 0%, #111 100%);
            border:#111 solid 1px;
            color:white;
        }
        
        .buttons .btn.active{
            background: linear-gradient(to bottom, #fff 0%, #dcdcdc 100%);
            border:lightgray solid 1px;
            color:black;
        }

        .page-views{
            padding:8px 0px;
        }

        </style>
        <div class="pagination">
            <div class="page-views">
                Showing 1 to 10 of 37 entries
            </div>
            <div class="buttons">
                <div class="btn btn-previous">Previous</div>
                <div class="btn btn-page">1</div>
                <div class="btn btn-page active">2</div>
                <div class="btn btn-page">3</div>
                <div class="btn btn-page">4</div>
                <div class="btn btn-next">Next</div>
            </div>
        </div>
        `;
    }

}

customElements.define('c-pagination', CPagination);