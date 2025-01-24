const snowContainer = document.querySelector(".snowContainer");

for(let i=0; i<50; i++){
    const snowflake = document.createElement("div");
    //새로운 요소 snowflake에 snowflake라는 클래스 부여
    snowflake.className="snowflake";
    snowflake.textContent='??';
    
    //랜덤위치.. vw... 화면의 위치중 랜덤하게 떨어지도록
    snowflake.style.left=`${Math.random()*100}vw`;

    //애니메이션 지속시간도 랜덤하게.. 3초부터 6초까지 랜덤하게
    snowflake.style.animationDuration=`${Math.random()*3+3}s`;

    //애니메이션 delay시간도 랜덤하게
    snowflake.style.animationDelay=`${Math.random()*5}s`;

    //snowContanier에 snowflake를 자식으로 추가
    snowContainer.appendChild(snowflake);
}

