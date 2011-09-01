

var library = function() {

 var eFactory =  {
 
   createBook : function() {

   }
 };
 
 var eInstance =  {
 
    Book : {
      _title : 'Default',
      _ISBN : '',
      title : function() {
        return this._title;
      },
      setTitle : function(t) {
        this._title = t;
      }
   },
   
   LibraryElement :  {
   },
   
   Author : {
    _first_name : 'Unamed',
    _last_name : 'Unknown'
   }
 };

};