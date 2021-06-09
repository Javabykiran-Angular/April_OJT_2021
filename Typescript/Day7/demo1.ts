
//Json => java script Object Notation
// Data is in key & value pair

var obj={
    fname:'sumit',
    "lname":"Raokhande",    
    id:9
}

//There are 2 method to parse a data from json
//1 dot operator
// 2 square operator

//1 dot operator
// console.log(`
// ---------------------------
//  First Name :: ${obj.fname}
//  Last Name :: ${obj.lname}
//  ID ::        ${obj.id}
// `);

//2 Square Ooerator

// console.log(`
// -------------------------
//   First name :: ${obj["fname"]}
//   Last Name ::  ${obj["lname"]}
//   ID        ::  ${obj["id"]}
// `);



//Array of Object

var arrobj=[
    {
        fname:'sumit',
        lname:"Raokhande",    
        id:9,
        marks:[40,42,45,47],
        address:{
            area:'Ambegaon',
            pincode:411015,
            city:'pune'
        },
        arrlist:[
            {
                dept:'Devloper',
                country:'India'
            },
            {
                dept:'Marketing',
                country:'USA'
            }
        ]

    },
    {
        fname:'Kiran',
        lname:"Raokhande",    
        id:6,
        marks:[55,65,85,47],
        address:{
            area:'Karve Nagar',
            pincode:411016,
            city:'pune'
        },
        arrlist:[
            {
                dept:'IT',
                country:'Germany'
            },
            {
                dept:'Admin',
                country:'India'
            }
        ]
    },
    {
        fname:'Spruha',
        lname:"Raokhande",    
        id:3,
        marks:[55,65,85,95],
        address:{
            area:'Z Bridge',
            pincode:411020,
            city:'pune'
        },
        arrlist:[
            {
                dept:'CEO',
                country:'India'
            },
            {
                dept:'Marketing',
                country:'USA'
            }
        ]
    }
];


// console.log(`
// ---------Array of Object----------
// First Name  :: ${arrobj[0].fname}
// Last Name   :: ${arrobj[0].lname}
// ID          :: ${arrobj[0].id}

// `);

// for (let i = 0; i < arrobj.length; i++) {
  
//     console.log(`
// ---------Array of Object----------
// First Name  :: ${arrobj[i].fname}
// Last Name   :: ${arrobj[i].lname}
// ID          :: ${arrobj[i].id}
// marks       :: ${arrobj[i].marks.join(" ")}
// -------------Address-------------
//     Araea :: ${arrobj[i].address.area}
//     Pin code:: ${arrobj[i].address.pincode}
//     City    :: ${arrobj[i].address.city}
//     =============================================

// `);

// for (let j = 0; j < arrobj[i].arrlist.length; j++) {

//     console.log(`
//         Array List
//         Department :: ${arrobj[i].arrlist[j].dept}
//         Country     :: ${arrobj[i].arrlist[j].country}
//         =====================================
//     `);
// }

// }



//Industry Type Json

var obj1={
    status:"",
    error:"Invalid data",
    data:[
        {
            name:'Motorola',
            Price:18000,
            quantity:1
        },
        {
            name:'One Plus',
            Price:28000,
            quantity:1
        },
        {
            name:'Samsung',
            Price:19000,
            quantity:1
        }
    ]
}

if(obj1.status.toLowerCase() =="success"){
    for (let i = 0; i < obj1.data.length; i++) {
        console.log(`
        Product Name :: ${obj1.data[i].name}
        Price        :: ${obj1.data[i].Price}
        Quantity     :: ${obj1.data[i].quantity}
        `);
        
    }
}else{
    console.log("Error=> "+obj1.error);
}

