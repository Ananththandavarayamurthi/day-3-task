const jsonString = ' {"name" : "ananth", "department" : "civil engineering", "Year of passed out" : "2019"}';

const profile = JSON.parse(jsonString);
let arr= Object.entries(profile);

// for loop

for(i=0;i<=arr.length;i++){
    console.log(arr[i])
}
//for in

for(let key in profile){
    console.log(`${key}=>${profile[key]}`);
}

//for of

for (const [key,value] of arr.entries()) {
    console.log(`${value[0]} =>${value[1]}`);
}

//for each
Object.keys(profile).forEach(key => {
    const value = profile[key]
    console.log(`${key},=>${value}`) // "someKey" "some value", "hello" "world", "js javascript foreach object"
  })

