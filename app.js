const app = Vue.createApp({

   data(){
    return {

        url : 'jacobalexanderclayton.com',
        showbooks : true,
        books: [
            {title : 'name of the wind', author: 'patrick rothfuss', image: 'assets/1.jpg', isFav: true},
            {title : 'the way of kings', author: 'brandon sanderson', image: 'assets/2.jpg', isFav: false},
            {title : 'the final empire', author: 'brandon sanderson', image: 'assets/3.jpg', isFav: true}
        ]
}
   },
   methods: {
    toggleShowBooks(){
        this.showbooks = !this.showbooks
    },
    toggleFav(book){
        book.isFav = !book.isFav
    }
    
   },
   computed : {
    filteredBooks(){
        return this.books.filter((book) => book.isFav)
    }
   }

})

app.mount('#app')

