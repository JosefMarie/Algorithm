function info(salut){
    console.log(`${salut}, I am ${this.name}. I study at ${this.school}, in level ${this.level}, in ${this.trade}`);
}

const students = [
    {name:"Landry", school:"KTSS", level:3, trade:"SOD" },
    {name:"Teta", school:"KTSS", level:3, trade:"SOD"},
    {name:"Alsene", school:"KTSS", level:4, trade:"SOD"},
    {name:"Birori", school:"KTSS", level:4, trade:"SOD"}
];

// Call info() for each student
students.forEach(function(s) {
  info.call(s, 'Good afternoon');
});