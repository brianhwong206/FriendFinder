var friendsArray = [
    {
        name: "Jerry Mouse",
        photo : "https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png",
        scores : ["5", "2", "5", "1", "1", "1", "5", "1", "5", "5"]
    },
    {
        name: "Foghorn Leghorn",
        photo : "https://upload.wikimedia.org/wikipedia/en/a/a0/Foghorn_Leghorn.png",
        scores : ["5", "1", "3", "4", "5", "1", "1", "5", "5", "5"]
    },
    {
        name: "Droopy Dog",
        photo : "https://upload.wikimedia.org/wikipedia/en/f/fd/Droopy_dog.png",
        scores : ["5", "2", "3", "4", "5", "2", "2", "4", "4", "5"]
    },
    {
        name: "Stitch",
        photo : "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Stitch_%28Lilo_%26_Stitch%29.svg/220px-Stitch_%28Lilo_%26_Stitch%29.svg.png",
        scores : ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
    },
    {
        name: "Quagmire",
        photo : "https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/Glenn_Quagmire.png/220px-Glenn_Quagmire.png",
        scores : ["5", "1", "1", "3", "1", "1", "1", "5", "1", "3"]
    }
]// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;