import React, { useState } from 'react'

const Form = ({ addTodos }) => {
    //入力値が変更されたら、変数valueに入力値を保存する
    const [value, setValue] = useState('')
    const handleSubmit = e => {
        e.preventDefault()　　//defaultの最読み込みをさせないようにするため　　　　

        /**
          *    もし、valueの値が空であれば、handleSubmitの関数の実行をとめる
          *   関数の実行を止めるときはreturnすれば以降の関数の処理は実行されない
          */
        if (!value.trim('')) {//もし、valueから最初と最後から空白文字列を取り除いた値がfalsyだったら、関数の実行を止める。
            return alert('入力値が入っていません')
        }
        addTodos(value)
        //valueの値を空にしたい
        setValue('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={value} //変数を当てはめたい
                type='text'
                onChange={e => {
                    setValue(e.target.value)
                }}
            />
        </form>
    )
}

export default Form