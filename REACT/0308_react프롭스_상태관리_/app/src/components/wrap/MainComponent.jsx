import React from 'react';
import '../../scss/main.scss';

export default function MainComponent({성적}){

    React.useEffect(()=>{
    //    for(let i=0; i<성적.length; i++){
    //         console.log(`번호:${성적[i].번호} 이름:${성적[i].이름} 수학:${성적[i].수학} 영어:${성적[i].영어} 국어:${성적[i].국어} 총점:${성적[i].수학+성적[i].영어+성적[i].국어}`);
    // }
    // 성적.map((item,idx)=>{
    //     console.log(item.번호,item.이름,item.국어+item.영어+item.수학);
    //}
    })


    const grade = 성적.map((item)=>{
        return(
        <tr key={item.번호}>
            <td>{item.번호}</td>
            <td>{item.이름}</td>
            <td>{item.국어}</td>
            <td>{item.수학}</td>
            <td>{item.영어}</td>
            <td>{item.영어+item.국어+item.수학}</td>
            <td>{Math.round((item.영어+item.국어+item.수학)/3)}</td>
        </tr> 
        )
    })



    return (
        <main id='main'>
            <section id="section1">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>중간고사 성적표</h2>
                        </div>
                        <div className="content">
                            <table>
                                <thead>
                                     <tr>
                                         <th>번호</th>
                                         <th>이름</th>
                                         <th>국어</th>
                                         <th>수학</th>
                                         <th>영어</th>
                                         <th>총점</th>
                                         <th>평균</th>
                                     </tr>
                                </thead>
                                <tbody>
                                   {
                                    grade
                                   }
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section2">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>기말고사 성적표</h2>
                        </div>
                        <div className="content">
                            <table>
                                <thead>
                                     <tr>
                                         <th>번호</th>
                                         <th>이름</th>
                                         <th>국어</th>
                                         <th>수학</th>
                                         <th>영어</th>
                                         <th>총점</th>
                                         <th>평균</th>
                                     </tr>
                                </thead>
                                <tbody>
                                    {   
                                        성적.map((item)=>{
                                            return(
                                            <tr key={item.번호}>
                                                <td>{item.번호}</td>
                                                <td>{item.이름}</td>
                                                <td>{item.국어}</td>
                                                <td>{item.수학}</td>
                                                <td>{item.영어}</td>
                                                <td>{item.영어+item.국어+item.수학}</td>
                                                <td>{Math.round((item.영어+item.국어+item.수학)/3)}</td>
                                            </tr> 
                                            )
                                        })
                                        }
                                    

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
