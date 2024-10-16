import jwt from 'jsonwebtoken'

const generateToken = (res,userId) =>{
    const token = jwt.sign({userId}, process.env.jwt_secret,{expiresIn: "30d",})

    res.cookie('jwt',token,{
        httpOnly: true,
        secure: process.env.Node_Env !== 'development',
        sameSide: 'strict',
        maxAge: 30 * 24* 60* 1000
    })

    return token
}

export default generateToken;