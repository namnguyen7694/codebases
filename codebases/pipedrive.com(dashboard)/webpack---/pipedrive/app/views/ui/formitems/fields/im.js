const contactField = require('./contact');
const _ = require('lodash');

module.exports = function(opts) {
	const options = _.assignIn(
		{
			field_originalType: 'im',
			uuid: `im-${_.makeid()}`,
			loadCallback: `async_${_.makeid()}`
		},
		opts
	);

	return contactField(options);
};
