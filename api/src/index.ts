import { init, start } from "./server";
import * as dotenv from "dotenv";

dotenv.config();

init().then(() => start());
