'use strict';

import fs from 'fs';
import uuid from 'uuid';
import faker from 'faker';

let options = {
	db: {
		name: 'buckets'
	},
	collections: {
		buckets: {
			count: 50
		},
		users: {
			count: 50
		}
	}
};

function createDB(options) {
	let path = `${process.cwd()}/${options.db.name}.db.json`;
	let data = createCollections(options.collections);
	data = JSON.stringify(data);
	fs.writeFile(path, data, (err) => {
		if (err) { throw err; }
		console.log(`(>^__^)> Databse ${options.db.name} was generated!`);
	});
}

function createCollections(options) {
	let collections = {};
	let keys = Object.keys(options);

	keys.forEach((key) => {
		collections[key] = collections[key](key.count);
	});

	return collections;
}

let Collections = {

	users: function(count) {
		let data = [];

		for (let i = 0; i < count; i ++) {
			let id = uuid.v4();
			data.push({
				id: id,
				first_name: faker.name.firstName(),
				last_name: faker.name.lastName(),
				avatar: faker.internet.avatar(),
				buckets: [],
				starred: []
			});
		}
	},

	

};