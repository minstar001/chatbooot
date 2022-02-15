/**
 * @copyright 2020, the Converse.js contributors
 * @license Mozilla Public License (MPLv2)
 */
import ChatBox from './model.js';
import MessageMixin from './message.js';
import ModelWithContact from './model-with-contact.js';
import chat_api from './api.js';
import { Collection } from "@converse/skeletor/src/collection";
import { _converse, api, converse } from '../../core.js';
import { autoJoinChats, handleMessageStanza, onClearSession, openChat, registerMessageHandlers } from './utils.js';


converse.plugins.add('converse-chat', {
    /* Optional dependencies are other plugins which might be
     * overridden or relied upon, and therefore need to be loaded before
     * this plugin. They are called "optional" because they might not be
     * available, in which case any overrides applicable to them will be
     * ignored.
     *
     * It's possible however to make optional dependencies non-optional.
     * If the setting "strict_plugin_dependencies" is set to true,
     * an error will be raised if the plugin is not found.
     *
     * NB: These plugins need to have already been loaded via require.js.
     */
    dependencies: ['converse-chatboxes', 'converse-disco'],

    initialize () {
        // Configuration values for this plugin
        // ====================================
        // Refer to docs/source/configuration.rst for explanations of these
        // configuration settings.
        api.settings.extend({
            'allow_message_corrections': 'all',
            'allow_message_retraction': 'all',
            'allow_message_styling': true,
            'auto_join_private_chats': [],
            'clear_messages_on_reconnection': false,
            'filter_by_resource': false,
            'prune_messages_above': undefined,
            'pruning_behavior': 'unscrolled',
            'send_chat_markers': ["received", "displayed", "acknowledged"],
            'send_chat_state_notifications': true,
        });

        _converse.Message = ModelWithContact.extend(MessageMixin);
        _converse.Messages = Collection.extend({
            model: _converse.Message,
            comparator: 'time'
        });

        Object.assign(_converse, { ChatBox, handleMessageStanza });
        Object.assign(api, chat_api);

        _converse.router.route('converse/chat?jid=:jid', openChat);

        api.listen.on('chatBoxesFetched', autoJoinChats);
        api.listen.on('presencesInitialized', registerMessageHandlers);
        api.listen.on('clearSession', onClearSession);
    }
});
