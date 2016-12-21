import {DataModel} from '../model/data.model'

export class DataService{

    private _data :DataModel;

    get data(): DataModel {
        return this._data;
    }

    set data(value: DataModel) {
        this._data = value;
    }
}