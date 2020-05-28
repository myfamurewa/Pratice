// step 1 find each occurrence of a name
// step 2 take the order from each occurrence of the name
// step 3 create a new array
// step 4 create an object with the name and an array with all the stuff they ordered
// step 5 insert the object into the array
// step 6 move on to the next name
//step 7 repeat steps 1-6

const singleOrder = function(arr) {
  let singleOrderArr = [];
  //   let nameArr = [];
  function isName(arr, name) {
    return arr.name === name;
  }
  for (let i = 0; i < arr.length; i++) {
    if (singleOrderArr.includes(arr[i].name)) {
      const singlePlace = singleOrderArr.findIndex(isName(arr[i], arr[i].name));
      console.log(singlePlace);
      singleOrderArr.findIndex(isName(arr[i], arr[i].name)) = {
        name: arr[i].name,
        order: [...singlePlace.order, arr[i].order]
      };
    } else {
      //   nameArr.push(arr[i]);
      singleOrderArr.push({ name: arr[i].name, order: [arr[i].order] });
    }
  }
  console.log(singleOrderArr);
  return singleOrderArr;
};

const orders = [
  { name: "Malon", order: "milk" },
  { name: "Malon", order: "hay" },
  { name: "Link", order: "arrows" },
  { name: "Link", order: "bombs" },
  { name: "Link", order: "shield" },
  { name: "Saria", order: "deku seeds" }
];

singleOrder(orders);

// singleOrderArr.filter(customer => customer.name === arr[i].name).length > 0

// const neighborhood = {
//   knexCourt: {
//     200: 4,
//     201: 6,
//     401: {
//       A: 5,
//       B: 2,
//       C: 3
//     },
//     404: 0
//   },
//   lessLane: {
//     100: 3,
//     103: {
//       A: 2,
//       B: 3
//     },
//     105: 4
//   },
//   propsPlace: {
//     60: 1,
//     70: {
//       "#1": 4,
//       "#2": 3,
//       "#3": 6
//     },
//     80: 8,
//     85: {
//       A: 4,
//       B: 4,
//       C: 5,
//       D: 3
//     }
//   }
// };

// function countResidents(neighborhood) {
//   let totalResidents = 0
//   function countResidentsHelper(partOfNeighborhood) {
//     // if  it is possible to directly count the people at the current location, do so.
//     if (  )
//     {
//     }

//     // have helpers count up all the residents in a smaller part of the neighborhood
//     else
//     {
//               for ( keys in partOfNeighborhood)
//                   {
//                       totalResidentsHere += countResidentsHelper(sublocation); // don't change this line
//                     }
//           }
//         }function countResidents(neighborhood) {
//           return _________________________;
//           function countResidentsHelper(partOfNeighborhood) {
//             // if  it is possible to directly count the people at the current location, do so.
//       if ( _________________ )
//       {
//           }

//       // have helpers count up all the residents in a smaller part of the neighborhood
//       else
//       {
//               for ( _________ in partOfNeighborhood)
//                   {
//                     totalResidentsHere += countResidentsHelper(sublocation); // don't change this line
//                   }
//           }
//   }
// }
// return totalResidents;
// }
//first we want to search through the neighborhood and obtain the values we have access to
// then we want to delegate the task to the individuals who have access to that part of the neighborhood and then get the values that they found
// if there are parts of  the neighborhood that these individuals don't have access to we want them to delegate the duty to find the residents of that area  and report back to them
// eventually we want to return the total number of residents found

// function countResidentsV2(neighborhood) {
//   let totalResidents = 0;
//   countResidentsHelper(neighborhood);
//   return totalResidents;
//   function countResidentsHelper(partOfNeighborhood) {
//     // if  it is possible to directly count the people at the current location, do so.
//     if (typeof partOfNeighborhood === "number") {
//       totalResidents += partOfNeighborhood
//     }

//     // have helpers count up all the residents in a smaller part of the neighborhood
//     else {
//       for (let sublocationID in partOfNeighborhood) {
//         let sublocation = Object.values[sublocationID]
//         countResidentsHelper(sublocation); // don't change this line
//       }
//     }
//     return totalResidents
//   }
// }



const neighborhoodV2 = {
  knexCourt: {
      200: {
          adults: 2,
          children: 2
      },
      201: {
          seniors: 2,
          adults: 2,
          children: 2
      },
      401: {
          A: {
              seniors: 2,
              adults: 1,
              children: 2
          },
          B: {
              adults: 1,
              children: 1
          },
          C: {
              adults: 1,
              children: 2
          },
      },
      404: {}
  },
  lessLane: {
      100: {
          adults: 1,
          children: 2
      },
      103: {
          A: {
              adults: 2
          },
          B: {
              seniors: 2,
              children: 1
          },
      },
      105: {
          seniors: 4
      }
  },
  propsPlace: {
      60: { seniors: 1,
      },
      70: {
          "#1": {
              adults: 4
          },
          "#2": {
              seniors: 2,
              adults: 1
          },
          "#3": {
              adults: 3,
              children: 3
          },
      },
      80: {
        seniors: 4,
        adults: 2,
        children: 2  
      },
      85: {
          A: {
              adults: 4
          },
          B: {
              adults: 1,
              children: 3
          },
          C: {
              seniors: 2,
              adults: 2,
              children: 1
          },
          D: {
              seniors: 3
          },
      },
  },
​
}


// l