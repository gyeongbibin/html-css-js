const snowContainer = document.querySelector(".snowContainer");

for(let i=0; i<50; i++){
    const snowflake = document.createElement("div");
    //���ο� ��� snowflake�� snowflake��� Ŭ���� �ο�
    snowflake.className="snowflake";
    snowflake.textContent='??';
    
    //������ġ.. vw... ȭ���� ��ġ�� �����ϰ� ����������
    snowflake.style.left=`${Math.random()*100}vw`;

    //�ִϸ��̼� ���ӽð��� �����ϰ�.. 3�ʺ��� 6�ʱ��� �����ϰ�
    snowflake.style.animationDuration=`${Math.random()*3+3}s`;

    //�ִϸ��̼� delay�ð��� �����ϰ�
    snowflake.style.animationDelay=`${Math.random()*5}s`;

    //snowContanier�� snowflake�� �ڽ����� �߰�
    snowContainer.appendChild(snowflake);
}

