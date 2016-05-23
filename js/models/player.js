define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone'),

    PlayerModel = Backbone.Model.extend({

      defaults: {
        name: 'Player Name Default',
        position: 'Player Position Default',
        number: 'XX',
        matches: 0,
        registered: true
      },

      // urlRoot: 'http://jsonplaceholder.typicode.com',

      initialize: function(){
        console.log('model iniciado');
        // this.on('change',function(){
        //   console.log('>>>>> PlayerModel foi modificando!');
        // });

        // this.on('error',function(model, error){
        //   console.log(error);
        // });
      },

      validate: function(attrs){

        // Check if matches is a number
        if( !(/^\d+$/.test(attrs.matches)) ) {
          console.log('Matches needs to be a number');
          return 'errou!!!';
        }
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

    return {
      PlayerModel: PlayerModel
    }

});