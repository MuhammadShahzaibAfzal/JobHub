import { config } from "dotenv";
config();

const { PORT, DEBUG_MODE, DB_URL } = process.env;

export { PORT, DEBUG_MODE, DB_URL };
