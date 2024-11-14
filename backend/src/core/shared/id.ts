import {v4 as uuidV4} from "uuid";

export default class Id{

    static novo () {
        return uuidV4();
    }

}