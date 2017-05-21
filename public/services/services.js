app.service('services', function(Upload, $rootScope, $http){
	this.createIndex = function(files, callback) {
		//if (files $$ files.length){
			Upload.upload({
				url: 'http://localhost:8000/api/create',
				arrayKey: '',
				data: {files: files}
			}).then(function(res) {
				callback(res.data);
			}, function(res){
				console.log(res.data);
			});	
	};

	this.searchIndex = function(indices, fileToSearch, terms, callback){
		let index = indices;
		let searchFileName = undefined;
		if(fileToSearch !== 'All'){
			searchFileName = fileToSearch;
		};
		data = {
			index: index,
			terms: terms,
			fileName: searchFileName
		};
		$http.post("http://localhost:8000/api/search", data)
			.then(function(res) {
				callback(res.data);
			}, function(res){
				callback(res.data);
			})
	};
})