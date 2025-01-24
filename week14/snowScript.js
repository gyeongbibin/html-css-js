const snow = document.querySelector(".snow-container");
for(let i=0;i<50;i++){
    const snowflake =document.createElement("div")
    snowflake.className="snowflake"
    snowflake.textContent ='❄️';

    //랜덤위치
    snowflake.style.left=`${Math.random()*100}vw`
    //애니메이션 지속시간 랜덤 3초에서 6초
    snowflake.style.animationDuration=`${Math.random()*3+3}s`;
    //애니메이션 딜레이시간 랜덤 0초에서 5초 
    snowflake.style.animationDelay=`${Math.random()*5}s`;
    
    snow.appendChild(snowflake);
}
