//控制用户是否登陆了


const auth = (req,res,next)=>{

    if(req.session.user){
        next()
    }else{
        res.json({
            code:403,
            msg:'登陆状态失效'
        })
    }
}
module.exports = auth