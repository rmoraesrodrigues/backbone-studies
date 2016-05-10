var App = {
  Models: {},
  Collections: {},
  Views: {}

}
var PlayerModel = Backbone.Model.extend({
  defaults: {
    name: 'Player Name Default',
    position: 'Player Position Default',
    number: 'XX',
    matches: 0,
    registered: true
  },

  initialize: function(){
    console.log('PlayerModel iniciado...');
    this.on('change',function(){
      console.log('>>>>> PlayerModel foi modificando!');
    });

    // this.on('error',function(model, error){
    //   console.log(error);
    // });
  },

  validate: function(attrs){
    console.log('Validando');
    // if(attrs.name == 'Rafael'){
    //   return 'errou!!!';
    // }
  },

  getPlayerName: function(){
    return this.get('name');
  },

  getPlayerPosition: function(){
    return this.get('position');
  },

  getPlayerNumber: function(){
    return this.get('number');
  },

  getPlayerMatches: function(){
    return this.get('matches');
  },

  play: function(){
    return this.getPlayerName() + ' is playing!';
  },

  updatePlayer: function(newName, newPosition, newNumber, newMatches){
    this.set({
      'name': newName,
      'position': newPosition,
      'number': newNumber,
      'matches': newMatches
      },
      {
        validate: true
      }
    );
  }

});

var PlayersCollection = Backbone.Collection.extend({
  model: PlayerModel,
});

var playersCollection = new PlayersCollection([
  {
    name: 'Fernando Prass',
    position: 'Goleiro',
    number: '1',
    matches: 100,
    registered: true
  },

  {
    name: 'Vitor Hugo',
    position: 'Zagueiro',
    number: '4',
    matches: 50,
    registered: true
  }
]);

var SearchView = Backbone.View.extend();
var search_view = new SearchView();

var PlayerView = Backbone.View.extend({

  tagName: 'li',
  // model: playerModel,

  initialize: function(){
    console.log('PlayerView iniciada...');
    // this.render();
  },

  render: function(){
    console.log('PlayerView renderizando...');

    var $name = this.model.getPlayerName();
    var $position = this.model.getPlayerPosition();
    var $number = this.model.getPlayerNumber();
    var $matches = this.model.getPlayerMatches();

    var template = _.template($('#player-template').html());
    // this.$el.html(template({name: $name, position: $position, number: $number, matches: $matches }));
    this.$el.html(template(this.model.toJSON()));
    // console.log(this.model.toJSON());
    return this;
  },

  events: {
    'click .clicar' : 'teste'
  },

  teste: function(e){
    e.preventDefault();
    e.stopPropagation();
    // console.log(this.model.play());
    this.model.updatePlayer('Rafael','Meia Direita','10', -1);
    this.render();
  }

});

var PlayersView = Backbone.View.extend({

  el: '.players-wrapper',
  collection: playersCollection,

  initialize: function(){
    console.log('TeamView iniciada...');
    this.render();
  },

  render: function(){
    this.collection.each(function(player) {
      var playerView = new PlayerView({ model: player });
      console.log(playerView);
      this.$el.find('.players').append(playerView.render().el);
    }, this);
    return this;
  },

  events:{
    'click .botao' : 'addPlayer'
  },

  addPlayer: function(){
    this.collection.add(
      {
        name: 'Dudu',
        position: 'Atacante',
        number: '7',
        registered: true
      }
    );
    this.$el.find('.players').empty();
    this.render();
  }

});

$(function() {
  var myView = new PlayersView();
});