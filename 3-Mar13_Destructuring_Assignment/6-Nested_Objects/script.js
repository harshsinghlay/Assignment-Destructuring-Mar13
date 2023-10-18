

const Extractor =(person )=> {
    const { name, address: { street } } = person;
    return {name,street};
}

const person  = {
    name:"Harsh",
    age:21,
    address:{
        street: "8,jai prakash nagar",
        city: "ghaziabad",
        state:"uttar pradesh", 
    },
}

const newPerson = Extractor(person);
console.log(newPerson.name);
console.log(newPerson.street);
