const state = {perscent: "perscent", targetAmount: "targetAmount", term: "term"};
var currentState = state.targetAmount;

const formItems = {
    baseAmount: createFormItem("baseAmount"),
    replenishmentAmount: createFormItem("replenishmentAmount"),
    targetAmount: createFormItem("targetAmount"),
    term: createFormItem("term"),
    perscent: createFormItem( "perscent"),
}

const switcherItems = {
    perscent: createSwitcherItem("perscent"),
    targetAmount: createSwitcherItem("targetAmount"),
    term: createSwitcherItem("term"),
}