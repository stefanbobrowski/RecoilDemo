import React from 'react';
import { useRecoilState } from 'recoil';
import CharacterCount from './CharacterCount';
import { textState } from '../../atoms/text';

function CharacterCounter() {
	const [text, setText] = useRecoilState(textState);

	const onChange = (event) => {
		setText(event.target.value);
	};

	return (
		<div className='character-counter'>
			<h3>Character Counter:</h3>
			<div>
				<input type='text' value={text} onChange={onChange} />
				<br />
				Echo: {text}
				<br />
				<CharacterCount />
			</div>
		</div>
	);
}

export default CharacterCounter;
