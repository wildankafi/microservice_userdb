const bcrypt = require('bcryptjs');
const { User}  = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();


module.exports = async(req, res) => {
    const schema = {
        name :'string|empty:false',
        email: 'email|empty:false',
        password: 'string|min:6',
        profesion: 'string|optional',
        avatar: 'string|optional'
    };

    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }


    const id = req.params.id;
    const user = await User.findByPk(id);
    if (!user) {
        return res.status(404).json({
            status:'error',
            message:'User Not found'
        });
    }


    const email = req.body.email;
    if (!email) {
        const checkEmail = await User.findByOne({
            where:{email}
        });

        if(checkEmail && email != user.email){
            return res.status(409).json({
                status:'error',
                message: 'Email Already Exist'
            });
        }
    }

    const password = await bcrypt.hash(req.body.password,10);
    const {name, profesion,avatar} = req.body;
    await user.update({
        email,
        password,
        name,
        profesion,
        avatar
    });

    return res.json({
        status:'Success',
        data:{
            id:user.id,
            email,
            password,
            name,
            profesion,
            avatar
        }
    })
};