import React, { useState } from 'react';

/* 
  【Todoのデータ構成】
 ・key：Todoを特定するID（String）
 ・text：Todoの内容（String）
 ・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import { getKey } from "../lib/util";

function Todo() {
  const [items, putItems] = React.useState([
    /* テストコード 開始 */
    { key: getKey(), text: '日本語の宿題', done: false },
    { key: getKey(), text: 'reactを勉強する', done: false },
    { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);

  const [filter, setFilter] = useState('ALL');

  const filteredItems = items.filter(item => {
    if (filter === 'ALL') return true;

    if (filter === 'DONE') return item.done;

    if (filter === 'TODO') return !item.done;
  });

  const handleChange = (value) => setFilter(value);

  const changeTextColor = (e, id) => {
    const newItems = items.map(
      (item) => {
        if (item.key === id) {
          return {
            ...item,
            done: e.target.checked
          }
        }
        return item;
      }
    );
    putItems(newItems);
  }

  const addItems = (text) => {
    let newItems = {
      key: getKey(),
      text: text,
      done: false
    }
    putItems([
      ...items,
      newItems
    ]);
  }

  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <Input addItems={addItems} />
      <Filter changeFilter={handleChange} filterValue={filter} />
      {filteredItems.map(
        item => (
          <TodoItem item={item} key={item.key} clickFn={changeTextColor} />
        )
      )}
      <div className="panel-block">
        {filteredItems.length} items
      </div>
    </div>
  );
}

export default Todo;