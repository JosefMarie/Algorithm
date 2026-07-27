//creating function called info for self introduction

function info(salut){
    console.log(`${salut}, I\'am ${this.name} I study at ${this.school}, in level ${this.level}
        , in ${this.trade}`);
}

const student=
    {name:"Landry", school:"KTSS", level:3, trade:"SOD" }
info.apply(student,['Good after noon']);
