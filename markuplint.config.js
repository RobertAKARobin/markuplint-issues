console.log(import.meta.url);

export default {
	extends: [
		`markuplint:recommended-static-html`,
	],
	// plugins: [`./plugin-foo.js`],
	plugins: [`./plugin.js`],
	rules: {
		// 'markuplint/my-foo': true,
		'markuplint/my-rule': true,
	},
};
