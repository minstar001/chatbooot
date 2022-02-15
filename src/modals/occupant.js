import BootstrapModal from "plugins/modal/base.js";
import tpl_occupant_modal from "./templates/occupant.js";
import { _converse, api } from "@converse/headless/core";

import './modals.scss';


const OccupantModal = BootstrapModal.extend({
    id: "muc-occupant",

    initialize () {
        BootstrapModal.prototype.initialize.apply(this, arguments);
        if (this.model) {
            this.listenTo(this.model, 'change', this.render);
        }
        /**
         * Triggered once the OccupantModal has been initialized
         * @event _converse#occupantModalInitialized
         * @type { Object }
         * @example _converse.api.listen.on('occupantModalInitialized', data);
         */
        api.trigger('occupantModalInitialized', { 'model': this.model, 'message': this.message });
    },

    toHTML () {
        const model = this.model ?? this.message;
        const jid = model?.get('jid');
        const vcard = _converse.vcards.findWhere({ jid });
        const display_name = model?.getDisplayName();
        const nick = model.get('nick');
        const occupant_id = model.get('occupant_id');
        const role = this.model?.get('role');
        const affiliation = this.model?.get('affiliation');
        const hats = this.model?.get('hats')?.length ? this.model.get('hats') : null;
        return tpl_occupant_modal({ jid, vcard, display_name, nick, occupant_id, role, affiliation, hats });
    }
});

_converse.OccupantModal = OccupantModal;

export default OccupantModal;
