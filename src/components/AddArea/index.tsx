import { useState, KeyboardEvent } from "react";
import * as C from './styles';

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({onEnter}:Props) => {

    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === 'Enter' && inputText !== '') { {/* console.log(e.code) */}
           onEnter(inputText);
           setInputText(''); 
        }
    }

    return (
        <C.Container>
            <div className="image">
            ➕
            <input type="text"
                placeholder="Adicione uma tarefa" 
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
            </div>
        </C.Container>
    );
}