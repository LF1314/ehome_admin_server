
var express = require('express');
var router = express.Router();
var userdata = require('../demomodel/user')
const auth = require('../control/auth')

//更改个人信息
router.put('/change',(req,res)=>{
    var newuserinfo = req.body
    var idcard = newuserinfo.idcard
    if(req.session.userdata){
        const pass =  req.session.userdata.pass 
        newuserinfo.pass = pass
           userdata.remove({idcard}).then(data=>{
              userdata.create(newuserinfo).then(data=>{
                  data.pass='youcountsethat'
                  res.json({
                      code:200,
                      msg:'修改成功',
                     data
                  })
              })
           })
    }else{
        res.json({
            code:400,
            msg:'用户身份过期，请重新登陆再来修改！'
        })
    }
})

//退出登录接口
router.get('/logout',(req,res)=>{
    req.session.userdata = null
    res.json({
        code:200,
        msg:'退出登录成功！'
    })
})
//注册接口
router.post('/add',auth,async(req,res,next)=>{
   let {
    avurl,
    adress,
    age,
    birthday,
    branchName,
    leaderson,
    phone,
    qqNum,
    salery,
    nation,
    sex,
    hometown,
    wxnum,
    jobrank,
    education,
    pass,
    username,
    partyIdentity,
    idcard
   } = req.body
   try {
       const usess = await userdata.create({
        avurl,
        adress,
        age,
        birthday,
        branchName,
        leaderson,
        phone,
        qqNum,
        salery,
        nation,
        sex,
        hometown,
        wxnum,
        jobrank,
        education,
        pass,
        username,
        partyIdentity,
        idcard
       })
       res.json({
           code:200,
           msg:'注册成功',
           data:usess
       })
   } catch (error) {
       res.json({
           code:400,
           msg:'error',
           error
       })
   }
})

//修改密码 那
router.post('/changpas' ,(req,res)=>{
    let {idcard , newpass } = req.body
    console.log(newpass)
    userdata.update({idcard:idcard},{$set:{pass:newpass}}).then(data=>{
     req.session.userdata =null
           res.json({
               code:200,
               msg:'密码修改成功',
               data
           })
    }).catch(err=>{
        res.json({
            code:400,
            msg:'修改失败',
            err
        })
    })
})
//获取用户列表

router.get('/',async(req,res)=>{
    let {pn = 1,size = 10} = req.body
    pn =parseInt(pn)
    size = parseInt(size)
    try {
        let userlist =await userdata.find()
        .skip((pn-1)*size)
        .limit(size)
        .sort({_id:-1})
        res.json({
            code:200,
            msg:'success',
            data:userlist
        })
    } catch (error) {
        res.json({
            code:400,
            error
        })
    }

})
module.exports = router