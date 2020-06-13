class ABGrid{

    constructor(options){
        this.container = options.container;
        this.columnDefs = options.columnDefs;
        this.rowData = options.rowData;

        this.init();
    }

    init(){
        console.log(this);
    }

}