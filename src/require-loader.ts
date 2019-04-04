declare var require: any;

let result: any = {};

const DevExpress = require("devextreme/bundles/modules/core");

require("devextreme/events/click");
require("devextreme/events/contextmenu");
require("devextreme/events/double_click");
require("devextreme/events/drag");
require("devextreme/events/hold");
require("devextreme/events/hover");
require("devextreme/events/pointer");
require("devextreme/events/swipe");
require("devextreme/events/transform");

result.data = DevExpress.data = require("devextreme/bundles/modules/data");
result.ui = DevExpress.ui = require("devextreme/bundles/modules/ui");
result.dialog = require("devextreme/ui/dialog");
result.notify = require("devextreme/ui/notify");

DevExpress.ui.dialog = result.dialog;
DevExpress.ui.notify = result.notify;

DevExpress.integration = {
  date: require("devextreme/localization/date")
};

result.dxAccordion = require("devextreme/ui/accordion");
result.dxActionSheet = require("devextreme/ui/action_sheet");
result.dxAutocomplete = require("devextreme/ui/autocomplete");
result.dxBarGauge = require("devextreme/viz/bar_gauge");
result.dxBox = require("devextreme/ui/box");
result.dxBullet = require("devextreme/viz/bullet");
result.dxButton = require("devextreme/ui/button");
result.dxButtonGroup = require("devextreme/ui/button_group");
result.dxCalendar = require("devextreme/ui/calendar");
result.dxChart = require("devextreme/viz/chart");
result.dxCheckBox = require("devextreme/ui/check_box");
result.dxCircularGauge = require("devextreme/viz/circular_gauge");
result.dxColorBox = require("devextreme/ui/color_box");
result.dxContextMenu = require("devextreme/ui/context_menu");
result.dxDataGrid = require("devextreme/ui/data_grid");
result.dxDateBox = require("devextreme/ui/date_box");
result.dxDeferRendering = require("devextreme/ui/defer_rendering");
result.dxDrawer = require("devextreme/ui/drawer");
result.dxDropDownBox = require("devextreme/ui/drop_down_box");
result.dxFileUploader = require("devextreme/ui/file_uploader");
result.dxFilterBuilder = require("devextreme/ui/filter_builder");
result.dxForm = require("devextreme/ui/form");
result.dxFunnel = require("devextreme/viz/funnel");
result.dxGallery = require("devextreme/ui/gallery");
result.dxHtmlEditor = require("devextreme/ui/html_editor");
result.dxLinearGauge = require("devextreme/viz/linear_gauge");
result.dxList = require("devextreme/ui/list");
result.dxLoadIndicator = require("devextreme/ui/load_indicator");
result.dxLoadPanel = require("devextreme/ui/load_panel");
result.dxLookup = require("devextreme/ui/lookup");
result.dxMap = require("devextreme/ui/map");
result.dxMenu = require("devextreme/ui/menu");
result.dxMultiView = require("devextreme/ui/multi_view");
result.dxNavBar = require("devextreme/ui/nav_bar");
result.dxNumberBox = require("devextreme/ui/number_box");
result.dxPanorama = require("devextreme/ui/panorama");
result.dxPieChart = require("devextreme/viz/pie_chart");
result.dxPivot = require("devextreme/ui/pivot");
result.dxPivotGrid = require("devextreme/ui/pivot_grid");
result.dxPivotGridFieldChooser = require("devextreme/ui/pivot_grid_field_chooser");
result.dxPolarChart = require("devextreme/viz/polar_chart");
result.dxPopover = require("devextreme/ui/popover");
result.dxPopup = require("devextreme/ui/popup");
result.dxProgressBar = require("devextreme/ui/progress_bar");
result.dxRadioGroup = require("devextreme/ui/radio_group");
result.dxRangeSelector = require("devextreme/viz/range_selector");
result.dxRangeSlider = require("devextreme/ui/range_slider");
result.dxRecurrenceEditor = require("devextreme/ui/recurrence_editor");
result.dxResizable = require("devextreme/ui/resizable");
result.dxResponsiveBox = require("devextreme/ui/responsive_box");
result.dxSankey = require("devextreme/viz/sankey");
result.dxScheduler = require("devextreme/ui/scheduler");
result.dxScrollView = require("devextreme/ui/scroll_view");
result.dxSelectBox = require("devextreme/ui/select_box");
result.dxSlideOut = require("devextreme/ui/slide_out");
result.dxSlideOutView = require("devextreme/ui/slide_out_view");
result.dxSlider = require("devextreme/ui/slider");
result.dxSparkline = require("devextreme/viz/sparkline");
result.dxSwitch = require("devextreme/ui/switch");
result.dxTabPanel = require("devextreme/ui/tab_panel");
result.dxTabs = require("devextreme/ui/tabs");
result.dxTagBox = require("devextreme/ui/tag_box");
result.dxTextArea = require("devextreme/ui/text_area");
result.dxTextBox = require("devextreme/ui/text_box");
result.dxTileView = require("devextreme/ui/tile_view");
result.dxToast = require("devextreme/ui/toast");
result.dxToolbar = require("devextreme/ui/toolbar");
result.dxTooltip = require("devextreme/ui/tooltip");
result.dxTreeList = require("devextreme/ui/tree_list");
result.dxTreeMap = require("devextreme/viz/tree_map");
result.dxTreeView = require("devextreme/ui/tree_view");
result.dxValidationGroup = require("devextreme/ui/validation_group");
result.dxValidationSummary = require("devextreme/ui/validation_summary");
result.dxValidator = require("devextreme/ui/validator");
result.dxVectorMap = require("devextreme/viz/vector_map");

export default result;