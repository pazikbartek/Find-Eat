class Search{
    constructor(){
        this.city;
        this.sort;
        this.order;
    }

    getData(){
        this.city = document.querySelector('#city').value;
        let s = document.querySelector('#sort').value;
        if(s=="Price"){
            this.sort="cost";
        }
        else{
            this.sort="rating";
        }
        let o = document.querySelector('#order').value;
        if(o=="Low to high"){
            this.order = "asc";
        }
        else{
            this.order = "desc";
        }
        let tab = [this.city, this.sort, this.order];
        return tab;
    }
}

export default Search;