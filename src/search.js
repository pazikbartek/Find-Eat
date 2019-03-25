class Search{
    constructor(){
        this.city;
        this.sort;
        this.order;
    }

    getData(){
        this.city = document.querySelector('#city').value;

        const s = document.querySelector('#sort').value;
        s=="Price" ? this.sort="cost" : this.sort="rating"

        const o = document.querySelector('#order').value;
        o=="Low to high" ? this.order="asc" : this.order="desc"

        const tab = [this.city, this.sort, this.order];
        return tab;
    }

}

export default Search;