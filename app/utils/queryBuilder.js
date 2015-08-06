export default function(query) {
  let q = {}
  Object.keys(query).forEach((key) => {
    if (query[key]) {
      q[key] = query[key]
    }
  })

  return q
}