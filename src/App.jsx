import React from "react";
import "./styles.css";

export const App = () => {
    return (
        <>
            <div className="input-area">
                <input praceholder="TODOを入力" />    
                <button>追加</button>
            </div>   
            <div className="incomplete-area">
                <p>未完了のTODO</p>
                <ul>
                    <li>
                        <p>あああ</p>
                        <button>完了</button>
                        <button>削除</button>
                    </li>
                    <li>
                        <p>いいい</p>
                        <button>完了</button>
                        <button>削除</button>
                    </li>
                </ul>
            </div>   
            <div className="complete-area">
                <p>完了済みのTODO</p>
                <ul>
                    <li>
                        <p>ううう</p>
                        <button>戻す</button>
                    </li>
                </ul>
            </div> 
        </>
    );
};