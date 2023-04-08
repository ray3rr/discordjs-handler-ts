import * as fs from "fs"
import { PathLike } from "fs"

const readDir : Function = (path : PathLike) => {
    if(fs.existsSync(path)){
        return fs.readdirSync(path)
    } else {
        fs.mkdirSync(path)
        return readDir(path)
    }
}

export default readDir