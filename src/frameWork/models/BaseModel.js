cb.models.register('BaseModel', function (modelType) {
    const baseModel = function (data) {
        const propertyNames = [];
        if (data)
          for (const propertyName in data)
            propertyNames.push(propertyName);
        let _data = cb.utils.extend({}, { listeners: [], propertyNames: propertyNames, events: {}, cache: {} }, data);
    
        this._get_data = function (key) {
          if (!key) return;
          return _data[key];
        };
    
        this._set_data = function (key, value, update) {
          if (!key) return;
          if (update && propertyNames.indexOf(key) < 0)
            propertyNames.push(key);
          _data[key] = value;
        };
    
        this._del_data = function (key) {
          if (!key) return;
          delete _data[key];
        };
    
        this._cls_data = function () {
          _data = null;
        };
    
        this._data = function () {
          return _data;
        };
        this.__data = _data;
    };
    baseModel.prototype.modelType = modelType;
})