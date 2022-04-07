const { gql } = require('apollo-server')

module.exports = gql`
    type RoomSize {
        room_size: Int
    }
    extend type Query {
        roomSize(room_number: String complex_id: String): [RoomSize]!
    }
`