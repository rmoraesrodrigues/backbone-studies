var App = {
  Models: {},
  Views: {},
  Collections: {}
};

App.Models.MovieModel = Backbone.Model.extend({
  defaults: {
    title: 'Default Title',
    // director: 'Tarantino',
    // mainRole: 'Kevin Space'
  },

  urlRoot: 'http://jsonplaceholder.typicode.com/todos'
});

// var movie = new App.Models.MovieModel({
//   title: 'Django',
//   mainRole: 'Jamie Foxx'
// });

// App.Collections.MovieCollection = Backbone.Collection.extend({
//   model: App.Models.MovieModel
// });

// var movies = new App.Collections.MovieCollection([
//   {
//     title: 'Pulp Fiction',
//     director: 'Tarantino',
//     mainRole: 'Sameul L. Jackson'
//   },
//   {
//     title: 'Kill Bill',
//     director: 'Tarantino',
//     mainRole: 'Uma Thurman'
//   },
//   {
//     title: 'Jackie Brown',
//     director: 'Tarantino',
//     mainRole: 'Robert de Niro'
//   }
// ]);


// App.Views.MovieView = Backbone.View.extend({

//   tagName: 'li',

//   bla: _.template( $('#my-movies').html() ),

//   initialize: function(){
//     this.model.on('change', this.render, this);
//   },

//   render: function(){
//     this.$el.html( this.bla(this.model.toJSON()) );
//     console.log(this);
//     return this;
//   },

//   events: {
//     "click .name" : "showAlert"
//   },

//   showAlert: function(){
//     this.model.set('title','aaaaa');
//   },

//   rafael: function(){
//     console.log('aaaaaaaaaaaaa');
//   }

// });

// var movieView = new App.Views.MovieView({model: movie});

// App.Views.MoviesView = Backbone.View.extend({

//   tagName: 'ul',

//   render: function(){
//     // console.log(this.collection.toJSON());
//     this.collection.each(function(movie){
//       var movieView = new App.Views.MovieView({ model: movie });
//       // console.log(movieView.el);
//       movieView.rafael();
//       this.$el.append(movieView.render().el);
//     }, this);

//     return this;
//   }

// });

// var moviesView = new App.Views.MoviesView({collection: movies });
// $(document.body).html(moviesView.render().el);