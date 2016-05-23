requirejs.config({

    baseUrl: 'js/lib',

    paths: {
        app: '../',
        // tpl: '../tpl'
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require(['jquery', 'backbone', 'app/views/Player', 'app/models/player'], function ($, Backbone, PlayerView, model) {
//   var playerModel = new model.PlayerModel;
//   var playerView = new PlayerView({ model: playerModel });
//   $(document.body).append(playerView.render().el);
});

require(['jquery', 'backbone', 'app/views/Players', 'app/collections/players'], function ($, Backbone, PlayersView, collection) {
  var playersCollection = new collection.Players;
  var playersView = new PlayersView({ collection: playersCollection });
  $(document.body).append(playersView.render().el);
});