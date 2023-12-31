const mongoose = require('mongoose');


const UserSchema= mongoose.Schema(
{
    name:{
        type: 'string',
        required: true,
    },
    first_name:{
        type:'string',
         // required:true,
    },
email:{
    type:'string',
    required:true

},
provider:{
    type:'string',
   

},
providerId:{
    type: 'string',
    
},
password:{
    type:'string',
   // required:true
},
accessToken:{
    type:'string'
},
refreshToken:{
    type:'string'
}
    
}

,{
    timestamps: true
}
);
module.exports= mongoose.models.User || mongoose.model('User',UserSchema)