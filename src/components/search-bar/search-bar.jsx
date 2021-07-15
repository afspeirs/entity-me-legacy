import { useRef, useState } from 'react';

import * as styles from './search-bar.module.scss';
import { useGlobalState } from '../../hooks/GlobalState';
import { useHotkeys } from '../../hooks/Hotkeys';

const SearchBar = () => {
	const [{ search }, dispatch] = useGlobalState();
	const inputRef = useRef();
	const [text, setText] = useState(search.text);

	const updateSearchText = (newText) => {
		dispatch({
			type: 'app-search',
			value: {
				...search,
				text: newText,
			},
		});
	};

	const handleTextClear = () => {
		updateSearchText('');
		setText('');
	};

	const handleTextInput = (event) => setText(event.target.value);

	const handleTextSubmit = (event) => {
		event.preventDefault();
		updateSearchText(text);
	};

	useHotkeys([
		// CTRL + F = Show Search bar
		{
			keys: ['f'],
			callback: (event) => {
				event.preventDefault();
				inputRef.current.focus();
			},
			metaModifier: true,
		},
		// Escape = Hide search bar
		{
			keys: ['Escape'],
			callback: () => {
				handleTextClear();
				inputRef.current.blur();
			},
		},
	]);

	return (
		<form className={styles.form} onSubmit={handleTextSubmit}>
			<div className={styles.searchRoot}>
				<input
					type="text"
					className={styles.search}
					placeholder="Search for an entity..."
					onChange={handleTextInput}
					ref={inputRef}
					value={text}
				/>
				{text.length !== 0 && (
					<button
						type="button"
						className={styles.clear}
						onClick={handleTextClear}
					>
						x
					</button>
				)}
			</div>
			<button
				type="submit"
				aria-label="Clear Search"
				className={styles.submit}
				onClick={handleTextSubmit}
			>
				Search
			</button>
		</form>
	);
};

export default SearchBar;
