import { __ } from '@wordpress/i18n';
import { select, useSelect } from "@wordpress/data";
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';


export default function Edit({ attributes }) {
	const { numberOfPosts } = attributes;
	const posts = useSelect((select) => {
		return select("core").getEntityRecords('postType', 'post', {
			per_page: numberOfPosts,
			_embed: true
		});
	}, [numberOfPosts]);

	console.log(posts);


	return (
		<p { ...useBlockProps() }>
			{ __(
				'Dynamic Blocks – hello from the editor!',
				'dynamic-blocks'
			) }
		</p>
	);
}
