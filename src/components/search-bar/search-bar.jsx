import { useState } from 'react';

import * as styles from './search-bar.module.scss';
import { useGlobalState } from '../../hooks/GlobalState';

const SearchBar = () => {
	const [{ search }, dispatch] = useGlobalState();
	const [text, setText] = useState(search.text);

	// TODO add hotkey to focus/clear input (using useRef)

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

	return (
		<form className={styles.form} onSubmit={handleTextSubmit}>
			<div className={styles.searchRoot}>
				<input
					type="text"
					className={styles.search}
					placeholder="Search for an entity..."
					onChange={handleTextInput}
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
