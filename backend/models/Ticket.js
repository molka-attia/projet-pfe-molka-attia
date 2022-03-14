const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
    description: {type: String, required: false},
    priorite: {type: String, required: false},
    demandeur: {type: String, required: false},
    assignetech:{type: String, required: false},
    etat:{type: String, required: false},
    opened:{type: String, required: false},
});

module.exports = mongoose.model('Ticket', ticketSchema);
// id?: string;
// description?:string;
// priorite?:string;
// demandeur?:string;
// assignetech?:string;
// etat?:string;
// opened?:string;