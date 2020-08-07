export default class CPagination extends HTMLElement{

    constructor(){
        super();
        this.shadow = this.attachShadow({mode:'open'});
        this.init();
    }
    
    init(){        
        this.render();
        this.btnPrevious = this.shadow.querySelector('.btn-previous');
        this.btnNext = this.shadow.querySelector('.btn-next');
        this.currentPage = 1;
        this.addEventListeners();
    }



    addEventListeners(){
        this.btnPrevious.addEventListener('click', (e)=>this.onPrevious(e));
        this.btnNext.addEventListener('click', (e)=>this.onNext(e));
    }

    onPrevious(e){

    }

    onNext(e){
        
    }

    generateButtons(data, entries){
        this.shadow.querySelectorAll(".btn-page").forEach(ele => {
            ele.parentNode.removeChild(ele);
        });

        let btnsCount = Math.floor(data.length / entries);// No of button counts requirement
        
    
        for(let i=1; i <= btnsCount; i++){
            let page = document.createElement('div');
            page.classList.add('btn');
            page.classList.add('btn-page');            

            if(i === 1){
                page.classList.add('active');
            }

            if( i > 5){
                page.classList.add('hide');
            }

            page.setAttribute('pageno', i);

            page.innerHTML = i;

            page.addEventListener('click', (e)=>this.onPageClick(e));

            this.btnNext.parentNode.insertBefore(page, this.btnNext);

        }

        this.currentPage = 1;
        
    }

    onPageClick(e){
        this.shadow.querySelector('.btn-page.active').classList.remove('active');
        e.target.classList.add('active');
        let pageno = parseInt(e.target.getAttribute('pageno'));
        this.dispatchEventOnSelectPage(pageno);
        this.currentPage = pageno;
    }

    dispatchEventOnSelectPage(pageno){

        let event = new CustomEvent('onPageChange', {
            detail:{
                pageno:pageno
            }
        });
        
        this.dispatchEvent(event);
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

        .buttons .btn.hide{
           display:none;
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
                <div class="btn btn-first">First</div>
                <div class="btn btn-previous">Previous</div>
                <div class="btn btn-page">1</div>
                <div class="btn btn-page active">2</div>
                <div class="btn btn-page">3</div>
                <div class="btn btn-page">4</div>
                <div class="btn btn-next">Next</div>
                <div class="btn btn-last">Last</div>
            </div>
        </div>
        `;
    }

    

}

customElements.define('c-pagination', CPagination);