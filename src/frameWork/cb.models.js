// MDF编程模型
window.cb = window.cb || {};

//= =====================================================
cb.models = {};
cb.models.register = function (modelType, func) {
  cb.models[modelType] = func(modelType);
};

cb.models.DataStates = {
  Insert: 'Insert',
  Update: 'Update',
  Delete: 'Delete',
  Unchanged: 'Unchanged'
};

// require('./models/BaseModel');
// require('./models/SimpleModel');
// require('./models/ListModel');
// require('./models/ReferModel');
// require('./models/TagModel');
// require('./models/FilterModel');
// require('./models/TreeModel');
// require('./models/GridModel');
// require('./models/ContainerModel');
// require('./models/CharacterModel');
// require('./models/GridModel');
