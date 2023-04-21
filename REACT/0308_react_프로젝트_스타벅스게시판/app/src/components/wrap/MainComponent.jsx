import React from 'react';
import '../../sass/main.scss';

export default function MainComponent({게시판}){
    React.useEffect(()=>{
        // 게시판.map((item)=>{
        //     console.log(item.제목);
        // })
    })
    
    const starbucks = 게시판.map((item)=>{
        return(
            <tr key={item}>
            <td>{item.NO}</td>
            <td>{item.제목}</td>
            <td>{item.날짜}</td>
            <td>{item.조회수}</td>
        </tr>
        )
    })
    return (
        <main id='main'>
            <section id="section1">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>공지사항</h2>
                        </div>
                        <div className="content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>NO</th>
                                        <th>제목</th>
                                        <th>날짜</th>
                                        <th>조회수</th>
                                    </tr>
                                </thead>
                                <tbody>
                                
                                   {starbucks}    
                                 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

