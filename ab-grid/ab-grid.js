class ABGrid extends HTMLElement{

    constructor(){
        super();
        this.shadow = this.attachShadow({mode:'open'}); 
    }

    set data(data){
        this._data = data;        
        this.render();
    }

    get data(){
        return this._data;        
    }

    render(){
        this.shadow.innerHTML = `
        <style>
        table{
            border-collapse: collapse;
            width:inherit;
        }
       
        td, th{  
            border-top: solid 1px black;
            padding:10px;
            text-align:left;
        }        
        </style>
        <table>
            <thead></thead>
            <tbody></tbody>
        </table>
        `;   
        
        this.renderColumns();
        this.renderRows();
    }

    renderColumns(){
        let tHead = this.shadow.querySelector('table thead');
        tHead.innerHTML = "";
        let tHeadTr = document.createElement('tr');
        tHead.append(tHeadTr);
        this.data.columnDefs.forEach(column => {
            let th = document.createElement('th');
            th.innerHTML = column.label;
            th.className = column.field;
            tHeadTr.append(th);
        });
    }

    renderRows(){
        let tBody = this.shadow.querySelector('table tbody');
        tBody.innerHTML = "";
        this.data.rowData.forEach(row => {
            let tr = document.createElement('tr');
            this.data.columnDefs.forEach((column) => {
                let td = document.createElement('td');
                td.innerHTML = row[column.field];
                tr.append(td);
            });

            tBody.append(tr);
        })
    }

}

customElements.define('ab-grid', ABGrid);