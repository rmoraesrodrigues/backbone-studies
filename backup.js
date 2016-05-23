var App = {
  Models: {},
  Collections: {},
  Views: {},
  Router: {}
}

App.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'show/:playerId':'show'
  },

  index: function(){
    console.log('Hello Index');
  },

  show: function(playerId){
    console.log('Hello Show - '+playerId);
  }
});
new App.Router();
Backbone.history.start();

// App.Models.PlayerModel = Backbone.Model.extend({
//   defaults: {
//     name: 'Player Name Default',
//     position: 'Player Position Default',
//     number: 'XX',
//     matches: 0,
//     registered: true
//   },

//   urlRoot: 'http://jsonplaceholder.typicode.com',

//   initialize: function(){
//     this.on('change',function(){
//       console.log('>>>>> PlayerModel foi modificando!');
//     });

//     this.on('error',function(model, error){
//       console.log(error);
//     });
//   },

//   validate: function(attrs){

//     // Check if matches is a number
//     if( !(/^\d+$/.test(attrs.matches)) ) {
//       console.log('Matches needs to be a number');
//       return 'errou!!!';
//     }
//   },

//   getPlayerName: function(){
//     return this.get('name');
//   },

//   getPlayerPosition: function(){
//     return this.get('position');
//   },

//   getPlayerNumber: function(){
//     return this.get('number');
//   },

//   getPlayerMatches: function(){
//     return this.get('matches');
//   },

//   play: function(){
//     return this.getPlayerName() + ' is playing!';
//   },

//   updatePlayer: function(newName, newPosition, newNumber, newMatches){
//     this.set({
//       'name': newName,
//       'position': newPosition,
//       'number': newNumber,
//       'matches': newMatches
//       },
//       {
//         validate: true
//       }
//     );
//   }

// });

// App.Collections.PlayersCollection = Backbone.Collection.extend({
//   model: App.Models.PlayerModel
// });

// var playersCollection = new App.Collections.PlayersCollection([
//   {
//     name: 'Fernando Prass',
//     position: 'Goleiro',
//     number: '1',
//     matches: 100,
//     registered: true
//   },

//   {
//     name: 'Vitor Hugo',
//     position: 'Zagueiro',
//     number: '4',
//     matches: 50,
//     registered: true
//   }
// ]);

// App.Views.PlayerView = Backbone.View.extend({

//   tagName: 'li',

//   initialize: function(){
//     this.model.on('destroy', this.remove, this);
//     this.model.on('change', this.render, this);
//   },

//   render: function(){

//     var $name = this.model.getPlayerName();
//     var $position = this.model.getPlayerPosition();
//     var $number = this.model.getPlayerNumber();
//     var $matches = this.model.getPlayerMatches();

//     var template = _.template( $('#player-template').html() );
//     this.$el.html(template({name: $name, position: $position, number: $number, matches: $matches }));
//     // this.$el.html( template(this.model.toJSON()) );
//     return this;
//   },

//   events: {
//     'click .delete' : 'deletePlayer',
//     'click .edit'   : 'editPlayer'
//   },

//   editPlayer: function(){
//     var newPlayerName = prompt('Qual a sua graça?', this.model.get('name'));
//     // console.log(newPlayerName);

//     if ( !newPlayerName ) return;
//     this.model.set('name', newPlayerName);
//   },

//   deletePlayer: function(){
//     this.model.destroy();
//   },

//   remove: function() {
//     this.$el.remove();
//   }

// });

// App.Views.PlayersView = Backbone.View.extend({

//   tagName: 'ul',
//   className: 'players',

//   initialize: function(){
//     this.render();
//     this.collection.on('add', this.addPlayer, this);
//   },

//   render: function(){
//     this.collection.each(this.addPlayer, this);

//     return this;
//   },

//   addPlayer: function(player){
//     var playerView = new App.Views.PlayerView({ model: player });
//     this.$el.append(playerView.render().el);
//   }

// });

App.Views.AddPlayerView = Backbone.View.extend({

  el: '#add-player',

  events:{
    'click .addPlayer-js' : 'addPlayer'
  },

  addPlayer: function(){
    var newPlayer = new App.Models.PlayerModel(
      {
        name: $('#playerName').val(),
        position: $('#playerPosition').val(),
        number: $('#playerNumber').val(),
        matches: parseInt( $('#playerMatches').val() ),
      },
      {
        validate: true
      }
    );
    this.collection.add(newPlayer);
    // playersCollection.add(
    //   {
    //     name: $('#playerName').val(),
    //     position: $('#playerPosition').val(),
    //     number: $('#playerNumber').val(),
    //     matches: parseInt( $('#playerMatches').val() ),
    //   },
    //   { validate: true }
    // );
  }

});

var addPlayerView = new App.Views.AddPlayerView({ collection: playersCollection});
var playersView = new App.Views.PlayersView({ collection: playersCollection });

$('#team').append(playersView.el);