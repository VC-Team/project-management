// eslint-disable-next-line no-undef
module.exports = {
	extends: ['gitmoji'],
	parserPreset: {
		parserOpts: {
			headerPattern: /^(:\w*:)(?:\s)([a-zA-Z]{1,})(?:\((.*?)\))?(:)\s(.{1,})$/,
			headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
		},
	},
};
