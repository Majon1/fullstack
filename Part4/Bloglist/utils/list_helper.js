const dummy = (blogs) => {
    return 1
}
const favoriteBlog = (array) => {
let a = 0
let t = 0
for (let i = 0; i < array.length; i++)
{
    if (array[i].likes > a)
    {
        a = array[i].likes
        t = i
    }
} 
return array[t].title, array[t].author, array[t].likes
}

const totalLikes = (array) => {
    if (array.length === 0)
    {  return array.length === 0
        ? 0
        : array.reduce(reducer, 0) / array.length
    }
    if (array.length === 1)
    {
        return array[0].likes
    }
    if (array.length > 1)
    {
        let sum = 0
        for (let i = 0; i < array.length; i++) 
        {
        sum += array[i].likes
        }
        return sum
    }
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
}