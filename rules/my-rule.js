import { createRule } from '@markuplint/ml-core';

console.log(import.meta.url);
// throw new Error(`oh no`);

export const myRule = () => createRule({
	async verify({ document, report }) {
		const el = document.querySelector(`div`);
		if (el) {
			report({
				message: `The div element is found`,
				scope: el,
			});
		}
	},
});
