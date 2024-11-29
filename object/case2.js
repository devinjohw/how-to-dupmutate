// {
//   programming: true,
//   drawing: false,
//   singing: true,
// }

// To
// ['programming', 'singing']

const hobbiesObj = {
  programming: true,
  drawing: false,
  singing: true,
}

Object.keys(hobbiesObj).filter(key => hobbiesObj[key] === true)
// Object.entries(value).filter(([_, value]) => value === true).map(([key]) => key)
