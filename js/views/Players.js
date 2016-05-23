define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone'),
        players     = require('app/collections/players');

    return Backbone.View.extend({

        tagName: 'ul',

        className: 'players',

        initialize: function(){
            this.players = new players.playersC();
            console.log(players);
            this.render();
            this.collection.on('add', this.addPlayer, this);
        },

        render: function(){
            this.collection.each(this.addPlayer, this);

            return this;
        },

        addPlayer: function(player){
            var playerView = new PlayerView({ model: player });
            this.$el.append(playerView.render().el);
        }

    });
});