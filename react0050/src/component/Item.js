class Riddle{
    constructor(id, description, option1, option2, option3, option4, correct){
    this.id=id;
    this.description=description;
    this.option1=option1;
    this.option2=option2;
    this.option3=option3;
    this.option4=option4;
    this.correct=correct;
}
}
const Item = ()=>{ 
const riddles = [new Riddle(1,"В каком месяце люди меньше всего спят?","январь", "март", "февраль", "ягода", "февраль"),new Riddle(2, "Что становится острее, чем больше вы его используете?","нож","камень","человек","мозг","мозг"),new Riddle(3, "Продолжите пословицу: «Знает кошка…»","Да мыши не знают","Почем фунт лиха","Где собака зарыта","Чье мясо съела","Чье мясо съела"),new Riddle(4, "сколько секунд в одном часу","2000","3600","360","незнаю","3600")]
const items= riddles.map(riddle => <div><li> {riddle.description}</li>
<input type="radio" id={riddle.option1} name={riddle.id} value={riddle.option1} checked />
    <label for={riddle.option1}>{riddle.option1}</label>
<input type="radio" id={riddle.option2} name={riddle.id} value={riddle.option2} checked />
    <label for={riddle.option2}>{riddle.option2}</label>
<input type="radio" id={riddle.option3} name={riddle.id} value={riddle.option3} checked />
    <label for={riddle.option3}>{riddle.option3}</label>
<input type="radio" id={riddle.option4} name={riddle.id} value={riddle.option4} checked />
    <label for={riddle.option4}>{riddle.option4}</label>
</div>
);





return<> 
<ul>{items} </ul> 
<button   onClick="alert()"> ответы
</button>

    </> 
}
export default Item
