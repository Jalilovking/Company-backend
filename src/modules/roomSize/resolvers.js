const model = require('./model')

module.exports = {
    Query: {
        roomSize: async(_, { room_number, complex_id }) => {
            const arr = []
            // if(complex_id == 0){
            //     return arr
            // }else{
            //     console.log(parseInt(room_number))
            // }
            return await model.getRoomSize(parseInt(room_number), parseInt(complex_id))
        }
    },
    RoomSize: {
        room_size: global => global.roomsize
    }

}