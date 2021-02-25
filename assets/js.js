const sum = 50_000;
const annualRate = 50;
const monthlyRate = +(annualRate / 12/100).toFixed(2); // месячная процентная ставка
let term  = 24;
let BSum = sum;

//let debt = sum;
let sumRate = 0; //сумма переплаты 
let bodyPart = +(sum*monthlyRate).toFixed(2); // тело ежемесячно 

let a = +(sum*(monthlyRate*((1+monthlyRate)**term))/(((1+monthlyRate)**term)-1)).toFixed(2);

sumRate =+( a * term - sum).toFixed(2);
 
console.log(` Ежемесячный платеж : ${a} грн.  Cумма переплаты: ${sumRate} грн `);

for(let i = 0; i<=term;i++){
	let RMonth = 0;
	let BMonth = 0;

	RMonth = +(BSum*monthlyRate).toFixed(2);
	BMonth = +(a - RMonth).toFixed(2);
	BSum = +(BSum - BMonth).toFixed(2);


	console.log(`Сумма кредита ${BSum} Процентов в месяц ${RMonth}  тело кредита в месяц${BMonth} `);


}













// console.log(a)


// console.log(bodyPart);






// for(let i = 0; i<=term;i++){
// 	let percentPartF =  +(debt *monthlyRate).toFixed(2); // расчитываем проценты в  месяц 
// 	sumRate += percentPartF;


// }

