

$(function() {

window.Book = Backbone.Model.extend({
 
 defaults: {
   title:"Default Title",
   ISBN:"xx"
 },

});

window.Library = Backbone.Collection.extend({
   
  model:Book,

  localStorage: new Store("books")

});


window.library = new Library;


window.BookView = Backbone.View.extend({
  
 tagName: "li",

 template: _.template($('#book-template').html()),


 initialize: function() {
   this.model.bind('change',this.render, this);
   this.model.view = this;
 },
 
 render: function() {
  $(this.el).html(this.template(this.model.toJSON()));
  this.setTitle();
  return this;
 },

 setTitle: function() {
   var title = this.model.get('title');
   this.$('.book-title').text(title);
 }


});

window.LibraryView = Backbone.View.extend({


    el:$("#libraryapp"),

    initialize: function() {
       var book = {title:"A book",ISBN:"223"};
       addOne(library.create(book));
    },

    addOne: function(book) {
       var view = new BookView({model:book});
       this.$("#book-list").append(view.render().el);
    }

});


window.App = new LibraryView;



});
