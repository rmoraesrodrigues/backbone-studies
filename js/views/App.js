define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone');

    return Backbone.View.extend({

      tagName: 'li',

      initialize: function(){
        this.model.on('destroy', this.remove, this);
        this.model.on('change', this.render, this);
      },

      render: function(){

        var $name = this.model.getPlayerName();
        var $position = this.model.getPlayerPosition();
        var $number = this.model.getPlayerNumber();
        var $matches = this.model.getPlayerMatches();

        var template = _.template( $('#player-template').html() );
        this.$el.html(template({name: $name, position: $position, number: $number, matches: $matches }));
        // this.$el.html( template(this.model.toJSON()) );
        return this;
      },

      events: {
        'click .delete' : 'deletePlayer',
        'click .edit'   : 'editPlayer'
      },

      editPlayer: function(){
        var newPlayerName = prompt('Qual a sua graça?', this.model.get('name'));
        // console.log(newPlayerName);

        if ( !newPlayerName ) return;
        this.model.set('name', newPlayerName);
      },

      deletePlayer: function(){
        this.model.destroy();
      },

      remove: function() {
        this.$el.remove();
      }

    });
});