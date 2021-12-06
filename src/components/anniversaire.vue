<template>

  <div id="anniversaire">
    <div class="anniversaire" id="anniv">
      <span style="font-weight: bold; margin-left: 5%;">ANNIVERSAIRE</span>
      <div class="trafic_container">
        <hr style="width: 90%; margin: 0; margin-bottom: 10px;">

        <div class="bloc_container_scnd">
          <ul id="demo">
          </ul>

        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "anniversaire",

}

const arr = [
  {date: '01-03', name: 'Zelal'},
  {date: '01-03', name: 'Eui Jo'},
  {date: '01-09', name: 'Paul'},
  {date: '01-11', name: 'Lea'},
  {date: '01-18', name: 'Inyoung'},
  {date: '02-03', name: 'Aurélien'},
  {date: '02-15', name: 'Sujung'},
  {date: '02-27', name: 'Louis'},
  {date: '03-30', name: 'Mathilde'},
  {date: '04-03', name: 'Alice'},
  {date: '04-04', name: 'Balbine'},
  {date: '04-06', name: 'Anaïs'},
  {date: '04-14', name: 'Roxana'},
  {date: '04-27', name: 'Eric'},
  {date: '05-01', name: 'Malik'},
  {date: '05-06', name: 'Fabrice'},
  {date: '05-08', name: 'Martine'},
  {date: '05-19', name: 'Alexandre'},
  {date: '05-26', name: 'Sarah'},
  {date: '06-19', name: 'Benoît'},
  {date: '06-24', name: 'Adrien'},
  {date: '07-01', name: 'Andréa'},
  {date: '07-27', name: 'Laurent'},
  {date: '07-06', name: 'Nalini'},
  {date: '07-13', name: 'Doris'},
  {date: '07-25', name: 'Marie'},
  {date: '07-28', name: 'Laetitia'},
  {date: '08-14', name: 'Pascal'},
  {date: '09-01', name: 'Damien'},
  {date: '09-23', name: 'Muriel'},
  {date: '10-07', name: 'Zoe'},
  {date: '10-08', name: 'Emmanuel'},
  {date: '10-17', name: 'Sun Hyung'},
  {date: '10-18', name: 'Julien'},
  {date: '10-20', name: 'Christopher'},
  {date: '10-20', name: 'Julien'},
  {date: '10-21', name: 'Jeong Hoon'},
  {date: '11-03', name: 'Fabien'},
  {date: '11-06', name: 'Jean-Baptiste'},
  {date: '11-25', name: 'Mamou'},
  {date: '11-28', name: 'Thomas'},
  {date: '12-19', name: 'Nicolas'},
  {date: '12-22', name: 'Jeong Joon'},
  {date: '06-16', name: 'Hugo'}
];

const fmt = md => md.split('-').map(p => `0${p}`.slice(-2)).join('-');
const now = new Date();
const year = new Date().getFullYear();
const nww = fmt(`${now.getMonth()+1}-${now.getDate()}`);
const nw = new Date(`${year}-${nww}`).getTime();


const ordered = arr.map(({date: d, name}) => ({
  date: d, name, d: `${d < nww ? (year + 1) : year}-${d}`
})).map(({
           d, ...rest
         }) => ({
  ...rest, d, ...{
    t: new Date(d).getTime()
  }
})).sort((a, b) => (a.t - nw) - (b.t - nw)).map(({
                                                   date,
                                                   name
                                                 }) => ({
  date,
  name
}));

console.log(ordered);
//
const nextanniv = ordered.slice(0, 5);
console.log(nextanniv);

var months = ["Janvier", "Fevrirer", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];

let text = "";
nextanniv.forEach(myFunctionAnniv);
window.onload = function(){
document.getElementById("demo").innerHTML = text;
}
function myFunctionAnniv(item, index) {
  let annivMonth = Number((item.date).split("-")[0]) - 1;
  text += "<li>" + item.name + ' ' + (item.date).split("-")[1] + ' ' + months[annivMonth] + "</li>";
}

</script>

<style scoped>
body {
  margin: 0;
}

.anniversaire {
  font-family: "Montserrat", sans-serif;
  margin-top: 20px;
  height: auto;
  background-color: #FFFCF7;
  border-radius: 10px;
  border: solid 1px rgba(223, 83, 31, 0.40);
  box-shadow: 30px 10px 75px 1px rgba(223, 83, 31, 0.30);
  color: rgba(223, 83, 31, 1);
  font-size: 20px;
  padding: 10px;
  width: 95%;
}

.trafic_container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bloc_container_scnd {
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

div.anniversaire > div div {
  padding-bottom: 5px;
}

div.anniversairenuit > div div {
  padding-bottom: 5px;
}
</style>
