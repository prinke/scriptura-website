/**
 * Sätteri hast plugin: open external (http/https) links in Markdown content in a new tab.
 * @param {{ site?: string }} [options] Links to this origin are treated as internal.
 * @returns {import('satteri').HastPluginDefinition}
 */
export default function externalLinks({ site } = {}) {
	const ownOrigin = site ? new URL(site).origin : undefined;

	return {
		name: 'external-links',
		element: {
			filter: ['a'],
			visit(node, ctx) {
				const href = node.properties?.href;
				if (typeof href === 'string' && /^https?:\/\//.test(href) && new URL(href).origin !== ownOrigin) {
					ctx.setProperty(node, 'target', '_blank');
					ctx.setProperty(node, 'rel', 'noopener noreferrer');
				}
			},
		},
	};
}
