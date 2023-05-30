//@desc     Get all bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public
exports.getBootcamps = (req,res,next)=>{
    res.status(200).json({success:true,message:"Show all the bootcamps"})
}

//@desc     Get single bootcamps
//@route    GET /api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = (req,res,next)=>{
    res.status(200).json({success:true,message:`Show bootcamp with id ${req.params.id}`})
}

//@desc     Create new bootcamp
//@route    POST /api/v1/bootcamps
//@access   Private
exports.createBootcamp = (req,res,next)=>{
    res.status(200).json({success:true,message:"Create new bootcamps"})
}


//@desc     Update a bootcamp
//@route    POST /api/v1/bootcamps/:id
//@access   Private
exports.updateBootcamp = (req,res,next)=>{
    res.status(200).json({success:true,message:`Update BootCamps ${req.params.id}`})
}


//@desc     Delete a bootcamp
//@route    POST /api/v1/bootcamps/:id
//@access   Private
exports.deleteBootcamp = (req,res,next)=>{
    res.status(200).json({success:true,message:`Delete bootcamps ${req.params.id}`})
}