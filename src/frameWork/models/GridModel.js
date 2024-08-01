cb.models.register('GridModel', function (modelType) {
    const gridModel = function (data) {
        const defaults = {
          columns: {},
          dataSource: [],
          rows: [],
          readOnly: true,
          dataSourceMode: 'local',
          columnMode: 'local',
          editMode: 'cell',
          cellState: {},
          rowState: {},
          autoWrap: true,
          mergeCells: false,
          mergeMode: 1,
          mergePosition: 'center',
          mergeSourceName: 'id',
          showAggregates: true,
          showSubtotal: false,
          multiSort: true,
          sortFields: [],
          showCheckBox: true,
          isChooseTable: true,
          multiple: true,
          showRowNo: false,
          showColumnSetting: true,
          pagination: true,
          fullHeight: false, // 当前表格是否撑满整个容器页面
          bLoadPagination: true, /* 是否默认加载分页 */
          delayLoadPageInfo: true, /* 是否默认加载分页 二 */
          showDelayPagination: false, // 控制懒加载分页效果展示与否
          pageInfo: {
            pageSize: 10,
            pageIndex: 1
          },
          independent: false,
          defaultSelectedRowIndexes: false,
          canRowNoChange: true,
          innerUsedAttrs: {
            id: '_id',
            selected: '_selected',
            status: '_status',
          },
          multiRowModel: false, // 表格多行模型
          editRowModels: {},
          showExpand: false,
          actionTipled: typeof actionTipledInitial === 'boolean' ? actionTipledInitial : true,
          delayCellStates: [],
          delayCellValues: [],
          delayInsertRows: [],
          delayUpdateRows: [],
          delayRenderCellValues: [],
          cachePaginationRowData: [], // 缓存分页数据
          selectedKeysSet: new Set([]), // 缓存选中项
          selectedRowsMap: {}, // 时时缓存选中项
          selectedRowsIndex: {}, // 记录每页的选中项的顺序
          hasHandledRow: '', // 已经操作过的行id
          parentRelation: '', // 主子表关系，single时为与主表1：1
          avatarColumns: [], // 图片列得特殊处理地址
          nameformatColumns: [] // 姓名格式特殊处理
        };
    };
    // gridModel.prototype = cb.utils.getPrototype(cb.models.BaseModel.prototype);
    gridModel.prototype.modelType = modelType;

})