define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone'),
        player      = require('app/models/player'),
        playerModel = new player.PlayerModel(),

    playersC = [
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
    ]

    Players = Backbone.Collections.extend({
      model: playerModel
    });

    return {
      Players: Players,
      PlayersC: playersC
    }

});