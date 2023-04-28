import _ from 'lodash';

export default function solution(content){
  // BEGIN
  const cont = content.split('\n').map((el)=> el.trim().split(',')).slice(1, -1)
  console.log(`Всего людей - ${cont.length}`)
  const arr = _.uniq(cont.map((el)=>{
    return el[el.length - 1] 
  }))
  console.log(`Все порты ${arr.join(' ')}`)
  const sex = [0,0]
  cont.forEach((el)=>{
    el[5] === 'male' ? sex[0] += 1 : sex[1] += 1
  })
  console.log(`Мужчин - ${sex[0]}, Девушек - ${sex[1]}, соотношение мужчин к девушкам - ${(sex[0]/ sex[1]).toString().slice(0,5)}`)
  const surv = [0,0]
  cont.forEach((el)=>{
    el[1] == 0 ? surv[0] +=1  : surv[1] +=1
  })
  console.log(`Выжило примерно ${Math.floor(surv[1] / (cont.length / 100))} процентов пассажиров`)
  const names = cont.flatMap((el)=>{
    const si = el[4].indexOf('.') + 2
    const ei = el[4].indexOf(' ',si)
    const name = el[4].slice(si,ei)
    return name.startsWith('A') ? name : []
  })
  console.log(`Имена всех пассажиров на букву "А" ${names}`)
  // END
}
