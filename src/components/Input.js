import React, { useState } from 'react';
/* 
  【inputコンポーネント】
 ・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
 ・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input({ addItems }) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleAdd = (e) => {
    if (e.key === 'Enter') {
      addItems(text);
      setText('');
    }
  }

  return (
    <div className="panel-block">
      <input
        className='add-items'
        type='text'
        maxLength={100}
        placeholder='新しいTodoを追加してください'
        onKeyDown={(e) => handleAdd(e)}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default Input;
