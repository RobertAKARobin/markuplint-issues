import { createPlugin } from '@markuplint/ml-core';
import { myRule } from './rules/my-rule.js';

console.log(import.meta.url);

export default createPlugin({
	create(setting) {
		return {
			rules: {
				'my-rule': myRule(setting),
			},
		};
	},
	name: `markuplint`,
});
