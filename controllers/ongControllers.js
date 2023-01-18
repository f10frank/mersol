//bring in prisma

const prisma = require('../prisma/index');


// ONG singup

exports.singup = async(req, res) => {
    try {
        const {name, lastName} = req.body;
        //check
        if(!name | !lastName) {
            console.log('Please, provide all fields')
        }

        const ong = await prisma.ong.create({
            data:{
                name,
                lastName
            }
        })
        res.send(ong)
    } catch (error) {
        console.log(error)
    }
}