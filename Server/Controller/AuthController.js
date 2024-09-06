
//POST
const authLogin = (req, res) => {
    try{
        res.status(200).json({msg: "bobo kaba"})
    }catch (err){
        res.status(400).json({error: err})
    }
}

module.exports = {
    authLogin
}
