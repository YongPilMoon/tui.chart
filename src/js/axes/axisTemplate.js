/**
 * @fileoverview This is templates or axis view.
 * @author NHN Ent.
 *         FE Development Team <dl_javascript@nhnent.com>
 */

var templateMaker = require('../helpers/templateMaker');

var tags = {
    HTML_AXIS_TICK: '<div class="ne-chart-tick" style="{{ cssText }}"></div>',
    HTML_AXIS_LABEL: '<div class="ne-chart-label{{ addClass }}" style="{{ cssText }}"><span>{{ label }}</span></div>'
};

module.exports = {
    tplAxisTick: templateMaker.template(tags.HTML_AXIS_TICK),
    tplAxisLabel: templateMaker.template(tags.HTML_AXIS_LABEL)
};
