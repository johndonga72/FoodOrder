import mongose from "mongose";
const connect = async () => {
    try {
        await mongose.connect(process.env.MONGO);
    } catch (error) {
        throw new Error("Connection failed!");
    }
};
export default connect;