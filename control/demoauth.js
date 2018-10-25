// 移动端的登陆控制

const cret = require('../democontrol/creat')
const jwt = require('jsonwebtoken')

const demoauth = (req,res,next)=>{
    const { token } = req.headers || req.query || req.body  
    if(token){
        jwt.verify(token,cret,function(err,decoded){
            if(err){
                console.log(err)
                res.json({
                    code:403,
                    msg:'登陆状态失效'
                })
                return
            }else{
              next()
            }
        })

    }else{
        res.json({
            code:403,
            msg:'未携带token'
        })
    }
}

module.exports = demoauth