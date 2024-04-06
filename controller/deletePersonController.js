const {searchFacesAndDelete} = require('./deleteController')
const deletePerson=async(req,res)=>{
    try {
        await searchFacesAndDelete(req, res);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }

}
module.exports={deletePerson};