import "shared/components/image-picker.js";
import { __ } from 'i18n';
import { _converse } from  "@converse/headless/core";
import { html } from "lit";
import { modal_header_close_button } from "plugins/modal/templates/buttons.js";

const omemo_page = () => html`
    <div class="tab-pane" id="omemo-tabpanel" role="tabpanel" aria-labelledby="omemo-tab">
        <converse-omemo-profile></converse-omemo-profile>
    </div>`;


export default (o) => {
    const heading_profile = __('Your Profile');
    const i18n_email = __('Email');
    const i18n_fullname = __('Full Name');
    const i18n_jid = __('XMPP Address');
    const i18n_nickname = __('Nickname');
    const i18n_role = __('Role');
    const i18n_save = __('Save and close');
    const i18n_role_help = __('Use commas to separate multiple roles. Your roles are shown next to your name on your chat messages.');
    const i18n_url = __('URL');
    const i18n_omemo = __('OMEMO');
    const i18n_profile = __('Profile');

    const navigation =
        html`<ul class="nav nav-pills justify-content-center">
            <li role="presentation" class="nav-item">
                <a class="nav-link active" id="profile-tab" href="#profile-tabpanel" aria-controls="profile-tabpanel" role="tab" data-toggle="tab">${i18n_profile}</a>
            </li>
            <li role="presentation" class="nav-item">
                <a class="nav-link" id="omemo-tab" href="#omemo-tabpanel" aria-controls="omemo-tabpanel" role="tab" data-toggle="tab">${i18n_omemo}</a>
            </li>
        </ul>`;

    return html`
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="user-profile-modal-label">${heading_profile}</h5>
                    ${modal_header_close_button}
                </div>
                <div class="modal-body">
                    <span class="modal-alert"></span>
                    ${_converse.pluggable.plugins['converse-omemo']?.enabled(_converse) ? navigation : ''}
                    <div class="tab-content">
                        <div class="tab-pane active" id="profile-tabpanel" role="tabpanel" aria-labelledby="profile-tab">
                            <form class="converse-form converse-form--modal profile-form" action="#">
                                <div class="row">
                                    <div class="col-auto">
                                        <converse-image-picker .data="${{image: o.image, image_type: o.image_type}}" width="128" height="128"></converse-image-picker>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label class="col-form-label">${i18n_jid}:</label>
                                            <div>${o.jid}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="vcard-fullname" class="col-form-label">${i18n_fullname}:</label>
                                    <input id="vcard-fullname" type="text" class="form-control" name="fn" value="${o.fullname || ''}"/>
                                </div>
                                <div class="form-group">
                                    <label for="vcard-nickname" class="col-form-label">${i18n_nickname}:</label>
                                    <input id="vcard-nickname" type="text" class="form-control" name="nickname" value="${o.nickname || ''}"/>
                                </div>
                                <div class="form-group">
                                    <label for="vcard-url" class="col-form-label">${i18n_url}:</label>
                                    <input id="vcard-url" type="url" class="form-control" name="url" value="${o.url || ''}"/>
                                </div>
                                <div class="form-group">
                                    <label for="vcard-email" class="col-form-label">${i18n_email}:</label>
                                    <input id="vcard-email" type="email" class="form-control" name="email" value="${o.email || ''}"/>
                                </div>
                                <div class="form-group">
                                    <label for="vcard-role" class="col-form-label">${i18n_role}:</label>
                                    <input id="vcard-role" type="text" class="form-control" name="role" value="${o.role || ''}" aria-describedby="vcard-role-help"/>
                                    <small id="vcard-role-help" class="form-text text-muted">${i18n_role_help}</small>
                                </div>
                                <hr/>
                                <div class="form-group">
                                    <button type="submit" class="save-form btn btn-primary">${i18n_save}</button>
                                </div>
                            </form>
                        </div>
                        ${ _converse.pluggable.plugins['converse-omemo']?.enabled(_converse) ? omemo_page() : '' }
                    </div>
                </div>
            </div>
        </div>
    `;
}
