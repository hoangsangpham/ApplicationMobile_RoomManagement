const express = require('express');
const router = express.Router()
const user = require('../model/users');
const room = require('../model/rooms');
const renter = require('../model/renters');
const service = require('../model/services');
const problem = require('../model/problems');

module.exports = router;
router.get('/getAll', (req, res) => {
    res.send('Chào các bạn đến với Web API')
})
router.get('/', (req, res) => {
    res.send('Hello API')
})
router.post('/DangKy', async (req, res) => {
    const data = new user({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error){
        res.status(400).json({message: error.message})
    }

})

router.get('/DangNhap/:username/:password', async (req, res) => {
    try {
        ml =req.params;
        console.log(ml)
        const data = await user.findOne(ml);
        res.status(200).json(data)
    }
    catch (error){
        res.status(500).json({message: error.message})
    }

})

router.get('/getAllUser', async (req, res) => {
    try {
        const data = await user.find();
        res.json(data)
    }
    catch (error){
        res.status(500).json({message: error.message})
    }

})

// service
router.post('/AddService', async (req, res) => {
    const data = new service({
        service_name: req.body.service_name,
        service_charge: req.body.service_charge,
        service_unit: req.body.service_unit,
        service_describe: req.body.service_describe
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error){
        res.status(400).json({message: error.message})
    }

})

router.get('/getAllService', async (req, res) => {
    try {
        const data = await service.find();
        res.json(data)
    }
    catch (error){
        res.status(500).json({message: error.message})
    }

})

router.get('/getNameService/:service_name', async (req, res) => {
    try {
        ml = req.params;
        const data = await service.find(ml);
        res.json(data)
    }
    catch (error){
        res.status(500).json({message: error.message})
    }

})

router.get('/getCountDataService', async (req, res) => {
    try {
        const data = await service.countDocuments();
        res.json(data)
    }
    catch (error){
        res.status(500).json({message: error.message})
    }

})

// Renter - Nguoi thue
router.post('/AddRenter', async (req, res) => {
    const data = new renter({
        renter_name: req.body.renter_name,
        renter_phone: req.body.renter_phone,
        renter_dateofbirth: req.body.renter_dateofbirth,
        renter_cccd: req.body.renter_cccd,
        renter_address: req.body.renter_address,
        renter_room: req.body.renter_room
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error){
        res.status(400).json({message: error.message})
    }

})

router.get('/getAllRenter', async (req, res) => {
    try {
        const data = await renter.find();
        res.json(data)
    }
    catch (error){
        res.status(500).json({message: error.message})
    }

})

router.get('/getNameRenter/:renter_name', async (req, res) => {
    try {
        ml = req.params;
        const data = await renter.find(ml);
        res.json(data)
    }
    catch (error){
        res.status(500).json({message: error.message})
    }

})

router.get('/getCountDataRenter', async (req, res) => {
    try {
        const data = await renter.countDocuments();
        res.json(data)
    }
    catch (error){
        res.status(500).json({message: error.message})
    }

})

// Room - Phong
router.post('/AddRoom', async (req, res) => {
    const data = new room({
        room_name: req.body.room_name,
        room_price: req.body.room_price,
        room_status: req.body.room_status,
        room_deposit: req.body.room_deposit,
        room_service: req.body.room_service,
        room_describe: req.body.room_describe
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error){
        res.status(400).json({message: error.message})
    }

})

router.get('/getAllRoom', async (req, res) => {
    try {
        const data = await room.find();
        res.json(data)
    }
    catch (error){
        res.status(500).json({message: error.message})
    }

})

router.get('/getNameRoom/:room_name', async (req, res) => {
    try {
        ml = req.params;
        const data = await room.find(ml);
        res.json(data)
    }
    catch (error){
        res.status(500).json({message: error.message})
    }

})

router.get('/getCountDataRoom', async (req, res) => {
    try {
        const data = await room.countDocuments();
        res.json(data)
    }
    catch (error){
        res.status(500).json({message: error.message})
    }

})

router.get('/getNameRoomNull', async (req, res) => {
    try {
        const data = await room.countDocuments({ room_status: 'Còn trống' }).exec();
        res.json(data)
    }
    catch (error){
        res.status(500).json({message: error.message})
    }

})

router.get('/getAllRoomNull', async (req, res) => {
    try {
        const data = await room.find({ room_status: 'Còn trống' }).exec();
        res.json(data)
    }
    catch (error){
        res.status(500).json({message: error.message})
    }

})

router.post('/UpdateRoom/:room_name', async (req, res) => {
    const roomNameToUpdate = req.params.room_name;
    try {
        const data = await room.updateOne( { room_name: roomNameToUpdate},
        {
          $set: {
            room_status: "Đã ở"
          },
        })
        res.json(data)
    }
    catch (error){
        res.status(500).json({message: error.message})
    }

})

//Sự cố - Problem
router.post('/AddProblem', async (req, res) => {
    const data = new problem({
        problem_room: req.body.problem_room,
        problem_time: req.body.problem_time,
        problem_name: req.body.problem_name,
        problem_status: req.body.problem_status,
        problem_level: req.body.problem_level,
        problem_describe: req.body.problem_describe
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error){
        res.status(400).json({message: error.message})
    }

})

router.get('/getAllProblem', async (req, res) => {
    try {
        const data = await problem.find();
        res.json(data)
    }
    catch (error){
        res.status(500).json({message: error.message})
    }

})

router.get('/getNameProblem/:problem_name', async (req, res) => {
    try {
        ml = req.params;
        const data = await problem.find(ml);
        res.json(data)
    }
    catch (error){
        res.status(500).json({message: error.message})
    }

})

router.get('/getAllProblemRequest', async (req, res) => {
    try {
        const data = await problem.find({ problem_status: 'Đang yêu cầu' }).exec();
        res.json(data)
    }
    catch (error){
        res.status(500).json({message: error.message})
    }

})

router.get('/getAllProblemComplete', async (req, res) => {
    try {
        const data = await problem.find({ problem_status: 'Hoàn thành' }).exec();
        res.json(data)
    }
    catch (error){
        res.status(500).json({message: error.message})
    }

})