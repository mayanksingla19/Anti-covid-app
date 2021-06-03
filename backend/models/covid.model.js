

module.exports = mongoose => {
    const coviSchema = mongoose.model("covi",
        mongoose.Schema({
            Id_proof:String,
        Id_number:String,
        name:String,
        D_O_B:String
        }, { timestamps: true})
    );
    return coviSchema;
}