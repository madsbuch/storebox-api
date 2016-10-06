var Client = require('node-rest-client').Client;
var client = new Client();

exports.Storebox = function(cookie) {

	let makeRequest = function(path, callcback){

        var args = {
            headers: { 'Cookie': 'auth-token=' + cookie }
        };

        client.get("https://dk.storebox.com/api/v1/" + path, args, function (data, response) {
            callcback(null, data);
        });
	}

	return {
		/**
		 * Return list of cards
		 */
		cards : function(callback){
			makeRequest("cards", callback);
		},

		/**
		 * Return list of directories
		 */
		directories : function(callback){
			makeRequest("directories", callback);
		},

		receipts : function(directoryId, count=20, offset=0, direction="desc", callback){
			makeRequest("receipts?count="+count+"&direction="+direction+"&directoryId="+directoryId+"&offset="+offset, callback);
		}
	}
}
